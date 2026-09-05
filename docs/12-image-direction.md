# 12 — Phase 7: Image direction

## 1. The rule that governs everything

Anything transactional is a real photograph of the real product. AI imagery is permitted only for species editorial art, backgrounds and educational visuals, and never in a way that could be mistaken for the product or misrepresent what is in the bottle.

## 2. Product photography brief (`NEEDS CLIENT INPUT` — this is a shoot, not a prompt)

The 23 current images are 3024×4032 phone photographs with inconsistent backgrounds, lighting and framing. They are usable as a stopgap but they undercut the price point. What is needed:

- **Set:** one dark ground (charcoal slate or dark timber), one key light with a soft box at 45°, one rim light to catch the amber glass, no coloured gels.
- **Per product:** (1) hero — bottle three-quarter, label legible, 4:5 crop; (2) scale — bottle in hand or beside a dropper; (3) macro — the dropper mid-drop against dark ground; (4) label detail — ingredients and dose readable; (5) group shot per range for collection headers.
- **Consistency:** same distance, same bottle angle, same shadow direction across all 23. Cards are a fixed 4:5 ratio, so shoot to that crop.
- **Output:** 3000px on the long edge, sRGB, no filters, no compositing that changes the product's appearance.

## 3. AI editorial imagery — species heroes and macro art

Prompt template (substitute `[COMMON_NAME]` and `[SCIENTIFIC_NAME]`):

> Ultra-detailed cinematic macro photograph of [COMMON_NAME] mushroom, scientifically accurate structure for [SCIENTIFIC_NAME], growing in a dark organic forest floor environment, premium editorial lighting, subtle bioluminescent mycelium threads, deep charcoal background, earthy texture, spore particles, luxury botanical product campaign, high contrast, sharp focus, natural scale, no text, no labels, no packaging, no human hands, no medical symbols, no psychedelic cliché, 8k, professional commercial photography.

Negative prompt:

> cartoon, illustration, fake packaging, wrong mushroom anatomy, distorted gills, plastic texture, low resolution, blurry, watermark, text, logo, medical cross, pills, hospital, exaggerated psychedelic colors, deformed cap, impossible stem, duplicated mushrooms, oversaturated stock-photo look.

**Species-specific corrections — the generic prompt gets these wrong:**

| Species | Must show | Common AI error to reject |
|---|---|---|
| Lion's Mane | Cascading white spines, no cap, no gills, on hardwood | Gilled cap; coral-like branching (that is *H. coralloides*) |
| Reishi | Varnished kidney-shaped bracket, concentric red-brown zoning, white margin, pores beneath | Gills; a stalked "mushroom" shape |
| Chaga | Black cracked sterile conk on a **living birch trunk** — not a fruit body | A capped mushroom; growth on the ground |
| Cordyceps | Orange clavate clubs, cultivated on substrate or a pupa | Anything ant-shaped (that is *O. unilateralis*) |
| Turkey Tail | Thin banded bracket, concentric multicoloured zones, **pores** not gills | Gills; thick flesh |
| Tremella | Translucent white gelatinous frilly lobes on dead branch | An opaque white capped mushroom |
| Shiitake | Brown cap with white cracking, gills, on oak log | Generic button mushroom |
| Sceletium | **A succulent plant** — fleshy leaves, small white-yellow flower, Karoo ground | Any mushroom whatsoever |

Every AI image must be checked against the species page's taxonomy line before it is published; an anatomically wrong hero on an evidence-led page destroys the credibility the copy is trying to build.

## 4. Sizes and delivery

| Use | Size | Notes |
|---|---|---|
| Hero | 2400×1350 | Plus a 1080×1350 mobile crop |
| Species hero | 2400×1350 | `hero_image` metaobject field |
| Species card / macro | 1200×1500 | `macro_editorial_image` |
| Product card | 1200×1500 | 4:5, from the product hero shot |
| OG image | 1200×630 | `og_image`; falls back to the hero |
| Blog hero | 1600×900 | |

The theme requests images through `image_url`/`image_tag`, so Shopify generates AVIF/WebP and the correct `srcset` automatically. Upload the largest master; do not pre-resize. Only the hero and the first product image are `loading="eager"`; everything else is lazy. The hero is preloaded via `image_tag ... preload: true`. Every `<img>` renders explicit width and height, which is why measured CLS is 0.

## 5. Alt text

Describe what is in the frame, honestly, in a sentence. Include the species name only when the image really shows that species. Do not repeat the product title verbatim on every image, and do not keyword-stuff. Decorative images (spore particles, gradients) are `aria-hidden` and carry no alt text. Examples:

- Product: "Amber 50 ml dropper bottle of Lion's Mane tincture on dark slate."
- Species: "Macro photograph of a Lion's Mane fruit body, its white spines hanging from dead hardwood."
- Chaga: "Black cracked chaga conk growing on the trunk of a living birch."
