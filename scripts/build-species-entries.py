#!/usr/bin/env python3
"""Builds data/shopify/species-entries.json from the cited evidence matrices.

Prose is authored here (compliance-reviewed); reference lists are pulled straight out of
docs/research/evidence/<slug>.md so the [n] markers used in the copy always match the
numbering on the rendered species page. Re-run after editing an evidence file.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EV = os.path.join(ROOT, 'docs/research/evidence')
REF_SECTION = {'lions-mane': 12, 'reishi': 12, 'chaga': 12, 'cordyceps': 12,
               'turkey-tail': 12, 'tremella': 12, 'shiitake': 12, 'sceletium': 14}
REVIEWED = '02/09/2026'

def references(slug):
    text = open(os.path.join(EV, slug + '.md')).read()
    m = re.search(r'\n## %d\. References\n(.*?)(\n## |\Z)' % REF_SECTION[slug], text, re.S)
    if not m:
        sys.exit('no reference section in ' + slug)
    by_number = {}
    for line in m.group(1).split('\n'):
        hit = re.match(r'^\[?(\d+)\]?[.)]?\s+(.*)$', line.strip())
        if not hit:
            continue
        number, rest = int(hit.group(1)), hit.group(2)
        url = re.search(r'(https?://[^\s\)\]<>,]+)', rest)
        label = re.sub(r'https?://\S+', '', rest)
        label = re.sub(r'\*\*|\*|`|\[|\]', '', label)
        label = re.sub(r'\s+', ' ', label).strip(' —-–.,')[:190]
        by_number.setdefault(number, {'label': label, 'url': url.group(1).rstrip('.,;') if url else ''})
    top = max(by_number)
    return [by_number.get(i, {'label': 'See docs/research/evidence/%s.md reference %d' % (slug, i), 'url': ''})
            for i in range(1, top + 1)]

STANDARD_NOT = [
    'It does not cure, treat or prevent any disease, and it is not a medicine.',
    'It is not a replacement for medical care or for any prescribed medicine.',
    'It does not guarantee results. Most of the research is small, short and early.',
    'No published trial used a 30% ethanol tincture, so trial results cannot be transferred to this product.',
]

def not_list(extra):
    return '<ul>' + ''.join('<li>%s</li>' % i for i in extra + STANDARD_NOT) + '</ul>'

def ul(items):
    return '<ul>' + ''.join('<li>%s</li>' % i for i in items) + '</ul>'

SPECIES = [
{
 'handle': 'lions-mane', 'publish': True,
 'common_name': "Lion's Mane", 'scientific_name': 'Hericium erinaceus', 'kingdom': 'Fungi',
 'short_description': "The shaggy white tooth fungus of East Asian kitchens and mountain-priest folklore. Studied in small, short trials for cognitive performance; a culinary mushroom first.",
 'taxonomy': 'Family Hericiaceae, order Russulales, class Agaricomycetes (Basidiomycota). GBIF Backbone taxon 5248508, status ACCEPTED [1]; Index Fungorum record 356812 [2]. Both the genus name and the epithet mean "hedgehog" in Latin [3].',
 'form_sold': 'Fruit-body tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Seafood-like when cooked; the tincture is earthy and bitter',
 'traditional_use_short': 'Eaten in China since at least the Song dynasty; a tonic food in Japan',
 'traditional_uses': "<p>Lion's mane is a food before it is anything else. It has been eaten in China for centuries — a Sui-dynasty record describes people enjoying monkey-head mushroom soup, and up to about 300&nbsp;g of fresh fruit body is still cooked as a “mushroom steak” [4][12]. In Japan it is <em>yamabushitake</em>, named after the <em>yamabushi</em>, the ascetic mountain monks of Shugendō whose garments the shaggy fruit body is said to resemble [3].</p>",
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'A traditional culinary and tonic mushroom in China and Japan.', 'tier': 'Traditional use', 'ref': 4},
   {'text': 'Small, short clinical studies have explored its effect on cognitive performance in older adults.', 'tier': 'Limited human evidence', 'ref': 5},
   {'text': 'Small preliminary studies have looked at mood and stress.', 'tier': 'Limited human evidence', 'ref': 6},
   {'text': 'Contains hericenones, compounds studied in the laboratory for their effect on nerve-growth-factor synthesis.', 'tier': 'Animal/in-vitro evidence', 'ref': 17},
   {'text': 'A source of beta-glucans and the antioxidant ergothioneine.', 'tier': 'Animal/in-vitro evidence', 'ref': 19},
 ],
 'human_evidence_summary': "<p>The most cited trial is Mori 2009: thirty Japanese adults with mild cognitive impairment took 3&nbsp;g a day of dried fruit-body powder for sixteen weeks and scored better on a cognitive scale than placebo — an effect that faded once they stopped [5]. Saitsu 2019 (n=31, healthy over-50s) saw an MMSE improvement but no change on two other memory tests [7]. Studies in healthy young adults have been null or mixed: Grozier 2022 found nothing at 10&nbsp;g a day for four weeks [10], and Docherty 2023 reported mixed results at 1.8&nbsp;g a day [11].</p><p>Two things limit all of it. The trials are small — the largest had 77 participants — and short. And the one Alzheimer's pilot that is often quoted used erinacine-A-enriched <em>mycelium</em>, a different material from the fruit body in this bottle [9]. Hericenones sit in the fruit body; erinacines sit in the mycelium [17][18].</p>",
 'what_it_does_not_do': not_list([
   "It does not treat, prevent, slow or cure dementia or Alzheimer's disease. The only Alzheimer's trial used mycelium, not fruit body, and had 41 completers [9].",
   'It is not a treatment for depression or anxiety; the mood data come from thirty women eating cookies for four weeks [6].',
   'It is not a treatment for diabetes, cancer, ADHD, ALS or multiple sclerosis — no human trials exist [16].',
   'It does not "regrow nerves" or raise NGF or BDNF in people. The NGF work is cellular and animal; the one human study measuring BDNF saw no change [8].',
 ]),
 'active_compounds': [
   {'name': 'Hericenones', 'text': 'Aromatic compounds from the fruit body, studied in the laboratory for their effect on nerve-growth-factor synthesis in cell culture [17][18].', 'solubility': 'Lipophilic — a 30% ethanol menstruum is a weak solvent, so the yield in this product is unverified without an assay'},
   {'name': 'Erinacines', 'text': 'Cyathane diterpenoids found in the mycelium, not the fruit body. They are not expected in a fruit-body tincture [9][17].', 'solubility': 'Not applicable to a fruit-body product'},
   {'name': 'Beta-glucans and heteropolysaccharides', 'text': 'The large sugars common to most mushrooms [19][20].', 'solubility': 'Water-extractable; a crude polysaccharide fraction begins precipitating at around 30% ethanol, so a tincture captures only part of it'},
   {'name': 'Ergothioneine and sterols', 'text': "Lion's mane had the highest L-ergothioneine of seven mushrooms in one analysis [16][19].", 'solubility': 'Water-soluble'},
 ],
 'how_to_use': '<p>Follow the directions printed on your bottle. For context, the published trials used 1.8–3.2&nbsp;g a day of dried fruit-body powder for four to sixteen weeks [5][7][11]. Whether 1&nbsp;ml of this tincture is equivalent to 1&nbsp;g of dried mushroom is <strong>not yet verified</strong> — the label figure is the manufacturer’s input ratio, not an assayed potency.</p>',
 'safety_notes': "<p>Adverse events in trials were mostly mild digestive upset — abdominal discomfort and diarrhoea — with normal laboratory values [5][9]. LiverTox rates lion's mane “E”, an unlikely cause of clinically apparent liver injury [16].</p><p>Allergic reactions are published though rare: occupational contact dermatitis from handling fresh fruit bodies [22], one case of acute respiratory distress after four months of a commercial extract [23], and one case of anaphylaxis after eating it [24]. Anyone with a mushroom or mould allergy should avoid it. No human safety data exist for pregnancy or breastfeeding, so it is not recommended [16].</p><p>This product contains approximately 30% ethanol. It is unsuitable for children, during pregnancy, for anyone in recovery from alcohol use, and for people taking disulfiram or metronidazole.</p>",
 'contraindications': ul([
   'Mushroom or mould allergy — do not use.',
   'Pregnancy and breastfeeding — no safety data; not recommended [16].',
   'Anticoagulants and antiplatelets (warfarin, DOACs, aspirin, clopidogrel) and surgery — hericenone B inhibited platelet aggregation in the laboratory; no human interaction study exists [21].',
   'Diabetes medication — extracts lowered glucose in diabetic rodents; monitor and speak to your pharmacist [27][28].',
   'Disulfiram, metronidazole, liver disease, alcohol-use recovery — because of the ethanol base.',
 ]),
 'key_cautions': 'Mushroom allergy; pregnancy (no data); blood thinners and diabetes medicines — check first',
 'faq': [
  {'question': 'Does it improve memory?', 'answer': "<p>The evidence is limited. A 2009 trial of 30 adults with mild cognitive impairment reported better cognitive scores after 16 weeks at 3&nbsp;g a day, which faded after stopping [5]. A 2019 trial of 31 healthy over-50s improved on one test and not on two others [7]. Trials in healthy young adults were null or mixed [10][11].</p>"},
  {'question': 'Is it safe?', 'answer': '<p>Trials report mostly mild digestive upset [5][9], and LiverTox finds no liver-injury signal [16]. Rare allergic reactions have been published, including contact dermatitis, one case of severe lung inflammation and one anaphylaxis [22][23][24].</p>'},
  {'question': 'Can I take it with blood thinners or diabetes medication?', 'answer': '<p>Ask your pharmacist or doctor first. Hericenone B inhibited platelet aggregation in the laboratory [21] and extracts lowered glucose in diabetic rodents [27][28]. No human interaction study exists.</p>'},
  {'question': 'Is it safe in pregnancy or while breastfeeding?', 'answer': '<p>No safety data were found in any source we consulted [16]. It is not recommended.</p>'},
  {'question': 'Fruit body or mycelium — does it matter?', 'answer': '<p>Yes. Hericenones are in the fruit body, erinacines in the mycelium [17][18]. This product is a fruit-body tincture, so the mycelium-based Alzheimer’s pilot does not apply to it [9].</p>'},
  {'question': 'How much did the trials use?', 'answer': '<p>Between 1.8 and 3.2&nbsp;g a day of dried fruit-body powder for four to sixteen weeks in the Japanese and UK trials [5][6][7][11]; 10&nbsp;g a day for four weeks in a null US exercise study [10]. Whether 1&nbsp;ml of tincture equals 1&nbsp;g of dried mushroom is unverified.</p>'},
 ],
 'fun_facts': [
  {'text': 'Both halves of the Latin name mean hedgehog: Hericium and erinaceus.', 'source': 'Wikipedia — Hericium erinaceus', 'url': 'https://en.wikipedia.org/wiki/Hericium_erinaceus'},
  {'text': 'In Chinese it is hou tou gu, "monkey-head mushroom", and a Sui-dynasty record already describes people enjoying monkey-head mushroom soup.', 'source': "Evidence matrix ref [4]", 'url': 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4433408/'},
  {'text': 'It is a tooth fungus — spores hang from spines rather than gills — yet DNA places it alongside the gilled Russula and Lactarius.', 'source': 'GBIF Backbone Taxonomy', 'url': 'https://api.gbif.org/v1/species/match?name=Hericium%20erinaceus'},
 ],
 'seo_title': "Lion's Mane (Hericium erinaceus) — The Evidence",
 'seo_description': "What Lion's Mane is, what small human trials actually found, what it does not do, and how to use it safely. Cited, graded, South African.",
},
{
 'handle': 'reishi', 'publish': True,
 'common_name': 'Reishi', 'scientific_name': 'Ganoderma lucidum', 'kingdom': 'Fungi',
 'short_description': 'The bitter, varnished bracket fungus of East Asian tradition — the "mushroom of immortality". Woody, never a culinary mushroom, and the one species here with a real liver caution.',
 'taxonomy': 'Family Polyporaceae, order Polyporales (Basidiomycota) [17]. Commercially cultivated reishi is now often treated as a separate species, Ganoderma lingzhi (some authors: G. sichuanense); the older name G. lucidum remains in general use by regulators and in the clinical literature [17][18].',
 'form_sold': 'Fruit-body tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Distinctly bitter — that is the triterpene fraction you are tasting',
 'traditional_use_short': 'Revered in China, Japan and Korea for centuries; taken as tea or extract, not eaten',
 'traditional_uses': '<p>Reishi is not a culinary mushroom. Among cultivated mushrooms it is unusual in that its pharmaceutical rather than nutritional reputation is what made it famous; it is woody and bitter, taken as tea, powder or extract [16]. Wild lingzhi was so rare before cultivation that only the nobility could afford it [16].</p>',
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'A traditional tonic mushroom of China, Japan and Korea, taken as a tea or extract.', 'tier': 'Traditional use', 'ref': 16},
   {'text': 'Studied in people for a sense of fatigue and general well-being, in neurasthenia and in breast-cancer patients with treatment-related fatigue.', 'tier': 'Limited human evidence', 'ref': 5},
   {'text': 'Studied alongside conventional cancer care for effects on immune-cell markers and self-reported quality of life.', 'tier': 'Limited human evidence', 'ref': 2},
   {'text': 'Contains triterpenoids (ganoderic acids) and beta-glucans investigated in laboratory research.', 'tier': 'Animal/in-vitro evidence', 'ref': 16},
 ],
 'human_evidence_summary': '<p>Two Cochrane reviews set the ceiling on what may honestly be said. The first, of five randomised trials, concluded that there is not sufficient evidence to justify reishi as a first-line treatment for cancer, and that it should never replace conventional treatment [2]. The second, across 398 participants, found no statistically or clinically significant effect on HbA1c, lipids, BMI or blood pressure [4].</p><p>Where something has been observed, it is modest and specific: fatigue and well-being scores in people with neurasthenia [5] and in breast-cancer patients with treatment-related fatigue [6]. In Gulf War Illness, the higher dose made symptoms significantly worse [9] — a result worth stating plainly. No modern randomised trial for sleep was located.</p>',
 'what_it_does_not_do': not_list([
   'It is not a cancer treatment. Cochrane found insufficient evidence to justify reishi as a first-line treatment, and whether it prolongs survival remains uncertain [2].',
   'It does not lower blood pressure, blood glucose, cholesterol or LDL as a claim — a Cochrane review of 398 participants found no significant effect [4].',
   'It does not "boost immunity". The measured changes are small shifts in lymphocyte subsets in cancer patients; there is no evidence it prevents infection [2].',
   'It is not proven for sleep in any modern randomised trial we could find.',
 ]),
 'active_compounds': [
   {'name': 'Triterpenoids (ganoderic acids)', 'text': 'The bitter, lanostane-type compounds whose profile can distinguish the fungus from look-alikes [16][19].', 'solubility': 'Ethanol-extracted, poorly water-soluble — the fraction a tincture is best placed to carry'},
   {'name': 'Beta-glucans and polysaccharides', 'text': 'The main immunomodulatory macromolecules studied in the laboratory [16].', 'solubility': 'Obtained industrially by hot water then precipitated with alcohol — so a 30% ethanol tincture is not the process used to isolate them'},
   {'name': 'Peptidoglycans and proteoglycans', 'text': 'Water-soluble glycopeptide fractions from aqueous fruit-body extracts [16].', 'solubility': 'Water-soluble'},
 ],
 'how_to_use': '<p>Follow the directions on your bottle. Because a 30% ethanol menstruum is a mixed extract — good for the bitter triterpenes, poor for the large beta-glucans — no quantitative potency claim is made for this product until it has been assayed [16].</p>',
 'safety_notes': '<p><strong>Reishi carries the most important safety caution of any species we sell.</strong> Published case reports include acute liver injury in a man who took Ganoderma powder with alcohol [12], a fatal fulminant hepatitis linked to lingzhi powder in Thailand in a patient who had previously taken traditionally boiled lingzhi without harm [13], and further hepatotoxicity reports from Hong Kong [14][15]. Concentrated and powdered products are implicated where traditional decoctions were not, and ethanol co-ingestion is a documented aggravating factor [12]. Stop immediately and seek medical help if you develop nausea, dark urine, or yellowing of the eyes or skin.</p><p>Reishi may increase bleeding risk and may prolong INR, PT and APTT [1]. Common side effects reported are nausea and insomnia [1]. No pregnancy or breastfeeding safety data were located — do not use. Reishi spore powder elevates the tumour marker CA72-4, which can confound cancer monitoring [1].</p>',
 'contraindications': ul([
   'Liver disease, or any history of drug-induced liver injury — do not use. Hepatotoxicity case reports exist, including one fatality [12][13][14].',
   'Warfarin, DOACs and antiplatelets — bleeding risk; reishi may prolong INR, PT and APTT [1].',
   'Immunosuppressants, transplant and autoimmune treatment — reishi may oppose the therapy; not without medical supervision [1].',
   'Chemotherapy — may interact with agents that rely on free radicals; tell your oncologist [1].',
   'Cancer monitoring — spore products elevate the CA72-4 tumour marker [1].',
   'Pregnancy and breastfeeding — no data; do not use.',
   'Alcohol-use recovery, disulfiram, metronidazole — because of the ~30% ethanol base, compounded here by the liver signal.',
 ]),
 'key_cautions': 'Liver-injury case reports; blood thinners; immunosuppressants; chemotherapy; pregnancy — do not use',
 'faq': [
  {'question': 'Is reishi the same as lingzhi?', 'answer': '<p>Yes — lingzhi is the Chinese name, reishi the Japanese. The cultivated East Asian fungus is now often treated as its own species, G. lingzhi (2012), with some authors arguing the correct name is G. sichuanense; G. lucidum remains the name in common and clinical use [17][18].</p>'},
  {'question': 'Does reishi treat cancer?', 'answer': '<p>No. A Cochrane review of five randomised trials concluded there is not sufficient evidence to justify reishi as a first-line cancer treatment, and it must never replace conventional treatment [2].</p>'},
  {'question': 'Can I take it with chemotherapy?', 'answer': "<p>Only with your oncologist's knowledge. Reishi may interact with chemotherapy agents that depend on free radicals, and spore products can distort the CA72-4 tumour marker [1].</p>"},
  {'question': 'Will it lower my blood pressure or blood sugar?', 'answer': '<p>Not as a claim. A Cochrane review across 398 participants found no significant effect on blood pressure, HbA1c or lipids [4].</p>'},
  {'question': 'Is reishi hard on the liver?', 'answer': '<p>Rarely, yes. Published cases include acute liver injury and one fatal fulminant hepatitis linked to concentrated lingzhi products [12][13][14]. Stop and seek medical help if you develop nausea, dark urine or yellowing of the eyes or skin.</p>'},
  {'question': 'Why a tincture rather than a hot-water extract?', 'answer': '<p>Ethanol pulls out the bitter triterpene fraction, while the large beta-glucans are traditionally obtained by hot water and actually precipitate in alcohol [16]. A 30% tincture is a mixed extract, and its content should be confirmed by assay before any potency claim.</p>'},
 ],
 'fun_facts': [
  {'text': 'Wild lingzhi was so rare before cultivation that only the nobility could afford it, and legend placed the sacred fungus on the three isles of the blest off the Chinese coast.', 'source': 'NCBI Bookshelf — Ganoderma monograph', 'url': 'https://www.ncbi.nlm.nih.gov/books/NBK92757/'},
  {'text': "Reishi's bitterness is chemistry you can taste: the triterpenes responsible are the same class whose profile can tell the fungus apart from look-alikes.", 'source': 'NCBI Bookshelf — Ganoderma monograph', 'url': 'https://www.ncbi.nlm.nih.gov/books/NBK92757/'},
  {'text': 'The mushroom the world calls Ganoderma lucidum only got its own East Asian species name in 2012, and mycologists are still arguing about it.', 'source': 'GBIF species record', 'url': 'https://api.gbif.org/v1/species/search?q=Ganoderma%20lingzhi'},
 ],
 'seo_title': 'Reishi (Ganoderma lucidum) — The Evidence',
 'seo_description': 'Reishi explained honestly: what two Cochrane reviews found, the documented liver caution, interactions to know, and the products that contain it.',
},
{
 'handle': 'chaga', 'publish': True,
 'common_name': 'Chaga', 'scientific_name': 'Inonotus obliquus', 'kingdom': 'Fungi',
 'short_description': 'The charcoal-black conk that grows on living birch in the cold north. A traditional Russian and Northern European tea, and the species here with the least human research.',
 'taxonomy': 'Family Hymenochaetaceae, order Hymenochaetales (Basidiomycota) [1][2][5]. A parasite of living birch across Siberia, Scandinavia, Ukraine, Japan, Korea, Canada and the northern United States [3][5].',
 'form_sold': 'Sterile-conk tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Dark, faintly vanilla-woody; traditionally brewed as a tea',
 'traditional_use_short': 'Brewed as a tea in Russia and Northern Europe, notably by the Khanty people',
 'traditional_uses': '<p>Chaga has been brewed as a tea in Russia and Northern Europe for centuries [3][11]. It owes much of its Western fame to a novel: Solzhenitsyn’s <em>Cancer Ward</em> (1966), in which patients discuss a rural doctor’s chaga-drinking patients [9][12].</p><p>One point of accuracy the trade usually gets wrong: the black mass sold as chaga is a <strong>sterile conk</strong> — compacted mycelium and host wood — not a fruiting body. Copy that says “chaga fruiting body” is simply incorrect [6][7].</p>',
 'evidence_level': 'Animal/in-vitro evidence',
 'verified_benefits': [
   {'text': 'Traditionally brewed as a tea in Russia and Northern Europe.', 'tier': 'Traditional use', 'ref': 3},
   {'text': 'A natural source of antioxidant polyphenols and melanin.', 'tier': 'Animal/in-vitro evidence', 'ref': 5},
   {'text': 'Contains birch-derived triterpenoids such as betulin and betulinic acid.', 'tier': 'Animal/in-vitro evidence', 'ref': 6},
   {'text': 'Being studied in laboratory research for its effects on immune cells.', 'tier': 'Animal/in-vitro evidence', 'ref': 25},
 ],
 'human_evidence_summary': '<p>We found no randomised controlled trial of chaga in humans. That is the honest headline, and it is why this page carries the lowest evidence grade of any species we sell. Everything published is laboratory work, cell culture or animal study.</p><p>The human literature that does exist is mostly about harm rather than benefit: two biopsy-confirmed case reports of oxalate nephropathy after months of heavy powder use [11][14]. Anything about blood sugar, inflammation, immunity or cancer in people is unverified and not published on this site.</p>',
 'what_it_does_not_do': not_list([
   'It does not treat, prevent or cure cancer. No human trial exists; Memorial Sloan Kettering lists cancer only as a folk use [3].',
   'It does not "detox", "cleanse the kidneys" or support kidney health — the only human kidney data are cases of kidney injury [11][14].',
   'It has no human evidence for blood-sugar control, immunity, energy or longevity [5][19].',
   'It is not a "fruiting body" product: chaga is a sterile conk [6][7].',
 ]),
 'active_compounds': [
   {'name': 'Melanin', 'text': 'The DHN-type pigment responsible for the cracked black crust [6].', 'solubility': 'Largely insoluble; studied in the laboratory only'},
   {'name': 'Betulin and betulinic acid', 'text': 'Triterpenoids taken up from the birch host; the conk contains more betulinic acid than the bark it grows on [6].', 'solubility': 'Ethanol-soluble — the fraction a tincture carries best'},
   {'name': 'Polyphenols and polysaccharides', 'text': 'Antioxidant phenolics and beta-glucans studied in cell and animal models [5][25].', 'solubility': 'Polysaccharides are water-extractable and precipitate in alcohol'},
 ],
 'how_to_use': '<p>Follow the directions on your bottle. Because no human trial exists, there is no research-based dose to point to, and we do not invent one.</p>',
 'safety_notes': '<p><strong>Oxalate nephropathy is the key documented risk.</strong> Two biopsy-confirmed cases are published: a 72-year-old woman taking four to five teaspoons of powder daily for six months [11], and a 69-year-old man taking 10–15&nbsp;g a day with high-dose vitamin C for three months, who developed nephrotic syndrome and acute oxalate nephropathy [14]. Both involved large daily doses of whole powder. The oxalate load of a 30% ethanol tincture at label doses has not been measured — that is a gap, not a reassurance.</p><p>Do not use if you have kidney disease or a history of kidney stones, or if you take high-dose vitamin C [14]. Glucose-lowering effects in rodents make additive effects with diabetes medication plausible [5][19]. No pregnancy or breastfeeding data were located; avoid. This product contains approximately 30% ethanol.</p>',
 'contraindications': ul([
   'Kidney disease, kidney stones, or a history of either — do not use [11][14].',
   'High-dose vitamin C — implicated alongside chaga in one oxalate-nephropathy case [14].',
   'Diabetes medication — glucose-lowering in rodents; monitor and ask your pharmacist [5][19].',
   'Anticoagulants — commonly listed in professional monographs; treat as a precaution and check with your pharmacist.',
   'Pregnancy and breastfeeding — no data; avoid.',
   'Liver disease, alcohol-use recovery, disulfiram, metronidazole, children — because of the ethanol base.',
 ]),
 'key_cautions': 'Kidney disease or stones — do not use (oxalate nephropathy cases); no human trials exist',
 'faq': [
  {'question': 'Are there human trials of chaga?', 'answer': '<p>We could not find a single randomised controlled trial in people. All the published research is laboratory, cell-culture or animal work, which is why we grade chaga at our lowest evidence tier.</p>'},
  {'question': 'Is chaga a mushroom?', 'answer': '<p>Not in the usual sense. The black mass is a sterile conk — compacted mycelium and birch wood — rather than a fruiting body. The true fertile layer forms under the bark, usually only after the tree dies [6][7].</p>'},
  {'question': 'Who should not take it?', 'answer': '<p>Anyone with kidney disease or a history of kidney stones. Two published cases of biopsy-confirmed oxalate kidney injury followed months of heavy chaga powder use [11][14].</p>'},
  {'question': 'Does chaga help with cancer?', 'answer': '<p>No. There is no human evidence, and Memorial Sloan Kettering lists cancer only as a folk use [3]. We do not make, and you should not accept, that claim from anyone.</p>'},
  {'question': 'Is chaga sustainable?', 'answer': '<p>It is a genuine concern. Commercial chaga is almost entirely wild-harvested, and a large harvestable conk represents ten to twenty years of growth [6]. Ask any seller — including us — where theirs comes from.</p>'},
  {'question': 'Why does it taste of vanilla?', 'answer': '<p>The traditional preparation is a long, dark tea. The tincture concentrates the ethanol-soluble birch-derived triterpenes, so the flavour is woodier and more bitter than a brewed cup.</p>'},
 ],
 'fun_facts': [
  {'text': "Chaga's charcoal-black, cracked crust owes its colour to large amounts of melanin — the same pigment family that darkens many fungi.", 'source': 'Evidence matrix ref [6]', 'url': 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8399177/'},
  {'text': 'The conk contains more betulinic acid than the bark of the birch tree it grows on.', 'source': 'Evidence matrix ref [6]', 'url': 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8399177/'},
  {'text': "Chaga owes much of its Western fame to a novel: Solzhenitsyn's Cancer Ward (1966), in which patients discuss a rural doctor's chaga-drinking patients.", 'source': 'NBN Atlas / evidence matrix ref [9]', 'url': 'https://species.nbnatlas.org/species/NHMSYS0001485503'},
 ],
 'seo_title': 'Chaga (Inonotus obliquus) — The Evidence',
 'seo_description': 'Chaga without the hype: a sterile birch conk with a long tea tradition, no human trials, and a real kidney caution. Cited and graded.',
},
{
 'handle': 'cordyceps', 'publish': True,
 'common_name': 'Cordyceps', 'scientific_name': 'Cordyceps militaris', 'kingdom': 'Fungi',
 'short_description': 'The orange club fungus that grows from insects — cultivated at scale, and the source of cordycepin. Studied in small exercise trials, with results that are honestly mixed.',
 'taxonomy': 'Order Hypocreales (Ascomycota) [1]. <strong>A naming note:</strong> our current label reads “Ophiocordyceps militaris”, a binomial that cannot exist — <em>militaris</em> is the type species of the genus <em>Cordyceps</em>, so it stayed put when the caterpillar fungus <em>sinensis</em> moved to <em>Ophiocordyceps</em> in 2007 [4]. The correct name for cultivated material is <em>Cordyceps militaris</em>. Confirmation of the exact species in this batch is pending from the supplier.',
 'form_sold': 'Fruit-body tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Savoury and slightly sweet; the cultivated fruit body is bright orange',
 'traditional_use_short': 'A tonic for energy and convalescence in Chinese medicine',
 'traditional_uses': '<p>Cordyceps species have a long history as a tonic taken for energy and after illness in Chinese medicine [3][6]. Almost all of that tradition attaches to wild <em>Ophiocordyceps sinensis</em>, harvested on the Tibetan Plateau, where in 2004 it provided about 40% of rural households’ annual cash income and top-grade material traded above US$18,000 per kilogram [7][9]. What is sold worldwide today is overwhelmingly cultivated <em>Cordyceps militaris</em> — a different species, and the one that actually carries cordycepin [10][11].</p>',
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'Traditionally used as a tonic for energy and after illness in Chinese medicine.', 'tier': 'Traditional use', 'ref': 3},
   {'text': 'May support exercise capacity with regular use — shown in two small trials, in older adults and using a blend, not a single-species tincture.', 'tier': 'Limited human evidence', 'ref': 14},
   {'text': 'Contains cordycepin and polysaccharides studied in laboratory research.', 'tier': 'Animal/in-vitro evidence', 'ref': 10},
 ],
 'human_evidence_summary': '<p>The exercise literature is small and split. Parcell 2004 gave trained cyclists Cs-4 and found nothing (n=22, null) [13]. Chen 2010 found improvements in older adults on the same fermented product (n=20) [14]. Hirsch 2017 saw benefits only after chronic dosing, and used a multi-ingredient blend rather than cordyceps alone (n=28) [15].</p><p>So: a cautious “may support exercise capacity with regular use” is defensible, provided the reader is told it rests on two small positive trials, one null trial, older adults, and products that are not this tincture. Nothing else — immunity, kidneys, libido, blood sugar, cancer — has human evidence.</p>',
 'what_it_does_not_do': not_list([
   'It is not for diabetes or blood-sugar control; those effects are rodent and in-vitro only, and additive hypoglycaemia is listed as an interaction risk rather than a benefit [3].',
   'It is not for heart disease or atherosclerosis — no controlled human outcome evidence exists.',
   'It is not for sexual dysfunction. The "Himalayan Viagra" reputation rests on tradition and mouse data; a human study showed no testosterone change [3][11].',
   'It is not for kidney disease — Cochrane and a meta-analysis found the evidence insufficient [3].',
 ]),
 'active_compounds': [
   {'name': 'Cordycepin (3′-deoxyadenosine)', 'text': 'The nucleoside cordyceps is known for, found overwhelmingly in <em>C. militaris</em> rather than <em>O. sinensis</em> [10][11].', 'solubility': 'Water-soluble; a hydro-ethanolic tincture carries it, though content in this product is unassayed'},
   {'name': 'Adenosine and related nucleosides', 'text': 'Commonly used as marker compounds for quality control [10].', 'solubility': 'Water-soluble'},
   {'name': 'Polysaccharides', 'text': 'Studied in the laboratory for immunomodulatory activity [11].', 'solubility': 'Water-extractable; precipitate in concentrated alcohol'},
 ],
 'how_to_use': '<p>Follow the directions on your bottle. For context, the exercise trials used fermented Cs-4 or blended products at gram-level daily doses over one to twelve weeks [13][14][15] — not a tincture, so the doses are not transferable.</p>',
 'safety_notes': '<p>Cordycepin inhibits platelet aggregation in the laboratory, and Memorial Sloan Kettering lists a case report of excessive bleeding after a tooth extraction in a daily cordyceps user [3]. Stop well before surgery and be careful with blood thinners.</p><p>Cordyceps is immunostimulatory, so it may oppose immunosuppressant therapy; transplant recipients and anyone on cyclosporine should not use it without medical supervision [3]. Memorial Sloan Kettering also advises against use with myelogenous-type cancers [3]. No pregnancy or breastfeeding data exist — avoid. This product contains approximately 30% ethanol.</p>',
 'contraindications': ul([
   'Warfarin, DOACs, antiplatelets, or upcoming surgery — a bleeding case report exists [3].',
   'Immunosuppressants, cyclosporine, transplant — not without medical supervision [3].',
   'Myelogenous-type cancers — advised against [3].',
   'Diabetes medication — additive glucose-lowering is plausible; monitor [3].',
   'Pregnancy and breastfeeding — no data; avoid.',
   'Children, liver disease, alcohol-use recovery, disulfiram, metronidazole — because of the ethanol base.',
 ]),
 'key_cautions': 'Bleeding risk and surgery; immunosuppressants; myelogenous cancers; pregnancy — avoid',
 'faq': [
  {'question': 'Which cordyceps is in the bottle?', 'answer': '<p>Cultivated <em>Cordyceps militaris</em>, which is what virtually all commercial cordyceps is. Our current label prints “Ophiocordyceps militaris”, which is not a valid name — that is being corrected, and we are confirming the species with our supplier before reprinting.</p>'},
  {'question': 'Does it improve athletic performance?', 'answer': '<p>Possibly, modestly, with regular use — and the evidence is thin. One trial in trained cyclists found nothing [13]; one in older adults found an improvement [14]; one using a blend found benefits only after chronic dosing [15].</p>'},
  {'question': 'Is it the "zombie fungus"?', 'answer': '<p>A relative of it. <em>Ophiocordyceps unilateralis</em> is the ant-infecting species behind the popular stories. <em>C. militaris</em> is its cultivated cousin, grown commercially on grain or on insect pupae [6].</p>'},
  {'question': 'Can I take it before surgery?', 'answer': '<p>No. Cordycepin inhibits platelet aggregation in the laboratory and there is a published case of excessive bleeding after a tooth extraction in a daily user [3]. Stop in good time and tell your surgeon.</p>'},
  {'question': 'Does it help kidney function?', 'answer': '<p>No claim can be made. Cochrane and a meta-analysis found the evidence insufficient [3].</p>'},
  {'question': 'Why is wild cordyceps so expensive?', 'answer': '<p>Wild <em>O. sinensis</em> is the most expensive fungus on earth — above US$18,000 per kilogram for top-grade material in 2008, and about 40% of some Tibetan households’ cash income in 2004 [7][9]. Cultivated <em>C. militaris</em> is a different, affordable species.</p>'},
 ],
 'fun_facts': [
  {'text': 'Cordyceps militaris is the type species of the entire genus Cordyceps, which is exactly why "Ophiocordyceps militaris" is impossible: a genus is defined by its type species.', 'source': 'GBIF — Cordyceps militaris', 'url': 'https://www.gbif.org/species/8686087'},
  {'text': 'Wild Ophiocordyceps sinensis is the most expensive fungus on Earth: in 2004 it provided about 40% of some Tibetan households’ annual cash income.', 'source': 'Evidence matrix ref [7]', 'url': 'https://www.gbif.org/species/8686087'},
  {'text': 'The "zombie fungus" of The Last of Us is a real relative — Ophiocordyceps unilateralis — which drives infected ants to clamp onto a leaf vein before erupting from their heads.', 'source': 'Evidence matrix ref [6]', 'url': 'https://www.gbif.org/species/8686087'},
 ],
 'seo_title': 'Cordyceps (Cordyceps militaris) — The Evidence',
 'seo_description': 'Cordyceps militaris explained: what the small exercise trials found and did not find, the naming confusion, interactions, and where to buy in South Africa.',
},
{
 'handle': 'turkey-tail', 'publish': True,
 'common_name': 'Turkey Tail', 'scientific_name': 'Trametes versicolor', 'kingdom': 'Fungi',
 'short_description': 'The banded bracket fungus on every damp log, and the source of two licensed medicines that are not this tincture. Well tolerated, long used as a powdered tea.',
 'taxonomy': 'Family Polyporaceae, order Polyporales (Basidiomycota) [16]. A bracket fungus on dead hardwood across temperate Asia, North America and Europe, with concentric multicoloured zones and pores rather than gills [2]. Also known by the synonym <em>Coriolus versicolor</em>.',
 'form_sold': 'Fruit-body tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Thin and leathery; traditionally taken as a powdered tea rather than eaten',
 'traditional_use_short': 'A tonic tea in Chinese and Japanese traditional practice',
 'traditional_uses': '<p>Turkey tail is not a culinary mushroom — it is thin and leathery. It is used as a dried, powdered tea in Chinese and Japanese traditional practice, and Memorial Sloan Kettering notes it is generally safe to use in food and tea [1][2].</p>',
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'A tonic mushroom of Chinese and Japanese tradition, drunk as a powdered tea.', 'tier': 'Traditional use', 'ref': 2},
   {'text': 'Immune-cell markers were tracked in nine women after breast-cancer treatment — trends only, in an uncontrolled study.', 'tier': 'Limited human evidence', 'ref': 6},
   {'text': 'Gut-microbiome modulation as a prebiotic in healthy adults, using PSP rather than a tincture.', 'tier': 'Limited human evidence', 'ref': 11},
   {'text': 'Studied in the laboratory for cytokine and cell-signalling effects.', 'tier': 'Animal/in-vitro evidence', 'ref': 1},
 ],
 'human_evidence_summary': '<p>Turkey tail has the most impressive-looking clinical record of any mushroom here, and almost none of it belongs to a tincture. <strong>PSK (Krestin)</strong> from strain CM-101 in Japan and <strong>PSP</strong> from strain COV-1 in China are purified, standardised hot-water extracts of cultured mycelium, approved as medicines and given <em>alongside</em> surgery and chemotherapy [2][3][4]. Their meta-analyses — Oba 2007, n=8,009; Sakamoto 2006, n=1,094 — are real, and they are about those drugs [7][8].</p><p>What exists for turkey tail itself as a supplement is thinner: Torkelson 2012, a phase I dose-escalation in nine women after breast-cancer treatment, uncontrolled, tracking immune markers [6]; and a randomised prebiotic study of PSP in healthy volunteers [11]. A 2019 meta-analysis found no significant effect on relapse-free survival [10].</p>',
 'what_it_does_not_do': not_list([
   'It is not a cancer treatment. The survival evidence belongs to PSK given with chemotherapy after surgery, and the FDA has not approved coriolus extracts as cancer treatments [1][7][8].',
   'A tincture is not PSK or PSP. Those are purified, standardised hot-water mycelial extracts from specific strains, approved as medicines; none of their results may be claimed here [2][3][4].',
   'It does not "boost immunity" — the human immune data are marker trends in nine women with no control group [6].',
   'It does not treat HPV or cervical lesions in this form; that evidence concerns a vaginal gel, a different product and route [1][15].',
 ]),
 'active_compounds': [
   {'name': 'Beta-glucans and polysaccharopeptides', 'text': 'The polysaccharide fraction that the PSK and PSP medicines are built from [2][3][4].', 'solubility': 'Hot-water extracted industrially, then alcohol-precipitated — which is precisely why a tincture is not PSK'},
   {'name': 'Phenolic compounds', 'text': 'Antioxidant phenolics identified in laboratory analyses [1].', 'solubility': 'Partly ethanol-soluble'},
 ],
 'how_to_use': '<p>Follow the directions on your bottle. For reference, the phase I supplement trial tested up to 9&nbsp;g a day of powder for six weeks and found it safe and tolerable [6]; that is a powder, not a tincture, so it is not a dosing instruction.</p>',
 'safety_notes': '<p>Turkey tail is generally well tolerated, with minor adverse effects [1]. Up to 9&nbsp;g a day was safe and tolerable in the phase I trial [6], and PSK meta-analyses found no increase in side effects [9]. The rarest reported reactions are unusually cosmetic: darkening of the fingernails, and dark stools that are not from bleeding [1][19].</p><p>Because turkey tail behaves as an immunostimulant, it is inappropriate without medical supervision for transplant recipients and people on immunosuppressive therapy [1]. Do not use during cancer treatment without your oncologist’s knowledge [1]. Memorial Sloan Kettering advises pregnant and breastfeeding women to avoid it until safety data exist [1]. Note that no anticoagulant interaction is listed for turkey tail — reishi’s bleeding warning does not transfer here.</p>',
 'contraindications': ul([
   'Immunosuppressive therapy or transplant — not without medical supervision [1].',
   'Active cancer treatment — only with your oncologist’s knowledge [1].',
   'Pregnancy and breastfeeding — avoid until safety data exist [1].',
   'Mushroom allergy — do not use.',
   'Children, liver disease, alcohol-use recovery, disulfiram, metronidazole — because of the ethanol base.',
 ]),
 'key_cautions': 'Immunosuppressants and transplant; tell your oncologist; pregnancy — avoid',
 'faq': [
  {'question': 'Is turkey tail a cancer treatment?', 'answer': '<p>No. The impressive survival data belong to PSK, a licensed Japanese medicine given alongside surgery and chemotherapy, never instead of them [7][8]. The FDA has not approved coriolus extracts as cancer treatments [1].</p>'},
  {'question': 'What is the difference between this tincture and PSK or PSP?', 'answer': '<p>PSK and PSP are purified, standardised hot-water extracts of mycelium grown in fermenters from specific strains, approved as medicines [2][3][4]. This is an ethanol tincture of the fruit body. They are different products and their evidence does not transfer.</p>'},
  {'question': 'Is it safe?', 'answer': '<p>It is among the better-tolerated species. Up to 9&nbsp;g a day of powder was safe in a phase I trial [6], and PSK meta-analyses found no increase in side effects [9].</p>'},
  {'question': 'Can I take it during chemotherapy?', 'answer': '<p>Only with your oncologist’s knowledge. Turkey tail is characterised as an immunostimulant, which matters during treatment [1].</p>'},
  {'question': 'Does it thin the blood like reishi?', 'answer': '<p>No anticoagulant interaction is listed for turkey tail in the Memorial Sloan Kettering monograph, unlike reishi [1]. We do not import reishi’s warning here.</p>'},
  {'question': 'Are dark fingernails really a side effect?', 'answer': '<p>Yes, rarely — darkening of the fingernails and dark-coloured stools not caused by bleeding are both documented [1][19].</p>'},
 ],
 'fun_facts': [
  {'text': "Two of the world's best-known mushroom medicines come from two single laboratory strains of this one fungus: PSK from strain CM-101 in Japan and PSP from strain COV-1 in China.", 'source': 'MSK About Herbs — Coriolus versicolor', 'url': 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/coriolus-versicolor'},
  {'text': 'Turkey tail was one of the first mushrooms shown to behave as a prebiotic in a randomised human trial, shifting the gut microbiome of healthy volunteers.', 'source': 'Evidence matrix ref [11]', 'url': 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/coriolus-versicolor'},
  {'text': 'Its two rarest recorded side effects are unusually cosmetic for a medicine: darkening of the fingernails, and dark stools that are not caused by any bleeding.', 'source': 'MSK About Herbs — Coriolus versicolor', 'url': 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/coriolus-versicolor'},
 ],
 'seo_title': 'Turkey Tail (Trametes versicolor) — The Evidence',
 'seo_description': 'Turkey tail explained honestly: why PSK and PSP evidence is not tincture evidence, what the human studies show, safety, and the products that contain it.',
},
{
 'handle': 'tremella', 'publish': True,
 'common_name': 'Tremella', 'scientific_name': 'Tremella fuciformis', 'kingdom': 'Fungi',
 'short_description': 'Snow fungus — the translucent white jelly of Chinese dessert soups, and a mycoparasite that cannot grow without a host fungus. The "beauty mushroom" of tradition, with topical human data only.',
 'taxonomy': 'Family Tremellaceae, order Tremellales, class Tremellomycetes (Basidiomycota). GBIF Backbone taxon 5237434 [1]. It is a mycoparasite: a yeast-like film until it meets its host fungus <em>Annulohypoxylon archeri</em>, which is why growers must inoculate with both species at once [3].',
 'form_sold': 'Fruit-body tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Almost neutral, faintly sweet; prized in cooking for texture rather than taste',
 'traditional_use_short': 'Simmered into sweet dessert soups in China; a classic yin-nourishing tonic',
 'traditional_uses': '<p>Snow fungus is one of the most popular fungi in Chinese cuisine, cultivated since at least the nineteenth century and classically simmered into sweet dessert soups [4][5]. In traditional practice it is a “yin-nourishing” tonic associated with the lungs and with beauty [17].</p>',
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'A traditional Chinese culinary and yin-nourishing tonic mushroom, classically simmered into soups.', 'tier': 'Traditional use', 'ref': 4},
   {'text': 'A small clinical study has explored tremella and subjective memory in adults.', 'tier': 'Limited human evidence', 'ref': 6},
   {'text': 'Rich in water-holding polysaccharides that are studied for skin hydration in cosmetic (topical) formulations.', 'tier': 'Limited human evidence', 'ref': 13},
   {'text': 'Studied in the laboratory for antioxidant and immune-modulating activity.', 'tier': 'Animal/in-vitro evidence', 'ref': 8},
 ],
 'human_evidence_summary': '<p>There is one randomised trial of note: Ban 2018, seventy-five adults with <em>subjective</em> memory complaints, 600–1,200&nbsp;mg a day for eight weeks [6]. Adverse-event rates matched placebo. That is the whole oral human record.</p><p>The skin research everyone quotes is topical — tremella polysaccharides in cosmetic formulations, applied to skin, not swallowed [13][14]. Oral “skin from within”, collagen and anti-ageing claims have no human evidence, and because the polysaccharides in question precipitate in ethanol, a tincture cannot be assumed to deliver the doses used in that research anyway [7][9].</p>',
 'what_it_does_not_do': not_list([
   'It is not a treatment for dementia, Alzheimer’s disease or "brain fog" — the only trial ran eight weeks in people with subjective complaints, not diagnosed impairment [6].',
   'It is not "oral hyaluronic acid" and it is not a collagen booster. The human skin data are topical [13][14].',
   'It is not a treatment for cancer, chemotherapy side-effects, hepatitis or low white-cell counts — that use belongs to a Chinese prescription drug made from purified polysaccharide, not a food-grade tincture [4].',
   'It does not treat diabetes, high cholesterol, asthma, cough, constipation, depression, anxiety or ADHD — no human trials exist [8].',
 ]),
 'active_compounds': [
   {'name': 'Tremella polysaccharides (TFPS)', 'text': 'The acidic heteropolysaccharides responsible for the fungus’s remarkable water-holding capacity [7][9].', 'solubility': 'Water-soluble and precipitated by ethanol — a tincture carries less of this fraction than a decoction'},
   {'name': 'Dietary fibre and glucuronoxylomannan', 'text': 'The structural sugars that give snow fungus its gelatinous texture in cooking [8].', 'solubility': 'Water-extractable'},
   {'name': 'Phenolics', 'text': 'Antioxidant compounds identified in laboratory analyses [10].', 'solubility': 'Partly ethanol-soluble'},
 ],
 'how_to_use': '<p>Follow the directions on your bottle. The one oral trial used 600–1,200&nbsp;mg a day of an extract for eight weeks [6] — a different preparation from this tincture, so it is context, not a dose instruction.</p>',
 'safety_notes': '<p>Tremella is among the gentlest species here. In the only randomised trial, adverse-event rates did not differ from placebo at up to 1,200&nbsp;mg a day for eight weeks [6], and reviews report no significant adverse effects from consumption [21]. Long-term supplement safety data are lacking.</p><p>No allergic or toxic case report specific to <em>T. fuciformis</em> was located — an absence of reports, not proof of safety. Anyone with a mushroom allergy should avoid it. No pregnancy or breastfeeding data exist. Glucose- and lipid-lowering effects in rodents suggest caution alongside diabetes medication, and its laboratory immunomodulation suggests caution with immunosuppressants [12][8][10]. This product contains approximately 30% ethanol.</p>',
 'contraindications': ul([
   'Mushroom allergy — do not use.',
   'Pregnancy and breastfeeding — no data; not recommended unless advised by a healthcare professional.',
   'Diabetes medication — glucose- and lipid-lowering in rodents; monitor [12].',
   'Immunosuppressants — laboratory immunomodulation; ask your doctor [8][10].',
   'Children, liver disease, alcohol-use recovery, disulfiram, metronidazole — because of the ethanol base.',
 ]),
 'key_cautions': 'Well tolerated in the one trial; mushroom allergy; pregnancy — no data',
 'faq': [
  {'question': 'Is tremella "nature’s hyaluronic acid"?', 'answer': '<p>No. It holds water impressively, but it is a different molecule and the human skin evidence is topical, not oral [13][14]. We do not publish "skin from within" claims for it.</p>'},
  {'question': 'What has it actually been tested for in people?', 'answer': '<p>One randomised trial: 75 adults with subjective memory complaints, 600–1,200&nbsp;mg a day for eight weeks [6]. That is the extent of the oral human record.</p>'},
  {'question': 'Is it safe?', 'answer': '<p>Adverse events matched placebo in the one trial [6], and reviews report no significant adverse effects from eating it [21]. No specific allergy or toxicity case reports were found, though that is an absence of reports rather than proof.</p>'},
  {'question': 'Why does an ethanol tincture matter here?', 'answer': '<p>Because tremella’s active polysaccharides are water-soluble and actually precipitate in alcohol [7][9]. A 30% ethanol tincture cannot be assumed to deliver the polysaccharide dose used in research.</p>'},
  {'question': 'Is it vegan and does it taste of anything?', 'answer': '<p>It is a fungus, and it is famously close to flavourless — in Chinese cooking it is prized for its gelatinous texture and used in sweet dessert soups.</p>'},
  {'question': 'Where does the world’s tremella come from?', 'answer': '<p>Overwhelmingly from one place: Gutian County in Fujian, China, produced over 385,000 tonnes in 2022, more than 90% of global supply [16].</p>'},
 ],
 'fun_facts': [
  {'text': 'Snow fungus was first described scientifically in 1856 by the English mycologist Miles Joseph Berkeley — from specimens collected in Brazil, not China.', 'source': 'GBIF Backbone Taxonomy', 'url': 'https://api.gbif.org/v1/species/5237434'},
  {'text': 'It cannot grow on its own: it is a mycoparasite that only forms its white fronds after invading the fungus Annulohypoxylon archeri, so growers inoculate with both species at once.', 'source': 'Evidence matrix ref [3]', 'url': 'https://api.gbif.org/v1/species/5237434'},
  {'text': 'A single county — Gutian in Fujian, China — produced over 385,000 tonnes of tremella in 2022, more than 90% of the world supply.', 'source': 'Evidence matrix ref [16]', 'url': 'https://api.gbif.org/v1/species/5237434'},
 ],
 'seo_title': 'Tremella (Tremella fuciformis) — The Evidence',
 'seo_description': 'Snow fungus, honestly: the one human trial, why the skin research is topical not oral, safety notes, and the blends that contain it.',
},
{
 'handle': 'shiitake', 'publish': True,
 'common_name': 'Shiitake', 'scientific_name': 'Lentinula edodes', 'kingdom': 'Fungi',
 'short_description': 'The oak-log mushroom of East Asian cooking and the world’s second most cultivated species. A genuine food with real nutrition — and a source of claims that belong to an injectable drug, not a tincture.',
 'taxonomy': 'Family Omphalotaceae (formerly Marasmiaceae), order Agaricales (Basidiomycota) [1]. Grown on oak and other hardwood logs and on sawdust blocks across East Asia and now worldwide [2].',
 'form_sold': 'Component of the Myco-Radiance blend — fruit-body tincture, spring water and approximately 30% ethanol',
 'flavour_profile': 'Deeply savoury and umami; the sulphur compound lenthionine gives dried shiitake its aroma',
 'traditional_use_short': 'A culinary and traditional-medicine mushroom of East Asia',
 'traditional_uses': '<p>Shiitake is first and foremost food — a culinary and traditional-medicine mushroom of East Asia, and one of the most cultivated mushrooms in the world [2]. Its aroma comes from sulphur compounds including lenthionine, guaiacol and syringol [5].</p>',
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'A culinary and traditional-medicine mushroom of East Asia.', 'tier': 'Traditional use', 'ref': 2},
   {'text': 'Eating shiitake mushrooms daily was associated with changes in immune-cell activity in a small study of whole food — not of this tincture.', 'tier': 'Limited human evidence', 'ref': 12},
   {'text': 'Contains eritadenine and beta-glucans studied in the laboratory.', 'tier': 'Animal/in-vitro evidence', 'ref': 5},
 ],
 'human_evidence_summary': '<p>The human study most often cited is Dai 2015: 52 healthy young adults ate whole shiitake daily for four weeks, and immune-cell markers shifted [12]. It is a food study, small, and about eating mushrooms — not about a tincture, and not about preventing any illness.</p><p>Two things get misattributed to shiitake constantly. <strong>Lentinan</strong> is an approved <em>injectable</em> adjuvant for stomach cancer in Japan, licensed in 1985 — a drug, given by needle, and none of its evidence may be claimed for a supplement [7][8]. And <strong>kojic acid</strong>, the skin-brightening ingredient, is a product of the koji mould <em>Aspergillus oryzae</em>, first isolated in 1907 — not a characteristic shiitake compound at all [16][17].</p>',
 'what_it_does_not_do': not_list([
   'There is no human evidence that oral shiitake brightens skin, reduces pigmentation or increases collagen. The only skin data are in-vitro and topical [15].',
   '"Kojic acid" is not a legitimate shiitake selling point — kojic acid comes from the koji mould Aspergillus oryzae, and even topical kojic acid brightening is a cosmetic claim, not an oral-supplement one [16][17].',
   'Lentinan benefits cannot be claimed for a tincture — that evidence is for an injectable cancer drug [7][8].',
   'It has no proven cholesterol-lowering effect in people from a tincture; Memorial Sloan Kettering states there is no proof from clinical trials that shiitake lowers cholesterol in people [2].',
 ]),
 'active_compounds': [
   {'name': 'Lentinan (a beta-glucan)', 'text': 'The polysaccharide developed into a licensed injectable adjuvant in Japan. In a mushroom it is simply a beta-glucan; the drug is a different thing entirely [7][8].', 'solubility': 'Water-extracted and heat-labile; not the basis of any claim we make'},
   {'name': 'Eritadenine', 'text': 'A compound unique to shiitake, studied in animals for effects on lipid metabolism [5][10].', 'solubility': 'Water-soluble'},
   {'name': 'Ergothioneine and B vitamins', 'text': 'Nutritional components of the mushroom as a food [2].', 'solubility': 'Water-soluble'},
 ],
 'how_to_use': '<p>Shiitake appears here only as one part of a blend. Follow the directions on the bottle.</p>',
 'safety_notes': '<p><strong>Shiitake dermatitis</strong> is the distinctive risk: 24–48 hours after eating raw or undercooked shiitake, intensely itchy whiplash-like streaks can appear on the trunk and limbs. It was first described in Japan in 1977, more than a hundred cases are on record, and thorough cooking prevents it — the heat-sensitive lentinan is the leading suspect [13][14]. Whether an extract could carry this risk in sensitive people is unverified.</p><p>Other documented reactions include hypersensitivity pneumonitis from inhaling spores during cultivation, and photosensitivity, eosinophilia and digestive upset after prolonged consumption of shiitake powder [2]. No pregnancy or breastfeeding supplement data exist. This product contains approximately 30% ethanol.</p>',
 'contraindications': ul([
   'Known shiitake sensitivity or previous flagellate dermatitis — do not use [13][14].',
   'Mushroom allergy — do not use.',
   'Pregnancy and breastfeeding — no supplement data; avoid.',
   'Children, liver disease, alcohol-use recovery, disulfiram, metronidazole — because of the ethanol base.',
 ]),
 'key_cautions': 'Shiitake (flagellate) dermatitis in sensitive people; mushroom allergy; pregnancy — no data',
 'faq': [
  {'question': 'Does shiitake brighten skin?', 'answer': '<p>There is no human evidence that eating or taking shiitake brightens skin, reduces pigmentation or builds collagen. The only skin data are laboratory and topical [15].</p>'},
  {'question': 'Is there kojic acid in shiitake?', 'answer': '<p>Not meaningfully. Kojic acid is named after koji — the Aspergillus oryzae mould used to make sake, miso and soy sauce — and was first isolated from that mould in 1907 [16][17].</p>'},
  {'question': 'What is lentinan?', 'answer': '<p>A beta-glucan from shiitake that was developed into an injectable adjuvant for stomach cancer, approved in Japan in 1985 [7][8]. It is a prescription drug given by needle, and its evidence cannot be transferred to a supplement.</p>'},
  {'question': 'What is shiitake dermatitis?', 'answer': '<p>An itchy, whiplash-patterned rash that can appear a day or two after eating raw or undercooked shiitake. Cooking prevents it [13][14].</p>'},
  {'question': 'Does it lower cholesterol?', 'answer': '<p>Not as a claim from a tincture. Memorial Sloan Kettering states there is no proof from clinical trials that shiitake lowers cholesterol in people [2].</p>'},
  {'question': 'Why is shiitake in a skin blend at all?', 'answer': '<p>It is a nutrient-dense culinary mushroom with a long tradition of use. That is what we can say about it. The skin-specific claims previously made for it are not supported and have been removed.</p>'},
 ],
 'fun_facts': [
  {'text': "Shiitake's cancer drug is a needle, not a capsule: lentinan has been an approved injectable adjuvant for stomach cancer in Japan since 1985.", 'source': 'MSK About Herbs — Shiitake', 'url': 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/shiitake-mushroom'},
  {'text': 'Eating raw shiitake can produce a rash shaped like whip-marks — flagellate dermatitis, first described in 1977 — and thorough cooking prevents it.', 'source': 'MSK About Herbs — Shiitake', 'url': 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/shiitake-mushroom'},
  {'text': 'The kojic acid beloved of skin-brightening serums is named for koji, the Aspergillus oryzae mould used to make sake and miso, and was first isolated from it in 1907 — not from any mushroom.', 'source': 'GBIF — Lentinula edodes', 'url': 'https://www.gbif.org/species/search?q=Lentinula%20edodes'},
 ],
 'seo_title': 'Shiitake (Lentinula edodes) — The Evidence',
 'seo_description': 'Shiitake without the myths: what the food research shows, why lentinan and kojic acid are not supplement claims, and the skin-blend it appears in.',
},
{
 'handle': 'sceletium', 'publish': True,
 'common_name': 'Sceletium (Kanna)', 'scientific_name': 'Sceletium tortuosum', 'kingdom': 'Plantae',
 'short_description': 'A South African succulent, not a mushroom. Chewed as kougoed by the San and Khoi for centuries, and the only species here with a serious medicine-interaction warning.',
 'taxonomy': 'Family Aizoaceae (Mesembryanthemaceae in older literature) [1][2][4]. A succulent endemic to the Cape provinces of South Africa; SANBI Red List assessment (2023) Least Concern [1]. Also treated as <em>Mesembryanthemum tortuosum</em> L.',
 'form_sold': 'Whole-plant tincture — spring water and approximately 30% ethanol',
 'flavour_profile': 'Sharp and herbaceous; traditionally fermented and chewed rather than brewed',
 'traditional_use_short': 'Chewed as kougoed by the San and Khoikhoi peoples of South Africa',
 'traditional_uses': '<p>Kanna is one of the Cape’s oldest known plant medicines, traditionally fermented and chewed — <em>kougoed</em>, Afrikaans for “something to chew” — by the San and Khoikhoi peoples [3][5][7]. Its traditional knowledge belongs to those communities, and commercial use in South Africa is governed by bioprospecting permits and benefit-sharing agreements; the landmark 2008 agreement between HG&amp;H and the South African San Council channels royalties to Northern Cape communities [27][30].</p>',
 'evidence_level': 'Limited human evidence',
 'verified_benefits': [
   {'text': 'Traditionally chewed by the San and Khoikhoi peoples of South Africa.', 'tier': 'Traditional use', 'ref': 3},
   {'text': 'A South African succulent with a long history of use as a tea and tincture.', 'tier': 'Traditional use', 'ref': 7},
   {'text': 'In small studies of a standardised extract, healthy volunteers reported feeling calmer under short-term laboratory stress.', 'tier': 'Limited human evidence', 'ref': 3},
   {'text': 'Contains naturally occurring mesembrine-type alkaloids.', 'tier': 'Animal/in-vitro evidence', 'ref': 4},
 ],
 'human_evidence_summary': '<p>Four small placebo-controlled studies exist, roughly 120 people in total, all healthy volunteers, all using one standardised extract (Zembrin), for at most three months [3][9][13][14]. They looked at acute laboratory stress and at cognition. Chiu 2014 reported cognitive effects that Reay 2020 then failed to replicate [14].</p><p>Two limits matter. No trial has been run in people with diagnosed anxiety or depression, so nothing may be claimed about either. And no trial used a tincture — a standardised extract with a defined alkaloid content is a different product from a whole-plant tincture of unassayed strength.</p>',
 'what_it_does_not_do': not_list([
   'It is not an antidepressant. No trial in depressed patients exists, and "natural antidepressant" or "natural SSRI" is a therapeutic claim we will not make [8].',
   'It is not a treatment for anxiety disorders, panic, PTSD or insomnia — the anxiety data come from acute laboratory-stress tasks in healthy students [3][14].',
   'It is not a cognitive enhancer on current evidence — the one positive cognition result was not replicated [14].',
   'It must never be positioned as a way to come off prescribed medication, and it is not a recreational euphoric.',
   'It is not a mushroom — it is a succulent plant, and no fruiting-body or mushroom copy applies to it [1].',
 ]),
 'active_compounds': [
   {'name': 'Mesembrine and mesembrenone', 'text': 'The characteristic alkaloids, which inhibit serotonin reuptake and PDE4 in laboratory assays [4][5][11].', 'solubility': 'Alkaloids are well extracted by a hydro-ethanolic menstruum'},
   {'name': 'Mesembrenol and related alkaloids', 'text': 'Minor alkaloids whose ratios vary by chemotype and by whether the plant was fermented [4][5].', 'solubility': 'Ethanol-soluble'},
 ],
 'how_to_use': '<p>Follow the directions on your bottle, and start low. The published trials used 8–25&nbsp;mg a day of a standardised extract [9][13] — not comparable to a whole-plant tincture. Take it during the day or early evening; late use may affect sleep in some people.</p>',
 'safety_notes': '<p><strong>Serotonergic interactions are the key risk.</strong> Sceletium alkaloids inhibit serotonin reuptake and promote monoamine release [5][11]. There are no published reports of herb–drug interactions to date, but on mechanism it should not be used with drugs that alter serotonin uptake or release, including SSRIs and SNRIs, nor with PDE4 inhibitors such as roflumilast [8]. Anyone who has taken an MAOI in the past two weeks, or takes an SSRI or SNRI, must speak to their prescriber first [21]. Combining serotonergic agents risks serotonin syndrome — agitation, confusion, fast heartbeat, high blood pressure, fever.</p><p>Reported adverse effects are headache (also common on placebo), digestive upset, fatigue, drowsiness and difficulty concentrating [12][20]; trial adverse-event rates were equal to or lower than placebo at 8–25&nbsp;mg a day for up to three months [9][13]. Because drowsiness and reduced concentration are reported, do not drive until you know how it affects you. No pregnancy or breastfeeding data exist [21]. As at August 2025 Sceletium does not appear in SAHPRA’s Consolidated Schedules and is sold as an unregistered complementary medicine [22][24].</p>',
 'contraindications': ul([
   'SSRIs, SNRIs, MAOIs (including within the past two weeks), tricyclics — do not combine; speak to your prescriber [8][21].',
   'Other serotonergic medicines and herbs — tramadol, triptans, lithium, dextromethorphan, St John’s Wort, 5-HTP — avoid combining.',
   'PDE4 inhibitors such as roflumilast — mechanistic interaction [8].',
   'Driving or operating machinery — drowsiness and reduced concentration are reported; do not drive until you know how it affects you [20].',
   'Pregnancy and breastfeeding — no data; avoid [21].',
   'Children, liver disease, alcohol-use recovery, disulfiram, metronidazole — because of the ethanol base.',
 ]),
 'key_cautions': 'Do not combine with antidepressants or other serotonergic medicines; may cause drowsiness; pregnancy — avoid',
 'faq': [
  {'question': 'Is kanna a mushroom?', 'answer': '<p>No. It is a small succulent plant in the Aizoaceae family, related to the "living stones" (Lithops), and endemic to the Cape provinces [1][4].</p>'},
  {'question': 'Has it been tested in people?', 'answer': '<p>Yes, but only in four small placebo-controlled studies — about 120 people in total, all healthy volunteers, all using one standardised extract, for at most three months [3][9][13][14].</p>'},
  {'question': 'Will it help my anxiety or depression?', 'answer': '<p>It has not been tested in people with diagnosed anxiety or depression, so no such claim can be made. Speak to your doctor, and do not stop or replace prescribed medicine [8].</p>'},
  {'question': 'Can I take it with my antidepressant?', 'answer': '<p>No. Kanna affects serotonin, and combining it with SSRIs, SNRIs, MAOIs or other serotonergic medicines carries a theoretical risk of serotonin syndrome [8][21]. Talk to your prescriber first.</p>'},
  {'question': 'Is it legal in South Africa?', 'answer': '<p>As at August 2025 Sceletium does not appear in SAHPRA’s Consolidated Schedules; it is sold as an unregistered complementary medicine carrying the mandatory disclaimer [22][24].</p>'},
  {'question': 'Who benefits from the plant commercially?', 'answer': '<p>Kanna is a South African endemic whose traditional knowledge belongs to the San and Khoi. Commercial use is governed by bioprospecting permits and benefit-sharing agreements; the 2008 HG&amp;H–San Council agreement channels royalties to Northern Cape communities [27][30].</p>'},
 ],
 'fun_facts': [
  {'text': 'The genus name comes from the Latin sceletus, "skeleton", because the dried leaves keep a skeleton-like network of veins; tortuosum means "twisted".', 'source': 'SANBI Red List of South African Plants', 'url': 'https://redlist.sanbi.org/species.php?species=148-1325'},
  {'text': 'Kanna was among the first plants Linnaeus named, in 1753 — long before the Cape preparation kougoed became a subject of pharmacology.', 'source': 'SANBI Red List of South African Plants', 'url': 'https://redlist.sanbi.org/species.php?species=148-1325'},
  {'text': 'The 2016 South African permit for Sceletium was only the second Internationally Recognised Certificate of Compliance ever issued worldwide under the Nagoya Protocol.', 'source': 'Evidence matrix ref [29]', 'url': 'https://redlist.sanbi.org/species.php?species=148-1325'},
 ],
 'seo_title': 'Sceletium tortuosum (Kanna) — The Evidence',
 'seo_description': 'Kanna explained: a South African succulent, not a mushroom. What four small trials found, the serotonin interaction warning, and its legal status in SA.',
},
]
# --- assemble ---
entries = []
for s in SPECIES:
    fields = {k: v for k, v in s.items() if k not in ('handle', 'publish')}
    fields['references'] = references(s['handle'])
    fields['evidence_reviewed_on'] = REVIEWED
    entries.append({'handle': s['handle'], 'publish': s['publish'], 'fields': fields})
out = os.path.join(ROOT, 'data/shopify/species-entries.json')
prev = {}
if os.path.exists(out):
    prev = {e['handle']: e for e in json.load(open(out))['entries']}
for e in entries:
    prev[e['handle']] = e
order = ['lions-mane', 'reishi', 'chaga', 'cordyceps', 'turkey-tail', 'tremella', 'shiitake', 'sceletium']
merged = [prev[h] for h in order if h in prev]
json.dump({'_comment': 'Species metaobject entries. Generated by scripts/build-species-entries.py from docs/research/evidence/*.md — edit the script, not this file.', 'entries': merged}, open(out, 'w'), indent=1, ensure_ascii=False)
print('wrote', len(merged), 'entries ->', out)
