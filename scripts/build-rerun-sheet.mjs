// Emits docs/21-image-rerun-sheet.md: only the images still outstanding after the 02/09/2026
// Drive batches, with their prompts taken verbatim from data/image-manifest.csv so a re-run
// matches what already worked. Regenerate with: node scripts/build-rerun-sheet.mjs
import fs from 'node:fs';

const csv = fs.readFileSync(new URL('../data/image-manifest.csv', import.meta.url), 'utf8');
// minimal RFC4180 parse - fields are quoted and may contain commas, newlines and "" escapes
const parse = (text) => {
  const rows = []; let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
};
const [head, ...body] = parse(csv);
const byFile = {};
for (const r of body) {
  if (!r[0]) continue;
  byFile[r[0]] = Object.fromEntries(head.map((h, i) => [h, r[i]]));
}

const MISSING_BOTH = [
  ['hero-forest.jpg', 'The home page hero - the single most important image on the site. Absent from both batches.'],
  ['hero-forest-mobile.jpg', 'The vertical crop of the same scene. Absent from both batches.'],
  ['page-index-process.jpg', 'The home page image-with-text block. Absent from both batches.'],
  ['page-sourcing-hero.jpg', 'Absent from both batches.'],
  ['page-sourcing-detail.jpg', 'Absent from both batches.'],
  ['page-species-hero.jpg', 'Absent from both batches.'],
  ['page-mushroom-finder-hero.jpg', 'Absent from both batches.'],
];
const MISSING_B2 = [
  ['page-disclaimer-hero.jpg', 'Present in batch 1 at ~2K. Re-run only if you want it at 4K to match the rest of batch 2.'],
];
const ALPHA = [
  ['texture-spores.png', 'Batch 2 copy is genuine PNG; the batch 1 copy is a JPEG.'],
  ['texture-mycelium-lines.png', 'JPEG in both batches.'],
  ['texture-paper-grain.png', 'JPEG in both batches.'],
  ['texture-slate.png', 'JPEG in batch 1 and absent from batch 2, so it needs generating either way.'],
];
const ICONS = [
  ['brand-favicon.png', 'JPEG in both batches. A favicon without transparency shows a black box around the glyph.'],
  ['brand-apple-touch.png', 'JPEG in both batches. Less visible than the favicon because it is full-bleed, but still wrong.'],
];
const RENAME = [
  ['species-chaga-og_7daad023.jpg', 'species-chaga-og.jpg'],
  ['species-reishi-og_2551012e.jpg', 'species-reishi-og.jpg'],
  ['species-sceletium-og_40c4780d.jpg', 'species-sceletium-og.jpg'],
  ['species-tremella-og_7abee7da.jpg', 'species-tremella-og.jpg'],
];

const out = [];
const w = (s = '') => out.push(s);

w('# 21 — Image re-run sheet');
w();
w('**What is still outstanding after the two batches of 02/09/2026.** Everything here is either');
w('missing, misnamed, or saved in a format that cannot do its job. Prompts are taken verbatim from');
w('[`data/image-manifest.csv`](../data/image-manifest.csv), so a re-run matches what already worked.');
w();
w('Full context: [`19-image-generation-manifest.md`](19-image-generation-manifest.md).');
w('The complete prompt book: [`20-image-prompt-book.md`](20-image-prompt-book.md).');
w();
w('## What landed');
w();
w('| Group | Wanted | Batch 1 (20:10) | Batch 2 (20:44) |');
w('|---|---|---|---|');
w('| Species | 24 | 24 | 24 (4 misnamed) |');
w('| Collections | 7 | 7 | 7 |');
w('| Blog | 7 | 7 | 7 |');
w('| Brand | 4 | 4 | 4 |');
w('| Pages | 10 | 6 | 5 |');
w('| Textures | 4 | 4 | 3 |');
w('| Home | 3 | 0 | 0 |');
w('| **Total** | **59** | **52** | **50** |');
w();
w('Batch 2 files are roughly 3× the size of batch 1, so batch 2 looks like 4K against batch 1\'s 2K.');
w('**Keep batch 2 as the master wherever it exists and is named correctly**, and fall back to batch 1');
w('for `page-disclaimer-hero` and `texture-slate`.');
w();
w('---');
w();
w('## 1. Rename before uploading — 4 files, no regeneration');
w();
w('These carry a hash suffix from the generator and will not map to their metaobject slots.');
w();
w('| Current name | Rename to |');
w('|---|---|');
for (const [a, b] of RENAME) w(`| \`${a}\` | \`${b}\` |`);
w();
w('```bash');
w('# run inside the bundle\'s species/ folder');
w('for f in *_[0-9a-f]*.jpg; do mv -v "$f" "$(echo "$f" | sed -E \'s/_[0-9a-f]{8}\\.jpg$/.jpg/\')"; done');
w('```');
w();
w('---');
w();
w('## 2. Missing from both batches — 7 images');
w();
w('The home group is the gap that matters. There is currently no hero for the front page.');
w();

const emitted = new Set();
const emit = (file, note) => {
  if (emitted.has(file)) throw new Error('already emitted: ' + file);
  emitted.add(file);
  const r = byFile[file];
  if (!r) throw new Error('no manifest row for ' + file);
  w(`### \`${file}\``);
  w();
  w(`**Slot:** ${r.theme_slot} · **Ratio:** \`${r.aspect_ratio}\` · **Size:** \`${r.image_size}\``);
  if (r.alt_text) w(`**Alt text:** ${r.alt_text}`);
  w(`**Why it is here:** ${note}`);
  w();
  w('```text');
  w(r.prompt + ' ' + r.exclusions);
  w('```');
  w();
};

for (const [f, n] of MISSING_BOTH) emit(f, n);

w('---');
w();
w('## 3. Missing from batch 2 only — 1 image');
w();
w('Batch 1 has it. Re-run only if you want the whole set at one resolution.');
w('(`texture-slate.png` is also absent from batch 2, but it needs the format fix in §4 either way,');
w('so it is covered there rather than here.)');
w();
for (const [f, n] of MISSING_B2) emit(f, n);

w('---');
w();
w('## 4. The transparency problem — 4 textures and 2 icons');
w();
w('These six files are JPEGs carrying a `.png` extension. **JPEG has no alpha channel**, so a renamed');
w('file is still opaque: the textures become solid rectangles that cannot be layered, and the favicon');
w('shows a black box around the glyph. Renaming does not fix this. Neither, reliably, does asking the');
w('model for a transparent background — most image models will hand you a checkerboard *pattern* rather');
w('than genuine alpha.');
w();
w('**Two routes that actually work:**');
w();
w('**A — the blend-mode route (recommended for the three overlays).** Generate the texture as light');
w('marks on pure black, save as JPEG, and let CSS do the compositing:');
w();
w('```css');
w('.texture-overlay {');
w('  background-image: url("texture-mycelium-lines.jpg");');
w('  mix-blend-mode: screen;   /* black becomes fully transparent */');
w('  opacity: .35;');
w('}');
w('```');
w();
w('Pure black reads as zero under `screen`, so you get transparency without an alpha channel, a smaller');
w('file, and control over intensity in CSS rather than baked into the pixels. `texture-slate` is a');
w('surface rather than an overlay and needs no transparency at all — keep it as a plain JPEG.');
w();
w('**B — key it out in post.** Generate on flat black, then remove the black to alpha in an editor and');
w('export a real PNG. More faithful to the original spec, more manual work, larger files.');
w();
w('**The two icons are a different case: they should not be raster at all.** A favicon is read at 16 px;');
w('a generated one will be mushy whatever the format. Generate the glyph once for reference, then redraw');
w('it as vector and export the PNG sizes from that. This is the same point the manifest makes about the');
w('wordmark in §6.5.');
w();
w('Prompts, unchanged, for whichever route you take:');
w();
for (const [f, n] of [...ALPHA, ...ICONS]) emit(f, n);

w('---');
w();
w('## 5. One thing to check rather than regenerate');
w();
w('`species-sceletium-hero.jpg` is 3.3 MB in batch 2, where its siblings are 8–10 MB — and byte-identical');
w('in size to the batch 1 copy. That looks like the batch 2 run reused the earlier file rather than');
w('regenerating it at 4K. Check its pixel dimensions; if it is 2K, re-run it from the prompt book.');
w();
w('This is also the image most likely to be wrong on content: Sceletium is the only botanical in the');
w('range, and the model\'s prior is overwhelmingly "mushroom". It needs both checks.');
w();
w('---');
w();
w('## 6. Running total');
w();
w('| | Files |');
w('|---|---|');
w('| Rename only | 4 |');
w('| Regenerate — missing from both batches | 7 |');
w('| Regenerate — missing from batch 2 only | 1 |');
w('| Re-save or re-approach — transparency | 6 |');
w('| Verify, maybe re-run | 1 |');
w();
w('Once the 7 in §2 are done, Part A is complete at 59 of 59 and the site has every image it needs');
w('except the 71 product plates, which still wait on photographs of the real bottles.');

fs.writeFileSync(new URL('../docs/21-image-rerun-sheet.md', import.meta.url), out.join('\n') + '\n');
console.log('wrote docs/21-image-rerun-sheet.md');
console.log('prompt blocks:', out.filter((l) => l === '```text').length);
