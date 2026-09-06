// Full-page screenshots of the rendered theme, for design review.
import path from 'node:path'; import fs from 'node:fs'; import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// Same resolution as tests/axe.mjs: playwright-core is a devDependency of
// preview/package.json, so `npm ci` in preview/ is the only setup this needs.
const resolveTool = (name) => (process.env.JM_TOOLS ? path.join(process.env.JM_TOOLS, name) : require.resolve(name));
const { chromium } = require(resolveTool('playwright-core'));
const BASE = process.env.BASE || 'http://127.0.0.1:4173';
const OUT = path.resolve(new URL('.', import.meta.url).pathname, '../reports/shots');
fs.mkdirSync(OUT, { recursive: true });
const targets = [['/', 'home'], ['/collections/all', 'shop'], ['/products/lions-mane-mushroom-tincture-50ml', 'product'], ['/species/lions-mane', 'species'], ['/pages/species', 'species-index'], ['/pages/mushroom-finder', 'finder'], ['/grid-test', 'grid-test']];
const browsersRoot = process.env.PLAYWRIGHT_BROWSERS_PATH;
const unpacked = browsersRoot && fs.existsSync(browsersRoot)
  ? fs.readdirSync(browsersRoot).filter((d) => d.startsWith('chromium-')).sort()
      .map((d) => path.join(browsersRoot, d, 'chrome-linux', 'chrome'))
  : [];
const chromePath = process.env.CHROME_PATH
  || [chromium.executablePath(), ...unpacked, '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome']
       .find((p) => p && fs.existsSync(p));
if (!chromePath) throw new Error('No Chromium found. Set CHROME_PATH, or run `npx playwright install chromium`.');
const b = await chromium.launch({ executablePath: chromePath, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
for (const [w, label] of [[1440, 'desktop'], [834, 'tablet'], [390, 'mobile']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  for (const [url, name] of targets) {
    if (label !== 'desktop' && !['home', 'shop', 'product', 'grid-test'].includes(name)) continue;
    await p.goto(BASE + url, { waitUntil: 'load' });
    await p.evaluate(() => { document.querySelectorAll('.reveal').forEach(e => e.classList.add('is-visible')); });
    await p.waitForTimeout(500);
    await p.screenshot({ path: path.join(OUT, `${name}-${label}.png`), fullPage: true });
    console.log('shot', `${name}-${label}.png`);
  }
  await ctx.close();
}
await b.close();
