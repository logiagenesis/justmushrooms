# 21 — Image re-run sheet

**Status after the third batch (02/09/2026, 21:12).** Part A is complete at 59 of 59 — every image
the site needs apart from the 71 product plates, which still wait on photographs of the real bottles.
What is left is a format problem, a resolution question, and one check nobody has done yet.

Full context: [`19-image-generation-manifest.md`](19-image-generation-manifest.md).
The complete prompt book: [`20-image-prompt-book.md`](20-image-prompt-book.md).

## Where the three batches landed

| Group | Wanted | Batch 1 | Batch 2 | **Batch 3** |
|---|---|---|---|---|
| Species | 24 | 24 | 24 (4 misnamed) | **24** |
| Collections | 7 | 7 | 7 | **7** |
| Blog | 7 | 7 | 7 | **7** |
| Brand | 4 | 4 | 4 | **4** |
| Pages | 10 | 6 | 5 | **10** |
| Textures | 4 | 4 | 3 | **4** |
| Home | 3 | 0 | 0 | **3** |
| **Total** | **59** | 52 | 50 | **59** |

**Fixed in batch 3:** the whole home group arrived, all ten page heroes are present, `texture-slate`
came back, and the four hash-suffixed species social cards were renamed. Nothing from the previous
sheet's missing list is outstanding.

---

## 1. The transparency problem — still open

Six files are JPEGs carrying a `.png` extension, unchanged across all three batches. **JPEG has no
alpha channel**, so renaming cannot fix it: the overlays are opaque rectangles that cannot be layered,
and the favicon will show a black box around the glyph.

One regression worth catching: **`texture-spores.png` was a genuine PNG in batch 2** and is a JPEG
again in batch 3. That batch 2 copy is the only real PNG produced so far — recover it rather than
regenerate it.

**The fix for the three overlays is to stop needing alpha.** Generate them as light marks on pure
black, save as JPEG, and let CSS composite:

```css
.texture-overlay {
  background-image: url("texture-mycelium-lines.jpg");
  mix-blend-mode: screen;   /* black becomes fully transparent */
  opacity: .35;
}
```

Black reads as zero under `screen`, so you get real transparency without an alpha channel, a smaller
file, and intensity control in CSS rather than baked into the pixels. `texture-slate` is a surface,
not an overlay — rename it `.jpg` and it is finished.

**The two icons should not be raster at all.** A favicon is read at 16 px; a generated one is mushy in
any format. Use the generated glyph as reference, redraw it as vector, export the PNGs from that.

### `texture-spores.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Status:** JPEG in batch 3. Batch 2 had the only genuine PNG of this file, so this is a regression - that copy is worth recovering.

```text
Render fine suspended spore dust particles in warm white, scattered unevenly, against a fully transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-mycelium-lines.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Status:** JPEG in all three batches.

```text
Render delicate branching mycelial linework at a single consistent stroke weight, in pale green #8FF7C8, against a fully transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-paper-grain.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Status:** JPEG in all three batches.

```text
Render a neutral organic paper grain at low contrast, seamless and tileable, against a transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `texture-slate.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`
**Status:** JPEG in all three batches. This one is a surface rather than an overlay, so it needs no transparency - leave it as a JPEG and just rename it .jpg.

```text
Render a wet dark slate surface texture, seamless and tileable, with subtle water beading and a raking highlight. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-favicon.png`

**Slot:** favicon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**Status:** JPEG in all three batches. A favicon without transparency shows a black box around the glyph at 16 px.

```text
Design a single simplified mycelium-node glyph: one central node with three or four branching threads, rendered in flat gold #C9A24A on a near-black #0B0E0C ground. It must stay legible when reduced to 16 pixels, so keep strokes thick and even and the silhouette simple. Flat graphic mark, centred, generous margin, no text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### `brand-apple-touch.png`

**Slot:** apple-touch-icon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`
**Status:** JPEG in all three batches. Full-bleed, so less visible than the favicon, but still mislabelled.

```text
Design the same simplified mycelium-node glyph in flat gold #C9A24A, full-bleed on a near-black #0B0E0C ground with a tighter margin. Flat graphic mark, no text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## 2. A resolution question — check before uploading

The nine images below sit at roughly 3 MB in batch 3, while comparable images from the earlier runs
are 8–11 MB. A consistent 3× gap across a whole cohort suggests the gap-fill run used `2K` where the
rest used `4K`. File size is not proof — JPEG quality settings move it too — so **check the pixel
dimensions rather than taking this as fact.**

It matters most for the first row. Per §2.1 of the manifest, `2K` at 16:9 is roughly 2668 × 1500,
which is *smaller than the 3000 × 1688 variant the theme requests* — so the browser would upscale the
home hero, and it will look soft on a retina screen.

| File | Batch 3 size | Note |
|---|---|---|
| `hero-forest.jpg` | 3.0 MB | The home page hero. If this is 2K it is smaller than the 3000x1688 variant the theme requests. |
| `hero-forest-mobile.jpg` | 3.4 MB |  |
| `page-index-process.jpg` | 3.1 MB |  |
| `page-sourcing-hero.jpg` | 3.5 MB |  |
| `page-sourcing-detail.jpg` | 3.3 MB |  |
| `page-species-hero.jpg` | 3.0 MB |  |
| `page-mushroom-finder-hero.jpg` | 3.1 MB |  |
| `page-disclaimer-hero.jpg` | 3.2 MB |  |
| `species-sceletium-hero.jpg` | 3.0 MB | Regenerated in batch 3 but still in the small cohort; batch 1 and 2 held byte-identical copies. |

Anything under 3000 px on the long edge should be re-run at `4K` from the prompt book. If 4K is not
enabled on the account, that is the moment to move these few to Nano Banana Pro.

---

## 3. The check nobody has done

**No image has been visually inspected.** `drive.google.com` is blocked by the agent environment's
egress proxy, and Drive returns an empty text representation for JPEGs, so every finding in this
document comes from file metadata — names, sizes, MIME types — and none of it says whether the
pictures are right.

That leaves the rejection table in §7 of the manifest entirely unverified. The risks it exists to
catch are exactly the ones metadata cannot see: a Lion's Mane with gills, a chaga growing from the
ground rather than a living birch, turkey tail with gills instead of pores, an opaque tremella, a
cordyceps emerging from an insect, and above all **Sceletium rendered as a mushroom rather than the
succulent it is.**

To unblock it, put downsampled copies somewhere in the shared folder — 1024 px on the long edge is
plenty:

```bash
# ImageMagick
mkdir -p previews
for f in */*.jpg; do magick "$f" -resize 1024x1024\> "previews/$(basename "$f")"; done

# macOS, no extra tooling
mkdir -p previews && cp */*.jpg previews/ && sips -Z 1024 previews/*.jpg
```

At that size the 24 species images can be pulled and checked one by one, with a written pass or fail
against §7 for each.

---

## 4. Running total

| | Files |
|---|---|
| Complete and correct | 53 |
| Re-save or re-approach — transparency | 6 |
| Verify dimensions, re-run if 2K | 9 |
| Visually unverified | **59** |

The overlap is deliberate: the last row covers everything, because nothing has been looked at.
