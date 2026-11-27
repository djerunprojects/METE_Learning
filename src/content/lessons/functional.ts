import type { SkillLesson } from '../types'

// Disciplines · Functional Materials lessons. Sources: Callister & Rethwisch ch. 18–21; Kasap; Cullity & Graham.

export const functionalLessons: SkillLesson[] = [
  {
    nodeId: 'electrical-properties',
    cards: [
      {
        title: 'Bands and band gaps',
        body: [
          '- **Metals**: the top band is partly filled (or bands overlap), so electrons move freely. **No gap.**',
          '- **Semiconductors**: a **small gap** (silicon ≈ 1.1 eV), so some electrons are thermally excited.',
          '- **Insulators**: a **large gap** (several eV, e.g. diamond, alumina).',
          '**Dielectrics** are insulators that polarize in a field and are used in capacitors.',
        ],
      },
      {
        title: 'Conductivity in metals',
        body: [
          'Conductivity depends on the number of carriers and their **mobility**. In metals the number is fixed, so anything that **scatters electrons** lowers conductivity:',
          '- **Higher temperature** (lattice vibrations).',
          '- **Impurities and alloying**: high-purity copper is used for wiring.',
          '- **Cold work** (dislocations), a smaller effect.',
          '**Matthiessen’s rule**: total resistivity = thermal + impurity + deformation parts.',
        ],
        formula: 'electrical-conductivity',
      },
      {
        title: 'Superconductors',
        body: [
          'Below a **critical temperature**, a superconductor has **zero resistance**. Nb–Ti wire cooled with liquid helium powers MRI magnets; some ceramic superconductors work at liquid-nitrogen temperature.',
        ],
      },
    ],
    keyPoints: [
      'No gap → metal; small gap → semiconductor; large gap → insulator.',
      'σ = n·e·μ: more mobility → more conductivity.',
      'Temperature, impurities and cold work raise metal resistivity (Matthiessen).',
      'Pure copper is used for conductors.',
      'Superconductors have zero resistance below a critical temperature.',
    ],
  },
  {
    nodeId: 'semiconductors',
    cards: [
      {
        title: 'Intrinsic semiconductors',
        body: [
          'In a pure semiconductor, carriers come from electrons excited across the gap; each leaves a **hole**, so **n = p**.',
          '**Higher temperature → more carriers → higher conductivity**, the opposite of metals, because carrier generation outweighs extra scattering.',
          '**Larger band gap → far fewer intrinsic carriers** (germanium ≈ 0.67 eV has many more than silicon ≈ 1.1 eV).',
        ],
      },
      {
        title: 'Doping',
        body: [
          '- **Phosphorus** (5 valence electrons) → **n-type**: a donor gives a free electron.',
          '- **Boron** (3 valence electrons) → **p-type**: an acceptor creates a hole.',
          '**More dopant → higher conductivity.** Over a wide range of temperature, the carrier count is fixed by the dopant (the **extrinsic** range), which is where devices operate.',
        ],
      },
      {
        title: 'Junctions and materials',
        body: [
          'A **p–n junction** conducts easily in **forward bias** and very little in **reverse bias**: a **diode**. Solar cells and transistors build on it.',
          '- **Silicon**: integrated circuits and most solar cells.',
          '- **Gallium arsenide**: high-frequency electronics and infrared lasers.',
          '- **Gallium nitride**: blue and white LEDs, power electronics.',
          '- **Germanium**: infrared optics, early transistors.',
        ],
      },
    ],
    keyPoints: [
      'Intrinsic: n = p; conductivity rises with temperature.',
      'Larger gap → fewer intrinsic carriers.',
      'P doping → n-type; B doping → p-type; more dopant → more conductivity.',
      'Devices run in the extrinsic range, where carrier count is stable.',
      'p–n junctions rectify: easy forward, little reverse current.',
    ],
  },
  {
    nodeId: 'magnetic-materials',
    cards: [
      {
        title: 'Ferromagnetism',
        body: [
          'In Fe, Co and Ni, unpaired electron spins align with their neighbors over regions called **domains**. An unmagnetized piece just has domains pointing in random directions.',
          'A field magnetizes the material first by **domain wall motion**, then by **rotation**.',
          'Above the **Curie temperature** (768 °C for iron), alignment is lost and the material becomes paramagnetic. **Saturation magnetization falls** as T approaches it.',
        ],
      },
      {
        title: 'Soft vs hard magnets',
        body: [
          'The **area of the hysteresis loop** is the **energy lost per cycle**.',
          '- **Soft magnets** (thin loop, low coercivity): transformer and inductor cores. Clean, large-grained material; **defects that pin domain walls raise coercivity**.',
          '- **Hard magnets** (fat loop, high coercivity): permanent magnets such as **Nd–Fe–B** (motors) and **Sm–Co** (high temperature).',
        ],
      },
      {
        title: 'Cutting losses in cores',
        body: [
          'Changing fields induce **eddy currents** that waste energy as heat.',
          '- Adding about **3% silicon** to transformer steel raises resistivity.',
          '- **Thin insulated laminations** break up eddy-current paths.',
          '- **Ferrites** are insulating magnetic ceramics, ideal for high frequencies.',
        ],
      },
    ],
    keyPoints: [
      'Ferromagnetism: aligned spins in domains (Fe, Co, Ni).',
      'Above the Curie temperature, ferromagnetism disappears.',
      'Hysteresis loop area = energy lost per cycle.',
      'Soft magnets for cores; hard magnets (Nd–Fe–B, Sm–Co) for permanent magnets.',
      'Silicon, laminations and ferrites reduce eddy-current losses.',
    ],
  },
  {
    nodeId: 'optical-thermal',
    cards: [
      {
        title: 'Optical properties',
        body: [
          '- **Metals are opaque** and shiny: free electrons absorb and re-emit visible light of any energy.',
          '- **Glass is transparent**: its band gap exceeds visible photon energies, and it has no grain boundaries or pores to scatter light.',
          '- **Porosity scatters light**, so porous ceramics are translucent or opaque; nearly pore-free alumina can be translucent.',
          '- **Semiconductor color**: CdS absorbs light above its band gap (blue/violet) and looks yellow.',
        ],
      },
      {
        title: 'Thermal expansion and stress',
        body: [
          'Heating lengthens a part in proportion to its **expansion coefficient**. Polymers expand roughly ten times more than metals.',
          'If the part is **restrained**, the blocked expansion becomes **stress** proportional to **E**: stiff materials build up larger thermal stresses.',
          'Low-expansion **Invar** suits precision instruments.',
        ],
        formula: 'thermal-expansion',
      },
      {
        title: 'Heat conduction',
        body: [
          'Heat flux is proportional to **thermal conductivity k**. **Metals** conduct well because **free electrons** carry heat; ceramics rely on lattice vibrations (phonons), with exceptions such as diamond and aluminum nitride.',
          '**Polymers** and foams are poor conductors, so they make good insulation.',
        ],
        formula: 'fourier',
      },
    ],
    keyPoints: [
      'Metals are opaque; glass is transparent; pores scatter light.',
      'Semiconductors absorb photons above their band gap.',
      'Δl ∝ α·ΔT; restrained parts develop stress ∝ E·α·ΔT.',
      'Free electrons make metals good thermal conductors.',
      'Polymers and foams are thermal insulators.',
    ],
  },
]
