import type { Question } from '../types'
import { forNode } from './build'

// Extra questions for Physical Metallurgy and Extractive Metallurgy skills.
// Sources: Callister & Rethwisch ch. 7, 10, 11; Askeland ch. 8, 11–14; Polmear, Light Alloys; Krauss, Steels;
// Gilchrist, Extraction Metallurgy; Wills & Finch; Gaskell.

const sm = forNode('strengthening-mechanisms')
const hts = forNode('heat-treatment-steels')
const nfa = forNode('nonferrous-alloys')
const prh = forNode('precipitation-hardening')
const mp = forNode('mineral-processing')
const py = forNode('pyrometallurgy')
const hy = forNode('hydro-electrometallurgy')
const is = forNode('iron-steelmaking')

export const discPlusA: Question[] = [
  // ---- Strengthening Mechanisms ----
  sm.tr('sm-011', 'A copper sheet is cold rolled.', 'the dislocation density increases', 'the yield strength', 'increases',
    'Dislocations get in each other’s way, so more of them means more stress is needed for further slip: strain hardening.'),
  sm.mc('sm-012', 'What happens during recovery, the first stage of annealing a cold-worked metal?', [
    'Dislocations rearrange into lower-energy arrangements and internal stresses relax, with little change in grain structure',
    'New grains nucleate and grow',
    'The metal melts',
    'Grains grow very large',
  ], 0, 'Recovery partly restores properties such as electrical conductivity and relieves residual stress. Recrystallization and grain growth come later.'),
  sm.tf('sm-013', 'Precipitation hardening and solid-solution strengthening can be combined in the same alloy.', true,
    'Many alloys use several mechanisms at once: for example, aluminum alloys with dissolved Mg plus fine precipitates, and steels with solutes, fine grains and carbides.'),
  sm.tr('sm-014', 'A cold-worked metal is annealed.', 'the annealing temperature is raised above the recrystallization temperature', 'the ductility', 'increases',
    'Recrystallization replaces the strain-hardened grains with new, dislocation-poor grains, restoring ductility.'),
  sm.mc('sm-015', 'Why does dispersion strengthening with stable oxide particles (e.g. ODS alloys) work well at high temperature?', [
    'The particles do not dissolve or coarsen, so they keep blocking dislocations when hot',
    'The particles melt and fill grain boundaries',
    'The particles make the metal amorphous',
    'The particles remove all dislocations',
  ], 0, 'Precipitates can dissolve or coarsen when hot, but insoluble oxides stay fine and stable, which helps creep resistance.'),
  sm.mt('sm-016', 'Match each annealing stage to what happens.', [
    ['Recovery', 'Dislocations rearrange; residual stresses relax'],
    ['Recrystallization', 'New strain-free grains form'],
    ['Grain growth', 'Grains coarsen to reduce boundary area'],
  ], 'Heating a cold-worked metal moves through these stages as temperature or time increases.'),
  sm.tr('sm-017', 'Pure metals and alloys are recrystallized.', 'small amounts of impurities or alloying elements are present', 'the recrystallization temperature', 'increases',
    'Solute atoms drag on moving grain boundaries and pin dislocations, so higher temperatures are needed to recrystallize.'),
  sm.mc('sm-018', 'How do precipitates block dislocations when they are too large or strong to be cut?', [
    'Dislocations bow out between them and loop around them (Orowan bypassing)',
    'Precipitates absorb dislocations completely',
    'Dislocations jump over them at no cost',
    'They make dislocations disappear',
  ], 0, 'The stress to bow a dislocation between particles rises as particle spacing falls, so fine, closely spaced particles strengthen the most.'),
  sm.tf('sm-019', 'Strain hardening is used to strengthen pure metals and non-heat-treatable alloys, such as 1xxx, 3xxx and 5xxx aluminum.', true,
    'Without useful precipitates, cold work is the main way to raise strength. Tempers such as H14 or H18 mark the amount of cold work.'),
  sm.ce('sm-020', 'Select every correct statement.', 'A designer needs a stronger copper conductor while keeping conductivity as high as possible.', [
    'Cold work strengthens copper with only a small loss of conductivity',
    'Adding large amounts of solute strengthens it but sharply lowers conductivity',
    'Small precipitation-hardening additions (e.g. Cr) can raise strength while most solute leaves the matrix',
    'Melting the copper repeatedly will strengthen it',
  ], [0, 1, 2], 'Dislocations scatter electrons only weakly, dissolved solutes scatter strongly, and precipitates remove solute from the matrix, so Cu–Cr is a good compromise.'),

  // ---- Heat Treatment of Steels ----
  hts.mc('hts-013', 'What is normalizing used for?', [
    'Refining a coarse grain structure (e.g. after forging) by austenitizing and air cooling',
    'Making the steel as hard as possible',
    'Adding carbon to the surface',
    'Making the steel non-magnetic',
  ], 0, 'Air cooling gives a fine, uniform pearlite and ferrite structure, removing coarse grains and segregation left by hot working.'),
  hts.tr('hts-014', 'Different-sized parts of the same steel are quenched in oil.', 'the part diameter increases', 'the hardness at the center of the part', 'decreases',
    'Larger sections cool more slowly in their centers, so less martensite forms there. This is the mass effect.'),
  hts.tf('hts-015', 'Martensite forms with a volume increase, which is one reason quenching can cause distortion and cracks.', true,
    'Austenite (FCC) turns into less densely packed BCT martensite. When the surface and core transform at different times, large internal stresses arise.'),
  hts.mc('hts-016', 'What is austempering?', [
    'Quenching to a temperature above Mₛ and holding there until the austenite turns into bainite',
    'Tempering martensite at a very high temperature',
    'Heating to melt the surface',
    'Cooling slowly in the furnace',
  ], 0, 'Austempering gives tough bainite with less distortion than quench-and-temper, because it avoids the volume change of forming martensite.'),
  hts.mc('hts-017', 'What is martempering (marquenching) designed to reduce?', [
    'Distortion and cracking, by equalizing the temperature just above Mₛ before cooling through the martensite range',
    'The hardness of martensite',
    'The carbon content',
    'The grain size',
  ], 0, 'Holding briefly just above Mₛ lets the surface and core reach the same temperature, so martensite forms more uniformly afterwards. The part is still tempered later.'),
  hts.tr('hts-018', 'A steel part is induction hardened.', 'the heating time is shortened (only a thin surface layer reaches austenite)', 'the depth of the hardened case', 'decreases',
    'Induction and flame hardening heat only the surface into the austenite range before quenching. Less heating means a thinner hard layer over a tough core.'),
  hts.mt('hts-019', 'Match each treatment to its result.', [
    ['Spheroidizing', 'Soft, machinable structure with round carbides'],
    ['Quench and temper', 'Strong, tough tempered martensite'],
    ['Austempering', 'Bainite with low distortion'],
    ['Stress relief anneal', 'Lower residual stresses without phase change'],
  ], 'Each treatment targets a different balance of strength, toughness, machinability and distortion.'),
  hts.ce('hts-020', 'Select every likely cause.', 'A water-quenched high-carbon steel part cracked before tempering.', [
    'The quench was too severe for the part’s shape and carbon content',
    'Sharp corners concentrated the transformation stresses',
    'The part was left untempered too long, while brittle and highly stressed',
    'The part was cooled too slowly',
  ], [0, 1, 2], 'Quench cracks come from large thermal and transformation stresses in brittle martensite. Milder quenchants, rounded corners and prompt tempering help.'),

  // ---- Non-ferrous Alloys ----
  nfa.mc('nfa-011', 'What does the temper designation T6 mean for an aluminum alloy?', [
    'Solution heat treated, then artificially aged',
    'Cold worked to full hardness',
    'Annealed (softest condition)',
    'As cast, no treatment',
  ], 0, 'T tempers describe heat treatments: T4 is naturally aged, T6 artificially aged to peak strength, and T7 overaged. H tempers describe cold work, and O means annealed.'),
  nfa.tf('nfa-012', 'Copper does not form a protective film in air, so it corrodes much faster than aluminum.', false,
    'Copper is fairly noble and forms a stable green patina (a mixture of copper salts) outdoors, so it corrodes slowly in most atmospheres, which is why copper roofs last for a century.'),
  nfa.mc('nfa-013', 'Why are nickel-based alloys like Inconel used in chemical plants and gas turbines?', [
    'They combine high-temperature strength with good resistance to oxidation and corrosion',
    'They are the cheapest metals',
    'They are the lightest metals',
    'They are not affected by heat at all',
  ], 0, 'Chromium-rich nickel alloys form protective oxides, and the stable FCC matrix keeps its strength when hot.'),
  nfa.tr('nfa-014', 'A Cu–Be alloy is solution treated and then aged.', 'the alloy is aged to its peak condition', 'its strength', 'increases',
    'Beryllium copper is precipitation hardened and becomes one of the strongest copper alloys, used for springs and non-sparking tools.'),
  nfa.mc('nfa-015', 'What makes zinc useful for die casting?', [
    'A low melting point (about 420 °C) and good fluidity',
    'Very high stiffness',
    'Extreme high-temperature strength',
    'It never needs a mold',
  ], 0, 'Zinc alloys fill thin, detailed dies easily at low temperature, giving long die life for parts like housings and hardware.'),
  nfa.mt('nfa-016', 'Match each alloy to a typical use.', [
    ['70/30 cartridge brass', 'Deep-drawn ammunition cases'],
    ['Phosphor bronze', 'Springs and bearings'],
    ['Cupronickel', 'Marine pipes and coins'],
    ['6061 aluminum', 'General structural extrusions'],
  ], 'Copper and aluminum alloys are chosen for formability, corrosion resistance and strength in different combinations.'),
  nfa.tr('nfa-017', 'A titanium alloy is chosen for an airframe part instead of steel.', 'titanium replaces steel in a part of the same strength', 'the part’s mass', 'decreases',
    'Titanium has a similar strength to many steels at about 57% of the density, so the same strength costs less weight.'),
  nfa.tf('nfa-018', 'Most magnesium alloys are cast (often die cast) rather than heavily cold formed, because HCP magnesium has limited slip at room temperature.', true,
    'Wrought magnesium is usually formed warm, when more slip systems become active.'),
  nfa.mc('nfa-019', 'Why are aluminum alloys of the 5xxx series popular for ship hulls and tanks?', [
    'Magnesium gives good strength by solid solution, with excellent corrosion resistance and weldability',
    'They are precipitation hardened to the highest strength',
    'They contain copper for strength',
    'They are magnetic',
  ], 0, 'Al–Mg alloys keep their properties well after welding (no precipitates to dissolve) and resist seawater, unlike high-copper 2xxx alloys.'),
  nfa.ce('nfa-020', 'Select every correct statement.', 'A 2xxx (Al–Cu) aluminum alloy is used in an aircraft lower wing.', [
    'It is precipitation hardened',
    'It has good fatigue and damage tolerance',
    'Its copper makes it less corrosion resistant, so it is often clad with pure aluminum',
    'It is the easiest aluminum alloy to weld',
  ], [0, 1, 2], 'Alclad sheet has a thin pure-aluminum layer for protection. High-copper alloys are generally hard to fusion weld and are riveted instead.'),

  // ---- Precipitation Hardening ----
  prh.pr('prh-011', 'The alloy has been aged too long and lost some strength. Where on the curve is it?', 'aging_curve', 'overaged',
    'Past the peak, precipitates coarsen and space out, so hardness falls.'),
  prh.mc('prh-012', 'What are Guinier–Preston (GP) zones?', [
    'Tiny clusters of solute atoms that form early in aging and are coherent with the matrix',
    'Large precipitates at grain boundaries',
    'Grain boundaries in castings',
    'Pores in powder parts',
  ], 0, 'In Al–Cu, GP zones are a few atomic layers of copper. They strain the lattice and start the hardening sequence that continues with θ″ and θ′.'),
  prh.tr('prh-013', 'Two alloys are aged to the same strength.', 'the precipitates are finer and more closely spaced', 'the strengthening effect', 'increases',
    'More obstacles closer together force dislocations to bow more sharply, raising the stress needed for slip.'),
  prh.tf('prh-014', 'A coherent precipitate has a lattice that matches the matrix across the interface, causing elastic strain around it.', true,
    'Coherency strains add to the strengthening. When precipitates grow and lose coherency, this contribution disappears.'),
  prh.mc('prh-015', 'Why are precipitation-hardened aluminum alloys not used for long-term service at high temperatures?', [
    'At high temperature the precipitates coarsen (overage), so strength falls over time',
    'They melt at 200 °C',
    'They become magnetic',
    'They grow stronger without limit',
  ], 0, 'Service above the aging temperature continues aging, eventually overaging the alloy. That is why most aluminum alloys are limited to about 150–200 °C.'),
  prh.mt('prh-016', 'Match each step to its purpose.', [
    ['Solution treatment', 'Dissolve the solute into one phase'],
    ['Quench', 'Trap the solute in supersaturated solution'],
    ['Aging', 'Form fine strengthening precipitates'],
  ], 'Each step sets up the next; skipping or delaying the quench ruins the strengthening.'),
  prh.tr('prh-017', 'A precipitation-hardenable alloy is solution treated.', 'the delay between leaving the furnace and quenching gets longer', 'the strength reached after aging', 'decreases',
    'Slow cooling lets coarse precipitates form at grain boundaries, removing solute that should form fine precipitates. Quench delays are tightly limited.'),
  prh.mc('prh-018', 'What is a precipitate-free zone (PFZ) near a grain boundary?', [
    'A thin weak region where solute and vacancies drained to the boundary, so no fine precipitates formed',
    'The strongest part of the alloy',
    'A crack',
    'A region of pure precipitate',
  ], 0, 'Soft zones along grain boundaries can concentrate strain and lower ductility and stress-corrosion resistance.'),
  prh.tf('prh-019', 'Precipitation hardening is used not only in aluminum alloys but also in some stainless steels, nickel superalloys and copper–beryllium.', true,
    'Any alloy with a strongly temperature-dependent solubility can be age hardened. Examples include 17-4 PH stainless steel and γ′ in superalloys.'),
  prh.ce('prh-020', 'Select every correct statement.', 'A 7075 aluminum part is welded.', [
    'The weld heat dissolves or overages the precipitates near the weld',
    'The heat-affected zone becomes softer than the base metal',
    'Re-solution treating and aging the whole part could restore strength',
    'Welding makes the whole part stronger',
  ], [0, 1, 2], 'Welding undoes precipitation hardening locally. That is why high-strength aluminum structures are often riveted or bonded instead.'),

  // ---- Mineral Processing ----
  mp.mc('mp-011', 'What is the "grade" of an ore?', [
    'The concentration of the valuable metal or mineral in it',
    'Its particle size',
    'Its color',
    'Its hardness',
  ], 0, 'Copper ores are often below 1% Cu. Concentration raises the grade before smelting.'),
  mp.tr('mp-012', 'A flotation circuit is adjusted.', 'more of the valuable mineral is recovered into the concentrate (higher recovery)', 'the grade of the concentrate (typically)', 'decreases',
    'Pulling in more mineral also pulls in more gangue and middlings, so grade and recovery usually trade off.'),
  mp.tf('mp-013', 'Tailings are the waste left after the valuable minerals have been separated out.', true,
    'Tailings are stored in engineered dams or dry stacks. Their safe storage is a major environmental responsibility of mining.'),
  mp.mc('mp-014', 'Which equipment is commonly used for grinding ore to a fine size?', ['Ball mills', 'Blast furnaces', 'Electrolytic cells', 'Rolling mills'], 0,
    'Rotating ball mills tumble steel balls with ore and water, grinding particles down to tens of micrometers.'),
  mp.mt('mp-015', 'Match each flotation reagent to its job.', [
    ['Collector', 'Makes the target mineral water-repellent'],
    ['Frother', 'Stabilizes the air bubbles'],
    ['Depressant', 'Keeps unwanted minerals wetted'],
  ], 'Reagent chemistry is tuned to each ore so that only the valuable mineral rides the bubbles.'),
  mp.tr('mp-016', 'A gravity separator works on density differences.', 'the density difference between the mineral and the gangue increases', 'how well they separate', 'increases',
    'Gravity methods rely on heavy particles settling faster. Gold and cassiterite separate easily from light quartz.'),
  mp.mc('mp-017', 'What is the purpose of classification (e.g. hydrocyclones) in a grinding circuit?', [
    'Sending fine enough particles on and returning coarse ones for more grinding',
    'Melting the ore',
    'Leaching the metal',
    'Measuring hardness',
  ], 0, 'Closed-circuit grinding avoids over-grinding particles that are already fine enough, saving energy.'),
  mp.tf('mp-018', 'Iron ore fines are often pelletized or sintered before going to a blast furnace, so gas can flow through the burden.', true,
    'Fine powder would pack tightly and block gas flow. Pellets and sinter give a permeable, strong charge.'),
  mp.mc('mp-019', 'Why is froth flotation the most widely used method for copper sulfide ores?', [
    'Sulfide minerals can be made selectively hydrophobic and floated away from silicate gangue',
    'Copper sulfides are magnetic',
    'Copper sulfides are lighter than water',
    'It requires no grinding',
  ], 0, 'Flotation can concentrate a 0.5% Cu ore into a concentrate of around 25–30% Cu.'),
  mp.ce('mp-020', 'Select every correct statement.', 'A mine’s ore grade gradually falls over the years.', [
    'More ore must be mined and processed for each tonne of metal',
    'Energy and water use per tonne of metal tend to rise',
    'Efficient grinding and separation become even more important',
    'The concentrate grade no longer matters',
  ], [0, 1, 2], 'Lower grades mean moving and grinding more rock for the same metal, which is a major driver of mining costs and environmental impact.'),

  // ---- Pyrometallurgy ----
  py.mc('py-011', 'What does calcination do?', [
    'Heats a mineral to drive off gases such as CO₂ or water, e.g. limestone to lime',
    'Dissolves the ore in acid',
    'Electrolyzes the metal',
    'Crushes the ore',
  ], 0, 'Calcination of CaCO₃ gives CaO and CO₂. It is an important flux preparation step and a large source of CO₂ in steel and cement making.'),
  py.tr('py-012', 'A metal oxide is reduced by hydrogen gas.', 'the H₂/H₂O ratio of the gas increases', 'its ability to reduce the oxide', 'increases',
    'Like CO/CO₂, a gas richer in the reducing species has a lower oxygen potential and can reduce more stable oxides. This is the basis of hydrogen direct reduction of iron ore.'),
  py.tf('py-013', 'On an Ellingham diagram, the CaO and Al₂O₃ lines lie near the bottom, so these oxides are very hard to reduce.', true,
    'Their very negative formation energies mean carbon cannot practically reduce them, which is why aluminum is made by electrolysis.'),
  py.mc('py-014', 'Why does a slag need to be fluid at the smelting temperature?', [
    'So it separates cleanly from the metal and can be tapped off',
    'So it dissolves the furnace',
    'So it becomes the product metal',
    'So it cools the furnace',
  ], 0, 'Viscous slag traps metal droplets and slows reactions. Flux additions adjust its melting point and viscosity.'),
  py.mt('py-015', 'Match each pyrometallurgical step to its purpose.', [
    ['Roasting', 'Convert sulfide to oxide'],
    ['Smelting', 'Melt and separate metal (or matte) from slag'],
    ['Converting', 'Blow air or oxygen through matte or iron to remove impurities'],
    ['Fire refining', 'Remove remaining oxygen and impurities before casting'],
  ], 'Pyrometallurgy proceeds through a chain of high-temperature steps, each removing more impurities.'),
  py.tr('py-016', 'Consider a metal oxide whose Ellingham line slopes upward.', 'the temperature increases', 'the ease of reducing that oxide with carbon', 'increases',
    'The metal oxide becomes less stable while carbon monoxide becomes more stable, so above the crossing point carbon reduction works.'),
  py.mc('py-017', 'What is "slag basicity" usually based on?', [
    'The ratio of basic oxides (mainly CaO, MgO) to acidic oxides (mainly SiO₂)',
    'The color of the slag',
    'The slag’s temperature only',
    'The amount of iron in the metal',
  ], 0, 'Basic slags absorb sulfur and phosphorus better, which is why steelmaking uses lime-rich slags.'),
  py.tf('py-018', 'Pyrometallurgy usually works best for high-grade concentrates, while low-grade ores often suit hydrometallurgy better.', true,
    'Heating and melting large amounts of low-grade rock wastes energy; leaching can treat low-grade ores without melting them.'),
  py.mc('py-019', 'Why are zinc and magnesium sometimes recovered as vapors during reduction?', [
    'Their boiling points are low enough that they evaporate at smelting temperatures and are condensed',
    'They are gases at room temperature',
    'They cannot be reduced',
    'They dissolve in slag',
  ], 0, 'Zinc boils at about 907 °C, so in carbothermic reduction it leaves as vapor and is condensed, separating it from the residue.'),
  py.ce('py-020', 'Select every correct statement.', 'A copper smelter wants to cut its environmental impact.', [
    'Capture SO₂ and convert it to sulfuric acid',
    'Recover heat from hot off-gases',
    'Increase recycling of copper scrap',
    'Release SO₂ directly to the air',
  ], [0, 1, 2], 'Modern smelters capture most of the sulfur, recover energy and blend in scrap. Uncontrolled SO₂ causes acid rain.'),

  // ---- Hydro- & Electrometallurgy ----
  hy.tr('hy-011', 'An ore is leached.', 'the leaching temperature increases', 'the leaching rate (typically)', 'increases',
    'Like most chemical reactions, dissolution speeds up when hot. Pressure leaching in autoclaves uses high temperatures to treat difficult ores.'),
  hy.mc('hy-012', 'Why are many leach solutions oxidizing (e.g. containing ferric ions or oxygen)?', [
    'Sulfide minerals and metals must be oxidized before they dissolve',
    'Oxidizers make the solution basic',
    'Oxidizers stop all reactions',
    'They are used only for color',
  ], 0, 'Copper in chalcopyrite or gold in ore is not soluble until oxidized; ferric ions or oxygen do this.'),
  hy.tf('hy-013', 'In bioleaching, bacteria help dissolve metals from low-grade sulfide ores.', true,
    'Bacteria regenerate ferric ions and oxidize sulfur, speeding up leaching of copper ores in heaps at low cost.'),
  hy.mc('hy-014', 'How is gold usually recovered from a cyanide leach solution?', [
    'Adsorption onto activated carbon, followed by stripping and electrowinning',
    'Magnetic separation',
    'Froth flotation of the solution',
    'Smelting the solution',
  ], 0, 'Carbon-in-pulp or carbon-in-leach processes load gold onto carbon granules, which are then stripped to give a concentrated solution.'),
  hy.tr('hy-015', 'An electrowinning cell operates at a fixed current.', 'the current efficiency falls because more current drives hydrogen evolution', 'the metal deposited per kilowatt-hour', 'decreases',
    'Current spent on side reactions deposits no metal, so energy per tonne of metal rises.', 'faraday'),
  hy.mt('hy-016', 'Match each hydrometallurgical step to its role.', [
    ['Leaching', 'Dissolve the metal from the ore'],
    ['Solid–liquid separation', 'Separate the solution from the residue'],
    ['Solvent extraction', 'Purify and concentrate the solution'],
    ['Electrowinning', 'Recover the metal from solution'],
  ], 'A typical copper heap leach plant runs through exactly this sequence.'),
  hy.mc('hy-017', 'Why do aluminum smelters use huge amounts of electricity?', [
    'Reducing very stable Al₂O₃ electrolytically takes a lot of energy per kilogram of aluminum',
    'They melt the aluminum many times',
    'They heat water',
    'They operate at room temperature',
  ], 0, 'About 13–15 kWh are needed per kilogram of aluminum, which is why smelters are often built near cheap hydroelectric power.'),
  hy.tf('hy-018', 'Carbon anodes in Hall–Héroult cells are consumed, because they react with oxygen to form CO₂.', true,
    'The anodes must be replaced regularly, and this reaction is a significant CO₂ source. Inert anodes are under development.'),
  hy.tr('hy-019', 'Copper is electrorefined.', 'the impurity content of the anode increases', 'the amount of anode slime produced', 'increases',
    'Noble impurities such as silver, gold and selenium do not dissolve and fall to the bottom, so dirtier anodes give more slime (and more valuable by-products).'),
  hy.ce('hy-020', 'Select every advantage of hydrometallurgy compared with smelting.', 'A company compares process routes for a new copper deposit.', [
    'It can treat low-grade oxide ores economically',
    'No sulfur dioxide gas is produced from oxide ores',
    'It can run at low temperatures',
    'It never produces any waste',
  ], [0, 1, 2], 'Hydrometallurgy still produces leach residues and needs careful water management, but it avoids melting and SO₂ emissions for suitable ores.'),

  // ---- Iron & Steelmaking ----
  is.mc('is-011', 'Why is coke, rather than coal, used in a blast furnace?', [
    'Coke is strong and porous, supporting the burden and letting gas flow, and it has had volatile matter removed',
    'Coke contains more sulfur',
    'Coke is a liquid',
    'Coal is too expensive',
  ], 0, 'The tall column of ore and coke needs a strong, permeable fuel. Some coal is still injected through the tuyeres to reduce coke use.'),
  is.tr('is-012', 'A steelmaker produces steel in a BOF.', 'more oxygen is blown in', 'the carbon content of the steel', 'decreases',
    'Oxygen burns carbon to CO and CO₂, lowering the carbon content toward the target, while also oxidizing silicon, manganese and phosphorus.'),
  is.tf('is-013', 'In a direct reduction plant, iron ore is reduced in the solid state by gases such as CO and H₂, without melting.', true,
    'The product, DRI, is fed to electric arc furnaces. Running it on hydrogen is a key route to low-CO₂ steel.'),
  is.mc('is-014', 'What happens in ladle metallurgy (secondary steelmaking)?', [
    'The steel’s composition, temperature and cleanliness are adjusted precisely after the furnace',
    'Iron ore is reduced',
    'Coke is produced',
    'The steel is rolled into sheet',
  ], 0, 'Alloying additions, deoxidation, desulfurization, degassing and inclusion removal all happen in the ladle.'),
  is.mt('is-015', 'Match each impurity or gas to the problem it causes in steel.', [
    ['Sulfur', 'Hot shortness (cracking during hot working)'],
    ['Phosphorus', 'Cold shortness (brittleness)'],
    ['Hydrogen', 'Flakes and embrittlement'],
    ['Oxygen', 'Porosity and oxide inclusions'],
  ], 'Clean steel requires controlling each of these during and after steelmaking.'),
  is.tr('is-016', 'A steel is desulfurized in the ladle.', 'the slag is made more basic (more lime)', 'the removal of sulfur from the steel', 'increases',
    'Lime-rich slags combine strongly with sulfur, drawing it out of the steel.'),
  is.mc('is-017', 'Why is manganese added to almost all steels?', [
    'It ties up sulfur as MnS, preventing hot shortness, and adds strength and hardenability',
    'It makes steel non-magnetic in small amounts',
    'It lowers the melting point a lot',
    'It removes all carbon',
  ], 0, 'Manganese sulfide is harmless at hot working temperatures, unlike low-melting FeS on grain boundaries.'),
  is.tf('is-018', 'Blast furnace slag is often used to make cement, so it is not simply waste.', true,
    'Granulated blast furnace slag has useful cementitious properties and replaces part of the clinker in cement, lowering CO₂ emissions.'),
  is.tr('is-019', 'An electric arc furnace melts scrap.', 'the fraction of contaminated scrap (with copper and tin) increases', 'the residual copper in the steel', 'increases',
    'Copper and tin cannot be removed by oxidation in steelmaking, so they build up. Clean scrap or DRI is used to dilute them.'),
  is.ce('is-020', 'Select every route that lowers CO₂ emissions per tonne of steel.', 'A steel company plans to cut its carbon footprint.', [
    'Using more scrap in electric arc furnaces',
    'Reducing iron ore with hydrogen instead of carbon',
    'Using low-carbon electricity for electric furnaces',
    'Burning more coke per tonne',
  ], [0, 1, 2], 'The blast furnace–BOF route relies on carbon as reductant; scrap recycling and hydrogen-based reduction avoid most of that CO₂.'),
]
