import type { SkillLesson } from '../types'

// Disciplines · Extractive Metallurgy lessons. Sources: Gilchrist, Extraction Metallurgy; Wills & Finch;
// Gaskell (Ellingham diagrams).

export const extractiveLessons: SkillLesson[] = [
  {
    nodeId: 'mineral-processing',
    cards: [
      {
        title: 'From ore to concentrate',
        body: [
          'Ores often contain only a few percent of valuable mineral; the rest is worthless **gangue**. **Mineral processing** (beneficiation) separates them into a richer **concentrate**, so far less material must be smelted or leached.',
          'First comes **comminution**: crushing and grinding until the mineral grains are freed (**liberated**) from the rock.',
        ],
      },
      {
        title: 'Grinding: the costly step',
        body: [
          'Grinding is usually the **most energy-intensive** step in a plant. **Finer grinding → better liberation**, but **energy use rises steeply**, and very fine particles become hard to recover.',
          'Plants grind only as fine as needed.',
        ],
      },
      {
        title: 'Separation methods',
        body: [
          'Each method uses a property that differs between mineral and gangue:',
          '- **Froth flotation**: surface wettability. **Collectors** make the target mineral water-repellent so it sticks to air bubbles and floats.',
          '- **Magnetic separation**: magnetic susceptibility (works well for magnetite).',
          '- **Gravity separation** (jigs, spirals): density.',
          '- **Electrostatic separation**: electrical conductivity.',
        ],
      },
    ],
    keyPoints: [
      'Beneficiation separates valuable minerals from gangue into a concentrate.',
      'Comminution liberates grains; grinding uses the most energy.',
      'Finer grinding: better liberation, much more energy.',
      'Flotation uses surface chemistry; collectors make minerals hydrophobic.',
      'Magnetic, gravity and electrostatic methods use other property differences.',
    ],
  },
  {
    nodeId: 'pyrometallurgy',
    cards: [
      {
        title: 'Reading an Ellingham diagram',
        body: [
          'The Ellingham diagram plots **ΔG° for forming oxides** against temperature. **Lower lines = more stable oxides** (e.g. Al₂O₃, CaO), harder to reduce.',
          'A metal can reduce another metal’s oxide if **its own oxide line lies lower** at that temperature. Aluminum reduces Cr₂O₃ in the thermite process.',
          'Most metal oxide lines **slope upward**: oxygen gas is consumed (ΔS° < 0), so oxides become **less stable as temperature rises**.',
        ],
        formula: 'gibbs-free-energy',
      },
      {
        title: 'Carbon as a reducing agent',
        body: [
          'The line for **2C + O₂ → 2CO** slopes **downward**, because the reaction produces more gas molecules (ΔS° > 0). At high temperature it crosses below many metal oxide lines, so **carbon can reduce them**, as in the blast furnace.',
          'A gas with a **higher CO/CO₂ ratio** is more strongly reducing.',
        ],
      },
      {
        title: 'Smelting practice',
        body: [
          '- **Roasting** heats sulfides in air to make oxides, releasing SO₂ (captured as **sulfuric acid**).',
          '- A **flux** (e.g. limestone) combines with gangue to form a fluid, low-melting **slag**, which **floats** on the denser metal.',
          '- **Copper**: smelting gives a Cu–Fe sulfide **matte**, which a converter turns into blister copper (about 98–99% Cu).',
        ],
      },
    ],
    keyPoints: [
      'Lower Ellingham line = more stable oxide; a metal reduces oxides whose lines lie above its own.',
      'Metal oxides get less stable with temperature (lines slope up).',
      'The C → CO line slopes down, so carbon reduces many oxides when hot.',
      'Higher CO/CO₂ → stronger reduction.',
      'Fluxes make slag; slag floats on metal; copper goes via matte.',
    ],
  },
  {
    nodeId: 'hydro-electrometallurgy',
    cards: [
      {
        title: 'Hydrometallurgy',
        body: [
          '**Leaching** dissolves the metal from the ore into a water-based solution: sulfuric acid for copper oxide ores, **cyanide** for gold.',
          '**Heap leaching** sprays solution over crushed ore piled on a lined pad for weeks or months. With no grinding or smelting, even ores well below 1% metal can pay.',
          '**Solvent extraction** moves the metal selectively into an organic liquid, then strips it into a clean, concentrated electrolyte.',
        ],
      },
      {
        title: 'Electrowinning and electrorefining',
        body: [
          '- **Electrowinning**: metal plates onto a cathode **from the solution**; the anode is inert.',
          '- **Electrorefining**: an **impure metal anode dissolves** and pure metal plates on the cathode. For copper, gold and silver collect as valuable **anode slime**; cathodes reach about 99.99% Cu.',
          'The mass deposited follows **Faraday’s law**: more current or time → more metal; more electrons per ion (higher n) → less mass per coulomb. Current efficiency below 100% means side reactions such as hydrogen evolution.',
        ],
        formula: 'faraday',
      },
      {
        title: 'Aluminum: the Hall–Héroult process',
        body: [
          'Al₂O₃ is so stable (near the bottom of the Ellingham diagram) that carbon reduction is impractical.',
          'Instead, alumina is dissolved in **molten cryolite** and **electrolyzed at about 960 °C**, far below alumina’s own melting point (over 2000 °C).',
        ],
      },
    ],
    keyPoints: [
      'Leaching dissolves metal; heap leaching suits low-grade ores.',
      'Solvent extraction purifies and concentrates the solution.',
      'Electrowinning: metal from solution, inert anode. Electrorefining: impure anode dissolves.',
      "Faraday's law: mass ∝ current × time; higher valence → less mass.",
      'Aluminum is made by electrolysis of alumina in molten cryolite.',
    ],
  },
  {
    nodeId: 'iron-steelmaking',
    cards: [
      {
        title: 'The blast furnace',
        body: [
          'Hot air burns **coke** to **CO**, which rises and reduces the iron oxide on its way down. Coke also gives heat and supports the charge.',
          '**Limestone** forms CaO, a flux that turns silica and alumina gangue into slag and picks up sulfur.',
          'The product, **pig iron**, has about **4 wt% C** plus Si, Mn, S and P, so it is brittle and must be refined.',
        ],
      },
      {
        title: 'Making steel',
        body: [
          '- **BOF**: pure oxygen is blown in to burn off excess C, Si, Mn and P. The reactions supply their own heat.',
          '- **EAF**: electric arcs melt **steel scrap** (often with DRI). It emits much less CO₂ per tonne than the blast furnace–BOF route.',
          '**Deoxidation** ("killing") with Al or Si removes dissolved oxygen, preventing gas porosity and oxide inclusions.',
        ],
      },
      {
        title: 'Clean steel and casting',
        body: [
          '- **Sulfur** causes **hot shortness** (cracking during hot working); **phosphorus** causes **cold shortness** (brittleness).',
          '- **Vacuum degassing** removes hydrogen and nitrogen; hydrogen can cause internal cracks (flakes). **Argon stirring** helps inclusions float into the slag.',
          '- **Continuous casting** solidifies steel directly into slabs and billets, with higher yield and quality than ingot casting.',
        ],
      },
    ],
    keyPoints: [
      'Blast furnace: CO from coke reduces iron oxide; limestone makes slag.',
      'Pig iron has about 4% C and must be refined.',
      'BOF blows oxygen; EAF melts scrap with far lower CO₂.',
      'Killing removes oxygen; vacuum degassing removes hydrogen and nitrogen.',
      'S → hot shortness, P → cold shortness; continuous casting makes slabs and billets.',
    ],
  },
]
