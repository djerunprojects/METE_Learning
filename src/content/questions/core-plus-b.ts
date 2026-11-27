import type { Question } from '../types'
import { forNode } from './build'

// Extra questions (11–20) for Kinetics, Mechanical Properties and Characterization skills.
// Sources: Callister & Rethwisch ch. 5–8, 10; Porter & Easterling ch. 4–5; Dieter; Cullity & Stock; Goldstein et al.

const df = forNode('diffusion')
const ng = forNode('nucleation-growth')
const tt = forNode('ttt-cct')
const ss = forNode('stress-strain')
const ph = forNode('plasticity-hardness')
const ft = forNode('fracture-toughness')
const fcr = forNode('fatigue-creep')
const mc = forNode('microscopy')
const xr = forNode('xrd')
const mt = forNode('mechanical-testing')

export const corePlusB: Question[] = [
  // ---- Diffusion ----
  df.mc('df-011', "What does Fick's second law describe?", [
    'Non-steady-state diffusion, where concentration at each point changes with time',
    'Steady-state diffusion only',
    'Heat flow',
    'Diffusion in liquids only',
  ], 0, 'Carburizing and most heat treatments are non-steady-state problems, solved with Fick’s second law.'),
  df.mc('df-012', 'On a plot of log D against 1/T, what does the slope tell you?', [
    'The activation energy Q (a steeper slope means a larger Q)',
    'The diffusion distance',
    'The melting point',
    'The crystal structure',
  ], 0, 'Taking the log of the Arrhenius equation gives a straight line with slope −Q/R (in natural log), so Q can be read directly from the slope.', 'arrhenius-diffusion'),
  df.tf('df-013', 'Hydrogen is so small that it diffuses quickly through steel even at room temperature.', true,
    'Tiny interstitial hydrogen atoms move easily between iron atoms, which is why hydrogen can embrittle steel long after welding or plating.'),
  df.tr('df-014', 'Compare interstitial atoms diffusing in the same iron lattice.', 'the diffusing atom is larger (e.g. carbon compared with hydrogen)', 'the diffusion coefficient', 'decreases',
    'A larger atom must squeeze harder past its neighbors to jump, so the activation energy is higher and diffusion slower.'),
  df.mc('df-015', 'How is diffusion used in making silicon chips?', [
    'Dopants such as boron or phosphorus are diffused into silicon at high temperature to form p- and n-type regions',
    'Silicon is melted and recast',
    'Copper wires diffuse into the silicon on purpose',
    'Diffusion is not used',
  ], 0, 'Controlled high-temperature diffusion (and ion implantation followed by annealing) sets the doping profiles that make junctions.'),
  df.tr('df-016', 'Compare samples of the same metal at moderate temperature.', 'the grain size becomes finer', 'the contribution of grain boundary diffusion to overall diffusion', 'increases',
    'Finer grains provide more fast-diffusion paths, which matters most at lower temperatures where lattice diffusion is slow.'),
  df.mc('df-017', 'What is self-diffusion?', [
    'Atoms of a pure metal moving among themselves, traced with radioactive isotopes',
    'Diffusion of one metal into another',
    'Diffusion without any atoms moving',
    'Diffusion of liquids into solids',
  ], 0, 'Even in a pure metal, atoms constantly change places by the vacancy mechanism. Isotope tracers make this movement measurable.'),
  df.mt('df-018', 'Match each process to what diffuses.', [
    ['Carburizing', 'Carbon into a steel surface'],
    ['Nitriding', 'Nitrogen into a steel surface'],
    ['Doping silicon', 'Boron or phosphorus into silicon'],
    ['Decarburization', 'Carbon out of a steel surface'],
  ], 'Many surface treatments, and some unwanted effects, are diffusion processes.'),
  df.tr('df-019', 'A diffusion treatment runs for a fixed time.', 'the diffusion coefficient D doubles', 'the diffusion depth', 'increases',
    'Depth scales with √(Dt), so doubling D increases depth by about √2, roughly 1.4 times.', 'diffusion-distance'),
  df.ce('df-020', 'Select every correct statement.', 'A steel part heated in air for a long time loses carbon from its surface (decarburization).', [
    'Carbon diffuses to the surface and reacts with oxygen',
    'After hardening, the decarburized surface is softer',
    'Higher temperature makes decarburization faster',
    'Decarburization increases surface hardness',
  ], [0, 1, 2], 'Decarburized surfaces cannot form hard, high-carbon martensite, so they hurt wear and fatigue resistance. Protective atmospheres prevent it.'),

  // ---- Nucleation & Growth ----
  ng.mc('ng-011', 'When does homogeneous nucleation happen?', [
    'Uniformly throughout the parent phase, without help from surfaces, and only at large undercooling',
    'Only on mold walls',
    'Only at the melting point',
    'Only in gases',
  ], 0, 'Without a surface to reduce the barrier, a large driving force is needed. That is why it is rare in practice.'),
  ng.tf('ng-012', 'Very pure water free of nucleation sites can be supercooled well below 0 °C without freezing.', true,
    'Without heterogeneous sites, the nucleation barrier is so high that tiny droplets of pure water can stay liquid to around −40 °C.'),
  ng.tr('ng-013', 'A nucleus forms on a substrate surface.', 'the nucleus wets the substrate better (smaller contact angle)', 'the energy barrier for heterogeneous nucleation', 'decreases',
    'Better wetting means less new interface is needed, so the barrier drops. A perfectly wetting substrate removes it entirely.'),
  ng.mc('ng-014', 'What is recalescence?', [
    'A temperature rise during solidification of an undercooled melt, caused by the release of latent heat',
    'A second melting',
    'A drop in temperature during heating',
    'Grain growth at room temperature',
  ], 0, 'When an undercooled melt finally nucleates, crystals grow so fast that the released latent heat warms the melt back toward the melting point.'),
  ng.tr('ng-015', 'Consider growth of crystals just below the melting point.', 'the undercooling increases slightly', 'the growth rate', 'increases',
    'Near T_m, growth is limited by the small driving force. More undercooling raises it, until at much lower temperatures slow diffusion takes over.'),
  ng.mc('ng-016', 'Why do good grain refiners work even at small undercooling?', [
    'Their particles are potent heterogeneous nucleation sites with a low contact angle',
    'They raise the melting point of the melt',
    'They dissolve instantly',
    'They stop all nucleation',
  ], 0, 'A potent nucleant has a crystal structure and interface energy that let the solid form on it with almost no barrier.'),
  ng.tr('ng-017', 'A transformation follows the Avrami equation.', 'the rate constant k decreases (for example, at a temperature where diffusion is slow)', 'the time to reach 50% transformation', 'increases',
    'A smaller k stretches the S-curve to longer times.', 'avrami'),
  ng.mt('ng-018', 'Match each part of an S-shaped transformation curve to what is happening.', [
    ['Incubation', 'Little transformation while nuclei form'],
    ['Rapid growth', 'Fraction transformed rises steeply'],
    ['Impingement', 'Rate slows as transformed regions meet'],
  ], 'The S-shape reflects nucleation, then growth, then running out of untransformed material.'),
  ng.tf('ng-019', 'In solid-state transformations, the strain energy of fitting the new phase into the old one adds to the nucleation barrier.', true,
    'A new solid phase usually has a different volume or shape than the space it replaces. That elastic strain energy acts like extra surface cost.'),
  ng.ce('ng-020', 'Select every method that gives a finer grain size in a casting.', 'A foundry wants finer grains.', [
    'Add inoculants',
    'Increase the cooling rate',
    'Stir or vibrate the melt so dendrite fragments act as nuclei',
    'Hold just above the liquidus for a long time, then cool slowly',
  ], [0, 1, 2], 'More nuclei and less growth time both refine grains. Slow cooling from a long hold does the opposite.'),

  // ---- TTT & CCT Diagrams ----
  tt.pr('tt-011', 'Where does pearlite form during isothermal holding?', 'ttt_eutectoid', 'pearlite',
    'Pearlite forms between the start and finish curves above the nose, roughly 540–727 °C for eutectoid steel.'),
  tt.pr('tt-012', 'Where is the austenite still untransformed, even though it is no longer stable?', 'ttt_eutectoid', 'unstable_austenite',
    'Below 727 °C but left of the start curve, the austenite has not started to transform yet. It is waiting for nuclei to form.'),
  tt.tr('tt-013', 'Eutectoid steel is held isothermally below 727 °C.', 'the holding temperature is just slightly below 727 °C (small undercooling)', 'the time before pearlite starts to form', 'increases',
    'With very little driving force, nucleation is slow, so the start curve bends to very long times as it approaches 727 °C.'),
  tt.mc('tt-014', 'What is Mₛ?', [
    'The temperature at which martensite starts to form on cooling',
    'The melting temperature of steel',
    'The temperature at which pearlite forms fastest',
    'The maximum service temperature',
  ], 0, 'Martensite starts forming at Mₛ and keeps forming as the temperature drops toward M_f, the finish temperature.'),
  tt.tr('tt-015', 'Compare plain carbon steels.', 'the carbon content increases', 'the martensite start temperature Mₛ', 'decreases',
    'Dissolved carbon stabilizes austenite, so it must be cooled further before martensite forms. High-carbon steels can have Mₛ near or below 200 °C.'),
  tt.tf('tt-016', 'The amount of martensite depends on how far below Mₛ the steel is cooled, not on how long it is held.', true,
    'Martensite forms athermally: each temperature step below Mₛ produces more almost instantly, and holding does not add more.'),
  tt.mc('tt-017', 'What is retained austenite?', [
    'Austenite left untransformed when the martensite finish temperature is below room temperature, common in high-carbon steels',
    'Austenite at 1000 °C',
    'A type of pearlite',
    'Martensite that has been tempered',
  ], 0, 'Retained austenite can later transform in service, changing dimensions. Sub-zero treatment or tempering reduces it.'),
  tt.mc('tt-018', 'How is spheroidite produced, and what is it like?', [
    'By holding just below 727 °C for many hours; cementite forms spheres, giving the softest, most ductile steel structure',
    'By rapid quenching; it is very hard',
    'By melting the steel',
    'By cold working; it is very brittle',
  ], 0, 'Spheres minimize the ferrite–cementite interface area. Spheroidizing makes high-carbon steels machinable and formable.'),
  tt.mt('tt-019', 'Rank these eutectoid steel microstructures by hardness.', [
    ['Martensite', 'Hardest'],
    ['Fine pearlite', 'Harder than coarse pearlite'],
    ['Coarse pearlite', 'Softer than fine pearlite'],
    ['Spheroidite', 'Softest and most ductile'],
  ], 'Hardness rises with finer, more numerous phase boundaries and with trapped carbon (martensite).'),
  tt.ce('tt-020', 'Select every correct statement.', 'A steel bar is quenched from the austenite field.', [
    'Cooling faster than the critical cooling rate avoids the nose and gives martensite',
    'Cooling more slowly lets pearlite or bainite form',
    'The core of a thick bar cools more slowly than its surface',
    'Cooling rate has no effect on the microstructure',
  ], [0, 1, 2], 'This is why thick sections of plain carbon steel may harden only at the surface, while alloy steels harden deeper.'),

  // ---- Stress, Strain & Elasticity ----
  ss.mc('ss-011', 'What does the shear modulus G relate?', ['Shear stress to shear strain', 'Tensile stress to tensile strain', 'Hardness to strength', 'Temperature to strain'], 0,
    'G is the elastic stiffness in shear, just as E is in tension. For isotropic materials, E, G and Poisson’s ratio are linked.'),
  ss.tf('ss-012', 'Some materials, such as rubber, are elastic but not linear: their stress–strain curve is curved even though they spring back.', true,
    'Rubber can stretch several hundred percent elastically, but its stiffness changes with strain, so Hooke’s law only applies to small strains.'),
  ss.tr('ss-013', 'A metal bar is loaded within its elastic region.', 'the applied stress doubles', 'the elastic strain', 'increases',
    'In the linear elastic region, strain is proportional to stress, so doubling the stress doubles the strain.', 'hookes-law'),
  ss.mc('ss-014', 'What is the proportional limit?', [
    'The point where the stress–strain curve stops being a straight line',
    'The maximum stress on the curve',
    'The stress at fracture',
    'The stress after necking',
  ], 0, 'Up to the proportional limit, Hooke’s law holds. Yielding usually begins at or slightly beyond it.'),
  ss.tr('ss-015', 'Two bars carry the same force.', 'one bar has a larger original cross-sectional area', 'the engineering stress in that bar', 'decreases',
    'Stress is force divided by area, so the same force spread over more area gives less stress.'),
  ss.mc('ss-016', 'Why doesn’t a ductile metal neck in a compression test?', [
    'The specimen gets shorter and fatter, so there is no local thinning',
    'Metals cannot be compressed',
    'Compression always breaks the specimen first',
    'Necking only happens in polymers',
  ], 0, 'In compression the cross-section grows. Ductile metal cylinders bulge (barrel) instead of necking.'),
  ss.mt('ss-017', 'Match each quantity to its usual unit.', [
    ['Stress', 'MPa'],
    ['Strain', 'Dimensionless'],
    ['Elastic modulus', 'GPa'],
    ['Force', 'N'],
  ], 'Strain is a ratio of lengths, so it has no unit (sometimes written as % or mm/mm).'),
  ss.tf('ss-018', 'The ultimate tensile strength is the maximum point on the engineering stress–strain curve.', true,
    'After this maximum, necking begins and the engineering stress falls, even though the true stress in the neck keeps rising.'),
  ss.pr('ss-019', 'Where does the specimen finally break?', 'stress_strain_ductile', 'fracture',
    'The curve ends at the fracture point, after necking has concentrated the deformation in one spot.'),
  ss.ce('ss-020', 'Select every correct statement.', 'A shaft must not bend too much under load (its design is limited by stiffness).', [
    'A material with a higher elastic modulus helps',
    'A larger cross-section helps',
    'Heat treating the steel to a higher strength will make it much stiffer',
    'Stiffness depends on E and the geometry',
  ], [0, 1, 3], 'Heat treatment changes strength, not E. Stiffness-limited designs need a higher-modulus material or a stiffer shape.'),

  // ---- Plasticity & Hardness ----
  ph.mc('ph-011', 'What does percent reduction in area measure?', [
    'Ductility, from how much the cross-section shrank at the fracture',
    'Elastic modulus',
    'Hardness',
    'Density',
  ], 0, 'It compares the fracture area with the original area. Very ductile metals can reach 70% or more.'),
  ph.tr('ph-012', 'A BCC steel is tested in tension at different temperatures.', 'the test temperature decreases', 'the yield strength', 'increases',
    'Dislocation motion in BCC metals is strongly thermally assisted, so they get stronger (and eventually brittle) when cold.'),
  ph.tf('ph-013', 'Hardness tests measure a material’s resistance to localized plastic deformation.', true,
    'An indenter forces the surface to flow plastically; a harder material resists, leaving a smaller or shallower dent.'),
  ph.mc('ph-014', 'In a tensile test, what represents toughness?', [
    'The total area under the stress–strain curve up to fracture',
    'The slope of the elastic region',
    'The maximum stress',
    'The yield strength',
  ], 0, 'The area is energy per unit volume. A tough material combines good strength with good ductility.'),
  ph.tr('ph-015', 'Compare metals tested in tension.', 'a metal has both higher strength and higher ductility than another', 'its toughness (area under the curve)', 'increases',
    'Both a taller and a longer curve enclose more area, so the material absorbs more energy before breaking.'),
  ph.mc('ph-016', 'Why does low-carbon steel often show an upper and lower yield point?', [
    'Dislocations are pinned by carbon and nitrogen atoms and suddenly break free',
    'The specimen melts briefly',
    'The test machine slips',
    'It is caused by martensite forming',
  ], 0, 'Solute atoms collect around dislocations. Extra stress is needed to tear them away (upper yield point), after which flow continues at a lower stress.'),
  ph.mt('ph-017', 'Match each material to its typical tensile behavior.', [
    ['Mild steel', 'A distinct yield point'],
    ['Aluminum alloy', 'Gradual yielding (0.2% offset used)'],
    ['Glass', 'Fracture with almost no plastic deformation'],
    ['Rubber', 'Very large recoverable elastic strain'],
  ], 'Stress–strain curves look very different across materials, which is why tests and definitions are adapted to each.'),
  ph.tf('ph-018', 'Rockwell hardness is read directly from the depth of indentation, so no microscope measurement is needed.', true,
    'This makes Rockwell testing fast and common on the shop floor, unlike Brinell or Vickers where the indent size is measured optically.'),
  ph.tr('ph-019', 'A cold-worked brass sheet is annealed until it recrystallizes.', 'the sheet recrystallizes', 'its hardness', 'decreases',
    'Recrystallization replaces the dislocation-rich grains with new, nearly strain-free grains, removing the strain hardening.'),
  ph.ce('ph-020', 'Select every typical use of microhardness tests (Vickers or Knoop at low loads).', 'An engineer has a microhardness tester.', [
    'Measuring the hardness of individual phases',
    'Measuring the case depth profile of a carburized gear',
    'Measuring the hardness of thin coatings',
    'Measuring impact toughness',
  ], [0, 1, 2], 'Tiny indents probe small regions. Impact toughness needs a Charpy or similar test.'),

  // ---- Fracture & Toughness ----
  ft.tr('ft-011', 'Two plates of the same material contain cracks of the same length.', 'the crack geometry gives a larger geometry factor Y (e.g. an edge crack)', 'the stress needed for fracture', 'decreases',
    'A larger Y means a higher stress intensity at the crack tip for the same applied stress, so fracture happens at a lower stress.', 'stress-intensity'),
  ft.mc('ft-012', 'Why is plane-strain fracture toughness lower than toughness measured on thin sheets?', [
    'In thick sections, the surrounding material constrains plastic flow at the crack tip, so less energy is absorbed',
    'Thin sheets contain no cracks',
    'Thick sections are always made of a different alloy',
    'Plane strain only exists in ceramics',
  ], 0, 'Thin sheets can yield through their thickness (plane stress), absorbing more energy. Thick sections give the lowest, most conservative toughness, K_Ic.'),
  ft.tf('ft-013', 'For a given steel, raising its yield strength by heat treatment usually lowers its fracture toughness.', true,
    'Strength and toughness usually trade off. Designers choose a tempering condition that gives enough of both.'),
  ft.mc('ft-014', 'What does intergranular fracture often point to?', [
    'Weakened grain boundaries, e.g. from impurity segregation, hydrogen or temper embrittlement',
    'A very tough, ductile material',
    'Perfectly clean grain boundaries',
    'Fatigue only',
  ], 0, 'When cracks follow grain boundaries, something has made the boundaries weaker than the grains, which is useful evidence in failure analysis.'),
  ft.tr('ft-015', 'A BCC structural steel is loaded at a fixed temperature near its transition.', 'the loading rate increases (impact loading)', 'the tendency to fracture in a brittle way', 'increases',
    'Fast loading leaves less time for plastic flow, which shifts the ductile-to-brittle transition to higher temperatures.'),
  ft.mc('ft-016', 'Why does damage-tolerant design assume that cracks already exist?', [
    'Manufacturing and service always create some flaws, so the structure must be safe until inspections find them',
    'Cracks make structures stronger',
    'Inspections can find every flaw at any size',
    'Only ceramics contain cracks',
  ], 0, 'Designs are checked so that the largest crack missed by inspection cannot grow to critical size before the next inspection.'),
  ft.mt('ft-017', 'Match each fracture type to its appearance.', [
    ['Ductile', 'Dull, fibrous, with dimples'],
    ['Brittle cleavage', 'Flat, shiny facets'],
    ['Intergranular', 'Grain-shaped facets ("rock candy")'],
    ['Fatigue', 'Beach marks around an origin'],
  ], 'Fracture surfaces record how a part broke; this is the starting point of failure analysis.'),
  ft.tf('ft-018', 'Toughness and fracture toughness mean exactly the same thing.', false,
    'Toughness is the energy absorbed to fracture an un-notched or notched specimen. Fracture toughness, K_Ic, is the resistance of a material to growth of a sharp crack.'),
  ft.tr('ft-019', 'Two materials carry the same applied stress.', 'the material has a higher fracture toughness K_Ic', 'the critical crack size it can tolerate', 'increases',
    'Rearranging K_Ic = Yσ√(πa), the critical crack length grows with K_Ic², so tougher materials tolerate much bigger cracks.', 'stress-intensity'),
  ft.ce('ft-020', 'Select every helpful measure.', 'A welded steel structure will operate in a very cold climate.', [
    'Choose a steel whose transition temperature is below the service temperature',
    'Prefer fine-grained steels, which have lower transition temperatures',
    'Avoid sharp notches and weld defects',
    'Raise the carbon content a lot',
  ], [0, 1, 2], 'More carbon generally raises the transition temperature and hurts weldability, making brittle fracture more likely.'),

  // ---- Fatigue & Creep ----
  fcr.tr('fcr-013', 'A fatigue crack is growing in the Paris regime.', 'the stress intensity range ΔK increases', 'the crack growth per cycle', 'increases',
    'Growth rate rises as a power of ΔK, typically with m between 2 and 4, so cracks accelerate as they lengthen.', 'paris-law'),
  fcr.mc('fcr-014', 'Where do most fatigue cracks start?', [
    'At the free surface, especially at stress concentrations',
    'At the exact center of the part',
    'Uniformly throughout the volume',
    'Only at welds inside the part',
  ], 0, 'Surfaces carry the highest bending and torsion stresses and have scratches and notches, so surface quality strongly controls fatigue life.'),
  fcr.tf('fcr-015', 'In a corrosive environment, steels often lose their fatigue limit (corrosion fatigue).', true,
    'Corrosion keeps creating new pits and crack starters, so the S–N curve keeps falling instead of leveling off.'),
  fcr.mc('fcr-016', 'What is thermal fatigue?', [
    'Cracking caused by cyclic thermal stresses from repeated heating and cooling',
    'Fatigue at constant temperature',
    'Melting under load',
    'Creep at room temperature',
  ], 0, 'Parts like die-casting dies and engine heads expand and contract unevenly on each cycle, and the resulting stresses can crack them.'),
  fcr.tr('fcr-017', 'An alloy runs at high temperature, where grain boundary sliding contributes to creep.', 'the grain size is made larger', 'the creep rate', 'decreases',
    'Fewer grain boundaries mean less boundary sliding and diffusion along boundaries, so coarse-grained or single-crystal alloys creep more slowly.'),
  fcr.mc('fcr-018', 'What does a stress-rupture test measure?', [
    'The time to failure under a constant load at high temperature',
    'The hardness at room temperature',
    'The energy to break a notched bar',
    'The number of cycles to failure',
  ], 0, 'Stress-rupture data, often combined with the Larson–Miller parameter, set the life of hot components.'),
  fcr.mt('fcr-019', 'Match each creep-resistance strategy to why it works.', [
    ['High-melting-point base metal', 'Slower diffusion at the service temperature'],
    ['Fine, stable precipitates', 'Pin dislocations'],
    ['Single crystals', 'No grain boundary sliding'],
    ['Slow-diffusing solutes such as W or Re', 'Slow dislocation climb'],
  ], 'Superalloys combine all of these strategies to run at a large fraction of their melting point.'),
  fcr.ce('fcr-020', 'Select every correct statement.', 'A bolt clamping a hot flange gradually loosens over many months.', [
    'Creep causes stress relaxation, lowering the clamping force',
    'A higher operating temperature speeds this up',
    'A more creep-resistant bolt alloy would help',
    'Lowering the temperature would make it worse',
  ], [0, 1, 2], 'At high temperature, the stretched bolt slowly creeps, so its elastic stretch, and the clamp force, decrease. Hot bolted joints are re-tightened or designed for this.'),

  // ---- Optical & Electron Microscopy ----
  mc.tr('mc-011', 'Electrons in an electron microscope are accelerated through a voltage.', 'the accelerating voltage is increased', 'the electron wavelength', 'decreases',
    'Faster electrons have a shorter wavelength, which improves the theoretical resolution.'),
  mc.mc('mc-012', 'How does the depth of field of an SEM compare with that of an optical microscope?', [
    'It is much larger, so rough surfaces stay in focus',
    'It is much smaller',
    'They are the same',
    'An SEM has no depth of field',
  ], 0, 'The narrow electron beam keeps a large range of heights in focus, which is why SEM images of fractures look so three-dimensional.'),
  mc.tf('mc-013', 'Polarized light microscopy can reveal grains in anisotropic metals such as titanium or zinc, even without etching.', true,
    'In HCP metals, the reflected polarized light depends on crystal orientation, so different grains appear with different brightness or color.'),
  mc.mc('mc-014', 'What does AFM measure?', [
    'Surface topography at nanometer scale, by scanning a sharp tip over the surface',
    'Chemical composition by X-rays',
    'Crystal structure by diffraction',
    'Bulk density',
  ], 0, 'AFM senses tiny forces between the tip and the surface, so it can image surfaces of conductors and insulators alike.'),
  mc.tr('mc-015', 'A sample is imaged with backscattered electrons.', 'a region has a higher average atomic number', 'its brightness in the BSE image', 'increases',
    'Heavier atoms scatter more electrons back, so heavier phases look brighter. This gives quick compositional contrast.'),
  mc.mc('mc-016', 'How is grain size commonly measured from a micrograph?', [
    'By counting grains in an area or the number of boundaries crossed by test lines (the line intercept method)',
    'By weighing the sample',
    'By measuring hardness',
    'By X-ray fluorescence',
  ], 0, 'Standard methods turn such counts into an average grain diameter or an ASTM grain size number.'),
  mc.mt('mc-017', 'Match each technique to its approximate best resolution.', [
    ['Naked eye', 'About 0.1 mm'],
    ['Optical microscope', 'About 0.2 µm'],
    ['SEM', 'A few nanometers'],
    ['TEM', 'Below 0.1 nm (atomic)'],
  ], 'Each step down in wavelength opens up a new scale of microstructure.'),
  mc.tf('mc-018', 'Etching can give different phases different colors or contrast, making them distinguishable.', true,
    'Phases dissolve or oxidize at different rates in an etchant, and color etchants form films of different thickness on each phase.'),
  mc.mc('mc-019', 'What does an EDS map show?', [
    'Where each chemical element is located across the imaged area',
    'The crystal orientation of grains',
    'The surface roughness',
    'The temperature of the sample',
  ], 0, 'By recording X-ray spectra at each point, EDS builds a map for each element, revealing segregation, inclusions and phases.'),
  mc.ce('mc-020', 'Select every good preparation practice.', 'A soft aluminum sample is prepared for microscopy.', [
    'Grind gently with progressively finer abrasives',
    'Finish with fine diamond or colloidal silica polishing',
    'Avoid leaving a deformed surface layer that hides the true microstructure',
    'Skip polishing and etch directly after sawing',
  ], [0, 1, 2], 'Each grinding step must remove the damage from the previous one. Soft metals smear easily, so gentle, careful preparation is needed.'),

  // ---- X-ray Diffraction ----
  xr.tr('xr-011', 'The same planes and X-ray wavelength are considered.', 'the order of reflection n increases from 1 to 2', 'the diffraction angle θ', 'increases',
    'nλ = 2d sin θ: a larger n needs a larger sin θ, so higher-order reflections appear at higher angles.', 'bragg'),
  xr.mc('xr-012', 'Which X-rays are most commonly used for laboratory powder diffraction?', [
    'Characteristic Cu Kα radiation from a copper target',
    'Visible light',
    'Gamma rays from a reactor',
    'Microwaves',
  ], 0, 'An X-ray tube with a copper anode emits a strong characteristic line at about 0.154 nm, well matched to typical plane spacings.'),
  xr.tf('xr-013', 'Each crystalline phase has its own diffraction pattern, like a fingerprint.', true,
    'Peak positions come from the unit cell and its spacing, and intensities from where the atoms sit, so no two phases match exactly.'),
  xr.mc('xr-014', 'How does texture (preferred grain orientation) show up in a diffraction pattern?', [
    'Peak intensities differ from those of a randomly oriented powder',
    'All peaks disappear',
    'Peaks shift to new positions',
    'The background turns into a hump',
  ], 0, 'If many grains share an orientation, the planes they favor diffract more strongly. Rolled sheets usually show texture.'),
  xr.tr('xr-015', 'A mixture of two crystalline phases is analyzed.', 'the amount of one phase in the mixture increases', 'the intensity of that phase’s peaks', 'increases',
    'More of a phase means more diffracting volume. Comparing intensities allows quantitative phase analysis, e.g. of retained austenite.'),
  xr.mc('xr-016', 'Why is a fine powder or polycrystal used for phase identification?', [
    'With many randomly oriented grains, every set of planes satisfies Bragg’s law in some grains',
    'Powders contain no atoms',
    'Powders are amorphous',
    'Only powders absorb X-rays',
  ], 0, 'A single crystal diffracts only at specific orientations. Many random grains give the full pattern in a single scan.'),
  xr.mt('xr-017', 'Match each diffraction observation to what it means.', [
    ['Sharp peaks', 'Crystalline material'],
    ['Broad hump', 'Amorphous material'],
    ['Peak shift', 'Change in plane spacing'],
    ['Broadened peaks', 'Very small crystallites or microstrain'],
  ], 'Positions, widths and shapes of peaks each carry different information.'),
  xr.tf('xr-018', 'XRD can tell FCC metals from BCC metals by which peaks appear in the pattern.', true,
    'Different selection rules mean FCC and BCC patterns have characteristic sequences of reflections, e.g. FCC starts with (111) and (200), BCC with (110) and (200).'),
  xr.tr('xr-019', 'A nanocrystalline powder is annealed and its crystallites grow.', 'the crystallite size increases from about 10 nm to about 1 µm', 'the width of the diffraction peaks', 'decreases',
    'Larger crystallites have more planes to cancel diffraction away from the exact Bragg angle, so peaks become sharp.'),
  xr.ce('xr-020', 'Select every thing XRD can tell you here.', 'A quenched steel is examined by X-ray diffraction.', [
    'How much retained austenite (FCC) is present',
    'That the martensite peaks are broadened or split by its BCT distortion',
    'Which crystalline phases are present',
    'Its hardness value directly',
  ], [0, 1, 2], 'XRD reveals phases and lattice distortion. Hardness needs a hardness test, though peak broadening often correlates with it.'),

  // ---- Mechanical Testing ----
  mt.mc('mt-011', 'Why do tensile specimens have a narrower gauge section in the middle?', [
    'So deformation and fracture happen in the measured region, away from the grips',
    'To save material',
    'To make the test faster',
    'Because the grips need a narrow section',
  ], 0, 'Stress is highest in the reduced section, so necking and fracture occur where the extensometer measures strain.'),
  mt.tr('mt-012', 'Charpy specimens of the same steel are tested at the same temperature.', 'the notch is made sharper', 'the absorbed impact energy', 'decreases',
    'A sharper notch concentrates stress and constrains plastic flow, making brittle fracture easier.'),
  mt.tf('mt-013', 'An extensometer measures strain more accurately than the movement of the test machine’s crosshead.', true,
    'Crosshead movement includes deformation of the machine and grips. An extensometer measures only the gauge length of the specimen.'),
  mt.mc('mt-014', 'For which materials is compression testing especially useful?', [
    'Brittle materials such as concrete and ceramics that are loaded in compression in service',
    'Only rubber',
    'Only thin foils',
    'Materials that cannot be compressed',
  ], 0, 'Concrete and ceramics are much stronger in compression than tension, and they are usually used that way.'),
  mt.tr('mt-015', 'A Vickers hardness test is done on the same material.', 'the test load increases', 'the size of the indentation', 'increases',
    'A larger force pushes the indenter deeper. Hardness numbers normalize for this, so they stay roughly constant across loads.'),
  mt.mc('mt-016', 'Why is the Brinell test well suited to coarse or uneven materials such as castings?', [
    'Its large ball makes a large indent that averages over many grains and phases',
    'It uses the smallest indenter',
    'It does not leave a mark',
    'It measures toughness',
  ], 0, 'A small indent might land on one hard or soft particle; a large one gives a representative average.'),
  mt.mt('mt-017', 'Match each test to the result it usually produces.', [
    ['Tensile test', 'Stress–strain curve'],
    ['Charpy test', 'Absorbed energy vs temperature curve'],
    ['Fatigue test', 'S–N curve'],
    ['Creep test', 'Strain vs time curve'],
  ], 'Each test summarizes behavior in a characteristic plot used in design.'),
  mt.tf('mt-018', 'NDT methods such as ultrasonic inspection can find internal flaws without damaging the part.', true,
    'Ultrasound, X-ray radiography, eddy currents, magnetic particles and dye penetrants let parts be inspected and still used.'),
  mt.tr('mt-019', 'Fracture toughness specimens of a steel are made in different thicknesses.', 'the thickness increases until plane-strain conditions are reached', 'the measured toughness', 'decreases',
    'Thin specimens give higher apparent toughness because of through-thickness yielding. It drops to the true K_Ic once the specimen is thick enough.'),
  mt.ce('mt-020', 'Select every correct statement.', 'A polymer is given a tensile test.', [
    'The results depend strongly on the strain rate',
    'The results depend strongly on the temperature',
    'For nylon, the moisture content of the specimen matters',
    'Polymers behave exactly like metals in testing',
  ], [0, 1, 2], 'Polymers are viscoelastic and some absorb water, so test standards control rate, temperature and conditioning closely.'),
]
