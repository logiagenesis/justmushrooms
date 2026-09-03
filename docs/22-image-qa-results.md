# 22 — Image QA results

**Verdicts from actually looking at the images**, checked against the rejection table in
[`19-image-generation-manifest.md`](19-image-generation-manifest.md) §7.

Everything in [`21-image-rerun-sheet.md`](21-image-rerun-sheet.md) came from file metadata. This
document is different: each row below was decoded and viewed.

## How these are being checked

`drive.google.com` is blocked by this environment's egress proxy — a 403 on CONNECT, which the proxy
README classifies as an organisation policy denial and says not to route around. That ruled out
`curl` permanently and, for a while, seemed to rule out looking at the images at all.

It does not. The Drive connector's `download_file_content` returns base64 that is far too large for
the conversation, but the harness **writes an oversized tool result to a file on disk** rather than
discarding it. That file is ordinary JSON, so the image can be reconstructed without the payload ever
passing through context:

```bash
SRC=".../tool-results/mcp-Google_Drive-download_file_content-<id>.txt"
jq -r '.content' "$SRC" | base64 -d > species-chaga-hero.jpg
```

The result is a real JPEG that can be opened and read normally. Dimensions come from the SOF marker:

```bash
python3 - <<'PY'
import struct, sys
d = open(sys.argv[1], 'rb').read(); i = 2
while i < len(d):
    if d[i] != 0xFF: i += 1; continue
    m = d[i+1]
    if m in (0xC0, 0xC1, 0xC2):
        h, w = struct.unpack('>HH', d[i+5:i+9]); print(f'{w}x{h}'); break
    if m in (0xD8, 0xD9) or 0xD0 <= m <= 0xD7: i += 2; continue
    i += 2 + struct.unpack('>H', d[i+2:i+4])[0]
PY
```

One practical limit: the connector drops its session if several downloads are issued at once. Fetch
them one at a time.

## Verdicts

| File | Dimensions | Verdict |
|---|---|---|
| `species-sceletium-hero.jpg` | 2752 × 1536 | **PASS** on content, **FAIL** on size |
| `texture-spores.png` | 1024 × 1024 | **FAIL** on size and format |

### `species-sceletium-hero.jpg` — content PASS

The image most likely to be wrong is right. It shows a **succulent plant and no fungus anywhere**:
fleshy finger-like leaves, the raised translucent bladder cells (idioblasts) that distinguish
*Sceletium tortuosum* actually rendered on the leaf surfaces, a star-shaped pale yellow flower with
fine filamentous petals, and arid quartz gravel under low warm sun. Palette sits in the brand range —
muted greens, warm stone, near-black shadows — with no text, watermark, hands or medical staging, and
clean negative space on the right for overlaid type.

The explicit "do not draw a mushroom" instruction in the batch 3 re-run did its job.

**But it is 2752 × 1536.** That is the `2K` tier, not `4K`, and it is smaller than the 3000 × 1688
variant the theme requests — so the browser would upscale it. This is the first hard confirmation that
the ~3 MB cohort in §2 of the re-run sheet really is 2K, rather than merely looking like it.

### `texture-spores.png` — FAIL

1024 × 1024 against a specified 2048 × 2048, and a JPEG despite the `.png` name, so it has no alpha
channel. Both faults were already known from metadata; the dimensions are new.

## Still to check

The remaining 22 species images, the three home images, and the rest of the set. Nothing else has
been looked at yet.
