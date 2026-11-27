import type { SkillLesson } from '../types'

// Core · Mechanical Properties lessons. Sources: Callister & Rethwisch ch. 6–8; Askeland ch. 6–7; Dieter.

export const propertiesLessons: SkillLesson[] = [
  {
    nodeId: 'stress-strain',
    cards: [
      {
        title: 'Stress, strain and stiffness',
        body: [
          '**Engineering stress** is load divided by the **original** cross-section; **engineering strain** is the change in length divided by the original length.',
          'At small loads, deformation is **elastic**: bonds only stretch, and the part returns to its shape when unloaded. Stress and strain are proportional (Hooke’s law), and the slope is the **elastic modulus E**, a measure of **stiffness**.',
          'For the same stress, a **higher E means less strain**. Typical values: steel ≈ 200 GPa, aluminum ≈ 70 GPa, alumina ≈ 380 GPa, HDPE ≈ 1 GPa.',
        ],
        formula: 'hookes-law',
      },
      {
        title: 'The stress–strain curve',
        body: [
          '- **A, elastic**: straight line up to the yield point.',
          '- **B, uniform plastic deformation**: stress keeps rising as dislocations multiply (**strain hardening**), and the whole bar thins evenly.',
          '- **C, necking**: after the **ultimate tensile strength**, deformation concentrates in one spot and the cross-section shrinks locally. Engineering stress falls because it uses the original area.',
          '- **D, fracture**.',
          '**True stress** uses the actual, shrinking area, so it keeps rising.',
        ],
        diagram: 'stress_strain_ductile',
      },
      {
        title: 'Other elastic facts',
        body: [
          'When a bar is stretched, it also gets **thinner**. Poisson’s ratio relates the two strains; it is about 0.3 for most metals.',
          'E depends mainly on **bond strength**, so heat treatment and cold work barely change it. It **decreases slowly with temperature** as the lattice expands.',
        ],
        formula: 'poisson-ratio',
      },
    ],
    keyPoints: [
      'Elastic deformation is recoverable; E measures stiffness.',
      'Same stress, higher E → smaller strain.',
      'Curve: elastic → yield → strain hardening → UTS → necking → fracture.',
      'Stretched bars get thinner (Poisson’s ratio ≈ 0.3 for metals).',
      'E is set by bonding and drops slightly with temperature.',
    ],
  },
  {
    nodeId: 'plasticity-hardness',
    cards: [
      {
        title: 'Yielding, ductility and energy',
        body: [
          'Many metals have no sharp yield point, so **yield strength** is defined by the **0.2% offset** method: the stress at which 0.002 permanent strain remains.',
          '- **Ductility**: how much plastic deformation a material takes before fracture (percent elongation or reduction in area).',
          '- **Resilience**: energy absorbed **elastically** (area under the elastic part), important for springs.',
          '- **Toughness**: total energy absorbed up to fracture.',
        ],
      },
      {
        title: 'Strain hardening and hot working',
        body: [
          'Cold work multiplies dislocations (from about 10¹⁰ to 10¹⁵ per m²), and they block each other. So **more cold work → higher yield strength but lower ductility**.',
          'Bending a wire back and forth hardens it until it cracks. **Annealing** restores ductility.',
          'Above the recrystallization temperature (**hot working**), the metal recrystallizes as it deforms, so the stress needed for flow is much lower.',
        ],
      },
      {
        title: 'Hardness tests',
        body: [
          'Hardness tests press an indenter into the surface and measure the dent:',
          '- **Brinell**: hard steel or tungsten carbide ball.',
          '- **Vickers**: square-based diamond pyramid.',
          '- **Rockwell C**: diamond cone.',
          '- **Knoop**: elongated diamond pyramid for microhardness.',
          'Hardness reflects resistance to plastic deformation, so for steels it gives a good **estimate of tensile strength**.',
        ],
      },
    ],
    keyPoints: [
      'Yield strength by the 0.2% offset method.',
      'Resilience = elastic energy; toughness = total energy to fracture.',
      'Cold work: strength up, ductility down; annealing restores ductility.',
      'Hot working lowers the flow stress.',
      'Hardness correlates with tensile strength in steels.',
    ],
  },
  {
    nodeId: 'fracture-toughness',
    cards: [
      {
        title: 'Ductile vs brittle fracture',
        body: [
          '- **Ductile fracture**: voids form at inclusions, grow and join, leaving **dimples**; tensile bars show a **cup-and-cone** shape.',
          '- **Brittle fracture**: cracks run with little deformation, either by **cleavage** across crystal planes (flat facets, river patterns) or along grain boundaries (**intergranular**).',
        ],
      },
      {
        title: 'Cracks concentrate stress',
        body: [
          'At the tip of a sharp crack or notch, the local stress can be far higher than the applied stress. **Sharper tips concentrate stress more**, which is why designers use generous fillet radii.',
          '**Fracture toughness K_Ic** measures resistance to a sharp crack. For a given K_Ic, a **longer crack** means a **lower stress** is enough to break the part. Tough metals often exceed 50 MPa·√m; ceramics and glasses are usually below 5.',
        ],
        formula: 'stress-intensity',
      },
      {
        title: 'The ductile-to-brittle transition',
        body: [
          'Many **BCC steels** become brittle when cold: below the **DBTT** they absorb little energy and fail by cleavage. The transition is measured with **Charpy** impact tests over a range of temperatures.',
          '**FCC metals** (aluminum, copper, austenitic stainless steel) keep many slip systems and **show no sharp transition**, so they are used for cryogenic tanks.',
          'The Liberty ships of the Second World War cracked in cold seas: steel below its DBTT, sharp welded corners and all-welded hulls that let cracks run.',
        ],
      },
    ],
    keyPoints: [
      'Ductile: dimples, cup-and-cone. Brittle: cleavage or intergranular.',
      'Sharp notches concentrate stress.',
      'Longer cracks → lower fracture stress; higher K_Ic → higher fracture stress.',
      'BCC steels have a DBTT; FCC metals do not.',
      'Charpy tests find the DBTT.',
    ],
  },
  {
    nodeId: 'fatigue-creep',
    cards: [
      {
        title: 'Fatigue',
        body: [
          '**Fatigue** is failure under **repeated stresses**, often well below the yield strength. A crack usually starts at the surface, grows a little each cycle, and finally the remaining section breaks suddenly.',
          'Fracture surfaces show **beach marks** (visible to the eye) and **striations** (in the SEM).',
          'Results are plotted as **S–N curves**. Many steels have an **endurance limit**; most aluminum alloys do not, so their fatigue strength is quoted at, say, 10⁷ cycles.',
        ],
        diagram: 's_n',
        highlight: 'below_limit',
      },
      {
        title: 'Improving fatigue life',
        body: [
          'Because cracks start at the surface:',
          '- **Polish** the surface and avoid sharp notches.',
          '- Create **compressive residual stress**, e.g. by **shot peening**.',
          '- **Surface harden**, e.g. by carburizing or nitriding.',
          'A higher **tensile mean stress** in the load cycle shortens fatigue life.',
        ],
      },
      {
        title: 'Creep',
        body: [
          '**Creep** is slow, time-dependent deformation under constant load. For metals it matters above about **0.4 T_m** (in kelvin); lead creeps even at room temperature.',
          'A creep curve has a **primary** stage (rate falling), a **secondary** stage (nearly constant rate) and a **tertiary** stage (rate accelerating to rupture).',
          'The steady-state rate rises steeply with **stress** and with **temperature**. Single-crystal turbine blades remove grain boundaries, which slide and form voids at high temperature.',
        ],
        formula: 'creep-rate',
      },
    ],
    keyPoints: [
      'Fatigue: cyclic stress below yield; beach marks and striations.',
      'Steels often have an endurance limit; aluminum alloys usually do not.',
      'Smooth surfaces, compressive residual stress and surface hardening improve fatigue life.',
      'Creep matters above about 0.4 T_m; primary, secondary and tertiary stages.',
      'Creep rate rises with stress and temperature; single crystals resist creep.',
    ],
  },
]
