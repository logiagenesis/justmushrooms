# 22 — Image QA results

**Verdicts from actually looking at the images**, checked against the rejection table in
[`19-image-generation-manifest.md`](19-image-generation-manifest.md) §7.

Everything in [`21-image-rerun-sheet.md`](21-image-rerun-sheet.md) came from file metadata. This
document is different: every row below was decoded and viewed.

## Headline

**All eight species pass on anatomy. None of the failure modes the rejection table exists to catch
occurred.** The prompts are sound — including the two the model was most likely to get wrong.

**Every 16:9 file measured is 2752 × 1536** — the `2K` tier, under the 3000 × 1688 the theme requests.
The resolution question in §2 of the re-run sheet is settled rather than suspected. It is narrower than
feared, though: the 4:5 images come out at 1856 × 2304 and comfortably exceed what their slots ask for,
so only the landscape heroes need re-running.

**One image fails its slot outright**: `hero-forest-mobile.jpg` puts the brightest, busiest part of the
frame exactly where the overlaid heading goes, and is a different forest in a different grade from the
desktop hero it is supposed to match.

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

## Still unchecked

The 16 species macro and OG files, the ten page heroes, seven collection cards, seven article images
and the three remaining textures. The same method works for any of them under roughly 4 MB, which
covers all the batch 1 copies and the smaller batch 3 page heroes.
