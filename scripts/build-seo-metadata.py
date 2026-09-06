#!/usr/bin/env python3
"""Apply the approved on-page metadata from the SEO research doc to the Shopify data pack.

Section 5.2 of docs/research/seo-keyword-research.md is the sign-off artefact for product
titles and meta descriptions: every entry there is <=60 / <=155 characters, claim-free and
unique. It was written but never applied, so the data pack kept carrying the live store's
titles instead (brand doubled by the theme suffix, live typos retained, and the Lion's Mane
30 ml / 50 ml pages sharing one title).

Parsing the doc rather than restating it here means the two cannot drift apart: change the
table, re-run this, and the data pack follows. Run:

    python3 scripts/build-seo-metadata.py

`--check` exits non-zero if the data pack has fallen behind the doc, for CI.
"""
import argparse
import collections
import io
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOC = ROOT / 'docs/research/seo-keyword-research.md'
OVERLAY = ROOT / 'data/shopify/copy-overlay.json'

TITLE_MAX = 60
DESC_MAX = 155
BRAND = 'Just Mushrooms'


def parse_section(heading):
    """Return {handle: {seo_title, seo_description, h1}} for one §5 table."""
    text = DOC.read_text(encoding='utf-8')
    section = text.split(heading)[1].split('\n## ')[0]
    rows = [
        line for line in section.split('\n')
        if line.startswith('| ') and not line.startswith('|---') and 'SEO title' not in line
    ]
    out = collections.OrderedDict()
    for line in rows:
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if len(cells) < 5:
            continue
        # Five columns, but an SEO title legitimately contains ' | ' separators of its own,
        # so the columns are counted from the right: [-1] internal links, [-2] H1,
        # [-3] meta description; everything between the handle and those is the title.
        handle, links, h1, desc = cells[0], cells[-1], cells[-2], cells[-3]
        title = ' | '.join(c.strip() for c in cells[1:-3])
        out[handle] = {'seo_title': title, 'seo_description': desc, 'h1': h1}
    return out


def products():
    return parse_section('### 5.2 Product pages')


def validate(rows):
    problems = []
    seen = {}
    for handle, row in rows.items():
        title, desc = row['seo_title'], row['seo_description']
        if len(title) > TITLE_MAX:
            problems.append(f'{handle}: title is {len(title)} chars (max {TITLE_MAX})')
        if len(desc) > DESC_MAX:
            problems.append(f'{handle}: description is {len(desc)} chars (max {DESC_MAX})')
        if title in seen:
            problems.append(f'{handle}: title duplicates {seen[title]}')
        seen[title] = handle
        # The theme appends its own brand suffix only when the title has no brand in it,
        # so a title carrying the brand twice would double it on the rendered page.
        if title.count(BRAND) > 1:
            problems.append(f'{handle}: brand appears twice in the title')
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true',
                    help='exit non-zero if the data pack is behind the doc instead of writing')
    args = ap.parse_args()

    rows = products()
    problems = validate(rows)
    if problems:
        print('Approved metadata in %s is invalid:' % DOC.name, file=sys.stderr)
        for p in problems:
            print('  -', p, file=sys.stderr)
        return 1

    overlay = json.loads(OVERLAY.read_text(encoding='utf-8'), object_pairs_hook=collections.OrderedDict)
    missing = set(overlay) - set(rows)
    if missing:
        print('No approved metadata for: %s' % ', '.join(sorted(missing)), file=sys.stderr)
        return 1

    stale = []
    for handle, row in rows.items():
        current = overlay.setdefault(handle, collections.OrderedDict())
        for key in ('seo_title', 'seo_description'):
            if current.get(key) != row[key]:
                stale.append(f'{handle}.{key}')
                current[key] = row[key]

    if args.check:
        if stale:
            print('Data pack is behind %s:' % DOC.name, file=sys.stderr)
            for s in stale:
                print('  -', s, file=sys.stderr)
            print('\nRun: python3 scripts/build-seo-metadata.py', file=sys.stderr)
            return 1
        print('copy-overlay.json matches the approved metadata (%d products).' % len(rows))
        return 0

    with io.open(OVERLAY, 'w', encoding='utf-8') as fh:
        json.dump(overlay, fh, indent=2, ensure_ascii=False)
        fh.write('\n')
    print('Applied approved metadata to %d products (%d fields updated).' % (len(rows), len(stale)))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
