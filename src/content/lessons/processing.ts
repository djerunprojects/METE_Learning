import type { SkillLesson } from '../types'

// Disciplines · Processing & Manufacturing lessons. Sources: Kalpakjian & Schmid; Campbell, Castings;
// Kou, Welding Metallurgy; German, Powder Metallurgy Science; DebRoy et al. (2018).

export const processingLessons: SkillLesson[] = [
  {
    nodeId: 'solidification-casting',
    cards: [
      {
        title: 'How fast does a casting freeze?',
        body: [
          'Heat leaves through the surface, so solidification time depends on the **volume-to-surface ratio V/A**. **Thinner sections freeze much faster**: with n ≈ 2, halving V/A cuts the time to about a quarter.',
          'A **riser** must have a **larger V/A** than the section it feeds, so it stays liquid longest and can supply metal as the casting shrinks.',
        ],
        formula: 'chvorinov',
      },
      {
        title: 'Grain structure in castings',
        body: [
          '- **Chill zone**: fine grains at the cold mold wall, where undercooling is high and nucleation sites are plentiful.',
          '- **Columnar zone**: grains growing inward from the wall.',
          '- Sometimes a central **equiaxed zone**.',
          'Metals often freeze as tree-like **dendrites**. **Faster cooling → finer dendrite arm spacing** and better properties. Slow solid diffusion leaves **microsegregation** (coring), removed by a homogenization anneal.',
        ],
      },
      {
        title: 'Porosity and processes',
        body: [
          '- **Shrinkage porosity**: most metals shrink on freezing, and isolated liquid pockets cannot be fed. Fix with risers, chills and good gating.',
          '- **Gas porosity**: e.g. **hydrogen** in aluminum, rejected because the solid dissolves far less. Fix by degassing the melt.',
          'Processes: **sand** (large, low volume, rough), **die** (high-volume thin Al/Zn parts), **investment** (complex precise parts such as turbine blades), **continuous** (steel slabs and billets).',
        ],
      },
    ],
    keyPoints: [
      'Solidification time grows with (V/A)²: thin sections freeze fast.',
      'Risers need a larger V/A than the casting to feed shrinkage.',
      'Chill zone → columnar zone → equiaxed center.',
      'Faster cooling → finer dendrites; coring is removed by homogenizing.',
      'Shrinkage porosity needs feeding; gas porosity needs degassing.',
    ],
  },
  {
    nodeId: 'forming',
    cards: [
      {
        title: 'Hot vs cold working',
        body: [
          '**Hot working** is done **above the recrystallization temperature**: the metal recrystallizes as it deforms, the flow stress is low and large shape changes are possible, but surfaces scale and dimensions are less precise.',
          '**Cold working** is done below it: better **surface finish and tolerances** and extra strength from strain hardening, but ductility is used up. **Process anneals** restore it between passes.',
        ],
      },
      {
        title: 'Forming processes',
        body: [
          '- **Rolling**: thickness reduced between rotating rolls.',
          '- **Forging**: shaped by blows or a press between dies.',
          '- **Extrusion**: pushed through a die for a constant cross-section.',
          '- **Wire drawing**: pulled through a die to reduce diameter.',
          'Forging refines grains, closes porosity and makes grain flow follow the part’s contours, so forged parts such as crankshafts are tough.',
        ],
      },
      {
        title: 'Springback',
        body: [
          'After bending, the elastic part of the deformation recovers and the bend opens slightly: **springback**.',
          'Springback grows with **yield strength ÷ elastic modulus**, so high-strength steels spring back more. Dies overbend to compensate.',
        ],
      },
    ],
    keyPoints: [
      'Hot working above recrystallization: low forces, scale, poorer tolerances.',
      'Cold working: good finish and strength, but ductility is used up.',
      'Rolling, forging, extrusion and drawing shape metal without removing material.',
      'Forging gives tough parts with favorable grain flow.',
      'Higher yield strength (same E) → more springback.',
    ],
  },
  {
    nodeId: 'welding-joining',
    cards: [
      {
        title: 'Zones of a fusion weld',
        body: [
          '- **Fusion zone**: melted and resolidified, like a small casting with columnar grains.',
          '- **HAZ**: not melted, but changed by the heat (grain growth, phase changes, recrystallization or overaging).',
          'In cold-worked or age-hardened **aluminum**, the HAZ is usually **softer** than the base metal.',
        ],
      },
      {
        title: 'Cracking in steel welds',
        body: [
          'In hardenable steels the HAZ is quenched by the cold surroundings and can form **brittle martensite**. With hydrogen and residual stress, it can crack (**hydrogen-induced cold cracking**).',
          'A higher **carbon equivalent** means higher hardenability and **greater cracking risk**.',
          'Remedies: **preheat** (slower cooling, hydrogen escapes) and **dry, low-hydrogen electrodes**. **Shielding gas** keeps oxygen and nitrogen out of the molten pool.',
        ],
      },
      {
        title: 'Joining processes',
        body: [
          '- **TIG**: non-consumable tungsten electrode with inert gas.',
          '- **MIG**: continuously fed wire electrode with shielding gas.',
          '- **Brazing**: filler melts **above 450 °C**; base metal does **not** melt.',
          '- **Soldering**: filler melts **below 450 °C**; base metal does not melt.',
        ],
      },
    ],
    keyPoints: [
      'Fusion zone = small casting; HAZ = heat-changed base metal.',
      'Aluminum HAZ softens; steel HAZ can form brittle martensite.',
      'Higher carbon equivalent → higher cracking risk; preheat and low-hydrogen practice help.',
      'Shielding gas protects the molten pool from air.',
      'Brazing (>450 °C) and soldering (<450 °C) do not melt the base metal.',
    ],
  },
  {
    nodeId: 'powder-metallurgy',
    cards: [
      {
        title: 'The powder route',
        body: [
          '**Make powder → blend → compact → sinter.**',
          'Gas atomization gives **spherical** powders; water atomization gives irregular ones that press better.',
          'Pressing gives a fragile **green compact**, held by interlocked particles. **Higher compaction pressure → higher green density.** Sintering below the melting point bonds the particles; **higher temperature → less porosity**.',
        ],
      },
      {
        title: 'Why use powder metallurgy?',
        body: [
          '- **Near-net shapes** with little machining or scrap (e.g. gears).',
          '- Materials that are hard to melt or cast: tungsten, **cemented carbides** (WC–Co, made by **liquid-phase sintering** where cobalt melts and wets the carbide).',
          '- **Controlled porosity**: oil-filled self-lubricating bronze bearings.',
        ],
      },
      {
        title: 'Porosity and HIP',
        body: [
          'Residual pores reduce load-bearing area and start fatigue cracks, so **more porosity → lower fatigue strength**.',
          '**HIP** applies high temperature and uniform gas pressure to close internal pores. It is used for powder parts, castings and 3D-printed parts.',
        ],
      },
    ],
    keyPoints: [
      'Make powder → blend → compact → sinter.',
      'Higher pressure → denser green compact; higher sintering temperature → less porosity.',
      'Powder metallurgy gives near-net shapes, carbides and controlled porosity.',
      'Porosity lowers fatigue strength.',
      'HIP closes internal pores.',
    ],
  },
  {
    nodeId: 'additive-manufacturing',
    cards: [
      {
        title: 'Metal AM processes',
        body: [
          '- **LPBF**: a laser melts each thin powder layer.',
          '- **Electron beam powder bed fusion**: in vacuum, with a preheated bed.',
          '- **Directed energy deposition**: powder or wire fed into a melt pool; also used for repair.',
          '- **Binder jetting**: binder glues powder, then the part is sintered.',
          'AM excels at **complex shapes** (lattices, internal cooling channels) and low volumes, without dedicated tooling.',
        ],
      },
      {
        title: 'Microstructure and porosity',
        body: [
          'Tiny melt pools cool very fast, giving **very fine microstructures**. Grains often grow as **columns along the build direction**, making properties **anisotropic**.',
          '- **Lack-of-fusion pores**: **too little energy**; irregular, with unmelted powder. More laser power (toward the optimum) reduces them.',
          '- **Keyhole pores**: **too much energy**; a deep vapor cavity collapses and traps gas.',
        ],
      },
      {
        title: 'Post-processing',
        body: [
          'Repeated heating and cooling of layers leaves **residual stresses** that can warp or crack parts, so supports and **stress-relief heat treatments** are used.',
          'Critical parts are often given **HIP** to close internal pores and improve fatigue life, and their surfaces are machined.',
        ],
      },
    ],
    keyPoints: [
      'LPBF melts powder layer by layer; directed energy deposition also repairs parts.',
      'Fast cooling → fine microstructure; columnar grains → anisotropy.',
      'Too little energy → lack-of-fusion pores; too much → keyhole pores.',
      'Residual stresses need supports and stress relief.',
      'HIP improves fatigue life of AM parts.',
    ],
  },
]
