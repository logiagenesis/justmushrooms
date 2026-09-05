# 09 — Phase 8: Content drafts and the claim-removal log

Generated content lives in `data/shopify/products-metafields.json` (products) and
`data/shopify/species-entries.json` (species). Both are produced by scripts in `scripts/`
from the cited evidence matrices, so the copy and the citations cannot drift apart.

## 1. Brand voice — ten rules

1. Describe the object, not the outcome. "A single-species Lion's Mane fruit-body tincture" beats any promise.
2. Every claim carries a tier: `Strong human evidence`, `Limited human evidence`, `Animal/in-vitro evidence`, `Traditional use`, `Client/product-label claim`. Anything else is `Unverified — do not publish`.
3. "May support" requires at least *Limited human evidence* for that species. Below that, say "traditionally used" or "studied in the laboratory".
4. Name the limits in the same breath as the finding: n, weeks, population, and the form used.
5. Never transfer evidence between preparations. PSK is not turkey tail tincture; erinacine mycelium is not fruit body; Zembrin is not kanna tincture.
6. No disease word appears in selling copy — only in "what it does not do", warnings and safety notes.
7. Confidence comes from specificity, not adjectives. Cut "powerful", "potent", "premium", "miracle", "unlock".
8. Say what is missing. "Sourcing documents not yet supplied. No origin claim is made." is better copy than silence.
9. UK spelling, ZAR, metric, DD/MM/YYYY.
10. When a rule and a sale conflict, the rule wins.

## 2. Homepage copy (as shipped in `templates/index.json`)

- **Hero eyebrow:** Functional mushroom tinctures · Plettenberg Bay
- **H1:** The underground, bottled.
- **Lede:** Small-batch tinctures from seven mushrooms and one South African botanical. Every species page shows what the evidence says, and what it does not.
- **CTAs:** Shop mushrooms / Explore species
- **Trust strip:** Delivered across South Africa · Secure Shopify checkout · Label-declared, evidence-tiered ("Every claim is graded. No cures, no miracles.") · Small-batch tinctures
- **Species section:** "Know the organism before you buy the bottle"
- **Education split:** "What mushrooms may support, and what they do not do" — three tiered "may" lines and four "does not" lines, each rendered with its badge
- **Sourcing:** "Spring water, ethanol, time" — with an explicit statement that no organic, origin or lab claim is made until documents arrive
- **Newsletter:** "Get the field notes — one email a month: new species guides, how we make the tinctures, and launch updates. No spam, no miracle claims."

## 3. Species pages

Eight entries, each carrying: identity and taxonomy with source, traditional use, a tiered "may support" list, a "does not do" list, compounds with solubility notes, how-to-use, safety, contraindications, six FAQs, the full reference list with URLs, three verified non-medical facts, and SEO fields. Evidence grades as published:

| Species | Grade | Headline caution |
|---|---|---|
| Lion's Mane (*Hericium erinaceus*) | Limited human evidence | Mushroom allergy; pregnancy (no data); blood thinners and diabetes medicines — check first |
| Reishi (*Ganoderma lucidum*) | Limited human evidence | Liver-injury case reports; blood thinners; immunosuppressants; chemotherapy; pregnancy — do not use |
| Chaga (*Inonotus obliquus*) | Animal/in-vitro evidence | Kidney disease or stones — do not use (oxalate nephropathy cases); no human trials exist |
| Cordyceps (*Cordyceps militaris*) | Limited human evidence | Bleeding risk and surgery; immunosuppressants; myelogenous cancers; pregnancy — avoid |
| Turkey Tail (*Trametes versicolor*) | Limited human evidence | Immunosuppressants and transplant; tell your oncologist; pregnancy — avoid |
| Tremella (*Tremella fuciformis*) | Limited human evidence | Well tolerated in the one trial; mushroom allergy; pregnancy — no data |
| Shiitake (*Lentinula edodes*) | Limited human evidence | Shiitake (flagellate) dermatitis in sensitive people; mushroom allergy; pregnancy — no data |
| Sceletium (Kanna) (*Sceletium tortuosum*) | Limited human evidence | Do not combine with antidepressants or other serotonergic medicines; may cause drowsiness; pregnancy — avoid |

## 4. Product copy

Twenty-three products. Each entry carries a promise line, form, volume, alcohol %, declared strength, ingredient list, directions, warnings, an evidence summary that points at the species pages, a product-specific "does not do" list, four FAQs and SEO fields.

| Handle | Title | Promise | Flags |
|---|---|---|---:|
| `chaga-mushroom-elixir-combo-50ml-30ml` | Chaga Mushroom Elixir Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species Chaga tincture. | 2 |
| `chaga-mushroom-tincture-30ml` | Chaga Mushroom Tincture (30ml) | A single-species Chaga tincture, made from the wild-harvested birch conk. | 1 |
| `cordyceps-mushroom-elixir-combo-50ml-30ml` | Cordyceps Mushroom Elixir Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species Cordyceps tincture. | 2 |
| `cordyceps-mushroom-tincture-30ml` | Cordyceps Mushroom Tincture (30ml) | A single-species Cordyceps militaris fruit-body tincture, extracted in spring water and approximately 30% ethanol. | 1 |
| `elixir-for-pets-tincture-30ml` | ELIXIR For Pets Tincture (30ml) | A two-mushroom tincture for dogs — Reishi and Turkey Tail, with most of the alcohol evaporated off for palatability. | 1 |
| `elixir-of-life-6-mushroom-blend-50ml` | Elixir of life 6 Mushroom Blend (50ml) | Our six-mushroom house blend: Reishi, Lion’s Mane, Cordyceps, Chaga, Turkey Tail and Tremella in equal measure. | 2 |
| `extreme-gut-fix` | Extreme Gut Fix 50ml | A three-mushroom blend of Lion’s Mane, Chaga and Turkey Tail in one 50 ml bottle. | 5 |
| `lions-mane-mushroom-elixir-combo-50ml-30ml` | Lions Mane Mushroom Elixir Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species Lion's Mane tincture. | 2 |
| `lions-mane-mushroom-tincture-30ml` | Lions Mane Mushroom Tincture (30ml) | A single-species Lion's Mane fruit-body tincture, extracted in spring water and approximately 30% ethanol. | 0 |
| `lions-mane-mushroom-tincture-50ml` | Lions Mane Mushroom Tincture (50ml) | The 50 ml bottle of our single-species Lion's Mane fruit-body tincture, with a fast-flow dropper cap. | 0 |
| `menopause-50ml` | Meno'pause' 50ml | A three-mushroom blend of Lion’s Mane, Reishi and Cordyceps in one 50 ml bottle. | 5 |
| `myco-radiance-skin-perfection` | Myco-Radiance 'skin perfection' 50ml | A four-mushroom blend of Tremella, Reishi, Chaga and Shiitake in one 50 ml bottle. | 5 |
| `new-general-maintenance-50ml` | NEW! General Maintenance 50ml | A three-mushroom daily blend of Turkey Tail, Lion’s Mane and Cordyceps in one 50 ml bottle. | 5 |
| `pet-elixer-of-life-combo-50ml-30ml` | Pet & Elixer Of Life Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life for you, paired with the 30 ml Reishi and Turkey Tail tincture for your dog. | 3 |
| `reishi-mushroom-elixir-combo-50ml-30ml` | Reishi Mushroom Elixir Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species Reishi tincture. | 2 |
| `reishi-mushroom-tincture-30ml` | Reishi Mushroom Tincture (30ml) | A single-species Reishi fruit-body tincture — bitter, as a good reishi extract should be. | 0 |
| `relax-no-stress-50ml` | Relax no stress 50ml amber bottle with fast flow dropper cap | A two-mushroom blend of Lion’s Mane and Reishi in a 50 ml amber bottle with a fast-flow dropper cap. | 4 |
| `sceletium-tortuosum-the-happy-place-50ml` | Sceletium  tortuosum 'The Happy Place" 50ml | A whole-plant tincture of Sceletium tortuosum (kanna) — a South African succulent, not a mushroom. | 2 |
| `the-workaholic` | The Workaholic 50ml | A 50/50 blend of Lion’s Mane and Cordyceps in one 50 ml bottle. | 2 |
| `tremella-mushroom-elixir-combo-50ml-30ml` | Tremella Mushroom Elixir Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species Tremella tincture. | 2 |
| `tremella-mushroom-tincture-30ml` | Tremella Mushroom Tincture (30ml) | A single-species Tremella (snow fungus) fruit-body tincture — the beauty mushroom of Chinese tradition. | 0 |
| `turkey-tail-mushroom-elixir-combo-50ml-30ml` | Turkey Tail Mushroom Elixir Combo (50ml+30ml) | Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species Turkey Tail tincture. | 2 |
| `turkey-tail-mushroom-tincture-30ml` | Turkey Tail Mushroom Tincture (30ml) | A single-species Turkey Tail fruit-body tincture, from cultivated and wild-harvested material. | 0 |

### Open questions carried in the data (48 in total)

Every flag is machine-readable in `products-metafields.json` under `flags`. Grouped:

- **Ingredient lists and ratios missing** — Extreme Gut Fix, Meno'pause, Relax, Myco-Radiance, General Maintenance, Sceletium. The live label gives prose only.
- **No dose on the label** — the same six, plus all single-species tinctures except Chaga.
- **Declared strength missing** — the six blends above.
- **Species name invalid** — every Cordyceps product prints "Ophiocordyceps militaris".
- **Renames proposed** — five products whose names are themselves claims (see below).
- **Chaga origin and oxalate content** — wild-harvest permit and an oxalate measurement for the finished tincture.
- **Pet product** — residual ethanol after the evaporation step, and whether Act 36 of 1947 registration applies.

### Proposed renames (client decision)

| Current | Proposed | Why |
|---|---|---|
| Extreme Gut Fix 50ml | Three-Mushroom Blend | "Gut Fix" claims a therapeutic outcome for IBS/Crohn's/leaky gut |
| Meno'pause' 50ml | Three-Mushroom Blend | Names a medical condition and implies hormonal action |
| Relax no stress 50ml … | Evening Blend | "No stress" is an outcome claim; the title also contains packaging text |
| Myco-Radiance 'skin perfection' 50ml | Four-Mushroom Blend | "Skin perfection" is an unsupported cosmetic-effect claim |
| NEW! General Maintenance 50ml | General Maintenance Blend | "NEW!" is baked into the title and handle |

## 5. Removal log — every claim dropped from the live site

Source: the live product descriptions captured on 02/09/2026 (`data/live-snapshot/products.json`) and the client's 2022 write-ups. Basis column cites the evidence file section that rules the claim out.

| Product(s) | Removed claim | Basis |
|---|---|---|
| Lion's Mane ×3, Workaholic | "Treats Depression", "Anti anxiety", "treats symptoms of diabetes" | lions-mane §7 — no trials; disease claims prohibited |
| Lion's Mane ×3, Relax | Alzheimer's, dementia, ADHD, "regrow nerves", NGF/BDNF in humans | lions-mane §7 — Alzheimer's pilot used mycelium; human BDNF unchanged |
| Chaga ×2 | "Can treat arthritis and gout", "Regulates blood sugar levels and balances PH level", "anti-cancer activity" | chaga §7 — no human trial exists at all |
| Cordyceps ×2, Workaholic | "May be helpful in treating conditions like diabetes or atherosclerosis", "anti aging skin benefits", tinnitus, male sexual dysfunction | cordyceps §7 — rodent/in-vitro only; human testosterone unchanged |
| Turkey Tail ×2 | Entire "Potential Cancer Benefits" section (breast, leukaemia, colon, lung, gastric), "Can treat HPV" | turkey-tail §7 — that evidence is PSK, a licensed drug, not a tincture |
| Reishi ×2 | "can lower blood pressure", "anti-viral, anti-inflammatory and anti-fungal", "Helps with liver and kidney health" | reishi §7 — Cochrane found no BP/lipid/HbA1c effect; liver claim is inverted by hepatotoxicity reports |
| Tremella ×2 | "Can kill cancer cells", "Can lower cholesterol", "Could combat obesity", "natural source of hyaluronic acid" | tremella §7 — human skin data are topical; TFPS drug ≠ tincture |
| Elixir of Life block (×8 products) | asthma, emphysema, IBD, anxiety, depression, ADHD/ADD, "preventative measures", "anti-viral, anti-bacterial, anti-fungal" | blends §b, §d, §g |
| Extreme Gut Fix | "leaky gut, IBS, Crohn's disease", "Protects Against Ulcers", "Cancer Support" | blends §g |
| Meno'pause | "regulate estrogen and progesterone", "prevent bone loss", "hot flashes" | blends §g — preliminary at best, hormonal claims prohibited |
| Myco-Radiance | "kojic acid brightens skin", "collagen protection", "reduce pigmentation" | shiitake §6–7 — kojic acid is an *Aspergillus* product; no oral skin evidence |
| Elixir for Pets ×2 | "Supports cancer treatment or use against tumours", arthritis and joint pain in dogs | blends §h — one small canine study, product-branded, no untreated arm |
| Sceletium | "non-addictive", "Reduces stress, anxiety" as outcomes | sceletium §7 — no trial in diagnosed anxiety; addiction potential unverified |
| Site-wide | "Medicinal Mushrooms for Human Optimization" announcement | "Medicinal" positions the goods as medicines under the Medicines Act |
| Multiple | "certified organic ethanol", "organically grown", "wild harvested" | No certificates supplied — held until documents arrive |
| All blends | "stacking"/synergy, "adaptogen", "detox", "immune boosting", "homeostasis" | blends §a, §c, §d, §e |

## 6. What replaced them

Product pages now sell on: what is in the bottle, how it is made, how much is in it, how to take it, who should not take it, and a link to the graded evidence for each species. The strongest line on the site is the honest one — "Every claim is graded. No cures, no miracles." — which is also the only claim on it that needs no citation.
