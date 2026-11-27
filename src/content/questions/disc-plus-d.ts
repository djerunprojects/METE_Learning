import type { Question } from '../types'
import { forNode } from './build'

// Extra questions for Corrosion & Degradation and Functional Materials skills.
// Sources: Callister & Rethwisch ch. 17–21; Fontana; Jones; Birks, Meier & Pettit; Kasap; Cullity & Graham.

const ec = forNode('electrochemistry')
const foc = forNode('forms-of-corrosion')
const hto = forNode('high-temp-oxidation')
const pc = forNode('protection-coatings')
const ep = forNode('electrical-properties')
const smc = forNode('semiconductors')
const mag = forNode('magnetic-materials')
const ot = forNode('optical-thermal')

export const discPlusD: Question[] = [
  // ---- Electrochemistry Basics ----
  ec.tr('ec-011', 'Steel corrodes in water of different acidity.', 'the water becomes more acidic (lower pH)', 'the corrosion rate of steel', 'increases',
    'In acids, hydrogen evolution provides a fast cathode reaction, and protective oxides dissolve, so corrosion speeds up.'),
  ec.mc('ec-012', 'Which metal is at the most active (anodic) end of the galvanic series in seawater?', ['Magnesium', 'Gold', 'Copper', 'Titanium'], 0,
    'Magnesium corrodes most readily, which is why it is used as a sacrificial anode. Gold, titanium and passive stainless steels are at the noble end.'),
  ec.tf('ec-013', 'Rust (hydrated iron oxide) forms where Fe²⁺ ions from the anode meet OH⁻ ions from the cathode reaction and oxygen.', true,
    'The rust often deposits away from the actual pit, where the ions meet, so heavy rust is not always over the deepest attack.'),
  ec.mc('ec-014', 'What is a concentration cell (e.g. a differential aeration cell)?', [
    'Corrosion driven by different oxygen or ion concentrations on the same metal',
    'Two different metals in contact',
    'A battery made of copper and zinc',
    'Corrosion at high temperature',
  ], 0, 'Areas with less oxygen (under deposits, in crevices) become anodic and corrode, while oxygen-rich areas act as cathodes.'),
  ec.tr('ec-015', 'Two metals are coupled in seawater.', 'they are further apart in the galvanic series', 'the driving force for galvanic corrosion', 'increases',
    'A bigger potential difference drives a larger galvanic current through the couple.'),
  ec.mt('ec-016', 'Match each part of a corrosion cell to what happens there.', [
    ['Anode', 'Metal oxidizes and dissolves'],
    ['Cathode', 'Reduction consumes electrons'],
    ['Electrolyte', 'Carries ions between anode and cathode'],
    ['Metallic path', 'Carries electrons from anode to cathode'],
  ], 'Remove any one part and the corrosion cell stops working.'),
  ec.mc('ec-017', 'Why does salt water corrode steel faster than pure water?', [
    'Dissolved salts make the water much more conductive and chlorides break down protective films',
    'Salt raises the oxygen content dramatically',
    'Salt makes water a metal',
    'Pure water has no oxygen',
  ], 0, 'Higher conductivity lets corrosion currents flow over larger distances, and chloride ions attack passive films.'),
  ec.tf('ec-018', 'A metal that is passive in one environment can corrode rapidly in another that breaks down its film.', true,
    'Stainless steel is passive in air and fresh water but can pit in hot, chloride-rich solutions; aluminum is attacked by strong alkalis.'),
  ec.tr('ec-019', 'Corrosion is measured on a steel sample.', 'the corrosion current density doubles', 'the rate of metal thinning', 'increases',
    'By Faraday’s law, thinning rate is proportional to current density, so doubling the current doubles the rate.', 'faraday'),
  ec.ce('ec-020', 'Select every correct statement.', 'Water collects under a dirt deposit on a steel plate.', [
    'The area under the deposit has less oxygen',
    'That oxygen-poor area tends to become the anode',
    'Corrosion can concentrate under the deposit',
    'The deposit always protects the steel',
  ], [0, 1, 2], 'Differential aeration makes shielded areas corrode, a mechanism behind crevice and under-deposit corrosion.'),

  // ---- Forms of Corrosion ----
  foc.mc('foc-011', 'What is uniform (general) corrosion?', [
    'Attack spread evenly over the surface, so thickness loss can be predicted and allowed for',
    'Deep localized pits',
    'Cracking under stress',
    'Attack only along grain boundaries',
  ], 0, 'It accounts for most metal lost to corrosion, but it is the easiest form to design for with a corrosion allowance.'),
  foc.tr('foc-012', 'A stainless steel is used in seawater.', 'a narrow gap (crevice) under a gasket gets tighter', 'the risk of crevice corrosion', 'increases',
    'Tight crevices restrict oxygen and trap chloride-rich, acidic solution, which breaks down the passive film.'),
  foc.tf('foc-013', 'Fretting corrosion is damage caused by small repeated sliding motions between contacting surfaces in a corrosive environment.', true,
    'Vibration rubs off protective films and creates oxide debris, as in bolted joints and press fits.'),
  foc.mc('foc-014', 'What is cavitation damage?', [
    'Damage from collapsing vapor bubbles in fast-flowing liquids, e.g. on pump impellers and propellers',
    'Attack by bacteria',
    'Oxidation at high temperature',
    'Grain boundary attack',
  ], 0, 'Bubble collapse creates tiny high-pressure jets that pit the surface, often helped by corrosion.'),
  foc.tr('foc-015', 'A brass part is used in water with ammonia.', 'the residual tensile stress in the part increases', 'the risk of stress corrosion cracking', 'increases',
    'SCC needs tensile stress; higher stresses make cracks start sooner and grow faster.'),
  foc.mt('foc-016', 'Match each corrosion form to a classic example.', [
    ['Dezincification', 'Brass fittings losing zinc'],
    ['Intergranular attack', 'Sensitized stainless steel welds'],
    ['Galvanic corrosion', 'Steel bolts in copper sheet'],
    ['Pitting', 'Stainless steel in chloride solutions'],
  ], 'Recognizing the form points to its cause and the right remedy.'),
  foc.mc('foc-017', 'Why is microbially influenced corrosion a concern in pipelines and tanks?', [
    'Bacteria (e.g. sulfate-reducing bacteria) create corrosive conditions under deposits',
    'Bacteria eat metal directly at high speed',
    'Bacteria make metals stronger',
    'It only happens in space',
  ], 0, 'Biofilms create local chemistry, such as sulfides, that accelerates attack.'),
  foc.tf('foc-018', 'Filiform corrosion appears as thread-like attack under paint films, often on aluminum or coated steel.', true,
    'It starts at defects in the coating and spreads as fine filaments under the paint in humid conditions.'),
  foc.tr('foc-019', 'Water flows through a copper pipe.', 'the flow velocity becomes much higher', 'the risk of erosion–corrosion', 'increases',
    'Fast, turbulent flow strips the protective oxide film, especially at bends and fittings.'),
  foc.ce('foc-020', 'Select every helpful measure.', 'A stainless steel heat exchanger in seawater suffers pitting and crevice corrosion.', [
    'Use a higher-molybdenum alloy',
    'Avoid crevices and stagnant zones in the design',
    'Consider titanium for the most severe areas',
    'Add more chlorides to the water',
  ], [0, 1, 2], 'Better alloys, good design and keeping water moving all reduce localized attack.'),

  // ---- High-Temperature Oxidation ----
  hto.tr('hto-011', 'A metal forms a protective oxide scale at high temperature.', 'the scale thickens over time', 'the oxidation rate', 'decreases',
    'Ions must diffuse through a thicker scale, so the rate keeps falling, the hallmark of parabolic kinetics.', 'parabolic-oxidation'),
  hto.mc('hto-012', 'Why does a Pilling–Bedworth ratio well above 2 often lead to scale spalling?', [
    'The oxide is much bulkier than the metal it replaced, building large compressive stresses that crack it off',
    'The oxide is too thin',
    'The oxide melts',
    'The oxide becomes metallic',
  ], 0, 'Too much volume expansion means the scale cannot stay attached as it grows.', 'pilling-bedworth'),
  hto.tf('hto-013', 'Adding a small amount of reactive elements such as yttrium can improve the adhesion of protective oxide scales.', true,
    'This "reactive element effect" makes alumina and chromia scales stick better, reducing spallation during thermal cycling.'),
  hto.mc('hto-014', 'What is internal oxidation?', [
    'Oxygen diffuses into the alloy and forms oxide particles of a reactive alloying element beneath the surface',
    'Oxidation only on the outside',
    'Corrosion by water at room temperature',
    'Melting of the oxide',
  ], 0, 'It happens when the reactive element is too dilute to form a continuous external scale.'),
  hto.tr('hto-015', 'Heat-resistant alloys are compared.', 'the aluminum content rises to a level that forms a continuous alumina scale', 'the oxidation resistance at very high temperature', 'increases',
    'A continuous, slow-growing Al₂O₃ layer is one of the best barriers to oxygen.'),
  hto.mt('hto-016', 'Match each oxidation behavior to what it suggests.', [
    ['Parabolic weight gain', 'Protective, diffusion-controlled scale'],
    ['Linear weight gain', 'Non-protective, porous or cracked scale'],
    ['Weight loss', 'Volatile oxide or spallation'],
  ], 'Weight-change curves are the standard way to classify oxidation behavior.'),
  hto.mc('hto-017', 'Why is steam or water vapor often more aggressive than dry air at high temperature?', [
    'Water vapor can form volatile hydroxides and change scale growth, accelerating attack',
    'Water vapor contains no oxygen',
    'Water vapor cools the metal',
    'It is always less aggressive',
  ], 0, 'This is important in steam turbines and gas turbines, where volatile species can strip protective oxides.'),
  hto.tf('hto-018', 'Chromium-containing steels resist scaling much better than plain carbon steel at high temperature.', true,
    'Chromium forms a protective Cr₂O₃ layer, while plain iron forms fast-growing iron oxides.'),
  hto.tr('hto-019', 'An alloy is oxidized at a fixed temperature for a long time.', 'the protective element (e.g. Al or Cr) near the surface gets depleted', 'the risk of breakaway oxidation', 'increases',
    'Once there is too little Al or Cr to re-form the protective scale, faster-growing oxides take over.'),
  hto.ce('hto-020', 'Select every helpful measure.', 'A furnace component made of stainless steel is suffering rapid scaling at 1100 °C.', [
    'Switch to an alumina-forming alloy',
    'Apply an aluminide or thermal barrier coating',
    'Reduce temperature cycling to limit spallation',
    'Use plain carbon steel instead',
  ], [0, 1, 2], 'At this temperature chromia volatilizes and scales spall, so alumina formers and coatings work better. Plain steel would be far worse.'),

  // ---- Protection & Coatings ----
  pc.mc('pc-011', 'Why does paint protect steel?', [
    'It acts as a barrier, slowing water and oxygen from reaching the metal, often with inhibiting pigments',
    'It makes steel more noble',
    'It removes all oxygen from the air',
    'It conducts current away',
  ], 0, 'Paint systems with primers, intermediate and top coats build a barrier; zinc-rich primers add sacrificial protection.'),
  pc.tr('pc-012', 'A ship hull is protected with zinc sacrificial anodes.', 'the anode mass increases', 'the time before the anodes must be replaced', 'increases',
    'Sacrificial anodes are consumed at a rate set by the current they supply; more zinc lasts longer.'),
  pc.tf('pc-013', 'Electroplated chromium on steel protects mainly as a hard, decorative barrier, not as a sacrificial coating.', true,
    'Chromium plating is more noble in practice, so it works only if continuous, which is why nickel underlayers are used.'),
  pc.mc('pc-014', 'What is passivation treatment of stainless steel?', [
    'An acid treatment that removes surface iron contamination and helps form a uniform chromium-rich passive film',
    'Painting the surface',
    'Electroplating zinc',
    'Heating until red hot',
  ], 0, 'Iron particles from tools can rust on stainless steel surfaces; passivation removes them.'),
  pc.tr('pc-015', 'Steel is hot-dip galvanized.', 'the zinc coating thickness increases', 'the years of protection outdoors', 'increases',
    'Zinc corrodes slowly but steadily, so a thicker coating lasts proportionally longer.'),
  pc.mt('pc-016', 'Match each protection method to how it works.', [
    ['Galvanizing', 'Sacrificial zinc layer'],
    ['Anodizing', 'Thickened protective oxide on aluminum'],
    ['Inhibitors', 'Chemicals that slow the corrosion reactions'],
    ['Impressed current', 'External current makes the structure a cathode'],
  ], 'Protection methods work by barrier action, sacrificial action, chemistry or electrochemistry.'),
  pc.mc('pc-017', 'Why are reinforcing bars in concrete normally protected from corrosion?', [
    'The highly alkaline concrete keeps the steel passive',
    'Concrete is a perfect insulator',
    'Steel never corrodes',
    'Concrete contains zinc',
  ], 0, 'Chlorides (from de-icing salts or seawater) or carbonation can destroy this passivity, leading to rebar corrosion and spalling.'),
  pc.tf('pc-018', 'A small scratch in a noble coating on a more active substrate can cause severe local attack of the substrate.', true,
    'The large noble coating becomes a big cathode for a tiny anode at the scratch, concentrating corrosion there.'),
  pc.tr('pc-019', 'A coating is applied to steel.', 'the number of pores and defects in the coating increases', 'the protection provided by a barrier coating', 'decreases',
    'Barrier coatings only work where they are continuous; defects let water and oxygen reach the steel.'),
  pc.ce('pc-020', 'Select every sensible measure.', 'An outdoor steel bridge must last 100 years with little maintenance.', [
    'Use a durable coating system, possibly over galvanizing',
    'Design details that shed water and avoid crevices',
    'Plan inspection and maintenance',
    'Rely on bare steel in a coastal splash zone',
  ], [0, 1, 2], 'Long life comes from combining good materials, good design and planned maintenance. Weathering steels also help inland, but not in salty splash zones.'),

  // ---- Electrical Properties ----
  ep.tr('ep-011', 'An insulator such as alumina is heated strongly.', 'the temperature increases', 'its electrical conductivity', 'increases',
    'More charge carriers (electrons or ions) are thermally activated, so ceramic insulators conduct better when very hot.'),
  ep.mc('ep-012', 'What is the dielectric constant of a material?', [
    'How much the material increases capacitance compared with vacuum, due to its polarization',
    'Its electrical conductivity',
    'Its magnetic strength',
    'Its melting point',
  ], 0, 'High-dielectric-constant ceramics such as BaTiO₃ allow small capacitors with large capacitance.'),
  ep.tf('ep-013', 'Aluminum is used for overhead power lines because it has a good conductivity-to-weight ratio, even though copper conducts better per volume.', true,
    'Aluminum is about 60% as conductive as copper but only about 30% as dense, so it carries more current per kilogram.'),
  ep.mc('ep-014', 'What is dielectric breakdown?', [
    'A strong electric field makes an insulator suddenly conduct, often damaging it',
    'An insulator melting at low temperature',
    'A metal becoming magnetic',
    'A superconductor losing its field',
  ], 0, 'Insulation is rated by its dielectric strength, the field it can withstand before breakdown.'),
  ep.tr('ep-015', 'A metal is cooled toward absolute zero.', 'the temperature decreases', 'the electrical resistivity', 'decreases',
    'Lattice vibrations die down, so resistivity falls until only the impurity contribution remains (unless the metal becomes superconducting).'),
  ep.mt('ep-016', 'Match each material to its typical electrical role.', [
    ['Copper', 'Conductor'],
    ['Silicon', 'Semiconductor'],
    ['Alumina', 'Insulator'],
    ['Barium titanate', 'High-permittivity capacitor dielectric'],
  ], 'Conductors, semiconductors, insulators and dielectrics together make up any electronic device.'),
  ep.mc('ep-017', 'What is piezoelectricity?', [
    'Producing an electric voltage under mechanical stress, and deforming under an applied voltage',
    'Conducting electricity only at low temperature',
    'Becoming magnetic when heated',
    'Emitting light when struck',
  ], 0, 'Piezoelectric ceramics are used in sensors, ultrasound transducers, lighters and precise actuators.'),
  ep.tf('ep-018', 'In ionic ceramics, electrical current can be carried by moving ions as well as electrons.', true,
    'Ionic conduction is the basis of solid electrolytes such as YSZ in fuel cells and oxygen sensors.'),
  ep.tr('ep-019', 'A copper alloy is compared with pure copper.', 'the alloy is precipitation hardened so most solute leaves the matrix', 'its conductivity compared with the same alloy in solid solution', 'increases',
    'Solute dissolved in the matrix scatters electrons strongly; once it forms precipitates, the matrix is purer and conducts better.', 'electrical-conductivity'),
  ep.ce('ep-020', 'Select every correct statement.', 'An engineer chooses a material for high-voltage cable insulation.', [
    'It needs a high dielectric strength',
    'It needs very low electrical conductivity',
    'Polymers such as crosslinked polyethylene are common choices',
    'Copper would be a good insulator',
  ], [0, 1, 2], 'Cable insulation must withstand strong fields without breakdown; crosslinked polyethylene combines this with flexibility and heat resistance.'),

  // ---- Semiconductors ----
  smc.mc('smc-011', 'What is a hole in a semiconductor?', [
    'A missing electron in the valence band that behaves like a positive charge carrier',
    'A physical pore in the crystal',
    'A missing atom',
    'A proton moving through the crystal',
  ], 0, 'When an electron leaves the valence band, neighboring electrons can move into the gap, so the vacancy effectively moves like a positive particle.'),
  smc.tr('smc-012', 'A doped semiconductor is heated far above room temperature.', 'the temperature rises into the intrinsic range', 'the importance of the dopant in setting carrier numbers', 'decreases',
    'At high temperature, thermally excited intrinsic carriers outnumber dopant carriers, so devices stop working as designed.'),
  smc.tf('smc-013', 'Electrons usually have a higher mobility than holes in silicon.', true,
    'Electron mobility in silicon is about three times that of holes, which affects device design (n-type devices are faster).'),
  smc.mc('smc-014', 'What is a direct band gap semiconductor good at?', [
    'Emitting and absorbing light efficiently, for LEDs and lasers',
    'Conducting heat',
    'Being magnetic',
    'Carrying very large currents in power lines',
  ], 0, 'In direct-gap materials such as GaAs and GaN, electrons can recombine with holes by emitting a photon directly. Silicon’s indirect gap makes it a poor light emitter.'),
  smc.tr('smc-015', 'LEDs are made from different semiconductors.', 'the band gap increases', 'the photon energy of emitted light (shifting toward blue)', 'increases',
    'Emitted photon energy roughly equals the band gap, so wider gaps give shorter wavelengths: red, then green, then blue.'),
  smc.mt('smc-016', 'Match each term to its meaning.', [
    ['Donor', 'Dopant that adds free electrons'],
    ['Acceptor', 'Dopant that creates holes'],
    ['Majority carrier', 'The more numerous carrier type'],
    ['Depletion region', 'Carrier-poor zone at a p–n junction'],
  ], 'These terms describe how doped semiconductors and junctions work.'),
  smc.mc('smc-017', 'Why must silicon for chips be extremely pure?', [
    'Tiny amounts of unwanted impurities change carrier concentrations and trap carriers',
    'Pure silicon is magnetic',
    'Impurities make silicon a superconductor',
    'Purity only affects color',
  ], 0, 'Electronic-grade silicon is purified to parts per billion so that doping can be controlled precisely.'),
  smc.tf('smc-018', 'A transistor uses junctions or a gate to control a current with a small signal, acting as a switch or amplifier.', true,
    'Billions of transistors switching on and off form the logic of modern chips.'),
  smc.tr('smc-019', 'Silicon power devices are compared with wide-band-gap devices such as SiC or GaN.', 'the band gap of the device material increases', 'the maximum operating temperature and voltage', 'increases',
    'Wide band gaps resist thermal excitation and breakdown, so SiC and GaN suit electric vehicle inverters and fast chargers.'),
  smc.ce('smc-020', 'Select every correct statement.', 'A solar cell and an LED are both p–n junctions.', [
    'A solar cell turns light into current',
    'An LED turns current into light',
    'Both depend on the band gap of the semiconductor',
    'Neither uses doping',
  ], [0, 1, 2], 'Both devices rely on doped p and n regions; the band gap sets the light they absorb or emit.'),

  // ---- Magnetic Materials ----
  mag.mc('mag-011', 'What is magnetic saturation?', [
    'The point where all magnetic domains are aligned and magnetization cannot increase further',
    'Losing all magnetism',
    'The Curie temperature',
    'The coercivity',
  ], 0, 'Saturation magnetization depends on the material’s atoms and structure, not on processing.'),
  mag.tr('mag-012', 'A permanent magnet material is processed.', 'its coercivity increases', 'its resistance to being demagnetized', 'increases',
    'Coercivity is the reverse field needed to remove magnetization, so high coercivity makes stable permanent magnets.'),
  mag.tf('mag-013', 'Paramagnetic and diamagnetic materials have only very weak magnetic responses compared with ferromagnets.', true,
    'Their magnetization is tiny and disappears when the field is removed, unlike ferromagnets with domains.'),
  mag.mc('mag-014', 'What is remanence (remanent magnetization)?', [
    'The magnetization left after the applied field is removed',
    'The field needed to saturate the magnet',
    'The temperature of demagnetization',
    'The density of the magnet',
  ], 0, 'Permanent magnets need high remanence and high coercivity; soft magnets should have low coercivity.'),
  mag.tr('mag-015', 'A soft magnetic material is used in an AC transformer.', 'the operating frequency increases', 'the eddy-current losses', 'increases',
    'Eddy-current losses grow strongly with frequency, which is why high-frequency cores use ferrites or very thin laminations.'),
  mag.mt('mag-016', 'Match each magnetic behavior to an example.', [
    ['Ferromagnetic', 'Iron'],
    ['Ferrimagnetic', 'Magnetite and ferrites'],
    ['Paramagnetic', 'Aluminum'],
    ['Diamagnetic', 'Copper'],
  ], 'Only ferromagnetic and ferrimagnetic materials show strong, useful magnetism at room temperature.'),
  mag.mc('mag-017', 'Why are amorphous metal ribbons used in some transformer cores?', [
    'With no grains and no crystal anisotropy, domain walls move easily, giving very low losses',
    'They are permanent magnets',
    'They are cheaper than steel in every case',
    'They are not magnetic',
  ], 0, 'Amorphous Fe-based alloys cut core losses substantially in distribution transformers.'),
  mag.tf('mag-018', 'Austenitic stainless steels such as 304 are essentially non-magnetic because of their FCC structure.', true,
    'FCC austenite in these steels is paramagnetic. Cold work can create some magnetic martensite, though.'),
  mag.tr('mag-019', 'An Nd–Fe–B magnet is used in a motor that heats up.', 'the operating temperature increases', 'its coercivity', 'decreases',
    'Nd–Fe–B loses coercivity quickly when hot, so dysprosium additions or Sm–Co magnets are used for hot motors.'),
  mag.ce('mag-020', 'Select every correct statement.', 'An engineer chooses a core material for a 50 Hz power transformer.', [
    'A soft magnetic material with low coercivity is needed',
    'Low hysteresis and eddy-current losses are important',
    'Grain-oriented silicon steel is a common choice',
    'A hard permanent magnet material would be ideal',
  ], [0, 1, 2], 'Transformer cores must magnetize and demagnetize 50 times per second with minimal loss, which is the opposite of what a permanent magnet does.'),

  // ---- Optical & Thermal Properties ----
  ot.tr('ot-011', 'Light travels through a material.', 'the refractive index of the material increases', 'how much light bends when entering it', 'increases',
    'A higher refractive index means light slows down more and bends more, which is used in lenses and optical fibers.'),
  ot.mc('ot-012', 'How do optical fibers keep light inside?', [
    'Total internal reflection: the core has a higher refractive index than the cladding',
    'Mirrors on the outside',
    'Magnetic fields',
    'The fiber is opaque',
  ], 0, 'Light hitting the core–cladding boundary at a shallow angle reflects back completely, so it travels long distances with little loss.'),
  ot.tf('ot-013', 'Most of the heat in a metal is carried by free electrons, which is why good electrical conductors are also good heat conductors.', true,
    'The Wiedemann–Franz law links thermal and electrical conductivity in metals.'),
  ot.mc('ot-014', 'Why is aluminum nitride used as a substrate for high-power electronics?', [
    'It is an electrical insulator with high thermal conductivity',
    'It conducts electricity very well',
    'It is a good thermal insulator',
    'It is transparent to radio waves only',
  ], 0, 'AlN removes heat from chips while keeping circuits electrically isolated, a rare combination.'),
  ot.tr('ot-015', 'A material is heated.', 'its heat capacity is higher', 'the temperature rise for the same heat input', 'decreases',
    'A higher heat capacity absorbs more heat per degree, so the temperature rises less.'),
  ot.mt('ot-016', 'Match each phenomenon to its cause.', [
    ['Luminescence', 'Electrons emitting light as they drop to lower energy'],
    ['Color of a ruby', 'Chromium ions absorbing certain wavelengths'],
    ['Metal shine', 'Free electrons reflecting light'],
    ['Translucent ceramics', 'Light scattering at pores and grain boundaries'],
  ], 'Optical properties come from how electrons and microstructure interact with light.'),
  ot.mc('ot-017', 'Why does thermal expansion mismatch matter when bonding a ceramic to a metal?', [
    'Different expansion builds stresses on heating or cooling, which can crack the ceramic',
    'It changes the color',
    'It makes the joint conductive',
    'It has no effect',
  ], 0, 'Designers match expansion coefficients or add compliant interlayers to avoid cracking.'),
  ot.tf('ot-018', 'Invar (Fe–36% Ni) has an unusually low thermal expansion near room temperature.', true,
    'A magnetic effect offsets normal thermal expansion, which is why Invar is used in precision instruments and clocks.'),
  ot.tr('ot-019', 'A ceramic part is suddenly cooled (quenched).', 'the thermal conductivity of the ceramic increases', 'the temperature differences inside the part', 'decreases',
    'Heat spreads faster, so the surface and center stay closer in temperature, reducing thermal shock stresses.'),
  ot.ce('ot-020', 'Select every correct statement.', 'A designer chooses materials for a phone that must stay cool and look good.', [
    'A metal frame can spread heat from the chip',
    'Glass covers are transparent because their band gap is larger than visible photon energies',
    'Polymer parts help insulate where the hand touches',
    'Glass conducts heat better than copper',
  ], [0, 1, 2], 'Each material is chosen for its thermal and optical behavior. Copper conducts heat hundreds of times better than glass.'),
]
