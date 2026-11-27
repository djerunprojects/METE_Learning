import type { SkillLesson } from '../types'

// Core · Structure lessons. Sources: Callister & Rethwisch ch. 2–4, 7, 9; Askeland ch. 2–4.

export const structureLessons: SkillLesson[] = [
  {
    nodeId: 'atomic-bonding',
    cards: [
      {
        title: 'Primary and secondary bonds',
        body: [
          'Atoms bond to lower their energy. There are three strong **primary bonds** (roughly 1–10 eV per bond):',
          '- **Ionic**: one atom gives electrons to another, and the ions attract (NaCl, MgO). Non-directional.',
          '- **Covalent**: neighboring atoms share electron pairs (diamond, silicon). **Directional**, at fixed angles.',
          '- **Metallic**: valence electrons form an electron sea around positive ion cores (Al, Cu). Non-directional.',
          '**Secondary bonds** (van der Waals, hydrogen bonds) are much weaker, about 0.1 eV or less. They hold polymer chains and molecules to each other.',
        ],
      },
      {
        title: 'The energy–separation curve',
        body: [
          'Two atoms attract at long range and repel when pushed too close. The balance gives an energy well with its minimum at the **equilibrium spacing r₀**. The depth of the well is the **bonding energy E₀**.',
          '- A **deeper well** (stronger bonds) means a **higher melting point**: tungsten melts at about 3410 °C.',
          '- The **slope of the force–separation curve at r₀** sets the **elastic modulus**: steeper means stiffer.',
          '- The well is asymmetric, so atoms move farther apart as they vibrate more: **thermal expansion**. Deep, narrow wells expand less.',
        ],
      },
      {
        title: 'From bonds to properties',
        body: [
          '- **Metals** are ductile because non-directional metallic bonds let planes of atoms slip without breaking the bonding, and free electrons conduct.',
          '- **Ionic crystals** are brittle because slip would push ions of the same charge together, which is strongly resisted. Ionic bonds are not weak; they are often as strong as metallic bonds.',
          '- **Covalent solids** such as diamond are hard because their bonds are strong and directional.',
          '- **Polyethylene** softens easily: its C–C chains are strong, but the chains only need to slide past each other, held only by weak van der Waals forces.',
        ],
      },
    ],
    keyPoints: [
      'Primary bonds: ionic, covalent (directional) and metallic; secondary bonds are much weaker.',
      'Deeper energy well → higher melting point.',
      'Steeper force–separation slope at r₀ → higher elastic modulus.',
      'Stronger bonds → lower thermal expansion.',
      'Bond type explains ductility, brittleness and conductivity.',
    ],
  },
  {
    nodeId: 'crystal-structures',
    cards: [
      {
        title: 'Common metal crystal structures',
        body: [
          'Most metals adopt one of a few simple structures. The **coordination number (CN)** counts nearest neighbors; the **atomic packing factor (APF)** is the fraction of volume filled by atoms.',
          '- **SC**: CN = 6, APF ≈ 0.52, 1 atom per cell (rare in metals).',
          '- **BCC**: CN = 8, APF ≈ 0.68, 2 atoms per cell. Atoms touch along the **body diagonal**. Examples: α-iron, Cr, Mo, W.',
          '- **FCC**: CN = 12, APF ≈ 0.74, 4 atoms per cell. Atoms touch along the **face diagonal**. Examples: Cu, Al, Ni, Ag, Au.',
          '- **HCP**: CN = 12, APF ≈ 0.74. Examples: Mg, Zn, α-titanium.',
        ],
      },
      {
        title: 'Close packing and slip',
        body: [
          'FCC and HCP are both stacks of close-packed layers with the same APF. Only the **stacking sequence** differs: **A-B-C-A-B-C…** for FCC and **A-B-A-B…** for HCP.',
          'This matters for ductility. FCC metals have **12 slip systems** on close-packed {111} planes, so they deform easily in any direction. HCP metals have few slip systems that work at room temperature, so they are less ductile.',
        ],
      },
      {
        title: 'Density from the crystal structure',
        body: [
          'Because we know how many atoms sit in each unit cell and how big the cell is, density follows directly. For cubic cells V_C = a³.',
          '- **Heavier atoms** (larger A) in the same cell → **higher density**.',
          '- A **larger lattice parameter** a (same n and A) → **lower density**.',
        ],
        formula: 'theoretical-density',
      },
      {
        title: 'Polymorphism and anisotropy',
        body: [
          '**Polymorphism** (called **allotropy** for elements) means one substance can have several crystal structures. Iron is BCC at room temperature and FCC from 912 °C to 1394 °C. This change is the basis of steel heat treatment.',
          'A single crystal is **anisotropic**: properties such as the elastic modulus depend on direction. A polycrystal with randomly oriented grains averages these out and behaves nearly **isotropically**, unless processing gives it a texture.',
        ],
      },
    ],
    keyPoints: [
      'BCC: CN 8, APF 0.68; FCC and HCP: CN 12, APF 0.74.',
      'FCC (A-B-C…) and HCP (A-B…) differ only in the stacking of close-packed layers.',
      'FCC has many slip systems, so FCC metals are typically very ductile.',
      'Density rises with atomic weight and falls with lattice parameter.',
      'Iron changes from BCC to FCC at 912 °C (polymorphism).',
    ],
  },
  {
    nodeId: 'defects-dislocations',
    cards: [
      {
        title: 'Point defects and vacancies',
        body: [
          'Real crystals always contain defects, classified by dimension: **point** (vacancies, interstitials), **line** (dislocations), **interfacial** (grain boundaries) and **volume** (pores, inclusions).',
          '**Vacancies**, empty lattice sites, are present at equilibrium. Their number rises **exponentially with temperature** and falls when the vacancy formation energy is higher:',
        ],
        formula: 'vacancy-concentration',
      },
      {
        title: 'Solid solutions',
        body: [
          'Alloying atoms can dissolve in a host crystal in two ways:',
          '- **Substitutional**: solute atoms replace host atoms on lattice sites (Ni in Cu).',
          '- **Interstitial**: small atoms sit in the gaps between host atoms (C in Fe).',
          'The **Hume-Rothery rules** favor wide substitutional solubility: atomic radii within about **15%**, the same crystal structure, and similar electronegativity and valence.',
          'FCC iron (austenite) has larger interstitial holes than BCC iron (ferrite), so it dissolves up to **2.14 wt% C**, while ferrite dissolves only about **0.022 wt%**.',
        ],
      },
      {
        title: 'Dislocations make metals ductile',
        body: [
          'A **dislocation** is a line defect. In an **edge dislocation**, the Burgers vector is **perpendicular** to the line; in a **screw dislocation** it is **parallel**.',
          'Plastic deformation happens mainly by **dislocation motion**: the crystal slips one row of bonds at a time instead of a whole plane at once. That is why real metals yield far below the strength of a perfect crystal.',
          'Slip prefers the **most densely packed planes and directions**, such as {111}<110> in FCC.',
        ],
      },
      {
        title: 'When does slip start?',
        body: [
          'A tensile stress produces a shear stress on each slip system that depends on its orientation. Slip begins on the system where this **resolved shear stress** first reaches the critical value.',
          'When the slip-plane normal is at 90° to the load (φ = 90°), cos φ = 0, so no shear acts on that plane.',
        ],
        formula: 'resolved-shear-stress',
      },
    ],
    keyPoints: [
      'Defects are point, line, interfacial or volume defects.',
      'Vacancy numbers grow exponentially with temperature.',
      'Solutes dissolve substitutionally or interstitially; the Hume-Rothery rules predict solubility.',
      'Edge dislocation: b ⊥ line; screw: b ∥ line.',
      'Plastic flow is dislocation motion, on close-packed planes and directions.',
    ],
  },
  {
    nodeId: 'microstructure-grains',
    cards: [
      {
        title: 'Phases and microstructure',
        body: [
          'A **phase** is a region with uniform structure and composition, such as ferrite or cementite in steel.',
          'The **microstructure** describes how phases and grains are arranged: their size, shape and distribution. A **two-phase** structure contains two phases, like the alternating ferrite and cementite plates in pearlite.',
          'Microstructure, not just composition, controls most mechanical properties.',
        ],
      },
      {
        title: 'Grain boundaries strengthen',
        body: [
          'Across a **grain boundary** the crystal orientation changes, so a dislocation cannot simply continue into the next grain. Dislocations pile up at boundaries, and more stress is needed to keep deforming the metal.',
          'This gives the **Hall–Petch** relation: **smaller grains → higher yield strength**.',
          'Grain refinement is the only common strengthening method that also **improves toughness**. At high temperature, however, boundaries can slide, so **coarse grains or single crystals resist creep better**.',
        ],
        formula: 'hall-petch',
      },
      {
        title: 'Controlling grain size',
        body: [
          '- **Faster cooling** during solidification gives more undercooling, so many more nuclei form → **finer grains**. Thin sections and chilled metal molds give finer grains than thick sections in sand.',
          '- Held at high temperature, grains **grow**, driven by reducing the total **grain boundary area** and its energy. Grain growth lowers strength.',
          'Grain boundaries are higher in energy and less ordered, so they are preferred sites for **diffusion, precipitation and corrosion**.',
        ],
      },
      {
        title: 'Seeing the grains',
        body: [
          'To view grains in an optical microscope, a sample is polished to a mirror finish and then **chemically etched**.',
          'The etchant attacks the higher-energy grain boundaries faster, creating tiny grooves that scatter light, so the boundaries appear as dark lines.',
        ],
      },
    ],
    keyPoints: [
      'A phase has uniform structure and composition; microstructure is how phases and grains are arranged.',
      'Smaller grains → higher yield strength (Hall–Petch) and better toughness.',
      'Faster cooling → finer grains; long hot holds → grain growth and lower strength.',
      'Coarse grains or single crystals resist creep better at high temperature.',
      'Etching reveals grain boundaries for optical microscopy.',
    ],
  },
]
