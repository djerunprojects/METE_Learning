import type { SkillLesson } from '../types'

// Disciplines · Composites lessons. Sources: Callister & Rethwisch ch. 16; Hull & Clyne; Chawla.

export const compositesLessons: SkillLesson[] = [
  {
    nodeId: 'matrix-reinforcement',
    cards: [
      {
        title: 'Roles of matrix and reinforcement',
        body: [
          'The **reinforcement** (usually stiffer and stronger) carries most of the load. The **matrix** holds the reinforcement in place, **transfers load** into it and protects it.',
          'Types: **particle** (concrete), **fiber** (fiberglass), **laminar** (plywood) and **sandwich panels** (honeycomb between thin skins).',
          'Composites are prized for high **specific stiffness and strength** (per unit density), which is why aerospace uses them.',
        ],
      },
      {
        title: 'The interface matters',
        body: [
          'Load reaches the fibers only through the **interface**. Poor bonding means fibers pull out and their strength is wasted. **Coupling agents** (e.g. silanes on glass fibers) improve bonding.',
          'Thin fibers are much stronger than bulk material because a small diameter leaves less room for large flaws.',
        ],
      },
      {
        title: 'Critical fiber length',
        body: [
          'Stress builds up from zero at a fiber’s ends, so a fiber needs a minimum length to be loaded to its full strength.',
          '- **Stronger interface → shorter l_c.**',
          '- **Thicker fiber → longer l_c.**',
          'Fibers much shorter than l_c reinforce poorly; continuous fibers are best.',
        ],
        formula: 'critical-fiber-length',
      },
    ],
    keyPoints: [
      'Reinforcement carries load; matrix binds, transfers load and protects.',
      'High specific stiffness and strength make composites attractive.',
      'Good bonding (coupling agents) is essential for load transfer.',
      'Stronger interface → shorter critical length; thicker fibers → longer.',
      'Fibers shorter than l_c are inefficient.',
    ],
  },
  {
    nodeId: 'rule-of-mixtures',
    cards: [
      {
        title: 'Loading along the fibers',
        body: [
          'Along aligned fibers, both phases strain together (**iso-strain**). The modulus is a volume-weighted average: **more fibers → higher modulus**.',
          'The stiffer phase carries more stress, so the **higher E_f / E_m, the larger the share of load carried by the fibers** (over 90% in carbon–epoxy). Density also follows a rule of mixtures.',
        ],
        formula: 'iso-strain',
      },
      {
        title: 'Loading across the fibers',
        body: [
          'Across the fibers, stress passes through the soft matrix (**iso-stress**), so the **matrix controls** the result and the modulus is much lower.',
          'Iso-strain gives an **upper bound** and iso-stress a **lower bound**; real composites lie in between.',
        ],
        formula: 'iso-stress',
      },
      {
        title: 'Direction and layup',
        body: [
          'Unidirectional composites are **strongly anisotropic**: as the angle between load and fibers grows from 0° to 90°, **stiffness falls** quickly.',
          'Stacking plies at **0°, ±45° and 90°** gives a **quasi-isotropic** laminate with similar in-plane stiffness in all directions.',
          'In practice, fiber volume fraction tops out around **60–70%**, above which fibers can’t be fully wetted.',
        ],
      },
    ],
    keyPoints: [
      'Along fibers (iso-strain): E rises with fiber fraction; fibers carry most load.',
      'Across fibers (iso-stress): the matrix dominates; much lower modulus.',
      'Iso-strain = upper bound; iso-stress = lower bound.',
      'Stiffness falls quickly as load moves off the fiber axis.',
      'Quasi-isotropic laminates use 0/±45/90 plies; max fiber fraction about 60–70%.',
    ],
  },
  {
    nodeId: 'fiber-composites',
    cards: [
      {
        title: 'Choosing a fiber',
        body: [
          '- **Carbon**: very high stiffness at low density, but costly.',
          '- **E-glass**: cheap with good strength, lower stiffness.',
          '- **Aramid (Kevlar)**: very tough and impact resistant, but **weak in compression**.',
          '- **Natural fibers** such as flax: renewable and light, with variable properties.',
          'Matrices: **epoxy** (thermoset) or thermoplastics such as **PEEK** (tougher, weldable and recyclable, but processed near 400 °C).',
        ],
      },
      {
        title: 'Making laminates',
        body: [
          '**Prepregs** are fibers pre-impregnated with partly cured resin, stored cold, laid up in molds and cured.',
          '**Autoclave** curing applies heat and pressure to consolidate plies and squeeze out voids. **More voids → lower interlaminar shear strength.**',
        ],
      },
      {
        title: 'Weak spots',
        body: [
          '- **Delamination**: plies separate, since only resin joins them.',
          '- **Moisture** plasticizes the matrix and **lowers its Tg**.',
          '- **Galvanic corrosion**: conductive, noble carbon makes aluminum fasteners corrode; glass plies or titanium fasteners are used to insulate joints.',
          'Cost, hidden impact damage and recycling difficulty keep CFRP from being used everywhere.',
        ],
      },
    ],
    keyPoints: [
      'Carbon: stiff and light; glass: cheap; aramid: tough but weak in compression.',
      'Prepregs and autoclave curing give low-void laminates.',
      'Voids lower interlaminar shear strength; delamination is a key failure.',
      'Moisture lowers matrix Tg.',
      'Carbon fiber in contact with aluminum causes galvanic corrosion.',
    ],
  },
  {
    nodeId: 'mmc-cmc',
    cards: [
      {
        title: 'Metal matrix composites',
        body: [
          'Typical MMC: **aluminum with SiC particles**, for brake rotors, pistons and electronic packaging.',
          '**More SiC → higher stiffness and wear resistance**, better strength when hot, but **lower ductility** and harder, costlier machining.',
          '**Cemented carbide** (WC in cobalt) is a particulate composite with a metal matrix: a **cermet**.',
        ],
      },
      {
        title: 'Ceramic matrix composites',
        body: [
          'CMCs aim to make ceramics **tough and damage tolerant**. The fiber–matrix interface is made deliberately **weak**, so cracks deflect along it and fibers **pull out**, absorbing energy.',
          '**SiC/SiC** CMCs run in jet engine hot sections hotter than nickel superalloys, at about one-third of the density.',
        ],
      },
      {
        title: 'Carbon–carbon and residual stress',
        body: [
          '**Carbon–carbon** composites keep their strength above 2000 °C (brake discs, re-entry heat shields) but oxidize in hot air, so they need coatings.',
          'A larger **thermal expansion mismatch** between fiber and matrix leaves **larger residual stresses** after cooling from processing.',
        ],
      },
    ],
    keyPoints: [
      'Al–SiC MMCs: stiffer and more wear resistant, but less ductile and hard to machine.',
      'WC–Co is a cermet.',
      'CMCs use weak interfaces for crack deflection and fiber pull-out.',
      'SiC/SiC CMCs beat superalloys in temperature at a third of the density.',
      'Expansion mismatch causes residual stresses.',
    ],
  },
]
