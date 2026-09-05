# Just Mushrooms — SA SEO Keyword Research & Keyword-to-URL Map

**Prepared:** 2026-09-02 · **Market:** South Africa (en-ZA only) · **Platform:** Shopify (justmushrooms.co.za)
**Author:** SEO strategy pass (Claude Code session)

## 0. Method, evidence standard and caveats

- **No keyword tool with volumes was available. No search volumes appear in this document and none should be inferred.** Demand is evidenced only by: (a) ZA-geotargeted Google SERPs pulled via a search API with `country=ZA` (position data recorded, marked "ZA SERP"); (b) general web search results (marked "web"); (c) what SA competitors and retailers are visibly targeting in title tags / URL slugs; (d) SA press coverage. Anything not directly observed is marked **UNVERIFIED**.
- **Blocked sources.** The sandbox egress proxy blocked direct fetches of `justmushrooms.co.za`, Google/Bing/DuckDuckGo autocomplete endpoints, Takealot, Faithful to Nature, Wellness Tree, OneLife, Daily Maverick and most competitor product pages. Autocomplete and People-Also-Ask boxes therefore could **not** be observed directly; where I list "autocomplete-style" variants they are inferred from competitor slugs/titles and are marked UNVERIFIED. Reddit r/southafrica and HelloPeter returned **no** indexed threads for any mushroom-tincture query (two attempts each) — forum-demand evidence is absent, not negative.
- **Product handles.** `https://justmushrooms.co.za/products.json` was blocked, so the 23-handle list supplied in the brief is used. Five handles were independently confirmed as live, indexed URLs in ZA SERPs (`tremella-mushroom-tincture-30ml`, `menopause-50ml`, `the-workaholic`, `extreme-gut-fix`, `new-general-maintenance-50ml`), plus `/collections/all`, `/collections/frontpage`, `/pages/contact`. The remaining 18 are UNVERIFIED-live but assumed correct.
- **Observed on-site copy risk.** ZA SERP snippets of the live store currently contain disease language ("support lung function (especially for conditions like asthma…)", "address issues such as leaky gut, IBS, Crohn's disease", "significant reductions in anxiety and depression"). Every title/meta/H1 proposed below is claim-free and this copy should be rewritten before any of the titles ship (see §7 compliance note).

---

## 1. Live product handles (23) and what SERPs show about them

| # | Handle | Observed in ZA SERP | Notes / observed price |
|---|---|---|---|
| 1 | `new-general-maintenance-50ml` | Yes | "NEW! General Maintenance 50ml" — Turkey Tail + Lion's Mane + Cordyceps blend |
| 2 | `sceletium-tortuosum-the-happy-place-50ml` | UNVERIFIED | Sceletium (kanna) tincture |
| 3 | `myco-radiance-skin-perfection` | UNVERIFIED | Tremella-led skin blend (assumed) |
| 4 | `relax-no-stress-50ml` | UNVERIFIED | Reishi-led calm blend (assumed) |
| 5 | `menopause-50ml` | Yes | "Meno'pause' 50ml" — snippet carries anxiety/depression study language (rewrite) |
| 6 | `extreme-gut-fix` | Yes | "Extreme Gut Fix 50ml" — snippet names IBS/Crohn's (rewrite) |
| 7 | `turkey-tail-mushroom-tincture-30ml` | UNVERIFIED | R255 pattern for 30ml singles observed on home/collection snippets |
| 8 | `turkey-tail-mushroom-elixir-combo-50ml-30ml` | UNVERIFIED | Combo bundle |
| 9 | `tremella-mushroom-tincture-30ml` | Yes | Snippet carries asthma/dry-cough language (rewrite) |
| 10 | `tremella-mushroom-elixir-combo-50ml-30ml` | UNVERIFIED | |
| 11 | `the-workaholic` | Yes | "The Workaholic 50ml" — 50/50 Lion's Mane + Cordyceps |
| 12 | `reishi-mushroom-tincture-30ml` | Yes (via Google redirect URL) | Ranked ~#4 for "reishi tincture south africa" in ZA SERP, R255 |
| 13 | `reishi-mushroom-elixir-combo-50ml-30ml` | UNVERIFIED | |
| 14 | `pet-elixer-of-life-combo-50ml-30ml` | UNVERIFIED | Note misspelling "elixer" in handle — keep (301 cost) but fix title |
| 15 | `lions-mane-mushroom-tincture-50ml` | UNVERIFIED | Web snippet: R360 |
| 16 | `lions-mane-mushroom-tincture-30ml` | UNVERIFIED | Web snippet: R240–R250 range for 30ml |
| 17 | `lions-mane-mushroom-elixir-combo-50ml-30ml` | UNVERIFIED | |
| 18 | `elixir-for-pets-tincture-30ml` | UNVERIFIED | Home snippet: "Pets Tincture (30ml)" |
| 19 | `cordyceps-mushroom-tincture-30ml` | UNVERIFIED | Reseller SimpleSeed lists "Just Mushrooms Cordyceps Mushroom Tincture" R290 (https://simpleseed.co.za/products/just-mushrooms-cordyceps-mushroom-tincture) — reseller ranks #4 for "cordyceps tincture south africa" while the brand page does not: fix with stronger PDP + canonical ownership |
| 20 | `cordyceps-mushroom-elixir-combo-50ml-30ml` | UNVERIFIED | |
| 21 | `chaga-mushroom-tincture-30ml` | Yes (collection snippet) | R255 |
| 22 | `chaga-mushroom-elixir-combo-50ml-30ml` | UNVERIFIED | |
| 23 | `elixir-of-life-6-mushroom-blend-50ml` | UNVERIFIED | Flagship 6-blend |

Brand tagline observed in SERP title/snippet: "Medicinal Mushrooms for Human Optimization" (justmushrooms.co.za, https://justmushrooms.co.za/). Contact: info@justmushrooms.co.za.

---

## 2. Species keyword research

Legend — Intent: **I** informational, **T** transactional, **N** navigational. Evidence: "ZA SERP" = observed ZA-geo Google results 2026-09-02; "web" = general web search; "competitor" = an SA competitor targets it in a title/slug; **UNVERIFIED** = inferred only. "Top 3 seen" = first three ranking domains observed for that query (or the closest proxy query, noted).

### 2.1 Lion's Mane (`/pages/species-lions-mane`, PDPs 15–17)

**Informational (12)**

| Query | Intent | Evidence (URL) | SERP features seen | Top 3 seen |
|---|---|---|---|---|
| what is lion's mane mushroom | I | Healthline/WebMD dominate ZA SERP for "lion's mane benefits side effects dosage" | Video (YouTube), research (PMC) | healthline.com, webmd.com, pmc.ncbi.nlm.nih.gov |
| lion's mane benefits | I | ZA SERP pos 2 https://www.healthline.com/nutrition/lions-mane-mushroom | Video, "study" snippets | healthline.com, webmd.com, examine.com |
| lion's mane side effects | I | ZA SERP pos 1 https://www.webmd.com/vitamins-supplements/lions-mane-mushroom ; web: mskcc.org, gaiaherbs.com | Featured-snippet style list | webmd.com, healthline.com, mskcc.org |
| lion's mane dosage tincture / how many drops | I | web: https://www.remeday.com/mushrooms/lions-mane-dosage , https://oftheancients.com/blogs/news/how-to-take-lions-mane-tincture-a-complete-beginners-guide | Shopping (Amazon) mixed in | remeday.com, bodybraincoffee.com, oftheancients.com |
| how long does lion's mane take to work | I | competitor: sugarshackmushrooms blog (ZA SERP pos 6 for "lion's mane tincture"); web snippets "2–4 weeks" | — | UNVERIFIED |
| is lion's mane legal in south africa | I | **ZA SERP pos 1** https://onelife.co.za/blogs/health-wellness-hub/lions-mane-mushroom-south-africa ("Yes… legal"); pos 6 https://fungitown.co.za/are-lions-mane-mushrooms-legal/ ; pos 4 psilocybin legality (schindlers.co.za) shows the confusion driving the query | News (EWN 13 Feb 2026), FAQ | onelife.co.za, biogen.co.za, ewn.co.za |
| lion's mane vs reishi vs cordyceps | I | web: https://futurolabs.co.uk/blog/lions-mane-vs-cordyceps-vs-reishi/ , evopure.co.uk (UK 2026) | — | futurolabs.co.uk, wellempowered.com, bodybraincoffee.com |
| lion's mane and antidepressants / SSRIs | I | UNVERIFIED (search budget exhausted) | — | UNVERIFIED |
| lion's mane pregnancy | I | UNVERIFIED | — | UNVERIFIED |
| lion's mane mushroom south africa (does it grow here / fresh) | I/T | web: taste.co.za Woolworths lion's mane (Motherbud), mushlove.co.za, themushroombox.shop (OZCF market CPT) | Recipes | taste.co.za, mushlove.co.za, themushroombox.shop |
| lion's mane for dogs | I | web: mycodog.com; ZA SERP for pets shows Carniraw/DoggyChef (turkey tail) | — | mycodog.com, onlynaturalpet.com, UNVERIFIED SA |
| lion's mane review / does it work (SA press) | I | https://www.dailymaverick.co.za/article/2026-02-10-brain-boost-or-brand-boost-the-market-momentum-behind-lions-mane-mushrooms/ ; https://www.ewn.co.za/2026/02/13/dietician-advises-caution-as-lion-s-mane-mushrooms-health-craze-grows | News | dailymaverick.co.za, ewn.co.za, onelife.co.za |

**Transactional (9)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| lion's mane south africa | T | ZA SERP | Shopping-style product results | dischem.co.za (Life Style Food 100g), faithful-to-nature.co.za, earthshine.co.za |
| buy lion's mane south africa | T | ZA SERP | Product grid | dischem.co.za, faithful-to-nature.co.za, earthshine.co.za |
| lion's mane tincture | T | ZA SERP | Mixed: retail + Healthline + Takealot | earthshine.co.za, healthline.com, faithful-to-nature.co.za (Aether) |
| lion's mane tincture south africa | T | web | — | onelife.co.za, naturespharmacymaboneng.co.za, goodforus.co.za |
| lion's mane tincture cape town | T | ZA SERP | Local-business signals (addresses in snippets) | earthshine.co.za, faithful-to-nature.co.za, harmonicmycology.com |
| lion's mane johannesburg / pretoria / durban | T | web: Clicks click-and-collect snippet lists JHB/PTA/DBN; onelife.co.za stores Centurion/Edenvale | — | clicks.co.za, pricecheck.co.za, sporeguru.co.za |
| lion's mane price south africa | T | web: pricecheck.co.za "Lion's Mane Capsules – Best Price in South Africa" | Price comparison | pricecheck.co.za, faithful-to-nature.co.za, clicks.co.za |
| lion's mane takealot | N/T | ZA SERP: Takealot PLID96405400 "Lion's Mane Mushroom Tincture | Focus & Cognitive Support"; PLID53820551 Sfera | Marketplace | takealot.com |
| lion's mane dischem / clicks / wellness warehouse | N/T | web: dischem.co.za Noolit; clicks.co.za Sfera/OptiHealth/Ever Good; wellnesswarehouse.com NeuroActive, Phyto Force 1:5 tincture | Retail | dischem.co.za, clicks.co.za, wellnesswarehouse.com |

SA-specific variants to include in copy (UNVERIFIED autocomplete): "lions mane za", "lion's mane near me", "lion's mane drops south africa", "lion's mane liquid extract south africa", "lion's mane dual extract".

### 2.2 Reishi (`/pages/species-reishi`, PDPs 12–13, `relax-no-stress-50ml`)

**Informational (9)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| what is reishi mushroom | I | competitor: https://phytopro.co.za/reishi-medicinal-mushroom/ (Cape Town blog ranks pos 4 for "reishi mushroom south africa") | — | faithful-to-nature.co.za, thehealthfoodemporium.co.za, earthshine.co.za |
| reishi benefits | I | web (foursigmatic, remeday) | — | UNVERIFIED SA |
| reishi for sleep / how to take reishi for sleep | I | web: https://www.remeday.com/mushrooms/reishi-for-sleep , https://evopure.co.uk/blogs/news/how-to-use-reishi-mushroom-for-sleep | — | remeday.com, evopure.co.uk, fourfive.com |
| reishi side effects / who should not take | I | UNVERIFIED | — | UNVERIFIED |
| reishi tincture dosage | I | web snippets "1–2 ml, 2–3×/day; 30–60 min before bed" | — | UNVERIFIED |
| does reishi grow in south africa | I | ZA SERP pos 1 snippet: "Red reishi is indigenous to South Africa and commonly found growing on acacia and jacaranda trees" https://www.faithful-to-nature.co.za/ingredient/reishi | Featured-snippet style | faithful-to-nature.co.za |
| reishi vs lion's mane | I | web comparison articles | — | see 2.1 |
| reishi dual extract meaning | I | competitor: earthshine "dual-extract – both hot water and alcohol" | — | earthshine.co.za |
| reishi menopause | I | UNVERIFIED (budget) — relevant to `menopause-50ml` | — | UNVERIFIED |

**Transactional (7)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| reishi mushroom south africa | T | ZA SERP | Product grid | faithful-to-nature.co.za, thehealthfoodemporium.co.za, earthshine.co.za |
| reishi tincture south africa | T | ZA SERP — **justmushrooms.co.za reishi 30ml appeared ~pos 4** | — | earthshine.co.za, naturally-yours.co.za, growfolk.co.za |
| reishi mushroom tincture south africa | T | web | — | faithful-to-nature.co.za, mycoalchemy.co.za, growfolk.co.za |
| buy reishi south africa | T | UNVERIFIED (budget) | — | UNVERIFIED |
| reishi drops / reishi extract | T | competitor: Aether Reishi Extract 30ml R269 (F2N) | — | faithful-to-nature.co.za |
| reishi cape town / johannesburg | T | phytopro (CPT), thehealthfoodemporium (Gauteng) snippets | — | UNVERIFIED |
| reishi takealot | N | ZA SERP redirect result "Reishi Tincture – Stress and Immunity support" (Takealot listing) | Marketplace | takealot.com |

### 2.3 Chaga (`/pages/species-chaga`, PDPs 21–22)

**Informational (9)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| what is chaga | I | ZA SERP pos 7 https://www.healthline.com/nutrition/chaga-mushroom | Video (YouTube "How to Make a Chaga Tincture") | healthline.com, alaskaethnobotany, youtube.com |
| chaga benefits | I | web: health.clevelandclinic.org, laughinglichen.ca | — | clevelandclinic, birchboys.com, mskcc.org |
| chaga side effects (oxalates) | I | web: https://birchboys.com/blogs/about-our-chaga/chaga-warnings-oxalates-side-effects-from-inonotus-obliquus ; webmd | — | birchboys.com, webmd.com, mskcc.org |
| chaga tea vs tincture | I | web: birchboys.com, shop.giddyyoyo.com | — | birchboys.com, giddyyoyo.com |
| where does chaga grow / is chaga wild in south africa | I | ZA SERP snippet "Aether Chaga Extract is sustainably wild-harvested in South Africa" (F2N) vs Healthline "birch trees, boreal forests" — conflicting claims = content opportunity | — | faithful-to-nature.co.za, alaskaethnobotany, healthline.com |
| chaga mushroom benefits south africa | I | competitor: https://www.charava.co.za/blogs/charava-sa-blog/chaga-mushroom-benefits-boosting-immunity-energy-across-sa (11 Aug 2026) | — | charava.co.za |
| best chaga supplement south africa | I/T | competitor: https://www.charava.co.za/blogs/charava-sa-blog/best-chaga-mushroom-supplement-to-buy-2026-south-african-guide | — | charava.co.za |
| chaga dosage | I | web (BC CDC 3.6 g/day dried) | — | UNVERIFIED |
| chaga vs reishi | I | UNVERIFIED | — | UNVERIFIED |

**Transactional (6)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| chaga mushroom south africa | T | ZA SERP | Product grid | faithful-to-nature.co.za, wellnesswarehouse.com, thehealthfoodemporium.co.za |
| chaga south africa buy | T | web | — | faithful-to-nature.co.za, charava.co.za, botanicumsa.co.za |
| chaga tincture south africa | T | ZA SERP | Mixed SA/UK | faithful-to-nature.co.za (Aether), naturespharmacymaboneng.co.za, organicchoice.co.za |
| chaga powder / chaga tea south africa | T | web: lifexpanded.co.za, tloutea.co.za "Chaga Chai" | — | lifexpanded.co.za, botanicumsa.co.za, tloutea.co.za |
| chaga takealot | N | UNVERIFIED | — | UNVERIFIED |
| chaga cape town | T | thealchemyhub.co.za (Noordhoek pickup) | — | UNVERIFIED |

### 2.4 Cordyceps (`/pages/species-cordyceps`, PDPs 19–20, `the-workaholic`)

**Informational (9)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| what is cordyceps | I | web: healthline, webmd | — | healthline.com, webmd.com, rxlist.com |
| cordyceps benefits / cordyceps for energy | I | web: https://www.healthline.com/nutrition/cordyceps-benefits | — | healthline.com, setforset.com, peacehealth.org |
| cordyceps for athletes / running | I | web: setforset.com, fourfive.com | — | setforset.com, fourfive.com, peacehealth.org |
| cordyceps side effects | I | web: realmushrooms.com, webmd | — | rxlist.com, realmushrooms.com, webmd.com |
| cordyceps militaris vs sinensis | I | competitor: F2N "Harmonic Mycology Cordyceps Militaris Tincture"; amazon.co.za "Cordyceps Militaris" — militaris is the SA norm | — | UNVERIFIED |
| cordyceps libido / fertility | I | ZA SERP snippets (homegrowers.co.za) — avoid claims | — | homegrowers.co.za |
| how to grow cordyceps south africa | I | ZA SERP pos 7 https://www.spes.co.za/cordyceps-cultivation-a-complete-beginners-guide/ | — | spes.co.za |
| cordyceps dosage tincture | I | ZA SERP willowwellness snippet "10–15 drops 3× a day" | — | willowwellness.co.za |
| lion's mane and cordyceps together | I | brand PDP "The Workaholic" 50/50 blend; UK comparison blogs | — | UNVERIFIED |

**Transactional (6)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| cordyceps south africa | T | ZA SERP | Product grid | earthshine.co.za ("SA Grown"), homegrowers.co.za, essentialproducts.co.za |
| cordyceps tincture south africa | T | ZA SERP — reseller of Just Mushrooms (simpleseed.co.za) at pos 4 | — | faithful-to-nature.co.za, growfolk.co.za, willowwellness.co.za |
| cordyceps south africa buy tincture | T | web | — | fungitown.co.za, growstone.co.za, harmonicmycology.com |
| cordyceps clicks | N | ZA SERP pos 5 https://clicks.co.za/evergood_cordyceps-energy-endurance-medicinal-mushrooms-30-vegicaps/p/382294 | Retail | clicks.co.za |
| cordyceps price south africa | T | UNVERIFIED | — | UNVERIFIED |
| cordyceps port elizabeth / gqeberha | T | willowwellness.co.za (PE address) | — | willowwellness.co.za |

### 2.5 Turkey Tail (`/pages/species-turkey-tail`, PDPs 7–8, pets, `extreme-gut-fix`, `new-general-maintenance-50ml`)

**Informational (8)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| what is turkey tail mushroom | I | web: inaturalist "Fungi of southern Africa" guide; southafrica.co.za types of mushrooms | Images | inaturalist.org, southafrica.co.za |
| turkey tail benefits (PSK/PSP) | I | ZA SERP snippets reference PSK/PSP (bobshop, themushroombox) | — | UNVERIFIED |
| turkey tail side effects | I | UNVERIFIED | — | UNVERIFIED |
| turkey tail for gut health | I | competitor snippets growfolk "digestion… healthy gut" | — | growfolk.co.za |
| turkey tail for dogs / cats | I/T | ZA SERP pos 1–2 https://carniraw.co.za/product/turkey-tail-mushrooms-for-your-pets/ , https://doggychef.co.za/shop/turkey-tail-mushrooms-for-cats-and-dogs-100-organic-50gr/ ; web: realmushrooms, dogcancer.com | — | carniraw.co.za, doggychef.co.za, amazon.co.za |
| turkey tail dosage for dogs | I | web snippets (mg/kg guidance) | — | lolahemp.com, drruthroberts.com |
| turkey tail found in south africa (identification) | I | inaturalist guide | — | inaturalist.org |
| turkey tail tincture vs capsules | I | UNVERIFIED | — | UNVERIFIED |

**Transactional (6)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| turkey tail mushroom south africa | T | web | Mixed (patents, iNaturalist) | inaturalist.org, desertcart.co.za, superfoods.co.za |
| turkey tail tincture south africa | T | ZA SERP | Product grid | earthshine.co.za (AFM), faithful-to-nature.co.za, hadeco.co.za |
| turkey tail capsules south africa | T | web: growfolk, antioxi.co.za, F2N category | — | faithful-to-nature.co.za, growfolk.co.za, antioxi.co.za |
| turkey tail for dogs south africa | T | ZA SERP | — | carniraw.co.za, doggychef.co.za, amazon.co.za |
| turkey tail bobshop / bidorbuy | N | ZA SERP pos 6 https://www.bobshop.co.za/turkey-tail-tincture-50ml/p/686022835 | Marketplace | bobshop.co.za |
| turkey tail price | T | F2N snippet: "Turkey Tail Tincture African 50ml R229.00 (15 reviews)" | — | faithful-to-nature.co.za |

### 2.6 Tremella (`/pages/species-tremella`, PDPs 9–10, `myco-radiance-skin-perfection`)

**Informational (8)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| what is tremella mushroom / snow mushroom | I | web: specialtyproduce.com, Wikipedia; ZA SERP health.com | — | specialtyproduce.com, wikipedia.org, health.com |
| tremella benefits skin | I | ZA SERP pos 5 https://www.docmarty.com/blogs/news/the-science-of-tremella-south-africas-secret-to-radiant-hydrated-skin (May 2025) | — | docmarty.com, faithful-to-nature.co.za, superfoods.co.za |
| tremella vs hyaluronic acid | I | web: zombiemyco, eatfungies, dirteaworld | — | zombiemyco.com, eatfungies.com, holski.com |
| tremella "vegan collagen" | I | competitor snippet superfoods.co.za "vegan collagen & beauty mushroom" | — | superfoods.co.za |
| tremella side effects | I | ZA SERP health.com "6 Benefits, Side Effects" | — | health.com |
| tremella in skincare (topical) vs oral | I | ZA SERP zuplex.co.za, refinednaturals.co.za, shariqueskin.co.za (cosmetic ingredient) | — | zuplex.co.za, refinednaturals.co.za, shariqueskin.co.za |
| does tremella grow in south africa | I | web: funguys.co.za "Mushrooms found in South Africa" lists Tremella fuciformis | — | funguys.co.za |
| tremella dosage | I | UNVERIFIED | — | UNVERIFIED |

**Transactional (5)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| tremella mushroom south africa | T | web | — | faithful-to-nature.co.za, antioxi.co.za, zuplex.co.za |
| tremella mushroom supplement south africa | T | ZA SERP | Product grid | faithful-to-nature.co.za, refinednaturals.co.za, superfoods.co.za |
| tremella tincture | T | No SA tincture seen ranking — **gap** | — | UNVERIFIED |
| tremella powder / capsules south africa | T | ZA SERP Takealot PLID95684595 Soaring Free Tremella Powder 70g | Marketplace | takealot.com, superfoods.co.za |
| tremella takealot | N | as above | — | takealot.com |

### 2.7 Sceletium tortuosum / Kanna (`/pages/species-sceletium`, PDP 2)

**Informational (10)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| what is sceletium / what is kanna | I | web: Wikipedia Kanna; herbgarden.co.za "SCELETIUM, KOUGOED, KANNA"; PMC "A Chewable Cure" | Knowledge panel likely | wikipedia.org, herbgarden.co.za, pmc.ncbi.nlm.nih.gov |
| kanna benefits / sceletium benefits | I | web: selfhacked, drugs.com, rxlist | — | selfhacked.com, drugs.com, rxlist.com |
| kanna side effects | I | web: opss.org, cheefbotanicals | — | opss.org, selfhacked.com, cheefbotanicals.us.com |
| kanna dosage (Zembrin 25–50 mg) | I | web: drugs.com, selfhacked | — | drugs.com, selfhacked.com |
| is kanna legal in south africa | I | web: erowid ("uncontrolled… subject to Medicines Control if sold as medicine"); ZA SERP F2N ingredient page: "Sceletium without a permit is illegal under South Africa's Biodiversity Act" (harvesting/permit angle) | — | erowid.org, faithful-to-nature.co.za, kaempathogenics.com |
| kanna and antidepressants (SSRI interaction) | I | web snippets warn re serotonin + SSRIs | — | selfhacked.com, opss.org |
| kanna vs ashwagandha | I | UNVERIFIED | — | UNVERIFIED |
| fermented vs unfermented kanna | I | web: eBay/Etsy listings "Fermented or Unfermented" — strong sub-intent | — | UNVERIFIED |
| is kanna "nature's MDMA" | I | ZA SERP pos 3 https://www.verywellmind.com/news-is-kanna-really-natures-mdma-heres-what-you-need-to-know-5425954 | News | verywellmind.com |
| khoisan / kougoed history | I | herbgarden.co.za, abs-biotrade.info | — | herbgarden.co.za, abs-biotrade.info |

**Transactional (7)**

| Query | Intent | Evidence | SERP features | Top 3 seen |
|---|---|---|---|---|
| sceletium tincture south africa | T | ZA SERP | Product grid | faithful-to-nature.co.za (Aether), thehealthfoodemporium.co.za (Willow Wellness), fempreneurs.co.za |
| sceletium tincture takealot | N | ZA SERP pos 7 https://www.takealot.com/sceletium-tincture-mood-stress-support/PLID96834255 | Marketplace | takealot.com |
| sceletium drops (Dr Boxall's) | T/N | ZA SERP pos 4 wellnesswarehouse.com Dr Boxall's Sceletium Tincture Drops 20ml | Retail | wellnesswarehouse.com |
| kanna south africa buy | T | ZA SERP | — | faithful-to-nature.co.za, herbgarden.co.za, kanna.co.za |
| kanna tincture | T | ZA SERP dominated by Etsy/Amazon/NL — **SA gap** | — | etsy.com, amazon.com, verywellmind.com |
| sceletium tortuosum buy kanna | T | web | — | ebay.com, etsy.com, seedsforafrica.co.za |
| kanna extract / kanna capsules south africa | T | ZA SERP superfoods.co.za Kanna caps; integrow.co.za 150 mg caps; ultrakanna.co.za | — | superfoods.co.za, integrow.co.za, ultrakanna.co.za |

---

## 3. Brand, blend and category keywords

| Query | Intent | Evidence | Top 3 seen (ZA SERP unless noted) | Target URL |
|---|---|---|---|---|
| mushroom tincture south africa | T | ZA SERP | earthshine.co.za, harmonicmycology.com, growfolk.co.za (Takealot pos 4) | `/collections/all` |
| medicinal mushrooms south africa | I/T | ZA SERP | mushroomguru.co.za, freshearth.co.za, journals.co.za | `/` |
| functional mushrooms south africa | I/T | ZA SERP | faithful-to-nature.co.za, bioshroom.co.za, mushroomguru.co.za | `/pages/mushroom-finder` |
| mushroom drops south africa | T | ZA SERP — weak SERP (Makro BIYODE, Vida Wellness) — **gap** | makro.co.za, store.vidawellness.co.za, mushroomguru.co.za | `/collections/all` (secondary phrase) |
| mushroom extract / liquid mushroom extract south africa | T | competitor slugs (harmonicmycology "liquid-extracts", Aether "extract") | UNVERIFIED | `/collections/all` |
| mushroom blend / 6 mushroom blend tincture | T | web: only US brands (northspore, uphoric urth) — **no SA result** | northspore.com, amazon.com | `/products/elixir-of-life-6-mushroom-blend-50ml` |
| mushroom blend for pets / mushroom tincture for dogs south africa | T | ZA SERP: only powders (Carniraw, DoggyChef) and a 15ml pet reishi (growfolk) — **no SA pet tincture ranking** | doggychef.co.za, carniraw.co.za, vcahospitals.com | `/products/elixir-for-pets-tincture-30ml` |
| mushroom supplement for dogs south africa | I/T | ZA SERP | carniraw.co.za, doggychef.co.za, amazon.co.za | `/blogs/learn/mushrooms-for-dogs-south-africa` → PDP |
| mushroom coffee south africa | T (adjacent) | web: F2N Four Sigmatic, mindfulroast.co.za, vivolife.co.za | faithful-to-nature.co.za, mindfulroast.co.za, king-online.co.za | Not targeted (no product) — mention in Learn article only |
| best mushroom supplement south africa | I | competitor: charava.co.za "2026 South African Guide" | charava.co.za, onelife.co.za | `/pages/mushroom-finder` |
| mushroom tincture vs capsules | I | web: grocycle.com, antioxi-supplements.com | grocycle.com, naturelion.ca, antioxi-supplements.com | `/blogs/learn/tincture-vs-capsules-vs-powder` |
| dual extract mushroom tincture | I | competitor: earthshine, mycoalchemy "1:3 dual-extract", sporeguru "dual extract" | UNVERIFIED | `/blogs/learn/what-is-a-dual-extract-tincture` |
| just mushrooms / just mushrooms south africa | N | ZA SERP brand results; note UK namesake justmushrooms.co.uk/collections/tinctures competes for brand query | justmushrooms.co.za, justmushrooms.co.uk | `/` |
| menopause mushroom / reishi menopause | I/T | UNVERIFIED | — | `/products/menopause-50ml` (claim-free framing) |
| gut health mushrooms | I | UNVERIFIED | — | `/blogs/learn/mushrooms-and-gut-health` → `/products/extreme-gut-fix` |
| mushrooms for skin / tremella skin | I/T | ZA SERP docmarty, superfoods | docmarty.com, superfoods.co.za | `/products/myco-radiance-skin-perfection` |

---

## 4. Keyword-to-URL map (one target per cluster — no cannibalisation)

Rules: species **head + informational** clusters → `/pages/species-<slug>`; **product-format + buy** clusters → single PDP (30ml single as canonical PDP; combos and 50ml get long-tail "combo"/"50ml" modifiers only); **category** → `/collections/all`; **decision/comparison** → `/pages/mushroom-finder`; **questions** → `/blogs/learn/<article>` which link down to species page and PDP. Blog posts never target a head term already owned by a species page.

| Cluster (representative queries) | Target URL | Supporting URLs (link, don't target) |
|---|---|---|
| medicinal mushrooms south africa; just mushrooms; mushroom tinctures made in SA | `/` | all species pages, `/collections/all` |
| mushroom tincture south africa; mushroom drops south africa; mushroom extract south africa; buy mushroom tincture online | `/collections/all` | PDPs |
| single-species tinctures (browse) | `/collections/single-mushroom-tinctures` (create) | 7 single PDPs |
| blends / functional mushroom blend south africa | `/collections/mushroom-blends` (create) | blend PDPs |
| mushroom tincture for pets / dogs south africa | `/collections/pets` (create) | pet PDPs |
| what is lion's mane; lion's mane benefits; side effects; south africa; is it legal in SA; dosage | `/pages/species-lions-mane` | PDP 16, Learn articles |
| buy lion's mane south africa; lion's mane tincture; lion's mane tincture south africa / cape town / johannesburg; lion's mane price | `/products/lions-mane-mushroom-tincture-30ml` | 50ml PDP, combo PDP, species page |
| lion's mane tincture 50ml; large / value size | `/products/lions-mane-mushroom-tincture-50ml` | 30ml PDP |
| lion's mane combo / bundle | `/products/lions-mane-mushroom-elixir-combo-50ml-30ml` | 30ml PDP |
| what is reishi; reishi benefits; reishi for sleep; reishi south africa; does reishi grow in SA | `/pages/species-reishi` | PDP 12 |
| reishi tincture south africa; buy reishi south africa; reishi drops | `/products/reishi-mushroom-tincture-30ml` | combo, `relax-no-stress-50ml` |
| reishi combo | `/products/reishi-mushroom-elixir-combo-50ml-30ml` | — |
| chaga what is / benefits / tea vs tincture / south africa / side effects | `/pages/species-chaga` | PDP 21 |
| chaga tincture south africa; chaga south africa buy; chaga extract | `/products/chaga-mushroom-tincture-30ml` | combo |
| chaga combo | `/products/chaga-mushroom-elixir-combo-50ml-30ml` | — |
| cordyceps what is / benefits / energy / athletes / militaris vs sinensis / south africa | `/pages/species-cordyceps` | PDP 19, `the-workaholic` |
| cordyceps tincture south africa; buy cordyceps south africa | `/products/cordyceps-mushroom-tincture-30ml` | combo |
| cordyceps combo | `/products/cordyceps-mushroom-elixir-combo-50ml-30ml` | — |
| turkey tail what is / benefits / for dogs (info) / south africa | `/pages/species-turkey-tail` | PDP 7, pet PDP |
| turkey tail tincture south africa; buy turkey tail | `/products/turkey-tail-mushroom-tincture-30ml` | combo |
| turkey tail combo | `/products/turkey-tail-mushroom-elixir-combo-50ml-30ml` | — |
| tremella what is / snow mushroom / skin / vs hyaluronic acid / south africa | `/pages/species-tremella` | PDP 9, `myco-radiance-skin-perfection` |
| tremella tincture; tremella supplement south africa | `/products/tremella-mushroom-tincture-30ml` | combo |
| tremella combo | `/products/tremella-mushroom-elixir-combo-50ml-30ml` | — |
| sceletium / kanna what is; benefits; side effects; legal in SA; fermented vs unfermented; kougoed history | `/pages/species-sceletium` | PDP 2 |
| sceletium tincture south africa; kanna tincture; kanna drops; buy kanna south africa | `/products/sceletium-tortuosum-the-happy-place-50ml` | species page |
| 6 mushroom blend tincture; mushroom blend south africa; daily mushroom blend | `/products/elixir-of-life-6-mushroom-blend-50ml` | `/collections/mushroom-blends` |
| lion's mane and cordyceps blend; focus + energy mushroom tincture | `/products/the-workaholic` | species pages LM, Cordyceps |
| turkey tail lion's mane cordyceps blend; everyday mushroom blend | `/products/new-general-maintenance-50ml` | — |
| reishi calm blend; relaxing mushroom tincture | `/products/relax-no-stress-50ml` | species reishi |
| mushrooms for menopause (claim-free "for women 45+") | `/products/menopause-50ml` | Learn article |
| mushrooms for gut / digestion blend | `/products/extreme-gut-fix` | Learn article |
| tremella skin blend; beauty mushroom tincture | `/products/myco-radiance-skin-perfection` | species tremella |
| mushroom tincture for dogs south africa; pet mushroom tincture | `/products/elixir-for-pets-tincture-30ml` | `/collections/pets` |
| pet mushroom combo | `/products/pet-elixer-of-life-combo-50ml-30ml` | pet 30ml PDP |
| which mushroom should I take; lion's mane vs reishi vs cordyceps; best mushroom supplement south africa | `/pages/mushroom-finder` | species pages |
| all "how / why / can I" questions | `/blogs/learn/<article>` (see §6) | species pages, PDPs |

---

## 5. On-page metadata proposals

All titles ≤60 chars, descriptions ≤155 chars, no disease/treatment claims. "SA" is used deliberately in titles where "South Africa" would overflow. Internal-link targets are listed as three paths each.

### 5.1 Species pages (`/pages/species-<slug>`)

| Page | SEO title | Meta description | H1 | Internal links |
|---|---|---|---|---|
| species-lions-mane | Lion's Mane Mushroom in South Africa: Guide & Tincture | What lion's mane is, how it's traditionally used, dosage of a dual-extract tincture, legality in SA and where to buy locally made drops. | Lion's Mane (Hericium erinaceus) — the South African guide | `/products/lions-mane-mushroom-tincture-30ml`, `/blogs/learn/is-lions-mane-legal-in-south-africa`, `/pages/mushroom-finder` |
| species-reishi | Reishi Mushroom in South Africa: Guide & Tincture | Reishi (Ganoderma) explained for SA readers: traditional evening use, dual extraction, how to take drops, and a locally made reishi tincture. | Reishi (Ganoderma lucidum) — the South African guide | `/products/reishi-mushroom-tincture-30ml`, `/products/relax-no-stress-50ml`, `/blogs/learn/how-to-take-a-mushroom-tincture` |
| species-chaga | Chaga Mushroom in South Africa: Guide & Tincture | Where chaga comes from, tea vs tincture, what "dual extract" means and how to choose a chaga tincture in South Africa. | Chaga (Inonotus obliquus) — the South African guide | `/products/chaga-mushroom-tincture-30ml`, `/blogs/learn/chaga-tea-vs-tincture`, `/pages/mushroom-finder` |
| species-cordyceps | Cordyceps Mushroom in South Africa: Guide & Tincture | Cordyceps militaris explained: militaris vs sinensis, how athletes use it, tincture dosage and a South African-made cordyceps tincture. | Cordyceps (Cordyceps militaris) — the South African guide | `/products/cordyceps-mushroom-tincture-30ml`, `/products/the-workaholic`, `/blogs/learn/cordyceps-militaris-vs-sinensis` |
| species-turkey-tail | Turkey Tail Mushroom in South Africa: Guide & Tincture | Turkey tail (Trametes versicolor) for people and pets in SA: what it is, PSK/PSP polysaccharides, dosage and a locally made tincture. | Turkey Tail (Trametes versicolor) — the South African guide | `/products/turkey-tail-mushroom-tincture-30ml`, `/products/elixir-for-pets-tincture-30ml`, `/blogs/learn/mushrooms-for-dogs-south-africa` |
| species-tremella | Tremella (Snow Mushroom) in South Africa: Guide | Tremella fuciformis, the "beauty mushroom": what it is, how it compares to hyaluronic acid, and a South African tremella tincture. | Tremella (snow mushroom) — the South African guide | `/products/tremella-mushroom-tincture-30ml`, `/products/myco-radiance-skin-perfection`, `/blogs/learn/tremella-vs-hyaluronic-acid` |
| species-sceletium | Sceletium (Kanna) in South Africa: Guide & Tincture | Sceletium tortuosum, SA's indigenous kanna: history, fermented vs unfermented, legality, dosage and a locally made kanna tincture. | Sceletium tortuosum (Kanna) — the South African guide | `/products/sceletium-tortuosum-the-happy-place-50ml`, `/blogs/learn/is-kanna-legal-in-south-africa`, `/pages/mushroom-finder` |

### 5.2 Product pages (23)

| Handle | SEO title | Meta description | H1 | Internal links |
|---|---|---|---|---|
| lions-mane-mushroom-tincture-30ml | Lion's Mane Tincture 30ml | Dual Extract | Just Mushrooms | Buy lion's mane tincture in South Africa. Dual-extracted from 100% fruiting body, made in-house. 30ml dropper, nationwide delivery. | Lion's Mane Mushroom Tincture (30ml) | `/pages/species-lions-mane`, `/products/lions-mane-mushroom-tincture-50ml`, `/pages/mushroom-finder` |
| lions-mane-mushroom-tincture-50ml | Lion's Mane Tincture 50ml | Dual Extract | Just Mushrooms | Our larger 50ml lion's mane tincture: dual-extracted fruiting body, made in South Africa. Better value for daily use. Ships nationwide. | Lion's Mane Mushroom Tincture (50ml) | `/products/lions-mane-mushroom-tincture-30ml`, `/pages/species-lions-mane`, `/products/the-workaholic` |
| lions-mane-mushroom-elixir-combo-50ml-30ml | Lion's Mane Tincture Combo 50ml + 30ml | Just Mushrooms | Lion's mane tincture combo: 50ml for home plus a 30ml travel bottle. Dual-extracted, made in South Africa. Save on the bundle. | Lion's Mane Elixir Combo (50ml + 30ml) | `/products/lions-mane-mushroom-tincture-30ml`, `/pages/species-lions-mane`, `/collections/all` |
| reishi-mushroom-tincture-30ml | Reishi Tincture 30ml | Dual Extract | Just Mushrooms SA | Buy reishi mushroom tincture in South Africa. Dual-extracted Ganoderma fruiting body, 30ml dropper, made in-house. Delivery nationwide. | Reishi Mushroom Tincture (30ml) | `/pages/species-reishi`, `/products/relax-no-stress-50ml`, `/products/reishi-mushroom-elixir-combo-50ml-30ml` |
| reishi-mushroom-elixir-combo-50ml-30ml | Reishi Tincture Combo 50ml + 30ml | Just Mushrooms | Reishi tincture bundle: 50ml plus 30ml dropper bottles, dual-extracted and made in South Africa. Save when you buy the combo. | Reishi Elixir Combo (50ml + 30ml) | `/products/reishi-mushroom-tincture-30ml`, `/pages/species-reishi`, `/collections/all` |
| chaga-mushroom-tincture-30ml | Chaga Tincture 30ml | Dual Extract | Just Mushrooms SA | Buy chaga mushroom tincture in South Africa. Dual-extracted (water + alcohol) for a full-spectrum chaga extract. 30ml dropper. | Chaga Mushroom Tincture (30ml) | `/pages/species-chaga`, `/blogs/learn/chaga-tea-vs-tincture`, `/products/chaga-mushroom-elixir-combo-50ml-30ml` |
| chaga-mushroom-elixir-combo-50ml-30ml | Chaga Tincture Combo 50ml + 30ml | Just Mushrooms | Chaga tincture bundle: 50ml and 30ml dual-extract bottles, made in South Africa. Better value than buying separately. | Chaga Elixir Combo (50ml + 30ml) | `/products/chaga-mushroom-tincture-30ml`, `/pages/species-chaga`, `/collections/all` |
| cordyceps-mushroom-tincture-30ml | Cordyceps Tincture 30ml | Dual Extract | Just Mushrooms | Buy cordyceps militaris tincture in South Africa. Dual-extracted fruiting body, 30ml dropper, made in-house. Nationwide delivery. | Cordyceps Mushroom Tincture (30ml) | `/pages/species-cordyceps`, `/products/the-workaholic`, `/products/cordyceps-mushroom-elixir-combo-50ml-30ml` |
| cordyceps-mushroom-elixir-combo-50ml-30ml | Cordyceps Tincture Combo 50ml + 30ml | Just Mushrooms | Cordyceps tincture bundle: 50ml plus 30ml dual-extract bottles, made in South Africa. Save on the combo. | Cordyceps Elixir Combo (50ml + 30ml) | `/products/cordyceps-mushroom-tincture-30ml`, `/pages/species-cordyceps`, `/collections/all` |
| turkey-tail-mushroom-tincture-30ml | Turkey Tail Tincture 30ml | Dual Extract | Just Mushrooms | Buy turkey tail mushroom tincture in South Africa. Dual-extracted Trametes versicolor fruiting body, 30ml dropper, made in-house. | Turkey Tail Mushroom Tincture (30ml) | `/pages/species-turkey-tail`, `/products/elixir-for-pets-tincture-30ml`, `/products/turkey-tail-mushroom-elixir-combo-50ml-30ml` |
| turkey-tail-mushroom-elixir-combo-50ml-30ml | Turkey Tail Tincture Combo 50ml + 30ml | Just Mushrooms | Turkey tail tincture bundle: 50ml and 30ml dual-extract bottles made in South Africa. Better value for daily use. | Turkey Tail Elixir Combo (50ml + 30ml) | `/products/turkey-tail-mushroom-tincture-30ml`, `/pages/species-turkey-tail`, `/collections/all` |
| tremella-mushroom-tincture-30ml | Tremella Tincture 30ml | Snow Mushroom | Just Mushrooms | Buy tremella (snow mushroom) tincture in South Africa. Dual-extracted fruiting body, 30ml dropper, made in-house. Ships nationwide. | Tremella Mushroom Tincture (30ml) | `/pages/species-tremella`, `/products/myco-radiance-skin-perfection`, `/products/tremella-mushroom-elixir-combo-50ml-30ml` |
| tremella-mushroom-elixir-combo-50ml-30ml | Tremella Tincture Combo 50ml + 30ml | Just Mushrooms | Tremella tincture bundle: 50ml plus 30ml bottles, dual-extracted snow mushroom made in South Africa. Save on the combo. | Tremella Elixir Combo (50ml + 30ml) | `/products/tremella-mushroom-tincture-30ml`, `/pages/species-tremella`, `/collections/all` |
| sceletium-tortuosum-the-happy-place-50ml | Sceletium (Kanna) Tincture 50ml | The Happy Place | Buy sceletium tortuosum tincture in South Africa. "The Happy Place" is a 50ml kanna extract made in-house from SA-grown plant. | The Happy Place — Sceletium tortuosum Tincture (50ml) | `/pages/species-sceletium`, `/blogs/learn/is-kanna-legal-in-south-africa`, `/pages/mushroom-finder` |
| elixir-of-life-6-mushroom-blend-50ml | Elixir of Life 6-Mushroom Blend Tincture 50ml | SA | Six functional mushrooms in one dual-extract tincture, made in South Africa. Lion's mane, reishi, chaga, cordyceps, turkey tail, tremella. | Elixir of Life — 6-Mushroom Blend (50ml) | `/collections/mushroom-blends`, `/pages/mushroom-finder`, `/pages/species-lions-mane` |
| the-workaholic | The Workaholic: Lion's Mane + Cordyceps Tincture 50ml | A 50/50 lion's mane and cordyceps dual-extract tincture for busy days. Made in South Africa, 50ml dropper, nationwide delivery. | The Workaholic — Lion's Mane & Cordyceps Blend (50ml) | `/pages/species-lions-mane`, `/pages/species-cordyceps`, `/products/new-general-maintenance-50ml` |
| new-general-maintenance-50ml | General Maintenance Mushroom Blend 50ml | Just Mushrooms | Everyday blend of turkey tail, lion's mane and cordyceps in one dual-extract tincture. Made in South Africa, 50ml dropper. | General Maintenance — Turkey Tail, Lion's Mane & Cordyceps (50ml) | `/collections/mushroom-blends`, `/products/elixir-of-life-6-mushroom-blend-50ml`, `/pages/mushroom-finder` |
| relax-no-stress-50ml | Relax No Stress Reishi Blend Tincture 50ml | Just Mushrooms | An evening mushroom blend led by reishi, dual-extracted and made in South Africa. 50ml dropper bottle, delivered nationwide. | Relax No Stress — Reishi-led Blend (50ml) | `/pages/species-reishi`, `/products/reishi-mushroom-tincture-30ml`, `/pages/mushroom-finder` |
| menopause-50ml | Meno'pause' Mushroom Blend Tincture 50ml | Just Mushrooms | A functional mushroom blend formulated for women in midlife. Dual-extracted, made in South Africa, 50ml dropper. Read the ingredients. | Meno'pause' — Mushroom Blend for Midlife (50ml) | `/blogs/learn/functional-mushrooms-for-women-over-40`, `/pages/species-reishi`, `/collections/mushroom-blends` |
| extreme-gut-fix | Extreme Gut Fix Mushroom Blend Tincture 50ml | SA | Turkey tail-led functional mushroom blend for everyday digestive wellness. Dual-extracted, made in South Africa, 50ml dropper. | Extreme Gut Fix — Mushroom Blend (50ml) | `/blogs/learn/mushrooms-and-gut-health`, `/pages/species-turkey-tail`, `/collections/mushroom-blends` |
| myco-radiance-skin-perfection | Myco Radiance Tremella Skin Blend Tincture | Just Mushrooms | Tremella-led "beauty mushroom" blend taken as drops. Dual-extracted, made in South Africa. See ingredients and how to take it. | Myco Radiance — Tremella Skin Blend | `/pages/species-tremella`, `/blogs/learn/tremella-vs-hyaluronic-acid`, `/collections/mushroom-blends` |
| elixir-for-pets-tincture-30ml | Mushroom Tincture for Dogs & Cats 30ml | Just Mushrooms | Functional mushroom tincture for pets, made in South Africa. Turkey tail-led blend, dosed by weight, 30ml dropper. Vet-friendly guide. | Elixir for Pets — Mushroom Tincture for Dogs & Cats (30ml) | `/collections/pets`, `/blogs/learn/mushrooms-for-dogs-south-africa`, `/pages/species-turkey-tail` |
| pet-elixer-of-life-combo-50ml-30ml | Pet Mushroom Tincture Combo 50ml + 30ml | Just Mushrooms | Pet mushroom tincture bundle: 50ml plus 30ml bottles for multi-pet homes. Made in South Africa, dosed by weight. | Pet Elixir of Life Combo (50ml + 30ml) | `/products/elixir-for-pets-tincture-30ml`, `/collections/pets`, `/blogs/learn/mushrooms-for-dogs-south-africa` |

Hub pages: `/` → title "Just Mushrooms | Medicinal Mushroom Tinctures Made in SA"; `/collections/all` → "Mushroom Tinctures South Africa | Shop All | Just Mushrooms"; `/pages/mushroom-finder` → "Which Mushroom Should I Take? SA Mushroom Finder".

---

## 6. Learn / blog article briefs (12) — `/blogs/learn/<handle>`

No medical claims; each article states "traditionally used" / "people take it for" framing, links up to one species page and down to one PDP, and carries FAQ schema for the literal question.

1. **is-lions-mane-legal-in-south-africa** — *Is Lion's Mane Legal in South Africa? (Yes — here's why people ask)*. Target: "is lion's mane legal in south africa". Evidence: onelife.co.za ranks #1 (ZA SERP) with a one-line answer; psilocybin-law results sit alongside, so the confusion is the story. Outline: short yes; lion's mane ≠ psilocybin (Schindlers piece on psilocybin status); it is a food-grade culinary mushroom sold at Dis-Chem/Clicks/Woolworths (Motherbud fresh); SAHPRA complementary-medicine context in plain language; how to spot a legit SA product. Links: `/pages/species-lions-mane`, `/products/lions-mane-mushroom-tincture-30ml`, article 4.
2. **how-to-take-a-mushroom-tincture** — *How to Take a Mushroom Tincture: Drops, Timing, Sublingual vs in Coffee*. Target: "lion's mane tincture dosage how many drops" / "how to take reishi tincture". Outline: what 1 ml looks like in a dropper; label-first dosing; morning (lion's mane, cordyceps) vs evening (reishi); in water, coffee, tea; storage; alcohol content and alcohol-free alternatives. Links: `/collections/all`, `/pages/species-reishi`, `/pages/mushroom-finder`.
3. **tincture-vs-capsules-vs-powder** — *Mushroom Tincture vs Capsules vs Powder: Which Format Suits You?*. Target: "mushroom tincture vs capsules". Evidence: no SA site ranks; grocycle/naturelion/antioxi do. Outline: format comparison, extraction quality matters more than format, cost per serving in Rands vs Clicks/Dis-Chem capsules (observed R199–R356), consistency beats potency. Links: `/collections/all`, `/products/lions-mane-mushroom-tincture-30ml`, article 4.
4. **what-is-a-dual-extract-tincture** — *What "Dual Extract" and "100% Fruiting Body" Actually Mean*. Target: "dual extract mushroom tincture", "fruiting body vs mycelium". Evidence: mycoalchemy, sporeguru, earthshine all lead with "dual extract" in titles. Outline: water-soluble beta-glucans vs alcohol-soluble triterpenes; fruiting body vs grain-grown mycelium; how Just Mushrooms makes its tinctures in-house; reading a label. Links: `/`, `/pages/species-chaga`, `/products/elixir-of-life-6-mushroom-blend-50ml`.
5. **lions-mane-vs-reishi-vs-cordyceps** — *Lion's Mane vs Reishi vs Cordyceps: Which One Is for You?*. Target: same. Evidence: only UK/US blogs rank. Outline: daytime vs evening mushrooms, traditional use of each, stacking (The Workaholic as example), a decision table that mirrors the Mushroom Finder. Links: `/pages/mushroom-finder`, `/products/the-workaholic`, three species pages.
6. **chaga-tea-vs-tincture** — *Chaga Tea vs Chaga Tincture: What's the Difference?*. Target: "chaga tea vs tincture", "chaga tea south africa". Evidence: birchboys/giddyyoyo rank; tloutea sells Chaga Chai in SA. Outline: water vs alcohol extraction, oxalate note (BC CDC guidance on dried material), where chaga actually grows (birch, boreal — versus "wild-harvested in SA" claims seen in SA SERPs), how to choose. Links: `/pages/species-chaga`, `/products/chaga-mushroom-tincture-30ml`, article 4.
7. **cordyceps-militaris-vs-sinensis** — *Cordyceps Militaris vs Sinensis: Why SA Tinctures Use Militaris*. Target: "cordyceps militaris vs sinensis". Evidence: SA products (Harmonic Mycology, amazon.co.za) specify militaris; Earthshine grows it in the Western Cape. Outline: what each is, cultivation, cordycepin, why sinensis is rare/expensive, how to read a label. Links: `/pages/species-cordyceps`, `/products/cordyceps-mushroom-tincture-30ml`, `/products/the-workaholic`.
8. **mushrooms-for-dogs-south-africa** — *Functional Mushrooms for Dogs & Cats in South Africa: A Practical Guide*. Target: "mushroom supplement for dogs south africa", "turkey tail for dogs south africa", "mushroom tincture for dogs south africa". Evidence: ZA SERP shows only powders (Carniraw, DoggyChef) — no SA tincture. Outline: which species are commonly given to pets, weight-based dosing as printed on our label, talk to your vet, tincture vs powder for fussy eaters, never wild mushrooms. Links: `/products/elixir-for-pets-tincture-30ml`, `/collections/pets`, `/pages/species-turkey-tail`.
9. **is-kanna-legal-in-south-africa** — *Is Kanna (Sceletium) Legal in South Africa? Permits, Cultivation and Buying Safely*. Target: "is kanna legal in south africa". Evidence: erowid + F2N ingredient page (Biodiversity Act permit note) rank. Outline: unscheduled plant; wild harvesting needs permits (Biodiversity Act) so buy cultivated; SAHPRA if sold as medicine; interaction caution with SSRIs (no claims, just "speak to your doctor"). Links: `/pages/species-sceletium`, `/products/sceletium-tortuosum-the-happy-place-50ml`, article 10.
10. **fermented-vs-unfermented-kanna** — *Fermented vs Unfermented Kanna: What Kougoed Tradition Tells Us*. Target: "fermented kanna", "kougoed". Evidence: eBay/Etsy listings split on this; herbgarden.co.za covers history. Outline: Khoi and San tradition, what fermentation is said to change, how tinctures are made from each, why we chose ours. Links: `/pages/species-sceletium`, PDP 2, article 9.
11. **tremella-vs-hyaluronic-acid** — *Tremella vs Hyaluronic Acid: The "Beauty Mushroom" Explained*. Target: "tremella vs hyaluronic acid", "tremella skin benefits south africa". Evidence: docmarty.com SA blog ranks pos 5; superfoods.co.za "vegan collagen". Outline: polysaccharide water-binding, topical (Zuplex cosmetic ingredient) vs oral, what the research does and doesn't show, how to take drops. Links: `/pages/species-tremella`, `/products/myco-radiance-skin-perfection`, `/products/tremella-mushroom-tincture-30ml`.
12. **where-to-buy-medicinal-mushrooms-south-africa** — *Where to Buy Medicinal Mushrooms in South Africa (and How to Compare Them)*. Target: "medicinal mushrooms south africa", "best mushroom supplement south africa", "lion's mane price south africa". Evidence: charava/onelife "SA guide" articles rank; pricecheck ranks for price. Outline: retail (Dis-Chem, Clicks, Wellness Warehouse, Faithful to Nature, Takealot) vs direct-from-maker; what a fair price per ml is in Rands (observed R197–R400 per 50ml tincture); questions to ask (fruiting body? dual extract? made where?); delivery times to JHB/CPT/DBN/PTA. Links: `/collections/all`, `/pages/mushroom-finder`, article 4.

Also recommended (secondary): *functional-mushrooms-for-women-over-40* (supports `menopause-50ml`, claim-free) and *mushrooms-and-gut-health* (supports `extreme-gut-fix`) — both UNVERIFIED demand; write after the 12 above.

---

## 7. Technical notes (Shopify, en-ZA)

**URL constraints.** Shopify fixes the prefixes: `/products/<handle>`, `/collections/<handle>`, `/pages/<handle>`, `/blogs/<blog-handle>/<article-handle>`. The blog handle must be `learn` (create a blog titled "Learn"). Species pages live at `/pages/species-<slug>` as requested; keep slugs to `lions-mane`, `reishi`, `chaga`, `cordyceps`, `turkey-tail`, `tremella`, `sceletium`. Handles cannot be nested (`/pages/species/lions-mane` is not possible). Do not rename existing product handles (e.g. `pet-elixer-of-life-combo-50ml-30ml`, `new-general-maintenance-50ml` with its "new-" prefix) without a redirect — Shopify can auto-create the 301 when you tick "create a URL redirect", but external links/marketplace listings (SimpleSeed) point at current handles, so prefer keeping them.

**Canonicals.** Shopify emits `<link rel="canonical">` pointing `/collections/<x>/products/<y>` at `/products/<y>` by default (`canonical_url` in theme.liquid). Verify the theme still uses `{{ canonical_url }}` and that collection-scoped product links in the theme (product cards) use `{{ product.url | within: collection }}` only if you want collection breadcrumbs; otherwise use `{{ product.url }}` so internal links point at the canonical from the start. Variant URLs (`?variant=`) also canonicalise to the base product. Check `/collections/all` and `/collections/frontpage` are not both indexable with near-identical content: keep `/collections/all` as the shop hub and mark `/collections/frontpage` `noindex` via a metafield-driven `<meta name="robots">` in the theme, or simply stop linking to it.

**Sitemap.** `/sitemap.xml` is auto-generated with children `sitemap_products_1.xml`, `sitemap_pages_1.xml`, `sitemap_collections_1.xml`, `sitemap_blogs_1.xml`. Only canonical product URLs appear. Hidden/unpublished products drop out automatically. Submit in Google Search Console (domain property) and Bing Webmaster Tools.

**robots.txt.** Editable via `robots.txt.liquid`. Defaults block `/admin`, `/cart`, `/checkout`, `/search`, `/collections/*+*` (tag-filter dupes), `/policies/`. Add nothing else unless you see crawl waste; never block `/collections/*/products/*` (Google needs to crawl to see the canonical).

**hreflang.** Not needed — single market, single language. Set `<html lang="en-ZA">` in theme.liquid. The UK namesake `justmushrooms.co.uk` is a separate entity; do not cross-link or add hreflang.

**Structured data plan per template.**
- `layout/theme.liquid`: `Organization` (name, url, logo, contactPoint with +27 61 548 1969, `areaServed: ZA`, `sameAs` socials) and `WebSite` with `SearchAction`.
- `templates/product`: `Product` with `name`, `image`, `description` (claim-free), `sku`, `brand: Just Mushrooms`, `offers` (`priceCurrency: ZAR`, `price`, `availability`, `url` = canonical), `aggregateRating` only if a reviews app supplies real reviews. Do **not** add `MedicalIndication` or health-claim properties. Add `BreadcrumbList` (Home › Shop › Product).
- `templates/collection`: `CollectionPage` + `ItemList` of product URLs + `BreadcrumbList`.
- `templates/page.species-*`: `Article` (or `WebPage` with `about` = `Thing` for the species, e.g. `Hericium erinaceus`) + `FAQPage` for the on-page FAQ (max ~6 Q&As, answers claim-free) + `BreadcrumbList`.
- `templates/article` (Learn): `Article` (`headline`, `datePublished`, `dateModified`, `author` as `Organization`, `image`) + `FAQPage` where the article is literally a question + `BreadcrumbList`.
- `templates/page.mushroom-finder`: `WebPage` + `ItemList` linking the species pages; no `HowTo`.
- Validate with Rich Results Test; keep JSON-LD in one `<script type="application/ld+json">` per entity, no duplicated `Product` blocks from apps.

**Compliance / claims (affects titles and snippets).** SAHPRA's advertising guideline for medicines and health products forbids miracle/cure language and requires substantiation; SA snippets from the live store currently name asthma, IBS, Crohn's, anxiety and depression. Rewrite PDP descriptions to "traditionally used", "formulated for", "everyday wellness" framing before pushing the metadata in §5 — otherwise Google will keep pulling the claim-bearing body copy into snippets regardless of the meta description.

**Performance / crawl hygiene.** Remove app-injected duplicate `<title>`; ensure one H1 per template; lazy-load images below the fold; compress hero images (WebP); keep `/pages/species-*` in main nav ("Learn › Mushrooms") so they receive internal PageRank; add a "Made in South Africa" trust module with address for local-intent signals (competitors' snippets show physical addresses for Cape Town/PE/Gauteng).

---

## 8. Competitor SERP snapshot — ZA-geotargeted Google, 2026-09-02

Positions are as returned by the ZA-geo search API (organic only; ads, shopping carousels and PAA are not captured by this method). Google redirect wrappers in results were resolved by title where possible.

**1. "lion's mane south africa"**
1. https://www.dischem.co.za/life-style-food-lions-mane-mushroom-100g-366 — Life Style Food Lions Mane Mushroom 100g
2. https://www.faithful-to-nature.co.za/health/medicinal-mushrooms/lions-mane — Buy Lion's Mane - Medicinal Mushrooms - Health Online
3. https://earthshine.co.za/shop/medicinals/afm-lions-mane-tincture-50ml/ — African Forest Medicinals-Lions Mane Tincture 50ml
4. https://primeself.co.za/products/lions-mane-30-beta-glucan-megazyme — Organic Lion's Mane 60 Caps | Brain & Focus
5. https://biogen.co.za/shop/lions-mane-extract-30-vegecaps/ — Lions Mane Extract – 30 Vegecaps

**2. "lion's mane tincture"**
1. https://earthshine.co.za/shop/medicinals/afm-lions-mane-tincture-50ml/ — African Forest Medicinals-Lions Mane Tincture 50ml
2. https://www.healthline.com/nutrition/lions-mane-mushroom — 9 Health Benefits of Lion's Mane Mushroom (Plus Side Effects)
3. https://www.faithful-to-nature.co.za/aether-lions-mane-extract — Buy Aether Lions Mane Extract Online
4. https://www.webmd.com/diet/what-are-the-health-benefits-of-lions-mane-mushrooms — What Are the Health Benefits of Lion's Mane Mushrooms?
5. https://www.takealot.com/lion-s-mane-mushroom-tincture-focus-cognitive-support/PLID96405400 — Lion's Mane Mushroom Tincture | Focus & Cognitive Support

**3. "reishi mushroom south africa"**
1. https://www.faithful-to-nature.co.za/ingredient/reishi — Buy Reishi products at Faithful to Nature
2. https://thehealthfoodemporium.co.za/products/reishi-mushroom-powder — Reishi Mushroom Powder
3. https://earthshine.co.za/shop/medicinals/wild-red-reishi-tincture-50ml/ — African Forest Medicinals - Wild Red Reishi Tincture 50ml
4. https://phytopro.co.za/reishi-medicinal-mushroom/ — Reishi, Magical Medicinal Mushroom
5. https://primeself.co.za/products/reishi-mushroom-30-beta-glucan-megazyme — Organic Reishi 60 Caps | Immune & Mood Balance

**4. "chaga tincture south africa"**
1. https://www.faithful-to-nature.co.za/aether-chaga-extract — Buy Aether Chaga Extract Online
2. https://www.naturespharmacymaboneng.co.za/product/chaga-mushroom-tincture-50mls/ — Chaga mushroom tincture 50mls
3. https://alaskaethnobotany.community.uaf.edu/chaga-tincture/ — Chaga Tincture - Alaska Ethnobotany
4. https://shop.thenewtinsomerset.com/uk/p/3757/chaga-tincture — Chaga Tincture | The Newt in Somerset (UK)
5. https://www.organicchoice.co.za/product/chaga-tincture-aether-apothecary/ — Chaga Tincture (Aether Apothecary) - Organic Choice

**5. "cordyceps south africa"**
1. https://earthshine.co.za/shop/new-products-specials/cordyceps-mushroom-powder-100g/ — Cordyceps Mushroom Powder 100g | SA Grown - Earthshine
2. (Google redirect) — Cordyceps — "Proudly South African, Over 18 Only" (grower/retailer, domain UNVERIFIED)
3. https://www.homegrowers.co.za/product/cordyceps-dehydrated-mushroom-50gram/ — Promo CORDYCEPS MEDICINAL MUSHROOM 50GRAM
4. https://essentialproducts.co.za/product/cordyceps-extract-10-usp-1kg/ — Cordyceps Extract 10% USP – 1KG
5. https://clicks.co.za/evergood_cordyceps-energy-endurance-medicinal-mushrooms-30-vegicaps/p/382294 — Cordyceps Energy Endurance Medicinal Mushrooms 30 VegiCaps

**6. "turkey tail tincture south africa"**
1. (Google redirect) — African Forest Medicinals - Wild Turkey Tail Tincture 50ml (earthshine.co.za per matching title elsewhere)
2. https://www.faithful-to-nature.co.za/african-forest-medicinals-turkey-tail-tincture — Buy African Forest Medicinals Turkey Tail Tincture Online
3. https://hadeco.co.za/collections/mushroom-tincture/products/turkey-tail-mushroom-tincture-wellness-support-15-000mg — Turkey Tail Mushroom Tincture | Wellness Support (dated 30 Apr 2026)
4. https://www.faithful-to-nature.co.za/health/medicinal-mushrooms/other-mushrooms/turkey-tail — Turkey Tail - Medicinal Mushrooms
5. https://growfolk.co.za/product/turkey-tale-mushroom-full-spectrum-extract-tincture/ — Turkey Tale Mushroom Full Spectrum Extract Tincture

**7. "tremella mushroom supplement south africa"**
1. https://www.faithful-to-nature.co.za/soaring-free-tremella-mushroom-capsules — Buy Soaring Free Tremella Mushroom Capsules Online
2. https://refinednaturals.co.za/products/tremella-snow-mushroom-extract — Tremella (Snow Mushroom) Extract
3. https://superfoods.co.za/products/organic-tremella-powder-capsules — Organic Tremella (Powder & Capsules)
4. https://www.zuplex.co.za/snow-mushroom-tremella-fuciformis-cosmetic-ingredient/ — Snow Mushroom Tremella fuciformis cosmetic ingredient
5. https://www.docmarty.com/blogs/news/the-science-of-tremella-south-africas-secret-to-radiant-hydrated-skin — The Science of Tremella: South Africa's Secret to Radiant…

**8. "sceletium tincture south africa"**
1. https://www.faithful-to-nature.co.za/aether-sceletium-extract — Aether Sceletium Extract Tincture
2. https://thehealthfoodemporium.co.za/products/willow-wellness-sceletium-tincture-50ml — Willow Wellness - Sceletium Tincture 50ml
3. https://fempreneurs.co.za/shop/health-beauty/personal-care-products/sceletium-tincture-mood-uplifting/ — Sceletium Tincture
4. https://wellnesswarehouse.com/products/dr-boxall-s-sceletium-tincture-20ml-20ml-00208911870176 — Dr Boxall's Sceletium Tincture Drops
5. https://www.abs-biotrade.info/sceletium-tortuosum/ — Sceletium Tortuosum

**9. "mushroom tincture south africa"**
1. https://earthshine.co.za/shop/medicinals/afm-lions-mane-tincture-50ml/ — African Forest Medicinals-Lions Mane Tincture 50ml
2. https://harmonicmycology.com/ — Harmonic Mycology
3. https://growfolk.co.za/product/lions-mane-mushroom-full-spectrum-extract-tincture/ — Lions Mane Mushroom Full Spectrum Extract Tincture
4. https://www.takealot.com/lion-s-mane-mushroom-tincture-focus-cognitive-support/PLID96405400 — Lion's Mane Mushroom Tincture | Focus & Cognitive Support
5. https://wellnesspantry.co.za/store/lions-mane-mushroom-tincture-50ml — Lion's Mane Mushroom Tincture 50ml - The Wellness Pantry

**10. "medicinal mushrooms south africa"**
1. https://www.mushroomguru.co.za/medicinal-mushrooms.html — Medicinal Mushrooms
2. https://freshearth.co.za/product-category/health-wellness/medicinal-mushrooms-cbd/ — Medicinal Mushrooms & CBD. Archives
3. https://journals.co.za/doi/pdf/10.10520/EJC-1d8749232b — Magical medicinal mushrooms (academic; psilocybin illegal in SA)
4. https://vitagene.co.za/products/medicinal-mushrooms — 60 Capsules - Your Wellbeing Medicinal Mushrooms - VitaGene
5. https://www.faithful-to-nature.co.za/health/medicinal-mushrooms — Buy Medicinal Mushrooms - Health Online

**Supplementary snapshots (top 3):** "mushroom tincture for dogs south africa" → doggychef.co.za, carniraw.co.za, vcahospitals.com (no SA tincture). "mushroom drops south africa" → makro.co.za (BIYODE), store.vidawellness.co.za, mushroomguru.co.za. "is lion's mane legal in south africa" → onelife.co.za, biogen.co.za, ewn.co.za. "lion's mane tincture cape town" → earthshine.co.za, faithful-to-nature.co.za, harmonicmycology.com. "reishi tincture south africa" → earthshine.co.za, naturally-yours.co.za, growfolk.co.za (justmushrooms.co.za ≈ #4). "cordyceps tincture south africa" → faithful-to-nature.co.za, growfolk.co.za, willowwellness.co.za (simpleseed.co.za reseller of Just Mushrooms #4). "kanna tincture" → etsy.com, amazon.com, verywellmind.com (no SA seller). "functional mushrooms south africa" → faithful-to-nature.co.za, bioshroom.co.za, mushroomguru.co.za.

**Competitive read.** Three players own the SA tincture SERPs: **Earthshine (African Forest Medicinals)** with plain "<species> Tincture 50ml" titles and R197–R229 pricing; **Faithful to Nature** as marketplace with category + ingredient pages ("Buy <x> - Medicinal Mushrooms"); and **Grow Folk / Harmonic Mycology** with "Full Spectrum Extract Tincture" titles. Takealot listings with the pattern "<Species> Tincture | <Benefit> Support" now rank organically for tincture terms. Pharmacy chains (Dis-Chem, Clicks) win the broad "<species> south africa" head terms with capsules/food. Gaps with no credible SA ranking page: tremella tincture, kanna/sceletium *tincture* (only Aether/Willow/Dr Boxall's), pet mushroom *tincture*, "mushroom drops", "6 mushroom blend", and every "is it legal in SA"/"vs" informational query except lion's mane.

---

## 9. Ten highest-priority keyword clusters → target URLs

Ranked by (observed transactional demand in ZA SERPs) × (weakness of incumbents) × (fit to an existing product).

| # | Cluster | Target URL | Why now |
|---|---|---|---|
| 1 | lion's mane tincture / lion's mane tincture south africa / cape town / price | `/products/lions-mane-mushroom-tincture-30ml` | Highest observed competition and demand; Earthshine + Takealot rank with thin pages; brand has 30/50ml + combo depth |
| 2 | mushroom tincture south africa / mushroom drops / mushroom extract | `/collections/all` | Category head term; incumbents are single PDPs, no dedicated SA tincture category page ranks |
| 3 | reishi tincture south africa / reishi mushroom south africa | `/products/reishi-mushroom-tincture-30ml` (+ `/pages/species-reishi`) | Brand already ≈#4 for "reishi tincture south africa"; quick win |
| 4 | mushroom tincture for dogs / pets south africa, turkey tail for dogs | `/products/elixir-for-pets-tincture-30ml` (+ `/collections/pets`, Learn art. 8) | No SA pet *tincture* ranks; only powders |
| 5 | sceletium / kanna tincture south africa, is kanna legal in SA | `/products/sceletium-tortuosum-the-happy-place-50ml` (+ `/pages/species-sceletium`, Learn art. 9–10) | Indigenous plant, SA SERP shows thin retailer pages; "kanna tincture" has no SA result |
| 6 | cordyceps tincture south africa | `/products/cordyceps-mushroom-tincture-30ml` | Reseller (SimpleSeed) outranks the brand's own PDP — fix ownership |
| 7 | is lion's mane legal in south africa; lion's mane south africa (info) | `/pages/species-lions-mane` (+ Learn art. 1) | Clear SA-specific question with news tailwind (Daily Maverick, EWN Feb 2026); only OneLife answers it |
| 8 | 6 mushroom blend tincture / mushroom blend south africa | `/products/elixir-of-life-6-mushroom-blend-50ml` (+ `/collections/mushroom-blends`) | Zero SA results; flagship product |
| 9 | turkey tail tincture south africa | `/products/turkey-tail-mushroom-tincture-30ml` | Competitive but fragmented (Hadeco, Bobshop, F2N) — a claim-free, well-structured PDP can enter top 5 |
| 10 | which mushroom should I take / lion's mane vs reishi vs cordyceps / best mushroom supplement SA | `/pages/mushroom-finder` (+ Learn art. 5, 12) | Only UK/US blogs and charava/onelife "SA guide" posts rank; captures pre-purchase intent for all PDPs |

Secondary: chaga tincture SA (`/products/chaga-mushroom-tincture-30ml`), tremella tincture (`/products/tremella-mushroom-tincture-30ml`, no SA incumbent), and the format/education cluster (Learn art. 2–4) that feeds every PDP.

---

## Appendix — sources consulted (all accessed 2026-09-02)

SA retailers/competitors: earthshine.co.za; faithful-to-nature.co.za; growfolk.co.za; harmonicmycology.com; mycoalchemy.co.za; sporeguru.co.za; africanforestmedicinals.com; naturespharmacymaboneng.co.za; goodforus.co.za; wellnesstree.co.za; onelife.co.za; dischem.co.za; clicks.co.za; wellnesswarehouse.com; takealot.com (PLID96405400, PLID96834255, PLID53820551, PLID95684595); primeself.co.za; biogen.co.za; thehealthfoodemporium.co.za; phytopro.co.za; mushroomguru.co.za; charava.co.za; lifexpanded.co.za; botanicumsa.co.za; hadeco.co.za; bobshop.co.za; themushroombox.shop; ecowhizz.co.za; superfoods.co.za; refinednaturals.co.za; zuplex.co.za; docmarty.com; carniraw.co.za; doggychef.co.za; simpleseed.co.za; willowwellness.co.za; homegrowers.co.za; essentialproducts.co.za; spes.co.za; fempreneurs.co.za; naturally-yours.co.za; kanna.co.za; herbgarden.co.za; ultrakanna.co.za; integrow.co.za; makro.co.za; store.vidawellness.co.za; medimushrooms.co.za; welliam.co.za; bioshroom.co.za; vitagene.co.za; freshearth.co.za; linkhillspharmacy.co.za; pricecheck.co.za; mushlove.co.za; taste.co.za; fungitown.co.za; growstone.co.za; antioxi.co.za; mindfulroast.co.za; vivolife.co.za.
SA press/regulatory: dailymaverick.co.za (2023-02-28; 2026-02-10); ewn.co.za (2026-02-13); sahpra.org.za (Complementary Medicines; SAHPGL-INSP-RC-07 advertising guideline; 7.04 Health Supplements guideline); schindlers.co.za (psilocybin status); journals.co.za.
Informational incumbents: healthline.com; webmd.com; examine.com; mskcc.org; pmc.ncbi.nlm.nih.gov; health.clevelandclinic.org; birchboys.com; remeday.com; grocycle.com; futurolabs.co.uk; evopure.co.uk; erowid.org; opss.org; drugs.com; selfhacked.com; verywellmind.com.
Shopify technical: innovatrixinfotech.com (sitemap/robots 2026); truemargin.ai; charle.co.uk; outerboxdesign.com.
