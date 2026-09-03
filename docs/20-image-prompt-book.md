# 20 — Image prompt book

**Every prompt, written out in full and ready to paste.** Nothing here needs assembling: the shared
style, the palette and the exclusions are already baked into each block. Work top to bottom.

Generated from `scripts/build-image-manifest.mjs`. The reasoning behind each choice — sizing maths,
anatomy rules, the compliance argument — is in [`19-image-generation-manifest.md`](19-image-generation-manifest.md);
the spreadsheet version is [`data/image-manifest.csv`](../data/image-manifest.csv).

## Before you start

**Model:** Nano Banana 2 (`gemini-3.1-flash-image`). Set the ratio and size per image from the line
above each prompt — they are not suggestions, they are what the theme requests:

```json
"generationConfig": { "imageConfig": { "aspectRatio": "16:9", "imageSize": "4K" } }
```

The `K` must be uppercase. `4K` is still a preview capability — if it is not enabled on your account,
generate those at `2K` and upscale, or move them to Nano Banana Pro (`gemini-3-pro-image`).

**Two rules that decide whether the output is usable:**

1. **Check anatomy before you accept a species image.** A Lion's Mane with gills or a chaga growing
   from the ground undoes the credibility the cited copy is built on. The rejection table is §7 of the
   manifest. Sceletium is the trap — it is a succulent, and the model will hand you a mushroom.
2. **Part B needs reference photographs.** Do not run those from the text alone.

**Filenames are load-bearing.** They match the handles the theme and the Shopify metaobjects expect.
Save each file exactly as named or it will not appear in its slot.

---

## Part A — ready to generate now (59 images)

Nothing blocks these. The species set is the highest-value work on the list.

### Species — 24 images

### 1. `species-lions-mane-hero.jpg`

**Slot:** metaobject lions-mane.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Macro photograph of a Lion's Mane fruit body, its white spines hanging from dead hardwood.

```text
Photograph, in ultra-detailed cinematic macro, a Lion's Mane fungus, Hericium erinaceus, a single rounded white cushion with long cascading icicle-like spines hanging downward, with no cap, no gills and no stem, growing from a wound on a dead hardwood trunk in Southern Cape Afromontane forest. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 2. `species-lions-mane-macro.jpg`

**Slot:** metaobject lions-mane.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Macro photograph of a Lion's Mane fruit body, its white spines hanging from dead hardwood.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of the hanging white spines of Hericium erinaceus, individual teeth resolved, faint translucency at the tips, dew beading. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 3. `species-lions-mane-og.jpg`

**Slot:** metaobject lions-mane.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Macro photograph of a Lion's Mane fruit body, its white spines hanging from dead hardwood.

```text
Photograph, in ultra-detailed cinematic macro, a Lion's Mane fungus, Hericium erinaceus, a single rounded white cushion with long cascading icicle-like spines hanging downward, with no cap, no gills and no stem, growing from a wound on a dead hardwood trunk in Southern Cape Afromontane forest. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 4. `species-reishi-hero.jpg`

**Slot:** metaobject reishi.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Varnished red-brown reishi bracket growing on a dead hardwood stump.

```text
Photograph, in ultra-detailed cinematic macro, a Reishi bracket fungus, Ganoderma lucidum, a kidney-shaped shelf with a lacquered varnished red-brown cap, concentric growth zoning, a pale cream growing margin, and a pore surface underneath with no gills, on a dead hardwood stump. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 5. `species-reishi-macro.jpg`

**Slot:** metaobject reishi.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Varnished red-brown reishi bracket growing on a dead hardwood stump.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of the varnished surface of a Ganoderma lucidum cap, concentric red-brown lacquer bands catching the key light, white growing margin at the frame edge. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 6. `species-reishi-og.jpg`

**Slot:** metaobject reishi.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Varnished red-brown reishi bracket growing on a dead hardwood stump.

```text
Photograph, in ultra-detailed cinematic macro, a Reishi bracket fungus, Ganoderma lucidum, a kidney-shaped shelf with a lacquered varnished red-brown cap, concentric growth zoning, a pale cream growing margin, and a pore surface underneath with no gills, on a dead hardwood stump. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 7. `species-chaga-hero.jpg`

**Slot:** metaobject chaga.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Black cracked chaga conk growing on the trunk of a living birch.

```text
Photograph, in ultra-detailed cinematic macro, a Chaga sterile conk, Inonotus obliquus, a black cracked charcoal-like mass erupting from the trunk of a living birch tree, with rusty orange-brown interior visible in the fissures - not a mushroom shape and not on the ground. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 8. `species-chaga-macro.jpg`

**Slot:** metaobject chaga.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Black cracked chaga conk growing on the trunk of a living birch.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of the cracked black exterior and burnt-orange cork interior of a chaga conk, deep fissures, birch bark visible at the frame edge. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 9. `species-chaga-og.jpg`

**Slot:** metaobject chaga.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Black cracked chaga conk growing on the trunk of a living birch.

```text
Photograph, in ultra-detailed cinematic macro, a Chaga sterile conk, Inonotus obliquus, a black cracked charcoal-like mass erupting from the trunk of a living birch tree, with rusty orange-brown interior visible in the fissures - not a mushroom shape and not on the ground. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 10. `species-cordyceps-hero.jpg`

**Slot:** metaobject cordyceps.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Cluster of orange Cordyceps militaris clubs emerging from substrate.

```text
Photograph, in ultra-detailed cinematic macro, Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with finely pimpled surfaces emerging from substrate, with no insects and nothing parasitising a visible host. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 11. `species-cordyceps-macro.jpg`

**Slot:** metaobject cordyceps.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Cluster of orange Cordyceps militaris clubs emerging from substrate.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of a single orange Cordyceps militaris club, perithecia visible as fine bumps, translucent glow where backlit. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 12. `species-cordyceps-og.jpg`

**Slot:** metaobject cordyceps.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Cluster of orange Cordyceps militaris clubs emerging from substrate.

```text
Photograph, in ultra-detailed cinematic macro, Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with finely pimpled surfaces emerging from substrate, with no insects and nothing parasitising a visible host. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 13. `species-turkey-tail-hero.jpg`

**Slot:** metaobject turkey-tail.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Overlapping turkey tail brackets banded in brown, ochre and cream on a fallen log.

```text
Photograph, in ultra-detailed cinematic macro, Turkey Tail, Trametes versicolor, overlapping rosettes of thin flexible brackets with concentric velvety bands in brown, ochre, cream and slate, showing a white pore surface beneath and no gills, on a fallen log. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 14. `species-turkey-tail-macro.jpg`

**Slot:** metaobject turkey-tail.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Overlapping turkey tail brackets banded in brown, ochre and cream on a fallen log.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of the concentric banding of a single Trametes versicolor bracket, velvet texture, wavy pale margin. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 15. `species-turkey-tail-og.jpg`

**Slot:** metaobject turkey-tail.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Overlapping turkey tail brackets banded in brown, ochre and cream on a fallen log.

```text
Photograph, in ultra-detailed cinematic macro, Turkey Tail, Trametes versicolor, overlapping rosettes of thin flexible brackets with concentric velvety bands in brown, ochre, cream and slate, showing a white pore surface beneath and no gills, on a fallen log. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 16. `species-tremella-hero.jpg`

**Slot:** metaobject tremella.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Translucent white tremella lobes on a dead broadleaf branch.

```text
Photograph, in ultra-detailed cinematic macro, Tremella fuciformis, a translucent gelatinous white frilly mass of wavy petal-like lobes, glistening and semi-transparent, on a dead broadleaf branch - not opaque and not a capped mushroom. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 17. `species-tremella-macro.jpg`

**Slot:** metaobject tremella.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Translucent white tremella lobes on a dead broadleaf branch.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of translucent Tremella fuciformis lobes, light passing through the gelatinous tissue, water droplets beading on the surface. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 18. `species-tremella-og.jpg`

**Slot:** metaobject tremella.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Translucent white tremella lobes on a dead broadleaf branch.

```text
Photograph, in ultra-detailed cinematic macro, Tremella fuciformis, a translucent gelatinous white frilly mass of wavy petal-like lobes, glistening and semi-transparent, on a dead broadleaf branch - not opaque and not a capped mushroom. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 19. `species-shiitake-hero.jpg`

**Slot:** metaobject shiitake.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Shiitake caps with white cracking, growing from an inoculated oak log.

```text
Photograph, in ultra-detailed cinematic macro, Shiitake, Lentinula edodes, umbrella caps of rich brown with white cracking across the cap surface, inrolled margins and cream gills beneath, growing from an inoculated oak log. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 20. `species-shiitake-macro.jpg`

**Slot:** metaobject shiitake.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Shiitake caps with white cracking, growing from an inoculated oak log.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of a shiitake cap showing the white fissured crackle pattern against brown, gill edge visible at the bottom of the frame. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 21. `species-shiitake-og.jpg`

**Slot:** metaobject shiitake.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Shiitake caps with white cracking, growing from an inoculated oak log.

```text
Photograph, in ultra-detailed cinematic macro, Shiitake, Lentinula edodes, umbrella caps of rich brown with white cracking across the cap surface, inrolled margins and cream gills beneath, growing from an inoculated oak log. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 22. `species-sceletium-hero.jpg`

**Slot:** metaobject sceletium.hero_image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Sceletium tortuosum succulent in flower, growing in Karoo quartz gravel.

```text
Photograph, in ultra-detailed cinematic macro, a succulent plant and not a fungus - Sceletium tortuosum, sprawling fleshy green leaves with raised translucent bladder cells on the surface, and a small star-shaped white-to-pale-yellow flower with fine filamentous petals, growing in dry Karoo quartz gravel under low sun. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine dry dust and quartz glitter suspended in the light beam, arid mineral texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. It is a succulent plant: no mushroom, no fungus, no cap, no gills, no stem anywhere in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 23. `species-sceletium-macro.jpg`

**Slot:** metaobject sceletium.macro_editorial_image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Sceletium tortuosum succulent in flower, growing in Karoo quartz gravel.

```text
Photograph, in ultra-detailed cinematic macro, extreme close-up of Sceletium tortuosum leaves showing the raised translucent idioblast cells, one open pale flower, arid grit background. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine dry dust and quartz glitter suspended in the light beam, arid mineral texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. It is a succulent plant: no mushroom, no fungus, no cap, no gills, no stem anywhere in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 24. `species-sceletium-og.jpg`

**Slot:** metaobject sceletium.og_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Sceletium tortuosum succulent in flower, growing in Karoo quartz gravel.

```text
Photograph, in ultra-detailed cinematic macro, a succulent plant and not a fungus - Sceletium tortuosum, sprawling fleshy green leaves with raised translucent bladder cells on the surface, and a small star-shaped white-to-pale-yellow flower with fine filamentous petals, growing in dry Karoo quartz gravel under low sun. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, fine dry dust and quartz glitter suspended in the light beam, arid mineral texture, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. It is a succulent plant: no mushroom, no fungus, no cap, no gills, no stem anywhere in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### Home page — 3 images

### 25. `hero-forest.jpg`

**Slot:** index > hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Mist threading between yellowwood trunks in Afromontane forest at first light.

```text
Photograph, wide and cinematic, the floor of a Southern Cape Afromontane forest at first light: yellowwood and stinkwood trunks, tree ferns, deep leaf litter, and low sea mist threading between the trunks. A single shaft of warm light strikes damp ground where pale fungal fruiting bodies emerge, with faint mycelial threads visible in the litter. Hold the shadows near-black and the palette to muted green and amber. Leave a large uncluttered dark area across the left two-thirds of the frame for overlaid text. Atmospheric and restrained. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 26. `hero-forest-mobile.jpg`

**Slot:** index > hero.image_mobile · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Mist threading between yellowwood trunks in Afromontane forest at first light.

```text
Photograph the same Southern Cape Afromontane forest scene recomposed vertically: the light shaft and fungal cluster sit in the lower third, canopy and sea mist above. Keep the grade identical - muted green and amber, near-black shadows - and leave clear dark space across the top half of the frame for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 27. `page-index-process.jpg`

**Slot:** index > image-with-text.image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Amber demijohns and dried mushroom material on a workshop bench.

```text
Photograph a small-batch extraction still life: amber glass demijohns on a scarred timber bench, spring water in a plain glass vessel, and dried mushroom material in a shallow steel tray, lit by late afternoon light through a dusty window. It should read as an artisanal workshop and not a laboratory - warm and matter-of-fact, with no people, no lab equipment and no clinical surfaces. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### Static pages — 10 images

### 28. `page-about-hero.jpg`

**Slot:** page.about > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Plettenberg Bay coastline at dawn seen from the forest edge.

```text
Photograph the Plettenberg Bay coastline at dawn seen from the forest edge, with mist lying over the Tsitsikamma, restrained and very wide. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 29. `page-about-story.jpg`

**Slot:** page.about > image-with-text.image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** Handwritten batch notes and a scale on a workbench.

```text
Photograph a workbench detail - handwritten batch notes, a balance scale and amber glass in late light, with no faces and no branding. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 30. `page-sourcing-hero.jpg`

**Slot:** page.sourcing > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Inoculated hardwood logs stacked in dappled forest shade.

```text
Photograph inoculated hardwood logs stacked in dappled forest shade, damp and orderly, reading as real cultivation. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 31. `page-sourcing-detail.jpg`

**Slot:** page.sourcing > image-with-text.image · **Ratio:** `4:5` · **Size:** `2K`
**Alt text:** A wax-sealed inoculation point on an oak log.

```text
Photograph a close detail of a drilled and wax-sealed inoculation point on an oak log, with sawdust spawn visible in the hole. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 32. `page-species-hero.jpg`

**Slot:** page.species-index > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Eight mushroom and plant specimens laid out on dark slate.

```text
Photograph a flat-lay taxonomy plate of the eight Just Mushrooms species arranged in an even grid on dark slate, evenly lit and museum-like - Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Tremella fuciformis, a translucent white gelatinous frill of wavy lobes; Shiitake (Lentinula edodes), a brown umbrella cap with white cracking across it and cream gills beneath; and Sceletium tortuosum, a fleshy green succulent plant with raised translucent bladder cells and one small pale star-shaped flower - a plant, not a fungus. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 33. `page-mushroom-finder-hero.jpg`

**Slot:** page.mushroom-finder > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** A branching mycelial network against near-black.

```text
Photograph a branching mycelial network glowing very faintly against near-black, abstract but organic, suggesting a decision tree. Keep the pale green accent under five percent of the frame. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 34. `page-faq-hero.jpg`

**Slot:** page.faq > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Layered bracket fungi in quiet macro.

```text
Photograph layered bracket fungi in quiet macro, calm and neutral, with heavy negative space. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 35. `page-contact-hero.jpg`

**Slot:** page.contact > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** The Garden Route coast road in soft morning light.

```text
Photograph the Garden Route coast road in soft morning light, giving a sense of place, with no signage and no vehicles. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 36. `page-disclaimer-hero.jpg`

**Slot:** page.disclaimer > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** Wet dark slate under a single raking light.

```text
Photograph wet dark slate texture under a single raking light, deliberately plain, with no specimen in frame - sober and quiet. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 37. `page-shipping-returns-hero.jpg`

**Slot:** page.shipping-returns > page-hero.image · **Ratio:** `16:9` · **Size:** `4K`
**Alt text:** An unbranded kraft parcel on a timber bench.

```text
Photograph an unbranded kraft parcel and paper packing material on a timber bench, honest and practical, with no courier branding and no logos. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### Collection social cards — 7 images

### 38. `collection-all-og.jpg`

**Slot:** collection all - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Shop all collection.

```text
Photograph an arc of amber bottles receding into shadow at shallow depth of field, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 39. `collection-single-species-og.jpg`

**Slot:** collection single-species - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Single-species tinctures collection.

```text
Photograph the eight Just Mushrooms species laid out in an even grid on dark slate, taxonomic and evenly lit - Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Tremella fuciformis, a translucent white gelatinous frill of wavy lobes; Shiitake (Lentinula edodes), a brown umbrella cap with white cracking across it and cream gills beneath; and Sceletium tortuosum, a fleshy green succulent plant with raised translucent bladder cells and one small pale star-shaped flower - a plant, not a fungus, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 40. `collection-blends-og.jpg`

**Slot:** collection blends - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Blends collection.

```text
Photograph six named specimens overlapping and merging into one another in a warmer grade - Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; and Tremella fuciformis, a translucent white gelatinous frill of wavy lobes, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 41. `collection-pets-og.jpg`

**Slot:** collection pets - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** For pets collection.

```text
Photograph a worn leather collar and an amber bottle on a sunlit floorboard, with no animal in frame, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 42. `collection-combo-deals-og.jpg`

**Slot:** collection combo-deals - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Combo deals collection.

```text
Photograph paired amber bottles, one taller and one shorter, repeated in receding rows, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 43. `collection-botanicals-og.jpg`

**Slot:** collection botanicals - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Botanicals collection.

```text
Photograph a sceletium succulent in Karoo quartz grit, wide and arid - a plant, not a fungus, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 44. `collection-frontpage-og.jpg`

**Slot:** collection frontpage - featured_image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`
**Alt text:** Home page collection.

```text
Photograph the Southern Cape forest floor at first light with mist between the trunks, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### Blog — 7 images

### 45. `article-blog-hero.jpg`

**Slot:** article card - Blog index banner · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** Blog index banner.

```text
Photograph an open field notebook on a timber desk with three dried specimens laid beside it - Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; and Sceletium tortuosum, a fleshy green succulent plant with raised translucent bladder cells and one small pale star-shaped flower - a plant, not a fungus, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 46. `article-what-is-a-tincture.jpg`

**Slot:** article card - What a dual extraction actually is · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** What a dual extraction actually is.

```text
Photograph a glass vessel of spring water, a measure of clear ethanol and dried mushroom material arranged on dark slate, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 47. `article-fruit-body-vs-mycelium.jpg`

**Slot:** article card - Fruit body against grain-grown mycelium · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** Fruit body against grain-grown mycelium.

```text
Photograph a whole mushroom fruit body on the left and a block of pale grain-grown mycelium on the right, side by side on dark slate for comparison, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 48. `article-reading-evidence-grades.jpg`

**Slot:** article card - How to read the evidence grades · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** How to read the evidence grades.

```text
Photograph a stack of printed journal papers on dark slate, annotated in pencil, with reading glasses beside them, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 49. `article-how-to-take-a-tincture.jpg`

**Slot:** article card - How to take a tincture · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** How to take a tincture.

```text
Photograph a glass dropper held over a plain glass of water on a breakfast table in morning light, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 50. `article-storage-and-shelf-life.jpg`

**Slot:** article card - Storage and shelf life · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** Storage and shelf life.

```text
Photograph amber bottles standing in a dark cupboard with light falling across the shelf edge, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 51. `article-sa-regulations-explained.jpg`

**Slot:** article card - South African regulation, explained · **Ratio:** `16:9` · **Size:** `2K`
**Alt text:** South African regulation, explained.

```text
Photograph plain printed documents and a pen on a timber desk, sober and unbranded, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### Brand and system — 4 images

### 52. `brand-favicon.png`

**Slot:** favicon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`

```text
Design a single simplified mycelium-node glyph: one central node with three or four branching threads, rendered in flat gold #C9A24A on a near-black #0B0E0C ground. It must stay legible when reduced to 16 pixels, so keep strokes thick and even and the silhouette simple. Flat graphic mark, centred, generous margin, no text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 53. `brand-apple-touch.png`

**Slot:** apple-touch-icon source - redraw as vector · **Ratio:** `1:1` · **Size:** `2K`

```text
Design the same simplified mycelium-node glyph in flat gold #C9A24A, full-bleed on a near-black #0B0E0C ground with a tighter margin. Flat graphic mark, no text. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 54. `brand-og-default.jpg`

**Slot:** default og:image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`

```text
Photograph the Southern Cape forest floor at first light with mist between the trunks and a shaft of warm light on damp ground. Compose it very wide with the whole left half dark and empty for an overlaid wordmark. Muted green and amber, near-black shadows. Set the words "JUST MUSHROOMS" into that empty half in a fine serif, in cream, small and widely letterspaced. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no watermark, signature or stray lettering beyond the wordmark described above, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 55. `brand-og-home.jpg`

**Slot:** home og:image (crop to 1200x630) · **Ratio:** `3:2` · **Size:** `2K`

```text
Photograph an arc of amber dropper bottles receding into near-black shadow at shallow depth of field, warm rim light on the glass shoulders. Compose wide with the left third empty and dark for an overlaid wordmark. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### Textures — 4 images

### 56. `texture-spores.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`

```text
Render fine suspended spore dust particles in warm white, scattered unevenly, against a fully transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 57. `texture-mycelium-lines.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`

```text
Render delicate branching mycelial linework at a single consistent stroke weight, in pale green #8FF7C8, against a fully transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 58. `texture-paper-grain.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`

```text
Render a neutral organic paper grain at low contrast, seamless and tileable, against a transparent background. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 59. `texture-slate.png`

**Slot:** decorative overlay - aria-hidden · **Ratio:** `1:1` · **Size:** `2K`

```text
Render a wet dark slate surface texture, seamless and tileable, with subtle water beading and a raking highlight. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

---

## Part B — needs a reference photograph first (71 images)

**Stop.** These prompts all begin "Restage the amber glass dropper bottle from the reference image"
because they are meant to be run with a photograph of the real bottle attached. Run them without one
and the model invents a bottle: wrong label, wrong cap, wrong fill colour, wrong volume. Publishing
that is a misrepresentation of a product under the CPA, and it is trivially disproved by a photograph
of the actual bottle.

**What to do first:** photograph each of the 23 products once — flat, in daylight, against a plain
wall. A phone is fine. It is about an afternoon's work and it unblocks all 71 images below.

Nano Banana 2 holds the fidelity of up to 14 reference objects, so attaching that photo and letting
it restage the real bottle is the supported path, not a workaround. Two things still need a human:
the model has no seed or hard consistency lock, and its text rendering degrades on small dense type —
which is exactly what a tincture label is. Compare every result against the real bottle before it
goes live, or composite the real label in afterwards.

### 60. `product-lions-mane-mushroom-tincture-30ml.jpg`

**Slot:** product lions-mane-mushroom-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Lions Mane Mushroom Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a single white spined Lion's Mane specimen and a chip of dead hardwood sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 61. `product-lions-mane-mushroom-tincture-30ml-macro.jpg`

**Slot:** product lions-mane-mushroom-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Lions Mane Mushroom Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 62. `product-lions-mane-mushroom-tincture-30ml-scene.jpg`

**Slot:** product lions-mane-mushroom-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Lions Mane Mushroom Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a single white spined Lion's Mane specimen and a chip of dead hardwood sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 63. `product-lions-mane-mushroom-tincture-50ml.jpg`

**Slot:** product lions-mane-mushroom-tincture-50ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Lions Mane Mushroom Tincture (50ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange two Lion's Mane specimens (Hericium erinaceus), white cushions of long hanging spines with no cap, no gills and no stem, in a wider set with more negative space sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 64. `product-lions-mane-mushroom-tincture-50ml-macro.jpg`

**Slot:** product lions-mane-mushroom-tincture-50ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Lions Mane Mushroom Tincture (50ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 65. `product-lions-mane-mushroom-tincture-50ml-scene.jpg`

**Slot:** product lions-mane-mushroom-tincture-50ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Lions Mane Mushroom Tincture (50ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange two Lion's Mane specimens (Hericium erinaceus), white cushions of long hanging spines with no cap, no gills and no stem, in a wider set with more negative space sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 66. `product-lions-mane-mushroom-elixir-combo-50ml-30ml.jpg`

**Slot:** product lions-mane-mushroom-elixir-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Lions Mane Mushroom Elixir Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side, 50 ml and 30 ml, with a Lion's Mane specimen behind sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 67. `product-lions-mane-mushroom-elixir-combo-50ml-30ml-macro.jpg`

**Slot:** product lions-mane-mushroom-elixir-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Lions Mane Mushroom Elixir Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 68. `product-lions-mane-mushroom-elixir-combo-50ml-30ml-scene.jpg`

**Slot:** product lions-mane-mushroom-elixir-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Lions Mane Mushroom Elixir Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side, 50 ml and 30 ml, with a Lion's Mane specimen behind sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 69. `product-reishi-mushroom-tincture-30ml.jpg`

**Slot:** product reishi-mushroom-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Reishi Mushroom Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a varnished red-brown reishi bracket and dark bark sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 70. `product-reishi-mushroom-tincture-30ml-macro.jpg`

**Slot:** product reishi-mushroom-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Reishi Mushroom Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 71. `product-reishi-mushroom-tincture-30ml-scene.jpg`

**Slot:** product reishi-mushroom-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Reishi Mushroom Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a varnished red-brown reishi bracket and dark bark sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 72. `product-reishi-mushroom-elixir-combo-50ml-30ml.jpg`

**Slot:** product reishi-mushroom-elixir-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Reishi Mushroom Elixir Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a reishi bracket propped behind sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 73. `product-reishi-mushroom-elixir-combo-50ml-30ml-macro.jpg`

**Slot:** product reishi-mushroom-elixir-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Reishi Mushroom Elixir Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 74. `product-reishi-mushroom-elixir-combo-50ml-30ml-scene.jpg`

**Slot:** product reishi-mushroom-elixir-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Reishi Mushroom Elixir Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a reishi bracket propped behind sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 75. `product-chaga-mushroom-tincture-30ml.jpg`

**Slot:** product chaga-mushroom-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Chaga Mushroom Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a chunk of black cracked chaga conk and a curl of birch bark sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 76. `product-chaga-mushroom-tincture-30ml-macro.jpg`

**Slot:** product chaga-mushroom-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Chaga Mushroom Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 77. `product-chaga-mushroom-tincture-30ml-scene.jpg`

**Slot:** product chaga-mushroom-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Chaga Mushroom Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a chunk of black cracked chaga conk and a curl of birch bark sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 78. `product-chaga-mushroom-elixir-combo-50ml-30ml.jpg`

**Slot:** product chaga-mushroom-elixir-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Chaga Mushroom Elixir Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a chaga chunk and birch bark sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 79. `product-chaga-mushroom-elixir-combo-50ml-30ml-macro.jpg`

**Slot:** product chaga-mushroom-elixir-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Chaga Mushroom Elixir Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 80. `product-chaga-mushroom-elixir-combo-50ml-30ml-scene.jpg`

**Slot:** product chaga-mushroom-elixir-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Chaga Mushroom Elixir Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a chaga chunk and birch bark sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 81. `product-cordyceps-mushroom-tincture-30ml.jpg`

**Slot:** product cordyceps-mushroom-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Cordyceps Mushroom Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a small cluster of orange cordyceps clubs sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 82. `product-cordyceps-mushroom-tincture-30ml-macro.jpg`

**Slot:** product cordyceps-mushroom-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Cordyceps Mushroom Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of golden tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 83. `product-cordyceps-mushroom-tincture-30ml-scene.jpg`

**Slot:** product cordyceps-mushroom-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Cordyceps Mushroom Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a small cluster of orange cordyceps clubs sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 84. `product-cordyceps-mushroom-elixir-combo-50ml-30ml.jpg`

**Slot:** product cordyceps-mushroom-elixir-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Cordyceps Mushroom Elixir Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with orange cordyceps clubs low at the left sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 85. `product-cordyceps-mushroom-elixir-combo-50ml-30ml-macro.jpg`

**Slot:** product cordyceps-mushroom-elixir-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Cordyceps Mushroom Elixir Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of golden tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 86. `product-cordyceps-mushroom-elixir-combo-50ml-30ml-scene.jpg`

**Slot:** product cordyceps-mushroom-elixir-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Cordyceps Mushroom Elixir Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with orange cordyceps clubs low at the left sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 87. `product-turkey-tail-mushroom-tincture-30ml.jpg`

**Slot:** product turkey-tail-mushroom-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Turkey Tail Mushroom Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange banded turkey tail brackets and a fallen leaf sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 88. `product-turkey-tail-mushroom-tincture-30ml-macro.jpg`

**Slot:** product turkey-tail-mushroom-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Turkey Tail Mushroom Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 89. `product-turkey-tail-mushroom-tincture-30ml-scene.jpg`

**Slot:** product turkey-tail-mushroom-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Turkey Tail Mushroom Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange banded turkey tail brackets and a fallen leaf sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 90. `product-turkey-tail-mushroom-elixir-combo-50ml-30ml.jpg`

**Slot:** product turkey-tail-mushroom-elixir-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Turkey Tail Mushroom Elixir Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a turkey tail rosette behind sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 91. `product-turkey-tail-mushroom-elixir-combo-50ml-30ml-macro.jpg`

**Slot:** product turkey-tail-mushroom-elixir-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Turkey Tail Mushroom Elixir Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 92. `product-turkey-tail-mushroom-elixir-combo-50ml-30ml-scene.jpg`

**Slot:** product turkey-tail-mushroom-elixir-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Turkey Tail Mushroom Elixir Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a turkey tail rosette behind sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 93. `product-tremella-mushroom-tincture-30ml.jpg`

**Slot:** product tremella-mushroom-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Tremella Mushroom Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange translucent white tremella lobes, glistening sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 94. `product-tremella-mushroom-tincture-30ml-macro.jpg`

**Slot:** product tremella-mushroom-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Tremella Mushroom Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of pale golden tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 95. `product-tremella-mushroom-tincture-30ml-scene.jpg`

**Slot:** product tremella-mushroom-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Tremella Mushroom Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange translucent white tremella lobes, glistening sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 96. `product-tremella-mushroom-elixir-combo-50ml-30ml.jpg`

**Slot:** product tremella-mushroom-elixir-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Tremella Mushroom Elixir Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with tremella lobes catching the rim light sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 97. `product-tremella-mushroom-elixir-combo-50ml-30ml-macro.jpg`

**Slot:** product tremella-mushroom-elixir-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Tremella Mushroom Elixir Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of pale golden tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 98. `product-tremella-mushroom-elixir-combo-50ml-30ml-scene.jpg`

**Slot:** product tremella-mushroom-elixir-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Tremella Mushroom Elixir Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with tremella lobes catching the rim light sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 99. `product-elixir-of-life-6-mushroom-blend-50ml.jpg`

**Slot:** product elixir-of-life-6-mushroom-blend-50ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Elixir of life 6 Mushroom Blend (50ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange the six species in this blend in a shallow arc with none dominant - Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; and Tremella fuciformis, a translucent white gelatinous frill of wavy lobes sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 100. `product-elixir-of-life-6-mushroom-blend-50ml-macro.jpg`

**Slot:** product elixir-of-life-6-mushroom-blend-50ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Elixir of life 6 Mushroom Blend (50ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 101. `product-elixir-of-life-6-mushroom-blend-50ml-scene.jpg`

**Slot:** product elixir-of-life-6-mushroom-blend-50ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Elixir of life 6 Mushroom Blend (50ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange the six species in this blend in a shallow arc with none dominant - Reishi (Ganoderma lucidum), a kidney-shaped bracket with a lacquered red-brown cap, concentric zoning and a pale cream margin; Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame; Chaga (Inonotus obliquus), a black cracked charcoal-like conk with rusty orange showing in the fissures; Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; and Tremella fuciformis, a translucent white gelatinous frill of wavy lobes sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 102. `product-new-general-maintenance-50ml.jpg`

**Slot:** product new-general-maintenance-50ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of NEW! General Maintenance 50ml on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange the three species in this blend with dried bracken in morning light - Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; and Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 103. `product-new-general-maintenance-50ml-macro.jpg`

**Slot:** product new-general-maintenance-50ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of NEW! General Maintenance 50ml tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 104. `product-new-general-maintenance-50ml-scene.jpg`

**Slot:** product new-general-maintenance-50ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** NEW! General Maintenance 50ml bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange the three species in this blend with dried bracken in morning light - Turkey Tail (Trametes versicolor), thin overlapping brackets banded in brown, ochre, cream and slate, showing a white pore surface and no gills; Lion's Mane (Hericium erinaceus), a white cushion of long hanging spines with no cap, no gills and no stem; and Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with no insect anywhere in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. These are the only organisms permitted in the frame, and each must be rendered exactly as described. No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No insects, no fossils, no shells and no foliage beyond what is described above. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 105. `product-the-workaholic.jpg`

**Slot:** product the-workaholic - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of The Workaholic 50ml on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a slate desk edge, a cold coffee ring and a single Lion's Mane specimen sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 106. `product-the-workaholic-macro.jpg`

**Slot:** product the-workaholic - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of The Workaholic 50ml tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 107. `product-the-workaholic-scene.jpg`

**Slot:** product the-workaholic - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** The Workaholic 50ml bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a slate desk edge, a cold coffee ring and a single Lion's Mane specimen sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 108. `product-relax-no-stress-50ml.jpg`

**Slot:** product relax-no-stress-50ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Relax no stress 50ml amber bottle with fast flow dropper cap on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a soft fabric fold and a reishi bracket in low warm dusk light sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 109. `product-relax-no-stress-50ml-macro.jpg`

**Slot:** product relax-no-stress-50ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Relax no stress 50ml amber bottle with fast flow dropper cap tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 110. `product-relax-no-stress-50ml-scene.jpg`

**Slot:** product relax-no-stress-50ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Relax no stress 50ml amber bottle with fast flow dropper cap bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a soft fabric fold and a reishi bracket in low warm dusk light sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 111. `product-menopause-50ml.jpg`

**Slot:** product menopause-50ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Meno'pause' 50ml on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange warm cream linen and a dried fynbos sprig in soft diffused light sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 112. `product-menopause-50ml-macro.jpg`

**Slot:** product menopause-50ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Meno'pause' 50ml tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 113. `product-menopause-50ml-scene.jpg`

**Slot:** product menopause-50ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Meno'pause' 50ml bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange warm cream linen and a dried fynbos sprig in soft diffused light sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 114. `product-myco-radiance-skin-perfection.jpg`

**Slot:** product myco-radiance-skin-perfection - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Myco-Radiance 'skin perfection' 50ml on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange tremella lobes and a shiitake cap with dewy highlights in a slightly cooler grade sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 115. `product-myco-radiance-skin-perfection-macro.jpg`

**Slot:** product myco-radiance-skin-perfection - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Myco-Radiance 'skin perfection' 50ml tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of pale golden tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 116. `product-myco-radiance-skin-perfection-scene.jpg`

**Slot:** product myco-radiance-skin-perfection - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Myco-Radiance 'skin perfection' 50ml bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange tremella lobes and a shiitake cap with dewy highlights in a slightly cooler grade sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 117. `product-extreme-gut-fix.jpg`

**Slot:** product extreme-gut-fix - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Extreme Gut Fix 50ml on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange turkey tail brackets on dark ceramic in fermented-amber tones sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 118. `product-extreme-gut-fix-macro.jpg`

**Slot:** product extreme-gut-fix - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Extreme Gut Fix 50ml tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of deep brown tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 119. `product-extreme-gut-fix-scene.jpg`

**Slot:** product extreme-gut-fix - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Extreme Gut Fix 50ml bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange turkey tail brackets on dark ceramic in fermented-amber tones sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 120. `product-sceletium-tortuosum-the-happy-place-50ml.jpg`

**Slot:** product sceletium-tortuosum-the-happy-place-50ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Sceletium  tortuosum 'The Happy Place" 50ml on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange sceletium succulent leaves and one pale flower in Karoo grit - a succulent plant, no mushroom or fungus in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 121. `product-sceletium-tortuosum-the-happy-place-50ml-macro.jpg`

**Slot:** product sceletium-tortuosum-the-happy-place-50ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Sceletium  tortuosum 'The Happy Place" 50ml tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 122. `product-sceletium-tortuosum-the-happy-place-50ml-scene.jpg`

**Slot:** product sceletium-tortuosum-the-happy-place-50ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Sceletium  tortuosum 'The Happy Place" 50ml bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange sceletium succulent leaves and one pale flower in Karoo grit - a succulent plant, no mushroom or fungus in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 123. `product-elixir-for-pets-tincture-30ml.jpg`

**Slot:** product elixir-for-pets-tincture-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of ELIXIR For Pets Tincture (30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a worn leather collar out of focus and dry grass in warm domestic light, with no animal in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 124. `product-elixir-for-pets-tincture-30ml-macro.jpg`

**Slot:** product elixir-for-pets-tincture-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of ELIXIR For Pets Tincture (30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 125. `product-elixir-for-pets-tincture-30ml-scene.jpg`

**Slot:** product elixir-for-pets-tincture-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** ELIXIR For Pets Tincture (30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange a worn leather collar out of focus and dry grass in warm domestic light, with no animal in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 126. `product-pet-elixer-of-life-combo-50ml-30ml.jpg`

**Slot:** product pet-elixer-of-life-combo-50ml-30ml - gallery image 1 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Amber dropper bottle of Pet & Elixer Of Life Combo (50ml+30ml) on dark slate.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a worn leather collar and dry grass, no animal in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 127. `product-pet-elixer-of-life-combo-50ml-30ml-macro.jpg`

**Slot:** product pet-elixer-of-life-combo-50ml-30ml - gallery image 2 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A drop of Pet & Elixer Of Life Combo (50ml+30ml) tincture falling from a glass dropper.

```text
Photograph, in extreme macro, a single drop of amber tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 128. `product-pet-elixer-of-life-combo-50ml-30ml-scene.jpg`

**Slot:** product pet-elixer-of-life-combo-50ml-30ml - gallery image 3 · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** Pet & Elixer Of Life Combo (50ml+30ml) bottle staged with its botanical.

```text
Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange both bottles side by side with a worn leather collar and dry grass, no animal in frame sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label. Compose wider, giving the botanical material more of the frame than the bottle. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 129. `product-scale-hand.jpg`

**Slot:** shared gallery - scale reference · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** A hand holding an amber dropper bottle, showing its size.

```text
Photograph a hand holding an amber glass dropper bottle at chest height in natural window light from the left, wearing a neutral linen sleeve, against a plain warm-grey wall. Render the skin naturally with visible texture, no jewellery and no nail polish, as an honest domestic scale reference. Editorial lifestyle, muted colour. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. One hand only, rendered naturally with correct fingers; no face and no other person in frame. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

### 130. `product-scale-dropper.jpg`

**Slot:** shared gallery - scale reference · **Ratio:** `4:5` · **Size:** `4K`
**Alt text:** An amber dropper bottle beside its glass pipette on wet slate.

```text
Photograph an amber glass dropper bottle lying beside its glass pipette on wet dark slate, lit overhead at three-quarters, with water beading on the stone. A clean scale reference, premium still life, no hands. Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. Apart from the product's own printed label, which must be reproduced exactly as it appears in the reference image, the frame must contain no added text, watermark, signature or logo, and no borders, frames, vignette or interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.
```

