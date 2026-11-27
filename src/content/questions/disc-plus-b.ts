import type { Question } from '../types'
import { forNode } from './build'

// Extra questions for Processing & Manufacturing and Ceramics & Glasses skills.
// Sources: Kalpakjian & Schmid; Campbell, Castings; Kou, Welding Metallurgy; German, Powder Metallurgy Science;
// DebRoy et al. (2018); Callister & Rethwisch ch. 12–13; Kingery, Bowen & Uhlmann; Barsoum; Shelby.

const sc = forNode('solidification-casting')
const fm = forNode('forming')
const wj = forNode('welding-joining')
const pm = forNode('powder-metallurgy')
const am = forNode('additive-manufacturing')
const cer = forNode('ceramic-structures')
const sin = forNode('sintering')
const gl = forNode('glass-ceramics')
const rf = forNode('refractories')

export const discPlusB: Question[] = [
  // ---- Solidification & Casting ----
  sc.tr('sc-011', 'Two castings have the same volume.', 'one has a larger surface area (e.g. thin fins)', 'its solidification time', 'decreases',
    'A larger surface area for the same volume means a smaller V/A, so heat escapes faster.', 'chvorinov'),
  sc.mc('sc-012', 'Why are chills (metal inserts) placed in a sand mold?', [
    'To speed up local cooling so that section freezes earlier and solidification moves toward the risers',
    'To add carbon to the metal',
    'To slow down cooling everywhere',
    'To hold the core in place only',
  ], 0, 'Chills help create directional solidification, so liquid metal can feed shrinkage until the riser freezes last.'),
  sc.tf('sc-013', 'Gray cast iron expands slightly near the end of solidification because graphite forms, which partly offsets shrinkage.', true,
    'Graphite is low in density, so its formation adds volume. This makes gray iron castings relatively easy to make sound.'),
  sc.mc('sc-014', 'What is a hot tear in a casting?', [
    'A crack that forms near the end of solidification, when the weak, partly solid metal is pulled by restrained contraction',
    'A crack caused by fatigue in service',
    'A pore filled with gas',
    'Sand stuck to the surface',
  ], 0, 'Alloys with a long freezing range are prone to hot tearing. Design changes and mold collapsibility reduce it.'),
  sc.tr('sc-015', 'Alloys of different composition are cast.', 'the freezing range (gap between liquidus and solidus) becomes wider', 'the tendency for spread-out (mushy) shrinkage porosity', 'increases',
    'A wide mushy zone of dendrites and liquid is hard to feed, so porosity is scattered rather than concentrated where a riser can feed it.'),
  sc.mt('sc-016', 'Match each casting defect to its main cause.', [
    ['Shrinkage cavity', 'Lack of liquid feed while freezing'],
    ['Gas porosity', 'Dissolved gas rejected on solidification'],
    ['Cold shut', 'Two metal streams meeting without fusing'],
    ['Inclusions', 'Oxide films or sand trapped in the metal'],
  ], 'Each defect has a different cause, so each needs a different fix in gating, melt treatment or mold design.'),
  sc.mc('sc-017', 'Why is the superheat (pouring temperature above the liquidus) kept moderate?', [
    'Enough to fill the mold, but too much increases gas pickup, mold reaction, shrinkage and grain size',
    'Higher is always better',
    'Superheat has no effect',
    'It must be zero',
  ], 0, 'Foundries balance fluidity against the problems caused by excessive temperature.'),
  sc.tf('sc-018', 'Directional solidification of turbine blades produces columnar grains aligned with the blade’s length.', true,
    'Withdrawing the mold slowly from the furnace makes grains grow in one direction, removing transverse grain boundaries that would weaken creep resistance.'),
  sc.tr('sc-019', 'An aluminum casting alloy is modified (e.g. with a small strontium addition).', 'the eutectic silicon becomes fine and fibrous instead of coarse plates', 'the ductility of the casting', 'increases',
    'Coarse, plate-like silicon acts like internal cracks. Fine, rounded silicon makes Al–Si castings much tougher and more ductile.'),
  sc.ce('sc-020', 'Select every correct statement.', 'An engine block is cast in a sand mold.', [
    'Thin walls will freeze much faster than thick bosses',
    'Thick sections need feeding to avoid shrinkage',
    'Faster-cooled thin walls will tend to have finer microstructure',
    'Every part of the casting freezes at the same time',
  ], [0, 1, 2], 'Varying section thickness gives different cooling rates, which is why casting design focuses on feeding paths and uniform sections.'),

  // ---- Metal Forming ----
  fm.mc('fm-011', 'What is deep drawing?', [
    'Pressing a flat sheet blank into a die to form a cup or can shape',
    'Pulling wire through a die',
    'Rolling plate into sheet',
    'Melting metal into a mold',
  ], 0, 'Beverage cans and sinks are deep drawn. Formability depends on the sheet’s strain hardening and anisotropy.'),
  fm.tr('fm-012', 'Two sheet metals are stretch formed.', 'the sheet has a higher strain-hardening exponent n', 'how much it can stretch before necking', 'increases',
    'Strong strain hardening spreads deformation over a wider area, delaying local necking, so sheets with a high n form better.'),
  fm.tf('fm-013', 'Hot rolling breaks up the coarse cast structure of an ingot and welds shut internal porosity.', true,
    'Heavy deformation at high temperature recrystallizes the grains and closes voids, turning a cast slab into sound wrought product.'),
  fm.mc('fm-014', 'Why does cold-rolled sheet often have different properties in different directions?', [
    'Rolling creates a crystallographic texture and elongated grains',
    'Cold rolling melts part of the sheet',
    'The sheet absorbs carbon unevenly',
    'Sheet always has identical properties in all directions',
  ], 0, 'Anisotropy causes earing in deep-drawn cups. Annealing and controlled rolling schedules can tailor the texture.'),
  fm.tr('fm-015', 'A billet is extruded through a die.', 'the extrusion ratio (reduction in cross-section) increases', 'the force needed', 'increases',
    'A larger reduction needs more plastic work and friction, so press force rises. Aluminum is extruded hot to keep forces manageable.'),
  fm.mt('fm-016', 'Match each forming defect to its usual cause.', [
    ['Earing in deep-drawn cups', 'Anisotropy from sheet texture'],
    ['Wrinkling', 'Compressive stresses in the flange'],
    ['Edge cracking in rolling', 'Low ductility at the strip edges'],
    ['Springback', 'Elastic recovery after unloading'],
  ], 'Recognizing the defect points to the fix: different sheet, blank holder force, rolling schedule or die design.'),
  fm.mc('fm-017', 'What is warm forming?', [
    'Forming below the recrystallization temperature but above room temperature, lowering forces while keeping good dimensional control',
    'Forming at the melting point',
    'Forming at cryogenic temperatures',
    'Casting into warm molds',
  ], 0, 'It is a compromise between cold work’s precision and hot work’s low forces, useful for magnesium and high-strength steels.'),
  fm.tf('fm-018', 'Friction between the workpiece and the dies raises the forming force, so lubricants are used.', true,
    'Lubrication reduces force, wear and surface damage. In hot forging, glass or graphite lubricants are common.'),
  fm.tr('fm-019', 'A cold-worked brass sheet is held at room temperature in a corrosive atmosphere.', 'high residual stresses from cold work remain', 'the risk of stress corrosion cracking ("season cracking")', 'increases',
    'Cold-worked brass with residual tensile stress cracks in ammonia environments. A low-temperature stress relief anneal prevents it.'),
  fm.ce('fm-020', 'Select every correct statement.', 'A manufacturer switches from machining a gear blank out of bar to forging it close to shape.', [
    'Less material is wasted as chips',
    'Grain flow can follow the gear’s contour, improving fatigue strength',
    'Forging tools are costly, so it pays off at higher volumes',
    'Forging always gives a finished surface needing no machining',
  ], [0, 1, 2], 'Near-net forging saves material and improves properties, but most forgings still need some finish machining.'),

  // ---- Welding & Joining ----
  wj.tr('wj-011', 'Two welds are made with different energy input.', 'the heat input per unit length increases', 'the width of the heat-affected zone', 'increases',
    'More heat spreads further into the base metal and cools more slowly, widening the HAZ and coarsening its grains.'),
  wj.mc('wj-012', 'What is solidification (hot) cracking in welds?', [
    'Cracking in the weld metal as it finishes freezing, when liquid films between grains cannot resist shrinkage stresses',
    'Hydrogen cracking hours after welding',
    'Fatigue in service',
    'Corrosion at the weld toe',
  ], 0, 'Impurities such as sulfur and phosphorus widen the freezing range. Filler choice and joint design help prevent it.'),
  wj.tf('wj-013', 'Friction stir welding joins metals in the solid state, without melting them.', true,
    'A rotating tool heats and stirs the metal plastically. It is widely used for aluminum alloys that are hard to fusion weld.'),
  wj.mc('wj-014', 'Why are post-weld heat treatments applied to thick steel welds?', [
    'To relieve residual stresses and temper hard HAZ martensite',
    'To make the weld magnetic',
    'To add filler metal',
    'To remove the weld',
  ], 0, 'Stress relief and tempering lower the risk of cracking and improve toughness in pressure vessels and pipelines.'),
  wj.tr('wj-015', 'A steel weld cools after welding.', 'the cooling rate through the transformation range increases', 'the hardness of the HAZ', 'increases',
    'Faster cooling favors martensite in hardenable steels, raising hardness and cracking risk.'),
  wj.mt('wj-016', 'Match each joining process to a typical use.', [
    ['Resistance spot welding', 'Car body sheet steel'],
    ['Submerged arc welding', 'Thick plate and pipe seams'],
    ['Soldering', 'Electronics circuit boards'],
    ['Adhesive bonding', 'Joining composites and dissimilar materials'],
  ], 'The process is chosen by material, thickness, production rate and joint performance.'),
  wj.mc('wj-017', 'Why is joining aluminum to steel by fusion welding difficult?', [
    'Brittle iron–aluminum intermetallic compounds form at the interface',
    'Aluminum is magnetic',
    'Steel melts at a lower temperature',
    'They are the same metal',
  ], 0, 'Solid-state or mechanical methods (friction welding, rivets, adhesives) are often used for aluminum–steel joints.'),
  wj.tf('wj-018', 'Residual stresses from welding can reach the yield strength of the material near the weld.', true,
    'The hot weld shrinks while restrained by cold surrounding metal, leaving high tensile stresses that affect fatigue and stress corrosion.'),
  wj.tr('wj-019', 'Austenitic stainless steel is welded.', 'the base metal has a very low carbon content (e.g. 304L)', 'the risk of sensitization in the HAZ', 'decreases',
    'With little carbon, few chromium carbides can form at grain boundaries, so the HAZ keeps its corrosion resistance.'),
  wj.ce('wj-020', 'Select every good practice.', 'A thick, high-strength steel is to be welded for a crane.', [
    'Use low-hydrogen consumables and keep them dry',
    'Preheat according to carbon equivalent and thickness',
    'Control heat input to avoid excessive hardness or grain growth',
    'Quench the weld in cold water to speed up production',
  ], [0, 1, 2], 'These steps prevent hydrogen cracking and preserve toughness. Quenching would create hard, crack-prone martensite.'),

  // ---- Powder Metallurgy ----
  pm.mc('pm-011', 'What is metal injection molding?', [
    'Fine powder mixed with a binder is injection molded, debound and sintered into small complex parts',
    'Pouring molten metal into a mold',
    'Pressing powder without heating',
    'Machining from bar',
  ], 0, 'It combines the shape freedom of plastic injection molding with metal properties, for parts like watch cases and surgical tools.'),
  pm.tr('pm-012', 'Powder is pressed in a rigid die from one end.', 'the distance from the moving punch increases', 'the local green density', 'decreases',
    'Friction with the die walls reduces pressure deeper in the compact. Double-action presses and lubricants reduce the density gradient.'),
  pm.tf('pm-013', 'Sintered parts usually shrink during sintering as porosity closes.', true,
    'Shrinkage must be predicted to hit final dimensions; uneven density leads to warping.'),
  pm.mc('pm-014', 'Why is sintering often done in a protective atmosphere (e.g. hydrogen or nitrogen mixtures)?', [
    'To prevent oxidation and reduce oxide films on powder surfaces, so particles can bond',
    'To add color',
    'To cool the parts faster',
    'To melt the powder completely',
  ], 0, 'Oxide films block diffusion between particles; a reducing atmosphere removes them and protects hot parts.'),
  pm.tr('pm-015', 'Iron powder parts are sintered.', 'the sintering time increases at a fixed temperature', 'the strength of the sintered part', 'increases',
    'Longer sintering grows the necks between particles and rounds pores, increasing strength, though with diminishing returns.'),
  pm.mt('pm-016', 'Match each powder production method to its typical powder.', [
    ['Gas atomization', 'Spherical powder, good flow'],
    ['Water atomization', 'Irregular powder, good compaction'],
    ['Chemical reduction', 'Spongy, porous particles (e.g. sponge iron)'],
    ['Electrolysis', 'High-purity dendritic powder (e.g. copper)'],
  ], 'Particle shape and purity affect how powders flow, pack and sinter.'),
  pm.mc('pm-017', 'Why is powder forging used for connecting rods?', [
    'Hot forging a sintered preform removes nearly all porosity, giving strength close to wrought steel with little scrap',
    'It makes the part porous',
    'It avoids any heating',
    'It is the only way to make steel',
  ], 0, 'Powder forging combines near-net-shape efficiency with high density for fatigue-loaded parts.'),
  pm.tf('pm-018', 'Cemented carbides get their hardness from carbide grains and their toughness from the metal binder.', true,
    'Increasing cobalt content raises toughness but lowers hardness and wear resistance, so grades are tuned to the job.'),
  pm.tr('pm-019', 'A cemented carbide grade is chosen.', 'the cobalt binder content increases', 'the hardness and wear resistance', 'decreases',
    'More soft binder means less hard carbide, so hardness drops while toughness rises.'),
  pm.ce('pm-020', 'Select every reason to choose powder metallurgy for this part.', 'A company needs a million small, complex gears per year.', [
    'Near-net shape with little machining',
    'Very little material waste',
    'Low cost per part at high volume despite tooling costs',
    'The highest possible fatigue strength without any further processing',
  ], [0, 1, 2], 'Pressed-and-sintered parts retain some porosity, so the highest fatigue strength needs extra steps such as powder forging or HIP.'),

  // ---- Additive Manufacturing ----
  am.tr('am-011', 'A powder bed fusion build is planned.', 'the layer thickness is reduced', 'the surface roughness on sloped surfaces', 'decreases',
    'Thinner layers make smaller "stair steps" on inclined surfaces, though the build takes longer.'),
  am.mc('am-012', 'Why do overhanging features in powder bed fusion often need support structures?', [
    'To hold them in place, conduct heat away and resist warping from residual stress',
    'To add color',
    'To make the part heavier',
    'Supports are never needed',
  ], 0, 'Unsupported overhangs can sag, overheat or curl. Supports are removed afterwards, which adds cost.'),
  am.tf('am-013', 'Unused powder in powder bed fusion can often be sieved and reused, though its quality must be monitored.', true,
    'Repeated reuse can pick up oxygen and change particle size, so powder is tested and blended with fresh powder.'),
  am.mc('am-014', 'How is energy density in laser powder bed fusion commonly controlled?', [
    'Through laser power, scan speed, hatch spacing and layer thickness',
    'Only by the color of the powder',
    'Only by room temperature',
    'By the part’s final weight',
  ], 0, 'These parameters set how much energy each volume of powder receives, which decides between lack of fusion, good density and keyholing.'),
  am.tr('am-015', 'A powder bed fusion process is running at the right energy density.', 'the scan speed is greatly increased at the same laser power', 'the lack-of-fusion porosity', 'increases',
    'Faster scanning puts less energy into each spot, so powder may not fully melt or bond to the layer below.'),
  am.mt('am-016', 'Match each post-processing step to its purpose.', [
    ['Stress relief heat treatment', 'Reduce residual stresses'],
    ['HIP', 'Close internal pores'],
    ['Machining or polishing', 'Improve surface finish and tolerances'],
    ['Support removal', 'Free the part from build supports'],
  ], 'Most metal AM parts need several post-processing steps before use.'),
  am.mc('am-017', 'Why is titanium Ti-6Al-4V popular in additive manufacturing?', [
    'It is expensive to machine, so near-net shapes save material, and it suits aerospace and implant parts',
    'It is the cheapest metal',
    'It cannot be cast',
    'It does not need any protective atmosphere',
  ], 0, 'Machining titanium wastes much costly material. AM reduces the "buy-to-fly" ratio and enables lattice implants.'),
  am.tf('am-018', 'The as-built surface of a powder bed fusion part is usually rougher than a machined surface, which can lower fatigue strength.', true,
    'Partly melted powder particles stick to surfaces and act as crack starters, so fatigue-critical surfaces are machined.'),
  am.tr('am-019', 'A part is built by powder bed fusion with a heated build plate.', 'the build plate temperature increases', 'the residual stress in the part', 'decreases',
    'Smaller temperature differences between new layers and the part reduce thermal stresses and distortion.'),
  am.ce('am-020', 'Select every good reason to use additive manufacturing here.', 'A team designs a lightweight bracket with internal lattices for a satellite.', [
    'Complex internal lattices are impossible to machine',
    'Only a few parts are needed, so no tooling is required',
    'Topology optimization can cut mass while keeping stiffness',
    'AM always gives lower cost than any other method for any volume',
  ], [0, 1, 2], 'AM excels at complexity and low volume. For simple shapes in high volume, conventional methods are usually cheaper.'),

  // ---- Ceramic Structures ----
  cer.mc('cer-011', 'What is the perovskite structure, as in BaTiO₃?', [
    'An ABO₃ structure with a large A cation, a small B cation in an oxygen octahedron, and oxygen',
    'A pure metal structure',
    'An amorphous structure',
    'A polymer chain',
  ], 0, 'Perovskites include ferroelectric capacitors (BaTiO₃) and many functional oxides, including some solar cell materials.'),
  cer.tf('cer-012', 'Covalently bonded ceramics such as SiC and Si₃N₄ have very high hardness and keep their strength at high temperature.', true,
    'Strong directional bonds resist both deformation and diffusion, making these ceramics excellent for cutting tools and hot parts.'),
  cer.tr('cer-013', 'A ceramic specimen is loaded in bending.', 'the largest surface flaw becomes deeper', 'the fracture strength', 'decreases',
    'Strength scales roughly with 1/√(flaw size), so a deeper scratch makes failure easier.', 'stress-intensity'),
  cer.mc('cer-014', 'Why are ceramics often loaded in compression in structures (e.g. arches, prestressed parts)?', [
    'They are much stronger in compression than in tension',
    'They are weaker in compression',
    'They cannot carry compression',
    'Compression makes them ductile',
  ], 0, 'Compression closes flaws instead of opening them. Prestressing puts the ceramic into compression so service tension must first overcome it.'),
  cer.mt('cer-015', 'Match each ceramic to a key application.', [
    ['Alumina', 'Spark plug insulators and substrates'],
    ['Silicon carbide', 'Abrasives and armor'],
    ['Zirconia', 'Tough ceramic knives and oxygen sensors'],
    ['Silicon nitride', 'Bearings and turbocharger rotors'],
  ], 'Engineering ceramics are chosen for combinations of hardness, insulation, toughness and temperature capability.'),
  cer.tr('cer-016', 'Many ceramic specimens of one material are tested.', 'the Weibull modulus is higher', 'the scatter in measured strength', 'decreases',
    'A high Weibull modulus means flaws are more uniform, so strength is more predictable and designs can use higher stresses.'),
  cer.tf('cer-017', 'Ceramic fracture strength depends on the rate of loading in moist environments because water can slowly grow cracks (static fatigue).', true,
    'Water assists bond breaking at crack tips in many oxides and glasses, so cracks grow slowly under sustained load.'),
  cer.mc('cer-018', 'Why do silicates form so many different structures?', [
    'SiO₄ tetrahedra can share 0 to 4 corners, forming isolated units, chains, sheets or 3D networks',
    'Silicon is a metal',
    'Silicates have no oxygen',
    'All silicates are identical',
  ], 0, 'Olivine has isolated tetrahedra, clays and micas have sheets, and quartz is a 3D network.'),
  cer.tr('cer-019', 'Nonstoichiometric oxides such as FeO contain cation vacancies.', 'the number of Fe³⁺ ions in the lattice increases', 'the number of cation vacancies', 'increases',
    'Each two Fe³⁺ ions replacing three Fe²⁺ need one vacancy to keep charge balance, so FeO is really Fe₁₋ₓO.'),
  cer.ce('cer-020', 'Select every way to make a ceramic part more reliable.', 'An engineer designs a ceramic component that must not fail unexpectedly.', [
    'Use finer, purer powders to reduce the size of flaws',
    'Proof test parts at a stress above service stress to weed out weak ones',
    'Polish surfaces to remove machining damage',
    'Introduce sharp notches',
  ], [0, 1, 2], 'Ceramic reliability is about controlling flaws. Proof testing removes parts with dangerous flaws before service.'),

  // ---- Sintering ----
  sin.mc('sin-011', 'What is the "green density" of a ceramic compact?', [
    'The density after shaping, before firing',
    'The density after sintering',
    'The density of the liquid',
    'The density of the color',
  ], 0, 'Higher and more uniform green density gives less shrinkage and fewer defects during sintering.'),
  sin.tr('sin-012', 'A ceramic powder is sintered.', 'the green density is higher and more uniform', 'the risk of warping and cracking during sintering', 'decreases',
    'Uniform packing means uniform shrinkage. Density gradients make some areas shrink more, causing distortion.'),
  sin.tf('sin-013', 'Spark plasma sintering uses pulsed electric current and pressure to densify powders very quickly.', true,
    'Fast heating limits grain growth, so fine-grained or nanostructured dense ceramics can be made.'),
  sin.mc('sin-014', 'Why are binders added to ceramic powders before pressing?', [
    'To give the green body enough strength to handle; they are burned out before sintering',
    'To make the final part stronger permanently',
    'To color the ceramic',
    'To prevent sintering',
  ], 0, 'Organic binders hold particles together. They must be removed slowly to avoid cracks or bubbles.'),
  sin.tr('sin-015', 'A dense ceramic is held at the sintering temperature for longer after full density.', 'the hold time increases', 'the grain size', 'increases',
    'With pores gone, grains keep coarsening, which usually lowers strength and toughness.'),
  sin.mt('sin-016', 'Match each sintering variable to its effect.', [
    ['Finer powder', 'Faster densification'],
    ['Higher temperature', 'Faster diffusion'],
    ['Applied pressure', 'Densification at lower temperature'],
    ['Grain growth inhibitor', 'Pores stay on boundaries and can be removed'],
  ], 'Ceramic processing engineers combine these levers to reach full density with fine grains.'),
  sin.mc('sin-017', 'What is reaction bonding (e.g. reaction-bonded silicon nitride)?', [
    'A chemical reaction during firing forms the ceramic and bonds it, with very little shrinkage',
    'Bonding with glue',
    'Welding ceramics together',
    'Sintering with a liquid metal',
  ], 0, 'Silicon powder compacts reacting with nitrogen form Si₃N₄ with nearly no shrinkage, allowing precise shapes, though with some porosity.'),
  sin.tf('sin-018', 'Transparent alumina can be made by eliminating nearly all porosity, because pores scatter light.', true,
    'MgO additions and careful sintering allow alumina tubes for sodium-vapor lamps that let light through.'),
  sin.tr('sin-019', 'Two powders of the same ceramic are sintered at the same temperature.', 'one powder has many agglomerates (hard clumps)', 'the final density reached', 'decreases',
    'Agglomerates pack poorly and leave large pores between them that are hard to remove.'),
  sin.ce('sin-020', 'Select every likely cause.', 'Sintered ceramic plates come out warped.', [
    'Uneven green density from pressing',
    'Uneven temperature in the furnace',
    'Friction with the setter plate restraining shrinkage',
    'The powder was too uniform',
  ], [0, 1, 2], 'Anything that makes parts of the plate shrink differently or restrains shrinkage causes warping.'),

  // ---- Glasses & Glass-Ceramics ----
  gl.mc('gl-011', 'Why is borosilicate glass (e.g. Pyrex) used for labware and cookware?', [
    'Its low thermal expansion gives good thermal shock resistance',
    'It is the cheapest glass',
    'It is opaque',
    'It is metallic',
  ], 0, 'Boron oxide lowers the expansion coefficient to about a third of soda-lime glass, so it survives rapid heating and cooling.'),
  gl.tr('gl-012', 'Glass is chemically strengthened by ion exchange.', 'larger potassium ions replace smaller sodium ions at the surface', 'the compressive stress at the surface', 'increases',
    'Crowding larger ions into the surface puts it into compression, which is how smartphone cover glass is strengthened.'),
  gl.tf('gl-013', 'Pure fused silica glass has very low thermal expansion and excellent heat resistance, but is hard to melt and form.', true,
    'Its fully connected network gives a softening point above 1600 °C, which is why it is used for optical fibers and furnace windows.'),
  gl.mc('gl-014', 'Which oxides are called network formers in glass?', [
    'Oxides like SiO₂ and B₂O₃ that build the connected glass network',
    'Oxides like Na₂O that break the network',
    'Metal powders',
    'Water molecules',
  ], 0, 'Network formers create the backbone; modifiers such as Na₂O and CaO break it up and lower viscosity.'),
  gl.tr('gl-015', 'A glass is used as a structural panel.', 'the surface is scratched deeper', 'its strength', 'decreases',
    'Glass fails from surface flaws; deeper scratches are more severe cracks, so strength falls.'),
  gl.mt('gl-016', 'Match each glass forming method to a product.', [
    ['Float process', 'Flat window glass'],
    ['Blowing', 'Bottles and jars'],
    ['Drawing', 'Fibers and tubing'],
    ['Pressing', 'Thick dishes and lenses'],
  ], 'All rely on glass’s smooth change of viscosity with temperature.'),
  gl.mc('gl-017', 'What is devitrification?', [
    'Unwanted crystallization of a glass, which can make it hazy and weaker',
    'Melting the glass',
    'Coloring the glass',
    'Tempering the glass',
  ], 0, 'Holding a glass too long in its crystallization range causes devitrification. In glass-ceramics, controlled crystallization is the goal instead.'),
  gl.tf('gl-018', 'Laminated safety glass holds fragments together with a polymer interlayer when it breaks.', true,
    'A layer of polyvinyl butyral between two glass sheets keeps broken pieces in place, which is why windshields use it.'),
  gl.tr('gl-019', 'Glass fibers are drawn for composites.', 'the fiber surface is kept free of scratches by an immediate sizing coating', 'the fiber strength', 'increases',
    'Fresh glass fibers are very strong because their surfaces are nearly flawless. Sizing protects them from abrasion damage.'),
  gl.ce('gl-020', 'Select every correct statement.', 'A glass-ceramic is chosen for a cooktop.', [
    'It is made by controlled nucleation and crystal growth in a glass',
    'Its near-zero thermal expansion resists thermal shock',
    'It can be formed as a glass before crystallizing',
    'It is a metal alloy',
  ], [0, 1, 2], 'Glass-ceramics combine easy glass forming with the properties of a fine crystalline ceramic.'),

  // ---- Refractories ----
  rf.mc('rf-011', 'What is refractoriness under load?', [
    'The temperature at which a refractory starts to deform under a set compressive load',
    'Its melting point with no load',
    'Its color at high temperature',
    'Its electrical resistance',
  ], 0, 'Refractories must carry the weight of the lining and charge while hot, so deformation under load matters more than melting point alone.'),
  rf.tr('rf-012', 'A refractory lining is in contact with molten slag.', 'the slag temperature increases', 'the rate of refractory corrosion by slag', 'increases',
    'Hotter slag is more fluid and dissolves refractory oxides faster, which is why slag line areas wear first.'),
  rf.tf('rf-013', 'Castables are refractories installed like concrete and then heated to develop their strength.', true,
    'Monolithic refractories such as castables and gunning mixes allow seamless linings and quick repairs.'),
  rf.mc('rf-014', 'Why is the "slag line" of a ladle often lined with a more resistant refractory?', [
    'The slag–metal interface is where chemical attack and erosion are most severe',
    'It is the coldest part',
    'Slag never touches the lining',
    'It is purely decorative',
  ], 0, 'Zoned linings put the best refractories where wear is worst, balancing cost and life.'),
  rf.tr('rf-015', 'Refractory bricks are designed for thermal shock resistance.', 'controlled microcracks are introduced into the brick', 'its thermal shock resistance', 'increases',
    'Microcracks can open and close to absorb thermal strains and stop larger cracks from running, at some cost in strength.'),
  rf.mt('rf-016', 'Match each refractory to a typical use.', [
    ['MgO–carbon', 'Steelmaking converter and ladle linings'],
    ['High-alumina brick', 'General furnace linings'],
    ['Silica brick', 'Coke ovens and glass furnace crowns'],
    ['Insulating firebrick', 'Backup insulation layers'],
  ], 'Refractory selection depends on temperature, slag chemistry and whether insulation or wear resistance matters most.'),
  rf.mc('rf-017', 'Why does silica brick need careful heating when a furnace is first lit?', [
    'Silica goes through crystal transformations with volume changes at low temperatures, which can crack the bricks if heated too fast',
    'Silica melts at 300 °C',
    'Silica reacts with air',
    'Silica bricks are made of metal',
  ], 0, 'Phase changes in quartz and cristobalite cause sudden expansion. Once above them, silica bricks are very stable under load.'),
  rf.tf('rf-018', 'In steelmaking, the refractory lining is a consumable that must be repaired or replaced regularly.', true,
    'Converter linings are sprayed with repair material between heats, and ladles are relined periodically.'),
  rf.tr('rf-019', 'A furnace wall is made thicker with insulating brick.', 'the insulating layer becomes thicker', 'the heat lost through the wall', 'decreases',
    'Heat flux through a wall falls as its thermal resistance grows, saving energy.', 'fourier'),
  rf.ce('rf-020', 'Select every good practice for a long lining life.', 'A plant wants its ladle linings to last longer.', [
    'Match the refractory chemistry to the slag',
    'Preheat ladles to reduce thermal shock',
    'Control slag temperature and chemistry',
    'Heat and cool the ladle as fast as possible',
  ], [0, 1, 2], 'Chemistry, temperature and thermal cycling are the main enemies of refractories.'),
]
