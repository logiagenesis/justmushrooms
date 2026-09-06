// axe-core accessibility audit across every rendered page, driven by Playwright/Chromium.
import fs from 'node:fs'; import path from 'node:path'; import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// playwright-core and axe-core are devDependencies of preview/package.json, so `npm ci` in
// preview/ is the only setup this needs. JM_TOOLS stays supported as an override for
// environments that keep a shared browser/tooling directory outside the repo.
const resolveTool = (name) => {
  const tools = process.env.JM_TOOLS;
  if (tools) return path.join(tools, name);
  return require.resolve(name);
};
const { chromium } = require(resolveTool('playwright-core'));
const axeSource = fs.readFileSync(resolveTool('axe-core/axe.min.js'), 'utf8');
const BASE = process.env.BASE || 'http://127.0.0.1:4173';
const DIST = path.resolve(new URL('.', import.meta.url).pathname, '../dist');
const pages = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) { if (e.name !== 'assets') walk(p); } else if (e.name.endsWith('.html')) pages.push('/' + path.relative(DIST, p).replace(/index\.html$/, '').replace(/\.html$/, '')); } })(DIST);
// Prefer an explicit CHROME_PATH, then playwright-core's own resolution, then any
// chromium-<rev> already unpacked under PLAYWRIGHT_BROWSERS_PATH (the pinned revision
// need not match the installed playwright-core), then a system Chromium.
const browsersRoot = process.env.PLAYWRIGHT_BROWSERS_PATH;
const unpacked = browsersRoot && fs.existsSync(browsersRoot)
  ? fs.readdirSync(browsersRoot).filter(d => d.startsWith('chromium-')).sort()
      .map(d => path.join(browsersRoot, d, 'chrome-linux', 'chrome'))
  : [];
const chromePath = process.env.CHROME_PATH
  || [chromium.executablePath(), ...unpacked, '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome']
       .find(p => p && fs.existsSync(p));
if (!chromePath) throw new Error('No Chromium found. Set CHROME_PATH, or run `npx playwright install chromium`.');
const browser = await chromium.launch({ executablePath: chromePath, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
let total = 0; const report = [];
for (const viewport of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'tablet', width: 834, height: 1112 }, { name: 'mobile', width: 390, height: 844 }]) {
  // reducedMotion: scroll-reveal elements settle instantly, so axe measures the resting state
  // rather than a mid-fade frame — and this also exercises the prefers-reduced-motion path.
  const ctx = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const url of pages) {
    await page.goto(BASE + url, { waitUntil: 'load' });
    await page.evaluate(() => { document.querySelectorAll('.reveal').forEach(e => e.classList.add('is-visible')); window.scrollTo(0, document.body.scrollHeight); });
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.addScriptTag({ content: axeSource });
    const res = await page.evaluate(async () => await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] } }));
    for (const v of res.violations) { total += v.nodes.length; report.push({ viewport: viewport.name, url, id: v.id, impact: v.impact, help: v.help, count: v.nodes.length, sample: v.nodes[0]?.html?.slice(0, 140) }); }
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync(path.join(path.dirname(DIST), 'reports/axe.json'), JSON.stringify(report, null, 1));
console.log(`axe: ${pages.length} pages x 3 viewports, ${total} violations`);
const byId = {}; for (const r of report) byId[r.id] = (byId[r.id] || 0) + r.count;
for (const [id, n] of Object.entries(byId).sort((a, b) => b[1] - a[1])) console.log(' ', id, n, '—', report.find(r => r.id === id).help, '|', report.find(r => r.id === id).sample);
process.exit(report.some(r => ['critical', 'serious'].includes(r.impact)) ? 1 : 0);
