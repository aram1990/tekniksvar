import fs from 'node:fs';
import path from 'node:path';

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

function checkMagicBytesAndDimensions(filePath, isHero = false) {
  if (!fs.existsSync(filePath)) {
    return { valid: false, reason: `File does not exist at ${filePath}` };
  }

  const stats = fs.statSync(filePath);
  if (stats.size === 0) {
    return { valid: false, reason: 'File is 0 bytes (zero-byte asset)' };
  }

  const buf = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.svg') {
    const text = buf.toString('utf8').trim();
    if (!text.includes('<svg') || !text.includes('</svg>')) {
      return { valid: false, reason: 'SVG is invalid XML (missing <svg> root element or unclosed tag)' };
    }
    return { valid: true, type: 'SVG', size: stats.size };
  }

  if (ext === '.png') {
    if (
      buf.length < 8 ||
      buf[0] !== 0x89 ||
      buf[1] !== 0x50 ||
      buf[2] !== 0x4e ||
      buf[3] !== 0x47 ||
      buf[4] !== 0x0d ||
      buf[5] !== 0x0a ||
      buf[6] !== 0x1a ||
      buf[7] !== 0x0a
    ) {
      return { valid: false, reason: 'PNG signature/magic bytes mismatch or file is corrupted' };
    }
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    if (isHero && (width < 600 || height < 300)) {
      return { valid: false, reason: `Raster hero image dimensions (${width}x${height}) are below minimum 600x300 threshold` };
    }
    return { valid: true, type: 'PNG', width, height, size: stats.size };
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    if (buf.length < 3 || buf[0] !== 0xff || buf[1] !== 0xd8 || buf[2] !== 0xff) {
      return { valid: false, reason: 'JPEG SOI marker/magic bytes mismatch or file is corrupted' };
    }
    let offset = 2;
    let width = 0;
    let height = 0;
    while (offset < buf.length) {
      if (buf[offset] !== 0xff) break;
      const marker = buf[offset + 1];
      if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2 || marker === 0xc3) {
        height = buf.readUInt16BE(offset + 5);
        width = buf.readUInt16BE(offset + 7);
        break;
      }
      const len = buf.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
    if (isHero && (width > 0 && height > 0) && (width < 600 || height < 300)) {
      return { valid: false, reason: `Raster hero image dimensions (${width}x${height}) are below minimum 600x300 threshold` };
    }
    return { valid: true, type: 'JPEG', width, height, size: stats.size };
  }

  if (ext === '.webp') {
    if (
      buf.length < 12 ||
      buf.toString('ascii', 0, 4) !== 'RIFF' ||
      buf.toString('ascii', 8, 12) !== 'WEBP'
    ) {
      return { valid: false, reason: 'WebP RIFF signature mismatch or file cannot be decoded' };
    }
    const chunkType = buf.toString('ascii', 12, 16);
    let width = 0;
    let height = 0;
    if (chunkType === 'VP8 ') {
      if (buf.length >= 30) {
        width = buf.readUInt16LE(26) & 0x3fff;
        height = buf.readUInt16LE(28) & 0x3fff;
      }
    } else if (chunkType === 'VP8L') {
      if (buf.length >= 25) {
        const b0 = buf[21];
        const b1 = buf[22];
        const b2 = buf[23];
        const b3 = buf[24];
        width = 1 + (((b1 & 0x3f) << 8) | b0);
        height = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      }
    } else if (chunkType === 'VP8X') {
      if (buf.length >= 30) {
        width = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
        height = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
      }
    }
    if (isHero && (width > 0 && height > 0) && (width < 600 || height < 300)) {
      return { valid: false, reason: `Raster hero image dimensions (${width}x${height}) are below minimum 600x300 threshold` };
    }
    return { valid: true, type: 'WEBP', width, height, size: stats.size };
  }

  if (ext === '.ico') {
    if (buf.length < 4 || buf[0] !== 0 || buf[1] !== 0 || buf[2] !== 1 || buf[3] !== 0) {
      return { valid: false, reason: 'ICO magic header mismatch' };
    }
    return { valid: true, type: 'ICO', size: stats.size };
  }

  return { valid: false, reason: `Unsupported or unknown image file extension: ${ext}` };
}

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
  const result = checkMagicBytesAndDimensions(fullPath, false);
  if (!result.valid) {
    logError('static-asset', assetPath, result.reason);
  }
}

// 2. Check articles
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

  // Check 1: heroImageAlt present
  if (!heroImageAlt || heroImageAlt.trim() === '') {
    logError(slug, heroImage, 'heroImageAlt is missing or empty');
  }

  // Check 2: Credit / Source pairing
  if (heroImageCredit && !heroImageSource) {
    logError(slug, heroImage, 'heroImageCredit exists without corresponding heroImageSource');
  }
  if (heroImageSource && !heroImageCredit) {
    logError(slug, heroImage, 'heroImageSource exists without corresponding heroImageCredit');
  }

  // Check 3: File check on disk
  const relPath = heroImage.startsWith('/') ? heroImage.slice(1) : heroImage;
  const diskPath = path.join(PUBLIC_DIR, relPath);

  const fileCheck = checkMagicBytesAndDimensions(diskPath, true);
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
