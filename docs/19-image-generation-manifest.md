# 19 — Image generation manifest

**Every image the Mycelia theme can render, named, sized and prompted.**

This is the batch sheet. Each row is one file. Filenames are not decorative — they map to the slugs the renderer and the Shopify metaobject fields already expect, so an image dropped in with the right name lands in the right slot.

Companion documents: art direction and the anatomy rules live in [`12-image-direction.md`](12-image-direction.md); the palette lives in [`04-design-system.md`](04-design-system.md) §1. This document does not replace either — it is the executable version of both.

---

## 0. Read this before you generate anything

Three rules decide whether the output is usable. They cost nothing to follow now and are expensive to retrofit.

**1. The product bottles are the one thing AI must not invent.** Everything else on this list — species art, landscapes, textures, page heroes — is editorial and AI is the right tool. But a generated bottle is a picture of a product that does not exist: wrong label, wrong cap, wrong fill colour, wrong volume markings. For a supplement brand under the CPA, publishing an image of a product you do not sell is a misrepresentation, and it is the kind of thing that is trivially provable from a photograph of the real bottle. §5 explains the compliant way to use AI on product shots — with the real bottle as a reference image, not from a text prompt alone.

**2. Anatomy is the credibility test.** This site's whole argument is that it tells the truth about evidence. A Lion's Mane hero with gills, or a Chaga growing out of the ground, tells a mycologically literate visitor that nobody checked. §7 is the rejection table — check every species image against it before upload, and against the `scientific_name` on the species page.

**3. No medical staging, ever.** No lab coats, no pipettes, no white clinical benches, no crosses, no pill forms, no capsules, no before-and-after, no stethoscopes, no anatomical diagrams of organs, no glowing brains. The copy spent 201 citations refusing to make disease claims; an image that stages the product as medicine reintroduces the claim visually and undoes that work.

---

## 1. Naming convention

```
<family>-<identifier>[-<variant>].<ext>
```

| Family prefix | Used for | Example |
|---|---|---|
| `hero-` | Home page hero | `hero-forest.jpg` |
| `species-` | Species metaobject imagery | `species-lions-mane-hero.jpg` |
| `product-` | Product cards and galleries | `product-reishi-mushroom-tincture-30ml.jpg` |
| `collection-` | Collection banners and social cards | `collection-blends-og.jpg` |
| `page-` | Static page heroes and inline images | `page-about-hero.jpg` |
| `article-` | Blog article cards | `article-what-is-a-tincture.jpg` |
| `brand-` | Logo, favicon, default social card | `brand-og-default.jpg` |
| `texture-` | Decorative overlays, `aria-hidden` | `texture-spores.png` |

The `product-` and `species-` identifiers **must** match the existing handles exactly — they are listed in full in §5 and §4. A mismatch means the image silently does not appear.

---

## 2. Delivery specifications

These are derived from the actual `srcset` widths the theme requests, not from guesswork. Generate at the **master size**; Shopify derives every smaller variant and the AVIF/WebP conversion itself. Do not pre-resize and do not upload a set of sizes.

| Slot | Ratio | Largest variant requested | **Master to generate** |
|---|---|---|---|
| Home hero, desktop | 16:9 | 3000 × 1688 | **3840 × 2160** |
| Home hero, mobile crop | 4:5 | 1080 × 1350 | **2048 × 2560** |
| Species hero | 16:9 | 2400 × 1350 | **3840 × 2160** |
| Species macro / card | 4:5 | 1200 × 1500 | **2400 × 3000** |
| Product card and gallery | 4:5 | 2000 × 2500 | **2400 × 3000** |
| Page hero | 16:9 | 2400 × 1350 | **3840 × 2160** |
| Image-with-text block | 4:5 | 1200 × 1500 | **2400 × 3000** |
| Article card | 16:9 | 1600 × 900 | **2560 × 1440** |
| Open Graph card | 1.91:1 | 1200 × 630 | **1200 × 630 exactly** |
| Texture overlay | varies | — | **2048 × 2048**, transparent PNG |

**Colour:** sRGB, 8-bit. **Format in:** PNG or maximum-quality JPEG. **No** baked-in text, watermarks, logos, borders, vignette frames or letterboxing — the theme applies its own gradient scrims and the text sits in HTML, not in the pixels.

**Open Graph cards are the exception to "no text":** they are never rendered as page content, so a wordmark is fine and useful there.

### 2.1 Generator settings — Nano Banana 2

Nano Banana 2 is `gemini-3.1-flash-image`, generally available since 28 May 2026. It takes explicit aspect-ratio and size control through `generationConfig.imageConfig`, so none of these masters need cropping afterwards.

Supported ratios are 1:1, 3:2, 2:3, 3:4, 4:3, **4:5**, 5:4, 9:16, **16:9** and 21:9 — every ratio this site needs is native. Sizes are `"512px"`, `"1K"`, `"2K"` and `"4K"`; **the `K` must be uppercase or the call is rejected.**

```json
"generationConfig": {
  "imageConfig": { "aspectRatio": "16:9", "imageSize": "4K" }
}
```

**The size tier matters more than it looks.** `2K` is about 4 MP, which at 16:9 is roughly 2668 × 1500 — *smaller than the 3000 × 1688 hero variant the theme actually requests*. Generating heroes at 2K means the browser upscales, and it will look soft on a retina display.

| Slot | `aspectRatio` | `imageSize` | Why |
|---|---|---|---|
| Home hero, desktop | `16:9` | **`4K`** | 2K falls short of the 3000 px variant |
| Home hero, mobile | `4:5` | **`4K`** | |
| Species hero | `16:9` | **`4K`** | |
| Page hero | `16:9` | **`4K`** | |
| Product card / gallery | `4:5` | **`4K`** | 2K at 4:5 is ~1789 × 2236, under the 2000 × 2500 variant |
| Species macro / card | `4:5` | `2K` | Largest use is 1200 × 1500 (1.8 MP) |
| Image-with-text | `4:5` | `2K` | |
| Article card | `16:9` | `2K` | Largest use is 1600 × 900 |
| Open Graph card | `3:2` | `2K` | Crop to 1200 × 630; 1.91:1 is not a native ratio |
| Texture | `1:1` | `2K` | |

**Caveat worth knowing before you budget:** 1K and 2K are generally available, but **4K is still a preview capability**. If 4K is not enabled on your account, generate at 2K and upscale the eleven hero-class images, or move those to **Nano Banana Pro** (`gemini-3-pro-image`).

Sources: [Nano Banana 2 and Nano Banana Pro are generally available](https://cloud.google.com/blog/products/ai-machine-learning/nano-banana-2-and-nano-banana-pro-are-generally-available), [Ultimate prompting guide for Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana), [Bringing Nano Banana 2 to enterprise](https://cloud.google.com/blog/products/ai-machine-learning/bringing-nano-banana-2-to-enterprise).

### 2.2 Prompt style

Google's own guidance is that **Nano Banana 2 wants narrative prose, not keyword soup**: *"A simple list of keywords won't cut it; you need to describe the scene narratively."* Start with a strong verb naming the operation ("Photograph…", "Restage…"), then describe the scene in sentences, and be specific about materials and light rather than adjectival ("wet dark slate with water beading" beats "moody surface").

The prompts in §4–6 are written that way already. The input limit is 131,072 tokens, so length is never the constraint — detail is free, use it.

---

## 3. Global art direction

Lift these into every prompt. They are what makes 130 images look like one brand rather than a stock library.

**Palette** — the site ground is a near-black with a green cast, so images must sit on it without a grey halo:

| Role | Hex | Use in imagery |
|---|---|---|
| Ink (page ground) | `#0B0E0C` | The background of every macro and product plate |
| Cream | `#F2EAD9` | Highlight temperature; the warm side of the key light |
| Spore gold | `#C9A24A` | The dominant warm accent — amber glass, backlit spores, dry bracken |
| Forest | `#2F5D46` | Mid-tone greens in landscape work |
| Mycelium | `#8FF7C8` | **Accent only, ≤5% of frame** — faint thread glow, never a wash |

**Forbidden colour:** purple and magenta gradients, rainbow, neon-on-neon, teal-and-orange grading, any second accent colour. If an image comes back predominantly cyan or violet, reject it; that is the model defaulting to "mystical mushroom" and it is exactly the cliché this brand is positioned against.

**Light:** single soft key at roughly 45°, one cool rim to separate the subject from the ground, deep falloff to near-black. Think a still life lit for a spirits campaign, not a nature documentary.

**Texture:** visible organic detail — spore dust, damp bark, mycelial threads, condensation, fine dust in the light beam. Matte, never glossy or plastic.

**Place:** this is a Garden Route brand, made in Plettenberg Bay. Where a landscape is visible, it should read as **Southern Cape** — Afromontane forest, yellowwood and stinkwood, tree ferns, fynbos on the slopes, sea mist. Not Pacific Northwest conifers, not Nordic birch, not Japanese cedar. This is the single most common way these images will look generic; be explicit about it every time.

### 3.1 The global exclusions

Nano Banana 2 has **no separate negative-prompt field** — exclusions go in the prompt itself, and Google's guidance is to phrase them as prose constraints rather than a keyword blob. Append this sentence to every generation:

> Photographic realism only — not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.

**Keyword form**, for any tool in the chain that does take a discrete negative field:

```
cartoon, illustration, 3d render, cgi, plastic texture, waxy skin, oversaturated,
neon, purple and magenta gradient, rainbow, psychedelic, trippy, teal and orange grade,
watermark, signature, text, letters, words, typography, logo, packaging, label,
UI elements, borders, frames, vignette, letterboxing,
medical cross, pills, capsules, tablets, syringe, lab coat, clinical laboratory,
hospital, stethoscope, anatomical diagram, glowing brain, before and after,
human face, hands, fingers, people, model,
low resolution, blurry, jpeg artifacts, duplicated subject, deformed anatomy,
extra stems, impossible growth, stock photo look, shutterstock, getty
```

Two exceptions, noted per-row where they apply: `hands` is permitted in the two "scale" product plates, and `text`/`logo` are permitted on Open Graph cards.

---

## 4. Species imagery — 24 files

Eight species, three files each. These are the highest-value images on the site: the species pages are the reason the rebuild exists, and they are what will be linked and shared.

**Files per species:** `-hero` (16:9 page banner), `-macro` (4:5 card and inline editorial), `-og` (1.91:1 social card).

**Shared prompt stem** — substitute `[SUBJECT]` from the table:

> Ultra-detailed cinematic macro photograph of [SUBJECT]. Scientifically accurate morphology. Shot on a medium-format camera with a 100mm macro lens at f/5.6, single soft key light at 45 degrees with a cool rim light, deep charcoal near-black background (#0B0E0C), warm amber highlights, fine spore dust suspended in the light beam, damp organic texture, extremely sharp focus on the specimen with shallow natural falloff, premium editorial botanical campaign photography, muted natural colour, matte finish, 8k.

| # | File | Ratio | `[SUBJECT]` — be literal, the model gets these wrong |
|---|---|---|---|
| 1 | `species-lions-mane-hero.jpg` | 16:9 | a Lion's Mane fungus, *Hericium erinaceus*, a single rounded white cushion with long cascading icicle-like spines hanging downward, **no cap, no gills, no stem**, growing from a wound on a dead hardwood trunk in Southern Cape Afromontane forest |
| 2 | `species-lions-mane-macro.jpg` | 4:5 | extreme close-up of the hanging white spines of *Hericium erinaceus*, individual teeth resolved, faint translucency at the tips, dew beading |
| 3 | `species-lions-mane-og.jpg` | 1.91:1 | as hero, wider composition with negative space on the left third |
| 4 | `species-reishi-hero.jpg` | 16:9 | a Reishi bracket fungus, *Ganoderma lucidum*, a kidney-shaped shelf with a **lacquered varnished** red-brown cap, concentric growth zoning, a pale cream growing margin, **pore surface underneath, no gills**, on a dead hardwood stump |
| 5 | `species-reishi-macro.jpg` | 4:5 | extreme close-up of the varnished surface of a *Ganoderma lucidum* cap, concentric red-brown lacquer bands catching the key light, white margin at frame edge |
| 6 | `species-reishi-og.jpg` | 1.91:1 | as hero, wider composition, specimen right of centre |
| 7 | `species-chaga-hero.jpg` | 16:9 | a Chaga sterile conk, *Inonotus obliquus*, a **black cracked charcoal-like mass erupting from the trunk of a living birch tree**, rusty orange-brown interior visible in the fissures, **not a mushroom shape, not on the ground** |
| 8 | `species-chaga-macro.jpg` | 4:5 | extreme close-up of the cracked black exterior and burnt-orange cork interior of a chaga conk, deep fissures, bark visible at frame edge |
| 9 | `species-chaga-og.jpg` | 1.91:1 | as hero, trunk running vertically through the right third |
| 10 | `species-cordyceps-hero.jpg` | 16:9 | *Cordyceps militaris*, a cluster of **bright orange club-shaped fruiting bodies** with finely pimpled surfaces, emerging from substrate, **no insects, no ants, nothing parasitising a visible host** |
| 11 | `species-cordyceps-macro.jpg` | 4:5 | extreme close-up of a single orange *Cordyceps militaris* club, perithecia visible as fine bumps, translucent glow where backlit |
| 12 | `species-cordyceps-og.jpg` | 1.91:1 | as hero, cluster offset to the right |
| 13 | `species-turkey-tail-hero.jpg` | 16:9 | Turkey Tail, *Trametes versicolor*, overlapping rosettes of **thin flexible brackets with concentric velvety bands** in brown, ochre, cream and slate, **white pore surface beneath, no gills**, on a fallen log |
| 14 | `species-turkey-tail-macro.jpg` | 4:5 | extreme close-up of the concentric banding of a single *Trametes versicolor* bracket, velvet texture, wavy pale margin |
| 15 | `species-turkey-tail-og.jpg` | 1.91:1 | as hero, log running diagonally |
| 16 | `species-tremella-hero.jpg` | 16:9 | Tremella, *Tremella fuciformis*, a **translucent gelatinous white frilly mass of wavy petal-like lobes**, glistening and semi-transparent, on a dead broadleaf branch, **not opaque, not a capped mushroom** |
| 17 | `species-tremella-macro.jpg` | 4:5 | extreme close-up of translucent *Tremella fuciformis* lobes, light passing through the gelatinous tissue, water droplets |
| 18 | `species-tremella-og.jpg` | 1.91:1 | as hero, specimen left of centre |
| 19 | `species-shiitake-hero.jpg` | 16:9 | Shiitake, *Lentinula edodes*, umbrella caps of rich brown with **white cracking across the cap surface**, inrolled margins, **cream gills beneath**, growing from an inoculated oak log |
| 20 | `species-shiitake-macro.jpg` | 4:5 | extreme close-up of a shiitake cap showing the white fissured crackle pattern against brown, gill edge visible at the frame bottom |
| 21 | `species-shiitake-og.jpg` | 1.91:1 | as hero, logs stacked receding into shadow |
| 22 | `species-sceletium-hero.jpg` | 16:9 | **a succulent plant, not a fungus** — *Sceletium tortuosum*, sprawling fleshy green leaves with translucent bladder cells on the surface, a small star-shaped white-to-pale-yellow flower with fine filamentous petals, growing in dry Karoo quartz gravel under low sun |
| 23 | `species-sceletium-macro.jpg` | 4:5 | extreme close-up of *Sceletium tortuosum* leaves showing the raised translucent idioblast cells, one open pale flower, arid grit background |
| 24 | `species-sceletium-og.jpg` | 1.91:1 | as hero, plant low in frame, Karoo horizon above |

> **Sceletium is the trap.** It is the only botanical in the range and the model will produce a mushroom unless you say "succulent plant, no fungus, no mushroom" explicitly and put `mushroom, fungus, cap, gills, stem` in that image's negative prompt.

---

## 5. Product imagery — 23 products

### 5.1 Why these are different

The product pages are transactional. An image here is a representation of the good being sold, and it is governed by the Consumer Protection Act, not by taste. Three specific failure modes:

- **The label.** Nano Banana will render label-shaped text that is not your label. Any legible-but-wrong text on a bottle is a defect; illegible squiggle text is worse, because it looks like a counterfeit.
- **The bottle.** Volume, cap type (the range mixes standard droppers and fast-flow caps), glass colour and shoulder shape all vary across the 23 SKUs and a text prompt cannot know them.
- **The fill.** Tincture colour is evidence of what is in it. A generated golden liquid on a product that is actually dark brown is a claim about the product.

### 5.2 The compliant route — and it is directly supported

**Use the real bottle as a reference image.** This is not a workaround; it is a headline feature of the model. Nano Banana 2 maintains *"the fidelity of up to 14 objects"* across generations, and the documented pattern is exactly this:

> `[Reference images] + [Relationship instruction] + [New scenario]`

So: photograph each of the 23 products once — flat, in daylight, against a plain wall, a phone is fine — then pass that frame as a reference and let the model relight and restage **the actual bottle** rather than inventing one. Generate the scene, keep the product.

Prompt shape for a referenced product:

> Restage the amber dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, into the following scene: [scene from §5.3]. Do not alter, redraw or re-letter the label.

**Two caveats that decide whether this is safe:**

- There is **no seed parameter and no hard consistency lock** documented. Google frames this as fidelity, not pixel-exact reproduction — so every generated product image needs a human comparing it against the real bottle before it goes live.
- Text rendering is reliable at roughly **1–8 words** and degrades on small type and longer strings. A tincture label is dense small print, which is exactly the failure zone. If the label must be legible in frame, either shoot that plate for real, composite the real label in afterwards, or move those generations to **Nano Banana Pro** (`gemini-3-pro-image`), which Google positions as the stronger text renderer.

If you cannot supply reference photographs, treat everything in §5.3 as **development placeholders only**, suffix the filenames `-PLACEHOLDER`, and leave the launch-checklist item open. `17-launch-checklist.md` already blocks launch on product photography; do not quietly close that item with generated bottles.

### 5.3 Per-product plates

For each of the 23 handles, three files:

| Suffix | Ratio | Purpose |
|---|---|---|
| *(none)* | 4:5 | Card and gallery hero — bottle three-quarter, label legible |
| `-macro` | 4:5 | The dropper mid-drop against dark ground — no bottle label in focus |
| `-scene` | 4:5 | Context still life: the bottle with its botanical cue |

**Shared scene stem:**

> Premium product still-life photograph of [the referenced amber glass dropper bottle], three-quarter angle, standing on wet dark slate, single soft key light at 45 degrees from camera left with a cool rim light raking the glass shoulder, near-black background (#0B0E0C) falling to pure shadow, warm amber transmission through the glass, fine dust in the light beam, [BOTANICAL CUE] arranged sparsely in the mid-ground and softly out of focus, spirits-campaign lighting, matte, muted natural colour, extremely sharp on the bottle, medium-format look, 8k.

| # | Handle | `[BOTANICAL CUE]` |
|---|---|---|
| 1 | `lions-mane-mushroom-tincture-30ml` | a single white spined Lion's Mane specimen, dead hardwood chip |
| 2 | `lions-mane-mushroom-tincture-50ml` | as above, wider set, two specimens, more negative space |
| 3 | `lions-mane-mushroom-elixir-combo-50ml-30ml` | **two bottles**, 50 ml and 30 ml side by side, Lion's Mane specimen behind |
| 4 | `reishi-mushroom-tincture-30ml` | a varnished red-brown reishi bracket, dark bark |
| 5 | `reishi-mushroom-elixir-combo-50ml-30ml` | **two bottles**, reishi bracket propped behind |
| 6 | `chaga-mushroom-tincture-30ml` | a chunk of black cracked chaga conk, birch bark curl |
| 7 | `chaga-mushroom-elixir-combo-50ml-30ml` | **two bottles**, chaga chunk and birch bark |
| 8 | `cordyceps-mushroom-tincture-30ml` | a small cluster of orange cordyceps clubs |
| 9 | `cordyceps-mushroom-elixir-combo-50ml-30ml` | **two bottles**, orange clubs low left |
| 10 | `turkey-tail-mushroom-tincture-30ml` | banded turkey tail brackets, fallen leaf |
| 11 | `turkey-tail-mushroom-elixir-combo-50ml-30ml` | **two bottles**, bracket rosette behind |
| 12 | `tremella-mushroom-tincture-30ml` | translucent white tremella lobes, glistening |
| 13 | `tremella-mushroom-elixir-combo-50ml-30ml` | **two bottles**, tremella lobes catching rim light |
| 14 | `elixir-of-life-6-mushroom-blend-50ml` | six distinct specimens arranged in a shallow arc, none dominant |
| 15 | `new-general-maintenance-50ml` | a restrained mixed group, dried bracken, morning light |
| 16 | `the-workaholic` | a slate desk edge, cold coffee ring, single lion's mane specimen |
| 17 | `relax-no-stress-50ml` | dusk tones, soft fabric fold, reishi bracket, low warm light |
| 18 | `menopause-50ml` | warm cream linen, dried fynbos sprig, soft diffused light |
| 19 | `myco-radiance-skin-perfection` | tremella lobes and a shiitake cap, dewy highlights, cooler grade |
| 20 | `extreme-gut-fix` | turkey tail brackets, fermented-amber tones, dark ceramic |
| 21 | `sceletium-tortuosum-the-happy-place-50ml` | **succulent, not fungus** — sceletium leaves and one pale flower, Karoo grit |
| 22 | `elixir-for-pets-tincture-30ml` | a worn leather collar out of focus, dry grass, warm domestic light, **no animal in frame** |
| 23 | `pet-elixer-of-life-combo-50ml-30ml` | **two bottles**, collar and dry grass |

**Macro plate prompt** (same for all 23 — vary only the liquid colour to match the real product):

> Extreme macro photograph of a single drop of [amber / deep brown / golden] tincture falling from a glass dropper pipette against a near-black background, the drop caught mid-fall and rendered sharp, internal refraction and a warm specular highlight, fine mist and dust in the beam, high-speed capture look, no bottle label visible, premium editorial, 8k.

### 5.4 Scale plates — 2 files, hands permitted

| File | Ratio | Prompt |
|---|---|---|
| `product-scale-hand.jpg` | 4:5 | A hand holding an amber glass dropper bottle at chest height, natural window light from the left, neutral linen sleeve, plain warm-grey wall behind, honest domestic scale reference, skin rendered naturally with visible texture, no jewellery, no nail polish, no label text legible, editorial lifestyle, muted colour, 8k. *(Remove `hands, fingers, people` from the negative prompt for this one.)* |
| `product-scale-dropper.jpg` | 4:5 | An amber glass dropper bottle beside its glass pipette laid on wet dark slate, overhead three-quarter light, water beading on the stone, scale reference, no hands, premium still life, 8k. |

---

## 6. Home, collections, pages and editorial — 30 files

### 6.1 Home page — 3 files

| File | Ratio | Slot | Prompt |
|---|---|---|---|
| `hero-forest.jpg` | 16:9 | `hero.image` | Wide cinematic photograph of the floor of a Southern Cape Afromontane forest at first light — yellowwood and stinkwood trunks, tree ferns, deep leaf litter, low sea mist threading between the trunks, a single shaft of warm light striking damp ground where pale fungal fruiting bodies emerge, faint mycelial threads visible in the litter, near-black shadows, muted green and amber palette, **large uncluttered dark area in the left two-thirds for overlaid text**, atmospheric, 8k. |
| `hero-forest-mobile.jpg` | 4:5 | `hero.image_mobile` | Same scene and grade, recomposed vertically: the light shaft and fungal cluster in the lower third, canopy and mist above, **clear dark space across the top half for overlaid text**. |
| `page-index-process.jpg` | 4:5 | `index` image-with-text | A small-batch extraction still life — amber glass demijohns on a scarred timber bench, spring water in a plain glass vessel, dried mushroom material in a shallow steel tray, late afternoon light through a dusty window, artisanal workshop not a laboratory, warm and matter-of-fact, no people, no lab equipment, no clinical surfaces, 8k. |

### 6.2 Collections — 7 Open Graph cards

Collection pages take their social card from `collection.featured_image`. 1200 × 630 each; a wordmark is permitted.

| File | Collection | Subject |
|---|---|---|
| `collection-all-og.jpg` | Shop all (23) | An arc of amber bottles receding into shadow, shallow depth |
| `collection-single-species-og.jpg` | Single-species (8) | Eight distinct specimens laid in a grid on dark slate, taxonomic and even |
| `collection-blends-og.jpg` | Blends (8) | Overlapping specimens merging into one another, warmer grade |
| `collection-pets-og.jpg` | For pets (2) | A worn leather collar and a bottle on a sunlit floorboard, no animal |
| `collection-combo-deals-og.jpg` | Combo deals (7) | Paired bottles, 50 ml and 30 ml, repeated in receding rows |
| `collection-botanicals-og.jpg` | Botanicals (1) | Sceletium succulent in Karoo grit, wide and arid |
| `collection-frontpage-og.jpg` | Home page (6) | The hero forest scene, cropped to 1.91:1 |

### 6.3 Static pages — 10 files

| File | Ratio | Page | Subject |
|---|---|---|---|
| `page-about-hero.jpg` | 16:9 | About | Plettenberg Bay coastline at dawn from the forest edge, mist on the Tsitsikamma, restrained and wide |
| `page-about-story.jpg` | 4:5 | About, image-with-text | A workbench detail — handwritten batch notes, a scale, amber glass, no faces |
| `page-sourcing-hero.jpg` | 16:9 | Sourcing | Inoculated hardwood logs stacked in dappled forest shade, damp, orderly, real cultivation |
| `page-sourcing-detail.jpg` | 4:5 | Sourcing, image-with-text | Close detail of a drilled and wax-sealed inoculation point on an oak log, sawdust spawn visible |
| `page-species-hero.jpg` | 16:9 | Species Library | A flat-lay taxonomy plate: eight specimens on dark slate, evenly lit, museum-like, arranged in a grid |
| `page-mushroom-finder-hero.jpg` | 16:9 | Mushroom Finder | A branching mycelial network glowing faintly against near-black, abstract but organic, decision-tree feel, mycelium accent under 5% of frame |
| `page-faq-hero.jpg` | 16:9 | FAQ | Quiet macro of layered bracket fungi, calm and neutral, heavily negative-spaced |
| `page-contact-hero.jpg` | 16:9 | Contact | The Garden Route coast road in soft morning light, sense of place, no signage |
| `page-disclaimer-hero.jpg` | 16:9 | Disclaimer | Deliberately plain: dark wet slate texture, single raking light, no specimen, sober |
| `page-shipping-returns-hero.jpg` | 16:9 | Shipping & returns | Unbranded kraft parcel and paper packing material on a timber bench, honest and practical, no couriers, no logos |

### 6.4 Blog — 7 files

One blog banner plus six launch articles, 16:9, `article-` prefix.

| File | Article |
|---|---|
| `article-blog-hero.jpg` | Blog index banner — an open field notebook with pressed specimens |
| `article-what-is-a-tincture.jpg` | Glass, spring water, ethanol and time: what a dual-extraction actually is |
| `article-fruit-body-vs-mycelium.jpg` | Fruit body against grain-grown mycelium, shown side by side |
| `article-reading-evidence-grades.jpg` | A stack of printed journal papers on dark slate, annotated in pencil |
| `article-how-to-take-a-tincture.jpg` | A dropper over a glass of water on a breakfast table, morning light |
| `article-storage-and-shelf-life.jpg` | Amber bottles in a dark cupboard, light falling across the shelf edge |
| `article-sa-regulations-explained.jpg` | Plain paper documents and a pen on timber, sober, no branding |

### 6.5 Brand and system — 6 files

| File | Size | Notes |
|---|---|---|
| `brand-logo-cream.svg` | 320 px wide | **Do not generate this.** A wordmark must be drawn as vector — generated logos have malformed letterforms and cannot be traced cleanly. Set in Playfair Display 600, cream `#F2EAD9`. |
| `brand-logo-ink.svg` | 320 px wide | Same wordmark, ink `#0B0E0C`, for light backgrounds |
| `brand-favicon.png` | 512 × 512 | A single simplified mycelium-node glyph, gold on ink, legible at 16 px — generate the motif, redraw as vector |
| `brand-apple-touch.png` | 180 × 180 | Same glyph, full-bleed ink ground |
| `brand-og-default.jpg` | 1200 × 630 | Fallback social card: hero forest crop with room for the wordmark, text permitted |
| `brand-og-home.jpg` | 1200 × 630 | Home-specific card |

### 6.6 Textures — 4 transparent PNGs

Decorative, `aria-hidden`, no alt text. 2048 × 2048, alpha channel.

| File | Subject |
|---|---|
| `texture-spores.png` | Fine suspended spore dust particles, warm white, transparent background, subtle |
| `texture-mycelium-lines.png` | Delicate branching mycelial linework, single-weight, mycelium green, transparent |
| `texture-paper-grain.png` | Neutral organic paper grain for section overlays, low contrast |
| `texture-slate.png` | Wet dark slate surface texture, tileable, for card grounds |

---

## 7. Anatomy rejection table

Check every species image against this before upload. If any row on the left is absent or any row on the right is present, regenerate — do not retouch.

| Species | Must show | Reject on sight |
|---|---|---|
| Lion's Mane | Cascading white spines, no cap, no gills, on hardwood | Any gilled cap; coral-like branching (that is *H. coralloides*) |
| Reishi | Varnished kidney bracket, concentric zoning, white margin, pores | Gills; a stalked mushroom silhouette |
| Chaga | Black cracked conk on a **living birch trunk** | A capped mushroom; anything growing on the ground |
| Cordyceps | Orange clavate clubs on substrate | Anything emerging from an insect or ant |
| Turkey Tail | Thin banded bracket, concentric zones, **pores** | Gills; thick fleshy brackets |
| Tremella | Translucent gelatinous frilly lobes on dead branch | Opaque white; any capped form |
| Shiitake | Brown cap with white cracking, gills, on oak log | Generic white button mushroom |
| Sceletium | **A succulent plant** — fleshy leaves, pale flower, Karoo grit | Any mushroom whatsoever |

---

## 8. Alt text

Every non-decorative image needs alt text written at upload. Describe what is in the frame, honestly, in one sentence. Name the species only when the image genuinely shows it. Do not repeat the product title verbatim and do not keyword-stuff.

| Pattern | Example |
|---|---|
| Species hero | "Macro photograph of a Lion's Mane fruit body, its white spines hanging from dead hardwood." |
| Species, corrective | "Black cracked chaga conk growing on the trunk of a living birch." |
| Product card | "Amber 50 ml dropper bottle of Lion's Mane tincture on dark slate." |
| Page hero | "Mist threading between yellowwood trunks in Afromontane forest at first light." |
| Texture | *(none — `aria-hidden="true"`)* |

---

## 9. Totals and pre-upload checklist

| Group | Files | Needs a reference photo | AI-native |
|---|---|---|---|
| Species (8 × 3) | 24 | — | 24 |
| Products (23 × 3) | 69 | 69 | — |
| Product scale plates | 2 | 2 | — |
| Home | 3 | — | 3 |
| Collection OG cards | 7 | — | 7 |
| Static page imagery | 10 | — | 10 |
| Blog | 7 | — | 7 |
| Brand and system | 4 | — | 4 |
| Textures | 4 | — | 4 |
| **Generated total** | **130** | **71** | **59** |
| Vector, drawn not generated (§6.5) | 2 | — | — |
| **Grand total** | **132** | | |

**Run the 59 AI-native files first.** They need nothing from anyone and they are the images that carry the site's character — the species set alone is 24 of them. The 71 product plates are blocked until someone photographs the 23 bottles, which is an afternoon's work with a phone (§5.2) and the highest-leverage hour on this whole list.

### 9.1 Batch sheet

The machine-readable version of every row above is [`data/image-manifest.csv`](../data/image-manifest.csv) — 130 rows, columns:

```
filename, group, aspect_ratio, image_size, theme_slot, alt_text, prompt, exclusions
```

`aspect_ratio` and `image_size` map straight onto `generationConfig.imageConfig` (§2.1), `prompt` is the full narrative prompt, and `exclusions` is the shared constraint sentence to append. Filenames are unique and match the handles, so the CSV can drive a batch run without further editing.

**Before uploading any image:**

- [ ] Anatomy checked against §7 and against the species page's `scientific_name`
- [ ] No text, watermark, logo or packaging anywhere in frame (except OG cards)
- [ ] No medical staging — no coats, pills, crosses, clinical surfaces
- [ ] Palette sits in the brand range; no purple, magenta, rainbow or neon
- [ ] Mycelium accent under 5% of the frame
- [ ] Landscape reads as Southern Cape, not Pacific Northwest or Nordic
- [ ] Master size meets §2; sRGB; no pre-resizing
- [ ] Filename matches the handle exactly
- [ ] Alt text written
- [ ] Product images: real bottle used as reference, or file suffixed `-PLACEHOLDER` and the launch-checklist item left open
