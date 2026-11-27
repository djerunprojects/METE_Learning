import type { Question } from '../types'

// Disciplines · Processing & Manufacturing.
// Sources: Kalpakjian & Schmid, Manufacturing Engineering and Technology; Campbell, Castings;
// Kou, Welding Metallurgy; German, Powder Metallurgy Science; DebRoy et al. (2018), additive manufacturing review;
// Callister & Rethwisch (ch. 11).

const casting: Question[] = [
  {
    id: 'sc-001',
    nodeId: 'solidification-casting',
    type: 'trend',
    prompt: 'Compare a thick and a thin section cast in the same sand mold.',
    formula: 'chvorinov',
    change: 'the section is made thinner (a smaller volume-to-surface-area ratio V/A)',
    target: 'the solidification time',
    answer: 'decreases',
    explanation:
      'Heat leaves through the surface. A thin section has little volume per unit of surface, so it freezes much faster. Since n ≈ 2, halving V/A cuts the time to about a quarter.',
  },
  {
    id: 'sc-002',
    nodeId: 'solidification-casting',
    type: 'multiple_choice',
    prompt: 'A riser must feed liquid metal into a casting while it shrinks. Why must the riser have a larger V/A than the section it feeds?',
    formula: 'chvorinov',
    options: [
      'So the riser solidifies last and stays liquid long enough to feed the casting',
      'So the riser solidifies first',
      'So the riser cools the casting faster',
      'V/A has no effect on solidification time',
    ],
    answer: 0,
    explanation:
      'By Chvorinov’s rule, a larger V/A means longer solidification. The riser is a reservoir that must stay liquid until the casting has frozen; otherwise shrinkage cavities form in the casting.',
  },
  {
    id: 'sc-003',
    nodeId: 'solidification-casting',
    type: 'multiple_choice',
    prompt: 'Why does a casting have a thin zone of fine grains (the chill zone) right next to the mold wall?',
    options: [
      'The cold mold wall quickly undercools the liquid and offers many nucleation sites',
      'The center of the casting cools first',
      'Grains grow fastest at the mold wall',
      'The mold wall adds carbon to the metal',
    ],
    answer: 0,
    explanation:
      'Many small grains nucleate at the chilled wall. Behind them, grains with favorable orientations grow inward as long columnar grains, and the center may form equiaxed grains.',
  },
  {
    id: 'sc-004',
    nodeId: 'solidification-casting',
    type: 'multiple_choice',
    prompt: 'What causes shrinkage porosity in castings?',
    options: [
      'Most metals contract when they solidify, and isolated pockets of liquid cannot be fed with more liquid',
      'Air bubbles from the pouring cup only',
      'The mold expands',
      'The metal expands as it freezes',
    ],
    answer: 0,
    explanation:
      'Aluminum, for example, shrinks about 6–7% on freezing. Regions that freeze last without a liquid supply end up with cavities. Good gating, risers and chills prevent this.',
  },
  {
    id: 'sc-005',
    nodeId: 'solidification-casting',
    type: 'multiple_choice',
    prompt: 'Gas porosity in aluminum castings is usually caused by:',
    options: [
      'Hydrogen that dissolved in the liquid and is rejected during solidification, because the solid dissolves much less',
      'Too much riser volume',
      'Too fast cooling only',
      'Oxygen dissolving in the solid',
    ],
    answer: 0,
    explanation:
      'Liquid aluminum picks up hydrogen from moisture. Hydrogen is far less soluble in the solid, so it comes out as bubbles. Degassing the melt with argon or nitrogen removes it.',
  },
  {
    id: 'sc-006',
    nodeId: 'solidification-casting',
    type: 'true_false',
    prompt: 'Metals often solidify as tree-like dendrites, and the dendrite arm spacing gets finer with faster cooling.',
    answer: true,
    explanation:
      'Dendrites grow into undercooled liquid along preferred directions. Fast cooling leaves less time for coarsening, so the arms stay finely spaced, which improves mechanical properties.',
  },
  {
    id: 'sc-007',
    nodeId: 'solidification-casting',
    type: 'trend',
    prompt: 'Think about the dendritic structure of a casting.',
    change: 'the cooling rate during solidification increases',
    target: 'the secondary dendrite arm spacing',
    answer: 'decreases',
    explanation:
      'Faster cooling gives the dendrite arms less time to coarsen. Finer spacing also means finer segregation and porosity, so strength and ductility improve.',
  },
  {
    id: 'sc-008',
    nodeId: 'solidification-casting',
    type: 'multiple_choice',
    prompt: 'Why does microsegregation (coring) happen in cast alloys?',
    options: [
      'Solute is rejected into the liquid as solid forms, and diffusion in the solid is too slow to even out the composition',
      'The alloy separates into pure elements',
      'The mold adds impurities',
      'Cooling is too slow',
    ],
    answer: 0,
    explanation:
      'The first solid to form has a different composition from the last. Without time for solid-state diffusion, composition varies across each dendrite. A homogenization anneal smooths this out.',
  },
  {
    id: 'sc-009',
    nodeId: 'solidification-casting',
    type: 'matching',
    prompt: 'Match each casting process to its typical use.',
    pairs: [
      { left: 'Sand casting', right: 'Large, low-volume parts with a rough surface' },
      { left: 'Die casting', right: 'High-volume, thin-walled aluminum or zinc parts' },
      { left: 'Investment casting', right: 'Complex, precise parts such as turbine blades' },
      { left: 'Continuous casting', right: 'Steel slabs and billets' },
    ],
    explanation:
      'Expendable sand molds are cheap and flexible. Reusable steel dies give speed and precision. Wax patterns allow very complex shapes. Continuous casting feeds rolling mills.',
  },
  {
    id: 'sc-010',
    nodeId: 'solidification-casting',
    type: 'cause_effect',
    prompt: 'Select every useful fix.',
    scenario: 'A thick-walled aluminum casting shows porosity at the center of its thickest section.',
    options: [
      'Add a correctly sized riser to feed the last region to freeze',
      'Place a chill near the thick section so it freezes earlier, in sequence',
      'Degas the melt to remove dissolved hydrogen',
      'Pour the metal much hotter',
    ],
    answers: [0, 1, 2],
    explanation:
      'Center porosity is typically shrinkage, gas or both. Feeding and directional solidification fix shrinkage, and degassing fixes gas. Pouring hotter increases hydrogen pickup and total shrinkage.',
  },
]

const forming: Question[] = [
  {
    id: 'fm-001',
    nodeId: 'forming',
    type: 'multiple_choice',
    prompt: 'What is the difference between hot working and cold working?',
    options: [
      'Hot working is done above the recrystallization temperature; cold working below it',
      'Hot working is done above 500 °C for all metals',
      'Cold working is done below 0 °C',
      'There is no difference',
    ],
    answer: 0,
    explanation:
      'During hot working, the metal recrystallizes as it deforms, so it does not strain harden. During cold working, strain hardening builds up.',
  },
  {
    id: 'fm-002',
    nodeId: 'forming',
    type: 'matching',
    prompt: 'Match each forming process to its description.',
    pairs: [
      { left: 'Rolling', right: 'Thickness reduced between rotating rolls' },
      { left: 'Forging', right: 'Shaped by blows or a press between dies' },
      { left: 'Extrusion', right: 'Pushed through a die to make a constant cross-section' },
      { left: 'Wire drawing', right: 'Pulled through a die to reduce the diameter' },
    ],
    explanation:
      'All of these shape metal by plastic deformation, without removing material.',
  },
  {
    id: 'fm-003',
    nodeId: 'forming',
    type: 'true_false',
    prompt: 'Cold working gives a better surface finish and tighter dimensions than hot working.',
    answer: true,
    explanation:
      'There is no oxide scale and no thermal contraction after forming, so cold-rolled sheet and drawn wire have smooth surfaces and precise sizes, plus extra strength from strain hardening.',
  },
  {
    id: 'fm-004',
    nodeId: 'forming',
    type: 'trend',
    prompt: 'A steel billet is hot rolled.',
    change: 'the rolling temperature increases',
    target: 'the force needed to roll it',
    answer: 'decreases',
    explanation:
      'The flow stress falls as temperature rises, so less force and power are needed. Large reductions are therefore done hot.',
  },
  {
    id: 'fm-005',
    nodeId: 'forming',
    type: 'multiple_choice',
    prompt: 'Which is a disadvantage of hot working?',
    options: [
      'An oxide scale forms on the surface, and dimensions are harder to control',
      'The metal becomes too brittle',
      'Very high forces are needed',
      'It strongly strain hardens the metal',
    ],
    answer: 0,
    explanation:
      'At high temperature, metals oxidize and the part shrinks unevenly as it cools. Hot rolling is often followed by pickling and cold rolling for the final finish.',
  },
  {
    id: 'fm-006',
    nodeId: 'forming',
    type: 'trend',
    prompt: 'A steel sheet is cold rolled in several passes without annealing.',
    change: 'the total cold reduction increases',
    target: 'its ability to be cold formed further without cracking',
    answer: 'decreases',
    explanation:
      'Each pass uses up ductility through strain hardening. An intermediate (process) anneal restores formability for further passes.',
  },
  {
    id: 'fm-007',
    nodeId: 'forming',
    type: 'multiple_choice',
    prompt: 'What is springback in sheet metal bending?',
    options: [
      'Partial elastic recovery of the bend when the load is removed',
      'Cracking at the outside of the bend',
      'Wrinkling of the sheet',
      'Increase in thickness',
    ],
    answer: 0,
    explanation:
      'The plastic part of the bend stays, but the elastic part recovers, so the angle opens slightly. Dies are designed to overbend to compensate.',
  },
  {
    id: 'fm-008',
    nodeId: 'forming',
    type: 'trend',
    prompt: 'Two sheets with the same elastic modulus are bent to the same radius.',
    change: 'the sheet has a higher yield strength',
    target: 'the amount of springback',
    answer: 'increases',
    explanation:
      'Springback grows with the ratio of yield strength to elastic modulus. High-strength steels spring back more than mild steel, which makes them harder to form accurately.',
  },
  {
    id: 'fm-009',
    nodeId: 'forming',
    type: 'multiple_choice',
    prompt: 'Why are forged parts such as crankshafts often tougher than cast parts of the same alloy?',
    options: [
      'Forging refines the grains, closes internal porosity and aligns the grain flow with the part’s shape',
      'Forged parts contain more porosity',
      'Forging melts the metal',
      'Forging adds carbon',
    ],
    answer: 0,
    explanation:
      'Deforming the metal breaks up the cast structure, welds shut internal voids and makes the "fibers" of inclusions follow the contours, which resists cracking.',
  },
  {
    id: 'fm-010',
    nodeId: 'forming',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A copper wire is drawn through a series of dies and starts breaking after several passes.',
    options: [
      'Strain hardening has used up the wire’s ductility',
      'An intermediate anneal would restore ductility',
      'Drawing through more dies without annealing will fix it',
      'Each pass has raised the wire’s strength',
    ],
    answers: [0, 1, 3],
    explanation:
      'Every pass is cold work, which strengthens the wire but makes it less ductile. Wire mills alternate drawing and annealing to reach small diameters.',
  },
]

const welding: Question[] = [
  {
    id: 'wj-001',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'What is the HAZ in a weld?',
    options: [
      'Base metal that did not melt but whose microstructure and properties were changed by the weld heat',
      'The melted and resolidified weld metal',
      'The filler wire',
      'The slag on top of the weld',
    ],
    answer: 0,
    explanation:
      'Next to the fusion zone, the base metal is heated to a range of peak temperatures. Grain growth, phase changes, recrystallization or overaging can happen there.',
  },
  {
    id: 'wj-002',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'In hardenable steels, what is the main risk in the HAZ?',
    options: [
      'Fast cooling forms hard, brittle martensite that can crack, especially with hydrogen present',
      'It always becomes softer',
      'It melts again',
      'It turns into aluminum',
    ],
    answer: 0,
    explanation:
      'The cold surrounding metal quenches the HAZ. Brittle martensite plus hydrogen plus residual stress is the recipe for hydrogen-induced cold cracking.',
  },
  {
    id: 'wj-003',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'Why are thick, high-carbon or alloy steels often preheated before welding?',
    options: [
      'Preheating slows the cooling rate, reducing martensite formation and helping hydrogen escape',
      'To melt the base metal before welding',
      'To make the weld cool faster',
      'To remove the HAZ completely',
    ],
    answer: 0,
    explanation:
      'A warmer part takes heat away from the weld more slowly, so the HAZ is less likely to form brittle martensite, and hydrogen has time to diffuse out.',
  },
  {
    id: 'wj-004',
    nodeId: 'welding-joining',
    type: 'trend',
    prompt: 'The carbon equivalent sums the hardening effect of carbon and alloying elements in a steel.',
    change: 'the carbon equivalent of the steel increases',
    target: 'the risk of cracking in the HAZ',
    answer: 'increases',
    explanation:
      'Higher carbon equivalent means higher hardenability, so martensite forms more easily in the HAZ. Steels with high carbon equivalent need preheat and low-hydrogen practice.',
  },
  {
    id: 'wj-005',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'In a cold-worked or precipitation-hardened aluminum alloy, the HAZ is usually:',
    options: [
      'Softer than the base metal, because of recrystallization or overaging',
      'Harder than the base metal because of martensite',
      'Exactly the same as the base metal',
      'Liquid',
    ],
    answer: 0,
    explanation:
      'Weld heat undoes the strengthening. This is why welded aluminum structures are designed with a reduced strength in the HAZ.',
  },
  {
    id: 'wj-006',
    nodeId: 'welding-joining',
    type: 'matching',
    prompt: 'Match each joining process to its description.',
    pairs: [
      { left: 'TIG', right: 'Non-consumable tungsten electrode with inert shielding gas' },
      { left: 'MIG', right: 'Continuously fed wire electrode with shielding gas' },
      { left: 'Brazing', right: 'Filler melts above 450 °C; base metal does not melt' },
      { left: 'Soldering', right: 'Filler melts below 450 °C; base metal does not melt' },
    ],
    explanation:
      'TIG and MIG are fusion welding processes that melt the base metal. Brazing and soldering join by wetting with a lower-melting filler.',
  },
  {
    id: 'wj-007',
    nodeId: 'welding-joining',
    type: 'true_false',
    prompt: 'In brazing and soldering, the base metals are not melted.',
    answer: true,
    explanation:
      'Only the filler melts and is drawn into the joint gap by capillary action. That allows joining of dissimilar metals and thin parts with less distortion.',
  },
  {
    id: 'wj-008',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'What is the purpose of shielding gas in arc welding?',
    options: [
      'To protect the molten pool from oxygen and nitrogen in the air',
      'To cool the weld faster',
      'To add carbon to the weld',
      'To clean the electrode',
    ],
    answer: 0,
    explanation:
      'Oxygen and nitrogen picked up by molten metal cause porosity, oxide inclusions and embrittlement. Argon, helium or CO₂-based mixtures keep air away.',
  },
  {
    id: 'wj-009',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'Which practice reduces hydrogen-induced cracking in steel welds?',
    options: [
      'Using dry, low-hydrogen electrodes and preheating',
      'Welding with damp electrodes',
      'Quenching the weld in water',
      'Using a higher-carbon filler',
    ],
    answer: 0,
    explanation:
      'Hydrogen comes mainly from moisture in fluxes and on the joint. Baking electrodes, cleaning surfaces and preheating all lower the risk.',
  },
  {
    id: 'wj-010',
    nodeId: 'welding-joining',
    type: 'multiple_choice',
    prompt: 'What does the fusion zone of a weld resemble metallurgically?',
    options: [
      'A small casting, with columnar grains growing from the edge of the melted zone',
      'A forged bar',
      'A powder compact',
      'An unaffected base metal',
    ],
    answer: 0,
    explanation:
      'The weld pool solidifies like a tiny casting, with grains growing epitaxially from the unmelted grains at the fusion line. Segregation and solidification cracking can occur there.',
  },
]

const powder: Question[] = [
  {
    id: 'pm-001',
    nodeId: 'powder-metallurgy',
    type: 'multiple_choice',
    prompt: 'What is the usual sequence of steps in powder metallurgy?',
    options: [
      'Make powder → blend → compact → sinter',
      'Sinter → compact → blend → make powder',
      'Cast → forge → machine',
      'Melt → pour → solidify',
    ],
    answer: 0,
    explanation:
      'Powders are mixed with lubricants and alloy additions, pressed into a die-shaped green compact, then sintered below the melting point to bond the particles.',
  },
  {
    id: 'pm-002',
    nodeId: 'powder-metallurgy',
    type: 'multiple_choice',
    prompt: 'Powders made by gas atomization are mostly:',
    options: ['Spherical', 'Flaky', 'Needle-shaped', 'Hollow cubes'],
    answer: 0,
    explanation:
      'Molten droplets have time to become spheres before freezing in the gas. Water atomization cools faster and gives irregular particles, which press better but flow less easily.',
  },
  {
    id: 'pm-003',
    nodeId: 'powder-metallurgy',
    type: 'trend',
    prompt: 'Metal powder is pressed in a die.',
    change: 'the compaction pressure increases',
    target: 'the density of the green compact',
    answer: 'increases',
    explanation:
      'Higher pressure rearranges and plastically deforms the particles, closing the gaps between them. The gain flattens out at high pressures.',
  },
  {
    id: 'pm-004',
    nodeId: 'powder-metallurgy',
    type: 'trend',
    prompt: 'A green compact is sintered for a fixed time.',
    change: 'the sintering temperature increases',
    target: 'the remaining porosity',
    answer: 'decreases',
    explanation:
      'Sintering works by diffusion, which speeds up exponentially with temperature, so necks grow and pores shrink faster.',
  },
  {
    id: 'pm-005',
    nodeId: 'powder-metallurgy',
    type: 'multiple_choice',
    prompt: 'Why is powder metallurgy used for self-lubricating bronze bearings?',
    options: [
      'The controlled, interconnected porosity can be filled with oil',
      'Powder parts have no porosity at all',
      'Bronze cannot be cast',
      'Powder parts are always harder',
    ],
    answer: 0,
    explanation:
      'The pores act as an oil reservoir that feeds the bearing surface as it warms during use. Only powder metallurgy can produce this porosity on purpose.',
  },
  {
    id: 'pm-006',
    nodeId: 'powder-metallurgy',
    type: 'multiple_choice',
    prompt: 'Which is a key advantage of powder metallurgy?',
    options: [
      'Near-net-shape parts with little machining, and materials that are hard to melt or cast',
      'It always gives full density without extra steps',
      'It is best for very large single parts',
      'It needs no tooling',
    ],
    answer: 0,
    explanation:
      'High-volume parts like gears come out close to final shape with little scrap. Tungsten, refractory metals and cemented carbides are practical only by powder routes.',
  },
  {
    id: 'pm-007',
    nodeId: 'powder-metallurgy',
    type: 'true_false',
    prompt: 'Cemented carbide (WC–Co) cutting tools are made by powder metallurgy using liquid-phase sintering.',
    answer: true,
    explanation:
      'At the sintering temperature the cobalt binder melts, wets the tungsten carbide grains and pulls them together into a nearly dense, tough-yet-hard composite.',
  },
  {
    id: 'pm-008',
    nodeId: 'powder-metallurgy',
    type: 'multiple_choice',
    prompt: 'What does HIP do?',
    options: [
      'Applies high temperature and uniform gas pressure to close remaining internal porosity',
      'Heats parts in an oxygen flame',
      'Hammers parts into shape',
      'Coats parts with zinc',
    ],
    answer: 0,
    explanation:
      'Argon pressure acts equally from all sides at high temperature, collapsing closed pores by creep and diffusion. It is used for powder parts, castings and 3D-printed parts.',
  },
  {
    id: 'pm-009',
    nodeId: 'powder-metallurgy',
    type: 'trend',
    prompt: 'Compare sintered steel parts of the same alloy.',
    change: 'the residual porosity increases',
    target: 'the fatigue strength',
    answer: 'decreases',
    explanation:
      'Pores reduce the load-bearing area and act as stress concentrators where fatigue cracks start. High-performance parts use higher density, HIP or powder forging.',
  },
  {
    id: 'pm-010',
    nodeId: 'powder-metallurgy',
    type: 'multiple_choice',
    prompt: 'What is a "green" compact?',
    options: [
      'Pressed powder before sintering, held together mainly by mechanical interlocking',
      'A fully sintered part',
      'A part made from recycled metal',
      'A compact that has oxidized',
    ],
    answer: 0,
    explanation:
      'Green compacts are fragile, with strength only from cold-welded and interlocked particles. Sintering creates real metallurgical bonds.',
  },
]

const additive: Question[] = [
  {
    id: 'am-001',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'How does LPBF build a metal part?',
    options: [
      'A laser selectively melts thin layers of powder spread one after another',
      'Molten metal is poured into a mold',
      'A block of metal is machined away',
      'Powder is pressed in a die and sintered',
    ],
    answer: 0,
    explanation:
      'A recoater spreads a powder layer of tens of micrometers, the laser melts the part’s cross-section, the platform drops, and the cycle repeats.',
  },
  {
    id: 'am-002',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'Why are the properties of additively manufactured metal parts often anisotropic?',
    options: [
      'Grains tend to grow in columns along the build direction, and defects line up between layers',
      'The powder is magnetic',
      'Every layer is a different alloy',
      'Additive parts are always amorphous',
    ],
    answer: 0,
    explanation:
      'Each new layer grows on the grains below it, so columnar grains run up through many layers. Strength and ductility can differ between vertical and horizontal directions.',
  },
  {
    id: 'am-003',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'What causes lack-of-fusion pores in powder bed fusion?',
    options: [
      'Too little energy, so powder between tracks or layers is not fully melted',
      'Too much energy, causing deep vapor cavities',
      'Gas dissolved in the solid',
      'Machining after printing',
    ],
    answer: 0,
    explanation:
      'Lack-of-fusion pores are irregular, with unmelted particles inside them. They come from low laser power, high scan speed or too wide a hatch spacing.',
  },
  {
    id: 'am-004',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'What causes keyhole porosity?',
    options: [
      'Too much energy density: a deep vapor depression forms in the melt pool and collapses, trapping gas',
      'Too little laser power',
      'Using coarse powder only',
      'Slow cooling',
    ],
    answer: 0,
    explanation:
      'At very high energy density, metal vaporizes and the melt pool becomes a deep, unstable keyhole. When it collapses it leaves round pores. Process windows avoid both extremes.',
  },
  {
    id: 'am-005',
    nodeId: 'additive-manufacturing',
    type: 'true_false',
    prompt: 'The melt pools in laser powder bed fusion cool very rapidly, which gives very fine microstructures.',
    answer: true,
    explanation:
      'The melt pool is tiny and sits on cold metal, so cooling rates are very high. Cells and dendrites are far finer than in castings, which is why as-built strength can be high.',
  },
  {
    id: 'am-006',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'Why are critical AM parts often given a HIP treatment?',
    options: [
      'To close internal pores and improve fatigue performance',
      'To add color',
      'To make the part larger',
      'To remove the support structures',
    ],
    answer: 0,
    explanation:
      'Internal pores are the main starting points for fatigue cracks in AM parts. HIP closes them, while the surface is often machined to remove roughness.',
  },
  {
    id: 'am-007',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'Where do residual stresses in additively manufactured parts come from?',
    options: [
      'Repeated rapid heating and cooling of each layer as new layers are added',
      'The powder being too fine',
      'Machining only',
      'Magnetic fields from the laser',
    ],
    answer: 0,
    explanation:
      'Hot new layers contract against the cooler material below. The stresses can warp parts or crack them off the build plate, so supports and stress-relief heat treatments are used.',
  },
  {
    id: 'am-008',
    nodeId: 'additive-manufacturing',
    type: 'trend',
    prompt: 'A powder bed fusion process is running with too little energy, at a fixed scan speed.',
    change: 'the laser power is increased toward the optimum',
    target: 'the lack-of-fusion porosity',
    answer: 'decreases',
    explanation:
      'More energy per unit length melts the powder fully and fuses tracks and layers together. Going too far, though, causes keyhole porosity.',
  },
  {
    id: 'am-009',
    nodeId: 'additive-manufacturing',
    type: 'multiple_choice',
    prompt: 'Which is a major advantage of metal additive manufacturing?',
    options: [
      'Very complex shapes such as internal cooling channels and lattices, without dedicated tooling',
      'Lowest cost for millions of simple identical parts',
      'No need for any post-processing',
      'Always better properties than wrought metal',
    ],
    answer: 0,
    explanation:
      'Additive manufacturing shines for complex, low-volume or customized parts: lightweight brackets, conformal cooling in molds, and patient-specific implants.',
  },
  {
    id: 'am-010',
    nodeId: 'additive-manufacturing',
    type: 'matching',
    prompt: 'Match each metal AM process to its description.',
    pairs: [
      { left: 'LPBF', right: 'Laser melts a powder bed, layer by layer' },
      { left: 'Electron beam powder bed fusion', right: 'Electron beam in vacuum, with a preheated powder bed' },
      { left: 'Directed energy deposition', right: 'Powder or wire fed into a melt pool at a nozzle; also used for repair' },
      { left: 'Binder jetting', right: 'Liquid binder glues powder, then the part is sintered' },
    ],
    explanation:
      'Powder bed processes give fine detail, directed energy deposition builds large parts and repairs, and binder jetting avoids melting during printing.',
  },
]

export const processingQuestions: Question[] = [...casting, ...forming, ...welding, ...powder, ...additive]
