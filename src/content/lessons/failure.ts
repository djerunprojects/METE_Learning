import type { SkillLesson } from '../types'

// Applications · Failure Analysis lessons. Sources: ASM Handbook Vol. 11; Hertzberg; Callister & Rethwisch ch. 8.

export const failureLessons: SkillLesson[] = [
  {
    nodeId: 'fractography',
    cards: [
      {
        title: 'Reading fracture surfaces',
        body: [
          '- **Beach marks** and **striations**: fatigue.',
          '- **Dimples**, cup-and-cone, **shear lips**: ductile overload.',
          '- **Flat facets with river patterns**: brittle cleavage.',
          '- **Faceted "rock candy" grains**: intergranular fracture, e.g. **hydrogen embrittlement** of plated high-strength bolts.',
          'The **SEM** is the main tool, thanks to its depth of field; EDS can analyze particles at the origin.',
        ],
      },
      {
        title: 'Finding the origin',
        body: [
          '**Chevron marks** point back to the origin, and beach marks curve around it.',
          'Several **ratchet marks** mean **multiple origins**, often from high stress or a sharp notch, such as a small fillet radius.',
          'A **large final-fracture zone** relative to the fatigue zone means **high stress** at failure.',
        ],
      },
      {
        title: 'Crack growth and care',
        body: [
          'Fatigue cracks grow faster as they lengthen, because ΔK grows with crack length, so **striation spacing increases** along the crack.',
          '**Never fit broken halves together** or wire-brush them: that destroys the evidence.',
        ],
        formula: 'paris-law',
      },
    ],
    keyPoints: [
      'Beach marks/striations → fatigue; dimples → ductile; facets/river patterns → cleavage.',
      'Chevrons point to the origin; ratchet marks show multiple origins.',
      'Large final zone → high stress at failure.',
      'Striation spacing grows as the crack grows (Paris law).',
      'Protect fracture surfaces; never fit halves together.',
    ],
  },
  {
    nodeId: 'root-cause-analysis',
    cards: [
      {
        title: 'The investigation sequence',
        body: [
          'First **gather background** and **document the part as found**, before anything destructive.',
          'Then move from non-destructive to destructive: **visual → NDT → fractography → metallography and chemical analysis → mechanical tests**.',
          '- **Chemical analysis**: does the alloy match its specification?',
          '- **Metallography**: microstructure, heat treatment, defects.',
          '- **Hardness**: did heat treatment reach the required strength?',
        ],
      },
      {
        title: 'Physical cause vs root cause',
        body: [
          'The **physical cause** is the mechanism (e.g. fatigue). The **root cause** is **why** it happened (a sharp corner, missed inspection, unclear procedure).',
          'Tools: the **five whys** (keep asking why) and the **fishbone diagram** (materials, methods, machines, people, environment).',
          'Separate **primary damage** from **secondary damage** that happened during or after failure.',
        ],
      },
      {
        title: 'Good conclusions and actions',
        body: [
          'Comparing the failed part with **exemplar parts** and service records raises confidence; a conclusion must explain **all** the evidence.',
          'A good **corrective action** removes the root cause across all similar parts (design, specification, inspection or procedure), not just a like-for-like replacement.',
        ],
      },
    ],
    keyPoints: [
      'Document first; go from non-destructive to destructive.',
      'Each test answers a specific question.',
      'Find the root cause, not just the mechanism.',
      'Five whys and fishbone diagrams organize causes.',
      'Corrective actions must prevent recurrence everywhere.',
    ],
  },
  {
    nodeId: 'failure-case-studies',
    cards: [
      {
        title: 'Fatigue disasters',
        body: [
          '- **Versailles (1842)**: a broken axle helped start the study of fatigue.',
          '- **Comet (1954)**: fatigue cracks from cutout corners in the pressurized cabin → rounded openings and full-scale fatigue testing.',
          '- **Aloha 243 (1988)**: nearly 90,000 short flights, corrosion and many lap-joint cracks linked up → aging-aircraft programs.',
          '- **Eschede (1998)**: a fatigue crack in a rubber-damped wheel tire derailed a high-speed train.',
          'Fatigue risk grows with the **number of cycles**, not hours.',
        ],
      },
      {
        title: 'Brittle fracture and redundancy',
        body: [
          '- **Titanic (1912)**: steel with a high DBTT and slag-rich rivets behaved brittlely in icy water.',
          '- **Liberty ships (1940s)**: steel below its DBTT plus welded, sharp-cornered hulls.',
          '- **Silver Bridge (1967)**: a few-millimeter crack in one eyebar, with **no redundancy**, collapsed the whole bridge.',
          '- **Challenger (1986)**: cold O-rings below their Tg failed to seal.',
        ],
      },
      {
        title: 'The common thread',
        body: [
          'Major failures usually combine a **materials mechanism** with **design, inspection or organizational** shortcomings.',
          '**Damage-tolerant design** manages this: predict crack growth, set **inspection intervals** from it, reduce stress concentrations and build in **redundant load paths**.',
        ],
      },
    ],
    keyPoints: [
      'Comet, Aloha, Eschede and Versailles were fatigue failures.',
      'Titanic and Liberty ships show the danger of the DBTT.',
      'Silver Bridge shows why redundancy matters.',
      'Failures combine materials mechanisms with design and organizational causes.',
      'Damage tolerance: crack growth prediction, inspections and redundancy.',
    ],
  },
]
