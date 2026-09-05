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

// Round 2 (03/09/2026). All 59 Part A files were looked at, the 18 failures were re-run from the
// corrected prompts, and those were looked at again. Fourteen cleared. This sheet is what is left.
// Prompts come verbatim from data/image-manifest.csv.

const FIXED = [
  ['collection-single-species-og.jpg', 'The **Amanita** card. Now all eight species, correct and identifiable, on one slab with a clean third for the wordmark.'],
  ['collection-blends-og.jpg', 'The **Sulphur Tuft** card. Now the six blend species overlapping, one turkey tail flipped to show its pore surface. No gills anywhere.'],
  ['page-species-hero.jpg', 'The cicada, stag beetle, trilobite and pine cone are gone. Renders as eight tiles rather than one slab, so place the page title over the row gap.'],
  ['article-blog-hero.jpg', 'Both defects. Turkey tail, reishi and Sceletium — no oak, no bracken — and the handwriting no longer resolves into words.'],
  ['collection-all-og.jpg', 'Correct dropper bottles, correctly scaled, receding into a dark right half.'],
  ['page-about-story.jpg', 'Every label blank, notebook closed and untitled. The nettle-and-valerian batch record is gone.'],
  ['article-storage-and-shelf-life.jpg', 'Unlabelled dropper bottles, clean rather than dusty antiques. ARNICA and VALERIAN gone.'],
  ['collection-frontpage-og.jpg', 'The seam is gone — natural depth falloff into mist.'],
  ['brand-og-default.jpg', 'The seam is gone and the wordmark is set correctly. The best image in the set.'],
  ['hero-forest-mobile.jpg', 'Light shaft and cluster in the lower third, top half clean for the heading, and the grade now matches the desktop hero.'],
  ['collection-botanicals-og.jpg', 'The bright overcast sky is gone; palette back inside the brand range.'],
  ['texture-spores.jpg', '2048 × 2048 (was 1024) and warm dust on true black — correct for `screen`.'],
  ['texture-mycelium-lines.jpg', 'The painted chequerboard is gone. Sage hairlines on true black.'],
  ['texture-paper-grain.jpg', 'The floral damask is gone; a genuine random fibre scatter. Came back off-white rather than on black, so composite it with `multiply`, or `filter: invert(1)` then `screen`.'],
];

const REDO = [
  ['collection-combo-deals-og.jpg', 'Vessel fixed, point of the card lost: ~25 near-identical bottles with no visible pairing, on mossy forest floor rather than the near-black ground.'],
  ['article-reading-evidence-grades.jpg', 'Text fixed — nothing legible — but it returned an aged, deckle-edged **antique folio** on mossy ground. On an article about reading modern evidence, a manuscript argues the opposite.'],
  ['brand-apple-touch.png', 'Not generated in round 2. Still outstanding.'],
];
const SIZE = [
  ['hero-forest.jpg', 'Content is a clear pass. Still **2752 × 1536** — the `4K` did not take, for the second time.'],
];
const REFERENCE = [
  ['brand-favicon.png', 'The snowflake is gone and the mark now reads as a hypha. Still not a favicon: tapered hairpoint tips vanish at 16 px and it sits off-centre.'],
];

const out = [];
const w = (s = '') => out.push(s);
const block = (f, note) => {
  const r = byFile[f];
  if (!r) throw new Error('no manifest row for ' + f);
  w(`### \`${f}\``);
  w();
  w(`**Slot:** ${r.theme_slot} · **Ratio:** \`${r.aspect_ratio}\` · **Size:** \`${r.image_size}\``);
  w(`**Round 2 came back:** ${note}`);
  w();
  w('```text');
  w(r.prompt + ' ' + r.exclusions);
  w('```');
  w();
};

w('# 21 — Image re-run sheet');
w();
w('**Round 2, 03/09/2026.** Every Part A image has been looked at twice: once to find the failures, and');
w('again after they were re-run from the corrected prompts. **Fourteen of the eighteen failures');
w('cleared.** Verdicts in [`22-image-qa-results.md`](22-image-qa-results.md); the full prompt set, with');
w('a marker on every block, is [`20-image-prompt-book.md`](20-image-prompt-book.md).');
w();
w(`| | Files |`);
w('|---|---|');
w(`| Part A, inspected | 59 |`);
w(`| Passing after round 2 | ${59 - REDO.length - SIZE.length - REFERENCE.length} |`);
w(`| Re-run | ${REDO.length} |`);
w(`| Re-run for size only | ${SIZE.length} |`);
w(`| Generate as a vector reference | ${REFERENCE.length} |`);
w();
w('---');
w();
w('## 1. What round 2 fixed');
w();
w('Worth recording, because it settles the diagnosis: every one of these failed on a prompt that named');
w('a category, and every one was fixed by naming the thing. No image was fixed by re-rolling the dice.');
w();
w('| File | What changed |');
w('|---|---|');
for (const [f, n] of FIXED) w(`| \`${f}\` | ${n} |`);
w();
w('The cleanest evidence is `collection-all-og`: the only change to that prompt was describing the');
w('bottle — amber glass, black ribbed screw cap, glass pipette, 30 ml and 50 ml — and the cork-stoppered');
w('spirit bottles became the right product on the first attempt.');
w();
w('---');
w();
w('## 2. Still to re-run');
w();
w('Both of these fixed the defect they were re-run for and introduced a different one. The prompts');
w('below are unchanged from round 2 — **edit them before running**, along the lines in each note.');
w();
for (const [f, n] of REDO) block(f, n);

w('---');
w();
w('## 3. Size only — prompt unchanged');
w();
w('Every 16:9 file comes back **2752 × 1536** rather than the `4K` requested. That sounds like many');
w('re-runs. It is one, because what matters is the largest variant each *section* asks for:');
w();
w('| Section | Largest `widths` entry | Verdict at 2752 px |');
w('|---|---|---|');
w('| `sections/hero.liquid` | **3000** | **short** |');
w('| `sections/species-hero.liquid` | 2400 | fine |');
w('| `sections/page-hero.liquid` | 2400 | fine |');
w('| `snippets/image.liquid` (default) | 2000 | fine |');
w('| `sections/main-product.liquid` | 1600 | fine |');
w();
w('Do **not** "fix" this by dropping 3000 from the theme. The shortfall is in the asset, and lowering');
w('the request would cap the hero at 2400 px even once a larger file exists. Leave the theme honest and');
w('supply the pixels: `4K` in a fresh credit window, or take this one file to Nano Banana Pro. Until');
w('then the cost is a roughly 9% shortfall on one image — real, but not a launch blocker.');
w();
for (const [f, n] of SIZE) block(f, n);

w('---');
w();
w('## 4. Reference only');
w();
w('A favicon is read at 16 px and a generated raster is mushy at that size in any format. Generate this');
w('for the *shape*, then draw the final mark as vector and export both PNGs from that one file — which');
w('is also what stops the favicon and the touch icon drifting apart, as they did in round 1.');
w();
w('The redraw brief, from what round 2 got right and wrong: keep the asymmetry and the three unequal');
w('threads; centre it; use one uniform stroke weight; blunt the tips instead of tapering them; test at');
w('16 px before committing.');
w();
for (const [f, n] of REFERENCE) block(f, n);

w('---');
w();
w('## 5. Still blocked');
w();
w('The **71 product plates** need photographs of the 23 real bottles — flat, in daylight, against a');
w('plain wall; a phone is fine. Eight of those prompts carried the category or vessel defect and are');
w('corrected, so they will run right the first time once the references exist.');
w();
w('On the evidence of `collection-all-og` and `brand-og-home`, a carefully described bottle gets very');
w('close without a photograph. Close is not good enough for the plate a customer buys from.');

fs.writeFileSync(new URL('../docs/21-image-rerun-sheet.md', import.meta.url), out.join('\n') + '\n');
console.log('wrote docs/21-image-rerun-sheet.md');
console.log('prompt blocks:', out.filter((l) => l === '```text').length);
