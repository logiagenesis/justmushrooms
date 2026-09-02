// axe-core accessibility audit across every rendered page, driven by Playwright/Chromium.
import fs from 'node:fs'; import path from 'node:path'; import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const TOOLS = process.env.JM_TOOLS || '/tmp/claude-0/-home-user-justmushrooms/c0067de6-8042-5e50-8705-a8ff053016a9/scratchpad/tools/node_modules';
const { chromium } = require(path.join(TOOLS, 'playwright-core'));
const axeSource = fs.readFileSync(path.join(TOOLS, 'axe-core/axe.min.js'), 'utf8');
const BASE = process.env.BASE || 'http://127.0.0.1:4173';
const DIST = path.resolve(new URL('.', import.meta.url).pathname, '../dist');
const pages = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) { if (e.name !== 'assets') walk(p); } else if (e.name.endsWith('.html')) pages.push('/' + path.relative(DIST, p).replace(/index\.html$/, '').replace(/\.html$/, '')); } })(DIST);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
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
