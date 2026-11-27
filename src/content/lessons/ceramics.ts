import type { SkillLesson } from '../types'

// Disciplines · Ceramics & Glasses lessons. Sources: Callister & Rethwisch ch. 12–13; Kingery, Bowen & Uhlmann;
// Barsoum; Shelby.

export const ceramicsLessons: SkillLesson[] = [
  {
    nodeId: 'ceramic-structures',
    cards: [
      {
        title: 'What sets ceramic structures',
        body: [
          'Ionic ceramic structures must be **electrically neutral**, and each cation touches as many anions as fit. A **larger cation-to-anion radius ratio → higher coordination number** (about CN 4, then 6, then 8).',
          'Prototype structures: **NaCl** rock salt (CN 6), **CsCl** (CN 8), **ZnS** zinc blende (CN 4), **CaF₂** fluorite. Silicates are built from **SiO₄⁴⁻ tetrahedra**.',
          'Defects must keep charge balance: a **Schottky defect** is a cation–anion vacancy pair; a **Frenkel defect** is a cation moved into an interstitial site.',
        ],
      },
      {
        title: 'Brittle and flaw-sensitive',
        body: [
          'Ceramics cannot blunt cracks by plastic flow, so **tension opens flaws** while **compression closes them**. Compressive strength can be about ten times the tensile strength.',
          '**More porosity → lower strength** (and lower modulus).',
          'Strength depends on the **largest flaw**, which varies from sample to sample, so it scatters and is described by **Weibull statistics**. **Larger specimens are weaker on average**: they are more likely to contain a big flaw.',
        ],
      },
      {
        title: 'Toughening zirconia',
        body: [
          'In **partially stabilized zirconia**, tetragonal grains near a crack tip transform to monoclinic with about **4% volume expansion**. This squeezes the crack shut: **transformation toughening**.',
        ],
      },
    ],
    keyPoints: [
      'Charge neutrality and radius ratio set ionic structures; larger ratio → higher CN.',
      'Schottky = cation + anion vacancy pair; Frenkel = displaced cation.',
      'Ceramics are much stronger in compression than tension.',
      'Porosity and specimen size lower strength; Weibull statistics describe scatter.',
      'Transformation toughening makes zirconia unusually tough.',
    ],
  },
  {
    nodeId: 'sintering',
    cards: [
      {
        title: 'Why powders sinter',
        body: [
          'Fine powders have a huge surface area. Sintering is driven by **reducing surface energy**: atoms diffuse to grow **necks** between particles and fill pores.',
          '**Finer powders** and **higher temperatures** both speed it up.',
          'Removing pores **shrinks the part** (often 15–20% linearly), so green bodies are made oversized.',
        ],
      },
      {
        title: 'Stages and mechanisms',
        body: [
          '**Necks form → open pore channels shrink → isolated pores are eliminated.**',
          'Surface diffusion and evaporation–condensation grow necks but **do not densify**; densification needs material from grain boundaries or the particle interior.',
          'In the final stage, fast grain growth can **trap pores inside grains**, where they are almost impossible to remove. Adding a little **MgO to alumina** slows boundaries and allows nearly pore-free, even translucent, alumina.',
        ],
      },
      {
        title: 'Helping densification',
        body: [
          '- **Liquid-phase sintering**: a small amount of wetting liquid pulls particles together (cemented carbides, porcelain, silicon nitride).',
          '- **Hot pressing**: pressure during heating gives higher density at lower temperature, with less grain growth.',
        ],
      },
    ],
    keyPoints: [
      'Sintering is driven by lowering surface energy.',
      'Finer powder and higher temperature → faster densification.',
      'Sintered parts shrink; green bodies are oversized.',
      'Control grain growth so pores stay on boundaries (MgO in alumina).',
      'Liquid-phase sintering and hot pressing help densify.',
    ],
  },
  {
    nodeId: 'glass-ceramics',
    cards: [
      {
        title: 'What glass is',
        body: [
          'A **glass** is an **amorphous** solid: no long-range order. Silica glass is a random network of corner-sharing SiO₄ tetrahedra.',
          'On cooling, viscosity rises until atoms can no longer rearrange: the **glass transition** (Tg), seen as a change in slope of volume vs temperature. **Faster cooling → higher Tg.**',
          'Adding **Na₂O** (a network modifier) breaks Si–O–Si bridges, lowering viscosity and softening temperature, so soda-lime glass is easier to melt and form.',
        ],
      },
      {
        title: 'Working and strengthening glass',
        body: [
          '**Viscosity falls steeply with temperature**; glass is shaped within set viscosity windows.',
          '- **Annealing**: hold near the annealing point, then cool slowly, to remove internal stresses.',
          '- **Tempering**: rapid air cooling leaves the surface in **compression** and the core in tension, so surface flaws are held closed. It breaks into small, safer pieces.',
        ],
      },
      {
        title: 'Glass-ceramics',
        body: [
          'A **glass-ceramic** is formed as a glass, then **crystallized** with a controlled heat treatment: a low-temperature hold to **nucleate**, a higher one to **grow** fine crystals.',
          'Some have **near-zero thermal expansion**, so cooktops survive sudden temperature changes.',
        ],
      },
    ],
    keyPoints: [
      'Glass is amorphous; Tg is where the supercooled liquid becomes rigid.',
      'Network modifiers lower viscosity and softening temperature.',
      'Annealing removes stress; tempering adds surface compression.',
      'Faster cooling → higher Tg.',
      'Glass-ceramics: form as glass, then nucleate and grow crystals.',
    ],
  },
  {
    nodeId: 'refractories',
    cards: [
      {
        title: 'What refractories must do',
        body: [
          'Refractories line furnaces, ladles and kilns. They must keep their strength at high temperature and resist **molten metal, slag, thermal shock and creep**.',
          'Match chemistry to the slag: **silica = acid**, **magnesia (MgO) = basic**, **chromite = neutral**. A basic slag dissolves an acid lining, so basic steelmaking converters use **MgO–carbon** bricks. Graphite resists slag wetting and improves thermal shock resistance.',
        ],
      },
      {
        title: 'Porosity: insulation vs attack',
        body: [
          '**More porosity → lower thermal conductivity** (better insulation), but **open pores let slag soak in**.',
          'So dense bricks form the hot face in contact with slag, and porous **insulating firebrick** goes behind them as a backup layer.',
        ],
      },
      {
        title: 'Thermal shock',
        body: [
          'Rapid heating or cooling creates thermal stresses that crack and **spall** linings. Good thermal shock resistance comes from **low thermal expansion, high thermal conductivity and high strength or toughness**.',
          'Preheating ladles before filling reduces the shock.',
        ],
        formula: 'thermal-stress',
      },
    ],
    keyPoints: [
      'Refractories resist heat, slag, thermal shock and creep.',
      'Match refractory chemistry to slag (acid, basic, neutral).',
      'Porosity improves insulation but weakens slag resistance.',
      'Low expansion, high conductivity and toughness resist thermal shock.',
      'Thermal stress grows with E, α and ΔT.',
    ],
  },
]
