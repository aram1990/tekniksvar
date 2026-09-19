import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

const ROOT_DIR = process.cwd();
const ARTICLES_DIR = path.join(ROOT_DIR, 'src/content/articles');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

let hasErrors = false;
let totalChecked = 0;
let validCount = 0;
let errorCount = 0;

function logError(articleSlug, heroImagePath, reason) {
  hasErrors = true;
  errorCount++;
  console.error(`\nERROR:\nArticle:\n  ${articleSlug}\nheroImage:\n  ${heroImagePath}\nReason:\n  ${reason}\n`);
}

async function validateAndDecodeImage(filePath, isHero = false) {
  if (!fs.existsSync(filePath)) {
    return { valid: false, reason: `File does not exist at ${filePath}` };
  }

  const stats = fs.statSync(filePath);
  if (stats.size === 0) {
    return { valid: false, reason: 'File is 0 bytes (zero-byte asset)' };
  }

  const ext = path.extname(filePath).toLowerCase();

  // 1. SVG XML Validation
  if (ext === '.svg') {
    const xmlContent = fs.readFileSync(filePath, 'utf8');

    // Strict XML Syntax Validation
    const validationResult = XMLValidator.validate(xmlContent, {
      allowBooleanAttributes: true,
    });

    if (validationResult !== true) {
      const errDetail = validationResult.err
        ? `Line ${validationResult.err.line}: ${validationResult.err.msg}`
        : 'Invalid XML structure';
      return { valid: false, reason: `SVG XML syntax validation failed: ${errDetail}` };
    }

    // Root Element Validation
    try {
      const parser = new XMLParser({
        ignoreAttributes: false,
        parseAttributeValue: false,
      });
      const parsed = parser.parse(xmlContent);
      if (!parsed || !parsed.svg) {
        return { valid: false, reason: 'SVG document does not contain a valid <svg> root element' };
      }
    } catch (e) {
      return { valid: false, reason: `SVG XML parsing error: ${e.message}` };
    }

    return { valid: true, type: 'SVG', size: stats.size };
  }

  // 2. ICO Validation
  if (ext === '.ico') {
    const buf = fs.readFileSync(filePath);
    if (buf.length < 4 || buf[0] !== 0 || buf[1] !== 0 || buf[2] !== 1 || buf[3] !== 0) {
      return { valid: false, reason: 'ICO magic header mismatch or corrupted favicon file' };
    }
    return { valid: true, type: 'ICO', size: stats.size };
  }

  // 3. Raster Pixel Decoding via sharp (PNG, JPEG, WebP, etc.)
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      if (!metadata.format || !metadata.width || !metadata.height) {
        return { valid: false, reason: 'Unable to read raster metadata (image header unparseable)' };
      }

      // Verify file extension matches actual image format
      const normalizedFormat = metadata.format === 'jpeg' ? 'jpg' : metadata.format;
      const expectedExt = ext.slice(1) === 'jpeg' ? 'jpg' : ext.slice(1);
      if (normalizedFormat !== expectedExt) {
        return {
          valid: false,
          reason: `File extension (${ext}) does not match true decoded image format (${metadata.format})`,
        };
      }

      // Full binary pixel decode to catch corrupted/truncated payloads
      await image.raw().toBuffer();

      // Dimension check for raster hero images
      if (isHero && (metadata.width < 600 || metadata.height < 300)) {
        return {
          valid: false,
          reason: `Raster hero image dimensions (${metadata.width}x${metadata.height}) are below minimum 600x300 threshold`,
        };
      }

      return {
        valid: true,
        type: metadata.format.toUpperCase(),
        width: metadata.width,
        height: metadata.height,
        size: stats.size,
      };
    } catch (e) {
      return { valid: false, reason: `Raster pixel decoding failed (corrupted or truncated file): ${e.message}` };
    }
  }

  return { valid: false, reason: `Unsupported image file extension: ${ext}` };
}

async function runValidation() {
  // 1. Check core static assets
  const staticAssets = [
    'public/favicon.ico',
    'public/favicon.svg',
    'public/favicon-48x48.png',
    'public/favicon-96x96.png',
    'public/favicon-192x192.png',
    'public/images/logo.svg',
    'public/images/og-default.png',
  ];

  for (const assetPath of staticAssets) {
    const fullPath = path.join(ROOT_DIR, assetPath);
    const result = await validateAndDecodeImage(fullPath, false);
    if (!result.valid) {
      logError('static-asset', assetPath, result.reason);
    }
  }

  // 2. Check all published markdown articles
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const articleFiles = fs.readdirSync(ARTICLES_DIR);

  for (const file of articleFiles) {
    if (!file.endsWith('.md')) continue;

    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(ARTICLES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) continue;

    const fm = fmMatch[1];

    const getField = (name) => {
      const m = fm.match(new RegExp('^' + name + ':\\s*(.*)$', 'm'));
      if (!m) return undefined;
      let val = m[1].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      return val;
    };

    const heroImage = getField('heroImage');
    const heroImageAlt = getField('heroImageAlt');
    const heroImageCredit = getField('heroImageCredit');
    const heroImageSource = getField('heroImageSource');

    if (!heroImage) {
      if (heroImageAlt || heroImageCredit || heroImageSource) {
        logError(slug, 'N/A', 'Article frontmatter defines image metadata (alt/credit/source) but heroImage is missing');
      }
      continue;
    }

    totalChecked++;

    // Check A: Alt text presence
    if (!heroImageAlt || heroImageAlt.trim() === '') {
      logError(slug, heroImage, 'heroImageAlt is missing or empty');
    }

    // Check B: Credit / Source pairing
    if (heroImageCredit && !heroImageSource) {
      logError(slug, heroImage, 'heroImageCredit exists without corresponding heroImageSource');
    }
    if (heroImageSource && !heroImageCredit) {
      logError(slug, heroImage, 'heroImageSource exists without corresponding heroImageCredit');
    }

    // Check C: Full image file validation & pixel decoding
    const relPath = heroImage.startsWith('/') ? heroImage.slice(1) : heroImage;
    const diskPath = path.join(PUBLIC_DIR, relPath);

    const fileCheck = await validateAndDecodeImage(diskPath, true);
    if (!fileCheck.valid) {
      logError(slug, diskPath, fileCheck.reason);
    } else {
      validCount++;
    }
  }

  console.log(`\n=== TEKNIKSVAR IMAGE INTEGRITY VALIDATION ===`);
  console.log(`Total hero images checked: ${totalChecked}`);
  console.log(`Valid: ${validCount}`);
  console.log(`Errors: ${errorCount}`);

  if (hasErrors) {
    console.error('\nImage validation FAILED. Fix the errors above before building.');
    process.exit(1);
  } else {
    console.log('Image validation PASSED with 0 errors.\n');
    process.exit(0);
  }
}

runValidation().catch((err) => {
  console.error('Fatal validation error:', err);
  process.exit(1);
});
