# 21 — Image re-run sheet

**Round 2, 03/09/2026.** Every Part A image has been looked at twice: once to find the failures, and
again after they were re-run from the corrected prompts. **Fourteen of the eighteen failures
cleared.** Verdicts in [`22-image-qa-results.md`](22-image-qa-results.md); the full prompt set, with
a marker on every block, is [`20-image-prompt-book.md`](20-image-prompt-book.md).

| | Files |
|---|---|
| Part A, inspected | 59 |
| Passing after round 2 | 54 |
| Re-run | 3 |
| Re-run for size only | 1 |
| Generate as a vector reference | 1 |

---

## 1. What round 2 fixed

Worth recording, because it settles the diagnosis: every one of these failed on a prompt that named
a category, and every one was fixed by naming the thing. No image was fixed by re-rolling the dice.

| File | What changed |
|---|---|
| `collection-single-species-og.jpg` | The **Amanita** card. Now all eight species, correct and identifiable, on one slab with a clean third for the wordmark. |
| `collection-blends-og.jpg` | The **Sulphur Tuft** card. Now the six blend species overlapping, one turkey tail flipped to show its pore surface. No gills anywhere. |
| `page-species-hero.jpg` | The cicada, stag beetle, trilobite and pine cone are gone. Renders as eight tiles rather than one slab, so place the page title over the row gap. |
| `article-blog-hero.jpg` | Both defects. Turkey tail, reishi and Sceletium — no oak, no bracken — and the handwriting no longer resolves into words. |
| `collection-all-og.jpg` | Correct dropper bottles, correctly scaled, receding into a dark right half. |
| `page-about-story.jpg` | Every label blank, notebook closed and untitled. The nettle-and-valerian batch record is gone. |
| `article-storage-and-shelf-life.jpg` | Unlabelled dropper bottles, clean rather than dusty antiques. ARNICA and VALERIAN gone. |
| `collection-frontpage-og.jpg` | The seam is gone — natural depth falloff into mist. |
| `brand-og-default.jpg` | The seam is gone and the wordmark is set correctly. The best image in the set. |
| `hero-forest-mobile.jpg` | Light shaft and cluster in the lower third, top half clean for the heading, and the grade now matches the desktop hero. |
| `collection-botanicals-og.jpg` | The bright overcast sky is gone; palette back inside the brand range. |
| `texture-spores.jpg` | 2048 × 2048 (was 1024) and warm dust on true black — correct for `screen`. |
| `texture-mycelium-lines.jpg` | The painted chequerboard is gone. Sage hairlines on true black. |
| `texture-paper-grain.jpg` | The floral damask is gone; a genuine random fibre scatter. Came back off-white rather than on black, so composite it with `multiply`, or `filter: invert(1)` then `screen`. |

The cleanest evidence is `collection-all-og`: the only change to that prompt was describing the
bottle — amber glass, black ribbed screw cap, glass pipette, 30 ml and 50 ml — and the cork-stoppered
spirit bottles became the right product on the first attempt.

---

## 2. Still to re-run

Both of these fixed the defect they were re-run for and introduced a different one. The prompts
below are unchanged from round 2 — **edit them before running**, along the lines in each note.

### `collection-combo-deals-og.jpg`

**Slot:** collection combo-deals - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Round 2 came back:** Vessel fixed, point of the card lost: ~25 near-identical bottles with no visible pairing, on mossy forest floor rather than the near-black ground.

```text
Photograph paired amber glass dropper bottles in the 30 ml and 50 ml apothecary sizes, each with a black ribbed screw cap holding a glass pipette - not cork stoppers, not glass stoppers, not spirit or wine bottles, and nothing larger than 50 ml, one 50 ml and one 30 ml, repeated in receding rows, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `article-reading-evidence-grades.jpg`

**Slot:** article card - How to read the evidence grades · **Ratio:** `16:9` · **Size:** `2K`
**Round 2 came back:** Text fixed — nothing legible — but it returned an aged, deckle-edged **antique folio** on mossy ground. On an article about reading modern evidence, a manuscript argues the opposite.

```text
Photograph a stack of printed papers on dark slate seen at a shallow oblique angle so the print reads only as texture, with reading glasses and a pencil beside them, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank, or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent titles, headings, ingredient lists, author names, dates or product names, and do not render lorem-ipsum or pseudo-words that look like language at a glance. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-apple-touch.png`

**Slot:** apple-touch-icon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**Round 2 came back:** Not generated in round 2. Still outstanding.

```text
Design a single mycelial node with exactly three threads branching from it, each thread a different length and leaving at a different angle, each forking once and tapering slightly towards its tip. The mark must be deliberately asymmetric and off-balance, the way a real hypha grows: no radial symmetry, no rotational repetition, no evenly spaced arms, no ball-tipped terminals, and no lattice of interconnected nodes. It must not read as a snowflake, an asterisk, a star, a molecule diagram or a network graph. Render it in flat gold #C9A24A on a near-black #0B0E0C ground. Fill the frame with it, edge to edge, leaving only a narrow margin - it is a home-screen icon read at 180 pixels, so keep the strokes thick, the branch count to three and the silhouette simple. Flat graphic mark, no text. A flat graphic or textural render, not a photograph, 3D render or CGI, and with no depth of field or lens effects. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 3. Size only — prompt unchanged

Every 16:9 file comes back **2752 × 1536** rather than the `4K` requested. That sounds like many
re-runs. It is one, because what matters is the largest variant each *section* asks for:

| Section | Largest `widths` entry | Verdict at 2752 px |
|---|---|---|
| `sections/hero.liquid` | **3000** | **short** |
| `sections/species-hero.liquid` | 2400 | fine |
| `sections/page-hero.liquid` | 2400 | fine |
| `snippets/image.liquid` (default) | 2000 | fine |
| `sections/main-product.liquid` | 1600 | fine |

Do **not** "fix" this by dropping 3000 from the theme. The shortfall is in the asset, and lowering
the request would cap the hero at 2400 px even once a larger file exists. Leave the theme honest and
supply the pixels: `4K` in a fresh credit window, or take this one file to Nano Banana Pro. Until
then the cost is a roughly 9% shortfall on one image — real, but not a launch blocker.

### `hero-forest.jpg`

**Slot:** index > hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Round 2 came back:** Content is a clear pass. Still **2752 × 1536** — the `4K` did not take, for the second time.

```text
Photograph, wide and cinematic, the floor of a Southern Cape Afromontane forest at first light: yellowwood and stinkwood trunks, tree ferns, deep leaf litter, and low sea mist threading between the trunks. A single shaft of warm light strikes damp ground where pale fungal fruiting bodies emerge, with faint mycelial threads visible in the litter. Hold the shadows near-black and the palette to muted green and amber. Leave a large uncluttered dark area across the left two-thirds of the frame for overlaid text. Atmospheric and restrained. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 4. Reference only

A favicon is read at 16 px and a generated raster is mushy at that size in any format. Generate this
for the *shape*, then draw the final mark as vector and export both PNGs from that one file — which
is also what stops the favicon and the touch icon drifting apart, as they did in round 1.

The redraw brief, from what round 2 got right and wrong: keep the asymmetry and the three unequal
threads; centre it; use one uniform stroke weight; blunt the tips instead of tapering them; test at
16 px before committing.

### `brand-favicon.png`

**Slot:** favicon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**Round 2 came back:** The snowflake is gone and the mark now reads as a hypha. Still not a favicon: tapered hairpoint tips vanish at 16 px and it sits off-centre.

```text
Design a single mycelial node with exactly three threads branching from it, each thread a different length and leaving at a different angle, each forking once and tapering slightly towards its tip. The mark must be deliberately asymmetric and off-balance, the way a real hypha grows: no radial symmetry, no rotational repetition, no evenly spaced arms, no ball-tipped terminals, and no lattice of interconnected nodes. It must not read as a snowflake, an asterisk, a star, a molecule diagram or a network graph. Render it in flat gold #C9A24A on a near-black #0B0E0C ground. It will be read at 16 pixels, so keep the strokes thick and even, the branch count to three, and the silhouette simple enough to survive at that size. Flat graphic mark, centred, generous margin, no text. A flat graphic or textural render, not a photograph, 3D render or CGI, and with no depth of field or lens effects. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 5. Still blocked

The **71 product plates** need photographs of the 23 real bottles — flat, in daylight, against a
plain wall; a phone is fine. Eight of those prompts carried the category or vessel defect and are
corrected, so they will run right the first time once the references exist.

On the evidence of `collection-all-og` and `brand-og-home`, a carefully described bottle gets very
close without a photograph. Close is not good enough for the plate a customer buys from.
