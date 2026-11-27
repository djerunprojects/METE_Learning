import type { SkillLesson } from '../types'

// Core · Characterization lessons. Sources: Callister & Rethwisch ch. 3, 4, 6, 8; Cullity & Stock;
// Goldstein et al., Scanning Electron Microscopy and X-Ray Microanalysis.

export const characterizationLessons: SkillLesson[] = [
  {
    nodeId: 'microscopy',
    cards: [
      {
        title: 'What limits resolution',
        body: [
          'The finest detail a microscope can separate is limited by diffraction. **Shorter wavelength** and **higher numerical aperture** give finer resolution.',
          'Light microscopes reach about 0.2 µm. Beyond that, extra magnification only enlarges blur: **empty magnification** shows no new detail.',
        ],
        formula: 'resolution-limit',
      },
      {
        title: 'Optical metallography',
        body: [
          'Metals are **opaque**, so metallographic microscopes use **reflected light**.',
          'Sample preparation follows a fixed order: **section → mount → grind → polish → etch**. Etching reveals grain boundaries and phases.',
        ],
      },
      {
        title: 'Electron microscopes',
        body: [
          'Electrons have wavelengths of picometers, far shorter than visible light, so electron microscopes resolve much finer detail.',
          '**SEM** scans a beam over a bulk sample and collects different signals:',
          '- **SE**: surface topography.',
          '- **BSE**: atomic-number (composition) contrast; heavier elements look brighter.',
          '- **EDS**: characteristic X-rays identify the elements.',
          '- **EBSD**: the crystal orientation of each grain.',
          'Non-conductive samples are coated with gold or carbon to avoid charging. **TEM** sends electrons **through** very thin samples (< about 100 nm) and can image individual **dislocations**.',
        ],
      },
    ],
    keyPoints: [
      'Resolution improves with shorter wavelength and higher NA; extra magnification alone adds nothing.',
      'Metals are viewed in reflected light after section, mount, grind, polish, etch.',
      'SEM: SE for shape, BSE for composition, EDS for elements, EBSD for orientation.',
      'Coat non-conductive SEM samples to prevent charging.',
      'TEM needs very thin samples and can show dislocations.',
    ],
  },
  {
    nodeId: 'xrd',
    cards: [
      {
        title: "Bragg's law",
        body: [
          'X-rays scattered by parallel atomic planes reinforce each other only at angles where the path difference is a whole number of wavelengths.',
          '- **Larger plane spacing d** → **smaller angle θ**.',
          '- **Shorter wavelength λ** → **smaller angle θ** for the same planes.',
          'So when a solute expands the lattice, **all peaks shift to lower 2θ**.',
        ],
        formula: 'bragg',
      },
      {
        title: 'What a pattern tells you',
        body: [
          '- **Peak positions and intensities**: a fingerprint of each crystalline phase, used for **phase identification**.',
          '- **Peak shifts**: lattice parameter, solute content and **residual strain** (and so residual stress).',
          '- **Peak broadening**: very small (nanometer) crystallites (Scherrer equation).',
          '- **Broad humps** instead of peaks: an **amorphous** material such as glass.',
          'Not every plane diffracts: in **BCC**, peaks appear only when **h + k + l is even**; in FCC, only when h, k, l are all odd or all even.',
        ],
      },
      {
        title: 'Choosing the right tool',
        body: [
          '- Which **phases** are present? → **XRD**',
          '- What does a **fracture surface** look like? → **SEM**',
          '- Which **elements** are in a particle? → **EDS**',
          '- Where are the **dislocations**? → **TEM**',
        ],
      },
    ],
    keyPoints: [
      "Bragg's law: larger d or shorter λ → smaller θ.",
      'XRD identifies phases by their peak fingerprints.',
      'Peak shifts give lattice parameter and residual strain; broadening means tiny crystallites.',
      'Amorphous materials give broad humps.',
      'BCC reflections need h + k + l even.',
    ],
  },
  {
    nodeId: 'mechanical-testing',
    cards: [
      {
        title: 'The tensile test',
        body: [
          'A tensile test gives **E, yield strength, ultimate tensile strength and ductility**. It does **not** give impact energy.',
          'Faster loading (higher strain rate) usually makes metals appear somewhat **stronger**, so standards fix the strain rate.',
          'Brittle **ceramics** are tested in **bending** (three- or four-point) because they are hard to grip and align in tension.',
        ],
      },
      {
        title: 'Toughness tests',
        body: [
          'The **Charpy** test breaks a **notched** bar with a pendulum; the lost swing height gives the **absorbed energy**. Testing at several temperatures shows the **DBTT**: energy drops sharply below it.',
          '**Fracture toughness K_Ic** needs a specimen with a **sharp fatigue pre-crack**, thick enough for **plane strain**. A thin specimen gives a higher, unsafe value.',
        ],
      },
      {
        title: 'Hardness, fatigue and creep tests',
        body: [
          '- **Hardness**: quick, cheap, nearly non-destructive; ideal for checking heat-treated parts.',
          '- **Fatigue**: specimens cycled at different stress amplitudes (e.g. a **rotating-beam** test); results plotted as an **S–N curve**.',
          '- **Creep**: a **constant load at high temperature**, with strain recorded over time.',
        ],
      },
    ],
    keyPoints: [
      'Tensile test: E, yield, UTS, ductility (not impact energy).',
      'Higher strain rate → slightly higher measured strength.',
      'Charpy: notched impact energy vs temperature, reveals the DBTT.',
      'K_Ic needs a pre-cracked, thick (plane-strain) specimen.',
      'Fatigue → S–N curve; creep → constant load at high temperature.',
    ],
  },
]
