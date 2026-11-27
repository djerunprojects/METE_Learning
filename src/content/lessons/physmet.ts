import type { SkillLesson } from '../types'

// Disciplines · Physical Metallurgy lessons. Sources: Callister & Rethwisch ch. 7, 10, 11; Askeland ch. 8, 11–14;
// Polmear, Light Alloys; Krauss, Steels.

export const physmetLessons: SkillLesson[] = [
  {
    nodeId: 'strengthening-mechanisms',
    cards: [
      {
        title: 'One idea behind all strengthening',
        body: [
          'Metals deform by **dislocation motion**, so every strengthening method adds **obstacles** to dislocations:',
          '- **Grain refinement**: more grain boundaries (e.g. inoculants in castings).',
          '- **Solid-solution strengthening**: dissolved atoms (e.g. zinc in copper = brass).',
          '- **Strain hardening**: more dislocations that tangle (e.g. cold drawing wire).',
          '- **Precipitation hardening**: fine particles (e.g. aging Al–Cu).',
        ],
      },
      {
        title: 'Solid-solution strengthening',
        body: [
          'A solute atom of a different size **distorts the lattice** around it. These strain fields interact with the strain fields of dislocations and pin them.',
          'So **more solute → higher strength**, and a **bigger size mismatch** gives a stronger effect per atom.',
        ],
      },
      {
        title: 'Recovery and recrystallization',
        body: [
          'Annealing a cold-worked metal above its **recrystallization temperature** grows **new, strain-free grains**: strength drops and ductility returns. This **undoes strain hardening**, but solute atoms stay dissolved, so solid-solution strengthening remains.',
          'The recrystallization temperature is typically **0.3–0.5 T_m** (in kelvin), and it is **lower after more cold work**, because more stored energy drives it.',
          '"Hot" and "cold" working are relative to this temperature: for **lead**, room temperature is already hot working, so it barely strain hardens.',
        ],
      },
    ],
    keyPoints: [
      'All strengthening methods block dislocation motion.',
      'More solute and larger size mismatch → more solid-solution strengthening.',
      'Recrystallization erases strain hardening, not solid-solution strengthening.',
      'Recrystallization temperature ≈ 0.3–0.5 T_m, lower after heavy cold work.',
      'Hot vs cold working is defined relative to recrystallization, not room temperature.',
    ],
  },
  {
    nodeId: 'heat-treatment-steels',
    cards: [
      {
        title: 'The main heat treatments',
        body: [
          'All start by heating into the austenite field; the cooling decides the result.',
          '- **Full annealing** (furnace cool): soft, ductile, coarse pearlite.',
          '- **Normalizing** (air cool): refined grains, fine pearlite.',
          '- **Quenching** (water or oil): very hard, brittle **martensite**.',
          '- **Tempering** (reheat below 727 °C): makes martensite **tougher**.',
        ],
      },
      {
        title: 'Quench and temper',
        body: [
          'As-quenched martensite is very hard but brittle. **Tempering** lets trapped carbon form fine carbides and relieves internal stresses.',
          '**Higher tempering temperature → lower hardness but higher toughness and ductility.** The tempering temperature is chosen to hit the required balance.',
          'Martensite hardness depends mainly on **carbon content**, rising steeply up to about 0.6 wt% C.',
          'Quenching severity is a trade-off: water quenching cools faster than oil but raises the **risk of distortion and cracking**.',
        ],
      },
      {
        title: 'Hardenability',
        body: [
          '**Hardenability** is how easily, and how deep, a steel forms martensite on quenching. It is **not** the same as maximum hardness.',
          'In a thick plain carbon bar, the core cools slowly and forms pearlite or bainite, so it stays soft. **Alloying elements** (Cr, Mo, Ni) slow the diffusional transformations, so martensite forms deeper.',
          'Hardenability is measured with the **Jominy end-quench test**: one end of a bar is water-sprayed and hardness is measured along its length.',
        ],
        diagram: 'jominy',
      },
    ],
    keyPoints: [
      'Annealing → soft; normalizing → fine pearlite; quenching → martensite; tempering → toughness.',
      'Higher tempering temperature: less hard, more tough.',
      'Martensite hardness is set by carbon content.',
      'Hardenability = depth of hardening; alloying raises it.',
      'Jominy end-quench test measures hardenability.',
    ],
  },
  {
    nodeId: 'nonferrous-alloys',
    cards: [
      {
        title: 'The main non-ferrous families',
        body: [
          '- **Aluminum** (2.7 g/cm³): light, corrosion resistant thanks to a thin, self-healing Al₂O₃ film.',
          '- **Titanium** (4.5 g/cm³): high strength-to-weight, corrosion resistant, biocompatible, usable to about 500 °C.',
          '- **Copper**: highest electrical and thermal conductivity of common metals. Even small amounts of solute lower it.',
          '- **Nickel superalloys**: strength and creep resistance at very high temperature.',
          '- **Magnesium** (1.74 g/cm³): the lightest structural metal, but HCP (limited cold formability) and corrosion-prone.',
        ],
      },
      {
        title: 'Aluminum alloy series',
        body: [
          '- **Heat-treatable** (precipitation hardened): **2xxx** (Al–Cu), **6xxx** (Al–Mg–Si), **7xxx** (Al–Zn–Mg).',
          '- **Non-heat-treatable** (strengthened by cold work and solid solution): 1xxx (pure Al), 3xxx (Al–Mn), 5xxx (Al–Mg).',
          '**Pure aluminum cannot be precipitation hardened**: there is nothing to precipitate.',
        ],
      },
      {
        title: 'Copper and titanium alloys',
        body: [
          '**Brass** is Cu–Zn and **bronze** is Cu–Sn. In α-brass, more zinc (up to about 30 wt%) raises strength, and unusually ductility too.',
          'In titanium, **aluminum stabilizes HCP α** and **vanadium stabilizes BCC β**. Ti-6Al-4V is an α + β alloy.',
          'Titanium is chosen over aluminum when parts run **hotter** (aluminum alloys weaken above about 150–200 °C), even though titanium is denser and costlier.',
        ],
      },
    ],
    keyPoints: [
      'Al: light and corrosion resistant; Ti: strong, light, hot-capable; Cu: conductive; Ni: superalloys.',
      'Heat-treatable Al series: 2xxx, 6xxx, 7xxx. Pure Al cannot be age hardened.',
      'Brass = Cu–Zn; bronze = Cu–Sn.',
      'In Ti alloys, Al stabilizes α and V stabilizes β.',
      'Solutes lower copper’s conductivity.',
    ],
  },
  {
    nodeId: 'precipitation-hardening',
    cards: [
      {
        title: 'Three steps',
        body: [
          '1. **Solution treat**: heat to dissolve the alloying elements into a single phase.',
          '2. **Quench**: trap them in a **supersaturated** solid solution, before coarse particles can form.',
          '3. **Age**: hold at a moderate temperature so **fine precipitates** form.',
          'This needs a solubility that **drops strongly with temperature** (a sloping solvus), as in Al–Cu.',
        ],
      },
      {
        title: 'The aging curve',
        body: [
          '- **Underaged**: precipitates still too small or too few; hardness rising.',
          '- **Peak aged**: very fine, closely spaced, often coherent precipitates; **maximum hardness** (the T6 temper).',
          '- **Overaged**: precipitates **coarsen** and spread apart, so dislocations bow between them easily; hardness falls.',
        ],
        diagram: 'aging_curve',
        highlight: 'peak',
      },
      {
        title: 'Effect of aging temperature',
        body: [
          'Precipitation is diffusion controlled, so a **higher aging temperature reaches peak sooner**, but the **peak is lower** (fewer, coarser precipitates).',
          'Some alloys age even at room temperature (**natural aging**). That is why some 2xxx rivets are kept in a freezer: they stay soft enough to install, then harden in service.',
        ],
      },
    ],
    keyPoints: [
      'Solution treat → quench → age.',
      'Needs solubility that falls strongly with temperature.',
      'Underaged → peak aged (max hardness) → overaged (coarse precipitates, softer).',
      'Higher aging temperature: faster but lower peak.',
      'Natural aging happens at room temperature; cold storage delays it.',
    ],
  },
]
