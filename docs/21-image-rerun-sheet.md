# 21 — Image re-run sheet

**Every Part A image has now been looked at.** This sheet replaces the metadata-based version: the
verdicts behind it are in [`22-image-qa-results.md`](22-image-qa-results.md), and the prompts below
are the corrected ones from [`20-image-prompt-book.md`](20-image-prompt-book.md), regenerated after
the QA. Full context: [`19-image-generation-manifest.md`](19-image-generation-manifest.md).

Generated in **Genspark** on **Nano Banana 2 Flash** (`gemini-3.1-flash-image`). Image generation
there is rate-limited in five-hour windows, and a batch that runs out of credit mid-way silently
falls back to a lower tier rather than failing — which is how `page-disclaimer-hero` ended up at 2K.
Plan the re-runs around that, and check the pixel dimensions of anything you get back.

## What the QA found

| | Files | Cause |
|---|---|---|
| Wrong subject | 4 | the prompt named a category, so the model chose from its own priors |
| Wrong vessel | 2 | "amber bottles" is a category too |
| Legible invented text | 3 | the prompt asked for paper and the exclusions banned text |
| Composition and format | 8 | seams, sky, and a painted-on transparency chequerboard |
| Under-sized 16:9 | 9 | 2752 × 1536 against the 3000 × 1688 the theme requests |

The three prompt causes are fixed in `scripts/build-image-manifest.mjs` and regenerated through the
CSV and the prompt book, so the blocks below are ready to run as they stand. The under-sized files
need no prompt change at all — only `4K` instead of `2K`.

---

## 1. Wrong subject — re-run

Each of these prompts now enumerates the eight species by name and closes with a clause naming the
specific wrong answers already seen: no Amanita, no volva, no porcini, morel or ink cap, no insects,
no fossils. A negative the model can check against the picture is enforceable in a way that "only
these species" is not.

### `page-species-hero.jpg`

**Slot:** page.species-index > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**What came back:** A cicada, a stag beetle, a damselfly, a trilobite and a pine cone. One of the eight items was a fungus, and it was not one of ours.

```text
Photograph a flat-lay taxonomy plate of the eight Just Mushrooms species arranged in an even grid on dark slate, evenly lit and museum-like - Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Tremella fuciformis, a translucent white gelatinous frill of wavy lobes; Shiitake (Lentinula edodes), a brown umbrella cap with white cracking across it and cream gills beneath; and Sceletium tortuosum, a fleshy green succulent plant with raised translucent bladder cells and one small pale star-shaped flower - a plant, not a fungus. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `collection-single-species-og.jpg`

**Slot:** collection single-species - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** Eight mushrooms, none of them ours, led by an **Amanita** with a warted cap and a basal volva. The single worst mushroom to head a range of ingestible tinctures.

```text
Photograph the eight Just Mushrooms species laid out in an even grid on dark slate, taxonomic and evenly lit - Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Tremella fuciformis, a translucent white gelatinous frill of wavy lobes; Shiitake (Lentinula edodes), a brown umbrella cap with white cracking across it and cream gills beneath; and Sceletium tortuosum, a fleshy green succulent plant with raised translucent bladder cells and one small pale star-shaped flower - a plant, not a fungus, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `collection-blends-og.jpg`

**Slot:** collection blends - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** A clustered mass of greenish-yellow gilled caps on dead wood, reading as **Sulphur Tuft**. Toxic, and gilled, while not one of the six species in the blends has gills.

```text
Photograph six named specimens overlapping and merging into one another in a warmer grade - Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; and Tremella fuciformis, a translucent white gelatinous frill of wavy lobes, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `article-blog-hero.jpg`

**Slot:** article card - Blog index banner · **Ratio:** `16:9` · **Size:** `2K`
**What came back:** Pressed *Quercus robur* and *Pteridium aquilinum* - oak and bracken. Not one fungus in the frame, on the header of a mushroom blog. Also carries the text problem below.

```text
Photograph an open field notebook on a timber desk with three dried specimens laid beside it - Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; and Sceletium tortuosum, a fleshy green succulent plant with raised translucent bladder cells and one small pale star-shaped flower - a plant, not a fungus, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank, or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent titles, headings, ingredient lists, author names, dates or product names, and do not render lorem-ipsum or pseudo-words that look like language at a glance. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 2. Wrong vessel — re-run

Both prompts now describe the bottle rather than naming a category: amber glass dropper bottles in
30 ml and 50 ml, black ribbed screw caps holding glass pipettes, and explicitly no cork or glass
stoppers and nothing larger than 50 ml.

### `collection-all-og.jpg`

**Slot:** collection all - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** Cork-stoppered spirit bottles, and far larger than 50 ml. Craft and composition otherwise exemplary.

```text
Photograph an arc of amber glass dropper bottles in the 30 ml and 50 ml apothecary sizes, each with a black ribbed screw cap holding a glass pipette - not cork stoppers, not glass stoppers, not spirit or wine bottles, and nothing larger than 50 ml, receding into shadow at shallow depth of field, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `collection-combo-deals-og.jpg`

**Slot:** collection combo-deals - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** The same cork-stoppered apothecary bottles, correctly paired tall and short in receding rows.

```text
Photograph paired amber glass dropper bottles in the 30 ml and 50 ml apothecary sizes, each with a black ribbed screw cap holding a glass pipette - not cork stoppers, not glass stoppers, not spirit or wine bottles, and nothing larger than 50 ml, one 50 ml and one 30 ml, repeated in receding rows, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 3. Legible invented text — re-run

The pattern is consistent: put paper, a notebook or a label in frame and the model will write on it,
and what it writes will be someone else's product. The corrected prompts require every word to be
illegible — blank, or turned far enough from the camera that the writing reads as a grey rhythm —
and forbid invented titles, ingredient lists, dates and pseudo-words.

`article-sa-regulations-explained` is the control: given the same contradiction it produced *blank*
sheets and passed. Making illegibility explicit removes the coin flip.

### `page-about-story.jpg`

**Slot:** page.about > image-with-text.image · **Ratio:** `4:5` · **Size:** `2K`
**What came back:** A batch record notebook listing **nettle, cedar leaf, dandelion root and valerian** - a herbal recipe this company does not make, legible on the About page.

```text
Photograph a workbench detail - a brass balance scale, amber glass and a closed notebook in late light, with no faces and no branding. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank, or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent titles, headings, ingredient lists, author names, dates or product names, and do not render lorem-ipsum or pseudo-words that look like language at a glance. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `article-storage-and-shelf-life.jpg`

**Slot:** article card - Storage and shelf life · **Ratio:** `16:9` · **Size:** `2K`
**What came back:** Shelf bottles clearly labelled **ARNICA**, **TINCTURE No. 4** and **VALERIAN**, dusty and half-empty. Wrong products, wrong vessel, and the wrong subtext for a shelf-life article.

```text
Photograph amber glass dropper bottles in the 30 ml and 50 ml apothecary sizes, each with a black ribbed screw cap holding a glass pipette - not cork stoppers, not glass stoppers, not spirit or wine bottles, and nothing larger than 50 ml, unlabelled and clean rather than antique or dusty, standing in a dark cupboard with light falling across the shelf edge, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank, or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent titles, headings, ingredient lists, author names, dates or product names, and do not render lorem-ipsum or pseudo-words that look like language at a glance. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `article-reading-evidence-grades.jpg`

**Slot:** article card - How to read the evidence grades · **Ratio:** `16:9` · **Size:** `2K`
**What came back:** A journal paper on **Holocene climate variability**, its title legible and its body dissolving into pseudo-words, illustrating an article about mycology evidence grades.

```text
Photograph a stack of printed papers on dark slate seen at a shallow oblique angle so the print reads only as texture, with reading glasses and a pencil beside them, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank, or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent titles, headings, ingredient lists, author names, dates or product names, and do not render lorem-ipsum or pseudo-words that look like language at a glance. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 4. Composition and format — re-run

The two textures are the clearest failure in the set. The original prompt asked for "a fully
transparent background" and an alpha channel; a model cannot export alpha, so it painted
transparency instead — a grey-and-white chequerboard, drawn in pixels, under flat mint linework.

The three overlays are now specified as light marks on **pure black** and composited in CSS, where
black reads as zero under `screen`. Real transparency, no alpha channel, and the intensity stays
adjustable rather than baked into the file:

```css
.texture-overlay {
  background-image: url("texture-mycelium-lines.jpg");
  mix-blend-mode: screen;   /* black becomes fully transparent */
  opacity: .35;
}
```

`texture-slate.jpg` is a background surface rather than an overlay and passed on sight — it needs
nothing but its correct extension. `texture-spores` is the same case as the other two overlays.

The two brand icons stay a separate problem, and a larger one than the format: **they are not the
same mark**. The touch-icon prompt said "the same simplified mycelium-node glyph", which has no
referent for a model that never saw the favicon, so it invented a second one. The favicon came back
a snowflake and the touch icon a molecule diagram. Both prompts now describe the glyph in full and
in the same words - three threads, unequal lengths and angles, deliberately asymmetric, no radial
symmetry, no ball-tipped terminals, and explicitly not a snowflake, asterisk or network graph.

Even so, generate these only as a **reference**. A favicon is read at 16 px, and a generated raster
is mushy at that size in any format. Draw the final mark as vector from whichever reference reads
best, and export both PNGs from that one file so the two icons can never diverge again.

### `collection-frontpage-og.jpg`

**Slot:** collection frontpage - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** A hard vertical seam two-thirds across: the model answered "negative space on one third" by pasting a darkened panel over the right third.

```text
Photograph the Southern Cape forest floor at first light with mist between the trunks, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-og-default.jpg`

**Slot:** default og:image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** The same seam, at the halfway point. The wordmark itself is set correctly - fine serif, cream, well letterspaced - but this is the default card for every shared page on the site.

```text
Photograph the Southern Cape forest floor at first light with mist between the trunks and a shaft of warm light on damp ground. Compose it very wide with the left half falling away into deep natural shadow so a wordmark can sit there. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Muted green and amber, near-black shadows. Set the words "JUST MUSHROOMS" into that empty half in a fine serif, in cream, small and widely letterspaced. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no watermark, signature or stray lettering beyond the wordmark described above, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `hero-forest-mobile.jpg`

**Slot:** index > hero.image_mobile · **Ratio:** `4:5` · **Size:** `4K`
**What came back:** The brightest, busiest part of the frame sits exactly where the overlaid heading goes, and it is a different forest in a different grade from the desktop hero.

```text
Photograph the same Southern Cape Afromontane forest scene recomposed vertically: the light shaft and fungal cluster sit in the lower third, canopy and sea mist above. Keep the grade identical - muted green and amber, near-black shadows - and leave clear dark space across the top half of the frame for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `collection-botanicals-og.jpg`

**Slot:** collection botanicals - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**What came back:** Right subject, but under a bright overcast sky that belongs to no other image on the site.

```text
Photograph a sceletium succulent in Karoo quartz grit, wide and arid - a plant, not a fungus, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. That space must fall away naturally in the scene itself - no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-mycelium-lines.jpg`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**What came back:** Flat mint linework over a **hand-painted Photoshop chequerboard** - the model drew transparency rather than exporting it. Unusable as-is.

```text
Render delicate branching mycelial linework at a single consistent hairline stroke weight, in a muted sage green #A8BFA5 - a soft natural green, not mint, spring green, neon or any saturated cyan-leaning colour. It is a decorative texture, so keep it even across the frame, with no focal subject and no composition. Fill the entire background with pure flat black #000000, edge to edge, because the black will be dropped out in CSS. Do not draw a chequerboard, a grid of grey and white squares, or any other depiction of transparency; do not add a border, a frame or a page edge. Save it as an ordinary opaque JPEG - no alpha channel is wanted or possible. A flat graphic or textural render, not a photograph, 3D render or CGI, and with no depth of field or lens effects. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-paper-grain.jpg`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**What came back:** A repeating floral damask wallpaper, not a paper grain. Obvious motif, obvious tiling grid.

```text
Render a random fibrous paper grain in warm off-white at low contrast, the irregular scatter of pulp fibres and flecks in handmade paper, seamless and tileable, with no motif of any kind - no flowers, rosettes, damask, lattice, medallions or repeating decorative pattern, and nothing that reads as wallpaper or gift wrap. It is a decorative texture, so keep it even across the frame, with no focal subject and no composition. Fill the entire background with pure flat black #000000, edge to edge, because the black will be dropped out in CSS. Do not draw a chequerboard, a grid of grey and white squares, or any other depiction of transparency; do not add a border, a frame or a page edge. Save it as an ordinary opaque JPEG - no alpha channel is wanted or possible. A flat graphic or textural render, not a photograph, 3D render or CGI, and with no depth of field or lens effects. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-favicon.png`

**Slot:** favicon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**What came back:** A **snowflake**. Technically clean - flat gold, thick even strokes, legible at 16 px - but four symmetric branching arms around a ring read as an ice crystal, not mycelium.

```text
Design a single mycelial node with exactly three threads branching from it, each thread a different length and leaving at a different angle, each forking once and tapering slightly towards its tip. The mark must be deliberately asymmetric and off-balance, the way a real hypha grows: no radial symmetry, no rotational repetition, no evenly spaced arms, no ball-tipped terminals, and no lattice of interconnected nodes. It must not read as a snowflake, an asterisk, a star, a molecule diagram or a network graph. Render it in flat gold #C9A24A on a near-black #0B0E0C ground. It will be read at 16 pixels, so keep the strokes thick and even, the branch count to three, and the silhouette simple enough to survive at that size. Flat graphic mark, centred, generous margin, no text. A flat graphic or textural render, not a photograph, 3D render or CGI, and with no depth of field or lens effects. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-apple-touch.png`

**Slot:** apple-touch-icon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**What came back:** A different mark entirely, not the favicon glyph: sixteen ball-tipped spokes and four hubs, reading as a molecule or network diagram, centred rather than full-bleed, and far too intricate for 180 px.

```text
Design a single mycelial node with exactly three threads branching from it, each thread a different length and leaving at a different angle, each forking once and tapering slightly towards its tip. The mark must be deliberately asymmetric and off-balance, the way a real hypha grows: no radial symmetry, no rotational repetition, no evenly spaced arms, no ball-tipped terminals, and no lattice of interconnected nodes. It must not read as a snowflake, an asterisk, a star, a molecule diagram or a network graph. Render it in flat gold #C9A24A on a near-black #0B0E0C ground. Fill the frame with it, edge to edge, leaving only a narrow margin - it is a home-screen icon read at 180 pixels, so keep the strokes thick, the branch count to three and the silhouette simple. Flat graphic mark, no text. A flat graphic or textural render, not a photograph, 3D render or CGI, and with no depth of field or lens effects. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 5. Under-sized — re-run at `4K`, prompt unchanged

Every 16:9 file measured came back **2752 × 1536**. Per §2.1 of the manifest that is the `2K` tier,
and it is smaller than the 3000 × 1688 variant the theme requests, so the browser upscales and the
result is soft on a retina screen. The 4:5 portraits are fine: they arrive at 1856 × 2304 and
comfortably exceed their slots.

| File | Note |
|---|---|
| `hero-forest.jpg` | index > hero.image - the one that matters most; the browser would upscale the home hero |
| `page-about-hero.jpg` |  |
| `page-sourcing-hero.jpg` |  |
| `page-species-hero.jpg` | also in the subject list above |
| `page-mushroom-finder-hero.jpg` |  |
| `page-faq-hero.jpg` |  |
| `page-contact-hero.jpg` |  |
| `page-disclaimer-hero.jpg` | confirmed 2K by the generator - the 4K redo was blocked by a credit run-out |
| `page-shipping-returns-hero.jpg` |  |

Nothing about these prompts is wrong. Re-run them from the prompt book with `imageSize: "4K"`. If 4K
is not enabled on the account, this is the moment to move these nine to Nano Banana Pro.

---

## 6. Running total

| | Files |
|---|---|
| Part A, generated | 59 |
| Inspected | **59** |
| Re-run for subject, vessel or text | 9 |
| Re-run for composition or format | 8 |
| Re-run at 4K, prompt unchanged | 9 |
| Rename `.png` → `.jpg`, no re-run | 1 (`texture-slate`) |
| Redraw as vector | 2 (`brand-favicon`, `brand-apple-touch`) |
| Pass, no action | 33 |

`page-species-hero` is counted once in the subject list and again in the 4K list; it needs both.

Beyond Part A, the **71 product plates** remain blocked on photographs of the 23 real bottles. Six of
those prompts carried the category defect and are corrected here too, so they will run correctly
first time once the reference photographs exist.
