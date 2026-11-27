import type { SkillLesson } from '../types'

// Foundations lessons. Sources: Callister & Rethwisch ch. 1; Askeland ch. 1.

export const foundationsLessons: SkillLesson[] = [
  {
    nodeId: 'classes-of-materials',
    cards: [
      {
        title: 'Four families of materials',
        body: [
          'Engineering materials are grouped into four big families. Knowing the family already tells you a lot about how a material will behave.',
          '- **Metals**: iron and steel, aluminum, copper, titanium. Strong, tough, conduct electricity and heat.',
          '- **Ceramics**: oxides, carbides and nitrides such as alumina (Al₂O₃), silicon carbide, glass. Hard, heat resistant, brittle.',
          '- **Polymers**: plastics and rubbers such as polyethylene. Light, flexible, insulating, easy to shape.',
          '- **Composites**: two or more materials combined, such as CFRP (carbon fibers in epoxy), GFRP and concrete.',
        ],
      },
      {
        title: 'Bonding explains the differences',
        body: [
          'The way atoms are bonded is the root of each family’s properties.',
          '- In **metals**, valence electrons are shared by all atoms as a free **electron sea**. They carry current and heat, and the non-directional bonds let atomic planes slip, so metals are ductile.',
          '- In **ceramics**, **ionic and covalent bonds** hold electrons tightly. There are almost no free carriers, so they insulate, and slip is very difficult, so they are brittle.',
          '- **Polymers** are long covalent chains held to each other only by weak secondary bonds, so they soften at low temperatures and are light.',
        ],
      },
      {
        title: 'Comparing key properties',
        body: [
          '- **Density**: polymers about 0.9–2 g/cm³, ceramics about 2–6 g/cm³, metals from 2.7 (Al) to about 7.9 (steel) and beyond.',
          '- **Stiffness**: ceramics are stiffest, metals next, polymers far less stiff (a few GPa versus about 200 GPa for steel).',
          '- **Service temperature**: ceramics survive the highest temperatures (alumina melts above 2000 °C); common polymers soften at a few hundred °C at most.',
          '- **Electrical conductivity**: metals conduct best. In metals, resistivity rises with temperature, because lattice vibrations scatter the electrons more:',
        ],
        formula: 'metal-resistivity',
      },
      {
        title: 'Composites: the best of both',
        body: [
          'A composite combines materials so that each does what it is good at.',
          'In a fiber composite, the stiff, strong **fibers carry most of the load**. The **matrix** holds them in place, transfers load between them and protects them.',
          'Typical uses follow from the properties: copper for wiring (conductivity), silicon carbide for abrasives (hardness), polycarbonate for safety glasses (transparent and tough), GFRP for boat hulls (light, stiff, corrosion-free).',
        ],
      },
    ],
    keyPoints: [
      'Four families: metals, ceramics, polymers and composites.',
      'Metallic bonding (electron sea) makes metals conductive and ductile.',
      'Ionic/covalent bonding makes ceramics hard, heat resistant, insulating and brittle.',
      'Polymers are light and flexible but soften at low temperature.',
      'In composites, fibers carry the load and the matrix binds and protects them.',
    ],
  },
]
