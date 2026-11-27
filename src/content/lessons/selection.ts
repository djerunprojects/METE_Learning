import type { SkillLesson } from '../types'

// Applications · Materials Selection lessons. Sources: Ashby, Materials Selection in Mechanical Design;
// Ashby, Materials and the Environment.

export const selectionLessons: SkillLesson[] = [
  {
    nodeId: 'ashby-charts',
    cards: [
      {
        title: 'Material property charts',
        body: [
          'An Ashby chart plots one property against another on **log–log** axes, because properties span many orders of magnitude. Each family forms a cloud:',
          '- **Metals**: dense and stiff. **Ceramics**: stiffest.',
          '- **Composites** (CFRP): stiff at low density.',
          '- **Polymers** and **elastomers**: around 1 Mg/m³, with low modulus.',
          '- **Foams**: lowest density and modulus. **Woods** (along the grain) are surprisingly good for beams.',
        ],
        diagram: 'ashby_modulus_density',
      },
      {
        title: 'Material indices',
        body: [
          'For a light, stiff part, maximize the right **index**:',
          '- **Tie** (tension): **E/ρ**. Steel, aluminum and titanium are about equal; CFRP is much better.',
          '- **Beam** (bending): **√E/ρ**.',
          '- **Panel** (plate in bending): **∛E/ρ**. The weaker the power of E, the more **low density wins**, so foams and sandwich panels shine.',
          'On log–log axes, a constant index is a **straight line** (slope 1, 2 or 3). Materials above the line beat those below.',
        ],
        formula: 'index-beam',
      },
      {
        title: 'Selecting with a guideline',
        body: [
          'To choose a light, stiff tie, draw a **slope-1 line** (constant E/ρ) on the modulus–density chart and slide it **up and to the left**. The materials that stay above it are the best candidates.',
          'A **higher E/ρ** means **less mass** for the same stiffness, because the tie’s mass is proportional to ρ/E.',
          'Combine the index with **limits** first: for example, remove materials that are too expensive or cannot survive the service temperature, then rank what remains.',
        ],
        formula: 'index-tie',
      },
    ],
    keyPoints: [
      'Ashby charts are log–log maps of material families.',
      'Tie: maximize E/ρ; beam: √E/ρ; panel: ∛E/ρ.',
      'Constant-index lines are straight on log–log charts.',
      'Composites lead in specific stiffness; foams win for panels.',
      'Woods are efficient beams.',
    ],
  },
  {
    nodeId: 'selection-tradeoffs',
    cards: [
      {
        title: 'Translate, screen, rank',
        body: [
          '**Translation** turns a design need into a selection problem: **function, constraints, objective, free variables**.',
          '**Screening** removes materials that fail hard constraints (e.g. a 400 °C service temperature rules out almost all polymers). **Ranking** orders the survivors by a performance index.',
        ],
      },
      {
        title: 'Conflicting objectives',
        body: [
          'When objectives conflict (low mass vs low cost), there is no single best material, only a **trade-off surface** (Pareto front). A **penalty function** weighs them.',
          'The **value of saving a kilogram** rises from family cars to aircraft to spacecraft, which is why CFRP and titanium are common in aerospace.',
          'Examples: racing bike → minimum mass; mass-market car panel → low cost; turbine blade → creep resistance; hip implant → biocompatibility and fatigue.',
        ],
      },
      {
        title: 'Beyond simple properties',
        body: [
          '- **Springs** need high σ_y²/E (stored elastic energy per volume).',
          '- **Pressure vessels** that should **leak before they break** need a high toughness-to-yield-strength ratio.',
          '- **Process compatibility**, cost, availability, supply security, joining and **existing experience** often decide the final choice.',
        ],
      },
    ],
    keyPoints: [
      'Translation: function, constraints, objective, free variables.',
      'Screen out failures, then rank by an index.',
      'Conflicting objectives give a trade-off (Pareto) front.',
      'Mass savings are worth more in aerospace than in cars.',
      'Process, cost and supply matter as much as properties.',
    ],
  },
  {
    nodeId: 'sustainability-recycling',
    cards: [
      {
        title: 'Embodied energy and LCA',
        body: [
          '**Embodied energy** is the energy to produce 1 kg of material from raw resources: primary aluminum about 200 MJ/kg, steel about 30, concrete about 1.',
          '**Recycled aluminum saves about 90–95%** of the energy.',
          'An **LCA** looks at the whole life: material, manufacture, transport, use and end of life. For fuel-burning cars the **use phase** dominates, so lightweighting can pay back extra embodied energy.',
        ],
      },
      {
        title: 'Recycling challenges',
        body: [
          '- **Copper** in steel scrap cannot be removed and causes **hot shortness**.',
          '- **Thermoset composites** cannot be remelted, so fibers are recovered shorter and **downcycled**.',
          '- **Mixed materials** contaminate scrap; **design for disassembly** keeps streams clean and valuable.',
        ],
      },
      {
        title: 'Supply and circularity',
        body: [
          '**Critical raw materials** (cobalt, rare earth elements) are vital but have supply risks; substitution and recycling reduce them.',
          'A **circular economy** keeps materials in use through **reuse, repair, remanufacturing and recycling**. Durability matters as much as recyclability.',
          'For aluminum products: more **recycled content**, **low-carbon electricity** for primary metal, and **longer-lasting** designs.',
        ],
      },
    ],
    keyPoints: [
      'Embodied energy: primary aluminum ≈ 200 MJ/kg; recycling saves 90–95%.',
      'LCA covers the whole life; the use phase often dominates for cars.',
      'Copper contaminates steel scrap; thermoset composites are hard to recycle.',
      'Critical raw materials carry supply risks.',
      'Circular economy: reuse, repair, remanufacture, recycle.',
    ],
  },
]
