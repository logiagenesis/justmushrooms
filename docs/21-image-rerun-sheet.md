# 21 — Image re-run sheet

**What is still outstanding after the two batches of 02/09/2026.** Everything here is either
missing, misnamed, or saved in a format that cannot do its job. Prompts are taken verbatim from
[`data/image-manifest.csv`](../data/image-manifest.csv), so a re-run matches what already worked.

Full context: [`19-image-generation-manifest.md`](19-image-generation-manifest.md).
The complete prompt book: [`20-image-prompt-book.md`](20-image-prompt-book.md).

## What landed

| Group | Wanted | Batch 1 (20:10) | Batch 2 (20:44) |
|---|---|---|---|
| Species | 24 | 24 | 24 (4 misnamed) |
| Collections | 7 | 7 | 7 |
| Blog | 7 | 7 | 7 |
| Brand | 4 | 4 | 4 |
| Pages | 10 | 6 | 5 |
| Textures | 4 | 4 | 3 |
| Home | 3 | 0 | 0 |
| **Total** | **59** | **52** | **50** |

Batch 2 files are roughly 3× the size of batch 1, so batch 2 looks like 4K against batch 1's 2K.
**Keep batch 2 as the master wherever it exists and is named correctly**, and fall back to batch 1
for `page-disclaimer-hero` and `texture-slate`.

---

## 1. Rename before uploading — 4 files, no regeneration

These carry a hash suffix from the generator and will not map to their metaobject slots.

| Current name | Rename to |
|---|---|
| `species-chaga-og_7daad023.jpg` | `species-chaga-og.jpg` |
| `species-reishi-og_2551012e.jpg` | `species-reishi-og.jpg` |
| `species-sceletium-og_40c4780d.jpg` | `species-sceletium-og.jpg` |
| `species-tremella-og_7abee7da.jpg` | `species-tremella-og.jpg` |

```bash
# run inside the bundle's species/ folder
for f in *_[0-9a-f]*.jpg; do mv -v "$f" "$(echo "$f" | sed -E 's/_[0-9a-f]{8}\.jpg$/.jpg/')"; done
```

---

## 2. Missing from both batches — 7 images

The home group is the gap that matters. There is currently no hero for the front page.

### `hero-forest.jpg`

**Slot:** index > hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Mist threading between yellowwood trunks in Afromontane forest at first light.
**Why it is here:** The home page hero - the single most important image on the site. Absent from both batches.

```text
Photograph, wide and cinematic, the floor of a Southern Cape Afromontane forest at first light: yellowwood and stinkwood trunks, tree ferns, deep leaf litter, and low sea mist threading between the trunks. A single shaft of warm light strikes damp ground where pale fungal fruiting bodies emerge, with faint mycelial threads visible in the litter. Hold the shadows near-black and the palette to muted green and amber. Leave a large uncluttered dark area across the left two-thirds of the frame for overlaid text. Atmospheric and restrained. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `hero-forest-mobile.jpg`

**Slot:** index > hero.image_mobile · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Mist threading between yellowwood trunks in Afromontane forest at first light.
**Why it is here:** The vertical crop of the same scene. Absent from both batches.

```text
Photograph the same Southern Cape Afromontane forest scene recomposed vertically: the light shaft and fungal cluster sit in the lower third, canopy and sea mist above. Keep the grade identical - muted green and amber, near-black shadows - and leave clear dark space across the top half of the frame for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `page-index-process.jpg`

**Slot:** index > image-with-text.image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Amber demijohns and dried mushroom material on a workshop bench.
**Why it is here:** The home page image-with-text block. Absent from both batches.

```text
Photograph a small-batch extraction still life: amber glass demijohns on a scarred timber bench, spring water in a plain glass vessel, and dried mushroom material in a shallow steel tray, lit by late afternoon light through a dusty window. It should read as an artisanal workshop and not a laboratory - warm and matter-of-fact, with no people, no lab equipment and no clinical surfaces. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `page-sourcing-hero.jpg`

**Slot:** page.sourcing > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Inoculated hardwood logs stacked in dappled forest shade.
**Why it is here:** Absent from both batches.

```text
Photograph inoculated hardwood logs stacked in dappled forest shade, damp and orderly, reading as real cultivation. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `page-sourcing-detail.jpg`

**Slot:** page.sourcing > image-with-text.image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** A wax-sealed inoculation point on an oak log.
**Why it is here:** Absent from both batches.

```text
Photograph a close detail of a drilled and wax-sealed inoculation point on an oak log, with sawdust spawn visible in the hole. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `page-species-hero.jpg`

**Slot:** page.species-index > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Eight mushroom and plant specimens laid out on dark slate.
**Why it is here:** Absent from both batches.

```text
Photograph a flat-lay taxonomy plate of eight distinct specimens arranged in an even grid on dark slate, evenly lit and museum-like. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `page-mushroom-finder-hero.jpg`

**Slot:** page.mushroom-finder > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** A branching mycelial network against near-black.
**Why it is here:** Absent from both batches.

```text
Photograph a branching mycelial network glowing very faintly against near-black, abstract but organic, suggesting a decision tree. Keep the pale green accent under five percent of the frame. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 3. Missing from batch 2 only — 1 image

Batch 1 has it. Re-run only if you want the whole set at one resolution.
(`texture-slate.png` is also absent from batch 2, but it needs the format fix in §4 either way,
so it is covered there rather than here.)

### `page-disclaimer-hero.jpg`

**Slot:** page.disclaimer > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Wet dark slate under a single raking light.
**Why it is here:** Present in batch 1 at ~2K. Re-run only if you want it at 4K to match the rest of batch 2.

```text
Photograph wet dark slate texture under a single raking light, deliberately plain, with no specimen in frame - sober and quiet. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 4. The transparency problem — 4 textures and 2 icons

These six files are JPEGs carrying a `.png` extension. **JPEG has no alpha channel**, so a renamed
file is still opaque: the textures become solid rectangles that cannot be layered, and the favicon
shows a black box around the glyph. Renaming does not fix this. Neither, reliably, does asking the
model for a transparent background — most image models will hand you a checkerboard *pattern* rather
than genuine alpha.

**Two routes that actually work:**

**A — the blend-mode route (recommended for the three overlays).** Generate the texture as light
marks on pure black, save as JPEG, and let CSS do the compositing:

```css
.texture-overlay {
  background-image: url("texture-mycelium-lines.jpg");
  mix-blend-mode: screen;   /* black becomes fully transparent */
  opacity: .35;
}
```

Pure black reads as zero under `screen`, so you get transparency without an alpha channel, a smaller
file, and control over intensity in CSS rather than baked into the pixels. `texture-slate` is a
surface rather than an overlay and needs no transparency at all — keep it as a plain JPEG.

**B — key it out in post.** Generate on flat black, then remove the black to alpha in an editor and
export a real PNG. More faithful to the original spec, more manual work, larger files.

**The two icons are a different case: they should not be raster at all.** A favicon is read at 16 px;
a generated one will be mushy whatever the format. Generate the glyph once for reference, then redraw
it as vector and export the PNG sizes from that. This is the same point the manifest makes about the
wordmark in §6.5.

Prompts, unchanged, for whichever route you take:

### `texture-spores.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Why it is here:** Batch 2 copy is genuine PNG; the batch 1 copy is a JPEG.

```text
Render fine suspended spore dust particles in warm white, scattered unevenly, against a fully transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-mycelium-lines.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Why it is here:** JPEG in both batches.

```text
Render delicate branching mycelial linework at a single consistent stroke weight, in pale green #8FF7C8, against a fully transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-paper-grain.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Why it is here:** JPEG in both batches.

```text
Render a neutral organic paper grain at low contrast, seamless and tileable, against a transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-slate.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Why it is here:** JPEG in batch 1 and absent from batch 2, so it needs generating either way.

```text
Render a wet dark slate surface texture, seamless and tileable, with subtle water beading and a raking highlight. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-favicon.png`

**Slot:** favicon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**Why it is here:** JPEG in both batches. A favicon without transparency shows a black box around the glyph.

```text
Design a single simplified mycelium-node glyph: one central node with three or four branching threads, rendered in flat gold #C9A24A on a near-black #0B0E0C ground. It must stay legible when reduced to 16 pixels, so keep strokes thick and even and the silhouette simple. Flat graphic mark, centred, generous margin, no text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-apple-touch.png`

**Slot:** apple-touch-icon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**Why it is here:** JPEG in both batches. Less visible than the favicon because it is full-bleed, but still wrong.

```text
Design the same simplified mycelium-node glyph in flat gold #C9A24A, full-bleed on a near-black #0B0E0C ground with a tighter margin. Flat graphic mark, no text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 5. One thing to check rather than regenerate

`species-sceletium-hero.jpg` is 3.3 MB in batch 2, where its siblings are 8–10 MB — and byte-identical
in size to the batch 1 copy. That looks like the batch 2 run reused the earlier file rather than
regenerating it at 4K. Check its pixel dimensions; if it is 2K, re-run it from the prompt book.

This is also the image most likely to be wrong on content: Sceletium is the only botanical in the
range, and the model's prior is overwhelmingly "mushroom". It needs both checks.

---

## 6. Running total

| | Files |
|---|---|
| Rename only | 4 |
| Regenerate — missing from both batches | 7 |
| Regenerate — missing from batch 2 only | 1 |
| Re-save or re-approach — transparency | 6 |
| Verify, maybe re-run | 1 |

Once the 7 in §2 are done, Part A is complete at 59 of 59 and the site has every image it needs
except the 71 product plates, which still wait on photographs of the real bottles.
