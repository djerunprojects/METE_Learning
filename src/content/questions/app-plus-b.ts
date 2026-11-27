import type { Question } from '../types'
import { forNode } from './build'

// Extra questions for Energy Materials, Failure Analysis and Materials Selection skills.
// Sources: Huggins, Advanced Batteries; O'Hayre et al., Fuel Cell Fundamentals; Green, Solar Cells;
// Was, Fundamentals of Radiation Materials Science; ASM Handbook Vol. 11; Ashby, Materials Selection in Mechanical Design;
// Ashby, Materials and the Environment.

const bat = forNode('battery-materials')
const fch = forNode('fuel-cells-hydrogen')
const pv = forNode('photovoltaics')
const nuc = forNode('nuclear-materials')
const fr = forNode('fractography')
const rca = forNode('root-cause-analysis')
const fcs = forNode('failure-case-studies')
const ash = forNode('ashby-charts')
const st = forNode('selection-tradeoffs')
const sus = forNode('sustainability-recycling')

export const appPlusB: Question[] = [
  // ---- Battery Materials ----
  bat.tr('bat-011', 'A battery is cycled many times.', 'the number of charge–discharge cycles increases', 'the battery’s capacity', 'decreases',
    'Each cycle consumes a little lithium in side reactions and stresses electrode particles, so capacity fades.'),
  bat.mc('bat-012', 'What limits the energy density of a battery cell?', [
    'How much lithium the electrodes can store and the cell voltage',
    'The color of the casing',
    'The length of the wires',
    'The battery label',
  ], 0, 'Energy equals charge times voltage, so high-capacity electrodes and high-voltage cathodes raise energy density.'),
  bat.tf('bat-013', 'Graphite anodes store lithium between their carbon layers.', true,
    'Lithium intercalates between graphene layers, up to one Li per six carbon atoms (LiC₆).'),
  bat.mc('bat-014', 'Why are cobalt-free cathodes being developed?', [
    'Cobalt is costly and has supply and ethical concerns',
    'Cobalt does not store lithium',
    'Cobalt makes batteries lighter',
    'Cobalt is too abundant',
  ], 0, 'LFP and high-nickel cathodes reduce or remove cobalt, easing cost and supply problems.'),
  bat.tr('bat-015', 'A lithium-ion cell is charged.', 'the charging voltage is raised above the recommended limit', 'the risk of cathode degradation and safety problems', 'increases',
    'Overcharging can destabilize the cathode, decompose the electrolyte and trigger heating.'),
  bat.mt('bat-016', 'Match each battery term to its meaning.', [
    ['Capacity', 'Total charge the battery can store'],
    ['C-rate', 'Charge or discharge rate relative to capacity'],
    ['Cycle life', 'Number of cycles before significant fade'],
    ['Energy density', 'Energy stored per mass or volume'],
  ], 'These terms describe how much energy a battery stores and how long it lasts.'),
  bat.mc('bat-017', 'Why are sodium-ion batteries attracting interest?', [
    'Sodium is abundant and cheap, though cells store less energy than lithium-ion',
    'Sodium is lighter than lithium',
    'They have the highest energy density',
    'They need no electrolyte',
  ], 0, 'Sodium-ion batteries suit stationary storage, where cost matters more than weight.'),
  bat.tf('bat-018', 'Battery recycling can recover valuable metals such as lithium, cobalt and nickel.', true,
    'Pyrometallurgical and hydrometallurgical recycling processes recover metals for new batteries.'),
  bat.tr('bat-019', 'Electrode particles in a battery are made smaller.', 'the particle size decreases', 'the rate at which lithium can enter and leave the particles', 'increases',
    'Shorter diffusion distances let lithium move in and out faster, improving power capability.'),
  bat.ce('bat-020', 'Select every correct statement.', 'A battery pack is designed for an electric vehicle.', [
    'Thermal management keeps cells in a safe temperature range',
    'The battery management system prevents overcharge and overdischarge',
    'Cell chemistry affects range, cost and safety',
    'Batteries never need cooling',
  ], [0, 1, 2], 'Safe, long-lived battery packs rely on chemistry choice, cooling and electronic control.'),

  // ---- Fuel Cells & Hydrogen ----
  fch.tr('fch-011', 'A PEM fuel cell membrane dries out.', 'the membrane water content decreases', 'its proton conductivity', 'decreases',
    'Protons move through water-filled channels, so a drier membrane conducts less and the cell loses power.'),
  fch.mc('fch-012', 'What is an electrolyzer?', [
    'A device that uses electricity to split water into hydrogen and oxygen',
    'A device that burns hydrogen',
    'A battery',
    'A solar panel',
  ], 0, 'It is a fuel cell run in reverse; with renewable electricity it produces green hydrogen.'),
  fch.tf('fch-013', 'Hydrogen has a high energy per kilogram but a low energy per liter as a gas.', true,
    'Storage is a challenge because hydrogen takes up so much volume unless compressed or liquefied.'),
  fch.mc('fch-014', 'Why is carbon monoxide poisoning a problem in PEM fuel cells?', [
    'CO binds strongly to platinum catalyst sites, blocking the reaction',
    'CO makes the membrane conduct electrons',
    'CO melts the membrane',
    'CO has no effect',
  ], 0, 'Hydrogen for PEMFCs must be very pure, especially in CO content.'),
  fch.tr('fch-015', 'An SOFC is operated.', 'the electrolyte is made thinner', 'the internal resistance of the cell', 'decreases',
    'Ions travel a shorter distance, so less voltage is lost, allowing lower operating temperatures.'),
  fch.mt('fch-016', 'Match each fuel cell component to its role.', [
    ['Electrolyte', 'Conducts ions but not electrons'],
    ['Anode', 'Fuel is oxidized'],
    ['Cathode', 'Oxygen is reduced'],
    ['Bipolar plate', 'Distributes gases and conducts current between cells'],
  ], 'Fuel cells are stacked to reach useful voltages.'),
  fch.mc('fch-017', 'Why are austenitic stainless steels often used for hydrogen service?', [
    'FCC austenite is less susceptible to hydrogen embrittlement than high-strength ferritic steels',
    'They absorb hydrogen strongly',
    'They are the cheapest steels',
    'They are magnetic',
  ], 0, 'FCC structures resist hydrogen embrittlement better than BCC high-strength steels.'),
  fch.tf('fch-018', 'Solid oxide electrolysis cells can make hydrogen efficiently at high temperature, especially with waste heat.', true,
    'High temperature lowers the electrical energy needed to split water.'),
  fch.tr('fch-019', 'Hydrogen is stored in a metal hydride.', 'the temperature is raised', 'the release of hydrogen from the hydride', 'increases',
    'Hydrogen release is endothermic, so heating drives hydrogen out.'),
  fch.ce('fch-020', 'Select every correct statement.', 'A city plans hydrogen fuel cell buses.', [
    'Hydrogen must be stored safely on board',
    'Fuel cells produce water as their main exhaust',
    'The overall carbon footprint depends on how the hydrogen is made',
    'Fuel cells burn hydrogen with a flame',
  ], [0, 1, 2], 'Fuel cells convert hydrogen electrochemically, without combustion.'),

  // ---- Photovoltaics ----
  pv.tr('pv-011', 'A silicon solar cell is made with better surface passivation.', 'surface recombination decreases', 'the cell efficiency', 'increases',
    'Passivation layers reduce defects where electrons and holes recombine, so more carriers reach the contacts.'),
  pv.mc('pv-012', 'Why are tandem solar cells more efficient than single-junction cells?', [
    'They stack materials with different band gaps to use more of the solar spectrum',
    'They are thicker',
    'They use metal electrodes only',
    'They need no light',
  ], 0, 'High-gap cells absorb blue light efficiently, and low-gap cells below them absorb red and infrared.'),
  pv.tf('pv-013', 'Solar panels lose efficiency when hot, so cooling them improves output.', true,
    'Higher temperature lowers the open-circuit voltage, reducing power.'),
  pv.mc('pv-014', 'What is the main role of the p–n junction in a solar cell?', [
    'Its electric field separates electrons and holes',
    'It absorbs all light',
    'It cools the cell',
    'It stores energy',
  ], 0, 'Without separation, electrons and holes would recombine and no current would flow.'),
  pv.tr('pv-015', 'A solar panel ages outdoors for decades.', 'the years of outdoor exposure increase', 'the power output', 'decreases',
    'Panels slowly degrade, typically about 0.5% per year, due to encapsulant aging, corrosion and defects.'),
  pv.mt('pv-016', 'Match each solar technology to a key feature.', [
    ['Monocrystalline silicon', 'High efficiency and long life'],
    ['CdTe thin film', 'Strong absorption, low cost per watt'],
    ['Perovskite', 'Rapid efficiency gains, stability challenges'],
    ['Multi-junction compound semiconductor', 'Highest efficiency, used in space'],
  ], 'Different technologies trade cost, efficiency and stability.'),
  pv.mc('pv-017', 'Why do solar panels use glass covers and polymer encapsulants?', [
    'To protect cells from moisture, mechanical damage and UV light',
    'To increase weight',
    'To block sunlight',
    'To conduct current',
  ], 0, 'Encapsulation keeps cells working for 25–30 years outdoors.'),
  pv.tf('pv-018', 'Shading one cell in a series string can reduce the power of the whole string.', true,
    'Cells in series carry the same current, so a shaded cell limits the others. Bypass diodes reduce this effect.'),
  pv.tr('pv-019', 'A solar cell absorber is made from a semiconductor with a smaller band gap.', 'the band gap decreases', 'the range of wavelengths the cell can absorb', 'increases',
    'Lower-energy photons can now be absorbed, though the voltage per carrier is lower.'),
  pv.ce('pv-020', 'Select every correct statement.', 'A team develops perovskite solar cells.', [
    'They can reach high efficiencies',
    'They are often sensitive to moisture and heat',
    'They can be paired with silicon in tandem cells',
    'They are completely stable without protection',
  ], [0, 1, 2], 'Perovskite–silicon tandems are a promising route to higher efficiency if stability can be solved.'),

  // ---- Nuclear Materials ----
  nuc.tr('nuc-011', 'A reactor component is irradiated at a temperature where defects are mobile.', 'the irradiation temperature increases (within a moderate range)', 'the irradiation hardening', 'decreases',
    'At higher temperatures more defects recombine or anneal out, reducing hardening (though swelling may increase).'),
  nuc.mc('nuc-012', 'Why are neutron-absorbing materials such as boron carbide used in control rods?', [
    'They absorb neutrons strongly, controlling the chain reaction',
    'They reflect heat',
    'They produce more neutrons',
    'They make the reactor lighter',
  ], 0, 'Boron-10 has a very high neutron absorption cross section.'),
  nuc.tf('nuc-013', 'Irradiation creep allows materials to deform slowly under stress at temperatures where normal creep would be negligible.', true,
    'Radiation-produced defects let dislocations move and climb, enabling creep at lower temperatures.'),
  nuc.mc('nuc-014', 'What is the main concern for zirconium cladding in a loss-of-coolant accident?', [
    'Rapid oxidation by steam at high temperature, producing heat and hydrogen',
    'It becomes magnetic',
    'It turns into ceramic fuel',
    'It absorbs all neutrons',
  ], 0, 'This led to research on accident-tolerant fuels and claddings such as coated zirconium and SiC.'),
  nuc.tr('nuc-015', 'UO₂ fuel is used in a reactor.', 'burnup increases', 'the build-up of fission gases in the fuel', 'increases',
    'Fission produces gases such as xenon and krypton, which can swell the fuel and pressurize the cladding.'),
  nuc.mt('nuc-016', 'Match each radiation effect to its description.', [
    ['Irradiation hardening', 'Strength rises as defects block dislocations'],
    ['Void swelling', 'Volume increase from clustered vacancies'],
    ['Helium embrittlement', 'Bubbles weaken grain boundaries'],
    ['Irradiation creep', 'Deformation under stress during irradiation'],
  ], 'Radiation changes materials in many ways that limit component life.'),
  nuc.mc('nuc-017', 'Why are surveillance capsules placed inside reactor pressure vessels?', [
    'To monitor how the vessel steel’s toughness changes with irradiation over time',
    'To store fuel',
    'To cool the reactor',
    'To measure electricity output',
  ], 0, 'Specimens are removed and tested periodically to track DBTT shift and ensure safe operation.'),
  nuc.tf('nuc-018', 'Ceramic fuels such as UO₂ crack during operation because of steep temperature gradients.', true,
    'The hot center expands more than the cooler surface, so pellets crack radially early in life.'),
  nuc.tr('nuc-019', 'A fusion reactor wall is bombarded with high-energy neutrons.', 'the neutron energy increases', 'the helium production by transmutation', 'increases',
    'High-energy fusion neutrons cause more nuclear reactions that produce helium, a major challenge for fusion materials.'),
  nuc.ce('nuc-020', 'Select every correct statement.', 'Materials are chosen for an advanced reactor core.', [
    'They must resist swelling and embrittlement under irradiation',
    'They must be compatible with the coolant',
    'Low neutron absorption can be important for structural parts near the fuel',
    'Radiation never changes materials',
  ], [0, 1, 2], 'Nuclear materials selection balances radiation resistance, corrosion and neutron economy.'),

  // ---- Fractography ----
  fr.tr('fr-011', 'A part fails by fatigue.', 'the stress amplitude increases', 'the spacing between fatigue striations', 'increases',
    'Higher stress means larger crack advance per cycle, so striations are farther apart.'),
  fr.mc('fr-012', 'What does a flat, granular, shiny fracture surface in a steel suggest?', [
    'Brittle cleavage fracture',
    'Ductile overload',
    'Creep rupture',
    'Corrosion only',
  ], 0, 'Cleavage facets reflect light, giving a bright, crystalline appearance.'),
  fr.tf('fr-013', 'Beach marks are visible to the naked eye, while striations usually need an SEM.', true,
    'Beach marks show changes in loading over many cycles; striations show individual cycles at the microscale.'),
  fr.mc('fr-014', 'What does a large shear lip on a fracture surface indicate?', [
    'Ductile behavior and plane-stress conditions near the surface',
    'Brittle cleavage throughout',
    'Hydrogen embrittlement',
    'A cast structure',
  ], 0, 'Shear lips form where material can yield freely; thick sections have smaller lips.'),
  fr.tr('fr-015', 'A brittle fracture surface is examined.', 'one moves along river patterns in the direction they converge', 'proximity to the fracture origin', 'decreases',
    'River patterns merge in the direction the crack travelled, so they converge away from the origin.'),
  fr.mt('fr-016', 'Match each fracture surface feature to its likely mechanism.', [
    ['Dimples', 'Microvoid coalescence'],
    ['Cleavage facets', 'Transgranular brittle fracture'],
    ['Intergranular facets', 'Grain boundary weakening'],
    ['Striations', 'Fatigue crack growth'],
  ], 'Fractography links surface features to how a part broke.'),
  fr.mc('fr-017', 'Why might corrosion products on a fracture surface make analysis harder?', [
    'They can cover fine features such as striations',
    'They make features sharper',
    'They have no effect',
    'They always show the origin clearly',
  ], 0, 'Careful cleaning or replicas may be needed to reveal underlying features.'),
  fr.tf('fr-018', 'Ratchet marks indicate several fatigue crack origins along an edge.', true,
    'They form where cracks started on slightly different planes and later joined.'),
  fr.tr('fr-019', 'A fatigue crack grows in a shaft.', 'the nominal stress increases', 'the size of the final fast-fracture zone', 'increases',
    'Higher stress means the remaining section fails sooner, so the fast-fracture area is larger.'),
  fr.ce('fr-020', 'Select every good practice.', 'A broken aircraft bolt arrives for fractography.', [
    'Photograph the fracture surfaces before cleaning',
    'Protect surfaces from further corrosion',
    'Examine features under stereo microscope and SEM',
    'Fit the two halves together to see how they match',
  ], [0, 1, 2], 'Fitting halves together damages delicate features; documentation and careful handling come first.'),

  // ---- Root Cause Analysis ----
  rca.tr('rca-011', 'An investigation team considers possible causes.', 'more evidence that contradicts a hypothesis is found', 'confidence in that hypothesis', 'decreases',
    'A good root cause explains all the evidence; contradictions mean the hypothesis must be revised.'),
  rca.mc('rca-012', 'Why is the service history of a failed part important?', [
    'It shows loads, environment, maintenance and time in service that may explain the failure',
    'It is never useful',
    'It only shows the color',
    'It replaces fractography',
  ], 0, 'Knowing how the part was used often points directly to fatigue, overload, corrosion or misuse.'),
  rca.tf('rca-013', 'Non-destructive tests should be done before cutting samples from a failed part.', true,
    'NDT preserves evidence and may reveal cracks or defects that guide later sectioning.'),
  rca.mc('rca-014', 'What is the purpose of an exemplar part in a failure investigation?', [
    'To compare the failed part with an unfailed one from the same batch or design',
    'To replace the failed part immediately',
    'To destroy evidence',
    'To make the report longer',
  ], 0, 'Differences between failed and unfailed parts help identify the cause.'),
  rca.tr('rca-015', 'A failure analysis is done.', 'the analysis focuses only on the physical mechanism and ignores organizational factors', 'the chance that the failure will recur', 'increases',
    'Without addressing why the mechanism occurred (design, maintenance, procedures), the same failure can happen again.'),
  rca.mt('rca-016', 'Match each investigation tool to its purpose.', [
    ['Fishbone diagram', 'Organize possible causes by category'],
    ['Five whys', 'Dig from symptom to root cause'],
    ['Fault tree', 'Map combinations of events leading to failure'],
    ['Timeline', 'Order events leading up to the failure'],
  ], 'Structured tools help teams avoid jumping to conclusions.'),
  rca.mc('rca-017', 'Why might a laboratory reproduce a suspected failure mechanism?', [
    'To confirm the hypothesis by recreating similar features under controlled conditions',
    'To avoid writing a report',
    'To damage the original evidence',
    'It is never done',
  ], 0, 'Testing similar parts under suspected conditions can confirm or rule out a mechanism.'),
  rca.tf('rca-018', 'Chemical analysis can show whether a part was made from the wrong alloy.', true,
    'Wrong material, contamination or out-of-spec composition is a common contributing cause.'),
  rca.tr('rca-019', 'A failure investigation proceeds.', 'evidence is lost through poor handling', 'the reliability of the conclusions', 'decreases',
    'Preserving evidence is essential for a sound analysis.'),
  rca.ce('rca-020', 'Select every good corrective action.', 'Fatigue cracks are found in brackets because of a sharp corner in the design.', [
    'Increase the corner radius in the design',
    'Inspect similar brackets in service',
    'Update the design standard to prevent sharp corners',
    'Replace only the failed bracket with an identical one',
  ], [0, 1, 2], 'Good corrective actions remove the root cause across all affected parts.'),

  // ---- Failure Case Studies ----
  fcs.tr('fcs-011', 'A structure has redundant load paths.', 'the number of independent load paths increases', 'the chance that one cracked member causes total collapse', 'decreases',
    'Redundancy lets other members carry the load while damage is found and repaired.'),
  fcs.mc('fcs-012', 'What was a key lesson from the de Havilland Comet accidents?', [
    'Full-scale fatigue testing and avoiding stress concentrations in pressurized fuselages',
    'Aircraft should be made of wood',
    'Pressurization is unnecessary',
    'Windows should be square',
  ], 0, 'The investigation established modern fatigue testing practices in aviation.'),
  fcs.tf('fcs-013', 'The Liberty ship failures helped drive the development of fracture mechanics and toughness testing.', true,
    'The failures showed that strength alone was not enough; toughness and crack behavior mattered.'),
  fcs.mc('fcs-014', 'Why was the Silver Bridge collapse so sudden and complete?', [
    'The eyebar chain had no redundancy, so one failed member brought down the bridge',
    'It was hit by a ship',
    'It was overloaded by a single truck',
    'It melted',
  ], 0, 'The lack of alternative load paths turned a small crack into a catastrophe.'),
  fcs.tr('fcs-015', 'An aircraft operates on short routes.', 'the number of flights per day increases', 'the rate at which fatigue damage accumulates', 'increases',
    'Each flight is a pressurization cycle, so more flights mean more fatigue cycles.'),
  fcs.mt('fcs-017', 'Match each failure to its primary mechanism.', [
    ['Comet', 'Fatigue'],
    ['Titanic', 'Brittle fracture in cold water'],
    ['Silver Bridge', 'Stress corrosion and fatigue crack in an eyebar'],
    ['Eschede', 'Fatigue of a wheel tire'],
  ], 'Recognizing mechanisms helps prevent similar failures.'),
  fcs.mc('fcs-016', 'What did the 1986 Challenger disaster show about materials?', [
    'Polymer seals can fail when used below their glass transition temperature',
    'Metals become ductile in cold',
    'Temperature never affects materials',
    'Ceramics are always brittle',
  ], 0, 'Cold O-rings lost their elasticity and could not seal the joint.'),
  fcs.tf('fcs-018', 'Many failures involve both a materials issue and human or organizational factors.', true,
    'Missed warnings, poor communication or inadequate inspection often allow a materials problem to become a disaster.'),
  fcs.tr('fcs-019', 'Engineers learn from failure case studies.', 'lessons from past failures are applied in design codes', 'the likelihood of repeating those failures', 'decreases',
    'Codes and standards often embody lessons learned from past disasters.'),
  fcs.ce('fcs-020', 'Select every general lesson from engineering failures.', 'A class reviews several famous failures.', [
    'Consider fatigue and fracture, not just static strength',
    'Account for temperature effects on materials',
    'Design with inspection and redundancy in mind',
    'Assume materials never contain flaws',
  ], [0, 1, 2], 'Real materials contain flaws and behave differently with temperature and cycling.'),

  // ---- Ashby Charts ----
  ash.pr('ash-011', 'Which region on the chart contains technical ceramics?', 'ashby_modulus_density', 'ceramics',
    'Technical ceramics such as alumina and silicon carbide have very high moduli at moderate densities.'),
  ash.pr('ash-012', 'Which region contains common polymers?', 'ashby_modulus_density', 'polymers',
    'Polymers have densities near 1–2 Mg/m³ and moduli of a few GPa.'),
  ash.tr('ash-013', 'A designer selects a material for a light, stiff beam.', 'a candidate has a higher √E/ρ', 'the beam mass needed for the same stiffness', 'decreases',
    'Maximizing √E/ρ minimizes mass for a beam of given stiffness and length.', 'index-beam'),
  ash.mc('ash-014', 'What does a guideline of slope 2 represent on a log E vs log ρ chart?', [
    'Materials with the same √E/ρ (equal for light, stiff beams)',
    'Materials with the same E/ρ',
    'Materials with the same density',
    'Materials with the same cost',
  ], 0, '√E/ρ constant means log E = 2 log ρ + constant, a line of slope 2.'),
  ash.tf('ash-015', 'Ashby charts help compare whole families of materials quickly before detailed selection.', true,
    'They show where families lie and which candidates are worth closer study.'),
  ash.tr('ash-016', 'A panel is designed for minimum mass at given bending stiffness.', 'a candidate has a higher ∛E/ρ', 'its suitability for the panel', 'increases',
    'For panels the index ∛E/ρ applies; low-density materials benefit most.', 'index-panel'),
  ash.mt('ash-017', 'Match each component to its material index for light, stiff design.', [
    ['Tie in tension', 'E/ρ'],
    ['Beam in bending', '√E/ρ'],
    ['Panel in bending', '∛E/ρ'],
  ], 'The shape of loading changes which combination of properties matters.'),
  ash.mc('ash-018', 'Why do foams appear at the lower left of a modulus–density chart?', [
    'They are mostly gas, so both density and stiffness are very low',
    'They are very dense',
    'They are metals',
    'They are ceramics',
  ], 0, 'Foams trade stiffness for very low density, useful in cushioning and sandwich cores.'),
  ash.tf('ash-019', 'Other Ashby charts compare properties such as strength vs cost or conductivity vs density.', true,
    'Charts can be made for any pair of properties relevant to a design.'),
  ash.ce('ash-020', 'Select every correct statement.', 'A designer uses an Ashby chart to pick a light, stiff tie rod.', [
    'Materials above the E/ρ guideline are better candidates',
    'CFRP scores well because of its high E/ρ',
    'Other constraints like cost and temperature must still be checked',
    'The chart alone gives the final answer with no other checks',
  ], [0, 1, 2], 'Charts guide early selection, but full design checks are still needed.'),

  // ---- Selection Trade-offs ----
  st.tr('st-011', 'A designer weighs mass and cost.', 'the penalty assigned to mass increases', 'the attractiveness of expensive lightweight materials', 'increases',
    'If saving mass is worth more, costly lightweight materials become better choices.'),
  st.mc('st-012', 'What is a constraint in materials selection?', [
    'A requirement that must be met, such as a minimum service temperature',
    'A property to maximize',
    'The color of the material',
    'A free variable',
  ], 0, 'Constraints screen out materials; objectives rank the remaining ones.'),
  st.tf('st-013', 'Free variables are design parameters the designer can change, such as thickness.', true,
    'They are eliminated when deriving material indices, leaving only material properties.'),
  st.mc('st-014', 'Why might a designer choose a familiar steel over a new high-performance alloy?', [
    'Proven data, lower risk, easier supply and established processing',
    'Steel is always lighter',
    'New alloys are always weaker',
    'Familiar materials never fail',
  ], 0, 'Risk, cost and supply often outweigh small property gains.'),
  st.tr('st-015', 'A part must operate at higher temperature.', 'the required service temperature increases', 'the number of candidate materials', 'decreases',
    'Higher temperature screens out polymers, then many metals, leaving fewer options.'),
  st.mt('st-016', 'Match each design step to its purpose.', [
    ['Translation', 'Define function, constraints and objectives'],
    ['Screening', 'Remove materials that fail constraints'],
    ['Ranking', 'Order remaining materials by index'],
    ['Documentation', 'Check detailed data and experience'],
  ], 'Systematic selection reduces guesswork.'),
  st.mc('st-017', 'Why is the manufacturing process part of materials selection?', [
    'The material must be shapeable into the required geometry at acceptable cost',
    'Process never matters',
    'All materials use the same process',
    'Processes only affect color',
  ], 0, 'Material, process and shape must be compatible.'),
  st.tf('st-018', 'A Pareto front shows designs where improving one objective worsens another.', true,
    'Designers pick from this front based on how they value each objective.'),
  st.tr('st-019', 'A component must not fail suddenly.', 'the importance of fracture toughness in the design increases', 'the preference for tough metals over brittle ceramics', 'increases',
    'Tough materials give warning and tolerate flaws.'),
  st.ce('st-020', 'Select every correct statement.', 'An engineer selects a material for a bicycle frame.', [
    'Stiffness, strength and fatigue resistance matter',
    'Mass and cost are competing objectives',
    'Steel, aluminum, titanium and CFRP are all viable depending on priorities',
    'Only one material can ever work',
  ], [0, 1, 2], 'Different riders and markets lead to different optimal choices.'),

  // ---- Sustainability & Recycling ----
  sus.tr('sus-011', 'A product is designed to last longer.', 'the product lifetime increases', 'the environmental impact per year of use', 'decreases',
    'The production impact is spread over more years of service.'),
  sus.mc('sus-012', 'What does "downcycling" mean?', [
    'Recycling a material into a lower-grade product',
    'Recycling into a higher-grade product',
    'Burning the material',
    'Sending it to landfill',
  ], 0, 'Mixed or contaminated materials often lose quality when recycled.'),
  sus.tf('sus-013', 'Steel is one of the most recycled materials in the world.', true,
    'Steel is easy to separate magnetically and can be remelted in electric arc furnaces.'),
  sus.mc('sus-014', 'Why does recycling aluminum save so much energy?', [
    'It avoids the electrolysis needed to extract aluminum from alumina',
    'Aluminum melts at a higher temperature than steel',
    'Recycled aluminum is heavier',
    'Recycling uses no energy',
  ], 0, 'Remelting needs only about 5% of the energy of primary production.'),
  sus.tr('sus-015', 'A car is made lighter.', 'the vehicle mass decreases', 'the fuel used during its life', 'decreases',
    'Lighter vehicles need less energy to accelerate and move, reducing fuel use.'),
  sus.mt('sus-016', 'Match each life-cycle phase to an example of its impact.', [
    ['Material production', 'Energy to smelt metals'],
    ['Manufacture', 'Energy to form and join parts'],
    ['Use', 'Fuel burned by a vehicle'],
    ['End of life', 'Recycling or landfill'],
  ], 'Life cycle assessment considers all phases to avoid shifting impacts.'),
  sus.mc('sus-017', 'Why are rare earth elements considered critical materials?', [
    'They are essential for magnets and electronics, but their supply is concentrated and processing is difficult',
    'They are very common and cheap',
    'They are not used in technology',
    'They are easy to recycle in all cases',
  ], 0, 'Supply risk drives efforts to reduce use, substitute and recycle.'),
  sus.tf('sus-018', 'Design for disassembly makes recycling easier and more valuable.', true,
    'Easily separated components give cleaner material streams.'),
  sus.tr('sus-019', 'Scrap is collected for recycling.', 'the scrap becomes more mixed and contaminated', 'the quality of the recycled material', 'decreases',
    'Contaminants are hard to remove and limit the use of recycled material.'),
  sus.ce('sus-020', 'Select every circular economy strategy.', 'A company aims for a circular product.', [
    'Design for repair and long life',
    'Use recycled materials',
    'Take back products at end of life',
    'Make products impossible to disassemble',
  ], [0, 1, 2], 'Circularity keeps materials in use and reduces new resource extraction.'),
]
