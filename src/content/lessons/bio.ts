import type { SkillLesson } from '../types'

// Applications · Biomaterials lessons. Sources: Ratner et al., Biomaterials Science; Park & Lakes; Hench (1991).

export const bioLessons: SkillLesson[] = [
  {
    nodeId: 'biocompatibility',
    cards: [
      {
        title: 'What biocompatible means',
        body: [
          'No material is completely inert in the body. **Biocompatible** means the material does its job with an **appropriate host response** in a specific application: what works in bone may fail in blood.',
          'Materials are often grouped by how tissue responds: **bioinert** (alumina: minimal reaction, thin capsule), **bioactive** (bioactive glass: bonds to bone) and **bioresorbable** (polylactic acid: replaced by tissue).',
        ],
      },
      {
        title: 'How the body responds',
        body: [
          '- Within seconds, **proteins adsorb** onto the surface. Cells meet this protein layer, not the bare material.',
          '- Macrophages try to remove the implant; if they cannot, fibroblasts wall it off in a thin **fibrous capsule** (the foreign body response).',
          '- **Blood-contacting** devices must not trigger **clotting** (thrombosis).',
          '- **Micro-rough** titanium surfaces improve bone attachment (**osseointegration**).',
        ],
      },
      {
        title: 'Wear, corrosion and sterilization',
        body: [
          '- **Wear debris** (e.g. polyethylene particles) triggers inflammation that **dissolves bone** around a joint and loosens it.',
          '- **Corrosion** in warm saline body fluid releases ions (nickel, cobalt) that can cause allergic or toxic reactions, so implants rely on passive TiO₂ or Cr₂O₃ films.',
          '- **Sterilization** must not damage the material: gamma radiation or steam can degrade some polymers.',
          'Implants also need **fatigue resistance**: a hip is loaded about a million or more times per year.',
        ],
      },
    ],
    keyPoints: [
      'Biocompatible = appropriate host response for the application.',
      'Proteins adsorb first; a fibrous capsule usually forms around inert implants.',
      'Blood-contacting devices must avoid clotting.',
      'Wear debris and released metal ions cause problems.',
      'Implant tests cover corrosion, biology and fatigue together.',
    ],
  },
  {
    nodeId: 'metallic-implants',
    cards: [
      {
        title: 'The main implant alloys',
        body: [
          '- **Ti-6Al-4V**: hip stems, dental implants; bonds to bone, non-magnetic.',
          '- **Co–Cr–Mo**: hard, **wear-resistant** bearing surfaces.',
          '- **316L stainless steel**: cheap, easy to form; temporary plates and screws. Low carbon ("L") avoids chromium carbides and corrosion; molybdenum resists chloride pitting.',
          '- **Nitinol (Ni–Ti)**: **superelastic** self-expanding stents.',
        ],
      },
      {
        title: 'Stress shielding',
        body: [
          'Bone adapts to the load it carries. Cortical bone has a modulus of about **10–30 GPa**, far below stainless steel or Co–Cr (about 200 GPa).',
          'A **stiff stem takes the load**, the bone around it is under-loaded and **resorbs**. **Lower-modulus** alloys (Ti-6Al-4V ≈ 110 GPa, β-titanium ≈ 55–85 GPa) reduce stress shielding.',
        ],
      },
      {
        title: 'Surfaces and long life',
        body: [
          'Titanium’s stable **TiO₂ film** resists corrosion and lets bone grow in direct contact.',
          'Fatigue cracks start at surface flaws, so **smooth, shot-peened** surfaces last longer.',
          '**Nickel** is a common allergen, so nickel release is monitored. Nitinol relies on its titanium-rich oxide surface to limit it.',
        ],
      },
    ],
    keyPoints: [
      'Ti-6Al-4V bonds to bone; Co–Cr resists wear; 316L for temporary fixation; Nitinol is superelastic.',
      'Stiff implants cause stress shielding and bone loss.',
      'Lower implant modulus → less stress shielding.',
      'TiO₂ films give corrosion resistance and osseointegration.',
      'Smooth, peened surfaces improve fatigue life.',
    ],
  },
  {
    nodeId: 'bioceramics',
    cards: [
      {
        title: 'Inert ceramics for joints',
        body: [
          '**Alumina and zirconia** femoral heads are very hard, **wear-resistant** and bioinert. Ceramic-on-ceramic bearings produce very little wear debris.',
          '**Finer grains** and high purity raise strength and reliability.',
          'Zirconia can suffer **low-temperature degradation**: in body fluids, tetragonal grains slowly turn monoclinic, roughening the surface.',
        ],
      },
      {
        title: 'Bone-bonding ceramics',
        body: [
          '**HA** is close to bone mineral, so bone bonds to it. Bulk HA is too **brittle** for heavy loads (toughness about 1 MPa·√m), so it is used as a **coating** on titanium or as filler.',
          '**Bioactive glass** (e.g. 45S5) exchanges ions with body fluid and forms a surface **apatite layer** that bonds to bone, and even to soft tissue.',
        ],
      },
      {
        title: 'Resorbable ceramics',
        body: [
          '**β-tricalcium phosphate** is more soluble than HA, so it is **resorbed faster** and replaced by bone. Mixing the two tunes the rate.',
          'Porous calcium phosphate granules let bone **grow into the pores** and use them as a scaffold (**osteoconduction**).',
        ],
      },
    ],
    keyPoints: [
      'Alumina and zirconia heads: hard, wear-resistant, bioinert.',
      'HA bonds to bone but is brittle, so it is used as a coating.',
      'Bioactive glass forms an apatite layer that bonds to bone and soft tissue.',
      'β-tricalcium phosphate resorbs faster than HA.',
      'Porous calcium phosphates guide bone ingrowth.',
    ],
  },
  {
    nodeId: 'biodegradable-materials',
    cards: [
      {
        title: 'Why degrade?',
        body: [
          'Temporary devices that **dissolve as tissue heals** avoid a second removal surgery and long-term stress shielding.',
          'The key design rule: the device should **lose strength at about the rate the tissue heals**. Too fast leaves the tissue unsupported; too slow is like a permanent implant.',
          'Common example: **absorbable sutures** made of PGA or PLGA.',
        ],
      },
      {
        title: 'Biodegradable polymers',
        body: [
          'PLA and PGA degrade by **hydrolysis** of their ester bonds into lactic and glycolic acid.',
          '- **PGA degrades faster** than PLA (more hydrophilic); PLGA copolymers tune the rate.',
          '- **Higher crystallinity → slower degradation**: water attacks amorphous regions first.',
          '- In **thick** parts, trapped acid speeds up degradation inside (**autocatalysis**).',
        ],
      },
      {
        title: 'Magnesium alloys',
        body: [
          'Magnesium corrodes in the body: Mg + 2H₂O → Mg(OH)₂ + H₂, releasing **Mg²⁺ and hydrogen gas**.',
          'Its modulus (about **45 GPa**) and density are close to bone’s, so it shields less than other metals.',
          'If it degrades too fast: use **high-purity** alloys (iron and nickel impurities cause galvanic attack), suitable **alloying** and **coatings**.',
        ],
      },
    ],
    keyPoints: [
      'Degradable implants avoid removal surgery.',
      'Strength loss should match the healing rate.',
      'PGA degrades faster than PLA; crystallinity slows degradation.',
      'Thick polyester parts can degrade faster inside (autocatalysis).',
      'Magnesium corrodes to Mg²⁺ and H₂; purity, alloying and coatings control it.',
    ],
  },
  {
    nodeId: 'tissue-scaffolds',
    cards: [
      {
        title: 'What a scaffold does',
        body: [
          'A scaffold is a **temporary porous structure** that mimics the ECM: cells attach to it, fill its 3D shape with new tissue, and it degrades away.',
          'Ideally it **degrades at the rate new tissue forms**.',
          'Synthetic polymers often lack cell-binding signals, so surfaces may be coated with proteins or peptides such as RGD.',
        ],
      },
      {
        title: 'Pores: the central trade-off',
        body: [
          '- Pores must be **interconnected** so cells, nutrients and blood vessels can reach the interior.',
          '- For bone ingrowth, pores of at least about **100 µm** (often 200–500 µm) are targeted.',
          '- **More porosity → lower strength and stiffness.**',
          'Without blood vessels, cells deeper than a few hundred micrometers starve, so thick scaffolds can have dead centers.',
          'Scaffold **stiffness** also guides cells: soft substrates favor soft tissues, stiffer ones favor bone.',
        ],
      },
      {
        title: 'Making scaffolds',
        body: [
          '- **Electrospinning**: nanofiber mats resembling collagen fibers.',
          '- **3D printing**: designed pores and patient-specific shapes (**PCL** prints easily at about 60 °C and degrades slowly).',
          '- **Salt leaching**: pores where dissolved salt crystals were.',
          '- **Freeze-drying**: pores where ice crystals sublimated.',
        ],
      },
    ],
    keyPoints: [
      'Scaffolds are temporary, porous and degrade as tissue forms.',
      'Pores must be interconnected; about 100 µm+ for bone.',
      'More porosity → weaker scaffold.',
      'Thick scaffolds need blood vessel ingrowth to keep the center alive.',
      'Electrospinning, 3D printing, salt leaching and freeze-drying make scaffolds.',
    ],
  },
]
