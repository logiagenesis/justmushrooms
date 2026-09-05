# Just Mushrooms — generate these now

Source: `docs/20-image-prompt-book.md` + `docs/21-image-rerun-sheet.md` at branch `claude/just-mushrooms-rebuild-q3a9e4`.

You only generate **5 files**. The other 54 Part A images already passed visual QA. Do not re-roll them.

## Genspark lock (do not change)

| Setting | Value |
|---|---|
| Tool | Genspark AI Image Agent |
| Model | **Nano Banana 2 only** |
| Forbidden | Flash, Flash Lite, 4K, Nano Banana Pro unless you explicitly decide later |
| Size | **2K on every file** |
| Save as | Exact filename below. Handles are load-bearing. |

Check the new frame against the **failure note**, not against taste.

Run order: 1 combo card → 2 evidence article → 3 home hero (attach mobile hero as reference) → 4–5 icon references.

## 1. `collection-combo-deals-og.jpg` — re-run

**Ratio:** `3:2` · **Size:** `2K`

**Last failure:** ~25 identical bottles, no visible 50+30 pairing, mossy forest floor.

```text
Photograph a small number of paired amber glass dropper bottles in the two Just Mushrooms apothecary sizes only: each pair is one 50 ml bottle standing next to one 30 ml bottle, both with a black ribbed screw cap holding a glass pipette. Not cork stoppers, not glass stoppers, not spirit or wine bottles, and nothing larger than 50 ml. Show three or four such pairs only — six to eight bottles total — receding slightly, not a crowd of twenty. Lit with a single soft key at 45 degrees against a seamless near-black #0B0E0C studio ground. No moss, no forest floor, no soil, no leaves. Compose wide with generous uncluttered dark space on one third of the frame for an overlaid wordmark. That dark space must fall away naturally in the scene itself — no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette, and no visible join anywhere in the frame. Premium editorial, matte, medium-format look. Photographic realism only — not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Avoid a generic stock-photograph look.
```

## 2. `article-reading-evidence-grades.jpg` — re-run

**Ratio:** `16:9` · **Size:** `2K`

**Last failure:** antique deckle folio on moss.

```text
Photograph a short stack of modern white A4 printer paper on a dark slate slab, seen at a shallow oblique angle so any print reads only as a soft grey texture. The paper must look contemporary: bright white, sharp machine-cut edges, no deckle, no foxing, no parchment, no vellum, no leather binding, no antique folio, no manuscript, no moss, no forest floor. Reading glasses and a single pencil sit beside the stack. Lit by a single soft key at 45 degrees against near-black shadows. Premium editorial, matte, medium-format look. No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank, or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent titles, headings, ingredient lists, author names, dates or product names, and do not render lorem-ipsum or pseudo-words that look like language at a glance. Photographic realism only — not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical. No people, faces or hands. Avoid a generic stock-photograph look.
```

## 3. `hero-forest.jpg` — size only at 2K

**Ratio:** `16:9` · **Size:** `2K` (not 4K). Attach approved `hero-forest-mobile.jpg` as reference.

```text
Photograph, wide and cinematic, the floor of a Southern Cape Afromontane forest at first light: yellowwood and stinkwood trunks, tree ferns, deep leaf litter, and low sea mist threading between the trunks. A single shaft of warm light strikes damp ground where pale fungal fruiting bodies emerge, with faint mycelial threads visible in the litter. Hold the shadows near-black and the palette to muted green and amber. Leave a large uncluttered dark area across the left two-thirds of the frame for overlaid text. Atmospheric and restrained. Photographic realism only — not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical. No people, faces or hands. Anatomy must be correct. Avoid a generic stock-photograph look.
```

## 4–5. `brand-favicon.png` and `brand-apple-touch.png` — reference only

Generate both, pick the better glyph, draw **one** vector, export both PNGs from that file.

```text
Design a single mycelial node with exactly three threads branching from it, each thread a different length and leaving at a different angle, each forking once. The mark must be deliberately asymmetric and off-balance, the way a real hypha grows: no radial symmetry, no rotational repetition, no evenly spaced arms, no ball-tipped terminals, and no lattice of interconnected nodes. It must not read as a snowflake, an asterisk, a star, a molecule diagram or a network graph. Render it in flat gold #C9A24A on a near-black #0B0E0C ground. Keep the strokes thick and even — do not taper to hairpoints — keep the branch count to three, centre the mark, and leave a generous margin. Flat graphic mark, no text. A flat graphic or textural render, not a photograph, 3D render or CGI. No text, lettering, watermark, logo or people.
```

## Do not generate

- All 24 species frames — already passed anatomy QA
- Other Part A files marked approved in the prompt book
- Do not invent new bottle plates. The 23 live-store product photographs are listed in `data/live-product-images/`. Pull them with `python3 scripts/preview/pull-live-product-images.py`.
