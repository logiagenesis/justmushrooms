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

// Rewritten after the visual QA in docs/22-image-qa-results.md. Every one of the 59 Part A files
// has now been decoded and looked at, so this sheet lists what actually needs regenerating rather
// than what the file metadata suggested. Prompts come verbatim from data/image-manifest.csv, which
// has been corrected at source for all three defect families the QA found.

// Wrong subject: the prompt named a category and the model chose from its own priors.
const SUBJECT = [
  ['page-species-hero.jpg', 'A cicada, a stag beetle, a damselfly, a trilobite and a pine cone. One of the eight items was a fungus, and it was not one of ours.'],
  ['collection-single-species-og.jpg', 'Eight mushrooms, none of them ours, led by an **Amanita** with a warted cap and a basal volva. The single worst mushroom to head a range of ingestible tinctures.'],
  ['collection-blends-og.jpg', 'A clustered mass of greenish-yellow gilled caps on dead wood, reading as **Sulphur Tuft**. Toxic, and gilled, while not one of the six species in the blends has gills.'],
  ['article-blog-hero.jpg', 'Pressed *Quercus robur* and *Pteridium aquilinum* - oak and bracken. Not one fungus in the frame, on the header of a mushroom blog. Also carries the text problem below.'],
];
// Wrong vessel: "amber bottles" got cork-stoppered apothecary and spirit bottles.
const VESSEL = [
  ['collection-all-og.jpg', 'Cork-stoppered spirit bottles, and far larger than 50 ml. Craft and composition otherwise exemplary.'],
  ['collection-combo-deals-og.jpg', 'The same cork-stoppered apothecary bottles, correctly paired tall and short in receding rows.'],
];
// Legible invented text, where the exclusions banned text outright.
const TEXT = [
  ['page-about-story.jpg', 'A batch record notebook listing **nettle, cedar leaf, dandelion root and valerian** - a herbal recipe this company does not make, legible on the About page.'],
  ['article-storage-and-shelf-life.jpg', 'Shelf bottles clearly labelled **ARNICA**, **TINCTURE No. 4** and **VALERIAN**, dusty and half-empty. Wrong products, wrong vessel, and the wrong subtext for a shelf-life article.'],
  ['article-reading-evidence-grades.jpg', 'A journal paper on **Holocene climate variability**, its title legible and its body dissolving into pseudo-words, illustrating an article about mycology evidence grades.'],
];
// Composition and format.
const CRAFT = [
  ['collection-frontpage-og.jpg', 'A hard vertical seam two-thirds across: the model answered "negative space on one third" by pasting a darkened panel over the right third.'],
  ['brand-og-default.jpg', 'The same seam, at the halfway point. The wordmark itself is set correctly - fine serif, cream, well letterspaced - but this is the default card for every shared page on the site.'],
  ['hero-forest-mobile.jpg', 'The brightest, busiest part of the frame sits exactly where the overlaid heading goes, and it is a different forest in a different grade from the desktop hero.'],
  ['collection-botanicals-og.jpg', 'Right subject, but under a bright overcast sky that belongs to no other image on the site.'],
  ['texture-mycelium-lines.jpg', 'Flat mint linework over a **hand-painted Photoshop chequerboard** - the model drew transparency rather than exporting it. Unusable as-is.'],
  ['texture-paper-grain.jpg', 'A repeating floral damask wallpaper, not a paper grain. Obvious motif, obvious tiling grid.'],
  ['brand-favicon.png', 'A **snowflake**. Technically clean - flat gold, thick even strokes, legible at 16 px - but four symmetric branching arms around a ring read as an ice crystal, not mycelium.'],
  ['brand-apple-touch.png', 'A different mark entirely, not the favicon glyph: sixteen ball-tipped spokes and four hubs, reading as a molecule or network diagram, centred rather than full-bleed, and far too intricate for 180 px.'],
];
// Every 16:9 file came back 2752 x 1536 rather than the 4K asked for - but that only matters where
// the theme asks for more. `sections/hero.liquid` is the only place in the whole theme requesting a
// 3000w variant; species-hero.liquid and page-hero.liquid top out at 2400w, the shared image snippet
// at 2000w, and the product gallery at 1600w. So one file is short, not nine.
const LOWRES = [
  ['hero-forest.jpg', 'index > hero.image - the only slot in the theme requesting a 3000w variant, so this is the only file the browser would upscale'],
];

const out = [];
const w = (s = '') => out.push(s);
const block = (f, note) => {
  const r = byFile[f];
  if (!r) throw new Error('no manifest row for ' + f);
  w(`### \`${f}\``);
  w();
  w(`**Slot:** ${r.theme_slot} · **Ratio:** \`${r.aspect_ratio}\` · **Size:** \`${r.image_size}\``);
  w(`**What came back:** ${note}`);
  w();
  w('```text');
  w(r.prompt + ' ' + r.exclusions);
  w('```');
  w();
};

w('# 21 — Image re-run sheet');
w();
w('**Every Part A image has now been looked at.** This sheet replaces the metadata-based version: the');
w('verdicts behind it are in [`22-image-qa-results.md`](22-image-qa-results.md), and the prompts below');
w('are the corrected ones from [`20-image-prompt-book.md`](20-image-prompt-book.md), regenerated after');
w('the QA. Full context: [`19-image-generation-manifest.md`](19-image-generation-manifest.md).');
w();
w('Generated in **Genspark** on **Nano Banana 2 Flash** (`gemini-3.1-flash-image`). Image generation');
w('there is rate-limited in five-hour windows, and a batch that runs out of credit mid-way silently');
w('falls back to a lower tier rather than failing — which is how `page-disclaimer-hero` ended up at 2K.');
w('Plan the re-runs around that, and check the pixel dimensions of anything you get back.');
w();
w('## What the QA found');
w();
w('| | Files | Cause |');
w('|---|---|---|');
w(`| Wrong subject | ${SUBJECT.length} | the prompt named a category, so the model chose from its own priors |`);
w(`| Wrong vessel | ${VESSEL.length} | "amber bottles" is a category too |`);
w(`| Legible invented text | ${TEXT.length} | the prompt asked for paper and the exclusions banned text |`);
w(`| Composition and format | ${CRAFT.length} | seams, sky, and a painted-on transparency chequerboard |`);
w(`| Under-sized | ${LOWRES.length} | the home hero only — the one slot asking for a 3000w variant |`);
w();
w('The three prompt causes are fixed in `scripts/build-image-manifest.mjs` and regenerated through the');
w('CSV and the prompt book, so the blocks below are ready to run as they stand. The under-sized files');
w('need no prompt change at all — only `4K` instead of `2K`.');
w();
w('---');
w();
w('## 1. Wrong subject — re-run');
w();
w('Each of these prompts now enumerates the eight species by name and closes with a clause naming the');
w('specific wrong answers already seen: no Amanita, no volva, no porcini, morel or ink cap, no insects,');
w('no fossils. A negative the model can check against the picture is enforceable in a way that "only');
w('these species" is not.');
w();
for (const [f, n] of SUBJECT) block(f, n);

w('---');
w();
w('## 2. Wrong vessel — re-run');
w();
w('Both prompts now describe the bottle rather than naming a category: amber glass dropper bottles in');
w('30 ml and 50 ml, black ribbed screw caps holding glass pipettes, and explicitly no cork or glass');
w('stoppers and nothing larger than 50 ml.');
w();
for (const [f, n] of VESSEL) block(f, n);

w('---');
w();
w('## 3. Legible invented text — re-run');
w();
w('The pattern is consistent: put paper, a notebook or a label in frame and the model will write on it,');
w('and what it writes will be someone else\'s product. The corrected prompts require every word to be');
w('illegible — blank, or turned far enough from the camera that the writing reads as a grey rhythm —');
w('and forbid invented titles, ingredient lists, dates and pseudo-words.');
w();
w('`article-sa-regulations-explained` is the control: given the same contradiction it produced *blank*');
w('sheets and passed. Making illegibility explicit removes the coin flip.');
w();
for (const [f, n] of TEXT) block(f, n);

w('---');
w();
w('## 4. Composition and format — re-run');
w();
w('The two textures are the clearest failure in the set. The original prompt asked for "a fully');
w('transparent background" and an alpha channel; a model cannot export alpha, so it painted');
w('transparency instead — a grey-and-white chequerboard, drawn in pixels, under flat mint linework.');
w();
w('The three overlays are now specified as light marks on **pure black** and composited in CSS, where');
w('black reads as zero under `screen`. Real transparency, no alpha channel, and the intensity stays');
w('adjustable rather than baked into the file:');
w();
w('```css');
w('.texture-overlay {');
w('  background-image: url("texture-mycelium-lines.jpg");');
w('  mix-blend-mode: screen;   /* black becomes fully transparent */');
w('  opacity: .35;');
w('}');
w('```');
w();
w('`texture-slate.jpg` is a background surface rather than an overlay and passed on sight — it needs');
w('nothing but its correct extension. `texture-spores` is the same case as the other two overlays.');
w();
w('The two brand icons stay a separate problem, and a larger one than the format: **they are not the');
w('same mark**. The touch-icon prompt said "the same simplified mycelium-node glyph", which has no');
w('referent for a model that never saw the favicon, so it invented a second one. The favicon came back');
w('a snowflake and the touch icon a molecule diagram. Both prompts now describe the glyph in full and');
w('in the same words - three threads, unequal lengths and angles, deliberately asymmetric, no radial');
w('symmetry, no ball-tipped terminals, and explicitly not a snowflake, asterisk or network graph.');
w();
w('Even so, generate these only as a **reference**. A favicon is read at 16 px, and a generated raster');
w('is mushy at that size in any format. Draw the final mark as vector from whichever reference reads');
w('best, and export both PNGs from that one file so the two icons can never diverge again.');
w();
for (const [f, n] of CRAFT) block(f, n);

w('---');
w();
w('## 5. Under-sized — re-run at `4K`, prompt unchanged');
w();
w('Every 16:9 file came back **2752 × 1536** — the `2K` tier, not the `4K` the manifest asked for. That');
w('sounds like seventeen re-runs. It is one, and the difference is worth setting out, because the');
w('earlier version of this sheet got it wrong by inferring the gap from file sizes instead of reading');
w('the theme.');
w();
w('What matters is the largest variant each **section** actually requests:');
w();
w('| Section | Largest `widths` entry | Files it serves | Verdict at 2752 px |');
w('|---|---|---|---|');
w('| `sections/hero.liquid` | **3000** | `hero-forest` | **short** |');
w('| `sections/species-hero.liquid` | 2400 | the 8 species heroes | fine |');
w('| `sections/page-hero.liquid` | 2400 | the 8 page heroes | fine |');
w('| `snippets/image.liquid` (default) | 2000 | article and collection cards | fine |');
w('| `sections/main-product.liquid` | 1600 | product gallery | fine |');
w();
w('So only the home hero is genuinely upscaled. The 4:5 portraits arrive at 1856 × 2304 and the 3:2');
w('cards at 2528 × 1696, both comfortably above what their slots ask for.');
w();
w('| File | Note |');
w('|---|---|');
for (const [f, note] of LOWRES) w(`| \`${f}\` | ${note} |`);
w();
w('Nothing about this prompt is wrong. Re-run it with `imageSize: "4K"`. If 4K is not enabled on the');
w('account, this is the one file worth taking to Nano Banana Pro.');
w();
w('---');
w();
w('## 6. Running total');
w();
w('| | Files |');
w('|---|---|');
w('| Part A, generated | 59 |');
w('| Inspected | **59** |');
w(`| Re-run for subject, vessel or text | ${SUBJECT.length + VESSEL.length + TEXT.length} |`);
w(`| Re-run for composition or format | ${CRAFT.length} |`);
w(`| Re-run at 4K, prompt unchanged | ${LOWRES.length} |`);
w('| Rename `.png` → `.jpg`, no re-run | 1 (`texture-slate`) |');
w('| Redraw as vector | 2 (`brand-favicon`, `brand-apple-touch`) |');
w('| Pass, no action | 33 |');
w();
w('`page-species-hero` needs a corrected prompt; at 2752 px it is still above the 2400w its section asks');
w('for, so it does not need 4K as well.');
w();
w('Beyond Part A, the **71 product plates** remain blocked on photographs of the 23 real bottles. Six of');
w('those prompts carried the category defect and are corrected here too, so they will run correctly');
w('first time once the reference photographs exist.');

fs.writeFileSync(new URL('../docs/21-image-rerun-sheet.md', import.meta.url), out.join('\n') + '\n');
console.log('wrote docs/21-image-rerun-sheet.md');
console.log('prompt blocks:', out.filter((l) => l === '```text').length);
