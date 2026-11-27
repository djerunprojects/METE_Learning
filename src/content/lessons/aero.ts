import type { SkillLesson } from '../types'

// Applications · Aerospace Materials lessons. Sources: Reed, The Superalloys; Polmear, Light Alloys;
// Padture, Gell & Jordan (2002); Mouritz, Introduction to Aerospace Materials.

export const aeroLessons: SkillLesson[] = [
  {
    nodeId: 'lightweight-alloys',
    cards: [
      {
        title: 'Weight is everything',
        body: [
          'In anything that flies, **specific strength** (strength ÷ density) and **specific stiffness** matter most.',
          '**Al–Li alloys**: each 1 wt% lithium lowers density by about 3% and **raises** modulus by about 6%. Modern Al–Li also has good damage tolerance, but costs more.',
        ],
      },
      {
        title: 'Where each alloy goes',
        body: [
          '- **7xxx (7075)**: upper wing skins, mostly compressed in flight. Often **overaged (T7)** to resist stress corrosion cracking at a small strength cost.',
          '- **2xxx (2024)**: lower wing and fuselage, in tension and fatigue-critical, chosen for **damage tolerance**: slow crack growth means longer inspection intervals.',
          '- **Ti-6Al-4V**: fan blades and highly loaded frames.',
          '- **High-strength steel**: landing gear.',
        ],
      },
      {
        title: 'Titanium and magnesium',
        body: [
          '**Titanium** pairs well with CFRP: no damaging galvanic couple, and closer thermal expansion than aluminum. It is used up to about 500–600 °C, beyond which nickel superalloys take over.',
          '**Magnesium** is about 35% lighter than aluminum but has been limited in airliners by corrosion and flammability concerns.',
        ],
      },
    ],
    keyPoints: [
      'Specific strength and stiffness drive aerospace choices.',
      'Lithium makes aluminum lighter and stiffer.',
      '7xxx upper wing (often T7 for SCC resistance); 2xxx lower wing for damage tolerance.',
      'Titanium suits CFRP structures and warm engine parts.',
      'Magnesium is light but limited by corrosion and flammability.',
    ],
  },
  {
    nodeId: 'superalloys',
    cards: [
      {
        title: 'The γ/γ′ microstructure',
        body: [
          'Nickel superalloys have an **FCC γ matrix** filled with ordered, coherent **γ′ (Ni₃(Al,Ti))** precipitates, up to 60–70% by volume in blade alloys.',
          'Nickel stays FCC to its melting point, so it tolerates heavy alloying. γ′ even gets **stronger with temperature** over a range (anomalous yield).',
          '**Refractory elements** (Re, W, Mo) slow diffusion and coarsening, but too much forms brittle topologically close-packed phases.',
        ],
      },
      {
        title: 'Single-crystal blades',
        body: [
          'Blades evolved from equiaxed grains → **directionally solidified** columnar grains → **single crystals**. With no grain boundaries, there is no boundary sliding or cavitation, so **creep life** improves greatly.',
          'Grain-boundary elements (B, C) can then be reduced, raising the melting point. The low-modulus <001> direction runs along the blade.',
          '**Discs**, by contrast, run cooler under huge cyclic stress, so they use **fine-grained** polycrystalline alloys for strength and fatigue.',
        ],
      },
      {
        title: 'Hot life',
        body: [
          'Cooling passages, film-cooling holes and thermal barrier coatings let blades run in gas **hotter than their melting point**.',
          'The **Larson–Miller parameter** links temperature and rupture life: at the same stress, **higher temperature → shorter life**.',
          'Over time, γ′ **coarsens** (and can raft under stress), weakening the alloy.',
        ],
        formula: 'larson-miller',
      },
    ],
    keyPoints: [
      'FCC γ matrix + coherent γ′ precipitates.',
      'Single crystals remove grain boundaries for creep resistance.',
      'Discs use fine grains for strength and fatigue.',
      'Cooling and TBCs let blades run in gas above their melting point.',
      'Higher temperature at the same stress → shorter rupture life; γ′ coarsens with time.',
    ],
  },
  {
    nodeId: 'thermal-barrier-coatings',
    cards: [
      {
        title: 'The layers',
        body: [
          'From the outside in: **ceramic topcoat (YSZ)** → thin **TGO** (alumina) → **metallic bond coat** → superalloy.',
          '- YSZ conducts very little heat (about 1–2 W/(m·K)) and expands relatively much for a ceramic.',
          '- The bond coat (MCrAlY or Pt-aluminide) supplies aluminum to grow the protective alumina TGO, since oxygen passes easily through YSZ.',
        ],
      },
      {
        title: 'Insulation and strain tolerance',
        body: [
          '**Lower topcoat conductivity → cooler metal**; a few hundred micrometers can drop the metal temperature by 100 °C or more. **More porosity → lower conductivity.**',
          'Electron-beam coatings grow as **columns** that open and close as the metal expands: they are **strain tolerant**. Plasma-sprayed coatings use splat boundaries and pores.',
          'The gain can be spent on hotter gas, less cooling air or longer life.',
        ],
        formula: 'fourier',
      },
      {
        title: 'How TBCs fail',
        body: [
          '- **TGO growth** and expansion mismatch build stress at the interface until the topcoat **spalls**.',
          '- **CMAS** (molten sand and ash) infiltrates and stiffens the coating.',
          'On SiC/SiC CMCs, **EBCs** protect against water vapor, which would otherwise volatilize their silica scale.',
        ],
      },
    ],
    keyPoints: [
      'YSZ topcoat → TGO → bond coat → superalloy.',
      'Low conductivity insulates; porosity lowers it further.',
      'Columnar or porous structures give strain tolerance.',
      'TGO growth and CMAS attack cause spallation.',
      'EBCs protect CMCs from water vapor.',
    ],
  },
  {
    nodeId: 'aerospace-composites',
    cards: [
      {
        title: 'Composite airliners',
        body: [
          'About **half the structural weight** of aircraft such as the Boeing 787 and Airbus A350 is composite.',
          'CFRP’s higher specific stiffness and strength save around 20% weight in primary structures, and it suffers far less **fatigue and corrosion** than aluminum, allowing higher cabin humidity and pressure.',
        ],
      },
      {
        title: 'Hidden damage',
        body: [
          'An impact (e.g. a dropped tool) can cause internal **delaminations** with **barely visible** surface marks. **More impact energy → lower compression-after-impact strength.**',
          'Structures must carry design loads with such damage present, and **ultrasonic NDT** is used to find it.',
          '**Holes and fasteners** are weak points: composites cannot yield locally to share load around a hole as metals do.',
        ],
      },
      {
        title: 'Environment and lightning',
        body: [
          '- **Hot–wet** conditions are the critical design case: moisture lowers the matrix Tg and stiffness.',
          '- CFRP conducts much worse than aluminum, so skins carry **copper mesh** for **lightning strike protection**.',
        ],
      },
    ],
    keyPoints: [
      'About half of new airliner structure is composite.',
      'CFRP saves weight and resists fatigue and corrosion.',
      'Impacts can leave barely visible internal damage; ultrasonic inspection finds it.',
      'Holes concentrate stress in composites.',
      'Design for hot–wet conditions; add lightning protection.',
    ],
  },
  {
    nodeId: 'thermal-protection',
    cards: [
      {
        title: 'Ablative heat shields',
        body: [
          'An **ablator** such as **PICA** chars and decomposes: pyrolysis absorbs energy, the gases block heating, and the char radiates heat away. It is consumed, so it is used once.',
          'Heating rises steeply with **entry speed** (roughly with its cube), so lunar-return capsules face far harsher heating than orbital returns.',
        ],
      },
      {
        title: 'Reusable systems',
        body: [
          'The Space Shuttle used:',
          '- **Silica tiles**: about **90% porous**, with very low conductivity and low expansion (thermal shock resistant), plus a **black, high-emissivity** coating to radiate heat away.',
          '- **RCC** on the nose and wing leading edges (above about 1260 °C), with a SiC coating to stop the carbon from burning.',
          'Good tile properties: **low conductivity, low expansion, low density**.',
        ],
      },
      {
        title: 'Columbia (2003)',
        body: [
          'Foam from the external tank struck the **RCC** on the left wing leading edge during launch and made a hole. During re-entry, hot gas entered the wing and destroyed it.',
          'Ablative vs reusable is a trade-off: ablators handle extreme heating once; reusable systems survive many flights but need inspection.',
        ],
      },
    ],
    keyPoints: [
      'Ablators char and decompose, carrying heat away; single use.',
      'Entry heating rises steeply with speed.',
      'Shuttle tiles: very porous silica, low conductivity, high-emissivity coating.',
      'RCC protects the hottest areas and needs an oxidation coating.',
      'Columbia was lost after foam damaged the RCC wing edge.',
    ],
  },
]
