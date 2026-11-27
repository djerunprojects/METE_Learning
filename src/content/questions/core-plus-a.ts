import type { Question } from '../types'
import { forNode } from './build'

// Extra questions (11–20) for Foundations, Structure and Thermodynamics skills.
// Sources: Callister & Rethwisch ch. 1–5, 9; Askeland ch. 1–4, 10–12; Porter & Easterling ch. 1.

const com = forNode('classes-of-materials')
const ab = forNode('atomic-bonding')
const cs = forNode('crystal-structures')
const dd = forNode('defects-dislocations')
const mg = forNode('microstructure-grains')
const ge = forNode('gibbs-energy')
const pd = forNode('phase-diagrams')
const fec = forNode('fe-c-diagram')

export const corePlusA: Question[] = [
  // ---- Classes of Materials ----
  com.tf('com-011', 'Glass is classed as a ceramic.', true,
    'Glass is an inorganic, non-metallic material, so it belongs with the ceramics. It differs from most ceramics only in being amorphous rather than crystalline.'),
  com.mc('com-012', 'Which of these is a composite?', ['Concrete', 'Bronze', 'Polystyrene', 'Silicon carbide'], 0,
    'Concrete is gravel and sand bound in cement paste, a particle composite. Bronze is a metal alloy, polystyrene a polymer and silicon carbide a ceramic.'),
  com.tr('com-013', 'Carbon fibers are added to an epoxy resin.', 'the amount of carbon fiber increases', 'the stiffness of the material', 'increases',
    'Carbon fibers are far stiffer than epoxy (over 200 GPa vs about 3 GPa), so adding more of them raises the stiffness of the composite along the fibers.'),
  com.mc('com-014', 'Which class of materials typically best resists oxidation and chemical attack at high temperature?', ['Ceramics', 'Polymers', 'Common metals', 'Elastomers'], 0,
    'Many ceramics are already oxides or are very stable compounds, so hot air and chemicals have little left to attack. Polymers degrade and most metals oxidize when hot.'),
  com.mc('com-015', 'Why are metals usually opaque and shiny?', [
    'Free electrons absorb visible light and re-emit it from a very thin surface layer',
    'Metals contain many pores',
    'Metals have a large band gap',
    'Metals are always polished',
  ], 0, 'The electron sea can absorb photons of any visible energy and re-emit them, so light is reflected rather than transmitted.'),
  com.tf('com-016', 'Polymers are generally good conductors of heat.', false,
    'Polymers have no free electrons and tangled chains that scatter vibrations, so they conduct heat poorly. That is why pan handles and insulation are often polymers.'),
  com.mt('com-017', 'Match each class to the property it is best known for.', [
    ['Metals', 'High ductility and toughness'],
    ['Ceramics', 'High hardness and melting point'],
    ['Polymers', 'Low density and easy shaping'],
    ['Composites', 'Property combinations designed for the job'],
  ], 'Each family has a typical strength; composites combine families to get properties none has alone.'),
  com.ce('com-018', 'Select every correct statement.', 'An engineer chooses a material for the handle of a cooking pot.', [
    'A heat-resistant thermoset polymer such as phenolic is a good choice',
    'A polymer’s low thermal conductivity keeps the handle cool to touch',
    'Copper is the best choice because it conducts heat well',
    'The handle should be as dense as possible',
  ], [0, 1], 'A handle should not conduct heat to the hand. Thermosets like phenolic do not melt and insulate well. Copper would make the handle hot.'),
  com.mc('com-019', 'Wood is best described as:', ['A natural composite', 'A metal', 'A ceramic', 'A pure polymer with no structure'], 0,
    'Wood is made of strong cellulose fibers in a matrix of lignin and hemicellulose, a natural fiber composite. That is why it is much stronger along the grain.'),
  com.tr('com-020', 'Small amounts of another element are dissolved in pure copper.', 'the amount of dissolved alloying element increases', 'the electrical conductivity', 'decreases',
    'Solute atoms disrupt the regular lattice and scatter conduction electrons, so even small additions lower copper’s conductivity.'),

  // ---- Atomic Bonding ----
  ab.mc('ab-011', 'Which pair of elements forms the most ionic bond?', ['Na–Cl', 'C–H', 'Si–O', 'Cu–Zn'], 0,
    'Ionic character grows with the difference in electronegativity. Sodium and chlorine differ a lot, C–H very little, Si–O moderately, and Cu–Zn form a metallic alloy.'),
  ab.tf('ab-012', 'Many real materials have mixed bonding: the Si–O bond in silica, for example, is partly ionic and partly covalent.', true,
    'Pure bond types are idealizations. The Si–O bond is roughly half ionic and half covalent, which is typical of many ceramics.'),
  ab.tr('ab-013', 'Think about bonds between two different elements.', 'the difference in electronegativity between the two atoms increases', 'the ionic character of the bond', 'increases',
    'The more strongly one atom pulls electrons, the more fully it takes them from the other, so the bond becomes more ionic and less covalent.'),
  ab.mc('ab-014', 'What is hydrogen bonding responsible for?', [
    'The unusually high boiling point of water for such a small molecule',
    'The electrical conductivity of metals',
    'The hardness of diamond',
    'The magnetism of iron',
  ], 0, 'Hydrogen bonds are the strongest secondary bonds. They hold water molecules together much more than van der Waals forces alone would.'),
  ab.mc('ab-015', 'Diamond and graphite are both pure carbon. Why does graphite conduct electricity within its layers while diamond insulates?', [
    'Graphite has delocalized electrons within each layer; in diamond every electron is held in a localized covalent bond',
    'Graphite contains metal impurities',
    'Diamond has an electron sea',
    'Graphite has ionic bonds',
  ], 0, 'Each carbon in graphite bonds to three neighbors in a layer, leaving one electron per atom free to move along the layer. Diamond uses all four electrons in directional bonds.'),
  ab.tf('ab-016', 'Metallic bonding is the reason metals are good conductors of heat as well as electricity.', true,
    'The free electrons that carry current also carry thermal energy quickly through the metal.'),
  ab.tr('ab-017', 'Two atoms are pushed closer together than their equilibrium spacing r₀.', 'the distance between the atoms decreases below r₀', 'the repulsive force between them', 'increases',
    'Below r₀ the electron clouds overlap and repulsion rises very steeply, which is why solids are hard to compress.'),
  ab.mt('ab-018', 'Match each property to the feature of bonding that controls it.', [
    ['High melting point', 'Deep energy well (strong bonds)'],
    ['High elastic modulus', 'Steep force–separation slope at r₀'],
    ['Low thermal expansion', 'Deep, narrow energy well'],
    ['Ductility', 'Non-directional (metallic) bonding'],
  ], 'Many properties can be read from the bonding energy curve and the type of bond.'),
  ab.mc('ab-019', 'What is true at the equilibrium spacing r₀ between two atoms?', [
    'The net force is zero and the potential energy is at its minimum',
    'The repulsive force is zero',
    'The attractive force is at its maximum',
    'The atoms are touching and cannot move',
  ], 0, 'At r₀, attraction and repulsion balance exactly, which is also where the energy curve reaches its lowest point.'),
  ab.ce('ab-020', 'Select every correct statement.', 'Silicon is the base material of computer chips.', [
    'Each silicon atom forms four covalent bonds in a tetrahedral arrangement',
    'Its bonds are directional',
    'It has an electron sea like aluminum',
    'Its covalent bonding makes it hard and brittle at room temperature',
  ], [0, 1, 3], 'Silicon has the diamond cubic structure with directional covalent bonds, so it is hard and brittle. It is a semiconductor, not a metal.'),

  // ---- Crystal Structures ----
  cs.mc('cs-014', 'What is a unit cell?', [
    'The smallest repeating unit that shows the full symmetry of the crystal structure',
    'One single atom',
    'A grain in a polycrystal',
    'The largest crystal in a sample',
  ], 0, 'Stacking identical unit cells in three dimensions builds the whole crystal, so describing the cell describes the structure.'),
  cs.tr('cs-015', 'Compare two metals with the same crystal structure.', 'the atomic radius R is larger', 'the lattice parameter a', 'increases',
    'For a given structure, a is fixed by R: for example a = 2R√2 for FCC and a = 4R/√3 for BCC. Bigger atoms need a bigger cell.'),
  cs.tf('cs-016', 'Amorphous materials such as glass have short-range order but no long-range order.', true,
    'Each atom has a fairly regular set of nearest neighbors, but there is no repeating pattern over long distances, unlike in a crystal.'),
  cs.mc('cs-017', 'Which planes are the close-packed planes in FCC?', ['{111}', '{100}', '{110}', '{210}'], 0,
    'The {111} planes are the densest in FCC and are the slip planes. They correspond to the close-packed layers stacked A-B-C.'),
  cs.mc('cs-018', 'Which directions are the close-packed directions in BCC?', ['<111>', '<100>', '<110>', '<210>'], 0,
    'In BCC, atoms touch along the body diagonals, the <111> directions. BCC has no truly close-packed plane; slip occurs on {110} and other planes along <111>.'),
  cs.ce('cs-019', 'Select every correct statement.', 'Pure iron is heated from 800 °C to 950 °C, passing through 912 °C.', [
    'Its atoms become more densely packed (BCC → FCC)',
    'The specimen contracts slightly at the transformation',
    'It can now dissolve much more carbon',
    'It becomes HCP',
  ], [0, 1, 2], 'At 912 °C, BCC α-iron becomes FCC γ-iron. FCC packs more densely (0.74 vs 0.68), so iron actually shrinks slightly on heating through this point. FCC also has larger interstitial holes for carbon.'),
  cs.tr('cs-020', 'Compare crystal structures made from atoms of the same size.', 'the structure changes from BCC to FCC', 'the atomic packing factor', 'increases',
    'BCC fills about 68% of space and FCC about 74%, the maximum possible for equal spheres.'),

  // ---- Defects & Dislocations ----
  dd.mc('dd-011', 'Why are self-interstitials (host atoms squeezed between lattice sites) much rarer than vacancies in metals?', [
    'They distort the lattice so much that they cost far more energy to form',
    'They are impossible in any metal',
    'They form only above the melting point',
    'They are always removed by etching',
  ], 0, 'A host atom is too big for an interstitial site, so it strains its surroundings heavily. The high formation energy keeps their equilibrium number tiny.'),
  dd.tr('dd-012', 'Carbon dissolves interstitially in iron.', 'more carbon is dissolved', 'the lattice strain around the interstitial sites', 'increases',
    'Each carbon atom pushes its neighbors apart. More carbon means more distortion, which is also why dissolved carbon strengthens iron.'),
  dd.mc('dd-013', 'What does the Burgers vector of a dislocation describe?', [
    'The magnitude and direction of the lattice displacement (slip) it produces',
    'The length of the dislocation line',
    'The temperature at which it forms',
    'The chemical composition near it',
  ], 0, 'The Burgers vector is the step the crystal shifts by when the dislocation passes. It usually equals one interatomic spacing in a close-packed direction.'),
  dd.tf('dd-014', 'A screw dislocation can cross-slip onto another slip plane, while a pure edge dislocation cannot.', true,
    'A screw dislocation’s Burgers vector lies along its line, so any plane containing the line is a possible slip plane. An edge dislocation is tied to the one plane containing both line and Burgers vector.'),
  dd.mc('dd-015', 'What does dislocation climb require?', [
    'Diffusion of vacancies, so it happens mainly at high temperature',
    'Very low temperature',
    'A magnetic field',
    'No atomic movement at all',
  ], 0, 'An edge dislocation climbs out of its slip plane by adding or removing atoms at its edge, which needs vacancies to diffuse. Climb is a key mechanism in creep.'),
  dd.tr('dd-016', 'Compare metals with different crystal structures.', 'the number of slip systems that operate easily increases', 'the ductility', 'increases',
    'More independent slip systems let each grain change shape in any direction, so the metal can deform more before cracking. FCC metals benefit from this.'),
  dd.mc('dd-017', 'What is the critical resolved shear stress?', [
    'The minimum shear stress on a slip system needed to start slip',
    'The tensile strength of the material',
    'The stress at fracture',
    'The stress needed to melt the crystal',
  ], 0, 'Slip begins when the resolved shear stress on the best-oriented slip system reaches this critical value, a property of the material.'),
  dd.mt('dd-018', 'Match each defect to an example.', [
    ['Vacancy', 'An empty lattice site'],
    ['Interstitial impurity', 'A carbon atom between iron atoms'],
    ['Substitutional impurity', 'A nickel atom on a copper lattice site'],
    ['Twin boundary', 'A mirror-image crystal across a plane'],
  ], 'Point defects (vacancies and impurities) and planar defects (twin and grain boundaries) all affect properties.'),
  dd.tr('dd-019', 'A single crystal is pulled in tension.', 'the slip system’s orientation changes from φ = λ = 60° to φ = λ = 45°', 'the resolved shear stress τ_R on that system', 'increases',
    'cos φ cos λ is 0.25 at 60°/60° but 0.5 at 45°/45°, its maximum value. The 45° orientation is the easiest to slip.', 'resolved-shear-stress'),
  dd.ce('dd-020', 'Select every correct statement.', 'A single crystal of a metal is loaded in tension.', [
    'Slip begins on the slip system with the highest resolved shear stress',
    'If the load is parallel to a slip plane, no shear acts on that plane',
    'Slip begins when τ_R reaches the critical resolved shear stress',
    'All slip systems start slipping at the same applied stress, whatever their orientation',
  ], [0, 1, 2], 'Orientation decides how much of the applied stress becomes shear on each system, so different systems start at different applied stresses.'),

  // ---- Microstructure & Grains ----
  mg.mc('mg-011', 'A steel has a higher ASTM grain size number than another. What does that mean?', [
    'It has finer grains (more grains per unit area)',
    'It has coarser grains',
    'It has more carbon',
    'It is harder to etch',
  ], 0, 'The ASTM number rises as grains get smaller, so a higher number means a finer, usually stronger and tougher microstructure.'),
  mg.tr('mg-012', 'A cold-worked metal is annealed above its recrystallization temperature.', 'the annealing time is extended after recrystallization is complete', 'the grain size', 'increases',
    'Once new grains have formed, they keep growing to reduce grain boundary area, so long anneals coarsen the structure.'),
  mg.tf('mg-013', 'Equiaxed grains have roughly equal size in all directions, while cold rolling stretches grains out in the rolling direction.', true,
    'Grain shape records the processing history. Recrystallization restores equiaxed grains.'),
  mg.mc('mg-014', 'Which would give finer grains in a casting?', [
    'Adding grain refiners and using a chilled metal mold',
    'Pouring very hot and cooling slowly in sand',
    'Holding the melt for a long time just above the liquidus',
    'Using a thicker section',
  ], 0, 'More nucleation sites and faster cooling both give more, smaller grains.'),
  mg.mc('mg-015', 'What is a low-angle (small-angle) grain boundary?', [
    'A boundary between grains with only a small misorientation, describable as an array of dislocations',
    'A boundary between two different phases',
    'A crack between grains',
    'The surface of the sample',
  ], 0, 'When neighboring regions are tilted by only a few degrees, the mismatch is accommodated by a row of dislocations. Such boundaries have lower energy than high-angle boundaries.'),
  mg.tr('mg-016', 'Compare samples of the same metal.', 'the average grain size decreases', 'the total grain boundary area per unit volume', 'increases',
    'Smaller grains mean many more boundaries in the same volume, which is why fine-grained metals are stronger and have more fast-diffusion paths.'),
  mg.mt('mg-017', 'Match each microstructural feature to its meaning.', [
    ['Grain', 'A single crystal within a polycrystal'],
    ['Grain boundary', 'Interface between differently oriented crystals of the same phase'],
    ['Phase boundary', 'Interface between two different phases'],
    ['Precipitate', 'Small particle of a second phase inside a matrix'],
  ], 'These are the building blocks used to describe any microstructure.'),
  mg.tf('mg-018', 'Two samples of the same alloy with identical composition can have very different strengths because of different microstructures.', true,
    'Grain size, phases, precipitates and dislocation density all depend on processing. Heat treatment of steel is the classic example.'),
  mg.tr('mg-019', 'Compare two metals that follow the Hall–Petch relation.', 'the strengthening coefficient k_y is larger', 'the strength gained from the same grain refinement', 'increases',
    'k_y sets how strongly grain boundaries block slip. Steels have a large k_y, so grain refinement is especially effective for them.', 'hall-petch'),
  mg.ce('mg-020', 'Select every correct statement.', 'A designer wants a steel plate that is both stronger and tougher.', [
    'Refine the grain size, e.g. by controlled rolling',
    'Coarsen the grains with long high-temperature holds',
    'Grain refinement raises yield strength (Hall–Petch)',
    'Grain refinement also lowers the ductile-to-brittle transition temperature',
  ], [0, 2, 3], 'Grain refinement uniquely improves both strength and toughness. Coarsening would do the opposite.'),

  // ---- Gibbs Energy & Equilibrium ----
  ge.tr('ge-011', 'A reaction has ΔH < 0 and ΔS > 0.', 'the temperature increases', 'ΔG', 'decreases',
    'Both terms favor the reaction: ΔH is negative and −TΔS becomes more negative as T rises. Such a reaction is spontaneous at every temperature.', 'gibbs-free-energy'),
  ge.mc('ge-012', 'Which combination makes a process spontaneous at all temperatures?', ['ΔH < 0 and ΔS > 0', 'ΔH > 0 and ΔS < 0', 'ΔH > 0 and ΔS > 0', 'ΔH < 0 and ΔS < 0'], 0,
    'With ΔH negative and ΔS positive, ΔG = ΔH − TΔS is negative at any temperature.', 'gibbs-free-energy'),
  ge.mc('ge-013', 'Which combination makes a process non-spontaneous at all temperatures?', ['ΔH > 0 and ΔS < 0', 'ΔH < 0 and ΔS > 0', 'ΔH > 0 and ΔS > 0', 'ΔH < 0 and ΔS < 0'], 0,
    'Both terms work against the process, so ΔG is always positive. The other mixed cases switch sign at some temperature.', 'gibbs-free-energy'),
  ge.tf('ge-014', 'At the melting point, the liquid has a higher entropy than the solid.', true,
    'Atoms in the liquid can take far more arrangements than in the ordered crystal, so melting always increases entropy.'),
  ge.mc('ge-015', 'What is a metastable phase?', [
    'A phase that is not the lowest in Gibbs energy but persists because an energy barrier slows its transformation',
    'The most stable phase possible',
    'A phase that exists only in liquids',
    'A phase that changes instantly',
  ], 0, 'Martensite, glass and diamond at room conditions are all metastable: thermodynamically "wrong" but kinetically trapped.'),
  ge.tr('ge-016', 'A liquid metal is cooled below its melting point.', 'the undercooling increases', 'the magnitude of the driving force for solidification', 'increases',
    'The further below T_m, the more negative ΔG for solidification becomes, so the push to transform grows.'),
  ge.mt('ge-017', 'Match each case to the sign of ΔG for melting.', [
    ['Above the melting point', 'ΔG < 0'],
    ['Below the melting point', 'ΔG > 0'],
    ['At the melting point', 'ΔG = 0'],
  ], 'Melting is favored above T_m, opposed below it, and in balance at T_m.'),
  ge.mc('ge-018', 'In a single-phase region of a binary phase diagram at constant pressure, how many variables can be changed independently while staying in that region?', ['2', '0', '1', '3'], 0,
    'With one phase and two components, both temperature and composition can be varied freely within the field.', 'phase-rule'),
  ge.tf('ge-019', 'Adding heat to a pure metal at its melting point immediately raises its temperature.', false,
    'At the melting point, added heat goes into melting (the latent heat) while the temperature stays constant until all the solid has melted.'),
  ge.ce('ge-020', 'Select every correct statement.', 'A real casting cools quickly, and its microstructure differs from what the phase diagram predicts.', [
    'Phase diagrams describe equilibrium, reached only with slow enough changes',
    'Diffusion may be too slow to reach equilibrium during fast cooling',
    'Non-equilibrium structures such as coring or martensite can form',
    'Thermodynamics stops applying when cooling is fast',
  ], [0, 1, 2], 'Thermodynamics still sets the direction of change; kinetics decides how far the change gets. Fast cooling leaves non-equilibrium structures behind.'),

  // ---- Phase Diagrams ----
  pd.tr('pd-013', 'An alloy sits in a two-phase α + L field at a fixed temperature.', 'the overall composition C₀ moves closer to the α composition C_α', 'the fraction of α', 'increases',
    'The lever rule gives more of the phase whose composition is closer to the overall composition. At C₀ = C_α the alloy is entirely α.', 'lever-rule'),
  pd.mc('pd-014', 'Inside a two-phase field at a fixed temperature, the overall alloy composition changes slightly. What happens to the compositions of the two phases?', [
    'They stay the same; only the amounts of each phase change',
    'Both change by the same amount',
    'They swap',
    'One phase disappears immediately',
  ], 0, 'The phase compositions are fixed by the ends of the tie line at that temperature. Changing C₀ only moves the lever balance.'),
  pd.tf('pd-015', 'When a Cu–Ni alloy starts to solidify, the first solid that forms is richer in nickel (the higher-melting component) than the liquid.', true,
    'The tie line at the liquidus temperature ends at the solidus on the nickel-rich side. Without diffusion, this gives cored grains with Ni-rich centers.'),
  pd.pr('pd-016', 'Where does solid β coexist with liquid?', 'binary_eutectic', 'beta_l',
    'The β + L field is on the B-rich side, between the liquidus and the β solidus, above the eutectic line.'),
  pd.mc('pd-017', 'What does a solvus line show?', [
    'The solubility limit of one solid phase in another, as it changes with temperature',
    'Where the alloy is fully liquid',
    'Where melting starts',
    'The eutectic temperature only',
  ], 0, 'Crossing a solvus on cooling means a solid solution becomes supersaturated and a second phase starts to precipitate, the basis of precipitation hardening.'),
  pd.mt('pd-018', 'Match each invariant reaction to its equation (on cooling).', [
    ['Eutectic', 'L → α + β'],
    ['Eutectoid', 'γ → α + β'],
    ['Peritectic', 'L + α → β'],
  ], 'The names tell you the type: eutectic starts from a liquid, eutectoid from a solid, and a peritectic combines liquid and solid into a new solid.'),
  pd.ce('pd-019', 'Select every correct statement.', 'A hypoeutectic alloy (between the α solubility limit and the eutectic composition) is cooled slowly from the liquid.', [
    'Primary α forms first, in the α + L field',
    'At the eutectic temperature, the remaining liquid has the eutectic composition',
    'That remaining liquid then transforms into eutectic α + β',
    'The whole alloy solidifies at a single temperature',
  ], [0, 1, 2], 'The final microstructure is primary α grains surrounded by eutectic. Only the exact eutectic composition freezes at one temperature.'),
  pd.pr('pd-020', 'Where is a Cu–Ni alloy completely liquid?', 'cu_ni', 'liquid',
    'Above the liquidus, every composition is liquid. The liquidus runs from 1085 °C (Cu) to 1455 °C (Ni).'),

  // ---- The Fe–C Diagram ----
  fec.pr('fec-011', 'A hypereutectoid steel (more than 0.76 wt% C) is held just above 727 °C. Which field is it in?', 'fe_c_steel', 'gamma_fe3c',
    'Between the Acm line and 727 °C, a hypereutectoid steel is in the γ + Fe₃C field, where proeutectoid cementite coexists with austenite.'),
  fec.pr('fec-012', 'Which region is single-phase ferrite?', 'fe_c_steel', 'alpha',
    'Ferrite dissolves very little carbon (at most about 0.022 wt%), so its field is a narrow strip next to the pure-iron axis. It is drawn wider here so it can be seen.'),
  fec.tr('fec-013', 'Consider slowly cooled hypereutectoid steels.', 'the carbon content increases from 0.8 to 1.4 wt%', 'the fraction of proeutectoid cementite', 'increases',
    'The further the composition is past the eutectoid, the more cementite forms before 727 °C, by the lever rule.'),
  fec.mc('fec-014', 'Where does proeutectoid cementite usually form in a slowly cooled hypereutectoid steel?', [
    'Along the prior austenite grain boundaries, as a network',
    'Only inside pearlite colonies',
    'At the surface only',
    'It never forms',
  ], 0, 'Grain boundaries are easy nucleation sites. A continuous brittle cementite network can make such steels brittle unless they are heat treated.'),
  fec.tf('fec-015', 'Cementite is metastable: at high temperature for very long times, it can decompose into iron and graphite.', true,
    'Strictly, the stable phases are iron and graphite. Cementite forms because it nucleates more easily; silicon promotes graphite formation in gray cast irons.'),
  fec.mc('fec-016', 'At what temperature is the solubility of carbon in ferrite greatest (about 0.022 wt%)?', ['727 °C', '20 °C', '1147 °C', '912 °C'], 0,
    'Ferrite’s carbon solubility peaks at the eutectoid temperature and falls to almost nothing at room temperature.'),
  fec.mc('fec-017', 'Which phase of iron is FCC?', ['Austenite (γ)', 'Ferrite (α)', 'δ-ferrite', 'Cementite'], 0,
    'Austenite is FCC. Both α-ferrite and high-temperature δ-ferrite are BCC, and cementite is an orthorhombic compound.'),
  fec.tr('fec-018', 'Consider slowly cooled hypoeutectoid steels.', 'the carbon content increases toward 0.76 wt%', 'the fraction of proeutectoid ferrite', 'decreases',
    'Closer to the eutectoid composition, more of the austenite remains to form pearlite and less ferrite forms first.'),
  fec.mt('fec-019', 'Match each slowly cooled steel to its room-temperature microstructure.', [
    ['0.4 wt% C', 'Proeutectoid ferrite plus pearlite'],
    ['0.76 wt% C', '100% pearlite'],
    ['1.2 wt% C', 'Proeutectoid cementite plus pearlite'],
  ], 'Which proeutectoid phase forms depends on which side of the eutectoid composition the steel lies.'),
  fec.ce('fec-020', 'Select every correct statement.', 'A steel is heated into the austenite field before quenching.', [
    'Carbon must be dissolved in austenite so that quenching can trap it in martensite',
    'Austenite (FCC) dissolves much more carbon than ferrite',
    'Austenite is the phase that transforms to martensite',
    'Austenitizing melts the steel',
  ], [0, 1, 2], 'Austenitizing dissolves carbides and sets up a uniform solid solution. It is well below the melting range.'),
]
