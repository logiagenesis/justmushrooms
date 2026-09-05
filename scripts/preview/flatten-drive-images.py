#!/usr/bin/env python3
import re, sys
from pathlib import Path

src, dest = Path(sys.argv[1]), Path(sys.argv[2])
dest.mkdir(parents=True, exist_ok=True)

def slug_for(name: str) -> str | None:
    n = name.lower()
    if n.endswith('.jpeg'): n = n[:-5] + '.jpg'
    n = re.sub(r'_[0-9a-f]{6,}\.(jpg|png)$', r'.\1', n)
    m = re.match(r'^(species-[a-z0-9-]+)-hero\.(jpg|png)$', n)
    if m: return f'{m.group(1)}.jpg'
    m = re.match(r'^species-([a-z0-9-]+)-macro\.(jpg|png)$', n)
    if m: return f'macro-{m.group(1)}.jpg'
    if n.startswith('product-'): return n if n.endswith(('.jpg', '.png')) else None
    if n.endswith(('.jpg', '.png')): return n
    return None

rank = {'just-mushrooms-rerun': 3, 'rerun': 3, 'mycelia-bundle': 2, 'second batch': 1, 'archive': 0}
chosen = {}
for p in src.rglob('*'):
    if not p.is_file() or p.suffix.lower() not in {'.jpg', '.jpeg', '.png'}: continue
    slug = slug_for(p.name)
    if not slug: continue
    parts = [x.lower() for x in p.parts]
    r = max((v for k, v in rank.items() if k in '/'.join(parts)), default=1)
    prev = chosen.get(slug)
    if prev is None or r > prev[0] or (r == prev[0] and p.stat().st_mtime >= prev[1].stat().st_mtime):
        chosen[slug] = (r, p)

for slug, (_, p) in sorted(chosen.items()):
    out = dest / slug
    out.write_bytes(p.read_bytes())
    print(f'{p.name} -> {slug} ({out.stat().st_size} bytes)')
print(f'wrote {len(chosen)} files to {dest}')
