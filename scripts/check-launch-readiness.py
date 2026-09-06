#!/usr/bin/env python3
"""Report the launch blockers that cannot be closed in code.

GT-AUD-JM-2026-09-05 found the regulatory and client-input gaps failing quietly: the
footer renders its statutory identifiers conditionally, so blank settings simply produce
no footer text rather than an obviously incomplete one, and the compliance brief the
README describes is a section-heading stub. Nothing in the build noticed.

This does not invent values. It enumerates what is still missing so the gap is visible on
every CI run and in the launch checklist, instead of being discovered after go-live.

    python3 scripts/check-launch-readiness.py           # report, exit 0
    python3 scripts/check-launch-readiness.py --strict  # exit 1 if any blocker is open

--strict is for a pre-deployment gate. It is deliberately not what CI runs for the
preview build, which must keep deploying while these remain open.
"""
import argparse
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# ECTA s43(1) requires an online seller to disclose its full name and legal status and its
# registration number; POPIA requires the information officer to be identifiable.
STATUTORY = {
    'biz_legal_name': 'Registered legal name (ECTA s43)',
    'biz_reg_number': 'Company registration number (ECTA s43)',
    'biz_vat_number': 'VAT registration number (if VAT-registered)',
    'biz_info_officer': 'Information officer (POPIA)',
}

# The disclaimer the theme ships is the US DSHEA formulation. The Medicines Act General
# Regulations prescribe specific wording for an unregistered complementary medicine, so
# this is flagged for the regulatory advisor rather than rewritten here.
SAHPRA_PRESCRIBED = 'This unregistered medicine has not been evaluated by SAHPRA'


def settings():
    p = ROOT / 'theme/config/settings_data.json'
    data = json.loads(p.read_text(encoding='utf-8'))
    return data.get('current', data)


def blockers():
    found = []
    cur = settings()

    for key, label in STATUTORY.items():
        if not str(cur.get(key, '')).strip():
            found.append(('M6', f'{label} — settings_data.json "{key}" is empty; '
                                'the footer renders it conditionally, so it shows nothing'))

    brief = ROOT / 'docs/research/sa-regulatory-compliance.md'
    if brief.exists():
        text = brief.read_text(encoding='utf-8')
        if 'DRAFT IN PROGRESS' in text or len(text) < 2000:
            found.append(('H3', f'Compliance brief is still a stub ({len(text)} bytes, marked '
                                'UNVERIFIED) — the whole regulatory position rests on it'))

    disclaimer = str(cur.get('disclaimer_short', ''))
    if SAHPRA_PRESCRIBED.lower() not in disclaimer.lower():
        found.append(('H3', 'Disclaimer wording is not the statement the Medicines Act General '
                            'Regulations prescribe for an unregistered complementary medicine — '
                            'confirm the required form with the regulatory advisor before launch'))

    mf = ROOT / 'data/shopify/products-metafields.json'
    if mf.exists():
        data = json.loads(mf.read_text(encoding='utf-8'))
        flags = sum(len(p.get('flags') or []) for p in data.get('products', []))
        if flags:
            found.append(('M5', f'{flags} open client-input flags across '
                                f'{len(data.get("products", []))} products '
                                '(ingredients, dose, strength, species names, renames)'))

    # Named conditions on product pages read as implied claims under SA advertising
    # practice even when negated.
    species = ROOT / 'data/shopify/species-entries.json'
    if species.exists():
        text = species.read_text(encoding='utf-8')
        named = {w: len(re.findall(w, text, re.I)) for w in
                 ('cancer', 'diabetes', 'Alzheimer', 'ADHD', 'multiple sclerosis')}
        hits = {w: n for w, n in named.items() if n}
        if hits:
            summary = ', '.join(f'{w} ×{n}' for w, n in sorted(hits.items(), key=lambda x: -x[1]))
            found.append(('M8', f'Disease names appear in species content ({summary}) — '
                                'obtain a regulatory view before publishing these fields on '
                                'product pages'))

    # The photography still shows the label claims the copy removed.
    found.append(('H3', 'Product photography shows label claims the copy removed '
                        '("SUPPORTS … ADHD", "BRAIN") — label reprint and re-shoot required, '
                        'or the copy clean-up has no effect'))
    return found


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--strict', action='store_true', help='exit 1 if any blocker is open')
    args = ap.parse_args()

    found = blockers()
    if not found:
        print('No launch blockers outstanding.')
        return 0

    print(f'{len(found)} launch blocker(s) outstanding — none of these can be closed in code:\n')
    for ident, text in found:
        print(f'  [{ident}] {text}')
    print('\nTracked in docs/15-qa-results.md and docs/17-launch-checklist.md.')
    return 1 if args.strict else 0


if __name__ == '__main__':
    raise SystemExit(main())
