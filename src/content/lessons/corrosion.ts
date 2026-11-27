import type { SkillLesson } from '../types'

// Disciplines · Corrosion & Degradation lessons. Sources: Callister & Rethwisch ch. 17; Fontana; Jones;
// Birks, Meier & Pettit.

export const corrosionLessons: SkillLesson[] = [
  {
    nodeId: 'electrochemistry',
    cards: [
      {
        title: 'The corrosion cell',
        body: [
          'Corrosion needs four things: an **anode**, a **cathode**, an **electrolyte** and an **electrical connection**. Remove any one and it stops.',
          '- **Anode**: metal oxidizes and dissolves (Fe → Fe²⁺ + 2e⁻).',
          '- **Cathode**: electrons are consumed. In neutral aerated water: **O₂ + 2H₂O + 4e⁻ → 4OH⁻**; in acids, hydrogen evolution.',
          'Oxygen supply often controls the rate, so deaerated water corrodes steel very slowly.',
        ],
      },
      {
        title: 'Galvanic couples',
        body: [
          'When two metals touch in an electrolyte, the **more active** one (lower in the **galvanic series**) corrodes faster. A steel bolt in a copper plate in seawater is attacked.',
          'A **small anode with a large cathode** is the worst case: the anode’s current density is very high.',
          'The **standard emf series** ranks metals against the SHE under standard conditions; the galvanic series ranks them in a real environment and is more useful in practice.',
        ],
      },
      {
        title: 'Passivity and rate',
        body: [
          '**Passivity**: a few-nanometer protective oxide film greatly slows corrosion (stainless steel with at least about 11–12% Cr, aluminum, titanium).',
          'Corrosion usually speeds up with **temperature**. Since it is electrochemical, mass loss follows **Faraday’s law**: more corrosion current → more metal lost.',
        ],
        formula: 'faraday',
      },
    ],
    keyPoints: [
      'Corrosion needs anode, cathode, electrolyte and electrical path.',
      'Metal dissolves at the anode; oxygen reduction is the usual cathode reaction.',
      'In a couple, the more active metal corrodes; small anode + large cathode is worst.',
      'Passive films protect stainless steel, aluminum and titanium.',
      'Mass lost ∝ corrosion current (Faraday).',
    ],
  },
  {
    nodeId: 'forms-of-corrosion',
    cards: [
      {
        title: 'Localized forms',
        body: [
          '- **Galvanic**: dissimilar metals in contact.',
          '- **Pitting**: small, deep holes, often from **chlorides**. Little metal loss can perforate a wall, and pits are hard to see.',
          '- **Crevice**: attack in stagnant solution inside gaps.',
          '- **Intergranular**: attack along grain boundaries.',
          '- **Selective leaching**: one element removed, e.g. **dezincification** of brass.',
          '- **Erosion–corrosion**: fast or turbulent flow strips protective films (bends, impellers).',
        ],
      },
      {
        title: 'Sensitized stainless steel',
        body: [
          'Held at about **500–800 °C** (as in a weld’s HAZ), type 304 forms **chromium carbides on grain boundaries**. The nearby metal loses chromium and can no longer passivate, so **intergranular corrosion** follows.',
          'Remedies: **low-carbon grades** (304L), **stabilized grades** (321, 347), or a **solution anneal** after welding.',
          '**More chlorides → more pitting**; adding **molybdenum** (316) improves pitting resistance.',
        ],
      },
      {
        title: 'Cracking with stress',
        body: [
          '**SCC** needs **tensile stress + a susceptible alloy + a specific environment** together (e.g. austenitic stainless steel in hot chlorides). Removing one factor prevents it.',
          '**Hydrogen embrittlement**: atomic hydrogen from corrosion, plating or welding enters high-strength steel and causes brittle cracking.',
        ],
      },
    ],
    keyPoints: [
      'Pitting, crevice, intergranular, galvanic, selective leaching and erosion–corrosion are localized forms.',
      'Sensitization: Cr carbides at boundaries → intergranular attack; use 304L or solution anneal.',
      'Chlorides cause pitting; molybdenum (316) resists it.',
      'SCC needs stress, a susceptible alloy and a specific environment.',
      'Hydrogen embrittles high-strength steels.',
    ],
  },
  {
    nodeId: 'high-temp-oxidation',
    cards: [
      {
        title: 'Protective or not?',
        body: [
          'The **Pilling–Bedworth ratio** compares oxide volume to the metal volume consumed:',
          '- **Below 1**: oxide too thin to cover; **porous, non-protective** (e.g. magnesium).',
          '- **About 1–2**: continuous, **protective** scale.',
          '- **Well above 2**: large compressive stresses make the scale spall.',
        ],
        formula: 'pilling-bedworth',
      },
      {
        title: 'Oxidation kinetics',
        body: [
          'A protective scale follows **parabolic** kinetics: ions must **diffuse through the scale**, so the rate **slows as it thickens**. K_p rises steeply with temperature.',
          '**Linear** (constant-rate) oxidation means the scale is porous or cracked and is not protecting.',
        ],
        formula: 'parabolic-oxidation',
      },
      {
        title: 'Alloying and attack',
        body: [
          '**Cr and Al** are added to form slow-growing **Cr₂O₃ or Al₂O₃** scales. Above about 1000 °C, chromia evaporates as volatile CrO₃, so the hottest parts rely on **alumina formers**.',
          '**Thermal cycling** cracks and spalls scales through expansion mismatch.',
          '**Hot corrosion**: molten salt deposits such as Na₂SO₄ dissolve protective scales in gas turbines.',
        ],
      },
    ],
    keyPoints: [
      'Pilling–Bedworth ratio about 1–2 → protective scale; below 1 → porous.',
      'Parabolic kinetics = diffusion through a protective scale; linear = non-protective.',
      'K_p rises with temperature.',
      'Cr₂O₃ and Al₂O₃ scales protect; alumina is preferred above about 1000 °C.',
      'Thermal cycling and molten salts damage scales.',
    ],
  },
  {
    nodeId: 'protection-coatings',
    cards: [
      {
        title: 'Cathodic protection',
        body: [
          'Make the structure the **cathode** so it does not corrode:',
          '- **Sacrificial anodes**: a more active metal (Zn, Mg) corrodes instead (ships, pipelines, water heaters).',
          '- **Impressed current**: a DC supply drives the protective current (long pipelines).',
          '**Galvanized steel** stays protected at scratches because zinc corrodes sacrificially. **Tin plate** protects only as a barrier: once scratched, the steel corrodes faster in most environments.',
        ],
      },
      {
        title: 'Films, inhibitors and alloying',
        body: [
          '- **Anodizing** thickens aluminum’s protective oxide.',
          '- **Inhibitors** are chemicals added to closed systems (radiators, boilers) to slow corrosion.',
          '- **More chromium** (above about 11%) makes iron alloys passive and corrosion resistant.',
        ],
      },
      {
        title: 'Design against corrosion',
        body: [
          'Avoid crevices and pockets where water collects, provide drainage, and **avoid dissimilar metal contact**. **Insulating washers** break galvanic couples.',
          'Coatings and cathodic protection work together: the coating covers most of the area, and cathodic protection handles the defects.',
        ],
      },
    ],
    keyPoints: [
      'Cathodic protection: sacrificial anodes or impressed current.',
      'Zinc protects steel sacrificially; tin only as a barrier.',
      'Anodizing, inhibitors and chromium alloying reduce corrosion.',
      'Good design avoids crevices and dissimilar metal contact.',
      'Coatings plus cathodic protection is the standard for buried pipelines.',
    ],
  },
]
