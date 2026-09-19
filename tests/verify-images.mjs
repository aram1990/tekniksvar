import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';

const DIST_DIR = path.join(process.cwd(), 'dist');
const PORT = 4321;
const BASE_URL = `http://127.0.0.1:${PORT}`;

// Minimal zero-dependency static file server
function createStaticServer() {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.xml': 'application/xml',
    '.json': 'application/json',
  };

  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl.endsWith('/')) {
      reqUrl += 'index.html';
    }

    let filePath = path.join(DIST_DIR, reqUrl);
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '/index.html')) {
      filePath = filePath + '/index.html';
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(PORT, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

async function runBrowserTest() {
  console.log('=== STARTING PERMANENT REPOSITORY IMAGE RENDER TEST ===');

  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Error: ${DIST_DIR} directory does not exist. Run 'npm run build' first.`);
    process.exit(1);
  }

  const server = await createStaticServer();
  console.log(`Static HTTP server running at ${BASE_URL}`);

  const networkErrors = [];
  let checkedCardImages = 0;
  let checkedHeroImages = 0;

  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Listen for image HTTP error responses
    page.on('response', (response) => {
      const url = response.url();
      if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico'].some((ext) => url.toLowerCase().includes(ext))) {
        if (response.status() >= 400) {
          networkErrors.push(`${response.status()} ${url}`);
        }
      }
    });

    // Check category pages & article cards
    const categoryRoutes = ['/guider/', '/windows/', '/android/', '/ai/', '/appar/', '/problem/', '/jamforelser/'];
    for (const route of categoryRoutes) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });
      const cards = page.locator('.card img');
      const count = await cards.count();
      for (let i = 0; i < count; i++) {
        const img = cards.nth(i);
        await img.scrollIntoViewIfNeeded();
        await page.waitForTimeout(30);

        const info = await img.evaluate((el) => ({
          complete: el.complete,
          currentSrc: el.currentSrc,
          width: el.getBoundingClientRect().width,
          height: el.getBoundingClientRect().height,
          isSvg: el.currentSrc.endsWith('.svg'),
          naturalWidth: el.naturalWidth,
        }));

        if (!info.complete || info.width === 0 || info.height === 0) {
          throw new Error(`Card image broken on route ${route}: ${info.currentSrc}`);
        }
        if (!info.currentSrc.startsWith(`${BASE_URL}/images/`)) {
          throw new Error(`Card image src is not a local asset: ${info.currentSrc}`);
        }
        if (!info.isSvg && info.naturalWidth === 0) {
          throw new Error(`Raster card image naturalWidth is 0: ${info.currentSrc}`);
        }
        checkedCardImages++;
      }
    }

    // Check all 32 articles with hero images
    const articlesDir = path.join(process.cwd(), 'src/content/articles');
    const files = fs.readdirSync(articlesDir);
    const articlesWithHero = [];

    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const slug = file.slice(0, -3);
      const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
      if (content.includes('heroImage:')) {
        articlesWithHero.push(slug);
      }
    }

    console.log(`Verifying hero image DOM rendering for ${articlesWithHero.length} articles...`);

    for (const slug of articlesWithHero) {
      const url = `${BASE_URL}/artiklar/${slug}/`;
      await page.goto(url, { waitUntil: 'networkidle' });

      const heroImg = page.locator('figure img');
      await heroImg.waitFor({ state: 'visible', timeout: 5000 });

      const info = await heroImg.evaluate((el) => ({
        complete: el.complete,
        currentSrc: el.currentSrc,
        width: el.getBoundingClientRect().width,
        height: el.getBoundingClientRect().height,
        isSvg: el.currentSrc.endsWith('.svg'),
        naturalWidth: el.naturalWidth,
      }));

      if (!info.complete || info.width === 0 || info.height === 0) {
        throw new Error(`Hero image broken on article /artiklar/${slug}/: ${info.currentSrc}`);
      }
      if (!info.currentSrc.startsWith(`${BASE_URL}/images/`)) {
        throw new Error(`Hero image src is not a local asset on /artiklar/${slug}/: ${info.currentSrc}`);
      }
      if (!info.isSvg && info.naturalWidth === 0) {
        throw new Error(`Raster hero image naturalWidth is 0 on /artiklar/${slug}/: ${info.currentSrc}`);
      }

      checkedHeroImages++;
    }

    await browser.close();

    if (networkErrors.length > 0) {
      console.error('Network errors detected during browser test:');
      for (const err of networkErrors) {
        console.error(`  - ${err}`);
      }
      process.exit(1);
    }

    console.log(`SUCCESS: Verified ${checkedCardImages} card images and ${checkedHeroImages} article hero images in browser render test.`);
  } finally {
    server.close();
  }
}

runBrowserTest().catch((err) => {
  console.error('Browser render test failed:', err);
  process.exit(1);
});
