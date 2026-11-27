import type { SkillLesson } from '../types'

// Core · Thermodynamics lessons. Sources: Callister & Rethwisch ch. 9; Porter & Easterling ch. 1; Askeland ch. 10–12.

export const thermodynamicsLessons: SkillLesson[] = [
  {
    nodeId: 'gibbs-energy',
    cards: [
      {
        title: 'Gibbs energy decides direction',
        body: [
          'At constant temperature and pressure, a system moves toward **lower Gibbs free energy G = H − T·S**.',
          '- **Enthalpy H**: the heat content.',
          '- **Entropy S**: disorder, the number of possible arrangements.',
          'A change can happen spontaneously when **ΔG < 0**. **Equilibrium** is the state of minimum G, with no tendency to change.',
        ],
        formula: 'gibbs-free-energy',
      },
      {
        title: 'Temperature tips the balance',
        body: [
          'For **melting**, ΔH > 0 (heat absorbed) and ΔS > 0 (the liquid is more disordered). As T rises, the −TΔS term grows and **ΔG falls**, becoming negative above the melting point.',
          'For **solidification** the signs are reversed, so ΔG **rises** toward zero as T approaches T_m.',
          'At **T_m**, solid and liquid have equal G and ΔG = 0. In general, **higher temperature favors the higher-entropy phase**.',
        ],
      },
      {
        title: 'Can vs how fast',
        body: [
          'Thermodynamics tells you **whether** a change can happen, not **how fast**. Rates are a matter of **kinetics**: energy barriers and atomic mobility.',
          '**Diamond** has higher G than graphite at room conditions, yet lasts for ages: it is **metastable**, because converting it needs a huge energy barrier to be crossed. Martensite in steel is useful for the same reason.',
        ],
      },
      {
        title: 'Phase rule and mixing',
        body: [
          'The **Gibbs phase rule** counts how many variables can change while phases coexist. In a binary system at constant pressure, three coexisting phases (as at a eutectic) give **F = 0**: an **invariant** point with fixed temperature and composition, seen as a flat plateau on a cooling curve.',
          'When two metals mix, **configurational entropy rises**, and the −TΔS term favors mixing more at high temperature. A strongly **positive enthalpy of mixing** (atoms prefer their own kind) can still cause separation into two phases.',
        ],
        formula: 'phase-rule',
      },
    ],
    keyPoints: [
      'Spontaneous change at constant T and P requires ΔG < 0; equilibrium is minimum G.',
      'Higher temperature favors the higher-entropy phase (e.g. liquid above T_m).',
      'At T_m, solid and liquid have equal G.',
      'Thermodynamics gives direction, kinetics gives rate: metastable phases can last.',
      'Three phases in a binary system at constant pressure: F = 0 (invariant).',
    ],
  },
  {
    nodeId: 'phase-diagrams',
    cards: [
      {
        title: 'Reading a phase diagram',
        body: [
          'A binary phase diagram shows which phases are stable at each **temperature** and **composition**.',
          '- The **liquidus**: above it, everything is liquid.',
          '- The **solidus**: below it, everything is solid.',
          '- The **solvus**: the solubility limit of one solid in another.',
          'Between liquidus and solidus, solid and liquid coexist (α + L or β + L). Below the eutectic line in this diagram, α and β coexist.',
        ],
        diagram: 'binary_eutectic',
      },
      {
        title: 'Tie lines and the lever rule',
        body: [
          'In a two-phase field, draw a horizontal **tie line** at the temperature of interest. Its ends, where it meets the phase boundaries, give the **composition of each phase**.',
          'The **lever rule** gives **how much** of each phase is present. The closer the overall composition C₀ is to one end of the tie line, the more of that phase there is.',
        ],
        formula: 'lever-rule',
      },
      {
        title: 'Isomorphous and eutectic systems',
        body: [
          '**Cu–Ni** is **isomorphous**: both are FCC with similar size, electronegativity and valence, so they are completely soluble in each other as liquids and solids.',
          'In a **eutectic** system, a liquid of the eutectic composition turns into **two solids at one temperature**: **L → α + β**. It melts sharply at the **lowest temperature** in the system, which is why solders are designed near eutectic compositions.',
          'Other invariant reactions: **eutectoid** (solid → two solids, e.g. γ → α + β) and **peritectic** (L + α → β).',
        ],
      },
    ],
    keyPoints: [
      'Liquidus, solidus and solvus separate the phase fields.',
      'Tie-line ends give the phase compositions; the lever rule gives their amounts.',
      'Isomorphous systems (Cu–Ni) have complete solubility.',
      'Eutectic: L → α + β at one temperature; the lowest-melting composition.',
      'Eutectoid: solid → two solids; peritectic: L + α → β.',
    ],
  },
  {
    nodeId: 'fe-c-diagram',
    cards: [
      {
        title: 'Phases in steel',
        body: [
          '- **Ferrite (α)**: BCC iron, dissolves at most about **0.022 wt% C**. Soft and ductile.',
          '- **Austenite (γ)**: FCC iron, dissolves up to **2.14 wt% C**. Stable only at high temperature in plain carbon steels.',
          '- **Cementite (Fe₃C)**: a hard, brittle carbide with **6.70 wt% C**.',
          'Alloys with less than 2.14 wt% C are **steels**; above that they are **cast irons**.',
        ],
        diagram: 'fe_c_steel',
      },
      {
        title: 'The eutectoid reaction',
        body: [
          'At **727 °C** and **0.76 wt% C**, austenite transforms into ferrite plus cementite: **γ → α + Fe₃C**.',
          'The product is usually **pearlite**: thin, alternating plates of ferrite and cementite. A eutectoid steel cooled slowly is **100% pearlite**.',
          'At 1147 °C there is also a **eutectic** reaction (L → γ + Fe₃C), which matters for cast irons.',
        ],
        diagram: 'fe_c_steel',
        highlight: 'alpha_fe3c',
      },
      {
        title: 'Hypo- and hypereutectoid steels',
        body: [
          '- **Hypoeutectoid** steels (< 0.76 wt% C) pass through the **α + γ** field on cooling. **Proeutectoid ferrite** forms first, often on austenite grain boundaries; the remaining austenite becomes pearlite at 727 °C.',
          '- **Hypereutectoid** steels (> 0.76 wt% C) form **proeutectoid cementite** first.',
          'More carbon → **more pearlite** (up to 0.76%), then more cementite → **harder and stronger** but less ductile and tough.',
        ],
        diagram: 'fe_c_steel',
        highlight: 'alpha_gamma',
      },
    ],
    keyPoints: [
      'Ferrite (BCC, ≤0.022% C), austenite (FCC, ≤2.14% C), cementite (Fe₃C, 6.70% C).',
      'Steels < 2.14 wt% C; cast irons above.',
      'Eutectoid at 727 °C, 0.76 wt% C: γ → α + Fe₃C, usually as pearlite.',
      'Hypoeutectoid steels form proeutectoid ferrite first; hypereutectoid steels form proeutectoid cementite.',
      'More carbon in slowly cooled steel → harder and stronger, less ductile.',
    ],
  },
]
