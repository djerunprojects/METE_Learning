import type { Question } from '../types'

// Applications · Failure Analysis.
// Sources: ASM Handbook Vol. 11, Failure Analysis and Prevention; Hertzberg, Deformation and Fracture Mechanics
// of Engineering Materials; Callister & Rethwisch (ch. 8); published accident investigation summaries.

const fractography: Question[] = [
  {
    id: 'fr-001',
    nodeId: 'fractography',
    type: 'matching',
    prompt: 'Match each fracture surface feature to what it indicates.',
    pairs: [
      { left: 'Beach marks', right: 'Fatigue crack growth, with pauses or load changes' },
      { left: 'Dimples', right: 'Ductile overload (microvoid coalescence)' },
      { left: 'River patterns on flat facets', right: 'Brittle cleavage' },
      { left: 'Faceted, "rock candy" grains', right: 'Intergranular fracture (e.g. hydrogen or temper embrittlement)' },
    ],
    explanation:
      'Reading these features is the core of fractography. Beach marks and dimples are visible to the eye or under low magnification; striations and dimples are best seen in the SEM.',
  },
  {
    id: 'fr-002',
    nodeId: 'fractography',
    type: 'multiple_choice',
    prompt: 'On a brittle fracture surface, what do chevron (V-shaped) marks point toward?',
    options: ['The origin of the fracture', 'The final fracture zone', 'The direction of gravity', 'Nothing in particular'],
    answer: 0,
    explanation:
      'Chevrons point back toward where the crack started, which tells the analyst where to look for the initiating defect.',
  },
  {
    id: 'fr-003',
    nodeId: 'fractography',
    type: 'trend',
    prompt: 'A shaft broke by fatigue. The surface shows a smooth fatigue zone and a rough final-fracture zone.',
    change: 'the final-fracture zone is larger compared with the fatigue zone',
    target: 'the stress the shaft was carrying when it finally broke',
    answer: 'increases',
    explanation:
      'At high stress, only a short fatigue crack is needed before the remaining section breaks, so the rough overload zone is large. A small final zone means low nominal stress and long crack growth.',
  },
  {
    id: 'fr-004',
    nodeId: 'fractography',
    type: 'multiple_choice',
    prompt: 'What do several ratchet marks around the edge of a fatigue fracture indicate?',
    options: [
      'Multiple fatigue crack origins, often from high stress or a stress concentration',
      'A single brittle overload',
      'Corrosion only',
      'Creep',
    ],
    answer: 0,
    explanation:
      'Ratchet marks are small steps where neighboring cracks, started at slightly different levels, joined up. Many origins usually mean high stress or a severe notch.',
  },
  {
    id: 'fr-005',
    nodeId: 'fractography',
    type: 'true_false',
    prompt: 'The broken halves of a failed part should never be fitted back together, because that can damage the fracture surfaces.',
    answer: true,
    explanation:
      'Rubbing the halves together crushes delicate features such as striations. Surfaces should be protected from handling, corrosion and cleaning that could destroy evidence.',
  },
  {
    id: 'fr-006',
    nodeId: 'fractography',
    type: 'multiple_choice',
    prompt: 'A ductile tensile bar shows a flat center and an angled rim around it. What is the rim called?',
    options: ['Shear lip', 'Beach mark', 'Striation', 'Chevron'],
    answer: 0,
    explanation:
      'Fracture starts in the center under triaxial stress and finishes by shear at about 45° near the surface, giving the cup-and-cone shape. Wider shear lips indicate more ductile behavior.',
  },
  {
    id: 'fr-007',
    nodeId: 'fractography',
    type: 'trend',
    prompt: 'A fatigue crack grows according to the Paris law.',
    formula: 'paris-law',
    change: 'the crack gets longer at the same stress range',
    target: 'the spacing between fatigue striations',
    answer: 'increases',
    explanation:
      'ΔK grows with crack length, so the crack advances further per cycle. Striation spacing can be used to estimate stresses and cycle counts.',
  },
  {
    id: 'fr-008',
    nodeId: 'fractography',
    type: 'multiple_choice',
    prompt: 'Why is an SEM the main tool for fractography?',
    options: [
      'It has a large depth of field and high magnification, so rough fracture surfaces are in focus',
      'It changes the fracture surface chemically',
      'It measures hardness',
      'It only works on polished samples',
    ],
    answer: 0,
    explanation:
      'Optical microscopes struggle to focus on rough surfaces. The SEM shows dimples, striations and facets clearly, and EDS can identify inclusions or corrosion products at the origin.',
  },
  {
    id: 'fr-009',
    nodeId: 'fractography',
    type: 'multiple_choice',
    prompt: 'A high-strength steel bolt failed with intergranular facets and very little deformation after being electroplated. What is the likely mechanism?',
    options: ['Hydrogen embrittlement', 'Ductile overload', 'Creep', 'Wear'],
    answer: 0,
    explanation:
      'Electroplating can introduce hydrogen. High-strength steels are particularly susceptible, which is why plated parts are baked afterwards to drive hydrogen out.',
  },
  {
    id: 'fr-010',
    nodeId: 'fractography',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A fractured crankshaft shows beach marks curving around a point near a sharp fillet radius.',
    options: [
      'The part failed by fatigue',
      'The crack started near the sharp fillet',
      'A larger fillet radius would likely have improved fatigue life',
      'The part failed by a single overload',
    ],
    answers: [0, 1, 2],
    explanation:
      'Beach marks are centered on the origin. Sharp fillets concentrate stress; generous radii and surface treatments such as rolling or peening raise fatigue strength.',
  },
]

const rootCause: Question[] = [
  {
    id: 'rca-001',
    nodeId: 'root-cause-analysis',
    type: 'multiple_choice',
    prompt: 'What is usually the first step in a failure investigation?',
    options: [
      'Collect background information and document the failed part before any destructive testing',
      'Cut the part up immediately',
      'Clean the fracture surface aggressively',
      'Throw away the broken pieces',
    ],
    answer: 0,
    explanation:
      'Service history, loads, environment and photographs of the part as found are collected first. Destructive steps cannot be undone, so they come later.',
  },
  {
    id: 'rca-002',
    nodeId: 'root-cause-analysis',
    type: 'multiple_choice',
    prompt: 'What is the usual order of examinations in a failure analysis?',
    options: [
      'Visual exam → NDT → fractography → metallography and chemical analysis → mechanical tests',
      'Mechanical tests → visual exam → fractography',
      'Metallography first, then photographs',
      'Any order is fine',
    ],
    answer: 0,
    explanation:
      'The sequence moves from non-destructive to destructive, so evidence is not lost before it is recorded.',
  },
  {
    id: 'rca-003',
    nodeId: 'root-cause-analysis',
    type: 'multiple_choice',
    prompt: 'What is the difference between the physical cause and the root cause of a failure?',
    options: [
      'The physical cause is the mechanism (e.g. fatigue); the root cause is why it happened (e.g. a design or maintenance decision)',
      'They are always the same',
      'The root cause is always the material',
      'The physical cause is always human error',
    ],
    answer: 0,
    explanation:
      'Saying "it failed by fatigue" does not prevent the next failure. Asking why the fatigue occurred (a sharp corner, a missed inspection, a changed supplier) leads to real corrective action.',
  },
  {
    id: 'rca-004',
    nodeId: 'root-cause-analysis',
    type: 'true_false',
    prompt: 'Damage found on a failed part is not always the cause of the failure; some damage happens during or after the failure.',
    answer: true,
    explanation:
      'Secondary damage, such as smearing, impact marks or corrosion after fracture, must be separated from the primary failure mechanism.',
  },
  {
    id: 'rca-005',
    nodeId: 'root-cause-analysis',
    type: 'multiple_choice',
    prompt: 'What is the "five whys" technique?',
    options: [
      'Repeatedly asking "why?" to move from the symptom to the underlying cause',
      'Testing five samples',
      'Using five different microscopes',
      'Asking five people for opinions',
    ],
    answer: 0,
    explanation:
      'Example: the bolt broke (fatigue) → why? it was loose → why? it was under-torqued → why? the procedure was unclear → why? no torque specification existed.',
  },
  {
    id: 'rca-006',
    nodeId: 'root-cause-analysis',
    type: 'matching',
    prompt: 'Match each investigation step to what it reveals.',
    pairs: [
      { left: 'Chemical analysis', right: 'Whether the alloy matches its specification' },
      { left: 'Metallography', right: 'Microstructure, heat treatment and defects' },
      { left: 'Hardness testing', right: 'Whether the heat treatment reached the required strength' },
      { left: 'Fractography', right: 'The failure mechanism and where it started' },
    ],
    explanation:
      'Each method answers a different question; together they build a consistent explanation of the failure.',
  },
  {
    id: 'rca-007',
    nodeId: 'root-cause-analysis',
    type: 'multiple_choice',
    prompt: 'What is a fishbone (Ishikawa) diagram used for?',
    options: [
      'Organizing possible causes into categories such as materials, methods, machines, people and environment',
      'Showing the crystal structure',
      'Plotting stress against strain',
      'Measuring corrosion rate',
    ],
    answer: 0,
    explanation:
      'It helps a team consider all possible contributing factors before narrowing down with evidence.',
  },
  {
    id: 'rca-008',
    nodeId: 'root-cause-analysis',
    type: 'trend',
    prompt: 'An investigator compares a failed part with an unused part from the same batch.',
    change: 'more comparison evidence (same batch, exemplar parts, service records) is gathered',
    target: 'confidence in the conclusion',
    answer: 'increases',
    explanation:
      'Comparing failed and unfailed parts shows whether the material was defective or the service conditions were unusual. A conclusion should explain all the evidence.',
  },
  {
    id: 'rca-009',
    nodeId: 'root-cause-analysis',
    type: 'multiple_choice',
    prompt: 'What makes a good corrective action after a failure analysis?',
    options: [
      'One that removes the root cause, so similar failures are prevented across all similar parts',
      'Replacing only the broken part with an identical one',
      'Blaming the operator',
      'Doing nothing if nobody was hurt',
    ],
    answer: 0,
    explanation:
      'A changed design, specification, inspection interval or procedure prevents recurrence. Replacing like for like invites the same failure again.',
  },
  {
    id: 'rca-010',
    nodeId: 'root-cause-analysis',
    type: 'cause_effect',
    prompt: 'Select every sound investigation practice.',
    scenario: 'A pump shaft has broken at a chemical plant.',
    options: [
      'Photograph the parts as found before moving them',
      'Record the operating history, loads and environment',
      'Protect the fracture surfaces from corrosion and handling',
      'Wire-brush the fracture surface to clean it',
    ],
    answers: [0, 1, 2],
    explanation:
      'Evidence must be preserved and documented. Wire brushing destroys the fine features needed to identify the failure mechanism.',
  },
]

const cases: Question[] = [
  {
    id: 'fcs-001',
    nodeId: 'failure-case-studies',
    type: 'multiple_choice',
    prompt: 'Why did several de Havilland Comet airliners break up in flight in 1954?',
    options: [
      'Fatigue cracks grew from the corners of cutouts in the pressurized fuselage, loaded by repeated pressurization cycles',
      'The engines exploded because of a fuel leak',
      'Lightning strikes melted the wings',
      'The aircraft were made of wood',
    ],
    answer: 0,
    explanation:
      'Stress concentrations at window and cutout corners, together with pressurization cycles, caused fatigue. Lessons included rounded openings and full-scale fatigue testing of airframes.',
  },
  {
    id: 'fcs-002',
    nodeId: 'failure-case-studies',
    type: 'multiple_choice',
    prompt: 'In 1988 an Aloha Airlines Boeing 737 lost a large section of its upper fuselage in flight. What was the main cause?',
    options: [
      'Many small fatigue cracks at riveted lap joints, made worse by corrosion and disbonding, linked up (multiple-site damage)',
      'A bomb',
      'A bird strike',
      'Wing ice',
    ],
    answer: 0,
    explanation:
      'The aircraft had flown nearly 90,000 short flights, each a pressurization cycle, in a humid, salty environment. It led to aging-aircraft inspection programs.',
  },
  {
    id: 'fcs-003',
    nodeId: 'failure-case-studies',
    type: 'multiple_choice',
    prompt: 'What caused the collapse of the Silver Bridge over the Ohio River in 1967?',
    options: [
      'A small crack in one eyebar of the suspension chain, grown by stress corrosion and fatigue, in a design with no redundancy',
      'An earthquake',
      'A ship collision',
      'Melting of the steel in a fire',
    ],
    answer: 0,
    explanation:
      'The crack was only a few millimeters deep, but when the eyebar failed, the whole bridge fell because no other member could carry the load. Redundancy and inspection rules followed.',
  },
  {
    id: 'fcs-004',
    nodeId: 'failure-case-studies',
    type: 'multiple_choice',
    prompt: 'Which materials issue contributed to the sinking of the Titanic in 1912?',
    options: [
      'The steel and the wrought-iron rivets became brittle in the icy water, so the hull fractured rather than deforming',
      'The hull was made of aluminum',
      'The steel corroded completely before the voyage',
      'The ship was made of wood',
    ],
    answer: 0,
    explanation:
      'Tests on recovered steel showed a high ductile-to-brittle transition temperature (high sulfur and phosphorus), and some rivets contained a lot of slag. In water near 0 °C they behaved brittlely.',
  },
  {
    id: 'fcs-005',
    nodeId: 'failure-case-studies',
    type: 'multiple_choice',
    prompt: 'The 1998 Eschede high-speed train disaster in Germany began with:',
    options: [
      'A fatigue crack in a wheel tire that broke, derailing the train',
      'A track buckling in heat',
      'An electrical fire',
      'A collision with a car',
    ],
    answer: 0,
    explanation:
      'A new rubber-damped wheel design let the steel tire flex with every revolution, and a fatigue crack grew until it fractured. Better inspection and a return to solid wheels followed.',
  },
  {
    id: 'fcs-006',
    nodeId: 'failure-case-studies',
    type: 'true_false',
    prompt: 'The Versailles rail accident of 1842 was caused by a broken axle and helped start the scientific study of metal fatigue.',
    answer: true,
    explanation:
      'Engineers such as Rankine noticed that axles broke after long service at stresses that seemed safe, and that sharp shoulders concentrated stress. Wöhler’s systematic fatigue tests followed.',
  },
  {
    id: 'fcs-007',
    nodeId: 'failure-case-studies',
    type: 'matching',
    prompt: 'Match each failure to its main lesson.',
    pairs: [
      { left: 'Comet airliners (1954)', right: 'Avoid stress concentrations in pressurized structures and test full-scale for fatigue' },
      { left: 'Liberty ships (1940s)', right: 'Check the ductile-to-brittle transition of welded steel' },
      { left: 'Silver Bridge (1967)', right: 'Design in redundancy so one failed member is not catastrophic' },
      { left: 'Challenger (1986)', right: 'Respect the temperature limits (Tg) of polymer seals' },
    ],
    explanation:
      'Each disaster changed engineering practice. Most combine a materials mechanism with design or decision-making failures.',
  },
  {
    id: 'fcs-008',
    nodeId: 'failure-case-studies',
    type: 'trend',
    prompt: 'Think about the Aloha 737 and similar aging aircraft.',
    change: 'the number of pressurization cycles (short flights) increases',
    target: 'the risk of fatigue cracking in the fuselage',
    answer: 'increases',
    explanation:
      'Fatigue damage depends on the number of load cycles, not flight hours. Short-haul aircraft accumulate cycles quickly, so their inspections are scheduled by cycle count.',
  },
  {
    id: 'fcs-009',
    nodeId: 'failure-case-studies',
    type: 'multiple_choice',
    prompt: 'What do most major engineering failures have in common?',
    options: [
      'A combination of factors: a materials mechanism plus design, inspection or organizational shortcomings',
      'A single random cause that could not be foreseen',
      'They are always caused by the weather',
      'They always involve a manufacturing defect only',
    ],
    answer: 0,
    explanation:
      'Fatigue, brittle fracture or corrosion is usually the mechanism, but missed warnings, poor design details or skipped inspections let it reach a critical point.',
  },
  {
    id: 'fcs-010',
    nodeId: 'failure-case-studies',
    type: 'cause_effect',
    prompt: 'Select every lesson that applies.',
    scenario: 'A fatigue crack in a non-redundant structure grows undetected until sudden fracture.',
    options: [
      'Inspection intervals should be based on how fast cracks can grow',
      'Redundant load paths can prevent total collapse',
      'Reducing stress concentrations slows crack initiation',
      'Fatigue cannot be predicted or managed at all',
    ],
    answers: [0, 1, 2],
    explanation:
      'Damage-tolerant design combines crack growth predictions (e.g. the Paris law), planned inspections and redundancy. Fatigue is well understood and can be managed.',
  },
]

export const failureQuestions: Question[] = [...fractography, ...rootCause, ...cases]
