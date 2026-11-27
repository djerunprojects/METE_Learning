import type { SkillLesson } from '../types'

// Disciplines · Polymers lessons. Sources: Callister & Rethwisch ch. 14–15; Young & Lovell; Osswald & Menges.

export const polymersLessons: SkillLesson[] = [
  {
    nodeId: 'polymer-structure',
    cards: [
      {
        title: 'Chains and molecular weight',
        body: [
          'A polymer is a long chain of repeat units. The **degree of polymerization** is the average number of repeat units per chain.',
          '**Higher molecular weight → more entanglement → higher strength**, but the melt becomes harder to process.',
          'A **copolymer** has two or more different repeat units (e.g. styrene–butadiene rubber).',
        ],
      },
      {
        title: 'Chain architecture',
        body: [
          '- **Linear**: no branches; packs well.',
          '- **Branched**: side chains keep chains apart.',
          '- **Crosslinked**: chains joined at points by covalent bonds (**vulcanized rubber** uses sulfur crosslinks).',
          '- **Network**: dense 3D covalent network (cured epoxy).',
          '**More branching → lower crystallinity and density**: branched LDPE ≈ 0.92 g/cm³ vs nearly linear HDPE ≈ 0.96 g/cm³, which is also stiffer.',
        ],
      },
      {
        title: 'Crystallinity',
        body: [
          'Polymers are usually **semicrystalline**: folded-chain crystals in an amorphous matrix. They are never fully crystalline.',
          '**Regular chains crystallize**: isotactic polypropylene (side groups on one side) can crystallize; atactic (random) cannot.',
          '**More crystallinity → higher density** and usually higher stiffness and strength.',
        ],
      },
    ],
    keyPoints: [
      'Higher molecular weight → higher strength.',
      'Linear, branched, crosslinked and network architectures.',
      'More branching → lower crystallinity and density (LDPE vs HDPE).',
      'Polymers are semicrystalline at best; regular chains crystallize.',
      'Vulcanization crosslinks rubber with sulfur.',
    ],
  },
  {
    nodeId: 'polymer-thermal',
    cards: [
      {
        title: 'Glass transition and melting',
        body: [
          'Below the **glass transition temperature Tg**, chain segments are frozen: the polymer is **glassy** and rigid. Above Tg, segments move and it becomes **rubbery**.',
          'Only **crystalline regions melt** (at Tm). A fully amorphous polymer has only a Tg; semicrystalline polymers have both, with Tm > Tg.',
        ],
      },
      {
        title: 'The modulus–temperature curve',
        body: [
          '- **Glassy**: high modulus (a few GPa).',
          '- **Glass transition**: stiffness drops by orders of magnitude.',
          '- **Rubbery plateau**: entanglements or crosslinks give rubber elasticity.',
          '- **Viscous flow**: whole chains slide; the processing region. Crosslinked polymers stay on the plateau instead.',
        ],
        diagram: 'polymer_modulus',
        highlight: 'transition',
      },
      {
        title: 'What raises Tg',
        body: [
          'Anything that makes chain segments harder to move: **more crosslinks**, **bulky side groups** or a **stiff backbone**. Polyethylene’s Tg is about −100 °C; polystyrene’s is about 100 °C.',
          '**Thermoplastics** soften and can be remelted; **thermosets** are crosslinked and decompose instead of melting.',
          'Elastomers only work **above Tg**: cold O-rings that became glassy contributed to the 1986 Challenger disaster.',
        ],
      },
    ],
    keyPoints: [
      'Below Tg glassy, above Tg rubbery; only crystals have a Tm.',
      'Modulus: glassy → transition → rubbery plateau → viscous flow.',
      'Crosslinks, bulky side groups and stiff backbones raise Tg.',
      'Thermoplastics remelt; thermosets do not.',
      'Rubbers must be used above their Tg.',
    ],
  },
  {
    nodeId: 'viscoelasticity',
    cards: [
      {
        title: 'Part solid, part liquid',
        body: [
          '**Viscoelastic** materials respond partly like an elastic spring and partly like a viscous liquid, so behavior depends on **time, rate and temperature**.',
          '- **Creep**: strain keeps growing under constant load, even at room temperature.',
          '- **Stress relaxation**: at constant strain, stress falls over time (snap fits and gaskets lose clamping force).',
          'Silly Putty bounces (short times: elastic) but slowly flows (long times: viscous).',
        ],
      },
      {
        title: 'Time, rate and temperature',
        body: [
          '- **Higher temperature → lower relaxation modulus** at a given time.',
          '- **Faster loading → stiffer response**: less time for chains to relax.',
          '- **Time–temperature superposition**: raising temperature is like waiting longer, so short hot tests can predict long-term behavior.',
        ],
      },
      {
        title: 'Models and design',
        body: [
          'The **Maxwell model** (spring and dashpot in series) describes **stress relaxation**; the **Kelvin–Voigt model** (in parallel) describes delayed elastic creep.',
          '**Crosslinks** stop chains from flowing indefinitely, so creep levels off. Glass fibers carry load without creeping. Lower molecular weight means more creep.',
        ],
      },
    ],
    keyPoints: [
      'Viscoelastic = time-dependent mix of elastic and viscous behavior.',
      'Creep: strain grows under constant load; relaxation: stress falls at constant strain.',
      'Hotter → softer; faster loading → stiffer.',
      'Raising temperature is like waiting longer.',
      'Crosslinks and fibers reduce creep.',
    ],
  },
  {
    nodeId: 'polymer-processing',
    cards: [
      {
        title: 'Processes and products',
        body: [
          '- **Injection molding**: complex parts (caps, housings).',
          '- **Extrusion**: pipes, profiles, film.',
          '- **Blow molding**: hollow bottles.',
          '- **Thermoforming**: trays and cups from heated sheet.',
          '**Thermosets** must be shaped before or while they cure (compression molding, resin transfer molding).',
        ],
      },
      {
        title: 'Melt flow',
        body: [
          'Melt viscosity **falls with temperature** and **falls with shear rate** (**shear thinning**), which helps fill thin molds.',
          'Flow **orients chains**, making parts stronger along the flow direction (**anisotropic**) and sometimes causing warpage.',
          'Nylon and PET pellets are **dried** first: moisture would hydrolyze the chains in the hot melt.',
        ],
      },
      {
        title: 'Cooling, shrinkage and additives',
        body: [
          '**Semicrystalline** polymers shrink more on cooling than amorphous ones. Thick sections keep shrinking inside and cause **sink marks**; uniform walls and ribs avoid them.',
          'A **colder mold** (faster cooling) gives **lower crystallinity**.',
          '**Plasticizers** lower Tg and make polymers such as PVC flexible.',
        ],
      },
    ],
    keyPoints: [
      'Injection molding, extrusion, blow molding, thermoforming.',
      'Viscosity falls with temperature and shear rate.',
      'Flow orientation makes properties anisotropic.',
      'Semicrystalline polymers shrink more; faster cooling lowers crystallinity.',
      'Plasticizers lower Tg; dry hygroscopic polymers before molding.',
    ],
  },
]
