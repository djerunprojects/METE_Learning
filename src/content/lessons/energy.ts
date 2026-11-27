import type { SkillLesson } from '../types'

// Applications · Energy Materials lessons. Sources: Huggins, Advanced Batteries; O'Hayre et al., Fuel Cell Fundamentals;
// Green, Solar Cells; Was, Fundamentals of Radiation Materials Science.

export const energyLessons: SkillLesson[] = [
  {
    nodeId: 'battery-materials',
    cards: [
      {
        title: 'How a Li-ion cell works',
        body: [
          'Li⁺ ions **shuttle between two host electrodes** (intercalation) through the electrolyte, while electrons flow through the outside circuit.',
          '- **Anode**: graphite (up to LiC₆).',
          '- **Cathode**: layered oxides such as **NMC**, or **LFP**.',
          '- **Electrolyte**: LiPF₆ in organic carbonates.',
          '- **Separator**: porous polyethylene or polypropylene film.',
        ],
      },
      {
        title: 'Aging and failure',
        body: [
          '- The **SEI** forms on the anode in the first cycles; its slow growth consumes lithium and causes **capacity fade**.',
          '- **Fast charging in the cold** can plate **lithium metal dendrites** that may short the cell.',
          '- **Heat** speeds up side reactions, so storage at high temperature and full charge ages cells fastest.',
          '- **Thermal runaway** is a self-heating chain reaction. **LFP** is safer because its strong P–O bonds do not release oxygen easily, at the cost of lower voltage (about 3.2 V).',
        ],
      },
      {
        title: 'Next-generation materials',
        body: [
          '**Silicon anodes** store about ten times more lithium than graphite but **swell about 300%**, cracking particles and re-forming the SEI.',
          '**Solid-state electrolytes** replace flammable liquids and may allow lithium metal anodes; the challenges are conductivity, interfaces and dendrites along grain boundaries.',
        ],
      },
    ],
    keyPoints: [
      'Li⁺ intercalates between graphite anode and oxide or phosphate cathode.',
      'SEI growth causes capacity fade.',
      'Cold fast charging risks lithium plating and dendrites.',
      'Heat and full charge accelerate aging; LFP is safer but lower voltage.',
      'Silicon anodes swell; solid electrolytes aim for safety and energy density.',
    ],
  },
  {
    nodeId: 'fuel-cells-hydrogen',
    cards: [
      {
        title: 'Two main fuel cells',
        body: [
          '- **PEMFC**: proton-conducting polymer membrane (e.g. Nafion), about **80 °C**. Needs **platinum** catalysts and a **hydrated** membrane. Suits vehicles.',
          '- **SOFC**: **YSZ** ceramic conducting oxide ions, about **600–1000 °C**. Cheap Ni-based catalysts, fuel flexible, useful waste heat, but slow start-up. Suits stationary power.',
          'Running on pure hydrogen, the only direct product is **water** (plus heat).',
        ],
      },
      {
        title: 'How YSZ conducts',
        body: [
          'Replacing Zr⁴⁺ with **Y³⁺** creates **oxygen vacancies** for charge balance; oxide ions hop through them.',
          'Hopping is thermally activated, so **conductivity rises with temperature**, which is why SOFCs run hot.',
          'Ceramic layers with mismatched **thermal expansion** crack and delaminate under thermal cycling.',
        ],
      },
      {
        title: 'Storing hydrogen',
        body: [
          '- **Compressed gas** (about 700 bar): heavy, carbon-fiber-wrapped vessels.',
          '- **Liquid** at about 20 K: boil-off.',
          '- **Metal hydrides**: heavy, need heat to release hydrogen.',
          'Hydrogen causes **embrittlement** of high-strength steels, so lower-strength steels, austenitic stainless steel or aluminum liners are preferred.',
        ],
      },
    ],
    keyPoints: [
      'PEMFC: polymer membrane, ~80 °C, platinum, needs water.',
      'SOFC: YSZ, 600–1000 °C, no platinum, fuel flexible, slow start-up.',
      'Y³⁺ creates oxygen vacancies that carry oxide ions in YSZ.',
      'Hydrogen storage: compressed, liquid or hydrides, each with trade-offs.',
      'Hydrogen embrittles high-strength steels.',
    ],
  },
  {
    nodeId: 'photovoltaics',
    cards: [
      {
        title: 'How a solar cell works',
        body: [
          'A photon with energy above the **band gap** excites an electron, creating an electron–hole pair. The **p–n junction** field sends them to opposite contacts, driving current.',
          'Photons **below the gap** are wasted; energy above the gap is lost as heat. This sets the **Shockley–Queisser limit**: about **33%** for a single junction. **Multi-junction** cells exceed it.',
        ],
      },
      {
        title: 'Materials',
        body: [
          '- **Silicon** (gap ≈ 1.1 eV) has an **indirect** gap and absorbs weakly, so wafers are 100–200 µm thick.',
          '- Thin films such as **CdTe** have a **direct** gap and absorb in a few micrometers.',
          '- **Perovskites** reached over 25% efficiency quickly but struggle with **long-term stability**.',
          '- **Satellites** use multi-junction compound semiconductor cells, where performance matters more than cost.',
        ],
      },
      {
        title: 'Losing and gaining efficiency',
        body: [
          '- **Defects and grain boundaries** are recombination centers, so monocrystalline cells beat multicrystalline ones.',
          '- **Heat lowers efficiency** (about 0.4% of power per °C for silicon).',
          '- **Texturing and anti-reflection coatings** cut reflection from over 30% to a few percent.',
          'In the field: keep panels **clean, cool and unshaded**.',
        ],
      },
    ],
    keyPoints: [
      'Photons above the gap create carriers; the junction separates them.',
      'Single-junction limit about 33%; multi-junction cells go higher.',
      'Silicon absorbs weakly (indirect gap); thin films absorb strongly.',
      'Defects and heat lower efficiency.',
      'Texturing and anti-reflection coatings trap more light.',
    ],
  },
  {
    nodeId: 'nuclear-materials',
    cards: [
      {
        title: 'Radiation damage',
        body: [
          'A fast neutron knocks atoms off their sites, creating **cascades of vacancies and interstitials**. Damage is counted in **displacements per atom (dpa)**.',
          'Defect clusters block dislocations: **irradiation hardening**. Strength rises, but **ductility falls** and the **DBTT of ferritic steels rises**.',
          'Copper and phosphorus impurities make vessel steel embrittlement worse, so they are now limited.',
        ],
      },
      {
        title: 'Swelling and helium',
        body: [
          '- **Void swelling**: vacancies cluster into voids, swelling some steels by several percent; worst in **austenitic** stainless steels. Ferritic–martensitic steels swell much less.',
          '- **Helium** from transmutation collects in bubbles at grain boundaries and embrittles metals.',
          '**ODS steels** use fine oxide nanoparticles to trap helium and defects.',
        ],
      },
      {
        title: 'Fuel and cladding',
        body: [
          '- **UO₂ fuel**: melting point about 2800 °C, chemically stable, holds fission products. But its **low thermal conductivity** (falling further with burnup) makes pellet centers **very hot**.',
          '- **Zirconium cladding**: absorbs very few neutrons and resists hot water. At very high temperatures it reacts with steam to make hydrogen, as at Fukushima in 2011.',
        ],
        formula: 'fourier',
      },
    ],
    keyPoints: [
      'Neutrons create vacancy–interstitial cascades (dpa).',
      'Irradiation hardens steel, lowers ductility and raises the DBTT.',
      'Austenitic steels swell most; ODS steels resist damage.',
      'Helium bubbles embrittle grain boundaries.',
      'UO₂ fuel has low conductivity; zirconium cladding absorbs few neutrons.',
    ],
  },
]
