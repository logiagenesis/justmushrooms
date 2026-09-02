# Just Mushrooms — Design Benchmark (Agencies, Reference Sites, UX/CRO Observations, Reference Board)

Prepared: 2026-09-02 · Role: e-commerce UX direction · Target: justmushrooms.co.za (Shopify Dawn → dark organic luxury, macro mushroom photography, electric mycelium linework, editorial science-lab confidence, funky not childish)

Method note: Observations below were gathered by server-side page extraction and search (Nimble) on the date above. Every observation cites the URL that was looked at. Where a claim (an award, a client, a figure) could not be confirmed on-page it is marked **UNVERIFIED**. This document extracts *principles*; it does not license copying any design.

## Contents
- Part A — Ten agencies/studios benchmarked
- Part B — 50+ reference websites (table)
- Part C — 100+ numbered design / CRO / UX observations
- Part D — Reference board (20 URLs, what to screenshot)
- Appendix — Top 12 principles for Just Mushrooms

---

## Part A — Agencies and studios

Selection logic: ten studios whose *current* public work (verified on the URLs cited) is relevant to a premium Shopify DTC supplement store. Award counts are quoted only where they appear on the cited page. Several studios on the original long-list were dropped or merged: Tomorrow and Half Helix merged in 2023 (https://www.prnewswire.com/news-releases/tomorrow-and-half-helix-announce-merger-to-create-largest-independent-partner-serving-shopify-enterprise-brands-301939839.html) and tomorrowagency.com now resolves to domaineworldwide.com, so they are treated under Domaine; We Make Websites' portfolio page returned only a newsletter stub; Eastside Co's /case-studies URL 404'd (portfolio lives at /portfolio); Basic/Dept and Work & Co /work URLs 404'd, so their homepages were used. Resn, Active Theory, Immersive Garden, Hello Monday, Fantasy, Zajno, Unfold, Made Thought, Koto and Pentagram were not extracted in this pass and are **UNVERIFIED** for 2026 Shopify relevance.

### A.1 Locomotive (Montréal) — locomotive.ca
- **Evidence:** Awwwards profile lists 138 works, 1 SOTY, 4 SOTM, 91 SOTD, 131 HM; recent e-commerce SOTDs include Scout Motors (Jan 2025), Wolverine Worldwide (Jun 2026), Mate Libre (Oct 2023), Aupale Vodka (Mar 2026) — https://www.awwwards.com/locomotive/ . Press release confirms Awwwards Agency of the Year seven consecutive years and two Webbys — https://www.prnewswire.com/news-releases/locomotive-crowned-awwwards-agency-of-the-year-for-the-7th-year-in-a-row-and-wins-a-second-webby-award-302559750.html . They maintain the open-source `locomotive-scroll` library, now built on Lenis (https://x.com/LocomotiveMTL).
- **Exceptionally good at:** scroll choreography that stays legible; type-led heroes where the product photograph is the only colour; developer-award-grade performance despite heavy motion.
- **Avoids:** stock imagery; generic Shopify section stacks; cookie-cutter mega-menus.
- **Overuses:** smooth-scroll hijacking (locomotive-scroll/Lenis) and full-bleed video heroes — both cost LCP and can fight `prefers-reduced-motion`.
- **Layout / motion / nav / story / commerce:** editorial grid with asymmetric image pairs; masked text reveals; minimal top bar that becomes a drawer; brand story sequenced *before* the shop entry on consumer sites (Mate Libre, Aupale).
- **Accessibility / performance weaknesses (observable):** scroll-hijack libraries are keyboard-hostile unless carefully configured; their own site loads WebGL on the homepage.
- **Borrow:** one strong typographic idea per page; product photography as the only saturated element; open-source-quality motion discipline.
- **Reject:** scroll-hijacking on a store that must convert on mid-range Android over SA mobile data.

### A.2 Buzzworthy Studio (US) — buzzworthystudio.com
- **Evidence:** Awwwards profile: 14 works, 11 SOTD, 14 HM, budget band $30–50k; Bucks Sauce (Shopify, SOTD Jul 2026 + E-commerce Honors Jun 2026), Helias Oils (Shopify staging domain, SOTD Jan 2020), Hoboken Yogi (SOTD Sep 2021) — https://www.awwwards.com/buzzworthy/ . Note: buzzworthy.studio failed DNS; the live domain is buzzworthystudio.com.
- **Exceptionally good at:** small-catalogue CPG stores (a single sauce, a single oil) made to feel big through personality, sound, and colour blocking; they prove a 3–6 SKU brand can win awards.
- **Avoids:** density; filters; anything resembling a marketplace.
- **Overuses:** custom cursors, page-transition curtains, novelty 404s; audio toggles.
- **Layout / motion / nav / story / commerce:** one-product-per-viewport storytelling; sticky add-to-cart; bold display type at 10–14vw; navigation reduced to Shop / Story / Cart.
- **Weaknesses:** heavy JS bundles for a 4-SKU store; motion-first pages rarely ship a reduced-motion variant.
- **Borrow:** the confidence that a small range is a feature; sticky buy bar; single-species "chapter" pages.
- **Reject:** custom cursors and audio — wrong register for a science-forward supplement.

### A.3 Studio Freight / Darkroom (US + EU) — studiofreight.com, darkroom.engineering
- **Evidence:** Awwwards case study for Repeat (CPG SaaS) documents the method: "every colour has a job", one weight of Mabry Pro, per-section colour with parallax transitions, 3D renders toon-shaded to "feel like 2D", Next.js + Lenis + GSAP + r3f — https://www.awwwards.com/case-study-repeat-by-studio-freight.html . Darkroom's about page lists Shopify and headless e-commerce among services, clients incl. Viture and Cora, and awards/features from Awwwards, CSSDA, FWA (self-reported, **UNVERIFIED** individually) — https://darkroom.engineering/about .
- **Exceptionally good at:** systematic colour and illustration ("make sure illustrations are systematic and thoughtful so they scale"); engineering that keeps 3D light; open-source tooling (Lenis, Satus, Tempus).
- **Avoids:** decorative gradients; more than one type family; shading in illustration.
- **Overuses:** horizontal-scroll sections; dark-mode "party" pages; WebGL where an SVG would do.
- **Borrow:** the "every colour has a job" rule (CTA colour reserved for CTAs); one-weight typographic system with scale doing the work; CMS-configurable hero shapes so the client can vary composition without breaking the system.
- **Reject:** horizontal scroll on collection pages.

### A.4 Instrument (Portland/NY) — instrument.com
- **Evidence:** Work index filterable by brand / marketing / product with a stack-vs-grid display toggle; case studies include Nike Digital Design System, Nike SNKRS, Levi's, Deadstock Coffee (Shopify, listed on Awwwards' Shopify page) — https://www.instrument.com/work and https://www.awwwards.com/websites/shopify/ . Homepage badges claim Webbys, Awwwards, Clio Health shortlist etc. (**UNVERIFIED** individually) — https://www.instrument.com/ .
- **Exceptionally good at:** design systems that outlive campaigns; restraint; clear taxonomy (three tags cover 60 projects).
- **Avoids:** award-bait motion; lowercase novelty; more than two typefaces.
- **Overuses:** very large whitespace and 100vh case-study heroes.
- **Borrow:** the "stack / grid" toggle idea for a Learn hub; tag-based filtering with three tags max; systematic component thinking for Dawn sections.
- **Reject:** enterprise-scale whitespace that pushes price and add-to-cart below the fold on mobile.

### A.5 Domaine (incl. Tomorrow + Half Helix) — domaineworldwide.com
- **Evidence:** Shopify Partners Directory: Platinum Partner; featured work Arhaus, Benchmade (3D customiser, PLP product switcher), Khaite, Laura Mercier, Rothy's, Timex — https://www.shopify.com/partners/directory/partner/meet-domaine . Homepage: "750+ Shopify sites launched", "150+ migrations", "+19–29% average conversion rate increase" (self-reported), "Domaine Acquires Pattern", Domaine Studio for mid-market brands — https://domaineworldwide.com/ . Half Helix built the first Hydrogen storefront (Shopify Supply) — https://www.shopify.com/enterprise/blog/headless-commerce-half-helix .
- **Exceptionally good at:** unglamorous commerce plumbing (BOPIS, ERP, size charts, warranty portals) wrapped in editorial design; luxury beauty PDPs (Creed, Laura Mercier).
- **Avoids:** headless for its own sake — they migrated Rothy's and OneSkin-type brands *back* to Shopify 2.0 themes.
- **Overuses:** feature-chip lists ("Internationalization · Wishlist · Search…") as proof of depth; large multi-region gating.
- **Borrow:** "Hybrid 2.0 theme" philosophy — stay on Liquid, extend with metaobjects and a few custom sections; PLP product switcher (colour/format swap on the card); region-aware pricing done once, properly.
- **Reject:** enterprise stack (Nosto, Yotpo, Gorgias, Loop) on day one — cost and script weight.

### A.6 Swanky (UK/AU/FR) — swankyagency.com
- **Evidence:** Huel case study: subscription on Recharge + Shopify Plus, German expansion store, ongoing CRO; Huel "reached £40m revenue in the first three years… £140m in 2022" (client figures as reported by Swanky) — https://swankyagency.com/portfolio/huel/ . Health & wellness vertical page names Huel, Daysoft, 82°E, Symprove, YuMOVE — https://swankyagency.com/health-wellness-websites-shopify-plus-agency/ . Shopify Platinum Partner (self-stated) — https://swankyagency.com/web-design/ .
- **Exceptionally good at:** subscription UX for consumables (skip/swap/pause), internationalisation, CRO programmes with tracking discipline.
- **Avoids:** visual pyrotechnics — their portfolio is conversion-led, not award-led.
- **Overuses:** gated PDFs and resource marketing; templated case-study structure.
- **Borrow:** treat subscription as the primary purchase path for a 30-day tincture; make "manage subscription" a first-class account page; run CRO as a monthly cadence.
- **Reject:** none critical — but their visual bar is not the one Just Mushrooms should aim at.

### A.7 Barrel (NY) — barrelny.com
- **Evidence:** Work page filterable by vertical (Food & Beverage, Beauty & Skincare, Health & Wellness, Home); supplement/wellness cases include MUSH ("Relaunching MUSH to Support Scalable DTC Growth"), The Nue Co ("Building Credibility and Retention"), Llama Naturals, Relief Factor, BraveFace, Plainspeak, Revision Skincare ("for the Science-First Consumer"), OneSkin (headless → Shopify 2.0) — https://www.barrelny.com/work/all . Publishes "DTC Patterns" research — http://www.dtcpatterns.com/ .
- **Exceptionally good at:** retention architecture (subscription + build-a-bundle, e.g., Once Upon A Farm, Bobo's); credibility framing for science-first supplement brands; migrating headless stores back to Shopify 2.0.
- **Avoids:** bespoke front-ends; they ship on Shopify 2.0 + Rebuy + Recharge + Klaviyo.
- **Overuses:** the same partner stack on every build; promotional lead-gen (free live audit).
- **Borrow:** build-a-bundle for a 5–7 tincture range; "credibility block" pattern (clinical references + expert + guarantee) on PDPs; DTC Patterns as a pattern library.
- **Reject:** app-stack bloat.

### A.8 Basic/Dept (San Diego/NY/Amsterdam) — basicagency.com
- **Evidence:** Homepage cites Patagonia e-commerce, Google Store (lead creative agency), Wilson, KFC, AT&T; claims Webby "Agency of the Year" and Campaign Design/Branding Agency of the Year (links to own blog; **UNVERIFIED** externally) — https://www.basicagency.com/ . Their /work URL 404s (https://www.basicagency.com/work); work lives under /services and /case-studies.
- **Exceptionally good at:** mission-led commerce (Patagonia) where brand story and PLP coexist; drag-scroll featured-engagement rails; accessible-by-default builds (accessiBe layer present).
- **Avoids:** decoration without a brand reason; small type.
- **Overuses:** showreel video heroes; press-driven "Thinking" content.
- **Borrow:** mission strip that sits *between* hero and product grid; large, few, confident cards.
- **Reject:** enterprise showreel hero — a tincture brand needs the product in view in <1s.

### A.9 Work & Co (Brooklyn; part of Accenture) — work.co
- **Evidence:** Homepage: "We solve complex problems through design & technology", Fast Company quote, JW Anderson digital redesign (fashion → lifestyle), Pfizer "Health Answers", AI hub; footer shows Accenture cookie/privacy governance — https://work.co/ . Their /work/ path 404s (https://work.co/work/).
- **Exceptionally good at:** product-grade UX rigour; prototyping-led process; health-content credibility (Pfizer).
- **Avoids:** award-circuit motion entirely; marketing fluff.
- **Overuses:** corporate cookie governance and gating; text-heavy pages.
- **Borrow:** treat the site as a product with measurable outcomes; health-information tone (clear, sourced, non-promissory).
- **Reject:** their enterprise sobriety would flatten a "funky but not childish" brand.

### A.10 Eastside Co (London/NY/Dubai) — eastsideco.com
- **Evidence:** Shopify Platinum Partner badge in header; "one of the first 3 UK agencies accredited as a Shopify Plus Partner"; services: theme + bespoke builds, migration, apps, priority support, SEO/PPC/email, Discovery Audit — https://eastsideco.com/case-studies (404 body, but global nav and footer rendered) and https://eastsideco.com/blog/top-shopify-and-shopify-plus-agencies-2026 .
- **Exceptionally good at:** mid-market Shopify delivery with SEO discipline (they publish a Shopify SEO audit) and app development.
- **Avoids:** headless; art-direction-led work.
- **Overuses:** service-page SEO sprawl; templated mega-menu.
- **Borrow:** "Discovery Audit" framing for the current Dawn store; SEO-first collection architecture.
- **Reject:** visual conservatism.

**Cross-agency pattern for Just Mushrooms:** the award-winning studios (A.1–A.4) supply the *visual and motion bar*; the Shopify-native agencies (A.5–A.7, A.10) supply the *commerce patterns* — hybrid 2.0 theme, subscription-first PDP, build-a-bundle, credibility block, SEO collection architecture. Design like Locomotive, ship like Barrel.

---

## Part B — Reference website table

Categories: **MC** mushroom competitor · **FS** functional supplement · **PB** premium botanical · **XS** exemplary Shopify · **ZA** South African e-commerce. Rows 1–19 (B.1–B.3) were appended first; B.4–B.6 follow. Every row was extracted server-side on 2026-09-02; where a site blocked extraction it is marked.

### B.1 Mushroom competitors (global)

| # | URL | Category | What to learn | Grid / card handling observed | One weakness |
|---|-----|----------|---------------|-------------------------------|--------------|
| 1 | https://us.foursigmatic.com/ | Mushroom competitor | Benefit-led product naming ("Focus", "Calm", "Gut Health") and a mega-menu organised by format then goal; "#1 Mushroom Coffee Brand*" claim footnoted; expert endorsements block (Joe Rogan, Dr Mark Hyman) | Mega-menu tiles with "Quick Buy" per product; bestsellers row of 5 items in a horizontal scroller, not a wrapped grid | Menu is enormous (coffees, pods, lattes, creamers, proteins, teas, cocoas, capsules, elixirs) — decision fatigue for a first-time buyer |
| 2 | https://realmushrooms.com/ | Mushroom competitor | Three-axis navigation (By mushroom / By benefit / By format); "Real Quality" section with Potency/Purity/Transparency tabs and explicit beta-glucan messaging; †-footnoted claims; 100-Day Guarantee page; Science Team page | Product cards pair a packshot with a lifestyle hover image; "Best Seller / Popular / New" badges; 8 cards in a 4×2 grid | Homepage shows "Error adding to cart" text leaking beside every card in the extracted DOM — quick-add state not hidden gracefully; benefit tiles all deep-link to the same collection (copy-paste bug) |
| 3 | https://hostdefense.com/ | Mushroom competitor | Nav: By Benefit / By Mushroom / by format; "Mushroom Benefits Chart" and "Mycelium Explained" education pages; SPINS market-share claim footnoted with methodology; Subscribe & Save 20% + free shipping threshold | 12-card "Customer Favorites" grid; front-of-pack + supplement-facts panel as the two card images | Hero is a sweepstakes banner; Grateful Dead gummies and pet products dilute the science positioning |
| 4 | https://ommushrooms.com/ | Mushroom competitor | Mega-menu with image tiles per Product Type / Usage / Mushroom / Bundle; trust strip (3rd-party tested, California grown, Non-GMO) directly under hero; FAQ accordion on home; bundle upsell "Save $9.99 vs buying separately" | Tabbed "Most Popular" carousel (Powder / Capsules / Gummies / Beverages / Proteins) with 4 cards per tab | Every product card renders "Quick Add + Sold out" simultaneously in DOM; lowercase product titles reduce scannability |
| 5 | https://www.dirteaworld.com/ | Mushroom competitor | Premium UK positioning: press logo marquee (Vogue, GQ, Tatler), "4.8/5 · 22,994 reviews" in hero, "The DIRTEA Standard" (fruiting body, dual extraction, 40%+ beta-glucans, third-party tested), Chief Science Officer profile, survey-stat block (77% / 82% / 91%) with footnote; "Help Me Choose a Product" quiz in footer | Three-up Super Blends row with bullet benefits per card; four-up gummies row; cart drawer with free-shipping progress bar and "You might also like" | Country selector defaulted wrongly ("Trinidad & Tobago (£)") — geolocation logic leaks; survey stats presented like clinical results |
| 6 | https://www.mushroomrevival.com/ | Mushroom competitor | "Shop by Goal" with four moods (Get Right / In The Zone / Boosted & Ready / Easy & Chill); "We only use fruiting bodies, never mycelium" as hero claim; podcast as content moat; 90-day guarantee in cart drawer; estimated delivery date shown in cart | Category icon row (8 tiles); best-seller carousel with "Autoship/Save" price shown beside one-time price | "50% OFF EVERYTHING" top bar plus "Notify Me" on multiple best-sellers signals stock/discount chaos; duplicated carousels in DOM |
| 7 | https://freshcap.com/ | Mushroom competitor | Accessibility widget (colour-scheme switcher) top-left; "Pick your perfect mush" species explorer with benefit chips per mushroom; "FreshCap Advantage" comparison (us vs typical); FAQ answers the beta-glucan question; GNC retail locator | Bestsellers grid of 4; species explorer as 5-item carousel with expand panel | Trust-badge marquee repeats the same three badges ~10× in DOM (performance/noise); hero carousel |
| 8 | https://hifasdaterra.com/en/ | Mushroom competitor (EU biotech) | Professional/practitioner portal split from consumer shop; species pages for 10 mushrooms ("From traditional medicine to scientific research"); "25 years, 27 awards, 50,000+ professionals" credibility block; product quiz ("Discover your formula"); Trusted Shops 4.73★ | Three "customer favourites" cards with refill/jar/subscription selector inline; species grid of 10 image tiles with a one-line epithet each | Cookie banner enormous; mixed ES/EN strings on EN site; country gate modal before content |

### B.2 South African mushroom / CAM / wellness sellers

| # | URL | Category | What to learn | Grid / card handling observed | One weakness |
|---|-----|----------|---------------|-------------------------------|--------------|
| 9 | https://funguys.co.za/mushroom-shop/medicinal-mushroom-extracts/ | SA mushroom competitor | Local price anchor (R345 → R315 for 60 caps); courier logo (The Courier Guy) in sidebar answers "how does it arrive"; species-per-product range (Reishi, Lion's Mane, Turkey Tail, Cordyceps, Chaga) | WooCommerce 5-product grid — 5 items in a 3-column grid leaves a ragged 3+2 row | Two of five products "Out of stock"; no tinctures; generic WooCommerce theme, no brand photography |
| 10 | https://www.mushroomguru.co.za/ and https://shop.mushroomguru.co.za/ | SA mushroom competitor | Strong proprietary-science language ("dual-phase extraction", "348× potency", "pre-clinical trial confirmed", "GMP-aligned 250m² facility"); WhatsApp + Telegram contact links; ZAR display toggle; explicit returns policy ("no returns on health products") | Ecwid storefront: 3 category tiles + 3 featured products (R12.50 honey snap, R485 capsules, R230 pet tincture) | Shop is a separate Ecwid subdomain from the brand site — brand experience breaks at the point of purchase |
| 11 | https://www.faithful-to-nature.co.za/health/medicinal-mushrooms | SA wellness marketplace | Medicinal Mushrooms is a first-class category with sub-facets (Chaga, Cordyceps, Lion's Mane, Reishi, Combined, Other); "Free delivery over R400", "Carbon Neutral deliveries", "Better Product Policy" as header trust strip; ingredient landing pages (/ingredient/lionsmane) for SEO | Marketplace PLP grid; mega-menu lists every sub-category as text (hundreds of links) | Mega-menu is a wall of text — 400+ links; brand storytelling impossible in marketplace context |
| 12 | https://wellnesswarehouse.com/ | SA wellness retailer (Shopify) | "Shop by Solution" chips (Brain Fuel, Sleep Easy, Stress Less, Happy Gut…); free delivery over R400 + carbon-offset statement; "Book a free online consult" (Calendly) and loyalty programme; payment logos in footer include Payfast and Paygate | Featured brand cards as large 2-up image tiles; "New to Wellness" 10-card grid with wishlist icon | Hero is a competition banner; product imagery is supplier packshots on white — no editorial tone |
| 13 | https://onelife.co.za/blogs/health-wellness-hub/lions-mane-mushroom-south-africa | SA CAM retailer | Long-form SEO article on Lion's Mane for SA with FAQ ("is it legal in SA", "capsule vs tincture"), free delivery over R400, dispatch in 1–2 business days stated inline | Article page, not PLP | Product tags disclaimer "Product tags are a shopping guide only. Check labels" undercuts confidence |
| 14 | https://neuroactive.co.za/products/lions-mane | SA nootropics competitor | SA nootropic positioning; review surfaces even negative feedback ("indicate whether water or alcohol extract / doubt if halaal/kosher") — shows what SA buyers ask | PDP | Reviews reveal missing spec data (extraction method, halaal/kosher) — a gap Just Mushrooms can fill on PDP |
| 15 | https://superfoods.co.za/product/lions-mane-organic-mushroom-supplement/ | SA superfood competitor | Powder + capsule format switch on one PDP; nootropic framing | PDP | Benefit claims phrased strongly ("nature's gift to your nervous system") — compliance risk |
| 16 | https://www.takealot.com/sfera-lion-s-mane-mushroom-extract-60-capsules/PLID53820551 | SA marketplace | Takealot is where SA price comparison happens; Sfera 60 caps (10:1 fruiting body extract, 450 mg) is the mass-market anchor | Marketplace PDP (extraction blocked by anti-bot; content **UNVERIFIED** beyond search snippet) | No brand storytelling possible; page blocked headless extraction |

### B.3 South African e-commerce UX references

| # | URL | Category | What to learn | Grid / card handling observed | One weakness |
|---|-----|----------|---------------|-------------------------------|--------------|
| 17 | https://www.capeunionmart.co.za/ | SA e-commerce UX | Header promise "FREE STANDARD DELIVERY & FREE RETURNS ON ORDERS OVER R650"; footer payment logos: Visa, Mastercard, Amex, Payflex, PayJustNow, PayPal, Discovery Miles, Mobicred, Float, RCS — the SA BNPL/loyalty stack; POPI Privacy Policy and PAIA Manual links in footer; "Earn 5% back in rewards" in header | 5-product horizontal carousel with "Add" button per card; brand logo carousel on black | Interstitial promo modal on first load; carousels everywhere |
| 18 | https://superbalist.com/ | SA e-commerce UX | Department-first nav (Women/Men/Kids/Home/Beauty/Sport) with Brands/Offers/Sale; account menu exposes Orders, Returns, Wallet, Wishlist, Waitlist; app-download push | Deep 3-level mega-menu; PLP grid not extracted | Mega-menu enumerates hundreds of sub-categories; heavy JS SPA |
| 19 | https://bash.com/ | SA e-commerce UX (TFG) | "Shop our stores" multi-brand switcher; "Pay your TFG Money account online", "Track your order", "Log a return", "Find your nearest store" as utility links — the SA expectation set; "Locally made" as a nav filter | Multi-brand mega-menu | Overwhelming taxonomy; no editorial layer |
### B.4 Premium botanicals and functional supplements

| # | URL | Category | What to learn | Grid / card handling observed | One weakness |
|---|-----|----------|---------------|-------------------------------|--------------|
| 20 | https://www.aesop.com/za/ | PB | Card copy leads with *who it is for* ("For thin or fine hair", "For oily, combination… and warm, humid climates"); size selector and "refill" variant inline on card; footer trust trio (secure checkout, complimentary samples, gift wrapping); Accessibility Statement and Consumer Health Data Notice in footer | 4-card "You may also like" with front + texture image swap | /za/ path returned a server error page and US pricing — SA localisation is broken (**observed on error page only**) |
| 21 | https://www.lelabofragrances.com/ | PB | Numbered product naming system (SANTAL 33, THÉ MATCHA 26) that turns a catalogue into a lexicon; "Discovery" sample programme as a nav item; per-country site gate with cart-empty warning; personalisation modal | 4-up "Popular Creations" with size chips ("15 ml + 3 sizes") and "Notify Me" fallback | Mega-menu enumerates ~60 scents; country gate before first paint |
| 22 | https://haeckels.co.uk/ (now https://www.dulcie.world/) | PB | Rebrand "from the company formerly known as Haeckels"; lab-voice copy ("in our own laboratory we produce unique extracts from local Dulse, Kelp and Serrated Wrack"); "Common Skin Concerns" problem-first tiles; packaging choice modal (Reuse / Recycle / Compost); loyalty tiers shown as points → £ off; journal articles on mycelium | Category tiles show item counts ("Face 18", "Hand + Body 20"); 3 concern tiles | Cookie banner lists 60+ cookies; locale defaulted to Slovakia/EUR |
| 23 | https://woodenspoonherbs.com/ | PB / FS | Tabbed merch rail (Best Sellers / Bundles / Founder Favourites / Immunity / Shop All); purchase options inline on card (One-time / 1-, 2-, 3-month supply with % off); six-badge trust strip (USDA Organic, Non-GMO, Vegan, GF, Third-party tested, Woman Owned); "Take the Quiz" and "Herbalism 101" in header; founder story with credentials | 4-column card grid; bundle cards show "Save 10%" badge and strike-through | Liquid error strings leak in the press marquee ("Liquid error (sections/as-seenin line 9)"); hero carousel repeats one product 5× |
| 24 | https://moonjuice.com/ | FS | Hero promise "Feel life differently" + six-icon trust marquee (100% Traceable, Clinically Proven Potency, 3rd Party Tested…); "Source / Dose / Form" three-part quality narrative; "Expert Series" with credentials; "Stack and Save" bundles named by outcome (Cortisol Control, Awake + Unwind); quiz with "personalised Rx in 3 minutes, save 20%" | 5-card best-seller row with one-line benefit under each name ("Rest, relaxation + regularity"); "From $" pricing | Nav duplicates (two Shop trees); UTM-stuffed nav links |
| 25 | https://seed.com/ | FS | Product codes (DS-01®, DM-02™, AM-02™, PM-02™) as system; "ViaCap® Technology" cutaway with outer/inner capsule explanation; "Take the Quiz" as primary CTA; "You are more than human" science microsite; "Over 1 million health transformations" | 4 product cards with Bestseller/New badges and "Starting at $ per month" | Only monthly pricing shown — no one-time price on home |
| 26 | https://ritual.com/ | FS | **Extraction blocked** (page returned only accessibility widget and tracking pixels) — traceable-ingredient sourcing map is the known pattern but **UNVERIFIED here** | — | Bot protection prevented audit |
| 27 | https://drinkag1.com/ | FS | Compare table across three SKUs (format, ingredient count, serving size, NSF Certified for Sport, price/month, price/serving); "cost vs buying separately" value table; clinical-trial footnotes numbered 1–5 with n, design and duration; "Feel the Difference or It's On Us" 90-day guarantee; expert testimonials with role lines; "Product Authentication" page | 3 stacked product panels with benefit bullets and "Supplement Facts" link each | Extremely long page; celebrity-heavy |
| 28 | https://golde.co/ | PB | Warm, small-range brand: 4–5 bestsellers, founder note in first fold ("Thanks for including Golde in your kitchen rhythms"), one-line descriptors ("The Internet's Favourite Frother"); cart drawer upsells 2 favourites | 4-card bestseller row with badges (Top Rated / New Look / Limited Batch) and hover image | Newsletter modal promises a competition rather than value |
| 29 | https://northspore.com/products/lions-mane-tincture | MC | Tincture PDP copy structure: traditional use → studied compounds (beta-glucans, erinacines, hericenones) → GMP + third-party testing → dosage ("1–3 full droppers… 1–3 times daily") → interaction warning (blood clotting, blood sugar, blood pressure, immunosuppressants) | PDP | Long paragraphs; disclaimers dense |
| 30 | https://www.herb-pharm.com/pages/mushroom-wellness-lions-mane | PB | Ingredient education page per species with growing-substrate disclosure ("Certified Organic brown rice… as the growth medium") | Article | Admits grain substrate — the exact weakness fruiting-body brands attack |

### B.5 Exemplary Shopify builds (award-listed)

| # | URL | Category | What to learn | Grid / card handling observed | One weakness |
|---|-----|----------|---------------|-------------------------------|--------------|
| 31 | https://www.awwwards.com/websites/shopify/ | XS (index) | Awwwards' Shopify technology filter: 30 recent honourees incl. Ferm Living (Signifly), Partake Foods (Has Merit), Marine Layer (Pattern), Cecilie Bahnsen, Balmoral (MILL3, SOTD Jun 2026), Deadstock Coffee (Instrument), Bodicine Collagen (Nethype), Lula Avocado Oil, Joy Rush — the list to mine for Shopify-specific PLP/PDP patterns | Index grid with studio attribution | Many honourees are single-product landing pages, not full catalogues |
| 32 | https://bodicine.com/ | XS / FS | Single-SKU collagen store: patented-ingredient logos (VERISOL®, ExceptionHYAL® Star) as trust; **results timeline** (after 4 / 8 / 12 / 16 weeks / 6 months) with each claim footnoted to a studies index page; "ideal for you if…" tick list; FAQ answers the sediment-in-bottle question honestly; four-icon service strip (courier in 24h, free shipping over 199 PLN) | Ingredient icon grid of 8; timeline as alternating image/text | Newsletter marquee repeats 10×; Polish-only |
| 33 | https://partakefoods.com/ | XS | Allergen-first food brand on Shopify (Awwwards-listed via Has Merit) — **UNVERIFIED** beyond listing | — | Not extracted |
| 34 | https://fermliving.com/ | XS | Large-catalogue Shopify (Signifly) — reference for editorial PLP density — **UNVERIFIED** beyond listing | — | Not extracted |
| 35 | https://www.marinelayer.com/ | XS | Apparel Shopify by Pattern (now part of Domaine) — reference for filter UX — **UNVERIFIED** beyond listing | — | Not extracted |
| 36 | https://www.balmoralrunning.com/ | XS | MILL3 (Montréal) SOTD + Developer Award Jun 2026 on Shopify — reference for performance + motion balance — **UNVERIFIED** beyond listing | — | Not extracted |
| 37 | https://deadstockcoffee.com/ | XS | Instrument-built Shopify coffee store — small range, strong identity — **UNVERIFIED** beyond listing | — | Not extracted |
| 38 | https://buckssauce.com/ | XS | Buzzworthy SOTD Jul 2026 + E-commerce Honors — single-product CPG on Shopify | — | Not extracted |
| 39 | https://matelibre.com/ | XS | Locomotive SOTD Oct 2023 — functional beverage with editorial storytelling | — | Not extracted |
| 40 | https://www.aupalevodka.com/en/ | XS | Locomotive SOTD + Dev Award Mar 2026 — dark, product-as-hero premium bottle | — | Not extracted |
| 41 | https://www.scoutmotors.com/ | XS | Locomotive; reported "E-commerce of the Year" on Awwwards (https://x.com/LocomotiveMTL) — configurator-led commerce | — | Not extracted |
| 42 | https://www.cocoonblanket.com/ | XS | Newest Awwwards Shopify listing (A Unified Whole) — single product, dark palette | — | Not extracted |

### B.6 Additional South African references

| # | URL | Category | What to learn | Grid / card handling observed | One weakness |
|---|-----|----------|---------------|-------------------------------|--------------|
| 43 | https://www.yuppiechef.com/ | ZA | The SA gold standard for trust copy: "Free delivery for orders over R700 or when you collect from our Cape Town, Johannesburg, Pretoria, Durban, Mbombela or Bloemfontein stores"; five quality seals (trading since 2006, secure shopping, delivery & collection, hassle-free returns, retail stores); payment sentence in footer: "Visa; MasterCard; Diner's Club; American Express; Discovery Miles; eBucks; SnapScan; Zapper; and EFT"; "Made in SA" badge on cards; review count + stars on every card; Live Chat in header | 5-card rows ("Grab one of our latest deals", "Best sellers") — exactly five, no ragged row; badges: New / Made in SA / Set of 4 / Available in N colours | Hero is a promo banner; cookie notice |
| 44 | https://www.zando.co.za/ → https://bash.com/ | ZA | Zando now redirects to Bash (TFG). Bash footer/quick-links: "More ways to pay" — PayJustNow, Payflex, PayU, Apple Pay; "Free delivery and collect with TFG Money Account"; "Track your order", "Log a return", "Find your nearest store" | Quick-link tiles | Brand consolidation confuses returning Zando customers |
| 45 | https://clicks.co.za/sfera_lion-mane-mushroom-extract-capsules-60s/p/370222 | ZA | Pharmacy-retail PDP structure: Warnings → Ingredients (450 mg 10:1 fruiting-body extract) → Description; the compliance tone SA buyers already recognise | PDP | No brand content |
| 46 | https://earthshine.co.za/shop/medicinals/afm-lions-mane-tincture-50ml/ | MC (ZA) | African Forest Medicinals 50 ml tincture; long-form species copy on PDP (Ming dynasty history, hericenones/erinacines, gut–brain) | WooCommerce PDP | Jokey tone ("you don't want to mess with a mushroom lion") undercuts science |
| 47 | https://mysticemporium.co.za/product/lions-mane-mushroom-tincture-50ml/ | MC (ZA) | Harmonic Mycology tincture: "ultrasonic… non-thermal hydro-ethanolic extraction", links to mushroomreferences.com for studies; reviews mention dose escalation (1 ml → 1.5–2 ml) | WooCommerce PDP | Extraction jargon without a diagram |
| 48 | https://cosmicbazaar.co.za/products/lions-mane-tincture | MC (ZA) | Aether Apothecary 30 ml tincture; "off-grid mothership… open Thursdays & Fridays" — place-based story; 4-month usage review | Shopify PDP | Disease claims in copy (dementia, cancer) — non-compliant |
| 49 | https://wellnesstree.co.za/collections/lions-mane | ZA | Multi-brand Lion's Mane collection page with format comparison (tincture vs tablets vs blends) in SEO copy | Marketplace PLP | Generic |
| 50 | https://www.faithful-to-nature.co.za/ingredient/lionsmane | ZA | Ingredient landing page ("products containing Lion's Mane") — an SEO pattern Just Mushrooms should own for each species | Ingredient hub | Copy makes NGF/PTSD claims |
| 51 | https://www.faithful-to-nature.co.za/prime-self-lions-mane-mushroom-capsules | MC (ZA) | PrimeSelf PDP shows "Recyclable plastic", "Made in South Africa", Q&A block ("Do you have a question?") and reviews mentioning autoimmune fatigue | Marketplace PDP | Claims in reviews unmoderated |
| 52 | https://www.takealot.com/sfera-lion-s-mane-mushroom-extract-60-capsules/PLID53820551 | ZA | (see row 16) price anchor | — | Blocked |

---

## Part C — Numbered observations

Format: observation (source URL) → **Apply to Just Mushrooms**. Sources are the pages read in Part A/B.

### C.1 Hero
1. The strongest supplement heroes state a *category promise* in ≤6 words with the product in frame: "Functional mushrooms for daily life." (https://us.foursigmatic.com/), "Potent wellness support" (https://www.mushroomrevival.com/), "Feel life differently" (https://moonjuice.com/). → **Apply:** one line, dark ground, macro tincture bottle lit from behind; no carousel.
2. DIRTEA puts social proof *inside* the hero ("4.8/5 · 22,994 reviews") (https://www.dirteaworld.com/). → **Apply:** show real review count once it exceeds ~50; until then show "Lab-tested · Made in SA · Free courier over R…".
3. Real Mushrooms' hero sells a *bundle* ("Curated mushroom bundles… Save 25%") rather than a single SKU (https://realmushrooms.com/). → **Apply:** secondary hero CTA "Build your stack".
4. Weak pattern: competition/sweepstakes heroes (Host Defense pet sweepstakes, Wellness Warehouse Metagenics competition) bury the product (https://hostdefense.com/, https://wellnesswarehouse.com/). → **Apply:** promos live in the announcement bar, never the hero.
5. Locomotive's e-commerce SOTDs use type as the hero and photography as the only saturated element (https://www.awwwards.com/locomotive/). → **Apply:** electric mycelium linework in one accent colour over near-black; photography carries the warmth.
6. Basic/Dept and Work & Co open with showreels/statements (https://www.basicagency.com/, https://work.co/) — right for agencies, wrong for stores. → **Apply:** product within first viewport on every breakpoint.

### C.2 Navigation
7. Three-axis nav (By mushroom / By benefit / By format) is the category convention (https://realmushrooms.com/, https://hostdefense.com/, https://ommushrooms.com/, https://moonjuice.com/). → **Apply:** keep all three but collapse to *Species · Goal · Shop all* at ≤7 SKUs; "format" is a PDP variant, not a menu.
8. Mega-menus with image tiles per node (Om, DIRTEA) convert better than text lists (Faithful to Nature's 400-link wall) (https://ommushrooms.com/, https://www.faithful-to-nature.co.za/health/medicinal-mushrooms). → **Apply:** 5–7 macro-photo tiles, one per species, in the Species menu.
9. Instrument filters 60 case studies with three tags and a stack/grid toggle (https://www.instrument.com/work). → **Apply:** Learn hub uses three tags (Species · Science · Ritual).
10. Wooden Spoon and Moon Juice place "Take the Quiz" in the primary nav (https://woodenspoonherbs.com/, https://moonjuice.com/). → **Apply:** "Find your mushroom" as a top-level item and in the empty-cart state.
11. Le Labo's country gate empties the cart on change (https://www.lelabofragrances.com/). → **Apply:** SA-only store; no gate — show "Ships nationwide from [city]" instead.
12. Hifas da Terra separates a professional/practitioner portal from the consumer nav (https://hifasdaterra.com/en/). → **Apply:** footer link "Practitioners & stockists" → wholesale form; keep it out of primary nav.
13. Yuppiechef exposes Live Chat, Help and Track-your-order in the header (https://www.yuppiechef.com/). → **Apply:** WhatsApp icon + "Track order" in utility bar.

### C.3 Product cards and grid balance (5/6/7 items)
14. Yuppiechef renders merch rows in exactly five cards, never a ragged wrap (https://www.yuppiechef.com/). → **Apply:** for 5 SKUs use a 5-col row ≥1280px, 3+2 centred ≥768px, 2-col mobile with the fifth full-width.
15. Funguys' WooCommerce grid shows 5 products in 3 columns → orphan row of 2 (https://funguys.co.za/mushroom-shop/medicinal-mushroom-extracts/). → **Apply:** never let Dawn's default 4-col leave a lone card; set `columns_desktop` to match SKU count or use a featured-first layout (1 large + 4).
16. Om's tabbed "Most Popular" (4 per tab) sidesteps ragged rows by fixing the count per panel (https://ommushrooms.com/). → **Apply:** 6 SKUs → 3×2; 7 SKUs → 1 hero card + 3×2.
17. DIRTEA's three-up Super Blends row gives each card 3 benefit bullets and a CTA (https://www.dirteaworld.com/). → **Apply:** card = macro photo, species name (Latin small caps), goal chip, price incl. VAT, add.
18. Real Mushrooms and Golde swap packshot → lifestyle on hover (https://realmushrooms.com/, https://golde.co/). → **Apply:** hover/second image = dropper macro or mushroom in habitat.
19. Wooden Spoon puts purchase options (one-time vs 1/2/3-month supply, % off) *on the card* (https://woodenspoonherbs.com/). → **Apply:** card shows "From R… · Subscribe & save 15%" but keeps the selector on PDP.
20. Badges that work: Best Seller / New / Made in SA / Set of N (https://www.yuppiechef.com/, https://realmushrooms.com/). → **Apply:** max one badge per card; "Made in SA" is the local differentiator.
21. Failure: Om renders "Quick Add + Sold out" together; Real Mushrooms leaks "Error adding to cart" in DOM (https://ommushrooms.com/, https://realmushrooms.com/). → **Apply:** hide state elements with `hidden`, not opacity; test sold-out state in Theme Check.
22. Domaine's Benchmade PLP has a product switcher on the card (https://www.shopify.com/partners/directory/partner/meet-domaine). → **Apply:** if 30 ml / 50 ml sizes exist, a size toggle on the card avoids duplicate SKUs in the grid.
23. Aesop's card copy says who it is for (https://www.aesop.com/za/). → **Apply:** one-line "For: deep-work days" under each species.

### C.4 PDP
24. Real Mushrooms' PDP is the category's most complete: gallery of 12 (packshot, lifestyle, old-vs-new pack, comparison chart, award seal, Purity-IQ QR, testimonial, founders, supplement facts, back label, SGS lab report) (https://realmushrooms.com/products/organic-lions-mane-extract-capsules). → **Apply:** gallery order = bottle → macro mushroom → dropper in use → label → COA thumbnail.
25. Same PDP states the guarantee inline under the button: "100-Day Satisfaction Guarantee • Fast Free Shipping $75+ • Secure Checkout". → **Apply:** "30-day happiness guarantee • Free courier over R… • Payfast/Ozow secure".
26. Beta-glucan % on the label (">30%") and a lab report image are the proof points that competitors argue over (https://realmushrooms.com/…, https://www.dirteaworld.com/ "40%+ beta-glucans"). → **Apply:** publish extraction ratio, fruiting-body statement, beta-glucan or triterpene assay per batch; link COA PDF.
27. "Real Mushrooms vs Other Brands" two-column comparison (https://realmushrooms.com/products/…) and FreshCap's "Advantage" (https://freshcap.com/). → **Apply:** one comparison block sitewide (us vs mycelium-on-grain vs generic capsule).
28. Hifas da Terra puts refill / jar / 2-refill / quarterly pack as a selector on the card and PDP (https://hifasdaterra.com/en/). → **Apply:** variant selector: 30 ml · 50 ml · 3-pack; subscription toggle beneath.
29. AG1's compare table (format, ingredient count, serving size, certification, price/month, price/serving) (https://drinkag1.com/). → **Apply:** species compare table on the collection page (extraction, mg per ml, servings, R per serving).
30. North Spore's PDP carries an interaction warning paragraph (blood clotting, blood sugar, blood pressure, immunosuppressants) (https://northspore.com/products/lions-mane-tincture). → **Apply:** collapsible "Who should not take this" on every PDP.
31. Bodicine's results timeline (4/8/12/16 weeks) footnoted to a studies index (https://bodicine.com/). → **Apply:** "What to expect" timeline phrased as *typical usage*, footnoted to studies, no outcome guarantees.
32. Seed's capsule cutaway explains delivery technology (https://seed.com/). → **Apply:** an animated dual-extraction diagram (water + alcohol → full spectrum) with reduced-motion fallback.
33. Moon Juice's one-line benefit under each product name ("Cognitive speed + brain longevity") (https://moonjuice.com/). → **Apply:** benefit line under every H1.
34. Reviews with topic chips (Product / Quality / Results) and "Review collected via store invitation" provenance (https://realmushrooms.com/products/…). → **Apply:** Judge.me or Shopify Reviews with verified-buyer labels; moderate disease claims out.
35. SA reviews reveal missing spec data ("indicate whether water or alcohol extract / halaal / kosher") (https://neuroactive.co.za/products/lions-mane). → **Apply:** spec table: extraction, solvent %, alcohol content, halaal status, vegan, allergens.

### C.5 Species / ingredient education pages
36. Hifas da Terra has a page per mushroom with an epithet ("Reishi — mushroom of eternal youth") and a 10-tile species grid (https://hifasdaterra.com/en/). → **Apply:** /species/lions-mane etc. with Latin name, habitat macro, compounds, tradition, studies, products containing it.
37. FreshCap's species explorer uses benefit chips per mushroom (Focus & Memory · Nerve support · Mood Balance) (https://freshcap.com/). → **Apply:** chips double as filter facets.
38. Host Defense publishes a "Mushroom Benefits Chart" and "Mycelium Explained" (https://hostdefense.com/). → **Apply:** one comparison matrix page (species × goal) — high SEO value.
39. Faithful to Nature owns /ingredient/lionsmane as a hub (https://www.faithful-to-nature.co.za/ingredient/lionsmane). → **Apply:** target "lion's mane South Africa" with your species page, not a blog post.
40. Mushroom Revival's podcast is an education moat (https://www.mushroomrevival.com/). → **Apply:** a short "Field notes" audio or video per species, optional.
41. Dulcie's journal covers mycelium materials and craft — adjacent culture, not sales (https://www.dulcie.world/). → **Apply:** Learn hub can include SA foraging culture, fynbos, Knysna forest mycology.
42. Herb Pharm discloses growth substrate (brown rice) (https://www.herb-pharm.com/pages/mushroom-wellness-lions-mane). → **Apply:** disclose substrate and origin per species; it is a trust lever.

### C.6 Quizzes and finders
43. DIRTEA's "Help Me Choose a Product" quiz page rendered only its heading — the quiz is a third-party embed that failed headless (https://us.dirteaworld.com/pages/mushroom-powders-product-quiz). → **Apply:** build the finder natively in Liquid/JS so it renders without third-party JS.
44. Moon Juice: "Get a personalised Rx in 3 minutes. Save 20%" (https://moonjuice.com/). → **Apply:** 4 questions max (goal, time of day, caffeine, experience) → 1 primary + 1 stack; incentive is a bundle discount, not a coupon.
45. Hifas da Terra's "¿No sabes cuál elegir? Haz el test" appears inside the mega-menu (https://hifasdaterra.com/en/). → **Apply:** finder entry in menu, PDP sidebar and empty cart.
46. Seed's hero has two CTAs: Take the Quiz / Shop Now (https://seed.com/). → **Apply:** same pairing on the hero.

### C.7 Cart drawer
47. DIRTEA: "You're £60 away from FREE SHIPPING" progress bar + "You might also like" (https://www.dirteaworld.com/). → **Apply:** free-courier progress bar in Rand; one cross-sell (the complementary species).
48. Mushroom Revival's drawer shows estimated delivery dates, 90-day guarantee, and "Save $X by switching to Autoship" (https://www.mushroomrevival.com/). → **Apply:** show courier ETA by province; subscription upsell as a toggle, not a modal.
49. Om's empty cart offers "Log in to check out faster" (https://ommushrooms.com/). → **Apply:** Shop Pay/Shopify accounts prompt; keep it one line.
50. Golde's empty cart suggests two favourites (https://golde.co/). → **Apply:** empty state = best-seller + finder link.

### C.8 Checkout trust (SA-specific)
51. Cape Union Mart footer payment row: Visa, Mastercard, Amex, Payflex, PayJustNow, PayPal, Discovery Miles, Mobicred, Float, RCS (https://www.capeunionmart.co.za/). → **Apply:** show Payfast/Yoco (card), Ozow (instant EFT), PayJustNow or Payflex (BNPL), SnapScan/Zapper as logos above the footer.
52. Yuppiechef spells payment methods out as a sentence and adds EFT (https://www.yuppiechef.com/). → **Apply:** an FAQ "How can I pay?" with the same sentence for SEO and screen readers.
53. Wellness Warehouse shows Payfast and Paygate logos (https://wellnesswarehouse.com/). → **Apply:** Payfast is recognised in the CAM category — lead with it.
54. Bash: "Free delivery and collect", "Track your order", "Log a return" quick links (https://bash.com/). → **Apply:** delivery page states courier partner (as Funguys shows The Courier Guy), 2–4 working-day windows, and collection option if any.
55. Yuppiechef's threshold sentence names cities (https://www.yuppiechef.com/). → **Apply:** "Free courier over R500 · 1–2 days Cape Town/Gauteng · 2–4 days regional".
56. SA sites show POPI/PAIA links in footer (https://www.capeunionmart.co.za/). → **Apply:** POPIA privacy notice and PAIA manual links; cookie banner minimal.
57. Mushroom Guru states "no returns on health products" plainly (https://shop.mushroomguru.co.za/). → **Apply:** state the returns rule for consumables in one sentence on PDP and in checkout policy links.
58. VAT: SA retailers display prices VAT-inclusive with no separate line until checkout (https://www.yuppiechef.com/, https://www.capeunionmart.co.za/). → **Apply:** all prices incl. 15% VAT; "incl. VAT" once in the price component; invoices show VAT number.
59. Mushroom Guru links WhatsApp and Telegram in the footer (https://shop.mushroomguru.co.za/). → **Apply:** WhatsApp click-to-chat with pre-filled "Hi, I have a question about…" on PDP and contact.

### C.9 Motion and reduced motion
60. Studio Freight varies section-transition depth and uses parallax to signal a new section (https://www.awwwards.com/case-study-repeat-by-studio-freight.html). → **Apply:** one signature transition (mycelium line draws in on scroll) reused, not ten.
61. Locomotive's SOTDs pair scroll libraries with developer awards — motion must be performant to be praised (https://www.awwwards.com/locomotive/). → **Apply:** CSS scroll-driven animations first; GSAP only for the hero.
62. Studio Freight's 3D "feels like 2D" via toon shading — motion serves illustration (https://www.awwwards.com/case-study-repeat-by-studio-freight.html). → **Apply:** SVG linework animated with stroke-dashoffset; no WebGL.
63. None of the supplement sites audited exposed a visible reduced-motion behaviour; FreshCap does expose a colour-scheme accessibility widget (https://freshcap.com/). → **Apply:** honour `prefers-reduced-motion` globally; static poster frames for any video.
64. Marquee trust strips repeat 6–10× in DOM (FreshCap, Wooden Spoon, Bodicine). → **Apply:** marquee via CSS with `aria-hidden` duplicates and a paused state on reduced motion.

### C.10 Typography
65. Studio Freight: one weight of one family, scale does the work (https://www.awwwards.com/case-study-repeat-by-studio-freight.html). → **Apply:** display serif or grotesk for headlines + one text sans; Latin species names in italic or small caps.
66. Le Labo's numbered names create a lexicon (https://www.lelabofragrances.com/). → **Apply:** a naming grammar (e.g., "Lion's Mane · No. 01 · Focus") repeated on label, card, URL.
67. Om's all-lowercase product titles hurt scanning (https://ommushrooms.com/). → **Apply:** sentence case for products, uppercase only for eyebrow labels.
68. Real Mushrooms marks every claim with † and repeats the footnote in the footer (https://realmushrooms.com/). → **Apply:** use a consistent claim marker and a single footer footnote.

### C.11 Colour
69. "Every colour has a job" — bright chartreuse only for CTAs against warm beige (https://www.awwwards.com/case-study-repeat-by-studio-freight.html). → **Apply:** electric accent (mycelium) reserved for CTAs and linework; species colours only as small chips.
70. Dark luxury references in the Shopify honours list (Cocoon, Aupale) use near-black with warm highlights (https://www.awwwards.com/websites/shopify/, https://www.awwwards.com/locomotive/). → **Apply:** #0B0B0C-class ground, warm off-white text, one electric accent; test 4.5:1 contrast on all body text.
71. Mushroom competitors are overwhelmingly light/beige (Real Mushrooms, Host Defense, Om, FreshCap). → **Apply:** dark ground is a genuine category differentiator in SA.

### C.12 Imagery
72. Host Defense uses pack-front + supplement-facts as the two card images (https://hostdefense.com/). → **Apply:** never lead with the facts panel; make it the last gallery image.
73. Real Mushrooms shows founders holding mushrooms and farm racks (https://realmushrooms.com/). → **Apply:** photograph the actual grow/extraction space and people; SA provenance is the story.
74. Dulcie's hero is a seaweed macro with lab copy (https://www.dulcie.world/). → **Apply:** macro fruiting bodies (Lion's Mane spines, Reishi lacquer) as hero textures.
75. DIRTEA's "beaker" image under "Ancient ingredients for modern wellness" (https://www.dirteaworld.com/). → **Apply:** one lab still-life per species (beaker, dropper, dried slices).
76. Om used a ChatGPT-generated tile image (filename "ChatGPT_Image_Apr_21_2025") in its nav (https://ommushrooms.com/). → **Apply:** no generative imagery on product or nav surfaces; it erodes the science claim.

### C.13 Accessibility
77. Third-party accessibility overlays (accessiBe on Haeckels/Dulcie and Basic; UserWay on Ritual; Pivotal on FreshCap) are common but do not fix underlying markup. → **Apply:** native accessibility: semantic headings, focus states, labelled controls; no overlay.
78. Real Mushrooms writes descriptive alt text for every image (https://realmushrooms.com/). → **Apply:** alt text on all product imagery, including species and compound names.
79. Duplicated nav trees (Moon Juice, Mushroom Revival) confuse screen readers (https://moonjuice.com/, https://www.mushroomrevival.com/). → **Apply:** one nav DOM, responsive by CSS.
80. Aesop and Wooden Spoon link an Accessibility Statement in the footer (https://www.aesop.com/za/, https://woodenspoonherbs.com/). → **Apply:** publish an accessibility statement and a contact route.

### C.14 Performance
81. Trust marquees duplicated 10× and hero video posters (FreshCap, Bodicine, Wooden Spoon) inflate DOM. → **Apply:** DOM budget <1,500 nodes on home; one video max, lazy, poster-first.
82. Takealot and Ritual blocked headless extraction — a hint of heavy bot-mitigation/JS (https://www.takealot.com/…, https://ritual.com/). → **Apply:** server-rendered Liquid, minimal apps; verify with Lighthouse on a mid-range Android profile.
83. Barrel and Domaine both moved brands from headless back to Shopify 2.0 (https://www.barrelny.com/work/all, https://www.shopify.com/partners/directory/partner/meet-domaine). → **Apply:** stay on Dawn-derived 2.0 theme; do not go headless.
84. Cookie banners on EU sites (Hifas, Dulcie) list dozens of cookies. → **Apply:** Shopify's native privacy banner, POPIA-appropriate, minimal.

### C.15 SEO structures
85. Collections by species AND by benefit each get their own URL (https://realmushrooms.com/collections/lions-mane-mushroom-extracts, /collections/cognition-and-focus). → **Apply:** /collections/lions-mane, /collections/focus, plus /pages/species/… hubs; canonicalise variants.
86. One Life's long-form "Lion's Mane in South Africa" article with local FAQs (legal in SA? capsule vs tincture?) (https://onelife.co.za/blogs/health-wellness-hub/lions-mane-mushroom-south-africa). → **Apply:** SA-specific FAQ schema on species pages.
87. Faithful to Nature ingredient hubs rank for "lion's mane" in ZA (https://www.faithful-to-nature.co.za/ingredient/lionsmane). → **Apply:** species pages must outrank marketplace hubs — depth, images, structured data.
88. Real Mushrooms' blog titles are question-led ("Is Turkey Tail Mushroom Edible?") (https://www.mushroomrevival.com/blogs/blog/…). → **Apply:** question-led article titles mapped to People-Also-Ask.
89. Product schema with review counts is visible on Yuppiechef cards ("5 out of 5 stars from 130 reviews") (https://www.yuppiechef.com/). → **Apply:** Product + AggregateRating JSON-LD on PDPs.

### C.16 Compliance and disclaimer presentation
90. US sites footnote every benefit with */†/‡ and one footer disclaimer (Real Mushrooms, Om, Host Defense, Moon Juice). → **Apply:** SA equivalent: "This product is not intended to diagnose, treat, cure or prevent any disease. Complementary medicine — not evaluated by SAHPRA" (confirm wording with regulatory adviser).
91. Hifas da Terra's footer: "food supplements that do not prevent, treat or cure any human disease and do not replace medical care" (https://hifasdaterra.com/en/). → **Apply:** plain-language equivalent in footer, not legalese.
92. Host Defense footnotes its "#1" claim with the exact SPINS dataset and period (https://hostdefense.com/). → **Apply:** any superlative gets a dated, sourced footnote or is cut.
93. DIRTEA presents a 1,500-person survey as "77% cognitive improvements" (https://www.dirteaworld.com/). → **Apply:** if surveys are used, label them "customer survey", never as study results.
94. SA competitor copy makes disease claims (dementia, cancer, PTSD) (https://cosmicbazaar.co.za/…, https://www.faithful-to-nature.co.za/ingredient/lionsmane). → **Apply:** structure/function language only; this is a differentiator with pharmacists and practitioners.
95. Clicks' PDP leads with Warnings then Ingredients (https://clicks.co.za/…). → **Apply:** "Warnings & interactions" accordion always present and open by default for pregnancy/medication.

### C.17 Email capture
96. First-order incentives cluster at 10–20% (Real Mushrooms 20%, Om 15%, Hifas 10%, Golde 10%) with a "No thanks, I'll pay full price" dismiss (https://realmushrooms.com/). → **Apply:** 10% or free shipping; dismiss copy neutral, not guilt-tripping.
97. Seed's newsletter is framed as content ("nerdy reads for your inbox") (https://seed.com/). → **Apply:** "Field notes from the lab — one email a month".
98. Hifas requires an explicit privacy checkbox (https://hifasdaterra.com/en/). → **Apply:** POPIA consent checkbox with plain wording.
99. Instrument routes its newsletter to LinkedIn (https://www.instrument.com/work). → **Apply:** not for consumers — keep email native (Shopify Email/Klaviyo).

### C.18 Footer
100. Real Mushrooms footer: About / Store / Other (practitioner sign-up, reseller, affiliate) + address + BBB seal + app badges (https://realmushrooms.com/). → **Apply:** four columns: Shop · Learn · Help · Company; physical address and company registration (SA trust signal).
101. Yuppiechef footer states payment methods as prose and shows quality seals above it (https://www.yuppiechef.com/). → **Apply:** seals row (Lab tested · Made in SA · Secure payment · Fast courier · Happiness guarantee) above the footer.
102. Wellness Warehouse footer offers "Book a free online consult" (https://wellnesswarehouse.com/). → **Apply:** "Ask our mycologist" WhatsApp/email link in footer.
103. Om's footer includes "Package Protection" and "Satisfaction Guarantee" pages (https://ommushrooms.com/). → **Apply:** dedicated Delivery, Returns and Guarantee pages linked from footer and PDP.
104. Darkroom's footer lists open-source projects and "inspiration" links (https://darkroom.engineering/about). → **Apply:** a small "Reading list" in Learn — personality without noise.

---

## Part D — Reference board (20 URLs, what to screenshot)

| # | URL | Screenshot this | Why |
|---|-----|-----------------|-----|
| 1 | https://realmushrooms.com/products/organic-lions-mane-extract-capsules | Full PDP gallery strip (12 thumbs), the guarantee line under Add to cart, "Real Mushrooms vs Other Brands" block, SGS report image | Category-best proof stack |
| 2 | https://realmushrooms.com/ | Mega-menu open on "By mushroom / By benefit / By format"; "Real Quality" tabs | Nav model + quality tabs |
| 3 | https://www.dirteaworld.com/ | Hero with review count; "The DIRTEA Standard" four-point block; cart drawer with shipping progress bar | Premium tone, cart UX |
| 4 | https://hifasdaterra.com/en/ | 10-tile species grid "From traditional medicine to scientific research"; card with refill/jar selector | Species hub, variant selector |
| 5 | https://freshcap.com/ | "Pick your perfect mush" species explorer; "FreshCap Advantage" comparison | Benefit chips, comparison |
| 6 | https://www.mushroomrevival.com/ | Cart drawer (ETA, 90-day guarantee, Autoship switch); "Shop by Goal" four moods | Cart drawer, mood naming |
| 7 | https://ommushrooms.com/ | Tabbed "Most Popular" carousel; bundle "Save $9.99 vs buying separately" | Grid balance via tabs, bundle math |
| 8 | https://hostdefense.com/ | Nav "By Benefit / By Mushroom"; SPINS footnote under "best selling" claim | Claim footnoting |
| 9 | https://moonjuice.com/ | Six-icon trust marquee; "Source / Dose / Form" trio; "Stack and Save" cards | Trust strip, stack naming |
| 10 | https://seed.com/ | ViaCap cutaway; hero with Quiz + Shop CTAs | Mechanism diagram |
| 11 | https://drinkag1.com/ | Compare table; "cost vs separately" table; numbered clinical footnotes | Comparison + evidence formatting |
| 12 | https://bodicine.com/ | Results timeline (4 wk → 6 mo) with footnotes; four-icon service strip | Expectation-setting timeline |
| 13 | https://woodenspoonherbs.com/ | Card with inline purchase options; six-badge strip; tabbed merch rail | Card commerce density |
| 14 | https://www.dulcie.world/ | Seaweed macro hero + lab copy; packaging choice modal (Reuse/Recycle/Compost); category tiles with counts | Dark-organic lab voice |
| 15 | https://www.lelabofragrances.com/ | Numbered naming on 4-up cards; size chips "+3 sizes" | Naming grammar |
| 16 | https://www.yuppiechef.com/ | Five-card deals row; quality seals row; footer payment sentence; delivery threshold sentence | SA trust conventions, 5-item grid |
| 17 | https://www.capeunionmart.co.za/ | Footer payment logo row (Payflex, PayJustNow, Mobicred, RCS…); header free-delivery/returns promise | SA payment stack |
| 18 | https://bash.com/ | "More ways to pay" tiles; Track order / Log a return quick links | SA utility links |
| 19 | https://www.awwwards.com/locomotive/ and https://www.aupalevodka.com/en/ | Aupale hero (dark, bottle-as-hero), Locomotive award list | Dark luxury motion bar |
| 20 | https://www.awwwards.com/case-study-repeat-by-studio-freight.html | Colour section ("every colour has a job"), header variants, CMS build shot | Colour/type system method |

---

## Appendix — Top 12 principles for Just Mushrooms

1. **Dark ground, one electric accent, photography carries warmth** — the whole mushroom category is beige (C.71); Studio Freight's "every colour has a job" governs the accent (C.69).
2. **Species · Goal · Shop all** navigation with macro-photo tiles; format is a PDP variant, not a menu (C.7–8).
3. **Fixed-count merch rows** — 5 SKUs = 5-up ≥1280 / 3+2 / 2-col; 6 = 3×2; 7 = 1 hero + 3×2; never a Dawn orphan card (C.14–16).
4. **Proof stack on every PDP** in a fixed order: extraction & fruiting-body statement → assay/COA → comparison block → guarantee line under the button → interactions accordion (C.24–30, C.95).
5. **Naming grammar** ("Lion's Mane · No. 01 · Focus") repeated on label, card, URL, email (C.66).
6. **Native finder** (4 questions → 1 product + 1 stack), entry points in nav, PDP and empty cart; built in Liquid/JS, not an embed (C.43–46).
7. **Subscription-first without coercion** — toggle on PDP and in cart, skip/swap/pause promised in copy; Swanky/Barrel pattern (A.6–A.7, C.19, C.48).
8. **SA trust conventions verbatim**: Rand incl. VAT, Payfast/Ozow/PayJustNow/SnapScan logos, named courier and city-level ETAs, WhatsApp support, POPIA links (C.51–59).
9. **Species hubs as SEO assets** — /species/… pages with Latin name, habitat macro, compounds, tradition, studies, SA FAQ schema; outrank marketplace ingredient hubs (C.36–39, C.85–87).
10. **One signature motion** (mycelium line draws on scroll) built with CSS scroll-driven animation, full `prefers-reduced-motion` fallback; no scroll-hijack, no WebGL (C.60–64).
11. **Compliance as design** — structure/function language, a single claim marker, dated footnotes for any superlative, "customer survey" never "study" (C.90–95).
12. **Stay on a Dawn-derived 2.0 theme**; extend with metaobjects (species, compounds, COAs) and a handful of custom sections; minimal apps — the same direction Domaine and Barrel took when moving brands *back* from headless (A.5, A.7, C.83).

*Method limits:* Ritual, Takealot and Buzzworthy's own domain blocked or failed extraction; Aesop's /za/ returned an error page; several Awwwards-listed Shopify stores (rows 33–42) were confirmed only via the index and are marked UNVERIFIED. No screenshots were captured in this pass — Part D lists what to capture.
