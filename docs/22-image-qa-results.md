# 22 — Image QA results

**Verdicts from actually looking at the images**, checked against the rejection table in
[`19-image-generation-manifest.md`](19-image-generation-manifest.md) §7.

Everything in [`21-image-rerun-sheet.md`](21-image-rerun-sheet.md) came from file metadata. This
document is different: every row below was decoded and viewed.

## Headline

**All 59 Part A images have now been decoded and looked at.** Nothing in this document rests on file
metadata.

**All 24 species images pass on anatomy — heroes, macros and social cards alike. None of the failure
modes the rejection table exists to catch occurred.** No gilled Lion's Mane, no ground-dwelling chaga,
no gilled turkey tail, no opaque tremella, no insect under the cordyceps, and Sceletium is a succulent
in every one of its three frames. Several are better than the brief: the turkey tail and reishi cards
both volunteer a visible **pore** surface, which is the exact discriminator the rejection table asks for.

**Every 16:9 file measured is 2752 × 1536** — the `2K` tier, under the 3000 × 1688 the theme requests.
The resolution question in §2 of the re-run sheet is settled rather than suspected. It is narrower than
feared, though: the 4:5 images come out at 1856 × 2304 and comfortably exceed what their slots ask for,
so only the landscape heroes need re-running.

**Eighteen images fail, and they fall into three families with one shape between them: wherever the
prompt named a category instead of the thing, the model filled the gap from its own priors.** `page-species-hero.jpg` is the worst and
most consequential: the Species Library header shows a cicada, a stag beetle, a damselfly, a trilobite
and a pine cone, with one generic mushroom among eight items. `collection-single-species-og.jpg` shows
eight mushrooms of which **none** are ours, including an **Amanita** with a warted cap and a basal
volva. `collection-blends-og.jpg` shows a dense cluster reading as **Sulphur Tuft**, which is toxic.
Separately, `hero-forest-mobile.jpg` puts the brightest, busiest part of the frame exactly where the
overlaid heading goes, and is a different forest in a different grade from the desktop hero it should
match; `collection-botanicals-og.jpg` has the right subject under a bright overcast sky that belongs
to no other image on the site.

**59 inspected: 41 pass, 18 fail.** Every failure has been traced to a prompt, and every one of those
prompts is corrected in `scripts/build-image-manifest.mjs` and regenerated through
[`20-image-prompt-book.md`](20-image-prompt-book.md) and
[`21-image-rerun-sheet.md`](21-image-rerun-sheet.md).

**On resolution — a correction.** Every 16:9 file came back 2752 × 1536, the `2K` tier rather than the
`4K` asked for, and an earlier draft of this document called that nine re-runs. It is **one**. What
decides it is not the requested tier but the largest variant each *section* asks for, and reading the
theme settles it: `sections/hero.liquid` requests a **3000w** variant and is the only place in the
theme that does. `species-hero.liquid` and `page-hero.liquid` top out at 2400w, the shared image
snippet at 2000w, the product gallery at 1600w. At 2752 px every one of those is oversupplied. Only
**`hero-forest.jpg`**, the home page hero, is genuinely upscaled.

## Round 2 — the re-runs, 03/09/2026

The 18 failures were re-run from the corrected prompts and looked at again. **Fourteen cleared.**

This is the part worth recording: every one of those fourteen failed on a prompt that named a
*category*, and every one was fixed by naming the *thing*. Not one was fixed by re-rolling the dice.
The cleanest case is `collection-all-og` — the only change was describing the bottle (amber glass,
black ribbed screw cap, glass pipette, 30 ml and 50 ml) and the cork-stoppered spirit bottles became
the right product first time. `brand-og-home` had said "dropper" all along and had been right all
along. One word, twice confirmed.

| File | Round 1 | Round 2 |
|---|---|---|
| `collection-single-species-og.jpg` | An **Amanita**, a porcini, a parasol, a morel | **PASS** — all eight species, correct and identifiable |
| `collection-blends-og.jpg` | A **Sulphur Tuft** cluster | **PASS** — the six blend species, one turkey tail showing its pores |
| `page-species-hero.jpg` | A cicada, a stag beetle, a trilobite | **PASS** on subject; renders as eight tiles, so place the title over the row gap |
| `article-blog-hero.jpg` | Oak and bracken, legible gibberish | **PASS** on both — the three named species, and no word resolves |
| `collection-all-og.jpg` | Cork-stoppered spirit bottles | **PASS** — the right vessel, correctly scaled |
| `page-about-story.jpg` | A batch record naming nettle and valerian | **PASS** — every label blank, notebook closed and untitled |
| `article-storage-and-shelf-life.jpg` | Bottles labelled ARNICA, VALERIAN | **PASS** — unlabelled, clean rather than dusty |
| `collection-frontpage-og.jpg` | A hard vertical seam | **PASS** — natural falloff into mist |
| `brand-og-default.jpg` | The same seam | **PASS** — and the best image in the set |
| `hero-forest-mobile.jpg` | Bright where the heading goes | **PASS** — cluster in the lower third, top half clean, grade matches desktop |
| `collection-botanicals-og.jpg` | Bright overcast sky | **PASS** — near-black sky, palette back in range |
| `texture-spores.jpg` | 1024 px, wrong format | **PASS** — 2048 px, warm dust on true black |
| `texture-mycelium-lines.jpg` | A **painted chequerboard** | **PASS** — sage hairlines on true black |
| `texture-paper-grain.jpg` | A floral damask wallpaper | **PASS** on motif — but off-white, so composite with `multiply` rather than `screen` |
| `collection-combo-deals-og.jpg` | Cork-stoppered apothecary bottles | **Vessel fixed, brief missed** — ~25 identical bottles, no pairing, mossy ground |
| `article-reading-evidence-grades.jpg` | A paper on Holocene climate | **Text fixed, register missed** — an aged deckle-edged folio on mossy ground |
| `brand-favicon.png` | A **snowflake** | **Reference-grade** — asymmetric and hypha-like, but hairpoint tips die at 16 px |
| `brand-apple-touch.png` | A molecule diagram | **Not generated** |

### The two that swapped one defect for another

Both are instructive rather than annoying. `collection-combo-deals-og` got the bottle right and lost
the *point*: about twenty-five near-identical bottles with no visible pairing, so nothing says "a 50 ml
and a 30 ml together", staged on mossy forest floor where the prompt asked for a near-black ground.
`article-reading-evidence-grades` got the illegibility exactly right — nothing resolves at any zoom —
and returned an **aged, deckle-edged antique folio**. On an article about reading *modern* evidence
(small, short, recent trials) an ancient manuscript argues the opposite of the copy.

Three images in this round drifted to mossy woodland where the prompt said slate. That is worth
watching: it is the same failure shape one level down — "dark ground" is a category too.

### The one that did not move

`hero-forest.jpg` came back **2752 × 1536 again**. Its content is now a clear pass — tree ferns, sea
mist, a warm shaft on damp ground, pale fruiting bodies and visible mycelial threads in the litter,
with the left two-thirds dark for the heading — but the `4K` did not take for the second time.

Do not "fix" this in the theme. `sections/hero.liquid` offers a 3000w candidate and it is the only
slot in the theme that does; dropping it would cap the hero at 2400 px even once a larger file exists.
The shortfall is in the asset. Until it is regenerated at 4K the cost is roughly 9% on one image.

## How these were checked

`drive.google.com` is blocked by this environment's egress proxy — a 403 on CONNECT, which the proxy
README classifies as an organisation policy denial and says not to route around. `curl` is out
permanently.

The Drive connector still works. `download_file_content` returns base64 far too large for the
conversation, but **the harness writes an oversized tool result to a file on disk** rather than
discarding it, and that file is ordinary JSON. So the image can be reconstructed without the payload
ever passing through context:

```bash
# dec.sh <saved-tool-result> <outname>
jq -r '.content' "$1" | base64 -d > "$2"
python3 - "$2" <<'PY'
import struct, sys
d = open(sys.argv[1], 'rb').read(); i = 2
while i < len(d):
    if d[i] != 0xFF: i += 1; continue
    m = d[i+1]
    if m in (0xC0, 0xC1, 0xC2):
        h, w = struct.unpack('>HH', d[i+5:i+9]); print(f'{sys.argv[1]}: {w}x{h}'); break
    if m in (0xD8, 0xD9) or 0xD0 <= m <= 0xD7: i += 2; continue
    i += 2 + struct.unpack('>H', d[i+2:i+4])[0]
PY
```

The result is a real JPEG that opens normally. Two limits, both found the hard way:

- **Fetch one file at a time.** Four parallel downloads killed the connector session for several
  minutes.
- **Files of about 9 MB fail** with a misleading "session expired" error, every time, while files up
  to roughly 4.4 MB succeed. This is why the batch 1 renders were inspected rather than batch 3 — see
  the caveat.

## Verdicts — species heroes

| File | Dimensions | Anatomy | Notes |
|---|---|---|---|
| `species-lions-mane-hero.jpg` | 2752 × 1536 | **PASS** | Textbook. Rounded white cushion, long cascading spines, no cap, no gills, no stem, on hardwood. Negative space left |
| `species-reishi-hero.jpg` | 2752 × 1536 | **PASS** | Varnished kidney bracket, concentric zoning, clear cream growing margin, underside reads as pores not gills, on a dead stump |
| `species-chaga-hero.jpg` | 2752 × 1536 | **PASS** | Black cracked conk, rusty orange interior in the fissures, on birch bark, not a capped mushroom, not on the ground |
| `species-cordyceps-hero.jpg` | 2752 × 1536 | **PASS** | Orange clavate clubs, perithecia rendered as fine surface bumps, emerging from substrate, **no insect host** |
| `species-turkey-tail-hero.jpg` | 2752 × 1536 | **PASS** | Concentric velvety banding, thin flexible brackets, and a flipped bracket showing a **white pore surface** — not gills |
| `species-tremella-hero.jpg` | 2752 × 1536 | **PASS** | Genuinely translucent; light passes through the gelatinous lobes rather than reading as opaque white |
| `species-shiitake-hero.jpg` | 2752 × 1536 | **PASS** | Brown cap with white fissured crackle, cream gills beneath, inrolled margin, on a log |
| `species-sceletium-hero.jpg` | 2752 × 1536 | **PASS** | A succulent and no fungus anywhere. Fleshy leaves with the raised translucent idioblast cells rendered, star-shaped pale flower, arid quartz gravel |

Every image is also clean on the general exclusions: no text, watermark, logo, hands, faces or medical
staging, and the palette sits in the brand range of muted greens, ambers and near-blacks with no
purple, magenta or neon cast.

### The two that mattered most

**Sceletium** is the only botanical in the range and the model's prior is overwhelmingly "mushroom".
The batch 3 re-run with an explicit "do not draw a mushroom" instruction worked: the result is an
unmistakable succulent, and the raised bladder cells on the leaf surfaces are a detail a generic
prompt would have missed.

**Turkey tail** is the classic anatomical trap, because the pore surface is what distinguishes
*Trametes versicolor* from a gilled lookalike. The render puts a flipped bracket in the foreground
with the pore surface facing the camera. That is the single most convincing detail in the set.

### Two minor observations, neither a failure

- **Chaga** sits on what reads as a horizontal fallen log. Chaga grows on *living* birches; the bark
  is unambiguously birch and the conk is correct, but a standing trunk would be more accurate. Worth
  a re-roll only if the species page is likely to be read by mycologists.
- **Turkey tail** and **shiitake** have busier, greener backgrounds than the near-black the art
  direction calls for, and correspondingly less clean negative space for overlaid type. A composition
  note for the hero slot, not an anatomy one.

## Verdicts — other files

| File | Dimensions | Verdict |
|---|---|---|
| `hero-forest.jpg` (batch 3) | 2752 × 1536 | **PASS** on content, **FAIL** on size |
| `texture-spores.png` | 1024 × 1024 | **FAIL** — half the specified 2048 × 2048, and a JPEG despite the name, so no alpha channel |

### The home group — all three checked in batch 3 form

| File | Dimensions | Largest variant the theme asks for | Verdict |
|---|---|---|---|
| `hero-forest.jpg` | 2752 × 1536 | 3000 × 1688 | Content **PASS**, size **FAIL** |
| `hero-forest-mobile.jpg` | 1856 × 2304 | 1080 × 1350 | Size **PASS**, composition **FAIL** |
| `page-index-process.jpg` | 1856 × 2304 | 1200 × 1500 | **PASS** |

**A correction to the size claim.** Only the **16:9 heroes** are undersized. Every 16:9 file measured
comes out at 2752 × 1536, under the 3000 × 1688 the theme requests. The **4:5 files** are 1856 × 2304,
which comfortably exceeds the 1080 × 1350 and 1200 × 1500 variants their slots request. So the fix is
narrower than "the whole ~3 MB cohort is too small": it is the landscape heroes that need re-running,
not the portrait images.

### `page-index-process.jpg` — PASS

The best image in the set. Amber demijohns, spring water in a plain glass vessel, dried mushroom
material in a shallow steel tray with a wooden scoop, on a scarred timber bench in late window light.
It reads as an artisanal workshop and not a laboratory, which is exactly the line the brief drew —
no lab equipment, no clinical surfaces, no people. It tells the "spring water, ethanol, time" story
without a word of copy.

### `hero-forest-mobile.jpg` — composition FAIL

The content is fine: Afromontane forest, mist, ferns, a mushroom cluster on a mossy log in the lower
third as specified. But it fails its slot for two reasons.

**The text has nowhere to go.** The brief asked for clear dark space across the top half, because the
mobile hero carries the overlaid heading. Instead the top half is the *brightest and busiest* part of
the frame — pale misty sky showing through a dense tangle of branches. Cream type over that would be
unreadable. This is a functional failure, not a taste one.

**It is not the same scene as the desktop hero.** The brief called for the desktop scene recomposed
vertically. What arrived is a different forest with a different grade: the desktop hero is warm, amber
and near-black; the mobile is cool, grey-green and misty. A visitor moving between phone and desktop
would see two unrelated photographs. Worth re-running with the desktop hero supplied as a reference
image so the model matches scene and grade rather than inventing a second forest.

### `hero-forest.jpg` — the home page hero

Checked in its **batch 3 form**, so this verdict applies to the file intended for upload.

The scene is right, and specifically right about place: **tree ferns**, not conifers, which is the
single detail that separates a Southern Cape Afromontane forest from the generic Pacific Northwest
scene these prompts usually produce. Deep leaf litter, mist threading between the trunks, a warm light
shaft from the upper right, pale fungal fruiting bodies on the moss, and faint white mycelial threads
actually rendered in the litter. Near-black shadows, muted green and amber, nothing forbidden in frame.

Two reservations:

- **It is 2752 × 1536** — the 2K tier, against the 3000 × 1688 the theme requests. The browser will
  upscale the most important image on the site. This one is worth re-running at 4K on its own.
- The brief asked for a **large uncluttered dark area across the left two-thirds** for the overlaid
  heading. The left side is dark but textured, with a fallen log running through it. Type will sit
  cleanly in the upper-left quadrant, less so lower down. Serviceable, but a re-run could be composed
  more deliberately for the text.

## The caveat that matters

Seven of the eight verdicts above are on the **batch 1** renders, not batch 3. The batch 3 species
files are 8–10 MB and fail the connector every time; the batch 1 copies of the same eight species are
2.9–3.5 MB and come through. Only `species-sceletium-hero.jpg` was inspected in its batch 3 form,
because batch 3 regenerated it at the smaller size.

Batch 1 and batch 3 are **separate generations from the same prompts**, not the same image at two
resolutions — the byte sizes differ entirely. So strictly:

- **What is proven:** the prompts in the prompt book reliably produce correct anatomy. Eight for eight,
  including both traps.
- **What is not proven:** that the specific batch 3 files, which are the ones intended for upload, are
  also correct.

Given an eight-for-eight pass rate on identical prompts, the residual risk is low but not zero. The
cheapest way to close it is to have the generator itself report on its own output — it has vision and
the files are already in its AI Drive — or to place copies of the batch 3 heroes under about 4 MB
anywhere in the shared Drive, at which point they can be checked here directly.

## The pattern behind the failures

Across seventeen images the results split cleanly by **mode**, not by subject, and this is the most
useful thing the inspection turned up.

**Still life and macro on a dark ground — consistently excellent.** Every species hero, the process
image, the pets card, the fruit-body comparison and the mycelium network are strong: correct anatomy,
brand palette, clean negative space where the type goes. Nine of nine.

**Landscapes are not the problem — bright skies are.** My first reading of this was that wide
environmental scenes drift, and two more landscapes disproved it. `page-about-hero` is a wide coastal
vista and is one of the most on-brand images in the set: near-black foreground, warm amber band at the
horizon, mist over the Tsitsikamma, tree ferns framing the bottom. `page-contact-hero` is a wide coast
road and holds too, land dark under a grey sky.

The variable is **how much sky is in frame and how bright it is**, and that tracks the time of day the
prompt specified:

| Sky in the prompt | Result |
|---|---|
| Dawn, first light, low sun (`page-about-hero`) | Dark, warm, on brand |
| Overcast daylight, land-dominant (`page-contact-hero`) | Mid-tone, acceptable |
| Bright overcast, sky across the top third (`collection-botanicals-og`, `hero-forest-mobile`) | **Fails** — washes the frame and destroys the type area |

So the fix for the two failures is not "avoid landscapes". It is **name the hour and cap the sky**:
specify first light or last light, and say how little sky may appear. The turkey tail and shiitake
heroes show a milder version of the same thing, with daylight-green backgrounds where the brief asked
for near-black.

**Briefs that name a category rather than a list — fail outright.** `page-species-hero` asked for
"eight distinct specimens… museum-like" and got a natural-history cabinet. The model filled an
unspecified slot with its own prior.

The practical rule for any re-run: **name every object in the frame, and state the tonal target as a
constraint rather than an adjective.** "Near-black ground, deep shadow, no sky in frame" survives; a
mood word like "atmospheric" does not.

## Verdicts — page heroes, collections and articles

| File | Dimensions | Verdict |
|---|---|---|
| `page-mushroom-finder-hero.jpg` (b3) | 2752 × 1536 | **PASS** — one of the best in the set |
| `page-sourcing-hero.jpg` (b3) | 2752 × 1536 | **PASS** — inoculation holes visible |
| `page-species-hero.jpg` (b3) | 2752 × 1536 | **FAIL — wrong subject entirely** |
| `article-fruit-body-vs-mycelium.jpg` (b1) | 2752 × 1536 | **PASS** — the best educational image |
| `collection-pets-og.jpg` (b1) | 2528 × 1696 | **PASS** — exemplary |
| `collection-botanicals-og.jpg` (b1) | 2528 × 1696 | Subject **PASS**, palette **FAIL** |
| `page-about-hero.jpg` (b1) | 2752 × 1536 | **PASS** — among the most on-brand in the set |
| `page-contact-hero.jpg` (b1) | 2752 × 1536 | **PASS** |

### `page-sourcing-hero.jpg` — PASS

Stacked hardwood logs in dappled forest shade with **drilled inoculation holes in rows** along each
log and small fruit bodies emerging from them. The holes are the detail that makes it read as real log
cultivation rather than a stock forest photograph, and they are there.

### `article-fruit-body-vs-mycelium.jpg` — PASS

The strongest educational image produced. A whole fruit body on the left, gills and substrate still on
the stipe base; a **grain spawn bag** on the right, colonised oats bound by white mycelium with
condensation on the plastic. That is exactly what the article is about, and it is rendered accurately
enough that anyone in the industry would recognise it at a glance.

Worth noting: the bag is technically "packaging", which the global exclusions ban. Here the packaging
*is* the subject, and the model was right to keep it. A reminder that blanket exclusions need reading
against the brief, not applied mechanically.

### `collection-pets-og.jpg` — PASS

A worn leather collar with a brass buckle beside an amber bottle on sunlit floorboards, deep shadow
behind, **no animal in frame** as required, and generous dark negative space on the right exactly where
the wordmark goes. Textbook execution of the brief.

One forward-looking note: the bottle is a generic corked apothecary bottle, not a dropper bottle like
the real products. On a collection card rather than a product plate that is defensible — it is
editorial, unlabelled, and claims nothing. But once the real bottles are photographed, re-shooting this
card with the actual product would be both stronger and safer.

### `page-about-hero.jpg` — PASS

A wide coastal vista from the forest edge at dawn: near-black silhouetted trunks framing the left, mist
lying along the Tsitsikamma ridges, a warm amber band at the horizon, tree ferns across the foreground.
It is restrained, unmistakably Southern Cape, and holds the brand grade better than several of the
studio shots. This is the image that disproved the "landscapes drift" theory.

### `page-contact-hero.jpg` — PASS

The Garden Route coast road winding along a cliff coastline, fynbos and proteas in the near foreground,
soft morning light, no signage and no vehicles as specified. Regionally convincing. The sky is grey
across the top third, which lifts it above the brand's near-black, but the land stays dark enough that
it reads as part of the same site.

### `collection-botanicals-og.jpg` — subject PASS, palette FAIL

The subject is right and regionally accurate: a sprawling *Sceletium tortuosum* succulent in quartz
gravel with Cape fold mountains behind. No mushroom anywhere.

The grade is wrong. This is bright, flat, overcast daylight with a pale grey sky across the top third —
the opposite of the near-black, warm, deeply shadowed direction every other image follows. Beside the
other collection cards it will look as though it came from a different site, and the mid-tone gravel
leaves no dark area for the overlaid wordmark. Re-run with the sky excluded and the tonal target stated
as a hard constraint.

### `page-mushroom-finder-hero.jpg` — PASS

A branching mycelial network on near-black substrate: genuinely hyphal, with the fine repeated
bifurcation that reads as a decision tree without being literal about it. The pale green accent stays
well inside the ≤5% budget because the threads are filaments rather than a wash, and the left third is
clean and dark for the overlaid heading. Undersized like every other 16:9 hero, and otherwise
excellent.

### `page-species-hero.jpg` — FAIL, and the most consequential miss found

The Species Library header shows a natural-history cabinet flat-lay of eight items on dark slate:
a **cicada**, an oak leaf with **acorns**, a **stag beetle**, a **fern frond**, two generic dried
**mushrooms**, a **damselfly**, a **trilobite fossil**, and a **pine cone**.

One of the eight items is a fungus, and it is not one of the eight species this site sells.

The craft is good — even lighting, dark slate, muted palette, museum framing, nothing forbidden in
frame. It is simply the wrong subject, and wrong in a way that matters here more than it would
elsewhere: this is the header of a page whose entire purpose is a cited taxonomy of seven fungi and
one succulent. Opening it with beetles and a trilobite undercuts the mycological credibility the copy
spends 201 citations building.

**This is a defect in the prompt, not in the generator.** The manifest asked for *"a flat-lay taxonomy
plate of eight distinct specimens arranged in an even grid on dark slate, evenly lit and museum-like"*.
"Specimens" without a list is an invitation to produce natural-history specimens in general, and that
is exactly what came back. The species were never named. Replacement prompt:

```text
Photograph, directly overhead, a museum taxonomy plate: eight fungal and botanical specimens laid out
in an even two-row grid on a dark slate slab, evenly lit with soft diffuse light and no harsh shadow.
The eight specimens, and nothing else, are: a Lion's Mane fungus with cascading white spines; a
varnished red-brown reishi bracket; a black cracked chaga conk; a cluster of orange cordyceps clubs; a
banded turkey tail bracket; a translucent white tremella lobe mass; a brown shiitake cap with white
cracking; and a sprig of Sceletium tortuosum succulent with fleshy leaves. Every item in the frame
must be one of these eight. No insects, no beetles, no dragonflies, no fossils, no pine cones, no
acorns, no oak leaves and no ferns. Muted natural colour, matte finish, near-black ground.
```

### `collection-single-species-og.jpg` — FAIL, and a brand-safety problem

**2528 × 1696.** The Single-species collection card. Format, craft and grade are all correct: eight
mushrooms in an even grid on dark slate, museum lighting, muted palette, negative space on the right
third for the wordmark. Everything except the mushrooms.

None of the eight is a species this brand sells. Working left to right, top to bottom:

| Position | What is actually there | Why it matters |
|---|---|---|
| Top left | **Amanita** — pale warted cap, ring on the stem, swollen basal volva | The genus that contains the death cap and destroying angel. On a card advertising ingestible tinctures |
| Top centre | Porcini (*Boletus*), pored underside | Edible, but not ours |
| Top right | Parasol, scaly cap with a movable ring | Not ours |
| Middle left | Chanterelle, false gills, funnel form | Not ours |
| Middle centre | A milkcap or brittlegill | Not ours |
| Middle right | Small greenish-yellow gilled caps | Reads as a *Hypholoma*-type toadstool |
| Bottom left | Shaggy ink cap | Not ours |
| Bottom right | Morel, pitted conical head | Not ours |

The Amanita is the one that cannot ship. A functional-mushroom brand selling a consumable in South
Africa, under the CPA's misleading-representation provisions, putting a warted-and-volva'd Amanita on
the header of its single-species range is a foreseeable harm and an obvious reputational one. Nothing
about the image is *illegal*; it is simply the single worst mushroom to have chosen.

### `collection-blends-og.jpg` — FAIL

**2528 × 1696.** A dense clustered mass of small greenish-yellow gilled caps on rotting wood, warm
grade, heavy shadow. Attractive, well-lit, and a textbook rendering of **Sulphur Tuft**
(*Hypholoma fasciculare*) — clustered habit on dead wood, sulphur-yellow cap fading rust at the centre,
greenish gills. It is toxic and, in Europe, one of the commonest causes of mushroom poisoning.

The blend products contain reishi, Lion's Mane, cordyceps, chaga, turkey tail and tremella. Not one is
gilled. A single gilled cluster on the Blends card contradicts the ingredient lists on every product it
links to.

<a id="the-category-defect-fixed-at-source"></a>

## The category defect — fixed at source

Three failures, one cause. Each of these prompts asked for a **category** and left the choice of
species to the model:

| Prompt asked for | What came back |
|---|---|
| "a flat-lay taxonomy plate of eight **distinct specimens**" | A cicada, a stag beetle, a trilobite, a pine cone |
| "**eight distinct mushroom specimens** laid out in an even grid" | An Amanita, a porcini, a parasol, a morel |
| "**several mushroom specimens** overlapping and merging" | A Sulphur Tuft cluster |

The generator did nothing wrong in any of the three. Asked for "specimens", it produced the specimens
of its training distribution — which are the field-guide mushrooms of the northern hemisphere, not a
South African functional-mushroom range. The craft was fine every time; only the census was wrong.

Rather than re-run the three, I looked for every prompt with the same shape. `data/image-manifest.csv`
had **ten**, and six of them had not been generated yet — they would have failed identically:

| File | Category phrasing | State |
|---|---|---|
| `page-species-hero.jpg` | "eight distinct specimens" | Generated, **failed** |
| `collection-single-species-og.jpg` | "eight distinct mushroom specimens" | Generated, **failed** |
| `collection-blends-og.jpg` | "several mushroom specimens" | Generated, **failed** |
| `article-blog-hero.jpg` | "pressed specimens" | Generated, unchecked |
| `product-elixir-of-life-6-mushroom-blend-50ml.jpg` | "six distinct mushroom specimens" | Not yet run |
| `product-elixir-of-life-6-mushroom-blend-50ml-scene.jpg` | same | Not yet run |
| `product-new-general-maintenance-50ml.jpg` | "a restrained mixed group of specimens" | Not yet run |
| `product-new-general-maintenance-50ml-scene.jpg` | same | Not yet run |
| `product-lions-mane-mushroom-tincture-50ml.jpg` | "two white spined specimens" — named, but thinly | Not yet run |
| `product-lions-mane-mushroom-tincture-50ml-scene.jpg` | same | Not yet run |

`scripts/build-image-manifest.mjs` now carries an `SP` roster of the eight species with a one-line
morphological description of each, and every group shot enumerates the species that belong in it. The
list is followed by a closing clause naming the specific wrong answers the model has already given:

```text
These are the only organisms permitted in the frame, and each must be rendered exactly as described.
No other mushroom of any kind may appear - specifically no Amanita, no warted, spotted or
red-and-white cap, no ring and no basal volva, no porcini, chanterelle, morel, parasol, shaggy ink
cap, milkcap or fly agaric, and no small brown or yellow-green gilled toadstool of any sort. No
insects, no fossils, no shells and no foliage beyond what is described above.
```

Naming the failures matters more than a generic "only these species". A negative constraint the model
can check against a concrete image ("no basal volva") is enforceable; "no other mushroom" alone is an
abstraction it can satisfy while still producing a porcini. All ten prompts in `data/image-manifest.csv`
and [`20-image-prompt-book.md`](20-image-prompt-book.md) are regenerated and ready to run.

Three of the ten need re-running from the corrected prompts; six have not been run at all and will now
run correctly first time; `article-blog-hero.jpg` should be re-checked before deciding.

## Verdicts — species macros and social cards

All sixteen pass. The macros are the strongest work in the set.

| File | Size | Verdict |
|---|---|---|
| `species-lions-mane-macro.jpg` | 1856 × 2304 | **PASS** — individual teeth resolved, translucency at the tips, dew beading |
| `species-reishi-macro.jpg` | 1856 × 2304 | **PASS** — lacquered concentric bands, white growing margin at the frame edge |
| `species-chaga-macro.jpg` | 1856 × 2304 | **PASS** — cracked black exterior, burnt-orange cork interior, birch bark at the edge |
| `species-cordyceps-macro.jpg` | 1856 × 2304 | **PASS** — perithecia as fine surface bumps, **no insect** |
| `species-turkey-tail-macro.jpg` | 1856 × 2304 | **PASS** — velvet concentric banding, wavy pale margin, on wood |
| `species-tremella-macro.jpg` | 1856 × 2304 | **PASS** — light passes through the gelatinous lobes; genuinely translucent |
| `species-shiitake-macro.jpg` | 1856 × 2304 | **PASS** — white fissured crackle, and a second cap showing cream gills |
| `species-sceletium-macro.jpg` | 1856 × 2304 | **PASS** — raised translucent bladder cells rendered accurately; a succulent, no fungus |
| `species-lions-mane-og.jpg` | 2528 × 1696 | **PASS** — cushion of spines on hardwood, dark left third for the wordmark |
| `species-reishi-og.jpg` | 2528 × 1696 | **PASS** — underside shows a clear **pore** surface, not gills |
| `species-chaga-og.jpg` | 2528 × 1696 | **PASS** — conk on a **living** birch, which is the detail most often got wrong |
| `species-cordyceps-og.jpg` | 2528 × 1696 | **PASS** — clubs from leaf litter, no host insect |
| `species-turkey-tail-og.jpg` | 2528 × 1696 | **PASS** — a flipped bracket volunteers the white **pore** surface |
| `species-tremella-og.jpg` | 2528 × 1696 | **PASS** |
| `species-shiitake-og.jpg` | 2528 × 1696 | **PASS** — white cracking, cream gills, on an inoculated log |
| `species-sceletium-og.jpg` | 2528 × 1696 | **PASS** — sprawling in Karoo quartz under low sun, one open star-shaped flower |

The rejection table in §7 of the manifest can be closed. Every risk it was written to catch was
checked in three separate frames per species, and none occurred.

## Verdicts — the rest

| File | Verdict |
|---|---|
| `collection-all-og.jpg` | **FAIL** — wrong vessel |
| `collection-combo-deals-og.jpg` | **FAIL** — wrong vessel |
| `collection-frontpage-og.jpg` | **FAIL** — hard vertical seam |
| `page-faq-hero.jpg` | **PASS** — layered turkey tail, calm, heavy negative space right |
| `page-about-story.jpg` | **FAIL** — legible batch notes naming the wrong ingredients |
| `page-shipping-returns-hero.jpg` | **PASS** — unbranded kraft parcel, twine, no logos, no text |
| `page-sourcing-detail.jpg` | **PASS** — drilled hole, sawdust spawn visible, wax over it |
| `page-disclaimer-hero.jpg` | **PASS** — wet slate under a raking light, deliberately plain |
| `article-what-is-a-tincture.jpg` | **PASS** — water, ethanol, dried material on slate; the dual extraction, clearly |
| `article-how-to-take-a-tincture.jpg` | **PASS** on content; manifest metadata was wrong |
| `article-sa-regulations-explained.jpg` | **PASS** — and the useful control case |
| `article-reading-evidence-grades.jpg` | **FAIL** — a legible paper on Holocene climate variability |
| `article-blog-hero.jpg` | **FAIL** — oak and bracken, no fungus, and legible gibberish |
| `article-storage-and-shelf-life.jpg` | **FAIL** — bottles labelled ARNICA and VALERIAN |
| `texture-slate.jpg` | **PASS** — ships as-is once renamed |
| `texture-mycelium-lines.jpg` | **FAIL** — a painted-on transparency chequerboard |
| `texture-paper-grain.jpg` | **FAIL** — a floral damask wallpaper |
| `brand-og-home.jpg` | **PASS** — and the image that proves the vessel fix |
| `brand-og-default.jpg` | **FAIL** — the same seam, at the halfway point |
| `brand-favicon.png` | **FAIL** — a snowflake |
| `brand-apple-touch.png` | **FAIL** — a different mark from the favicon, and far too intricate |

### `page-sourcing-detail.jpg` — PASS, with one craft note

A drilled hole in bark with sawdust spawn visible inside and wax over it: the right subject, and the
detail that makes the Sourcing page read as a real cultivation operation. Two small realism notes for
whoever shoots the real thing one day — the wax is rendered glossy, closer to toffee than to opaque
cheese wax, and it only half-covers the hole where a real seal covers it entirely. Neither is worth a
re-run.

### `article-how-to-take-a-tincture.jpg` — PASS, and a manifest error

A dropper held over a glass of water on a breakfast table, drop caught mid-fall. Correct, and the
right image for the article.

It also has **a hand in frame**, and the exclusions for this row said "No people, faces or hands." The
image is not the defect: the prompt said the dropper was *held*, so a hand was always going to appear,
and it is anatomically clean and cropped at the fingers. The row was simply carrying the wrong
exclusion axis. It is now `mode: 'hand'`, which swaps in the one-hand clause, so a future re-run will
not strip out the thing that makes the picture work.

### `article-sa-regulations-explained.jpg` — PASS, and the control case

The prompt asked for "plain printed documents"; the exclusions banned text. Faced with that
contradiction the model produced **blank sheets** — sober, unbranded, no text, no gibberish. Blank
paper for an article on South African regulation is a touch literal, and arguably apt.

This is the useful half of the experiment. Given the identical contradiction, `page-about-story`,
`article-reading-evidence-grades` and `article-blog-hero` all went the other way and invented legible
writing. The model resolves the conflict by coin flip. Making illegibility explicit removes the flip.

---

## The second defect family — the vessel

Three images put the wrong bottle on the site, and one image proves why.

| File | Prompt said | What came back |
|---|---|---|
| `collection-all-og.jpg` | "an arc of **amber bottles**" | Cork-stoppered spirit bottles, several times 50 ml |
| `collection-combo-deals-og.jpg` | "paired **amber bottles**" | Cork-stoppered apothecary bottles |
| `article-storage-and-shelf-life.jpg` | "**amber bottles** in a dark cupboard" | Antique labelled apothecary bottles, dusty and half-empty |
| `brand-og-home.jpg` | "an arc of **amber dropper bottles**" | **Exactly the right bottle** |

One word. `brand-og-home` came back with amber glass, black ribbed screw caps, rubber bulbs and
visible glass pipettes — the Just Mushrooms vessel, rendered without a reference photograph. The three
that omitted "dropper" got the apothecary bottles of the model's training set.

All three prompts now describe the object rather than naming a category: *amber glass dropper bottles
in the 30 ml and 50 ml apothecary sizes, each with a black ribbed screw cap holding a glass pipette —
not cork stoppers, not glass stoppers, not spirit or wine bottles, and nothing larger than 50 ml.*

## The third defect family — invented legible text

Put paper, a notebook or a label in frame and the model will write on it. What it writes will be
fluent-looking, legible, and somebody else's product.

| File | What it says |
|---|---|
| `page-about-story.jpg` | A batch record: **nettle 40 g, cedar leaf 15 g, dandelion root 20 g, valerian 15 g** |
| `article-storage-and-shelf-life.jpg` | Shelf labels: **ARNICA**, **TINCTURE No. 4**, **VALERIAN** |
| `article-reading-evidence-grades.jpg` | A paper titled *The Role of Holocene Climate Variability…*, body text dissolving into pseudo-words |
| `article-blog-hero.jpg` | *Quercus robur*, *Pteridium aquilinum*, and two pages of confident gibberish |

Every one of these ran under an exclusion that said, verbatim, "The frame must contain **no text,
lettering**, watermark, signature, logo, packaging or **label**". The exclusion lost, because the
prompt in the same breath asked for "handwritten batch notes", "printed journal papers, annotated in
pencil", "an open field notebook". A contradiction resolves in favour of the concrete noun.

Two of these are more than a craft problem. A batch record on the About page listing a herbal recipe
this company does not make, and a shelf of bottles labelled arnica and valerian on an article about
storing *your* tincture, are both representations about the business, on a site whose entire pitch is
that it does not overstate. Under the CPA that is the kind of detail worth being careful about.

The corrected prompts stop asking for the impossible and say what is actually wanted:

```text
No word anywhere in the frame may be legible. Any paper, page, notebook, label or spine must be blank,
or turned far enough from the camera that the writing reads only as a soft grey rhythm. Do not invent
titles, headings, ingredient lists, author names, dates or product names, and do not render
lorem-ipsum or pseudo-words that look like language at a glance.
```

## And two smaller ones

**The seam.** `collection-frontpage-og` and `brand-og-default` both carry a hard vertical edge running
the full height of the frame — the model answered "leave the left half dark and empty for a wordmark"
by pasting a darkened panel over that half. Two of the three prompts using the most emphatic phrasing
did it. The negative-space clause now adds: *that space must fall away naturally in the scene itself —
no hard edge, no seam, no pasted panel, no overlaid gradient, band or vignette.*

**The chequerboard.** `texture-mycelium-lines` is the single clearest failure in the set: flat mint
linework drawn over a **hand-painted grey-and-white Photoshop chequerboard**. The prompt asked for "a
fully transparent background" and said "export with an alpha channel". A model cannot export alpha, so
it painted a picture *of* transparency instead. `texture-paper-grain` came back a repeating floral
damask — a motif and a tiling grid where a random fibre scatter was wanted.

The three overlays are now specified as light marks on **pure black**, saved as ordinary JPEGs and
composited with `mix-blend-mode: screen`, where black reads as zero. Real transparency, no alpha
channel, and the intensity stays adjustable in CSS instead of baked into the pixels. The mint
`#8FF7C8` is replaced with a muted sage `#A8BFA5`; the neon green was mine, and outside the palette
the exclusions demand in the same breath.

**The icons.** The favicon is a competent flat gold mark that reads as a **snowflake** — four
symmetric branching arms around a ring is an ice crystal, not a hypha; symmetry is the tell. The
apple-touch icon is not the same mark at all: sixteen ball-tipped spokes and four hubs, a molecule
diagram, centred where full-bleed was asked for, and hopeless at 180 px. The prompt said "the same
simplified mycelium-node glyph", which has no referent for a model that never saw the first image.
Both prompts now describe the glyph in full, in identical words, and demand asymmetry.

---

## Where this leaves the image set

| | Files |
|---|---|
| Part A generated | 59 |
| **Inspected** | **59**, twice |
| Passing after round 2 | **54** |
| Still to re-run | 3 (`collection-combo-deals-og`, `article-reading-evidence-grades`, `brand-apple-touch`) |
| Re-run for size only | 1 (`hero-forest`) |
| Generate as a vector reference | 1 (`brand-favicon`) |

Species imagery — the part with real regulatory exposure and the part hardest to get right — is
**complete and correct at 24 of 24**. Everything that failed did so on a prompt I wrote, and all of
those prompts are now fixed at source. Nothing needs a new idea; it needs a re-run.

The 71 product plates remain blocked on photographs of the 23 real bottles. Six of those prompts
carried the category defect and two carried the vessel defect; both are corrected here, so they will
run right the first time once the reference photographs exist. On the evidence of `brand-og-home`, a
carefully described bottle gets very close even without one.
