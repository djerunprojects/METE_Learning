import type { Question } from '../types'
import { forNode } from './build'

// Extra questions for Biomaterials and Aerospace Materials skills.
// Sources: Ratner et al., Biomaterials Science; Park & Lakes; Hench (1991); Reed, The Superalloys; Polmear, Light Alloys;
// Padture, Gell & Jordan (2002); Mouritz, Introduction to Aerospace Materials.

const bc = forNode('biocompatibility')
const mi = forNode('metallic-implants')
const bcr = forNode('bioceramics')
const bd = forNode('biodegradable-materials')
const ts = forNode('tissue-scaffolds')
const lw = forNode('lightweight-alloys')
const sa = forNode('superalloys')
const tbc = forNode('thermal-barrier-coatings')
const ac = forNode('aerospace-composites')
const tp = forNode('thermal-protection')

export const appPlusA: Question[] = [
  // ---- Biocompatibility & Host Response ----
  bc.tr('bc-011', 'An implant surface is made more hydrophilic (more easily wetted).', 'the surface wettability changes', 'the type and amount of proteins that adsorb', 'depends',
    'Wettability changes protein adsorption, but whether that helps depends on the application: cell attachment for bone, low fouling for blood contact. Surface design is application specific.'),
  bc.mc('bc-012', 'What is an in vitro test of a biomaterial?', [
    'A test with cells or fluids in the lab, outside a living body',
    'A test inside a living animal or person',
    'A test of mechanical strength only',
    'A test at high temperature',
  ], 0, 'In vitro tests (e.g. cell culture toxicity) come first; in vivo animal studies and clinical trials follow.'),
  bc.tf('bc-013', 'Infection is a major cause of implant failure, because bacteria can form protective biofilms on implant surfaces.', true,
    'Biofilms shield bacteria from antibiotics and the immune system, so implant infections often require removing the device.'),
  bc.mc('bc-014', 'Why can very small particles (e.g. nanometer-scale wear debris) be more problematic than large ones?', [
    'They are easily taken up by cells and can travel through the body, triggering inflammation',
    'They are always harmless',
    'They are too big to move',
    'They make implants stronger',
  ], 0, 'Particle size, shape and chemistry all affect the body’s response; particles in the sub-micrometer to micrometer range are especially active.'),
  bc.tr('bc-015', 'A metal implant is made more corrosion resistant.', 'the corrosion rate in body fluid decreases', 'the release of metal ions into the tissue', 'decreases',
    'Less corrosion means fewer ions released, lowering the risk of allergic, toxic or inflammatory responses.'),
  bc.mt('bc-016', 'Match each test stage to what it shows.', [
    ['Cell culture tests', 'Whether the material is toxic to cells'],
    ['Animal implantation', 'Tissue response in a living body'],
    ['Clinical trials', 'Safety and performance in patients'],
    ['Long-term follow-up', 'Late failures such as wear and loosening'],
  ], 'Biomaterials are evaluated in stages, from simple lab tests to years of clinical follow-up.'),
  bc.mc('bc-017', 'Why can a material that is fine in bone be unsuitable in contact with blood?', [
    'Blood contact raises the risk of clotting, which bone implants do not face in the same way',
    'Blood is not a fluid',
    'Bone and blood have the same requirements',
    'Blood dissolves all materials',
  ], 0, 'Biocompatibility depends on the site and function; blood-contacting devices need specific anti-thrombogenic properties.'),
  bc.tf('bc-018', 'Some implants are coated with drugs (e.g. drug-eluting stents) to control the local tissue response.', true,
    'Drug-eluting stents release medication that slows tissue overgrowth, reducing re-narrowing of the artery.'),
  bc.tr('bc-019', 'A surgical implant is sterilized.', 'any remaining bacteria on the implant surface increase', 'the risk of infection after surgery', 'increases',
    'Even a few bacteria can colonize an implant and form a biofilm, which is why sterilization and sterile handling are critical.'),
  bc.ce('bc-020', 'Select every correct statement.', 'A new polymer is proposed for a long-term cardiovascular device.', [
    'Its blood compatibility (clotting response) must be tested',
    'Its long-term degradation products must be safe',
    'Its fatigue resistance matters, since the heart beats billions of times',
    'Mechanical properties never matter for implants',
  ], [0, 1, 2], 'A heart beats roughly 40 million times a year, so long-term mechanical and biological stability are both required.'),

  // ---- Metallic Implants ----
  mi.tr('mi-011', 'A titanium alloy implant is designed for a long-term bone implant.', 'the alloy modulus is lowered (e.g. with β-titanium alloys)', 'the load shared by the surrounding bone', 'increases',
    'A less stiff implant lets bone carry more load, which keeps it healthy and reduces stress shielding.'),
  mi.mc('mi-012', 'Why are porous coatings (e.g. sintered beads or titanium mesh) added to some hip stems?', [
    'Bone can grow into the pores, locking the implant in place without cement',
    'To make the implant lighter only',
    'To make it magnetic',
    'To stop all bone contact',
  ], 0, 'Cementless implants rely on bone ingrowth into porous surfaces for long-term fixation.'),
  mi.tf('mi-013', 'Metal-on-metal hip bearings can release metal ions and particles that cause adverse tissue reactions in some patients.', true,
    'Problems with wear debris and ion release led to the recall of some metal-on-metal hip designs.'),
  mi.mc('mi-014', 'What is the shape memory effect in Nitinol?', [
    'The alloy can be deformed and then return to its original shape when heated, by a reversible martensitic transformation',
    'The alloy remembers its color',
    'The alloy melts and resolidifies',
    'The alloy becomes magnetic',
  ], 0, 'Shape memory and superelasticity both come from reversible transformation between austenite and martensite.'),
  mi.tr('mi-015', 'A stainless steel implant is used in the body.', 'the molybdenum content of the steel increases', 'its resistance to pitting in body fluids', 'increases',
    'Molybdenum strengthens the passive film against chloride attack, which is why 316L contains about 2–3% Mo.'),
  mi.mt('mi-016', 'Match each implant problem to its cause.', [
    ['Stress shielding', 'Implant much stiffer than bone'],
    ['Aseptic loosening', 'Bone loss from wear particles'],
    ['Fretting corrosion', 'Micromotion at modular junctions'],
    ['Fatigue fracture', 'Repeated cyclic loading'],
  ], 'Each failure mode suggests a different design or material fix.'),
  mi.mc('mi-017', 'Why are dental implants usually made of commercially pure titanium or Ti alloys?', [
    'Excellent osseointegration and corrosion resistance in the mouth',
    'They are the cheapest materials',
    'They dissolve over time',
    'They are magnetic for easy placement',
  ], 0, 'Bone bonds directly to titanium’s oxide surface, anchoring the implant firmly in the jaw.'),
  mi.tf('mi-018', 'Cobalt–chromium alloys are much stiffer than cortical bone.', true,
    'Co–Cr alloys have a modulus around 200–230 GPa, roughly ten times that of cortical bone, so they can cause stress shielding.'),
  mi.tr('mi-019', 'Two modular hip implant parts are fitted together.', 'micromotion at the taper junction increases', 'the risk of fretting corrosion', 'increases',
    'Small repeated movements rub off passive films; the exposed metal corrodes and releases debris.'),
  mi.ce('mi-020', 'Select every correct statement.', 'A surgeon chooses a material for a coronary stent.', [
    'It must expand and hold the artery open without fracturing',
    'It must resist fatigue under heartbeat cycling',
    'Nitinol or Co–Cr alloys are common choices',
    'It should be as brittle as possible',
  ], [0, 1, 2], 'Stents are flexed with every heartbeat, so fatigue resistance and deformability are essential.'),

  // ---- Bioceramics ----
  bcr.tr('bcr-011', 'HA is used as a coating on a titanium hip stem.', 'the HA coating becomes very thick', 'the risk of the coating cracking or delaminating', 'increases',
    'Thick brittle coatings build up more stress and can crack or peel. Coatings are usually tens of micrometers thick.'),
  bcr.mc('bcr-012', 'Why is alumina-toughened zirconia (or zirconia-toughened alumina) used for modern ceramic hip heads?', [
    'It combines alumina’s stability and hardness with zirconia’s toughness',
    'It is softer than pure alumina',
    'It is a metal',
    'It dissolves in the body',
  ], 0, 'Composite ceramics reduce fracture risk and resist the low-temperature degradation of pure zirconia.'),
  bcr.tf('bcr-013', 'Calcium phosphate bone cements can set inside the body, filling bone defects.', true,
    'Injectable cements harden into apatite-like materials that bone can later remodel.'),
  bcr.mc('bcr-014', 'What does osteoconductive mean?', [
    'The material’s surface supports bone growth along it',
    'The material conducts electricity in bone',
    'The material dissolves bone',
    'The material is magnetic',
  ], 0, 'Osteoconductive materials act as a scaffold for bone; osteoinductive materials actively trigger bone formation.'),
  bcr.tr('bcr-015', 'Bioactive glasses are compared.', 'the silica content increases to very high levels', 'the bioactivity (rate of apatite layer formation)', 'decreases',
    'Too much silica makes the network too stable, slowing the ion exchange needed to form the apatite layer.'),
  bcr.mt('bcr-016', 'Match each bioceramic to its main type.', [
    ['Alumina', 'Bioinert'],
    ['Bioactive glass', 'Bioactive'],
    ['β-tricalcium phosphate', 'Resorbable'],
  ], 'Bioceramics are grouped by how they interact with tissue.'),
  bcr.mc('bcr-017', 'Why are ceramic femoral heads checked carefully before implantation?', [
    'Ceramics are brittle, so flaws could cause fracture; proof testing screens out weak parts',
    'They are too soft',
    'They change color',
    'They are radioactive',
  ], 0, 'Proof testing each head at loads above service conditions eliminates parts with dangerous flaws.'),
  bcr.tf('bcr-018', 'Hydroxyapatite in bone is a ceramic, combined with collagen fibers to make a natural composite.', true,
    'Bone combines hard mineral crystals with tough collagen, giving a mix of stiffness and toughness that engineers try to mimic.'),
  bcr.tr('bcr-019', 'A porous HA bone graft is designed.', 'the pore interconnection increases', 'bone ingrowth into the graft', 'increases',
    'Interconnected pores let cells and blood vessels move through the graft.'),
  bcr.ce('bcr-020', 'Select every correct statement.', 'A dental crown is made of zirconia.', [
    'Zirconia is strong and tough for a ceramic',
    'It is tooth-colored and biocompatible',
    'It resists wear well',
    'It is a metal alloy',
  ], [0, 1, 2], 'Zirconia crowns combine strength with good appearance, replacing metal-based crowns in many cases.'),

  // ---- Biodegradable Materials ----
  bd.tr('bd-011', 'A magnesium alloy implant is placed in the body.', 'the corrosion rate increases', 'the amount of hydrogen gas released per day', 'increases',
    'Each magnesium atom that corrodes releases hydrogen, so fast corrosion can create gas pockets.'),
  bd.mc('bd-012', 'Why are iron and zinc also studied as biodegradable metals?', [
    'They degrade in the body more slowly than magnesium, which suits some applications',
    'They do not degrade at all',
    'They are non-metallic',
    'They degrade faster than any polymer',
  ], 0, 'Iron degrades very slowly; zinc sits between magnesium and iron, making it attractive for stents.'),
  bd.tf('bd-013', 'Biodegradable polymers lose mechanical strength before they lose most of their mass.', true,
    'Hydrolysis cuts chains and lowers molecular weight first, weakening the material while it still looks intact.'),
  bd.mc('bd-014', 'What is PLGA?', [
    'A copolymer of lactic and glycolic acid whose degradation rate depends on its composition',
    'A ceramic',
    'A metal alloy',
    'A non-degradable polymer',
  ], 0, 'Changing the ratio of lactic to glycolic units tunes how fast it degrades, from weeks to months.'),
  bd.tr('bd-015', 'A PLA device is stored before use.', 'it is stored in humid conditions', 'premature degradation of the polymer', 'increases',
    'Water starts hydrolysis even before implantation, which is why these devices are packed dry.'),
  bd.mt('bd-016', 'Match each biodegradable material to its degradation mechanism.', [
    ['PLA and PGA', 'Hydrolysis of ester bonds'],
    ['Magnesium alloys', 'Corrosion releasing ions and hydrogen'],
    ['β-tricalcium phosphate', 'Dissolution and cell-mediated resorption'],
  ], 'Polymers, metals and ceramics each degrade by different mechanisms.'),
  bd.mc('bd-017', 'Why might a surgeon choose a biodegradable screw for a child’s bone fracture?', [
    'It avoids a second surgery and does not interfere with the growing bone long term',
    'It is stronger than titanium',
    'It is magnetic',
    'It never degrades',
  ], 0, 'Removing hardware from growing patients adds risk; degradable implants avoid that.'),
  bd.tf('bd-018', 'The local pH near degrading PLA can become acidic.', true,
    'Lactic acid released during degradation lowers the local pH, which can cause inflammation if released too quickly.'),
  bd.tr('bd-019', 'A magnesium alloy is coated with a dense ceramic layer.', 'the coating quality improves', 'the early degradation rate', 'decreases',
    'A good coating slows initial corrosion, giving the healing tissue time before the implant loses strength.'),
  bd.ce('bd-020', 'Select every correct statement.', 'A biodegradable stent is designed for a coronary artery.', [
    'It must support the artery until it heals',
    'It should then degrade safely',
    'Its degradation products must be non-toxic',
    'It must last forever',
  ], [0, 1, 2], 'The aim is temporary support followed by complete, safe disappearance.'),

  // ---- Tissue Scaffolds ----
  ts.tr('ts-011', 'A scaffold is designed for cartilage repair.', 'the scaffold stiffness is matched closer to cartilage', 'how well it supports cartilage-forming cells', 'increases',
    'Cells sense their mechanical environment; matching the target tissue’s stiffness helps them form the right tissue.'),
  ts.mc('ts-012', 'Why are hydrogels used as scaffolds for soft tissue?', [
    'They are water-swollen networks that resemble the soft, hydrated environment of natural tissue',
    'They are very hard',
    'They are metals',
    'They do not contain water',
  ], 0, 'Hydrogels can be made from natural or synthetic polymers and can carry cells and growth factors.'),
  ts.tf('ts-013', 'Scaffolds can be loaded with growth factors to encourage specific tissue formation or blood vessel growth.', true,
    'Controlled release of growth factors can guide cells to form bone, blood vessels or other tissue types.'),
  ts.mc('ts-014', 'What is decellularized tissue?', [
    'Natural tissue with its cells removed, leaving the ECM as a scaffold',
    'Synthetic polymer foam',
    'Pure metal mesh',
    'Ceramic powder',
  ], 0, 'Decellularized matrices keep natural structure and signals while reducing immune rejection.'),
  ts.tr('ts-015', 'A scaffold is made by salt leaching.', 'the size of the salt crystals increases', 'the pore size of the scaffold', 'increases',
    'The pores are the spaces left after the salt dissolves, so larger crystals leave larger pores.'),
  ts.mt('ts-016', 'Match each scaffold property to why it matters.', [
    ['Interconnected porosity', 'Lets cells and nutrients reach the interior'],
    ['Degradation rate', 'Should match new tissue formation'],
    ['Surface chemistry', 'Controls cell attachment'],
    ['Mechanical stiffness', 'Guides cell behavior and supports load'],
  ], 'Good scaffolds balance all of these at once.'),
  ts.mc('ts-017', 'Why is vascularization a major challenge for thick engineered tissues?', [
    'Without blood vessels, cells deep inside cannot get enough oxygen and nutrients',
    'Blood vessels make tissue weaker',
    'Cells do not need oxygen',
    'Vascularization only matters for bone',
  ], 0, 'Diffusion alone supplies only a few hundred micrometers, so large tissues need blood vessels to grow in.'),
  ts.tf('ts-018', '3D bioprinting can place cells and materials together in precise patterns.', true,
    'Bioinks containing cells are printed layer by layer, aiming to rebuild complex tissue architectures.'),
  ts.tr('ts-019', 'An electrospun fiber scaffold is made.', 'the fiber diameter decreases toward the nanometer scale', 'the surface area available for cell attachment', 'increases',
    'Thinner fibers give much more surface per volume and resemble natural collagen fibrils.'),
  ts.ce('ts-020', 'Select every correct statement.', 'A bone scaffold is designed for a large defect.', [
    'It needs enough strength to survive implantation and early loading',
    'It needs interconnected pores of about 100 µm or more',
    'It should eventually be replaced by new bone',
    'It should block all blood vessel ingrowth',
  ], [0, 1, 2], 'Bone scaffolds balance strength, porosity, degradation and support for blood vessel growth.'),

  // ---- Lightweight Alloys ----
  lw.tr('lw-011', 'An aircraft designer replaces aluminum with an Al–Li alloy in fuselage panels.', 'the lithium content of the alloy increases (within the alloy range)', 'the weight of the panels for the same stiffness', 'decreases',
    'Lower density and higher stiffness both reduce the material needed for a given stiffness.'),
  lw.mc('lw-012', 'Why do aerospace aluminum alloys use cladding (Alclad sheet)?', [
    'A thin layer of pure aluminum protects the stronger, less corrosion-resistant core alloy',
    'To make the sheet magnetic',
    'To increase density',
    'To make it weldable to steel',
  ], 0, 'The pure aluminum layer is anodic to the core and protects it, even at scratches.'),
  lw.tf('lw-013', 'Exfoliation corrosion can occur in rolled high-strength aluminum alloys, causing layers to peel apart along elongated grains.', true,
    'Corrosion along the flattened grain boundaries of rolled plate produces voluminous products that push layers apart.'),
  lw.mc('lw-014', 'Why is titanium used for jet engine fan blades and compressor discs?', [
    'High specific strength and good fatigue resistance at moderate temperatures',
    'It is the cheapest metal',
    'It is the lightest metal',
    'It melts easily',
  ], 0, 'Titanium alloys combine strength, low density and resistance to fatigue and corrosion in the cooler engine sections.'),
  lw.tr('lw-015', 'A titanium alloy part is exposed to high temperature in air.', 'the temperature rises above about 600 °C', 'the risk of oxygen embrittlement of the surface', 'increases',
    'Titanium dissolves oxygen at high temperature, forming a hard, brittle surface layer (alpha case).'),
  lw.mt('lw-016', 'Match each alloy to a key advantage.', [
    ['Al–Li alloys', 'Lower density and higher stiffness'],
    ['7xxx aluminum', 'Very high strength'],
    ['2xxx aluminum', 'Damage tolerance'],
    ['Ti-6Al-4V', 'High specific strength at moderate temperatures'],
  ], 'Each alloy is placed where its strengths matter most in the airframe or engine.'),
  lw.mc('lw-017', 'What does "buy-to-fly ratio" mean in aerospace manufacturing?', [
    'The mass of raw material bought divided by the mass of the finished part',
    'The ratio of ticket prices',
    'The fuel use per passenger',
    'The speed of the aircraft',
  ], 0, 'Machining titanium parts from billet can waste most of the material, so near-net-shape forging or additive manufacturing are valuable.'),
  lw.tf('lw-018', 'Aluminum alloys can be heat treated to tempers that trade some strength for better stress corrosion resistance.', true,
    'Overaged tempers like T73 are used in critical thick parts to reduce stress corrosion cracking.'),
  lw.tr('lw-019', 'An aluminum alloy is used for an aircraft part that gets warm in service.', 'the service temperature rises above about 150 °C', 'its strength over time', 'decreases',
    'Precipitates continue to coarsen (overage) at elevated temperatures, so aluminum alloys lose strength.'),
  lw.ce('lw-020', 'Select every correct statement.', 'A designer chooses between aluminum and titanium for a wing fitting attached to a CFRP wing.', [
    'Titanium avoids galvanic corrosion with carbon fibers',
    'Titanium’s thermal expansion is closer to that of CFRP',
    'Titanium costs more than aluminum',
    'Aluminum is the better choice for contact with carbon fibers',
  ], [0, 1, 2], 'Composite-intensive aircraft use more titanium for exactly these reasons, despite its cost.'),

  // ---- Ni-Based Superalloys ----
  sa.tr('sa-011', 'A nickel superalloy is aged to form γ′.', 'the volume fraction of γ′ increases', 'the high-temperature strength', 'increases',
    'More of the strengthening γ′ phase means more obstacles to dislocations, up to around 60–70% in blade alloys.'),
  sa.mc('sa-012', 'Why are nickel superalloy turbine blades made by investment casting?', [
    'It produces complex shapes with internal cooling passages and allows directional solidification',
    'It is the cheapest process',
    'It avoids melting the metal',
    'It produces porous parts on purpose',
  ], 0, 'Ceramic cores form the internal cooling channels, and the mold can be withdrawn slowly to grow columnar or single crystals.'),
  sa.tf('sa-013', 'Topologically close-packed phases are brittle, unwanted phases that can form in superalloys with too many refractory elements.', true,
    'They remove strengthening elements from the matrix and act as crack initiation sites, so alloy chemistry is carefully balanced.'),
  sa.mc('sa-014', 'What is rafting in single-crystal superalloys?', [
    'γ′ particles merging into plates under stress at high temperature',
    'The blade floating in the gas',
    'Grain boundaries forming',
    'The alloy melting',
  ], 0, 'Rafting changes the microstructure during service and affects creep behavior.'),
  sa.tr('sa-015', 'A turbine runs at higher temperature.', 'the turbine inlet temperature increases', 'the engine efficiency', 'increases',
    'Higher gas temperature means more work from the same fuel, which is why materials and coatings are pushed to their limits.'),
  sa.mt('sa-016', 'Match each superalloy feature to its benefit.', [
    ['γ′ precipitates', 'Strength at high temperature'],
    ['Single crystal', 'No grain boundary creep weakness'],
    ['Rhenium additions', 'Slower diffusion and coarsening'],
    ['Chromium and aluminum', 'Oxidation resistance'],
  ], 'Superalloys combine many design features to survive extreme conditions.'),
  sa.mc('sa-017', 'Why are turbine discs often made by powder metallurgy?', [
    'It gives a fine, uniform microstructure without the segregation of large castings',
    'Powder is cheaper than ingot',
    'Discs do not need strength',
    'It avoids heat treatment',
  ], 0, 'Highly alloyed disc alloys segregate badly when cast in large ingots; powder routes avoid this.'),
  sa.tf('sa-018', 'Superalloy turbine blades can operate in gases hotter than the alloy’s melting point because of cooling and coatings.', true,
    'Internal cooling, film cooling and thermal barrier coatings keep the metal well below the gas temperature.'),
  sa.tr('sa-019', 'A turbine blade is in service.', 'the stress on the blade increases at the same temperature', 'the creep rupture life', 'decreases',
    'Higher stress means a lower Larson–Miller parameter is allowed, so the blade fails sooner.', 'larson-miller'),
  sa.ce('sa-020', 'Select every correct statement.', 'A single-crystal turbine blade is inspected after long service.', [
    'The γ′ may have coarsened or rafted',
    'The coating may have oxidized or spalled',
    'Creep strain may have lengthened the blade',
    'The blade has become polycrystalline',
  ], [0, 1, 2], 'Service damage includes microstructural changes, coating degradation and creep; the crystal stays single unless recrystallization is triggered.'),

  // ---- Thermal Barrier Coatings ----
  tbc.tr('tbc-011', 'A thermal barrier coating is in service.', 'the bond coat temperature increases', 'the growth rate of the TGO', 'increases',
    'Oxidation is diffusion controlled, so a hotter bond coat grows the oxide faster, shortening coating life.'),
  tbc.mc('tbc-012', 'Why do researchers look for new topcoat materials beyond YSZ?', [
    'YSZ’s phases change and it sinters above about 1200 °C, and it is attacked by CMAS',
    'YSZ is a metal',
    'YSZ conducts too little heat',
    'YSZ is too light',
  ], 0, 'Rare-earth zirconates and other ceramics are being developed for higher temperatures and better CMAS resistance.'),
  tbc.tf('tbc-013', 'Sintering of the ceramic topcoat during service increases its thermal conductivity and stiffness.', true,
    'Pores and cracks close up, so the coating insulates less and loses strain tolerance.'),
  tbc.mc('tbc-014', 'How are thermal barrier coatings typically applied?', [
    'By air plasma spraying or electron-beam vapor deposition',
    'By painting with a brush',
    'By casting',
    'By rolling',
  ], 0, 'Plasma spraying creates porous splat structures; electron-beam deposition creates columnar structures.'),
  tbc.tr('tbc-015', 'A coated blade is thermally cycled.', 'the number of thermal cycles increases', 'the risk of coating spallation', 'increases',
    'Each cycle adds stress from expansion mismatch and oxide growth, gradually cracking the interface.'),
  tbc.mt('tbc-016', 'Match each coating layer to its role.', [
    ['YSZ topcoat', 'Thermal insulation'],
    ['TGO', 'Oxidation barrier'],
    ['Bond coat', 'Supplies aluminum and helps adhesion'],
    ['Superalloy substrate', 'Carries the mechanical load'],
  ], 'Each layer has a distinct job; failure of any one ends the coating’s life.'),
  tbc.mc('tbc-017', 'Why do engines that fly through volcanic ash or desert dust suffer more TBC damage?', [
    'Molten silicate deposits infiltrate and degrade the coating',
    'Dust cools the engine',
    'Ash makes coatings thicker and stronger',
    'Dust has no effect',
  ], 0, 'CMAS attack is a growing concern as turbine temperatures rise.'),
  tbc.tf('tbc-018', 'Thermal barrier coatings allow engines to run hotter or with less cooling air.', true,
    'The temperature drop across the coating can be used to increase gas temperature, reduce cooling, or extend part life.'),
  tbc.tr('tbc-019', 'The topcoat is designed to be strain tolerant.', 'the coating has more vertical cracks or columns', 'its resistance to thermal cycling damage', 'increases',
    'Vertical gaps let the coating expand and contract with the metal without building large stresses.'),
  tbc.ce('tbc-020', 'Select every correct statement.', 'An engine maker wants longer TBC life.', [
    'Use bond coats that form slow-growing, adherent alumina',
    'Choose topcoats more resistant to sintering and CMAS',
    'Reduce the number and severity of thermal cycles',
    'Make the TGO grow as fast as possible',
  ], [0, 1, 2], 'Slower oxide growth, more stable topcoats and gentler cycling all extend coating life.'),

  // ---- Aerospace Composites ----
  ac.tr('ac-011', 'A composite wing is designed.', 'more plies are added locally around fastener holes', 'the bearing strength at the holes', 'increases',
    'Local thickening (pad-ups) reinforces joints where stresses concentrate.'),
  ac.mc('ac-012', 'Why is moisture absorption considered in composite aircraft design?', [
    'Absorbed moisture lowers the matrix Tg and its strength, especially at high temperature',
    'Moisture makes composites stronger',
    'Composites never absorb moisture',
    'Moisture only affects color',
  ], 0, 'Designs are checked in the hot–wet condition, the worst case for matrix-dominated properties.'),
  ac.tf('ac-013', 'Composite repairs often use scarfed patches bonded into the damaged area.', true,
    'Tapering the repair spreads loads gradually, restoring strength with minimal stress concentration.'),
  ac.mc('ac-014', 'What does compression-after-impact testing measure?', [
    'The compressive strength of a laminate after a controlled impact',
    'Hardness of the resin',
    'Tensile strength of fibers',
    'Electrical conductivity',
  ], 0, 'It is a key test because impacts can create hidden delaminations that greatly reduce compressive strength.'),
  ac.tr('ac-015', 'An aircraft uses more composite structure.', 'the fraction of composite in the airframe increases', 'the corrosion-related maintenance', 'decreases',
    'Composites do not corrode like aluminum, reducing inspection and repair of corrosion.'),
  ac.mt('ac-016', 'Match each composite concern to its solution.', [
    ['Lightning strike', 'Embedded copper mesh'],
    ['Galvanic corrosion of aluminum', 'Titanium fasteners or glass plies'],
    ['Hidden impact damage', 'Ultrasonic inspection'],
    ['Hot–wet weakening', 'Design allowables for the worst condition'],
  ], 'Each composite-specific issue has established engineering solutions.'),
  ac.mc('ac-017', 'Why are composite aircraft fuselages often made as large one-piece barrels?', [
    'Fewer joints and fasteners mean lower weight and assembly cost',
    'Barrels are easier to paint',
    'Composites cannot be joined',
    'One-piece parts are always cheaper',
  ], 0, 'Large co-cured parts reduce fasteners, which add weight and are potential damage sites.'),
  ac.tf('ac-018', 'The thermal expansion of carbon fiber laminates is very low along the fibers.', true,
    'Carbon fibers have near-zero or slightly negative axial expansion, making CFRP dimensionally stable.'),
  ac.tr('ac-019', 'A composite panel is impacted.', 'the matrix toughness increases', 'the delamination area produced by the impact', 'decreases',
    'Tougher resins resist crack growth between plies, limiting damage.'),
  ac.ce('ac-020', 'Select every correct statement.', 'An airline inspects a composite aircraft after a hail storm.', [
    'Damage may be internal and not visible',
    'Ultrasonic or other NDT methods are used',
    'Damaged areas can be repaired with bonded patches',
    'Composites cannot be repaired',
  ], [0, 1, 2], 'Inspection and repair procedures for composites are well established in modern aviation.'),

  // ---- Thermal Protection Systems ----
  tp.tr('tp-011', 'A spacecraft heat shield is designed.', 'the expected entry speed increases', 'the required heat shield thickness or capability', 'increases',
    'Faster entries bring much higher heat loads, so more ablator or a stronger material is needed.'),
  tp.mc('tp-012', 'Why is an ablative heat shield’s char layer important?', [
    'It insulates and radiates heat while pyrolysis gases help block heating',
    'It makes the shield heavier only',
    'It conducts heat into the cabin',
    'It has no role',
  ], 0, 'The char forms a hot, insulating surface layer above the decomposing material.'),
  tp.tf('tp-013', 'Flexible insulation blankets were used on cooler areas of the Space Shuttle.', true,
    'Areas with lower heating used lighter blankets instead of rigid tiles.'),
  tp.mc('tp-014', 'Why must heat shield materials resist thermal shock?', [
    'They heat up very quickly during entry, creating large temperature gradients',
    'They are never heated',
    'They are cooled slowly',
    'Thermal shock only affects metals',
  ], 0, 'Low expansion and high strain tolerance prevent cracking during rapid heating.'),
  tp.tr('tp-015', 'An insulating tile is designed.', 'its density increases (less porosity)', 'its thermal conductivity', 'increases',
    'Solid material conducts heat better than gas-filled pores, so denser tiles insulate less.'),
  tp.mt('tp-016', 'Match each TPS material to its use.', [
    ['PICA', 'Ablative heat shields for capsules'],
    ['Silica tiles', 'Reusable insulation on the Shuttle belly'],
    ['RCC', 'Nose cap and wing leading edges'],
    ['Insulation blankets', 'Cooler upper surfaces'],
  ], 'Heat shields combine several materials depending on local heating.'),
  tp.mc('tp-017', 'What limits the reuse of ablative heat shields?', [
    'The material is consumed during entry',
    'They are too light',
    'They never get hot',
    'They are made of metal',
  ], 0, 'Ablators are designed to sacrifice material, so they are usually replaced after each flight.'),
  tp.tf('tp-018', 'Leading edges and noses experience the highest heating during atmospheric entry.', true,
    'These areas face the oncoming flow most directly, so they need the most capable materials.'),
  tp.tr('tp-019', 'A reusable TPS tile is coated.', 'the surface emissivity increases', 'the heat radiated away from the surface', 'increases',
    'A high-emissivity coating radiates more heat back to space, keeping the tile cooler.'),
  tp.ce('tp-020', 'Select every correct statement.', 'Engineers design a heat shield for a Mars sample return capsule.', [
    'Entry speed and heating will be very high',
    'An ablative material is a likely choice',
    'The shield must survive thermal shock',
    'The shield can be made of ordinary aluminum',
  ], [0, 1, 2], 'High-speed entries need ablators; aluminum would melt quickly without protection.'),
]
