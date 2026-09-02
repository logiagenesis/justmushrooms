# 02 — Product ↔ species mapping sheet

Source of truth for products: Shopify (`products.json`, 02/09/2026). Species identities come from the live ingredient lists; where the label is ambiguous the row is flagged. Species slugs are the metaobject handles used at `/species/<slug>`.

## Species (8) — the Species Library

| Slug | Common name | Scientific name (to publish) | Kingdom | Status | Products containing it |
|---|---|---|---|---|---|
| lions-mane | Lion's Mane | *Hericium erinaceus* | Fungi | Verified (label + taxonomy) | 30 ml, 50 ml, LM combo, Elixir of Life (×8 combos), Extreme Gut Fix, Meno'pause, Relax, Workaholic, General Maintenance |
| reishi | Reishi | *Ganoderma lucidum* (label) — evidence file discusses *G. lingzhi* naming; publish "*Ganoderma lucidum* complex" pending client confirmation of source strain | Fungi | `NEEDS CLIENT CONFIRMATION` (strain/source) | 30 ml, Reishi combo, Elixir of Life, Pets, Meno'pause, Relax, Myco-Radiance |
| chaga | Chaga | *Inonotus obliquus* | Fungi | Verified; sterile conk not a fruit body — copy must say "conk/sclerotium" | 30 ml, Chaga combo, Elixir of Life, Extreme Gut Fix, Myco-Radiance |
| cordyceps | Cordyceps | Label reads "Ophiocordyceps militaris" — **this binomial does not exist**. Either *Cordyceps militaris* (cultivated, likely) or *Ophiocordyceps sinensis* (wild, rare). Publish *Cordyceps militaris* only after confirmation | Fungi | `NEEDS CLIENT CONFIRMATION` — blocks label reprint and page copy | 30 ml, Cordyceps combo, Elixir of Life, Meno'pause, Workaholic, General Maintenance |
| turkey-tail | Turkey Tail | *Trametes versicolor* | Fungi | Verified | 30 ml, TT combo, Elixir of Life, Pets, Extreme Gut Fix, General Maintenance |
| tremella | Tremella (snow fungus) | *Tremella fuciformis* | Fungi | Verified | 30 ml, Tremella combo, Elixir of Life, Myco-Radiance |
| shiitake | Shiitake | *Lentinula edodes* | Fungi | Verified name; only in one blend; percentage `NEEDS CLIENT INPUT` | Myco-Radiance |
| sceletium | Sceletium / Kanna | *Sceletium tortuosum* | Plantae (Aizoaceae) | Verified name; **a plant, not a mushroom** — displayed with a "Botanical" badge; serotonergic interaction warning mandatory | Sceletium 'The Happy Place' |

No other species are named on any label. No species page is created without a product that contains it.

## Products (23) → species and page relationships

| Handle | Form | Species (from label) | Dose on label | Ingredient list on label | Flags |
|---|---|---|---|---|---|
| lions-mane-mushroom-tincture-30ml | 30 ml tincture, ~30% ethanol, "±1000 mg/ml equivalent" | lions-mane | none | yes | — |
| lions-mane-mushroom-tincture-50ml | 50 ml tincture | lions-mane | none | yes | — |
| lions-mane-mushroom-elixir-combo-50ml-30ml | 50 ml 6-blend + 30 ml single | all six + lions-mane | 15–20 drops/day (blend) | yes | Combo = Elixir of Life + LM 30 ml |
| reishi-mushroom-tincture-30ml | 30 ml | reishi | none | yes | — |
| reishi-mushroom-elixir-combo-50ml-30ml | combo | six + reishi | blend only | yes | — |
| chaga-mushroom-tincture-30ml | 30 ml, "±800 mg/ml" | chaga | 10 drops once a day under the tongue | yes | only product with 800 mg/ml |
| chaga-mushroom-elixir-combo-50ml-30ml | combo | six + chaga | yes | yes | — |
| cordyceps-mushroom-tincture-30ml | 30 ml | cordyceps | none | yes | species name invalid |
| cordyceps-mushroom-elixir-combo-50ml-30ml | combo | six + cordyceps | blend only | yes | species name invalid |
| turkey-tail-mushroom-tincture-30ml | 30 ml | turkey-tail | none | yes | not in any collection |
| turkey-tail-mushroom-elixir-combo-50ml-30ml | combo | six + turkey-tail | blend only | yes | — |
| tremella-mushroom-tincture-30ml | 30 ml | tremella | none | yes | not in any collection |
| tremella-mushroom-elixir-combo-50ml-30ml | combo | six + tremella | blend only | yes | — |
| elixir-of-life-6-mushroom-blend-50ml | 50 ml 6-blend, "±200 mg/ml per species" | lions-mane, reishi, chaga, cordyceps, turkey-tail, tremella | 15–20 drops once a day | yes | "Cultivated and/or wild harvested" — origin `NEEDS CLIENT INPUT` |
| elixir-for-pets-tincture-30ml | 30 ml, reduced alcohol | reishi 50%, turkey-tail 50% | dogs: small 5–7, medium 7–10, large ≤25 drops/day on wet food | yes | cats not mentioned; ethanol residue % `NEEDS CLIENT INPUT`; Act 36 check |
| pet-elixer-of-life-combo-50ml-30ml | 50 ml 6-blend (human) + 30 ml pets | six + reishi/turkey-tail | yes | yes | title/handle misspelling "Elixer" — keep handle, fix title |
| the-workaholic | 50 ml, 50/50 | lions-mane, cordyceps | none | yes | — |
| extreme-gut-fix | 50 ml | lions-mane, chaga, turkey-tail | none | **no** (prose only) | `NEEDS CLIENT INPUT` ratios, dose |
| menopause-50ml | 50 ml | lions-mane, reishi, cordyceps (inferred from prose) | none | **no** | `NEEDS CLIENT CONFIRMATION` of ingredients and ratios |
| relax-no-stress-50ml | 50 ml | lions-mane, reishi | none | **no** | `NEEDS CLIENT INPUT` ratios, dose |
| myco-radiance-skin-perfection | 50 ml | tremella, reishi, chaga, shiitake | none | **no** | `NEEDS CLIENT INPUT` ratios, dose |
| sceletium-tortuosum-the-happy-place-50ml | 50 ml | sceletium | "start with a low dose" only | **no** | `NEEDS CLIENT INPUT` plant part, alkaloid content, dose; legal status check |
| new-general-maintenance-50ml | 50 ml | turkey-tail, lions-mane, cordyceps | none | **no** | `NEEDS CLIENT INPUT` ratios, dose |

## Collections (proposed, Shopify-native, manual or automated by tag)

| Handle | Title | Rule | Count | Grid |
|---|---|---|---|---|
| all | Shop all | all products | 23 | 2 featured + 3+3+3+3+3+3 with quiz CTA card = 24 tiles |
| single-species | Single-species tinctures | tag `form:single` | 7 (LM 30, LM 50, reishi, chaga, cordyceps, turkey tail, tremella) | 1 featured + 3 + 3 |
| blends | Blends | tag `form:blend` | 8 (Elixir of Life, Gut Fix, Meno'pause, Relax, Workaholic, Myco-Radiance, General Maintenance, Sceletium*) | 4 + 4 |
| combo-deals | Combo deals (existing) | tag `form:combo` | 7 | 1 featured + 3 + 3 |
| pets | For pets | tag `audience:pets` | 2 | 2 |
| botanicals | Botanicals | tag `kingdom:plant` | 1 | 1 centred feature (Sceletium) |

*Sceletium sits in Blends only for merchandising width; it is a single botanical and is also the sole item in Botanicals.

Collection `frontpage` is retired from navigation (kept for the homepage featured section, curated to 6 products = 3 + 3).

## Product data cleanup (for import — `data/shopify/products-cleanup.csv`)

Actions in the CSV: vendor → "Just Mushrooms" on all; `product_type` → "Tincture" / "Tincture combo" / "Pet tincture" / "Botanical tincture"; tags `form:*`, `audience:*`, `species:*`, `kingdom:*`; weights 30 ml → 90 g, 50 ml → 130 g, combos → 220 g (**estimates — `NEEDS CLIENT CONFIRMATION` with a kitchen scale before shipping rates depend on them**); `taxable` → true on the four non-taxable products (VAT applies to these goods unless the client has a ruling — `NEEDS CLIENT CONFIRMATION`); titles cleaned ("Lion's Mane", "Elixir", remove "NEW!" and packaging text, fix quotes); SKU scheme `JM-<SPECIES>-<SIZE>` replacing claim-bearing SKUs ("Detox001", "Immune01Booster", "Anti-Oxidant01"). Handles are preserved so no product URL changes.
