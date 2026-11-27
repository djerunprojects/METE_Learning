import type { SkillLesson } from '../types'

// Core · Kinetics lessons. Sources: Callister & Rethwisch ch. 5, 10; Porter & Easterling ch. 2, 4, 5; Askeland ch. 5, 9, 12.

export const kineticsLessons: SkillLesson[] = [
  {
    nodeId: 'diffusion',
    cards: [
      {
        title: 'How atoms move in solids',
        body: [
          '- **Vacancy diffusion**: a substitutional atom (including the host’s own atoms) jumps into a neighboring vacancy. It must wait for one, so it is slow.',
          '- **Interstitial diffusion**: small atoms such as C, N or H jump between interstitial sites, which are almost always free. It is **much faster**.',
          'Diffusion is also faster along **grain boundaries and surfaces** ("short-circuit" paths), especially at lower temperatures.',
        ],
      },
      {
        title: "Fick's first law",
        body: [
          'At **steady state**, the flux of atoms is proportional to the **concentration gradient**: the steeper the gradient, the faster atoms flow, from high to low concentration (hence the minus sign).',
          'Example: hydrogen passing through a metal membrane. When concentrations change with time, as in carburizing, **Fick’s second law** is used instead.',
        ],
        formula: 'fick-first-law',
      },
      {
        title: 'Temperature is the big lever',
        body: [
          'Diffusion is **thermally activated**: D rises **exponentially** with temperature, and falls when the **activation energy Q** is larger.',
          'Carbon diffuses **faster in BCC ferrite** (Q ≈ 87 kJ/mol) than in **FCC austenite** (Q ≈ 148 kJ/mol) at the same temperature, because BCC is more open. Carburizing is still done in austenite, which dissolves far more carbon and is hotter.',
        ],
        formula: 'arrhenius-diffusion',
      },
      {
        title: 'How far do atoms get?',
        body: [
          'Diffusion distance grows with the **square root of time**: **four times longer → only twice as deep**.',
          '**Carburizing** holds low-carbon steel in a carbon-rich atmosphere in the austenite range. After quenching, the carbon-rich surface becomes a **hard case** over a tough core.',
          'For a deeper case in the same time: **raise the temperature** (bigger D) or **raise the surface carbon concentration**.',
        ],
        formula: 'diffusion-distance',
      },
    ],
    keyPoints: [
      'Interstitial diffusion is much faster than vacancy (substitutional) diffusion.',
      'Grain boundaries and surfaces are fast diffusion paths.',
      "Fick's first law: steady-state flux ∝ concentration gradient.",
      'D rises exponentially with T and falls with activation energy Q.',
      'Diffusion depth ∝ √(Dt): 4× time gives 2× depth.',
    ],
  },
  {
    nodeId: 'nucleation-growth',
    cards: [
      {
        title: 'Why new phases need a nucleus',
        body: [
          'Forming a small particle of a new phase gains **volume free energy** but costs **interface energy**. For tiny clusters the surface cost wins, so they dissolve.',
          'Above the **critical radius r***, adding atoms lowers the total energy, so the nucleus keeps growing.',
        ],
        formula: 'critical-radius',
      },
      {
        title: 'Undercooling lowers the barrier',
        body: [
          'Cooling further below the transformation temperature makes |ΔG_v| larger. That **shrinks r*** and **lowers the barrier ΔG*** very quickly (it depends on 1/ΔG_v²).',
          'The result: **more undercooling → many more nuclei → finer grains**. Exactly at the melting point, ΔG_v = 0 and r* is infinite, so nothing nucleates.',
          'A higher **interface energy γ** raises both r* and ΔG*.',
        ],
        formula: 'nucleation-barrier',
      },
      {
        title: 'Heterogeneous nucleation',
        body: [
          'A nucleus forming on an existing surface (mold wall, particle, grain boundary) needs less new interface, so its **energy barrier is lower**. In practice almost all nucleation is **heterogeneous**.',
          '**Inoculants** (grain refiners), such as Ti–B additions to molten aluminum, provide many such sites, giving a fine grain size.',
        ],
      },
      {
        title: 'The overall rate',
        body: [
          'The transformation rate depends on both **driving force** (larger at low temperature) and **atomic mobility** (larger at high temperature). The rate is therefore **fastest at an intermediate temperature**, which gives C-shaped curves on TTT diagrams.',
          'At one temperature, the fraction transformed follows an **S-shaped Avrami curve**: a slow start, rapid growth, then slowing as the old phase runs out. A larger rate constant k shifts the curve to shorter times.',
        ],
        formula: 'avrami',
      },
    ],
    keyPoints: [
      'Embryos smaller than r* dissolve; larger ones grow.',
      'More undercooling → smaller r*, lower ΔG*, more nuclei, finer grains.',
      'Heterogeneous nucleation on surfaces is easier; inoculants refine grains.',
      'Overall rate peaks at intermediate temperature (driving force vs diffusion).',
      'Fraction transformed vs time is S-shaped (Avrami).',
    ],
  },
  {
    nodeId: 'ttt-cct',
    cards: [
      {
        title: 'Reading a TTT diagram',
        body: [
          'A TTT (isothermal transformation) diagram shows what happens when austenite is **quenched to a temperature and held there**.',
          '- Above **727 °C**, austenite is stable and never transforms.',
          '- Below it, read along the time axis: austenite until the **start curve**, transforming until the **finish curve**, then fully transformed.',
          'The curves have a **nose** at about 540 °C for eutectoid steel, where transformation starts in under a second.',
        ],
        diagram: 'ttt_eutectoid',
      },
      {
        title: 'Pearlite, bainite and martensite',
        body: [
          '- **Pearlite** forms above the nose. Lower transformation temperature → **finer plate spacing** → harder pearlite.',
          '- **Bainite** forms between about **215 and 540 °C**: a fine, non-lamellar mix of ferrite and cementite.',
          '- **Martensite** forms below **Mₛ** if cooling misses the nose. It forms by a **diffusionless shear** change: carbon is trapped, distorting the lattice into **BCT**, so martensite is very hard.',
        ],
        diagram: 'ttt_eutectoid',
        highlight: 'martensite',
      },
      {
        title: 'Continuous cooling and hardenability',
        body: [
          'Real parts cool continuously, so **CCT diagrams** are used for heat treatment. Their curves sit at longer times and lower temperatures than TTT curves.',
          'The **critical cooling rate** is the slowest cooling that still avoids the nose and gives martensite.',
          'Alloying elements such as **Cr, Mo and Ni** shift the curves to the right, **lowering the critical cooling rate**. Thick sections can then harden through: higher **hardenability**.',
        ],
      },
    ],
    keyPoints: [
      'TTT: isothermal holding; CCT: continuous cooling.',
      'Start and finish curves; nose near 540 °C for eutectoid steel.',
      'Pearlite above the nose (finer when colder), bainite below it, martensite below Mₛ.',
      'Martensite is a diffusionless shear product (BCT), very hard.',
      'Alloying shifts curves right → lower critical cooling rate → higher hardenability.',
    ],
  },
]
