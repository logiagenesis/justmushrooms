import fs from 'node:fs';

const EXCLUSIONS = 'Photographic realism only - not an illustration, 3D render or CGI. Keep the palette in muted natural greens, ambers and near-blacks with no purple, magenta, rainbow or neon cast, and no teal-and-orange grade. The frame must contain no text, lettering, watermark, signature, logo, packaging or label, no borders, frames or vignette, and no interface elements. Nothing medical: no pills, capsules, syringes, medical crosses, lab coats, clinical laboratory or hospital settings, stethoscopes, anatomical diagrams or glowing organs. No people, faces or hands. Anatomy must be correct with no duplicated or deformed specimens, no extra stems and no impossible growth. Avoid a generic stock-photograph look.';

const SPECIES_STEM = (subject, atmos = 'fine spore dust suspended in the light beam, damp organic texture') =>
  `Photograph, in ultra-detailed cinematic macro, ${subject}. Render the morphology with scientific accuracy. Shoot it as if on a medium-format camera with a 100mm macro lens at f/5.6, lit by a single soft key at 45 degrees with a cool rim light for separation, against a deep charcoal near-black background of #0B0E0C, with warm amber highlights, ${atmos}, and extremely sharp focus on the specimen falling off naturally into shadow. The mood is a premium editorial botanical campaign: muted natural colour, matte finish, no gloss.`;

const PRODUCT_STEM = (cue) =>
  `Restage the amber glass dropper bottle from the reference image, preserving its exact label artwork, cap type, glass colour and proportions, as a premium product still life. Place it at a three-quarter angle standing on wet dark slate, lit by a single soft key at 45 degrees from camera left with a cool rim light raking the glass shoulder, against a near-black #0B0E0C background falling to pure shadow, with warm amber transmission through the glass and fine dust in the light beam. Arrange ${cue} sparsely in the mid-ground, softly out of focus. Light it like a spirits campaign: matte, muted natural colour, extremely sharp on the bottle, medium-format look. Do not alter, redraw or re-letter the label.`;

const rows = [];
const add = (r) => rows.push(r);

// ---- species: 8 x 3
const species = [
  ['lions-mane', "a Lion's Mane fungus, Hericium erinaceus, a single rounded white cushion with long cascading icicle-like spines hanging downward, with no cap, no gills and no stem, growing from a wound on a dead hardwood trunk in Southern Cape Afromontane forest",
    "extreme close-up of the hanging white spines of Hericium erinaceus, individual teeth resolved, faint translucency at the tips, dew beading",
    "Macro photograph of a Lion's Mane fruit body, its white spines hanging from dead hardwood."],
  ['reishi', "a Reishi bracket fungus, Ganoderma lucidum, a kidney-shaped shelf with a lacquered varnished red-brown cap, concentric growth zoning, a pale cream growing margin, and a pore surface underneath with no gills, on a dead hardwood stump",
    "extreme close-up of the varnished surface of a Ganoderma lucidum cap, concentric red-brown lacquer bands catching the key light, white growing margin at the frame edge",
    "Varnished red-brown reishi bracket growing on a dead hardwood stump."],
  ['chaga', "a Chaga sterile conk, Inonotus obliquus, a black cracked charcoal-like mass erupting from the trunk of a living birch tree, with rusty orange-brown interior visible in the fissures - not a mushroom shape and not on the ground",
    "extreme close-up of the cracked black exterior and burnt-orange cork interior of a chaga conk, deep fissures, birch bark visible at the frame edge",
    "Black cracked chaga conk growing on the trunk of a living birch."],
  ['cordyceps', "Cordyceps militaris, a cluster of bright orange club-shaped fruiting bodies with finely pimpled surfaces emerging from substrate, with no insects and nothing parasitising a visible host",
    "extreme close-up of a single orange Cordyceps militaris club, perithecia visible as fine bumps, translucent glow where backlit",
    "Cluster of orange Cordyceps militaris clubs emerging from substrate."],
  ['turkey-tail', "Turkey Tail, Trametes versicolor, overlapping rosettes of thin flexible brackets with concentric velvety bands in brown, ochre, cream and slate, showing a white pore surface beneath and no gills, on a fallen log",
    "extreme close-up of the concentric banding of a single Trametes versicolor bracket, velvet texture, wavy pale margin",
    "Overlapping turkey tail brackets banded in brown, ochre and cream on a fallen log."],
  ['tremella', "Tremella fuciformis, a translucent gelatinous white frilly mass of wavy petal-like lobes, glistening and semi-transparent, on a dead broadleaf branch - not opaque and not a capped mushroom",
    "extreme close-up of translucent Tremella fuciformis lobes, light passing through the gelatinous tissue, water droplets beading on the surface",
    "Translucent white tremella lobes on a dead broadleaf branch."],
  ['shiitake', "Shiitake, Lentinula edodes, umbrella caps of rich brown with white cracking across the cap surface, inrolled margins and cream gills beneath, growing from an inoculated oak log",
    "extreme close-up of a shiitake cap showing the white fissured crackle pattern against brown, gill edge visible at the bottom of the frame",
    "Shiitake caps with white cracking, growing from an inoculated oak log."],
  ['sceletium', "a succulent plant and not a fungus - Sceletium tortuosum, sprawling fleshy green leaves with raised translucent bladder cells on the surface, and a small star-shaped white-to-pale-yellow flower with fine filamentous petals, growing in dry Karoo quartz gravel under low sun",
    "extreme close-up of Sceletium tortuosum leaves showing the raised translucent idioblast cells, one open pale flower, arid grit background",
    "Sceletium tortuosum succulent in flower, growing in Karoo quartz gravel."],
];
for (const [h, heroSubj, macroSubj, alt] of species) {
  const arid = h === 'sceletium';
  const extra = arid ? ' It is a succulent plant: no mushroom, no fungus, no cap, no gills, no stem anywhere in frame.' : '';
  // Sceletium is an arid Karoo succulent - spore dust and damp texture belong to the fungi, not to it.
  const atmos = arid ? 'fine dry dust and quartz glitter suspended in the light beam, arid mineral texture' : undefined;
  add({ file: `species-${h}-hero.jpg`, group: 'species', ratio: '16:9', size: '4K', slot: `metaobject ${h}.hero_image`, alt, prompt: SPECIES_STEM(heroSubj, atmos) + extra });
  add({ file: `species-${h}-macro.jpg`, group: 'species', ratio: '4:5', size: '2K', slot: `metaobject ${h}.macro_editorial_image`, alt, prompt: SPECIES_STEM(macroSubj, atmos) + extra });
  add({ file: `species-${h}-og.jpg`, group: 'species', ratio: '3:2', size: '2K', slot: `metaobject ${h}.og_image (crop to 1200x630)`, alt, prompt: SPECIES_STEM(heroSubj, atmos) + ' Compose wide with generous negative space on one third of the frame for an overlaid wordmark.' + extra });
}

// ---- products: 23 x 3
const products = [
  ['lions-mane-mushroom-tincture-30ml', "a single white spined Lion's Mane specimen and a chip of dead hardwood", 'amber'],
  ['lions-mane-mushroom-tincture-50ml', "two white spined Lion's Mane specimens in a wider set with more negative space", 'amber'],
  ['lions-mane-mushroom-elixir-combo-50ml-30ml', "both bottles side by side, 50 ml and 30 ml, with a Lion's Mane specimen behind", 'amber'],
  ['reishi-mushroom-tincture-30ml', 'a varnished red-brown reishi bracket and dark bark', 'deep brown'],
  ['reishi-mushroom-elixir-combo-50ml-30ml', 'both bottles side by side with a reishi bracket propped behind', 'deep brown'],
  ['chaga-mushroom-tincture-30ml', 'a chunk of black cracked chaga conk and a curl of birch bark', 'deep brown'],
  ['chaga-mushroom-elixir-combo-50ml-30ml', 'both bottles side by side with a chaga chunk and birch bark', 'deep brown'],
  ['cordyceps-mushroom-tincture-30ml', 'a small cluster of orange cordyceps clubs', 'golden'],
  ['cordyceps-mushroom-elixir-combo-50ml-30ml', 'both bottles side by side with orange cordyceps clubs low at the left', 'golden'],
  ['turkey-tail-mushroom-tincture-30ml', 'banded turkey tail brackets and a fallen leaf', 'amber'],
  ['turkey-tail-mushroom-elixir-combo-50ml-30ml', 'both bottles side by side with a turkey tail rosette behind', 'amber'],
  ['tremella-mushroom-tincture-30ml', 'translucent white tremella lobes, glistening', 'pale golden'],
  ['tremella-mushroom-elixir-combo-50ml-30ml', 'both bottles side by side with tremella lobes catching the rim light', 'pale golden'],
  ['elixir-of-life-6-mushroom-blend-50ml', 'six distinct mushroom specimens arranged in a shallow arc with none dominant', 'deep brown'],
  ['new-general-maintenance-50ml', 'a restrained mixed group of specimens and dried bracken in morning light', 'amber'],
  ['the-workaholic', "a slate desk edge, a cold coffee ring and a single Lion's Mane specimen", 'amber'],
  ['relax-no-stress-50ml', 'a soft fabric fold and a reishi bracket in low warm dusk light', 'deep brown'],
  ['menopause-50ml', 'warm cream linen and a dried fynbos sprig in soft diffused light', 'amber'],
  ['myco-radiance-skin-perfection', 'tremella lobes and a shiitake cap with dewy highlights in a slightly cooler grade', 'pale golden'],
  ['extreme-gut-fix', 'turkey tail brackets on dark ceramic in fermented-amber tones', 'deep brown'],
  ['sceletium-tortuosum-the-happy-place-50ml', 'sceletium succulent leaves and one pale flower in Karoo grit - a succulent plant, no mushroom or fungus in frame', 'amber'],
  ['elixir-for-pets-tincture-30ml', 'a worn leather collar out of focus and dry grass in warm domestic light, with no animal in frame', 'amber'],
  ['pet-elixer-of-life-combo-50ml-30ml', 'both bottles side by side with a worn leather collar and dry grass, no animal in frame', 'amber'],
];
for (const [h, cue, fill] of products) {
  const pretty = h.replace(/-/g, ' ');
  add({ file: `product-${h}.jpg`, group: 'product', ratio: '4:5', size: '4K', slot: `product ${h} - gallery image 1`, alt: `Amber dropper bottle of ${pretty} on dark slate.`, prompt: PRODUCT_STEM(cue) });
  add({ file: `product-${h}-macro.jpg`, group: 'product', ratio: '4:5', size: '4K', slot: `product ${h} - gallery image 2`, alt: `A drop of ${pretty} falling from a glass dropper.`, prompt: `Photograph, in extreme macro, a single drop of ${fill} tincture falling from a glass dropper pipette against a near-black background. Catch the drop mid-fall and render it sharp, with internal refraction and a warm specular highlight, fine mist and dust in the beam. Shoot it with a high-speed capture look, premium and editorial, with no bottle label visible in frame.` });
  add({ file: `product-${h}-scene.jpg`, group: 'product', ratio: '4:5', size: '4K', slot: `product ${h} - gallery image 3`, alt: `${pretty} bottle staged with its botanical.`, prompt: PRODUCT_STEM(cue) + ' Compose wider, giving the botanical material more of the frame than the bottle.' });
}

// ---- scale plates
add({ file: 'product-scale-hand.jpg', group: 'product', ratio: '4:5', size: '4K', slot: 'shared gallery - scale reference', alt: 'A hand holding an amber dropper bottle, showing its size.', prompt: 'Photograph a hand holding an amber glass dropper bottle at chest height in natural window light from the left, wearing a neutral linen sleeve, against a plain warm-grey wall. Render the skin naturally with visible texture, no jewellery and no nail polish, as an honest domestic scale reference. Editorial lifestyle, muted colour. HANDS ARE PERMITTED IN THIS FRAME - remove the no-hands constraint.' });
add({ file: 'product-scale-dropper.jpg', group: 'product', ratio: '4:5', size: '4K', slot: 'shared gallery - scale reference', alt: 'An amber dropper bottle beside its glass pipette on wet slate.', prompt: 'Photograph an amber glass dropper bottle lying beside its glass pipette on wet dark slate, lit overhead at three-quarters, with water beading on the stone. A clean scale reference, premium still life, no hands.' });

// ---- home
add({ file: 'hero-forest.jpg', group: 'home', ratio: '16:9', size: '4K', slot: 'index > hero.image', alt: 'Mist threading between yellowwood trunks in Afromontane forest at first light.', prompt: 'Photograph, wide and cinematic, the floor of a Southern Cape Afromontane forest at first light: yellowwood and stinkwood trunks, tree ferns, deep leaf litter, and low sea mist threading between the trunks. A single shaft of warm light strikes damp ground where pale fungal fruiting bodies emerge, with faint mycelial threads visible in the litter. Hold the shadows near-black and the palette to muted green and amber. Leave a large uncluttered dark area across the left two-thirds of the frame for overlaid text. Atmospheric and restrained.' });
add({ file: 'hero-forest-mobile.jpg', group: 'home', ratio: '4:5', size: '4K', slot: 'index > hero.image_mobile', alt: 'Mist threading between yellowwood trunks in Afromontane forest at first light.', prompt: 'Photograph the same Southern Cape Afromontane forest scene recomposed vertically: the light shaft and fungal cluster sit in the lower third, canopy and sea mist above. Keep the grade identical - muted green and amber, near-black shadows - and leave clear dark space across the top half of the frame for overlaid text.' });
add({ file: 'page-index-process.jpg', group: 'home', ratio: '4:5', size: '2K', slot: 'index > image-with-text.image', alt: 'Amber demijohns and dried mushroom material on a workshop bench.', prompt: 'Photograph a small-batch extraction still life: amber glass demijohns on a scarred timber bench, spring water in a plain glass vessel, and dried mushroom material in a shallow steel tray, lit by late afternoon light through a dusty window. It should read as an artisanal workshop and not a laboratory - warm and matter-of-fact, with no people, no lab equipment and no clinical surfaces.' });

// ---- collections
const collections = [
  ['all', 'Shop all', 'an arc of amber bottles receding into shadow at shallow depth of field'],
  ['single-species', 'Single-species tinctures', 'eight distinct mushroom specimens laid out in an even grid on dark slate, taxonomic and evenly lit'],
  ['blends', 'Blends', 'several mushroom specimens overlapping and merging into one another in a warmer grade'],
  ['pets', 'For pets', 'a worn leather collar and an amber bottle on a sunlit floorboard, with no animal in frame'],
  ['combo-deals', 'Combo deals', 'paired amber bottles, one taller and one shorter, repeated in receding rows'],
  ['botanicals', 'Botanicals', 'a sceletium succulent in Karoo quartz grit, wide and arid - a plant, not a fungus'],
  ['frontpage', 'Home page', 'the Southern Cape forest floor at first light with mist between the trunks'],
];
for (const [h, title, subj] of collections) {
  add({ file: `collection-${h}-og.jpg`, group: 'collection', ratio: '3:2', size: '2K', slot: `collection ${h} - featured_image (crop to 1200x630)`, alt: `${title} collection.`, prompt: `Photograph ${subj}, lit with a single soft key at 45 degrees against a near-black #0B0E0C ground, in muted natural greens, ambers and near-blacks. Compose wide with generous negative space on one third of the frame for an overlaid wordmark. Premium editorial, matte, medium-format look.` });
}

// ---- pages
const pages = [
  ['about-hero', '16:9', '4K', 'page.about > page-hero.image', 'Plettenberg Bay coastline at dawn seen from the forest edge.', 'the Plettenberg Bay coastline at dawn seen from the forest edge, with mist lying over the Tsitsikamma, restrained and very wide'],
  ['about-story', '4:5', '2K', 'page.about > image-with-text.image', 'Handwritten batch notes and a scale on a workbench.', 'a workbench detail - handwritten batch notes, a balance scale and amber glass in late light, with no faces and no branding'],
  ['sourcing-hero', '16:9', '4K', 'page.sourcing > page-hero.image', 'Inoculated hardwood logs stacked in dappled forest shade.', 'inoculated hardwood logs stacked in dappled forest shade, damp and orderly, reading as real cultivation'],
  ['sourcing-detail', '4:5', '2K', 'page.sourcing > image-with-text.image', 'A wax-sealed inoculation point on an oak log.', 'a close detail of a drilled and wax-sealed inoculation point on an oak log, with sawdust spawn visible in the hole'],
  ['species-hero', '16:9', '4K', 'page.species-index > page-hero.image', 'Eight mushroom and plant specimens laid out on dark slate.', 'a flat-lay taxonomy plate of eight distinct specimens arranged in an even grid on dark slate, evenly lit and museum-like'],
  ['mushroom-finder-hero', '16:9', '4K', 'page.mushroom-finder > page-hero.image', 'A branching mycelial network against near-black.', 'a branching mycelial network glowing very faintly against near-black, abstract but organic, suggesting a decision tree. Keep the pale green accent under five percent of the frame'],
  ['faq-hero', '16:9', '4K', 'page.faq > page-hero.image', 'Layered bracket fungi in quiet macro.', 'layered bracket fungi in quiet macro, calm and neutral, with heavy negative space'],
  ['contact-hero', '16:9', '4K', 'page.contact > page-hero.image', 'The Garden Route coast road in soft morning light.', 'the Garden Route coast road in soft morning light, giving a sense of place, with no signage and no vehicles'],
  ['disclaimer-hero', '16:9', '4K', 'page.disclaimer > page-hero.image', 'Wet dark slate under a single raking light.', 'wet dark slate texture under a single raking light, deliberately plain, with no specimen in frame - sober and quiet'],
  ['shipping-returns-hero', '16:9', '4K', 'page.shipping-returns > page-hero.image', 'An unbranded kraft parcel on a timber bench.', 'an unbranded kraft parcel and paper packing material on a timber bench, honest and practical, with no courier branding and no logos'],
];
for (const [n, ratio, size, slot, alt, subj] of pages) {
  add({ file: `page-${n}.jpg`, group: 'page', ratio, size, slot, alt, prompt: `Photograph ${subj}. Light it with a single soft key at 45 degrees and a cool rim, against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte finish, medium-format look. Leave uncluttered darker area for overlaid text.` });
}

// ---- blog
const articles = [
  ['blog-hero', 'Blog index banner', 'an open field notebook with pressed specimens beside it on a timber desk'],
  ['what-is-a-tincture', 'What a dual extraction actually is', 'a glass vessel of spring water, a measure of clear ethanol and dried mushroom material arranged on dark slate'],
  ['fruit-body-vs-mycelium', 'Fruit body against grain-grown mycelium', 'a whole mushroom fruit body on the left and a block of pale grain-grown mycelium on the right, side by side on dark slate for comparison'],
  ['reading-evidence-grades', 'How to read the evidence grades', 'a stack of printed journal papers on dark slate, annotated in pencil, with reading glasses beside them'],
  ['how-to-take-a-tincture', 'How to take a tincture', 'a glass dropper held over a plain glass of water on a breakfast table in morning light'],
  ['storage-and-shelf-life', 'Storage and shelf life', 'amber bottles standing in a dark cupboard with light falling across the shelf edge'],
  ['sa-regulations-explained', 'South African regulation, explained', 'plain printed documents and a pen on a timber desk, sober and unbranded'],
];
for (const [n, title, subj] of articles) {
  add({ file: `article-${n}.jpg`, group: 'blog', ratio: '16:9', size: '2K', slot: `article card - ${title}`, alt: `${title}.`, prompt: `Photograph ${subj}, lit by a single soft key at 45 degrees against near-black shadows, in muted natural greens, ambers and near-blacks. Premium editorial, matte, medium-format look.` });
}

// ---- brand
add({ file: 'brand-favicon.png', group: 'brand', ratio: '1:1', size: '2K', slot: 'favicon source - redraw as vector', alt: '', prompt: 'Design a single simplified mycelium-node glyph: one central node with three or four branching threads, rendered in flat gold #C9A24A on a near-black #0B0E0C ground. It must stay legible when reduced to 16 pixels, so keep strokes thick and even and the silhouette simple. Flat graphic mark, centred, generous margin, no text.' });
add({ file: 'brand-apple-touch.png', group: 'brand', ratio: '1:1', size: '2K', slot: 'apple-touch-icon source - redraw as vector', alt: '', prompt: 'Design the same simplified mycelium-node glyph in flat gold #C9A24A, full-bleed on a near-black #0B0E0C ground with a tighter margin. Flat graphic mark, no text.' });
add({ file: 'brand-og-default.jpg', group: 'brand', ratio: '3:2', size: '2K', slot: 'default og:image (crop to 1200x630)', alt: '', prompt: 'Photograph the Southern Cape forest floor at first light with mist between the trunks and a shaft of warm light on damp ground. Compose it very wide with the whole left half dark and empty for an overlaid wordmark. Muted green and amber, near-black shadows. TEXT IS PERMITTED IN THIS FRAME only if rendering the words "JUST MUSHROOMS" in a fine serif; otherwise leave the space empty.' });
add({ file: 'brand-og-home.jpg', group: 'brand', ratio: '3:2', size: '2K', slot: 'home og:image (crop to 1200x630)', alt: '', prompt: 'Photograph an arc of amber dropper bottles receding into near-black shadow at shallow depth of field, warm rim light on the glass shoulders. Compose wide with the left third empty and dark for an overlaid wordmark.' });

// ---- textures
const textures = [
  ['spores', 'fine suspended spore dust particles in warm white, scattered unevenly, against a fully transparent background'],
  ['mycelium-lines', 'delicate branching mycelial linework at a single consistent stroke weight, in pale green #8FF7C8, against a fully transparent background'],
  ['paper-grain', 'a neutral organic paper grain at low contrast, seamless and tileable, against a transparent background'],
  ['slate', 'a wet dark slate surface texture, seamless and tileable, with subtle water beading and a raking highlight'],
];
for (const [n, subj] of textures) {
  add({ file: `texture-${n}.png`, group: 'texture', ratio: '1:1', size: '2K', slot: 'decorative overlay - aria-hidden', alt: '', prompt: `Render ${subj}. It is a decorative overlay, so keep it subtle and even across the frame, with no focal subject and no composition. Export with an alpha channel.` });
}

// ---- write CSV
const esc = (s) => '"' + String(s).replace(/"/g, '""') + '"';
const header = ['filename', 'group', 'aspect_ratio', 'image_size', 'theme_slot', 'alt_text', 'prompt', 'exclusions'];
const lines = [header.join(',')];
for (const r of rows) {
  lines.push([r.file, r.group, r.ratio, r.size, r.slot, r.alt, r.prompt, EXCLUSIONS].map(esc).join(','));
}
fs.writeFileSync(new URL('../data/image-manifest.csv', import.meta.url), lines.join('\n') + '\n');

const byGroup = {};
for (const r of rows) byGroup[r.group] = (byGroup[r.group] || 0) + 1;
console.log('rows:', rows.length);
console.log(byGroup);
const dupes = rows.map(r => r.file).filter((f, i, a) => a.indexOf(f) !== i);
console.log('duplicate filenames:', dupes.length ? dupes : 'none');
