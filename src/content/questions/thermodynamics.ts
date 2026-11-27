import type { Question } from '../types'

// Core · Thermodynamics branch.
// Sources: Callister & Rethwisch (ch. 9); Porter & Easterling, Phase Transformations in Metals and Alloys (ch. 1);
// Askeland (ch. 10–12).

const gibbs: Question[] = [
  {
    id: 'ge-001',
    nodeId: 'gibbs-energy',
    type: 'multiple_choice',
    prompt: 'At constant temperature and pressure, a process can happen spontaneously when:',
    formula: 'gibbs-free-energy',
    options: ['ΔG < 0', 'ΔG > 0', 'ΔH > 0', 'ΔS < 0'],
    answer: 0,
    explanation:
      'A system at constant T and P moves toward lower Gibbs free energy. A negative ΔG means the change lowers G, so it can occur on its own. ΔH or ΔS alone does not decide it.',
  },
  {
    id: 'ge-002',
    nodeId: 'gibbs-energy',
    type: 'trend',
    prompt: 'For melting, ΔH > 0 (heat is absorbed) and ΔS > 0 (the liquid is more disordered).',
    formula: 'gibbs-free-energy',
    change: 'the temperature T increases',
    target: 'ΔG of melting',
    answer: 'decreases',
    explanation:
      'With ΔS > 0, the −TΔS term becomes more negative as T rises, so ΔG falls. Above the melting point it becomes negative and melting is favored.',
  },
  {
    id: 'ge-003',
    nodeId: 'gibbs-energy',
    type: 'trend',
    prompt: 'For solidification, ΔH < 0 (heat is released) and ΔS < 0 (the solid is more ordered).',
    formula: 'gibbs-free-energy',
    change: 'the temperature T increases toward the melting point',
    target: 'ΔG of solidification',
    answer: 'increases',
    explanation:
      'With ΔS < 0, the −TΔS term is positive and grows with T, so ΔG rises toward zero. At T_m it reaches zero, and above T_m solidification is no longer favored.',
  },
  {
    id: 'ge-004',
    nodeId: 'gibbs-energy',
    type: 'true_false',
    prompt: 'At the equilibrium melting temperature, the solid and the liquid have equal Gibbs free energy.',
    answer: true,
    explanation:
      'At T_m, G(solid) = G(liquid), so ΔG = 0 for melting and the two phases can coexist. Below T_m the solid has the lower G; above T_m the liquid does.',
  },
  {
    id: 'ge-005',
    nodeId: 'gibbs-energy',
    type: 'multiple_choice',
    prompt: 'Melting absorbs heat (ΔH > 0). Why does a metal still melt when heated above T_m?',
    formula: 'gibbs-free-energy',
    options: [
      'Above T_m the entropy term TΔS is larger than ΔH, so ΔG becomes negative',
      'Melting releases heat above T_m',
      'The entropy of the liquid is lower than that of the solid',
      'ΔH becomes negative above T_m',
    ],
    answer: 0,
    explanation:
      'ΔH and ΔS are roughly constant near T_m. As T rises, TΔS grows until it outweighs ΔH. Higher temperature favors the higher-entropy (more disordered) phase.',
  },
  {
    id: 'ge-006',
    nodeId: 'gibbs-energy',
    type: 'true_false',
    prompt: 'A large negative ΔG means the transformation will happen quickly.',
    answer: false,
    explanation:
      'Thermodynamics tells you whether a change can happen, not how fast. The rate depends on kinetics: energy barriers and atomic mobility. A strongly favored change can still be extremely slow.',
  },
  {
    id: 'ge-007',
    nodeId: 'gibbs-energy',
    type: 'multiple_choice',
    prompt: 'At room temperature and pressure, diamond has a higher Gibbs energy than graphite. Why do diamonds last for ages?',
    options: [
      'The transformation has a very high energy barrier, so it is kinetically extremely slow',
      'Diamond is actually the stable form of carbon',
      'Graphite has a higher Gibbs energy than diamond',
      'ΔG for the change is positive',
    ],
    answer: 0,
    explanation:
      'Diamond is metastable. Converting it to graphite requires breaking strong covalent bonds and rearranging the structure, which almost never happens at room temperature. Metastable phases like martensite in steel are useful for the same reason.',
  },
  {
    id: 'ge-008',
    nodeId: 'gibbs-energy',
    type: 'true_false',
    prompt:
      'At constant pressure, a binary eutectic reaction happens at one fixed temperature and composition, because three coexisting phases leave no degrees of freedom.',
    formula: 'phase-rule',
    answer: true,
    explanation:
      'With C = 2 and P = 3 (L, α and β), the phase rule gives F = 0: an invariant point. Nothing can change while all three phases coexist. That is why a eutectic alloy shows a flat plateau on its cooling curve.',
  },
  {
    id: 'ge-009',
    nodeId: 'gibbs-energy',
    type: 'matching',
    prompt: 'Match each thermodynamic term to its meaning.',
    pairs: [
      { left: 'Enthalpy (H)', right: 'Heat content of the system' },
      { left: 'Entropy (S)', right: 'A measure of disorder: the number of possible arrangements' },
      { left: 'Gibbs free energy (G)', right: 'Decides whether a change is spontaneous at constant T and P' },
      { left: 'Equilibrium', right: 'The state of minimum G, with no tendency to change' },
    ],
    explanation:
      'G = H − T·S combines heat content and disorder. Systems change spontaneously until G is at a minimum, which is equilibrium.',
  },
  {
    id: 'ge-010',
    nodeId: 'gibbs-energy',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'Two metals are mixed to form a solid solution.',
    options: [
      'Mixing increases the configurational entropy',
      'The entropy of mixing favors the solid solution more at higher temperatures',
      'If the enthalpy of mixing is strongly positive, the metals may separate into two phases',
      'Mixing always decreases entropy',
    ],
    answers: [0, 1, 2],
    explanation:
      'Random mixing creates many more possible atomic arrangements, so entropy rises. The −TΔS_mix term grows with T, favoring mixing when hot. A large positive ΔH_mix (atoms prefer their own kind) can outweigh it and cause phase separation, especially at low temperature.',
  },
]

const phaseDiagrams: Question[] = [
  {
    id: 'pd-001',
    nodeId: 'phase-diagrams',
    type: 'true_false',
    prompt:
      'In a two-phase region, the compositions of the two phases are read where the horizontal tie line meets the phase boundaries.',
    answer: true,
    explanation:
      'Draw a horizontal tie line at the temperature of interest. Its two ends, on the phase boundaries, give the composition of each phase. The lever rule then gives how much of each phase is present.',
  },
  {
    id: 'pd-002',
    nodeId: 'phase-diagrams',
    type: 'trend',
    prompt: 'An alloy sits in the α + L field at a fixed temperature, so C_α and C_L are fixed.',
    formula: 'lever-rule',
    change: 'the overall composition C₀ moves closer to the liquid composition C_L',
    target: 'the fraction of liquid W_L',
    answer: 'increases',
    explanation:
      'As C₀ approaches C_L, the numerator (C_α − C₀) approaches the denominator (C_α − C_L), so W_L approaches 1. The closer the overall composition is to a phase, the more of that phase there is.',
  },
  {
    id: 'pd-003',
    nodeId: 'phase-diagrams',
    type: 'pick_region',
    prompt: 'Which region is the two-phase field where solid α coexists with liquid?',
    diagram: 'binary_eutectic',
    answer: 'alpha_l',
    explanation:
      'The α + L field lies between the liquidus (above) and the α solidus (below), on the A-rich side of the eutectic point.',
  },
  {
    id: 'pd-004',
    nodeId: 'phase-diagrams',
    type: 'pick_region',
    prompt: 'Which region is a single solid phase rich in component B?',
    diagram: 'binary_eutectic',
    answer: 'beta',
    explanation:
      'The β field is the narrow single-phase region along the B side, bounded by the β solidus and the β solvus. B dissolves only a limited amount of A.',
  },
  {
    id: 'pd-005',
    nodeId: 'phase-diagrams',
    type: 'pick_region',
    prompt: 'An alloy of eutectic composition is cooled below the eutectic temperature. Which field is it in?',
    diagram: 'binary_eutectic',
    answer: 'alpha_beta',
    explanation:
      'Below the eutectic line the liquid has transformed to a mixture of α and β, often as fine alternating layers (the eutectic microstructure).',
  },
  {
    id: 'pd-006',
    nodeId: 'phase-diagrams',
    type: 'multiple_choice',
    prompt: 'Which reaction is the eutectic reaction on cooling?',
    options: ['L → α + β', 'γ → α + β', 'L + α → β', 'α + β → L'],
    answer: 0,
    explanation:
      'In a eutectic reaction, one liquid transforms into two solids at one temperature. γ → α + β (solid to two solids) is a eutectoid reaction, and L + α → β is a peritectic reaction.',
  },
  {
    id: 'pd-007',
    nodeId: 'phase-diagrams',
    type: 'multiple_choice',
    prompt: 'What is the liquidus line?',
    options: [
      'The boundary above which the alloy is completely liquid',
      'The boundary below which the alloy is completely solid',
      'The solubility limit of one solid in another',
      'The line where the eutectic reaction happens',
    ],
    answer: 0,
    explanation:
      'Above the liquidus, everything is liquid. Below the solidus, everything is solid. Between them, solid and liquid coexist. The solubility limit of a solid is the solvus.',
  },
  {
    id: 'pd-008',
    nodeId: 'phase-diagrams',
    type: 'true_false',
    prompt: 'Cu–Ni is an isomorphous system: the two metals are completely soluble in each other in both the liquid and the solid state.',
    answer: true,
    explanation:
      'Cu and Ni are both FCC, with similar atomic radii, electronegativity and valence (the Hume-Rothery rules), so they form one continuous solid solution at every composition.',
  },
  {
    id: 'pd-009',
    nodeId: 'phase-diagrams',
    type: 'multiple_choice',
    prompt: 'Why does an alloy of exactly the eutectic composition melt at a single temperature, unlike most other compositions?',
    options: [
      'At the eutectic point, liquid turns directly into two solids with no two-phase solid + liquid range',
      'Eutectic alloys are pure elements',
      'Eutectic alloys do not form any solid phases',
      'The liquidus and solidus are far apart at that composition',
    ],
    answer: 0,
    explanation:
      'At the eutectic composition, the liquidus and solidus meet at one point, so there is no freezing range. Other compositions pass through an α + L or β + L field and freeze over a range of temperatures.',
  },
  {
    id: 'pd-010',
    nodeId: 'phase-diagrams',
    type: 'cause_effect',
    prompt: 'Select every reason this makes sense.',
    scenario: 'Solders are often designed at or near a eutectic composition.',
    options: [
      'The eutectic has the lowest melting point in that alloy system',
      'It melts and freezes at one temperature instead of over a range',
      'It solidifies as a single phase',
      'It avoids a "pasty" range in which a joint could be disturbed while freezing',
    ],
    answers: [0, 1, 3],
    explanation:
      'A eutectic solder melts at the lowest temperature in the system and freezes sharply, so joints set quickly without a mushy stage. It solidifies as two phases (α + β), not one.',
  },
]

const feC: Question[] = [
  {
    id: 'fec-001',
    nodeId: 'fe-c-diagram',
    type: 'matching',
    prompt: 'Match each phase or microconstituent in steel to its description.',
    pairs: [
      { left: 'Ferrite (α)', right: 'BCC iron that dissolves very little carbon' },
      { left: 'Austenite (γ)', right: 'FCC iron that dissolves up to 2.14 wt% C' },
      { left: 'Cementite (Fe₃C)', right: 'Hard, brittle iron carbide with 6.70 wt% C' },
      { left: 'Pearlite', right: 'Alternating thin plates of ferrite and cementite' },
    ],
    explanation:
      'Ferrite (max ~0.022 wt% C) is soft and ductile. Austenite is stable only at high temperature in plain carbon steels. Cementite is a hard compound. Pearlite is the two-phase product of the eutectoid reaction.',
  },
  {
    id: 'fec-002',
    nodeId: 'fe-c-diagram',
    type: 'multiple_choice',
    prompt: 'Which reaction is the eutectoid reaction in steel on cooling (727 °C, 0.76 wt% C)?',
    options: ['γ → α + Fe₃C', 'L → γ + Fe₃C', 'α → γ + Fe₃C', 'L + δ → γ'],
    answer: 0,
    explanation:
      'Austenite transforms into ferrite plus cementite, usually as pearlite. L → γ + Fe₃C is the eutectic at 1147 °C (cast iron range), and L + δ → γ is the peritectic.',
  },
  {
    id: 'fec-003',
    nodeId: 'fe-c-diagram',
    type: 'pick_region',
    prompt: 'Which region is single-phase austenite?',
    diagram: 'fe_c_steel',
    answer: 'gamma',
    explanation:
      'Austenite occupies the large field above the A3 line (left) and the Acm line (right). Steels are heated into this field before hardening.',
  },
  {
    id: 'fec-004',
    nodeId: 'fe-c-diagram',
    type: 'pick_region',
    prompt: 'A hypoeutectoid steel (less than 0.76 wt% C) is held just above 727 °C. Which field is it in?',
    diagram: 'fe_c_steel',
    answer: 'alpha_gamma',
    explanation:
      'Just above the eutectoid temperature, a hypoeutectoid steel lies between the A3 line and 727 °C: the α + γ field, where proeutectoid ferrite coexists with austenite.',
  },
  {
    id: 'fec-005',
    nodeId: 'fe-c-diagram',
    type: 'pick_region',
    prompt: 'Below 727 °C, which phase field do slowly cooled plain carbon steels (above about 0.022 wt% C) end up in?',
    diagram: 'fe_c_steel',
    answer: 'alpha_fe3c',
    explanation:
      'Below the eutectoid temperature, the equilibrium phases are ferrite and cementite. How they are arranged (pearlite, proeutectoid ferrite or cementite) depends on the carbon content.',
  },
  {
    id: 'fec-006',
    nodeId: 'fe-c-diagram',
    type: 'true_false',
    prompt: 'Steels contain less than about 2.14 wt% carbon; iron–carbon alloys with more carbon are cast irons.',
    answer: true,
    explanation:
      '2.14 wt% C is the maximum solubility of carbon in austenite. Below it, an alloy can be made fully austenitic and hot worked (steel). Above it, the eutectic forms and the alloy is a cast iron.',
  },
  {
    id: 'fec-007',
    nodeId: 'fe-c-diagram',
    type: 'multiple_choice',
    prompt: 'What is the microstructure of a eutectoid (0.76 wt% C) steel that is slowly cooled to room temperature?',
    options: ['100% pearlite', 'Proeutectoid ferrite and pearlite', 'Proeutectoid cementite and pearlite', '100% austenite'],
    answer: 0,
    explanation:
      'At exactly the eutectoid composition, all the austenite transforms at 727 °C, so there is no proeutectoid phase. The result is fully pearlitic.',
  },
  {
    id: 'fec-008',
    nodeId: 'fe-c-diagram',
    type: 'trend',
    prompt: 'Consider slowly cooled hypoeutectoid steels.',
    change: 'the carbon content increases from 0.2 toward 0.76 wt%',
    target: 'the fraction of pearlite in the microstructure',
    answer: 'increases',
    explanation:
      'By the lever rule, the closer the carbon content is to the eutectoid composition, the more of the austenite turns into pearlite and the less proeutectoid ferrite forms. At 0.76 wt% C it is 100% pearlite.',
  },
  {
    id: 'fec-009',
    nodeId: 'fe-c-diagram',
    type: 'trend',
    prompt: 'Consider slowly cooled plain carbon steels.',
    change: 'the carbon content increases',
    target: 'the hardness and tensile strength',
    answer: 'increases',
    explanation:
      'More carbon means more hard cementite (via more pearlite, then proeutectoid cementite). Hardness and strength go up while ductility and toughness go down.',
  },
  {
    id: 'fec-010',
    nodeId: 'fe-c-diagram',
    type: 'multiple_choice',
    prompt: 'What is proeutectoid ferrite?',
    options: [
      'Ferrite that forms from austenite above 727 °C, before the eutectoid reaction, in hypoeutectoid steels',
      'The ferrite plates inside pearlite',
      'Ferrite that forms from the liquid',
      'Ferrite that forms in hypereutectoid steels',
    ],
    answer: 0,
    explanation:
      'While cooling through the α + γ field, a hypoeutectoid steel forms ferrite (usually along austenite grain boundaries) before reaching 727 °C. The remaining austenite then turns into pearlite. Hypereutectoid steels form proeutectoid cementite instead.',
  },
]

const cuNiQuestions: Question[] = [
  {
    id: 'pd-011',
    nodeId: 'phase-diagrams',
    type: 'pick_region',
    prompt: 'In the Cu–Ni system, which region is the lens-shaped two-phase field where solid and liquid coexist?',
    diagram: 'cu_ni',
    answer: 'alpha_l',
    explanation:
      'The α + L field lies between the liquidus (top) and the solidus (bottom). Inside it, a tie line gives the compositions of the solid and the liquid, and the lever rule gives their amounts.',
  },
  {
    id: 'pd-012',
    nodeId: 'phase-diagrams',
    type: 'pick_region',
    prompt: 'A Cu–Ni alloy of any composition is cooled well below its solidus. Which field is it in?',
    diagram: 'cu_ni',
    answer: 'alpha',
    explanation:
      'Cu and Ni are completely soluble in each other in the solid state, so below the solidus every composition is a single FCC α solid solution. There are no other solid phases.',
  },
]

export const thermodynamicsQuestions: Question[] = [...gibbs, ...phaseDiagrams, ...feC, ...cuNiQuestions]
