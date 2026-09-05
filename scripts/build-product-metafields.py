#!/usr/bin/env python3
"""Builds data/shopify/products-metafields.json — the compliant per-product copy.

Every ingredient, dose and volume below is transcribed from the live product labels
(data/live-snapshot/products.json). Every benefit claim from those labels was removed;
what replaces it is a description of the product plus a pointer to the graded species
pages. See docs/09-content-drafts.md for the removal log.
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
live = {p['handle']: p for p in json.load(open(os.path.join(ROOT, 'data/live-snapshot/products.json')))['products']}

SP = {'lions-mane': ("Lion's Mane", 'Hericium erinaceus'), 'reishi': ('Reishi', 'Ganoderma lucidum'),
      'chaga': ('Chaga', 'Inonotus obliquus'), 'cordyceps': ('Cordyceps', 'Cordyceps militaris'),
      'turkey-tail': ('Turkey Tail', 'Trametes versicolor'), 'tremella': ('Tremella', 'Tremella fuciformis'),
      'shiitake': ('Shiitake', 'Lentinula edodes'), 'sceletium': ('Sceletium', 'Sceletium tortuosum')}
SIX = ['lions-mane', 'reishi', 'chaga', 'cordyceps', 'turkey-tail', 'tremella']

def ul(items):
    return '<ul>' + ''.join('<li>%s</li>' % i for i in items) + '</ul>'

BASE_WARN = ['Do not use if you are allergic to mushrooms or to alcohol.',
             'Not recommended during pregnancy or while breastfeeding — there are no safety data.',
             'Speak to a healthcare professional before use if you take any medication or have a medical condition.',
             'Keep out of reach of children. Contains approximately 30% ethanol.']
SPECIES_WARN = {
 'reishi': 'Reishi has published case reports of liver injury, including one fatality, and may increase bleeding risk. Do not use if you have liver disease, and speak to your doctor if you take blood thinners, immunosuppressants or chemotherapy.',
 'chaga': 'Chaga has two published cases of oxalate kidney injury after months of heavy powder use. Do not use if you have kidney disease or a history of kidney stones, or if you take high-dose vitamin C.',
 'cordyceps': 'Cordyceps may increase bleeding risk — stop well before surgery and take care with blood thinners. It is not suitable alongside immunosuppressants or cyclosporine without medical supervision.',
 'turkey-tail': 'Turkey tail acts as an immunostimulant, so it is not suitable during immunosuppressive therapy or cancer treatment without your doctor’s knowledge.',
 'lions-mane': "Lion's Mane inhibited platelet aggregation in laboratory work; check with a pharmacist if you take blood thinners or diabetes medication.",
 'tremella': 'Tremella showed glucose- and lipid-lowering effects in rodents; monitor if you take diabetes medication.',
 'shiitake': 'Shiitake can cause a whiplash-patterned rash in sensitive people. Do not use if you have reacted to shiitake before.',
 'sceletium': '<strong>Do not combine with antidepressants.</strong> Sceletium affects serotonin: do not take it with SSRIs, SNRIs, MAOIs (including within the past two weeks), tricyclics, tramadol, triptans, St John’s Wort or 5-HTP without speaking to your prescriber, because of the risk of serotonin syndrome. It may cause drowsiness — do not drive until you know how it affects you.',
}
EOL_ING = ['Reishi (<em>Ganoderma lucidum</em>)', "Lion's Mane (<em>Hericium erinaceus</em>)", 'Cordyceps (<em>Cordyceps militaris</em>)', 'Chaga (<em>Inonotus obliquus</em>)', 'Turkey Tail (<em>Trametes versicolor</em>)', 'Tremella (<em>Tremella fuciformis</em>)', 'Spring water', 'Food-grade ethanol (approximately 30%)']
EOL_DOSE = '<p>15–20 drops once a day, or as needed, as printed on the label.</p>'

def single(slug, ml, mgml, dose=None, sku_note=None):
    name, sci = SP[slug]
    return dict(species=[slug], volume='%d ml' % ml,
                ingredients=ul(['%s (<em>%s</em>) fruit body' % (name, sci), 'Spring water', 'Food-grade ethanol (approximately 30%)']),
                ratio='±%d mg dried material equivalent per 1 ml (label)' % mgml,
                usage=dose or '<p>Follow the directions printed on the product label.</p>')

P = {
 'lions-mane-mushroom-tincture-30ml': dict(single('lions-mane', 30, 1000), form='Tincture', promise="A single-species Lion's Mane fruit-body tincture, extracted in spring water and approximately 30% ethanol.", tags=['focus', 'routine']),
 'lions-mane-mushroom-tincture-50ml': dict(single('lions-mane', 50, 1000), form='Tincture', promise="The 50 ml bottle of our single-species Lion's Mane fruit-body tincture, with a fast-flow dropper cap.", tags=['focus', 'routine']),
 'reishi-mushroom-tincture-30ml': dict(single('reishi', 30, 1000), form='Tincture', promise='A single-species Reishi fruit-body tincture — bitter, as a good reishi extract should be.', tags=['calm', 'routine']),
 'chaga-mushroom-tincture-30ml': dict(single('chaga', 30, 800, '<p>10 drops once a day under the tongue, as printed on the label.</p>'), form='Tincture', promise='A single-species Chaga tincture, made from the wild-harvested birch conk.', tags=['routine']),
 'cordyceps-mushroom-tincture-30ml': dict(single('cordyceps', 30, 1000), form='Tincture', promise='A single-species Cordyceps militaris fruit-body tincture, extracted in spring water and approximately 30% ethanol.', tags=['energy', 'routine']),
 'turkey-tail-mushroom-tincture-30ml': dict(single('turkey-tail', 30, 1000), form='Tincture', promise='A single-species Turkey Tail fruit-body tincture, from cultivated and wild-harvested material.', tags=['routine']),
 'tremella-mushroom-tincture-30ml': dict(single('tremella', 30, 1000), form='Tincture', promise='A single-species Tremella (snow fungus) fruit-body tincture — the beauty mushroom of Chinese tradition.', tags=['skin', 'routine']),
 'elixir-of-life-6-mushroom-blend-50ml': dict(species=SIX, form='Tincture', volume='50 ml', promise='Our six-mushroom house blend: Reishi, Lion’s Mane, Cordyceps, Chaga, Turkey Tail and Tremella in equal measure.', ingredients=ul(EOL_ING), ratio='±200 mg dried material equivalent per 1 ml per species (label)', usage=EOL_DOSE, tags=['routine']),
 'the-workaholic': dict(species=['lions-mane', 'cordyceps'], form='Tincture', volume='50 ml', promise='A 50/50 blend of Lion’s Mane and Cordyceps in one 50 ml bottle.', ingredients=ul(["Lion's Mane (<em>Hericium erinaceus</em>) fruit body", 'Cordyceps (<em>Cordyceps militaris</em>) fruit body', 'Spring water', 'Food-grade ethanol (approximately 30%)']), ratio='±1000 mg dried material equivalent per 1 ml (label)', usage=None, tags=['focus', 'energy']),
 'extreme-gut-fix': dict(species=['lions-mane', 'chaga', 'turkey-tail'], form='Tincture', volume='50 ml', promise='A three-mushroom blend of Lion’s Mane, Chaga and Turkey Tail in one 50 ml bottle.', ingredients=None, ratio=None, usage=None, tags=['gut-tradition', 'routine'], rename='Three-Mushroom Blend (formerly “Extreme Gut Fix”)'),
 'menopause-50ml': dict(species=['lions-mane', 'reishi', 'cordyceps'], form='Tincture', volume='50 ml', promise='A three-mushroom blend of Lion’s Mane, Reishi and Cordyceps in one 50 ml bottle.', ingredients=None, ratio=None, usage=None, tags=['calm', 'routine'], rename='Three-Mushroom Blend (formerly “Meno’pause”)'),
 'relax-no-stress-50ml': dict(species=['lions-mane', 'reishi'], form='Tincture', volume='50 ml', promise='A two-mushroom blend of Lion’s Mane and Reishi in a 50 ml amber bottle with a fast-flow dropper cap.', ingredients=None, ratio=None, usage=None, tags=['calm'], rename='Evening Blend (formerly “Relax no stress”)'),
 'myco-radiance-skin-perfection': dict(species=['tremella', 'reishi', 'chaga', 'shiitake'], form='Tincture', volume='50 ml', promise='A four-mushroom blend of Tremella, Reishi, Chaga and Shiitake in one 50 ml bottle.', ingredients=None, ratio=None, usage=None, tags=['skin'], rename='Four-Mushroom Blend (formerly “Myco-Radiance skin perfection”)'),
 'new-general-maintenance-50ml': dict(species=['turkey-tail', 'lions-mane', 'cordyceps'], form='Tincture', volume='50 ml', promise='A three-mushroom daily blend of Turkey Tail, Lion’s Mane and Cordyceps in one 50 ml bottle.', ingredients=None, ratio=None, usage=None, tags=['routine'], rename='General Maintenance Blend'),
 'sceletium-tortuosum-the-happy-place-50ml': dict(species=['sceletium'], form='Botanical tincture', volume='50 ml', promise='A whole-plant tincture of Sceletium tortuosum (kanna) — a South African succulent, not a mushroom.', ingredients=None, ratio=None, usage='<p>Start with a low dose and increase slowly, as printed on the label. Take it during the day or early evening; late use may affect sleep in some people.</p>', tags=['calm', 'botanical']),
 'elixir-for-pets-tincture-30ml': dict(species=['reishi', 'turkey-tail'], form='Pet tincture', volume='30 ml', promise='A two-mushroom tincture for dogs — Reishi and Turkey Tail, with most of the alcohol evaporated off for palatability.', ingredients=ul(['Reishi 50% (<em>Ganoderma lucidum</em>)', 'Turkey Tail 50% (<em>Trametes versicolor</em>)', 'Spring water', 'Food-grade ethanol (approximately 30%, substantially evaporated in a final step)']), ratio='±1000 mg dried material equivalent per 1 ml (label)', usage='<p>As printed on the label: small dogs 5–7 drops, medium dogs 7–10 drops, large-breed dogs up to 25 drops daily, over wet food.</p>', tags=['pets']),
}
COMBOS = {
 'lions-mane-mushroom-elixir-combo-50ml-30ml': ('lions-mane', "Lion's Mane"),
 'reishi-mushroom-elixir-combo-50ml-30ml': ('reishi', 'Reishi'),
 'chaga-mushroom-elixir-combo-50ml-30ml': ('chaga', 'Chaga'),
 'cordyceps-mushroom-elixir-combo-50ml-30ml': ('cordyceps', 'Cordyceps'),
 'turkey-tail-mushroom-elixir-combo-50ml-30ml': ('turkey-tail', 'Turkey Tail'),
 'tremella-mushroom-elixir-combo-50ml-30ml': ('tremella', 'Tremella'),
}
for h, (slug, name) in COMBOS.items():
    P[h] = dict(species=list(dict.fromkeys([slug] + SIX)), form='Tincture combo', volume='50 ml + 30 ml',
                promise='Our 50 ml six-mushroom Elixir of Life paired with a 30 ml single-species %s tincture.' % name,
                ingredients=ul(['<strong>50 ml Elixir of Life:</strong> ' + ', '.join(EOL_ING[:6]) + ', spring water, food-grade ethanol (approximately 30%)',
                                '<strong>30 ml %s:</strong> %s (<em>%s</em>) fruit body, spring water, food-grade ethanol (approximately 30%%)' % (name, name, SP[slug][1])]),
                ratio='Elixir of Life ±200 mg per 1 ml per species; single species ±1000 mg per 1 ml (label)',
                usage=EOL_DOSE, tags=['routine'])
P['pet-elixer-of-life-combo-50ml-30ml'] = dict(species=['reishi', 'turkey-tail'] + [s for s in SIX if s not in ('reishi', 'turkey-tail')], form='Tincture combo', volume='50 ml + 30 ml',
    promise='Our 50 ml six-mushroom Elixir of Life for you, paired with the 30 ml Reishi and Turkey Tail tincture for your dog.',
    ingredients=ul(['<strong>50 ml Elixir of Life:</strong> ' + ', '.join(EOL_ING[:6]) + ', spring water, food-grade ethanol (approximately 30%)',
                    '<strong>30 ml Pets:</strong> Reishi 50% (<em>Ganoderma lucidum</em>), Turkey Tail 50% (<em>Trametes versicolor</em>), spring water, food-grade ethanol (approximately 30%, substantially evaporated)']),
    ratio='Elixir of Life ±200 mg per 1 ml per species; pet tincture ±1000 mg per 1 ml (label)', usage=EOL_DOSE, tags=['routine', 'pets'])

DROPS = {30: 'about 600 drops', 50: 'about 1 000 drops'}
def build(handle, cfg):
    slugs = cfg['species']
    names = [SP[s][0] for s in slugs]
    sci = ', '.join('%s (%s)' % (SP[s][0], SP[s][1]) for s in slugs)
    is_pet = 'pets' in cfg['tags']
    is_plant = slugs == ['sceletium']
    flags = []
    warn = [SPECIES_WARN[s] for s in slugs if s in SPECIES_WARN]
    if is_pet:
        warn = ['<strong>For animal use only.</strong> Consult your veterinarian before use, and do not use it in place of veterinary care.',
                'Ethanol is toxic to dogs and cats. The residual alcohol content of this product after the evaporation step has not been measured — <em>NEEDS CLIENT INPUT</em>. Do not give it to cats.',
                'Reishi and Turkey Tail interact with immunosuppressive treatment; tell your vet what your animal is taking.'] + warn[1:]
        flags.append('NEEDS CLIENT INPUT: residual ethanol % after the evaporation step, and whether the product requires registration as a stock remedy under Act 36 of 1947.')
    else:
        warn = warn + BASE_WARN
    if cfg.get('ingredients') is None:
        flags.append('NEEDS CLIENT INPUT: full ingredient list and species ratios for this blend — the live label gives prose only.')
    if cfg.get('usage') is None:
        flags.append('NEEDS CLIENT INPUT: dose instructions — the live label gives none.')
    if cfg.get('ratio') is None:
        flags.append('NEEDS CLIENT INPUT: declared strength (mg dried equivalent per ml).')
    if cfg.get('rename'):
        flags.append('NEEDS CLIENT CONFIRMATION: product rename proposed — %s. The old name makes a disease claim.' % cfg['rename'])
    if 'cordyceps' in slugs:
        flags.append('NEEDS CLIENT CONFIRMATION: the label prints "Ophiocordyceps militaris", which is not a valid name. Confirm the species is Cordyceps militaris before reprinting.')
    if 'chaga' in slugs:
        flags.append('NEEDS CLIENT INPUT: chaga wild-harvest origin and permit, plus oxalate content of the finished tincture.')
    ml = 50 if '50' in cfg['volume'] else 30
    title = live[handle]['title']
    faq = [
      {'question': 'How many doses are in a bottle?', 'answer': '<p>A %s bottle holds %s, so the number of servings depends on the dose printed on your label.</p>' % (cfg['volume'], DROPS[ml])},
      {'question': 'How do I take it?', 'answer': '<p>%s</p>' % ('Add the drops to wet food, or give them directly by mouth.' if is_pet else 'Drops go under the tongue, or into a little water or tea. Follow the label.')},
      {'question': 'Does it contain alcohol?', 'answer': '<p>Yes — approximately 30%% ethanol by volume%s. It is not suitable for anyone avoiding alcohol.</p>' % (', substantially evaporated in a final step for palatability, though the residual amount has not been measured' if is_pet else '')},
      {'question': 'Who should not take this?', 'answer': '<p>%s</p>' % ('Cats, and any animal under veterinary treatment without your vet’s approval.' if is_pet else 'Anyone allergic to mushrooms or alcohol, anyone pregnant or breastfeeding, and anyone whose medication appears in the warnings above. See the species pages for the full interaction list.')},
    ]
    if len(slugs) > 1:
        faq.insert(1, {'question': 'What is in the blend?', 'answer': '<p>%s. Each has its own species page with the graded evidence and safety notes.</p>' % sci})
    tier_note = 'The species in this bottle are graded on their own pages — read those before you buy.'
    ev = '<p>We do not repeat benefit claims on product pages. %s</p><p>%s</p>' % (tier_note, 'Most functional-mushroom research is small, short and early, and no published trial used a 30% ethanol tincture, so trial results cannot be transferred to this product.')
    nots = ['It is not a %s medicine and has not been evaluated by SAHPRA.' % ('veterinary' if is_pet else 'registered')]
    if cfg.get('rename'):
        nots.append('The product’s former name suggested a health outcome it cannot deliver; nothing here treats or manages any condition.')
    if is_plant:
        nots.append('It is a plant tincture, not a mushroom product, and it is not an antidepressant or a treatment for anxiety.')
    if is_pet:
        nots.append('It does not treat, manage or slow any illness in animals, including cancer, arthritis or anxiety.')
    seo_name = re.sub(r'\s*\(.*?\)\s*', ' ', title).strip()
    return {
      'handle': handle,
      'title': title,
      'metafields': {
        'product_promise': cfg['promise'],
        'form': cfg['form'],
        'volume': cfg['volume'],
        'alcohol_percent': 30,
        'extraction_ratio': cfg.get('ratio'),
        'scientific_name': sci,
        'ingredients': cfg.get('ingredients') or '<p>Full ingredient list not yet supplied — <strong>NEEDS CLIENT INPUT</strong>. The bottle label is the authority until then.</p>',
        'usage_instructions': cfg.get('usage') or '<p>Follow the directions printed on the product label.</p>',
        'warnings': ul(warn),
        'evidence_summary': ev,
        'what_it_does_not_do': ul(nots),
        'faq': faq,
        'primary_benefit_tags': cfg['tags'],
        'seo_title': (seo_name + ' | Just Mushrooms SA')[:60],
        'seo_description': ('%s Made in Plettenberg Bay. Ships across South Africa.' % cfg['promise'])[:155],
        'seo_focus_keyword': (names[0] + ' tincture South Africa').lower() if len(names) == 1 else 'mushroom tincture South Africa',
      },
      'flags': flags,
    }

products = [build(h, c) for h, c in P.items()]
missing = set(live) - {p['handle'] for p in products}
assert not missing, 'missing products: %s' % missing
products.sort(key=lambda p: p['handle'])
out = os.path.join(ROOT, 'data/shopify/products-metafields.json')
json.dump({'_comment': 'Compliant product copy. Generated by scripts/build-product-metafields.py — edit the script, not this file. Label facts transcribed from data/live-snapshot/products.json; all benefit claims removed (see docs/09-content-drafts.md).', 'products': products}, open(out, 'w'), indent=1, ensure_ascii=False)
print('wrote', len(products), 'products ->', out)
print('products with flags:', sum(1 for p in products if p['flags']))
