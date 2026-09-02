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

// Batch 3 (21:12) is a merged bundle and completes Part A at 59 of 59: the home group arrived,
// all ten page heroes are present, and the four hash-suffixed species cards were renamed.
// What survives is a format problem and a resolution question, not missing files.
const FORMAT = [
  ['texture-spores.png', 'JPEG in batch 3. Batch 2 had the only genuine PNG of this file, so this is a regression - that copy is worth recovering.'],
  ['texture-mycelium-lines.png', 'JPEG in all three batches.'],
  ['texture-paper-grain.png', 'JPEG in all three batches.'],
  ['texture-slate.png', 'JPEG in all three batches. This one is a surface rather than an overlay, so it needs no transparency - leave it as a JPEG and just rename it .jpg.'],
];
const ICONS = [
  ['brand-favicon.png', 'JPEG in all three batches. A favicon without transparency shows a black box around the glyph at 16 px.'],
  ['brand-apple-touch.png', 'JPEG in all three batches. Full-bleed, so less visible than the favicon, but still mislabelled.'],
];
// Files whose batch-3 size sits in the ~3 MB cohort while comparable images are 8-11 MB.
const LOWRES = [
  ['hero-forest.jpg', '3.0 MB', 'The home page hero. If this is 2K it is smaller than the 3000x1688 variant the theme requests.'],
  ['hero-forest-mobile.jpg', '3.4 MB', ''],
  ['page-index-process.jpg', '3.1 MB', ''],
  ['page-sourcing-hero.jpg', '3.5 MB', ''],
  ['page-sourcing-detail.jpg', '3.3 MB', ''],
  ['page-species-hero.jpg', '3.0 MB', ''],
  ['page-mushroom-finder-hero.jpg', '3.1 MB', ''],
  ['page-disclaimer-hero.jpg', '3.2 MB', ''],
  ['species-sceletium-hero.jpg', '3.0 MB', 'Regenerated in batch 3 but still in the small cohort; batch 1 and 2 held byte-identical copies.'],
];

const out = [];
const w = (s = '') => out.push(s);

w('# 21 — Image re-run sheet');
w();
w('**Status after the third batch (02/09/2026, 21:12).** Part A is complete at 59 of 59 — every image');
w('the site needs apart from the 71 product plates, which still wait on photographs of the real bottles.');
w('What is left is a format problem, a resolution question, and one check nobody has done yet.');
w();
w('Full context: [`19-image-generation-manifest.md`](19-image-generation-manifest.md).');
w('The complete prompt book: [`20-image-prompt-book.md`](20-image-prompt-book.md).');
w();
w('## Where the three batches landed');
w();
w('| Group | Wanted | Batch 1 | Batch 2 | **Batch 3** |');
w('|---|---|---|---|---|');
w('| Species | 24 | 24 | 24 (4 misnamed) | **24** |');
w('| Collections | 7 | 7 | 7 | **7** |');
w('| Blog | 7 | 7 | 7 | **7** |');
w('| Brand | 4 | 4 | 4 | **4** |');
w('| Pages | 10 | 6 | 5 | **10** |');
w('| Textures | 4 | 4 | 3 | **4** |');
w('| Home | 3 | 0 | 0 | **3** |');
w('| **Total** | **59** | 52 | 50 | **59** |');
w();
w('**Fixed in batch 3:** the whole home group arrived, all ten page heroes are present, `texture-slate`');
w('came back, and the four hash-suffixed species social cards were renamed. Nothing from the previous');
w('sheet\'s missing list is outstanding.');
w();
w('---');
w();
w('## 1. The transparency problem — still open');
w();
w('Six files are JPEGs carrying a `.png` extension, unchanged across all three batches. **JPEG has no');
w('alpha channel**, so renaming cannot fix it: the overlays are opaque rectangles that cannot be layered,');
w('and the favicon will show a black box around the glyph.');
w();
w('One regression worth catching: **`texture-spores.png` was a genuine PNG in batch 2** and is a JPEG');
w('again in batch 3. That batch 2 copy is the only real PNG produced so far — recover it rather than');
w('regenerate it.');
w();
w('**The fix for the three overlays is to stop needing alpha.** Generate them as light marks on pure');
w('black, save as JPEG, and let CSS composite:');
w();
w('```css');
w('.texture-overlay {');
w('  background-image: url("texture-mycelium-lines.jpg");');
w('  mix-blend-mode: screen;   /* black becomes fully transparent */');
w('  opacity: .35;');
w('}');
w('```');
w();
w('Black reads as zero under `screen`, so you get real transparency without an alpha channel, a smaller');
w('file, and intensity control in CSS rather than baked into the pixels. `texture-slate` is a surface,');
w('not an overlay — rename it `.jpg` and it is finished.');
w();
w('**The two icons should not be raster at all.** A favicon is read at 16 px; a generated one is mushy in');
w('any format. Use the generated glyph as reference, redraw it as vector, export the PNGs from that.');
w();
for (const [f, n] of [...FORMAT, ...ICONS]) {
  const r = byFile[f];
  if (!r) throw new Error('no manifest row for ' + f);
  w(`### \`${f}\``);
  w();
  w(`**Slot:** ${r.theme_slot} · **Ratio:** \`${r.aspect_ratio}\` · **Size:** \`${r.image_size}\``);
  w(`**Status:** ${n}`);
  w();
  w('```text');
  w(r.prompt + ' ' + r.exclusions);
  w('```');
  w();
}

w('---');
w();
w('## 2. A resolution question — check before uploading');
w();
w('The nine images below sit at roughly 3 MB in batch 3, while comparable images from the earlier runs');
w('are 8–11 MB. A consistent 3× gap across a whole cohort suggests the gap-fill run used `2K` where the');
w('rest used `4K`. File size is not proof — JPEG quality settings move it too — so **check the pixel');
w('dimensions rather than taking this as fact.**');
w();
w('It matters most for the first row. Per §2.1 of the manifest, `2K` at 16:9 is roughly 2668 × 1500,');
w('which is *smaller than the 3000 × 1688 variant the theme requests* — so the browser would upscale the');
w('home hero, and it will look soft on a retina screen.');
w();
w('| File | Batch 3 size | Note |');
w('|---|---|---|');
for (const [f, sz, note] of LOWRES) w(`| \`${f}\` | ${sz} | ${note} |`);
w();
w('Anything under 3000 px on the long edge should be re-run at `4K` from the prompt book. If 4K is not');
w('enabled on the account, that is the moment to move these few to Nano Banana Pro.');
w();
w('---');
w();
w('## 3. The check nobody has done');
w();
w('**No image has been visually inspected.** `drive.google.com` is blocked by the agent environment\'s');
w('egress proxy, and Drive returns an empty text representation for JPEGs, so every finding in this');
w('document comes from file metadata — names, sizes, MIME types — and none of it says whether the');
w('pictures are right.');
w();
w('That leaves the rejection table in §7 of the manifest entirely unverified. The risks it exists to');
w('catch are exactly the ones metadata cannot see: a Lion\'s Mane with gills, a chaga growing from the');
w('ground rather than a living birch, turkey tail with gills instead of pores, an opaque tremella, a');
w('cordyceps emerging from an insect, and above all **Sceletium rendered as a mushroom rather than the');
w('succulent it is.**');
w();
w('To unblock it, put downsampled copies somewhere in the shared folder — 1024 px on the long edge is');
w('plenty:');
w();
w('```bash');
w('# ImageMagick');
w('mkdir -p previews');
w('for f in */*.jpg; do magick "$f" -resize 1024x1024\\> "previews/$(basename "$f")"; done');
w();
w('# macOS, no extra tooling');
w('mkdir -p previews && cp */*.jpg previews/ && sips -Z 1024 previews/*.jpg');
w('```');
w();
w('At that size the 24 species images can be pulled and checked one by one, with a written pass or fail');
w('against §7 for each.');
w();
w('---');
w();
w('## 4. Running total');
w();
w('| | Files |');
w('|---|---|');
w('| Complete and correct | 53 |');
w('| Re-save or re-approach — transparency | 6 |');
w('| Verify dimensions, re-run if 2K | 9 |');
w('| Visually unverified | **59** |');
w();
w('The overlap is deliberate: the last row covers everything, because nothing has been looked at.');

fs.writeFileSync(new URL('../docs/21-image-rerun-sheet.md', import.meta.url), out.join('\n') + '\n');
console.log('wrote docs/21-image-rerun-sheet.md');
console.log('prompt blocks:', out.filter((l) => l === '```text').length);
