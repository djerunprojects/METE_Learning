import type { Question } from '../types'
import { forNode } from './build'

// Extra questions for Polymers and Composites skills.
// Sources: Callister & Rethwisch ch. 14–16; Young & Lovell; Osswald & Menges; Hull & Clyne; Chawla.

const pst = forNode('polymer-structure')
const pth = forNode('polymer-thermal')
const ve = forNode('viscoelasticity')
const ppr = forNode('polymer-processing')
const mr = forNode('matrix-reinforcement')
const rom = forNode('rule-of-mixtures')
const fib = forNode('fiber-composites')
const mx = forNode('mmc-cmc')

export const discPlusC: Question[] = [
  // ---- Polymer Structure ----
  pst.mc('pst-011', 'What is the repeat unit of polyethylene?', ['–CH₂–CH₂–', '–CF₂–CF₂–', '–CH₂–CHCl–', '–SiO₂–'], 0,
    'Polyethylene is a chain of –CH₂–CH₂– units. Replacing hydrogen with fluorine gives PTFE, and with chlorine gives PVC.'),
  pst.tr('pst-012', 'Linear polymer chains are compared.', 'the chains become more regular (no bulky random side groups)', 'the ability to crystallize', 'increases',
    'Regular chains fold neatly into crystals. Irregular, atactic or bulky chains stay amorphous.'),
  pst.tf('pst-013', 'Molecular weight in polymers is described by an average, because chains in a sample have a range of lengths.', true,
    'Number-average and weight-average molecular weights describe the distribution; their ratio (dispersity) shows how broad it is.'),
  pst.mc('pst-014', 'Why is PTFE so chemically inert and slippery?', [
    'Its strong C–F bonds and fluorine sheath resist chemical attack and give low surface energy',
    'It contains metal atoms',
    'It is highly crosslinked rubber',
    'It is amorphous glass',
  ], 0, 'PTFE’s fluorine atoms shield the carbon backbone, giving non-stick, chemically resistant surfaces.'),
  pst.tr('pst-015', 'A rubber is vulcanized with sulfur.', 'the crosslink density increases', 'the stiffness of the rubber', 'increases',
    'More crosslinks shorten the chain segments between links, so the network resists stretching more. Very heavy crosslinking gives hard ebonite.'),
  pst.mt('pst-016', 'Match each polymer to a typical use.', [
    ['PET', 'Drink bottles and fibers'],
    ['PVC', 'Pipes and window frames'],
    ['PMMA', 'Transparent sheets (acrylic glass)'],
    ['LDPE', 'Flexible packaging film'],
  ], 'Commodity polymers are matched to applications by transparency, stiffness, toughness and cost.'),
  pst.mc('pst-017', 'What are spherulites?', [
    'Spherical clusters of radiating crystalline lamellae in semicrystalline polymers',
    'Gas bubbles in plastic',
    'Metal particles in polymer',
    'Fully amorphous regions',
  ], 0, 'Spherulites grow out from nuclei as folded-chain lamellae radiate outward, with amorphous material between them.'),
  pst.tf('pst-018', 'Thermosets such as epoxy are network polymers that are crosslinked during curing.', true,
    'The curing reaction ties chains into one giant network, which is why thermosets cannot be remelted.'),
  pst.tr('pst-019', 'A semicrystalline polymer is stretched (drawn) into fiber.', 'the chains become more aligned along the fiber', 'the strength along the fiber', 'increases',
    'Aligned chains carry load through strong covalent backbones. Ultra-high-molecular-weight polyethylene fibers are stronger than steel per weight for this reason.'),
  pst.ce('pst-020', 'Select every correct statement.', 'HDPE and LDPE are compared.', [
    'HDPE has fewer branches',
    'HDPE has higher crystallinity and density',
    'HDPE is stiffer',
    'LDPE is denser',
  ], [0, 1, 2], 'Branching is the key structural difference; it controls packing, crystallinity, density and stiffness.'),

  // ---- Thermal Behavior of Polymers ----
  pth.pr('pth-011', 'An uncrosslinked amorphous thermoplastic is heated just above its Tg. Which region is it entering?', 'polymer_modulus', 'rubbery',
    'Above the transition, the modulus levels off on the rubbery plateau, held up by chain entanglements, before eventual viscous flow.'),
  pth.tr('pth-012', 'A polymer is plasticized.', 'more plasticizer is added', 'the glass transition temperature', 'decreases',
    'Small plasticizer molecules separate chains and ease segment motion, so the polymer becomes flexible at lower temperatures.'),
  pth.tf('pth-013', 'A polymer’s Tg can be measured by DSC as a step in heat capacity.', true,
    'At Tg, the heat capacity jumps because new segmental motions become available. DSC also shows melting and crystallization peaks.'),
  pth.mc('pth-014', 'Why do semicrystalline polymers like polyethylene stay useful above their Tg at room temperature?', [
    'The crystalline regions act as physical crosslinks, holding the material together until they melt at Tm',
    'They have no Tg',
    'They are always glassy',
    'They are thermosets',
  ], 0, 'Polyethylene’s Tg is far below room temperature, but its crystals keep it solid and tough until about 110–135 °C.'),
  pth.tr('pth-015', 'Polymers with different chain stiffness are compared.', 'the chain backbone contains rigid rings (e.g. aromatic groups)', 'the melting and glass transition temperatures', 'increases',
    'Rigid backbones restrict motion, which is why high-performance polymers like PEEK and polyimides withstand high temperatures.'),
  pth.mc('pth-016', 'What is the heat deflection temperature of a plastic?', [
    'The temperature at which a loaded test bar deflects a set amount, a practical upper service limit',
    'The melting point of the crystals',
    'The boiling point',
    'The temperature at which it becomes conductive',
  ], 0, 'Designers use it as a practical guide to how hot a plastic part can get while carrying load.'),
  pth.mt('pth-017', 'Match each polymer to its approximate Tg.', [
    ['Polyethylene', 'About −100 °C'],
    ['Natural rubber', 'About −70 °C'],
    ['Polystyrene', 'About 100 °C'],
    ['Polycarbonate', 'About 150 °C'],
  ], 'Room temperature sits above the Tg of rubbers and polyethylene, but below that of polystyrene and polycarbonate, explaining their stiffness.'),
  pth.tf('pth-018', 'Thermosets do not melt; heated strongly, they char and decompose instead.', true,
    'Their covalent network cannot flow, which gives heat resistance but prevents remelting and easy recycling.'),
  pth.tr('pth-019', 'An amorphous polymer is cooled through Tg.', 'the cooling rate increases', 'the measured Tg', 'increases',
    'Like inorganic glasses, polymer glasses freeze in at a higher temperature when cooled faster, because chains have less time to rearrange.'),
  pth.ce('pth-020', 'Select every correct statement.', 'An amorphous polycarbonate part is used near 140 °C under load.', [
    'It is close to its Tg (about 150 °C), so stiffness will drop',
    'It may creep and deform noticeably',
    'A polymer with a higher Tg would be safer',
    'Polycarbonate gets stiffer as it approaches Tg',
  ], [0, 1, 2], 'Near Tg, the modulus falls quickly. Designs keep a margin below Tg, especially under sustained loads.'),

  // ---- Viscoelasticity ----
  ve.tr('ve-011', 'A polymer is held at a fixed strain.', 'the time since straining increases', 'the stress in the polymer', 'decreases',
    'This is stress relaxation: chains gradually rearrange, so less stress is needed to hold the same strain.'),
  ve.mc('ve-012', 'What does the Kelvin–Voigt model (spring and dashpot in parallel) describe?', [
    'Delayed elastic creep that levels off and recovers on unloading',
    'Instant permanent flow',
    'Brittle fracture',
    'Thermal expansion',
  ], 0, 'The dashpot slows the spring’s response, so strain approaches its final value gradually, as in many polymers.'),
  ve.tf('ve-013', 'Polymers often damp vibrations well because part of the deformation energy is lost as heat each cycle.', true,
    'Viscous losses make rubbers and polymers useful for vibration mounts and sound damping, especially near Tg.'),
  ve.tr('ve-014', 'A plastic part is loaded continuously.', 'the service temperature rises closer to Tg', 'the creep rate', 'increases',
    'Chain mobility rises steeply approaching Tg, so creep accelerates.'),
  ve.mc('ve-015', 'What is a creep modulus used for in plastic part design?', [
    'Estimating long-term deflection, using the apparent stiffness after the expected loading time',
    'Measuring hardness',
    'Calculating density',
    'Predicting color change',
  ], 0, 'Because stiffness falls with time under load, designers use the modulus at, for example, 1000 hours rather than the short-term value.'),
  ve.mt('ve-016', 'Match each viscoelastic effect to an example.', [
    ['Creep', 'A plastic shelf sagging over months'],
    ['Stress relaxation', 'A plastic snap fit losing its grip'],
    ['Rate dependence', 'Putty that bounces but flows slowly'],
    ['Damping', 'A rubber engine mount absorbing vibration'],
  ], 'All of these come from the time-dependent response of polymer chains.'),
  ve.tf('ve-017', 'A viscoelastic material’s response to a fast load can look nearly elastic, while its response to a slow load shows flow.', true,
    'If loading is fast compared with the relaxation time, chains cannot rearrange. Slow loading gives them time.'),
  ve.tr('ve-018', 'A rubber ball is dropped at different temperatures above its Tg.', 'the temperature moves down toward Tg', 'the energy lost per bounce (damping)', 'increases',
    'Damping peaks near the glass transition, where segmental motion causes the most internal friction, so the ball bounces less.'),
  ve.mc('ve-019', 'Why are polymer gaskets and seals often re-tightened after some time in service?', [
    'Stress relaxation lowers the clamping force over time',
    'They grow larger with time',
    'They become conductive',
    'They harden and expand',
  ], 0, 'Relaxation is especially fast at high temperature, which is why seal design accounts for long-term compression set.'),
  ve.ce('ve-020', 'Select every correct statement.', 'Short-term test data on a plastic are used to predict 10 years of service.', [
    'Time–temperature superposition lets hotter, shorter tests stand in for longer times',
    'Creep and relaxation must be accounted for',
    'Using only the short-term modulus would underestimate long-term deflection',
    'Plastics never change with time under load',
  ], [0, 1, 2], 'Accelerated testing and creep data are standard tools for designing long-life plastic parts.'),

  // ---- Polymer Processing ----
  ppr.tr('ppr-011', 'An injection-molded part is designed.', 'the wall thickness increases', 'the cooling time in the mold', 'increases',
    'Cooling time grows roughly with the square of wall thickness, which is why thin, uniform walls give faster cycles.'),
  ppr.mc('ppr-012', 'What is a weld line in an injection-molded part?', [
    'A weaker line where two melt fronts meet and do not fully mix',
    'A line of metal welded into the part',
    'A deliberate reinforcement',
    'The parting line of the mold only',
  ], 0, 'Flowing around holes or from several gates creates weld lines, which can be weak spots. Gate placement can move them to less critical areas.'),
  ppr.tf('ppr-013', 'Thermoplastics can usually be reground and reprocessed, though repeated processing can degrade their properties.', true,
    'Each heating cycle can break chains or oxidize the polymer, so regrind is often blended with fresh material.'),
  ppr.mc('ppr-014', 'Why are blowing agents added for foamed plastics?', [
    'They release gas during processing to create a cellular structure',
    'They add color',
    'They crosslink the polymer',
    'They make the plastic denser',
  ], 0, 'Foams such as expanded polystyrene are mostly gas, giving very low density and excellent insulation.'),
  ppr.tr('ppr-015', 'A fiber-filled thermoplastic is injection molded.', 'the fiber content increases', 'the melt viscosity', 'increases',
    'Fibers obstruct flow, so filled grades need higher pressures and temperatures, and they wear molds faster.'),
  ppr.mt('ppr-016', 'Match each additive to its purpose.', [
    ['Plasticizer', 'Increases flexibility'],
    ['UV stabilizer', 'Slows sunlight degradation'],
    ['Flame retardant', 'Reduces flammability'],
    ['Filler (e.g. talc)', 'Raises stiffness and lowers cost'],
  ], 'Most commercial plastics are compounds of a polymer with several additives.'),
  ppr.mc('ppr-017', 'What causes warpage in molded plastic parts?', [
    'Uneven shrinkage from varying thickness, cooling or molecular orientation',
    'Too much uniformity',
    'Using a thermoset',
    'Perfectly even cooling',
  ], 0, 'Different regions shrink by different amounts, bending the part. Uniform walls and balanced cooling reduce it.'),
  ppr.tf('ppr-018', 'Biaxially stretched PET bottles are stronger because the chains are oriented in two directions.', true,
    'Stretch blow molding orients chains around and along the bottle, raising strength and gas barrier properties.'),
  ppr.tr('ppr-019', 'Ultraviolet light acts on an unstabilized polymer outdoors.', 'the years of sunlight exposure increase', 'the polymer’s toughness', 'decreases',
    'UV light breaks chains and creates surface cracks, so plastics become brittle and chalky unless stabilized.'),
  ppr.ce('ppr-020', 'Select every likely fix.', 'Injection-molded parts show sink marks over thick ribs.', [
    'Make ribs thinner relative to the wall',
    'Increase packing pressure and time',
    'Improve cooling of the thick regions',
    'Make the ribs even thicker',
  ], [0, 1, 2], 'Sink marks come from thick regions shrinking after the surface has frozen. Thinner features and better packing fix them.'),

  // ---- Matrix & Reinforcement ----
  mr.tr('mr-011', 'A fiber composite is loaded along the fibers.', 'the bond between fibers and matrix is weakened', 'the composite strength', 'decreases',
    'Load cannot be transferred efficiently into the fibers, so they pull out before carrying their full share.'),
  mr.mc('mr-012', 'What is a sandwich panel?', [
    'Two thin, stiff skins bonded to a thick, light core',
    'A solid metal plate',
    'Short fibers mixed in resin',
    'A ceramic block',
  ], 0, 'Separating the skins with a light core greatly increases bending stiffness for little extra weight, like an I-beam.'),
  mr.tf('mr-013', 'In a particle-reinforced composite such as concrete, the particles can be stiffer than the matrix and carry part of the load.', true,
    'Gravel is stiffer than cement paste and carries part of the load, which raises the overall stiffness.'),
  mr.mc('mr-014', 'Why are reinforcing fibers usually very thin?', [
    'Thin fibers contain smaller flaws and are stronger, and they are flexible enough to handle',
    'Thin fibers are always cheaper',
    'Thick fibers do not bond at all',
    'Thin fibers are always weaker',
  ], 0, 'Carbon and glass fibers are only about 5–20 µm in diameter, giving high strength and the ability to weave and bend them.'),
  mr.tr('mr-015', 'A sandwich panel is designed for bending.', 'the core is made thicker (same skins)', 'the panel’s bending stiffness', 'increases',
    'Moving the skins farther apart raises the second moment of area sharply, with only a small mass increase from the light core.'),
  mr.mt('mr-016', 'Match each composite to its matrix type.', [
    ['CFRP', 'Polymer matrix'],
    ['Al–SiC', 'Metal matrix'],
    ['SiC/SiC', 'Ceramic matrix'],
    ['Reinforced concrete', 'Cement matrix'],
  ], 'Composites are often classed by their matrix, which sets the temperature range and processing route.'),
  mr.mc('mr-017', 'Why is steel used to reinforce concrete?', [
    'Concrete is weak in tension, so steel bars carry the tensile loads',
    'Steel makes concrete lighter',
    'Steel bonds chemically into cement crystals',
    'Concrete is weak in compression',
  ], 0, 'Concrete and steel also have similar thermal expansion, so they stay bonded as temperatures change.'),
  mr.tf('mr-018', 'Hybrid composites combine two fiber types (e.g. carbon and glass) to balance cost, stiffness and toughness.', true,
    'Mixing fibers lets designers use expensive carbon only where its stiffness is most needed.'),
  mr.tr('mr-019', 'A composite with chopped fibers is compared with one of the same fiber content using continuous fibers.', 'the fibers are chopped much shorter than the critical length', 'the stiffness and strength', 'decreases',
    'Short fibers cannot be loaded fully, so they reinforce less effectively than long fibers.', 'critical-fiber-length'),
  mr.ce('mr-020', 'Select every correct statement.', 'An engineer chooses between a sandwich panel and a solid aluminum plate of equal bending stiffness.', [
    'The sandwich panel can be much lighter',
    'The core must resist shear and crushing',
    'Skin–core bonding is critical',
    'Sandwich panels are always cheaper',
  ], [0, 1, 2], 'Sandwich structures are very efficient in bending but add manufacturing complexity and need good bonding.'),

  // ---- Rule of Mixtures ----
  rom.tr('rom-011', 'A unidirectional composite is loaded across the fibers.', 'the fiber volume fraction increases', 'the transverse modulus', 'increases',
    'Even across the fibers, stiffer fibers help, but only modestly, because the soft matrix still dominates.', 'iso-stress'),
  rom.mc('rom-012', 'Along the fibers, the strains in fiber and matrix are:', ['Equal', 'Always zero in the fibers', 'Larger in the fibers', 'Unrelated'], 0,
    'Bonded together and loaded in parallel, fibers and matrix stretch by the same amount: the iso-strain condition.', 'iso-strain'),
  rom.tf('rom-013', 'Across the fibers, fiber and matrix carry the same stress (iso-stress approximation).', true,
    'Loaded in series, each phase carries the full stress, and their strains add up, giving the lower-bound modulus.', 'iso-stress'),
  rom.tr('rom-014', 'A composite’s properties are estimated along the fibers.', 'the fiber modulus E_f increases (same fraction)', 'the composite modulus E_c', 'increases',
    'E_c is a weighted sum, so a stiffer fiber directly raises it. Switching glass for carbon fibers raises stiffness a lot.', 'iso-strain'),
  rom.mc('rom-015', 'Why are real composite properties sometimes below the rule-of-mixtures prediction?', [
    'Imperfect alignment, voids and weak interfaces reduce load sharing',
    'The rule of mixtures always underestimates',
    'Fibers become stiffer in composites',
    'Matrices get stronger',
  ], 0, 'The simple model assumes perfect bonding, alignment and no defects, which real materials only approach.'),
  rom.mt('rom-016', 'Match each loading direction to its controlling phase.', [
    ['Along the fibers', 'Fibers dominate'],
    ['Across the fibers', 'Matrix dominates'],
    ['In shear between plies', 'Matrix and interface dominate'],
  ], 'Fiber-dominated properties are excellent; matrix-dominated properties are the weak points of laminates.'),
  rom.tr('rom-017', 'A laminate stacking sequence is chosen.', 'more plies are oriented at ±45°', 'the in-plane shear stiffness', 'increases',
    '±45° plies carry shear loads through their fibers, which is why torsion tubes and spars use them.'),
  rom.mc('rom-018', 'What does a balanced, symmetric laminate avoid?', [
    'Warping and twisting when loaded or cooled after curing',
    'Any stiffness at all',
    'Fiber breakage completely',
    'Matrix cracking completely',
  ], 0, 'Symmetric stacking about the mid-plane prevents bending–stretching coupling, so flat panels stay flat.'),
  rom.tf('rom-019', 'Doubling the fiber volume fraction from 30% to 60% roughly doubles the fiber contribution to longitudinal stiffness.', true,
    'In the iso-strain model, the fiber term is E_f·V_f, so it scales directly with fiber fraction.', 'iso-strain'),
  rom.ce('rom-020', 'Select every correct statement.', 'A unidirectional carbon–epoxy bar is tested in several directions.', [
    'It is very stiff along the fibers',
    'It is much less stiff across the fibers',
    'Its transverse strength is limited by the matrix and interface',
    'It has the same stiffness in all directions',
  ], [0, 1, 2], 'Unidirectional composites are strongly anisotropic, which is why most structures use multi-angle laminates.'),

  // ---- Fiber Composites ----
  fib.mc('fib-011', 'What is filament winding used for?', [
    'Making cylindrical parts like pressure vessels and pipes by winding resin-wetted fibers around a mandrel',
    'Making flat sheet only',
    'Casting metal parts',
    'Spinning polymer fibers',
  ], 0, 'Winding angles can be chosen to match hoop and axial stresses, making efficient pressure vessels such as hydrogen tanks.'),
  fib.tr('fib-012', 'A composite part is designed for impact resistance.', 'aramid or tougher thermoplastic matrices replace brittle epoxy', 'the impact damage tolerance', 'increases',
    'Tough fibers and matrices absorb more energy and resist delamination.'),
  fib.tf('fib-013', 'Pultrusion produces constant-cross-section composite profiles by pulling fibers through a resin bath and heated die.', true,
    'It is the composite equivalent of extrusion, used for rods, beams and ladder rails.'),
  fib.mc('fib-014', 'Why is resin transfer molding (RTM) used?', [
    'Dry fibers are placed in a closed mold and resin is injected, giving good surfaces on both sides',
    'It avoids using any resin',
    'It is only for metals',
    'It melts the fibers',
  ], 0, 'RTM suits medium-volume parts such as automotive panels, with less waste than hand layup.'),
  fib.tr('fib-015', 'A carbon fiber is processed at a higher graphitization temperature.', 'the processing temperature increases', 'the fiber’s elastic modulus', 'increases',
    'Higher temperatures align the graphite layers along the fiber, giving high-modulus fibers (with lower strain to failure).'),
  fib.mt('fib-016', 'Match each manufacturing process to a typical product.', [
    ['Hand layup', 'Boat hulls'],
    ['Filament winding', 'Pressure vessels'],
    ['Pultrusion', 'Constant-profile rods and beams'],
    ['Autoclave curing of prepreg', 'Aircraft wing skins'],
  ], 'Process choice depends on shape, volume and required quality.'),
  fib.mc('fib-017', 'What is a common way to detect hidden delaminations in a composite panel during service?', [
    'Ultrasonic or tap testing',
    'Smelling the surface',
    'Weighing the whole aircraft',
    'Checking the paint color',
  ], 0, 'Delaminations change how sound travels and reflects, so ultrasonic scanning (and simple tap tests) can find them.'),
  fib.tf('fib-018', 'Glass fibers are much cheaper than carbon fibers, which is why most composites by volume are glass-reinforced.', true,
    'Wind turbine blades, boats and pipes mostly use glass fibers; carbon is reserved where stiffness and weight justify the cost.'),
  fib.tr('fib-019', 'A laminate is cured.', 'the autoclave pressure increases (within limits)', 'the void content', 'decreases',
    'Pressure consolidates plies and keeps volatiles dissolved, giving denser laminates with better interlaminar properties.'),
  fib.ce('fib-020', 'Select every correct statement.', 'A designer compares CFRP and GFRP for a stiff, light drone arm.', [
    'CFRP gives much higher stiffness per weight',
    'GFRP is cheaper',
    'GFRP is more electrically insulating',
    'GFRP is stiffer than CFRP',
  ], [0, 1, 2], 'Carbon fibers are several times stiffer than glass fibers. Glass is cheaper and non-conductive, useful near electronics or antennas.'),

  // ---- Metal & Ceramic Matrix Composites ----
  mx.tr('mx-011', 'Al–SiC composites are used for electronic packaging.', 'the SiC content increases', 'the thermal expansion of the composite', 'decreases',
    'SiC expands far less than aluminum, so more SiC brings the expansion closer to that of silicon chips, reducing thermal stresses.'),
  mx.mc('mx-012', 'Why do brake rotors on some cars and trains use Al–SiC or carbon–ceramic composites?', [
    'They are light, wear resistant and handle heat well',
    'They are the cheapest option',
    'They are magnetic',
    'They do not get hot',
  ], 0, 'Lower unsprung mass and good thermal stability improve braking performance, though cost limits use to premium vehicles.'),
  mx.tf('mx-013', 'In ceramic matrix composites, the matrix may crack well before final failure, while the fibers still carry load.', true,
    'This graceful failure, with matrix cracking and fiber bridging, is exactly what makes CMCs more damage tolerant than monolithic ceramics.'),
  mx.mc('mx-014', 'Which manufacturing route is common for MMCs with particle reinforcement?', [
    'Stir casting: mixing ceramic particles into molten aluminum before casting',
    'Filament winding with resin',
    'Electroplating',
    'Glass blowing',
  ], 0, 'Stir casting is relatively cheap; wetting the particles and avoiding clustering are the main challenges.'),
  mx.tr('mx-015', 'A CMC’s fiber–matrix interface is made stronger.', 'the interface bond strength increases', 'the composite’s damage tolerance (toughness)', 'decreases',
    'A strong interface lets cracks run straight through the fibers, so the CMC behaves like a brittle monolithic ceramic.'),
  mx.mt('mx-016', 'Match each composite to its typical application.', [
    ['Al–SiC', 'Electronic heat spreaders and pistons'],
    ['SiC/SiC', 'Jet engine hot-section parts'],
    ['Carbon–carbon', 'Aircraft brake discs'],
    ['WC–Co', 'Cutting tools'],
  ], 'Each composite targets a specific combination of stiffness, heat resistance and wear resistance.'),
  mx.mc('mx-017', 'Why is wetting a concern when making MMCs by casting?', [
    'Molten metal may not wet ceramic particles, leaving them poorly bonded or clustered',
    'Particles dissolve instantly',
    'The metal becomes a ceramic',
    'Wetting has no effect',
  ], 0, 'Coatings, alloying additions or pressure infiltration help the metal wet the reinforcement.'),
  mx.tf('mx-018', 'Carbon–carbon composites need protection from oxidation when used hot in air.', true,
    'Carbon reacts with oxygen above a few hundred °C, so SiC coatings or inert atmospheres are used.'),
  mx.tr('mx-019', 'An Al–SiC composite is machined.', 'the SiC content increases', 'the tool wear during machining', 'increases',
    'Hard SiC particles are very abrasive, so diamond tools are often needed.'),
  mx.ce('mx-020', 'Select every advantage of SiC/SiC CMCs over nickel superalloys for turbine parts.', 'An engine maker considers CMC shrouds and vanes.', [
    'Higher temperature capability',
    'About one-third the density',
    'Less cooling air needed',
    'Higher ductility and toughness than metals',
  ], [0, 1, 2], 'CMCs save weight and cooling air, but they remain far less ductile than metals and need environmental barrier coatings.'),
]
