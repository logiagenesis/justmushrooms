// Full-page screenshots of the rendered theme, for design review.
import path from 'node:path'; import fs from 'node:fs'; import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const TOOLS = process.env.JM_TOOLS || '/tmp/claude-0/-home-user-justmushrooms/c0067de6-8042-5e50-8705-a8ff053016a9/scratchpad/tools/node_modules';
const { chromium } = require(path.join(TOOLS, 'playwright-core'));
const BASE = process.env.BASE || 'http://127.0.0.1:4173';
const OUT = path.resolve(new URL('.', import.meta.url).pathname, '../reports/shots');
fs.mkdirSync(OUT, { recursive: true });
const targets = [['/', 'home'], ['/collections/all', 'shop'], ['/products/lions-mane-mushroom-tincture-50ml', 'product'], ['/species/lions-mane', 'species'], ['/pages/species', 'species-index'], ['/pages/mushroom-finder', 'finder'], ['/grid-test', 'grid-test']];
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
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
