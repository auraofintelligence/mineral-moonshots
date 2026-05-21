const MINERAL_PALETTE = [
  {
    symbol: "SiO2",
    name: "Quartz / Silica",
    colour: "Crystal white",
    role: "Glass, optics, solar panels, silicon logic, sand batteries and the visual language of the whole atlas."
  },
  {
    symbol: "TiO2",
    name: "Rutile",
    colour: "Titanium gold",
    role: "Refined into titanium pathways: aerospace structure, corrosion resistance, ceramics and hard coastal machines."
  },
  {
    symbol: "FeTiO3",
    name: "Ilmenite",
    colour: "Blue-black metal",
    role: "A heavy-mineral base for titanium, iron chemistry, shielding, ballast and durable coastal engineering."
  },
  {
    symbol: "ZrSiO4",
    name: "Zircon",
    colour: "Ice blue ceramic",
    role: "High-temperature ceramics, cutter heads, thermal barriers and precise mineral-memory aesthetics."
  },
  {
    symbol: "REE",
    name: "Rare-earth stream",
    colour: "Rare-earth violet",
    role: "At this stage, the Straddie-supported rare-earth story is monazite: lanthanum, cerium and neodymium, with thorium stewardship beside them."
  },
  {
    symbol: "Fe",
    name: "Iron",
    colour: "Oxide red",
    role: "Structural contrast, magnetic systems, grounding colour and a reminder that civilisation still needs honest metallurgy."
  }
];

const REE_BREAKDOWN = [
  {
    title: "Source-backed monazite REEs",
    symbols: "La, Ce, Nd",
    story: "For Straddie itself, the public source boundary is narrow: monazite in the mineral sands is described as containing cerium, lanthanum and neodymium, with thorium beside them. These are the rare-earth elements this site treats as local at this stage."
  },
  {
    title: "Practical opportunity lane",
    symbols: "Ce, La, Nd",
    story: "Cerium and lanthanum keep the glass, polishing, catalyst and battery-literacy paths alive. Neodymium carries the magnet story, but only with clean separation, recycling, worker safety, water discipline and public consent."
  },
  {
    title: "Clean separation and recycling",
    symbols: "Monazite + recycling first",
    story: "The rare-earth stream is only useful if separation, radioactivity, tailings, water, worker safety, public consent and recycling are part of the design from the beginning. The moonshot is clean materials intelligence, not faster extraction theatre."
  }
];

const REE_CONSTITUENTS = [
  {
    symbol: "La",
    name: "Lanthanum",
    material: "Lanthanum oxide / metal",
    opportunity: "Optical glass, catalysts, hydrogen storage alloys and battery-material literacy."
  },
  {
    symbol: "Ce",
    name: "Cerium",
    material: "Ceria / cerium oxide",
    opportunity: "Glass polishing, catalysts, oxygen-storage ceramics and cleaner workshop chemistry."
  },
  {
    symbol: "Nd",
    name: "Neodymium",
    material: "Neodymium oxide / metal",
    opportunity: "Permanent magnets for motors, generators, speakers, actuators and robotics."
  }
];

const MATERIAL_EVIDENCE_LEDGER = [
  {
    title: "Quartz / silica",
    elements: "Si + O",
    evidence: "The technical summary says most North Stradbroke Island sand is quartz: silicon dioxide.",
    history: "Quartz is the ordinary mass of the old coastal dunes and strandlines. It is the ground that made industrial mineral separation possible.",
    relevance: "The current moonshot relevance is glass, optics, thermal storage, silicon literacy, transparent sensors and public-facing material education.",
    stewardship: "Silica dust and renewed surface disturbance are the hard boundaries. The future path is learning, repair, reuse and low-footprint processing, not another scrape of the island.",
    source: "Queensland Health mineral sands technical summary",
    href: "https://www.health.qld.gov.au/__data/assets/pdf_file/0030/729426/dohdl1819011.pdf"
  },
  {
    title: "Rutile and ilmenite",
    elements: "Ti + Fe + O",
    evidence: "The same source names rutile and ilmenite as titanium-bearing oxides in the mineral-sands stream.",
    history: "These heavy minerals were part of the industrial reason sand mining stayed on Minjerribah for decades.",
    relevance: "Today they point toward titanium dioxide, corrosion-resistant design, pigments, ceramics, repair literacy, iron oxides and hard coastal machinery.",
    stewardship: "Titanium and iron stories need energy accounting, dust control, water protection, rehabilitation memory and no casual claims about full metal production.",
    source: "Queensland Health mineral sands technical summary",
    href: "https://www.health.qld.gov.au/__data/assets/pdf_file/0030/729426/dohdl1819011.pdf"
  },
  {
    title: "Zircon",
    elements: "Zr + Si + O",
    evidence: "The source names zircon as a silicate in the mineral-sands stream.",
    history: "Zircon sits in the heavy-mineral fraction: small compared with the sand mass, but industrially important.",
    relevance: "The contemporary use-path is high-temperature ceramics, refractories, cutter heads, oxygen sensors and underground components that survive heat and wear.",
    stewardship: "Zircon belongs in a qualified materials lane because processing can raise trace-element and radiological questions. Evidence comes before expansion.",
    source: "Queensland Health mineral sands technical summary",
    href: "https://www.health.qld.gov.au/__data/assets/pdf_file/0030/729426/dohdl1819011.pdf"
  },
  {
    title: "Monazite",
    elements: "P + O + La + Ce + Nd + Th",
    evidence: "The source names monazite as containing cerium, lanthanum, neodymium and thorium.",
    history: "Monazite makes the rare-earth story inseparable from the radioactive stewardship story.",
    relevance: "The useful future is not a vague REE bonanza. It is glass polishing, catalysts, magnet literacy, separation science, recycling and public records.",
    stewardship: "Thorium forces licensed handling, radiological literacy, consent gates, tailings discipline and a strong bias toward recycling before recovery.",
    source: "Queensland Health mineral sands technical summary",
    href: "https://www.health.qld.gov.au/__data/assets/pdf_file/0030/729426/dohdl1819011.pdf"
  },
  {
    title: "Mining history",
    elements: "Landscape memory",
    evidence: "The technical summary records about 50 million tonnes of sand mined on North Stradbroke Island in 2007.",
    history: "That number is why the site should not sound like a fresh extraction pitch. The moonshot starts after a very real mining era.",
    relevance: "Current relevance is cultural repair, site rehabilitation, skills transition, public ledgers and materials knowledge redirected toward local benefit.",
    stewardship: "History has to stay visible on the page so future abundance does not erase the costs that made the old mineral economy possible.",
    source: "Queensland Health mineral sands technical summary",
    href: "https://www.health.qld.gov.au/__data/assets/pdf_file/0030/729426/dohdl1819011.pdf"
  },
  {
    title: "End of mining and return",
    elements: "Governance",
    evidence: "Queensland's North Stradbroke Island Protection and Sustainability Act says its object is to end mining in the region by the end of 2019.",
    history: "That legal line turns the site away from extraction nostalgia and toward a post-mining future.",
    relevance: "The living question is what replaces the old economy: restoration, tourism, public infrastructure, clean materials research, education and local stewardship capability.",
    stewardship: "Responsible abundance means rehabilitation, returned land, Quandamooka authority, consent, cultural heritage, water protection and economic paths that do not reopen the same wound.",
    source: "North Stradbroke Island Protection and Sustainability Act 2011",
    href: "https://www.legislation.qld.gov.au/view/html/inforce/current/act-2011-011"
  }
];

const ELEMENT_EVIDENCE = {
  O: {
    evidence: "Oxygen is present across the named minerals as oxides, silicates and phosphates: quartz, rutile, ilmenite, zircon and monazite.",
    history: "It is the chemistry behind the mined mineral names, not a separate product.",
    relevance: "It lets the site talk about ceramics, glass, corrosion, water and later biology as one connected material story.",
    stewardship: "Oxygen chemistry keeps the build honest: dust, water, corrosion, life support and tailings all matter."
  },
  Si: {
    evidence: "Most of the sand is named as quartz, silicon dioxide; zircon adds a second silicate lane in the heavy-mineral stream.",
    history: "Silicon sits in both the ordinary sand mass and the heavy zircon story.",
    relevance: "Glass, optics, sand batteries, silicon literacy and transparent sensors are plausible learning paths.",
    stewardship: "Silica dust and high-purity silicon processing need explicit health and realism gates."
  },
  Ti: {
    evidence: "Rutile and ilmenite are named as titanium-bearing oxides in the mineral-sands stream.",
    history: "Titanium minerals were a core reason the island's mineral sands were mined.",
    relevance: "The present relevance is titanium dioxide, hard coatings, marine materials, ceramics and corrosion-resistant design.",
    stewardship: "Full titanium metal production is energy-intensive and should stay behind serious process evidence."
  },
  Fe: {
    evidence: "Ilmenite is the named titanium-oxide mineral that gives the local atlas its iron-bearing heavy-mineral lane.",
    history: "Iron is part of the heavy-mineral story and the practical workshop story.",
    relevance: "Repair metalwork, pigments, magnets, shielding and coastal maintenance are grounded, useful paths.",
    stewardship: "Corrosion, coatings, waste streams and repair-first thinking keep the story practical."
  },
  Zr: {
    evidence: "Zircon is named as a silicate in the local mineral-sands stream.",
    history: "Zircon is a heavy-mineral fraction with high-temperature industrial relevance.",
    relevance: "Zirconia ceramics, thermal barriers, refractories and underground components are the local moonshot edge.",
    stewardship: "Trace and radiological questions require assays and qualified handling before any claim expands."
  },
  P: {
    evidence: "Monazite is a phosphate mineral.",
    history: "Phosphate chemistry is the host structure for the source-backed rare-earth story.",
    relevance: "Phosphate literacy connects rare-earth separation, safer batteries, phosphors and later food-system biology.",
    stewardship: "Phosphorus can damage waterways, so runoff and nutrient discipline belong in the design."
  },
  La: {
    evidence: "Lanthanum is named in the source as a monazite constituent.",
    history: "It belongs to the narrow, source-backed rare-earth stream, not a broad REE wish-list.",
    relevance: "Optical glass, catalysts, battery-material literacy and separation science are the honest opportunity path.",
    stewardship: "Rare-earth handling needs water, tailings, worker safety, radioactivity and consent gates."
  },
  Ce: {
    evidence: "Cerium is named in the source as a monazite constituent.",
    history: "It sits beside lanthanum and neodymium in the local rare-earth boundary.",
    relevance: "Ceria suggests glass polishing, catalysts, oxygen-storage ceramics and practical workshop chemistry.",
    stewardship: "The positive path is recycling and clean separation research before any extraction claim."
  },
  Nd: {
    evidence: "Neodymium is named in the source as a monazite constituent.",
    history: "It is the source-backed magnet element in this local rare-earth set.",
    relevance: "Motors, generators, speakers, robotics and repairable energy hardware are the current relevance.",
    stewardship: "Magnet dreams must carry separation difficulty, thorium proximity, recycling and public consent."
  },
  Th: {
    evidence: "Thorium is named in the source as a monazite constituent.",
    history: "It is the reason the monazite story must be a stewardship story first.",
    relevance: "Its current relevance is monitoring, records, radiological literacy and strict governance, not casual use.",
    stewardship: "Licensed professionals, regulators and community consent come before handling, storage or research."
  }
};

const AI_DISCOVERY_OPPORTUNITIES = [
  {
    name: "GENESIS Mission interface",
    source: "U.S. Department of Energy Genesis Mission",
    href: "https://www.energy.gov/genesis",
    opportunity: "Treat large AI-science platforms as research weather, not as a master. The local question becomes: which mineral, energy, biology and sensor experiments are worth preparing well enough to plug into serious labs?",
    build: "First build: a sovereign opportunity docket where each proposed experiment records the public good, data boundary, ecological risk, lab partner, funding path, consent gate and failure record."
  },
  {
    name: "GNoME crystal atlas",
    source: "Google DeepMind Graph Networks for Materials Exploration",
    href: "https://deepmind.google/blog/millions-of-new-materials-discovered-with-deep-learning/",
    opportunity: "Use AI-predicted stable crystals as a research atlas for batteries, solid electrolytes, magnet chemistries, ceramics, semiconductors, superconductors and rare-earth oxide combinations.",
    build: "First build: a shortlist board that maps mineral-sands-adjacent chemistries to public benefit, required lab partners, synthesis difficulty, toxicity, recyclability and underground-use relevance."
  },
  {
    name: "AlphaFold biology layer",
    source: "Google DeepMind / EMBL-EBI AlphaFold Database and AlphaFold Server",
    href: "https://deepmind.google/science/alphafold/",
    opportunity: "Use protein-structure prediction to explore enzymes, microbes, fungi, algae and biomineralisation pathways for food systems, bioremediation, waste processing, microbiome literacy and living materials.",
    build: "First build: a non-medical research map linking proteins and organisms to plastic breakdown, soil health, oyster-crete style biomineralisation, in-home farms and environmental monitoring."
  },
  {
    name: "Closed-loop discovery studio",
    source: "GNoME + AlphaFold + GENESIS + local lab partners",
    href: "materials.html",
    opportunity: "Connect inorganic crystals, biomolecules and simulation into one calm discovery loop: predict, rank, simulate, prototype, test, recycle and publish what failed as well as what worked.",
    build: "First build: a public opportunity matrix for joyful responsible abundance: cleaner energy storage, repairable devices, low-footprint food, safer materials, better sensors and stronger stewardship."
  }
];

const ELEMENT_PROPERTIES = {
  H: { atomicNumber: 1, name: "Hydrogen", atomicMass: "1.008", category: "Reactive nonmetal", phase: "Gas", group: 1, period: 1, tableColumn: 1, tableRow: 1 },
  C: { atomicNumber: 6, name: "Carbon", atomicMass: "12.011", category: "Reactive nonmetal", phase: "Solid", group: 14, period: 2, tableColumn: 14, tableRow: 2 },
  N: { atomicNumber: 7, name: "Nitrogen", atomicMass: "14.007", category: "Reactive nonmetal", phase: "Gas", group: 15, period: 2, tableColumn: 15, tableRow: 2 },
  O: { atomicNumber: 8, name: "Oxygen", atomicMass: "15.999", category: "Reactive nonmetal", phase: "Gas", group: 16, period: 2, tableColumn: 16, tableRow: 2 },
  Na: { atomicNumber: 11, name: "Sodium", atomicMass: "22.990", category: "Alkali metal", phase: "Solid", group: 1, period: 3, tableColumn: 1, tableRow: 3 },
  Mg: { atomicNumber: 12, name: "Magnesium", atomicMass: "24.305", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 3, tableColumn: 2, tableRow: 3 },
  Al: { atomicNumber: 13, name: "Aluminium", atomicMass: "26.982", category: "Post-transition metal", phase: "Solid", group: 13, period: 3, tableColumn: 13, tableRow: 3 },
  Si: { atomicNumber: 14, name: "Silicon", atomicMass: "28.085", category: "Metalloid", phase: "Solid", group: 14, period: 3, tableColumn: 14, tableRow: 3 },
  P: { atomicNumber: 15, name: "Phosphorus", atomicMass: "30.974", category: "Reactive nonmetal", phase: "Solid", group: 15, period: 3, tableColumn: 15, tableRow: 3 },
  K: { atomicNumber: 19, name: "Potassium", atomicMass: "39.098", category: "Alkali metal", phase: "Solid", group: 1, period: 4, tableColumn: 1, tableRow: 4 },
  Ca: { atomicNumber: 20, name: "Calcium", atomicMass: "40.078", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 4, tableColumn: 2, tableRow: 4 },
  Sc: { atomicNumber: 21, name: "Scandium", atomicMass: "44.956", category: "Transition metal", phase: "Solid", group: 3, period: 4, tableColumn: 3, tableRow: 4 },
  Ti: { atomicNumber: 22, name: "Titanium", atomicMass: "47.867", category: "Transition metal", phase: "Solid", group: 4, period: 4, tableColumn: 4, tableRow: 4 },
  Fe: { atomicNumber: 26, name: "Iron", atomicMass: "55.845", category: "Transition metal", phase: "Solid", group: 8, period: 4, tableColumn: 8, tableRow: 4 },
  Y: { atomicNumber: 39, name: "Yttrium", atomicMass: "88.906", category: "Transition metal", phase: "Solid", group: 3, period: 5, tableColumn: 3, tableRow: 5 },
  Zr: { atomicNumber: 40, name: "Zirconium", atomicMass: "91.224", category: "Transition metal", phase: "Solid", group: 4, period: 5, tableColumn: 4, tableRow: 5 },
  La: { atomicNumber: 57, name: "Lanthanum", atomicMass: "138.905", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 3, tableRow: 8 },
  Ce: { atomicNumber: 58, name: "Cerium", atomicMass: "140.116", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 4, tableRow: 8 },
  Pr: { atomicNumber: 59, name: "Praseodymium", atomicMass: "140.908", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 5, tableRow: 8 },
  Nd: { atomicNumber: 60, name: "Neodymium", atomicMass: "144.242", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 6, tableRow: 8 },
  Pm: { atomicNumber: 61, name: "Promethium", atomicMass: "(145)", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 7, tableRow: 8 },
  Sm: { atomicNumber: 62, name: "Samarium", atomicMass: "150.36", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 8, tableRow: 8 },
  Eu: { atomicNumber: 63, name: "Europium", atomicMass: "151.964", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 9, tableRow: 8 },
  Gd: { atomicNumber: 64, name: "Gadolinium", atomicMass: "157.25", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 10, tableRow: 8 },
  Tb: { atomicNumber: 65, name: "Terbium", atomicMass: "158.925", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 11, tableRow: 8 },
  Dy: { atomicNumber: 66, name: "Dysprosium", atomicMass: "162.500", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 12, tableRow: 8 },
  Ho: { atomicNumber: 67, name: "Holmium", atomicMass: "164.930", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 13, tableRow: 8 },
  Er: { atomicNumber: 68, name: "Erbium", atomicMass: "167.259", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 14, tableRow: 8 },
  Tm: { atomicNumber: 69, name: "Thulium", atomicMass: "168.934", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 15, tableRow: 8 },
  Yb: { atomicNumber: 70, name: "Ytterbium", atomicMass: "173.045", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 16, tableRow: 8 },
  Lu: { atomicNumber: 71, name: "Lutetium", atomicMass: "174.967", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 17, tableRow: 8 },
  Hf: { atomicNumber: 72, name: "Hafnium", atomicMass: "178.486", category: "Transition metal", phase: "Solid", group: 4, period: 6, tableColumn: 4, tableRow: 6 },
  Th: { atomicNumber: 90, name: "Thorium", atomicMass: "232.038", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 4, tableRow: 9 },
  U: { atomicNumber: 92, name: "Uranium", atomicMass: "238.029", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 6, tableRow: 9 }
};

const ELEMENT_SLUGS = {
  O: "oxygen",
  Si: "silicon",
  P: "phosphorus",
  Ti: "titanium",
  Fe: "iron",
  Zr: "zirconium",
  La: "lanthanum",
  Ce: "cerium",
  Nd: "neodymium",
  Th: "thorium"
};

const MAJOR_SAND_ELEMENTS = [
  {
    symbol: "H",
    lane: "biology-ready",
    hasPage: false,
    stream: "Water, future biology and hydrogen chemistry",
    material: "Water-bound hydrogen",
    summary: "Hydrogen belongs in the future biology and energy layer rather than the mineral-sands extraction lane.",
    localRole: "It keeps the periodic table reusable for later protein, enzyme, microbiome, water and fuel-cell stories.",
    opportunities: [
      { title: "Future biology bridge", body: "Later pages can connect hydrogen to water, amino acids, enzymes, pH, membranes and living material systems." }
    ],
    stewardship: "Do not confuse future hydrogen chemistry with a local sand resource claim.",
    biologyBridge: "Ready for the biology atlas."
  },
  {
    symbol: "C",
    lane: "biology-ready",
    hasPage: false,
    stream: "Shell, carbonate, biochar and future biology",
    material: "Carbonates and living carbon",
    summary: "Carbon is the bridge from sand to shell, oyster-crete, food systems, biochar and later biological design.",
    localRole: "It lets the same table hold future biomineralisation and microbiome pages without rebuilding the interface.",
    opportunities: [
      { title: "Future biology bridge", body: "Later pages can connect carbon to proteins, carbohydrates, fats, mycelium, algae and carbonate structures." }
    ],
    stewardship: "Keep carbon claims specific: storage, cycling, food and carbonate chemistry are different stories.",
    biologyBridge: "Ready for the biology atlas."
  },
  {
    symbol: "N",
    lane: "biology-ready",
    hasPage: false,
    stream: "Future biology and soil systems",
    material: "Nitrogen in proteins and nutrients",
    summary: "Nitrogen is not a mineral-sands prize. It is a future biology layer for proteins, soils, algae and food systems.",
    localRole: "It stays in the table now so biology can later use the same explorer.",
    opportunities: [
      { title: "Future biology bridge", body: "Later pages can connect nitrogen to amino acids, microbial loops, fertiliser discipline and food security." }
    ],
    stewardship: "Avoid nutrient-runoff fantasies. Nitrogen is powerful because it needs careful cycling.",
    biologyBridge: "Ready for the biology atlas."
  },
  {
    symbol: "O",
    lane: "major-sand",
    hasPage: true,
    stream: "Quartz, rutile, ilmenite, zircon, monazite and water",
    material: "Oxides, silicates and phosphates",
    summary: "Oxygen is the quiet architecture of the local mineral story. The visible materials are mostly oxygen-bound: silica, titanium dioxide, iron titanium oxide, zircon silicate and rare-earth phosphates.",
    localRole: "The opportunity is chemical literacy: teach oxidation, hydration, ceramics, glass, water and biomineralisation as one connected material language.",
    opportunities: [
      { title: "Ceramic and glass literacy", body: "Use oxygen chemistry to explain why silica glass, zirconia ceramics and titanium oxides behave differently under heat, stress and weather." },
      { title: "Water and tunnel discipline", body: "In wet sand, oxygen also lives in water. Any underground moonshot has to understand water, corrosion, oxygen demand and sealed life-support before it goes deeper." },
      { title: "Biology-ready bridge", body: "Later biology can reuse oxygen for respiration, proteins, enzymes, algae, shell formation and living materials." }
    ],
    stewardship: "Oxygen is not extracted as a prize. It is the reminder that chemistry, water and life-support have to be designed together.",
    biologyBridge: "Respiration, water, proteins, enzymes and biomineralisation."
  },
  {
    symbol: "Na",
    lane: "coastal-companion",
    hasPage: false,
    tableLabel: "Coastal context, not a sand claim",
    stream: "Seawater salts, feldspar traces and glass fluxes",
    material: "Sodium salts and soda chemistry",
    summary: "Sodium is a coastal companion: less glamorous than rare earths, but useful in glass, salt chemistry, electrolytes, thermal storage and water systems.",
    localRole: "A responsible abundance path uses sodium to think about desalination brines, salt-safe infrastructure, glass fluxes and non-toxic battery learning.",
    opportunities: [
      { title: "Salt-safe infrastructure", body: "Treat sodium chloride as a design pressure for corrosion, coatings, sensors and coastal maintenance." },
      { title: "Glass and flux chemistry", body: "Use soda-lime glass as an education bridge from sand to useful transparent objects without pretending it is high-end semiconductor glass." },
      { title: "Electrolyte learning", body: "Explore saltwater batteries and safe electrolyte demos as public science before any grid-scale claims." }
    ],
    stewardship: "Brine is not waste to hide. Any salt or desalination story needs a clear discharge, reuse and ecology plan.",
    biologyBridge: "Electrolytes, nerve signals and water balance."
  },
  {
    symbol: "Mg",
    lane: "coastal-companion",
    hasPage: false,
    tableLabel: "Coastal context, not a sand claim",
    stream: "Seawater, silicates, recycled alloys and titanium processing logic",
    material: "Magnesium salts, magnesia and magnesium alloys",
    summary: "Magnesium links seawater, light alloys, cements, thermal storage and titanium-making stories.",
    localRole: "It belongs in the long-term local capability stack as a repair, alloy, cement and process-chemistry element rather than a bulk export target.",
    opportunities: [
      { title: "Titanium process literacy", body: "The Kroll process uses magnesium to reduce titanium tetrachloride. That makes magnesium a teaching bridge into why titanium is hard, not a casual promise." },
      { title: "Low-carbon binders", body: "Magnesia and magnesium silicate chemistry can sit beside geopolymers, oyster-crete and sand blocks as research paths." },
      { title: "Light repair alloys", body: "Recycled magnesium-aluminium alloy knowledge could support small local repair, robotics and marine hardware work." }
    ],
    stewardship: "Magnesium burns fiercely as a metal and brine chemistry needs care. Keep it in qualified lab and workshop lanes.",
    biologyBridge: "Enzyme cofactor, chlorophyll centre and muscle function."
  },
  {
    symbol: "Al",
    lane: "coastal-companion",
    hasPage: false,
    tableLabel: "Recycling and aluminosilicate context, not a sand claim",
    stream: "Aluminosilicate traces, clays, waste recovery and aluminium scrap",
    material: "Aluminosilicates and recycled aluminium",
    summary: "Aluminium is not the star mineral sand, but it matters through clays, geopolymers, waste recovery, light structures and repairable island hardware.",
    localRole: "The abundance path is anthropogenic ore first: recover aluminium from waste streams and use local silicate chemistry for binders and blocks.",
    opportunities: [
      { title: "Anthropogenic ore", body: "Landfill and scrap streams can become a safer first materials lab than new extraction." },
      { title: "Geopolymer learning", body: "Aluminosilicate chemistry is central to many geopolymer binders that could turn sand-adjacent materials into useful blocks." },
      { title: "Light structures", body: "Repaired and remelted aluminium can support frames, carts, coastal fittings and training projects." }
    ],
    stewardship: "Primary aluminium is energy-hungry. The local story should prioritise repair, reuse and recycling before new production.",
    biologyBridge: "Toxicity boundaries and material-contact design."
  },
  {
    symbol: "Si",
    lane: "major-sand",
    hasPage: true,
    stream: "Quartz silica sand",
    material: "Silica, glass, silicon and silicates",
    summary: "Silicon is the clearest bridge from local sand into far-out civilisation: glass, solar, silicon logic, sand batteries, geopolymers, optics and transparent public dashboards.",
    localRole: "The local abundance path is learning and fabrication first: blocks, glass, heat storage, optics and repairable devices before any semiconductor overclaim.",
    opportunities: [
      { title: "Glass and optics", body: "Silica can become the public material for lenses, displays, windows, sensors and educational optical benches." },
      { title: "Thermal storage", body: "Sand batteries and insulated silica masses let the site talk about energy storage without needing exotic materials first." },
      { title: "Compute literacy", body: "Silicon anchors the story of semiconductors, but the first responsible build is maps, FPGA benches, clean-room education and honest process boundaries." }
    ],
    stewardship: "Silica dust is a health hazard and high-purity silicon needs extreme processing. The story must keep safety and reality gates visible.",
    biologyBridge: "Diatoms, phytoliths and biomineral structures."
  },
  {
    symbol: "P",
    lane: "heavy-mineral",
    hasPage: true,
    stream: "Monazite phosphate minerals",
    material: "Phosphates",
    summary: "Phosphorus is the phosphate spine of monazite. It links rare-earth host minerals to fertiliser discipline, batteries, phosphors and biological life.",
    localRole: "The opportunity is to understand phosphate streams as both material and ecological responsibility, not to leak nutrients or chase unlicensed chemistry.",
    opportunities: [
      { title: "Rare-earth host chemistry", body: "Monazite is a phosphate, so phosphorus helps explain why rare-earth separation is hard and mineral-specific." },
      { title: "Battery and phosphor research", body: "Phosphate chemistries connect to safer battery materials, phosphors and durable ceramics." },
      { title: "Food-system bridge", body: "Later biology can link phosphorus to DNA, ATP, bones, soils and nutrient recycling." }
    ],
    stewardship: "Phosphorus can feed life or damage waterways. Any recovery or reuse story needs runoff and eutrophication safeguards.",
    biologyBridge: "DNA, ATP, bones, soils and nutrient cycling."
  },
  {
    symbol: "K",
    lane: "coastal-companion",
    hasPage: false,
    tableLabel: "Future food-system context, not a sand claim",
    stream: "Feldspar traces, salts and future biology",
    material: "Potassium salts and silicates",
    summary: "Potassium is a quiet companion for glass, ceramics, fertiliser discipline, electrolytes and future food-system pages.",
    localRole: "It helps the site connect mineral literacy with plant nutrition and closed-loop food systems without pretending it is a strategic sand export.",
    opportunities: [
      { title: "Glass and ceramic flux", body: "Potassium compounds can influence melting, glaze and glass behaviour in education-scale material work." },
      { title: "Food loop literacy", body: "Potassium makes the later in-home farm and microbiome layer more grounded in actual plant nutrition." },
      { title: "Electrolyte education", body: "Use potassium as a simple bridge between materials chemistry and human biology." }
    ],
    stewardship: "Keep fertiliser and brine stories tied to water-quality discipline.",
    biologyBridge: "Plant nutrition, electrolytes and cell signalling."
  },
  {
    symbol: "Ca",
    lane: "coastal-companion",
    hasPage: false,
    tableLabel: "Shell and reef context, not a sand claim",
    stream: "Shell, carbonate, oyster-crete and coastal biominerals",
    material: "Calcium carbonate and calcium silicate ideas",
    summary: "Calcium enters through shells, reefs, oyster-crete, cement chemistry, bones, water hardness and biomineralisation.",
    localRole: "It turns infrastructure away from dead walls and toward reef-like, repairable, habitat-building structures where evidence and permits allow.",
    opportunities: [
      { title: "Oyster-crete", body: "Calcium carbonate can help the site imagine habitat-forming infrastructure that accretes life rather than merely resisting the sea." },
      { title: "Coastal repair", body: "Shell and reef materials can become education prompts for erosion buffers, fish habitat and aquaculture design." },
      { title: "Biology bridge", body: "Calcium later connects to bones, muscle contraction, shells, coral, algae and food systems." }
    ],
    stewardship: "Shell and reef systems are living habitat. Local use must avoid mining ecology to build fake ecology.",
    biologyBridge: "Bones, shells, signalling and biomineralisation."
  },
  {
    symbol: "Ti",
    lane: "heavy-mineral",
    hasPage: true,
    stream: "Rutile and ilmenite",
    material: "Titanium dioxide and titanium metal pathways",
    summary: "Titanium is the corrosion-resistant coastal machine element in the atlas: strong, light, marine-capable and difficult enough to keep the story honest.",
    localRole: "The local path begins with titanium dioxide, coatings, pigments, ceramics and repair literacy; full titanium metal production remains an advanced industrial pathway.",
    opportunities: [
      { title: "Marine hardware", body: "Titanium alloys suggest long-life fittings, robotics parts and coastal machines that can survive salt and stress." },
      { title: "Photocatalytic surfaces", body: "Titanium dioxide can anchor research into self-cleaning surfaces, water treatment and sensor housings." },
      { title: "Spacefaring material logic", body: "Titanium helps the site move from island machinery to aerospace imagination without losing the processing difficulty." }
    ],
    stewardship: "Titanium is valuable because it is hard to refine well. Keep production claims staged and energy-aware.",
    biologyBridge: "Biocompatible implants and surface interactions."
  },
  {
    symbol: "Fe",
    lane: "heavy-mineral",
    hasPage: true,
    stream: "Ilmenite, iron oxides and recycled steel",
    material: "Iron oxides, iron and steel",
    summary: "Iron grounds the moonshot. It is ordinary enough to build with, magnetic enough to teach with, and present enough in ilmenite to matter.",
    localRole: "The opportunity is repair, tools, magnets, shielding, pigments, ballast and honest metallurgy before exotic claims.",
    opportunities: [
      { title: "Repair-first metalwork", body: "Repaired steel, iron fittings and workshop skills are more immediately abundant than any rare-earth extraction story." },
      { title: "Magnet and sensor learning", body: "Iron lets public labs teach magnetism, motors, generators and shielding in a familiar way." },
      { title: "Pigment and identity", body: "Iron oxides can become colour, signage, ceramics and material storytelling across the site." }
    ],
    stewardship: "Corrosion is a teacher. Coastal iron needs maintenance, coating and design humility.",
    biologyBridge: "Haemoglobin, enzymes and iron balance."
  },
  {
    symbol: "Zr",
    lane: "heavy-mineral",
    hasPage: true,
    stream: "Zircon",
    material: "Zirconium silicate and zirconia",
    summary: "Zirconium carries the hard ceramic edge: high-temperature parts, thermal barriers, cutter heads, refractory linings and oxygen-ion ceramics.",
    localRole: "It belongs in underground and coastal systems where heat, wear, insulation and durability matter more than shiny export stories.",
    opportunities: [
      { title: "Ceramic steel", body: "Zirconia can be framed as ceramic toughness for cutter heads, bearings, sensors and high-temperature parts." },
      { title: "Thermal barriers", body: "Zirconium compounds help explain why turbines, heat stores and extreme environments need specialist materials." },
      { title: "Fuel-cell bridge", body: "Stabilised zirconia connects zirconium to solid-oxide fuel cells and oxygen sensors, while any added stabilisers would need their own sourcing evidence." }
    ],
    stewardship: "Zircon processing can involve hafnium and trace radiological questions. Treat it as a qualified materials lane.",
    biologyBridge: "Dental ceramics and biocompatible surfaces."
  },
  {
    symbol: "Hf",
    lane: "heavy-mineral",
    hasPage: false,
    tableLabel: "Zircon trace context, evidence needed for Straddie claim",
    stream: "Trace companion in zircon",
    material: "Hafnium compounds and metal",
    summary: "Hafnium is the quiet trace companion of zircon. It is not a bulk island story, but it matters for high-temperature alloys, microelectronics and nuclear-control materials.",
    localRole: "The local opportunity is awareness and stewardship: know when a trace element changes the value, risk or processing route of a zircon stream.",
    opportunities: [
      { title: "Trace intelligence", body: "Hafnium teaches that small fractions can shape entire industrial pathways." },
      { title: "High-temperature research", body: "Hafnium compounds belong in advanced ceramics, coatings and extreme-environment research conversations." },
      { title: "Microelectronics boundary", body: "Hafnium oxide is used in advanced chip gate dielectrics, making it a useful education bridge to modern semiconductor stacks." }
    ],
    stewardship: "Hafnium is not a casual local product. It is a trace-value and licensing-aware research prompt.",
    biologyBridge: "Biocompatibility and implant-surface research."
  },
  {
    symbol: "Th",
    lane: "stewardship",
    hasPage: true,
    stream: "Monazite stewardship",
    material: "Thorium-bearing minerals",
    summary: "Thorium is the stewardship test. It appears in monazite stories, points toward advanced nuclear speculation, and immediately demands radiological discipline.",
    localRole: "The local abundance path is not selling thorium. It is monitoring, licensed storage, public trust, long-term research literacy and strict consent gates.",
    opportunities: [
      { title: "Radiological literacy", body: "Use thorium to teach why some mineral sands require specialised handling, measurement, regulation and long-term records." },
      { title: "Future energy research", body: "Thorium molten-salt ideas can stay in the moonshot layer, clearly separated from anything buildable now." },
      { title: "Trust infrastructure", body: "The element page can model clear public records, qualified handling and careful boundaries around sensitive materials." }
    ],
    stewardship: "Licensed professionals, regulators and community consent come before any handling, storage or recovery conversation.",
    biologyBridge: "Radiation protection and health boundaries."
  },
  {
    symbol: "U",
    lane: "stewardship",
    hasPage: false,
    tableLabel: "Radiological context, evidence needed for Straddie claim",
    stream: "Trace radiological stewardship",
    material: "Uranium traces in mineral systems",
    summary: "Uranium is included so the atlas does not hide uncomfortable chemistry. It is a monitoring and governance element, not an export fantasy.",
    localRole: "Its positive role is public confidence: careful measurement, groundwater awareness, worker safety, secure records and honest exclusion from casual project plans.",
    opportunities: [
      { title: "Measure before myth", body: "Trace uranium teaches that mineral stories need assays, baselines and independent review." },
      { title: "Water protection", body: "Groundwater and leachate monitoring matter more than speculative value." },
      { title: "Security boundary", body: "Some materials need governance strong enough to say no, not just innovation strong enough to say maybe." }
    ],
    stewardship: "Keep uranium in a strict radiological and regulatory lane.",
    biologyBridge: "Radiotoxicity, exposure limits and environmental health."
  }
];

const ELEMENT_ATLAS = [
  ...MAJOR_SAND_ELEMENTS.map((item) => ({
    ...ELEMENT_PROPERTIES[item.symbol],
    evidence: ELEMENT_EVIDENCE[item.symbol],
    slug: ELEMENT_SLUGS[item.symbol],
    ...item
  })),
  ...REE_CONSTITUENTS.map((item) => ({
    ...ELEMENT_PROPERTIES[item.symbol],
    symbol: item.symbol,
    evidence: ELEMENT_EVIDENCE[item.symbol],
    slug: ELEMENT_SLUGS[item.symbol],
    lane: "rare-earth",
    hasPage: true,
    stream: "Monazite rare-earth stream",
    material: item.material,
    summary: item.opportunity,
    localRole: "This element belongs in a long-term capability atlas: recycling first, careful separation research second, and local public benefit before any export-for-profit logic.",
    opportunities: [
      { title: "Local capability", body: item.opportunity },
      { title: "Research pathway", body: "Map uses, hazards, separation difficulty, recycling routes, lab partners and what the community would actually gain before anyone treats it as a commodity." },
      { title: "Joyful responsible abundance", body: "The positive action is a clean materials library for repairable motors, sensors, displays, ceramics, energy systems and learning labs." }
    ],
    stewardship: "Rare-earth separation can involve acids, solvents, radioactivity, water risk and tailings. Recycling, consent and professional review come first.",
    biologyBridge: "Trace-element biology, imaging, sensors or toxicity can be added later where evidence supports it."
  }))
].sort((a, b) => a.atomicNumber - b.atomicNumber);

const PERIODIC_TABLE_CONTEXT = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", atomicMass: "1.008", category: "Reactive nonmetal", phase: "Gas", group: 1, period: 1, tableColumn: 1, tableRow: 1 },
  { atomicNumber: 2, symbol: "He", name: "Helium", atomicMass: "4.003", category: "Noble gas", phase: "Gas", group: 18, period: 1, tableColumn: 18, tableRow: 1 },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", atomicMass: "6.94", category: "Alkali metal", phase: "Solid", group: 1, period: 2, tableColumn: 1, tableRow: 2 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", atomicMass: "9.012", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 2, tableColumn: 2, tableRow: 2 },
  { atomicNumber: 5, symbol: "B", name: "Boron", atomicMass: "10.81", category: "Metalloid", phase: "Solid", group: 13, period: 2, tableColumn: 13, tableRow: 2 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", atomicMass: "12.011", category: "Reactive nonmetal", phase: "Solid", group: 14, period: 2, tableColumn: 14, tableRow: 2 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", atomicMass: "14.007", category: "Reactive nonmetal", phase: "Gas", group: 15, period: 2, tableColumn: 15, tableRow: 2 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", atomicMass: "15.999", category: "Reactive nonmetal", phase: "Gas", group: 16, period: 2, tableColumn: 16, tableRow: 2 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", atomicMass: "18.998", category: "Reactive nonmetal", phase: "Gas", group: 17, period: 2, tableColumn: 17, tableRow: 2 },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", atomicMass: "20.180", category: "Noble gas", phase: "Gas", group: 18, period: 2, tableColumn: 18, tableRow: 2 },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", atomicMass: "22.990", category: "Alkali metal", phase: "Solid", group: 1, period: 3, tableColumn: 1, tableRow: 3 },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", atomicMass: "24.305", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 3, tableColumn: 2, tableRow: 3 },
  { atomicNumber: 13, symbol: "Al", name: "Aluminium", atomicMass: "26.982", category: "Post-transition metal", phase: "Solid", group: 13, period: 3, tableColumn: 13, tableRow: 3 },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", atomicMass: "28.085", category: "Metalloid", phase: "Solid", group: 14, period: 3, tableColumn: 14, tableRow: 3 },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", atomicMass: "30.974", category: "Reactive nonmetal", phase: "Solid", group: 15, period: 3, tableColumn: 15, tableRow: 3 },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", atomicMass: "32.06", category: "Reactive nonmetal", phase: "Solid", group: 16, period: 3, tableColumn: 16, tableRow: 3 },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", atomicMass: "35.45", category: "Reactive nonmetal", phase: "Gas", group: 17, period: 3, tableColumn: 17, tableRow: 3 },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", atomicMass: "39.948", category: "Noble gas", phase: "Gas", group: 18, period: 3, tableColumn: 18, tableRow: 3 },
  { atomicNumber: 19, symbol: "K", name: "Potassium", atomicMass: "39.098", category: "Alkali metal", phase: "Solid", group: 1, period: 4, tableColumn: 1, tableRow: 4 },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", atomicMass: "40.078", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 4, tableColumn: 2, tableRow: 4 },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", atomicMass: "44.956", category: "Transition metal", phase: "Solid", group: 3, period: 4, tableColumn: 3, tableRow: 4 },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", atomicMass: "47.867", category: "Transition metal", phase: "Solid", group: 4, period: 4, tableColumn: 4, tableRow: 4 },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", atomicMass: "50.942", category: "Transition metal", phase: "Solid", group: 5, period: 4, tableColumn: 5, tableRow: 4 },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", atomicMass: "51.996", category: "Transition metal", phase: "Solid", group: 6, period: 4, tableColumn: 6, tableRow: 4 },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", atomicMass: "54.938", category: "Transition metal", phase: "Solid", group: 7, period: 4, tableColumn: 7, tableRow: 4 },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", atomicMass: "55.845", category: "Transition metal", phase: "Solid", group: 8, period: 4, tableColumn: 8, tableRow: 4 },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", atomicMass: "58.933", category: "Transition metal", phase: "Solid", group: 9, period: 4, tableColumn: 9, tableRow: 4 },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", atomicMass: "58.693", category: "Transition metal", phase: "Solid", group: 10, period: 4, tableColumn: 10, tableRow: 4 },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", atomicMass: "63.546", category: "Transition metal", phase: "Solid", group: 11, period: 4, tableColumn: 11, tableRow: 4 },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", atomicMass: "65.38", category: "Transition metal", phase: "Solid", group: 12, period: 4, tableColumn: 12, tableRow: 4 },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", atomicMass: "69.723", category: "Post-transition metal", phase: "Solid", group: 13, period: 4, tableColumn: 13, tableRow: 4 },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", atomicMass: "72.630", category: "Metalloid", phase: "Solid", group: 14, period: 4, tableColumn: 14, tableRow: 4 },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", atomicMass: "74.922", category: "Metalloid", phase: "Solid", group: 15, period: 4, tableColumn: 15, tableRow: 4 },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", atomicMass: "78.971", category: "Reactive nonmetal", phase: "Solid", group: 16, period: 4, tableColumn: 16, tableRow: 4 },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", atomicMass: "79.904", category: "Reactive nonmetal", phase: "Liquid", group: 17, period: 4, tableColumn: 17, tableRow: 4 },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", atomicMass: "83.798", category: "Noble gas", phase: "Gas", group: 18, period: 4, tableColumn: 18, tableRow: 4 },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", atomicMass: "85.468", category: "Alkali metal", phase: "Solid", group: 1, period: 5, tableColumn: 1, tableRow: 5 },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", atomicMass: "87.62", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 5, tableColumn: 2, tableRow: 5 },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", atomicMass: "88.906", category: "Transition metal", phase: "Solid", group: 3, period: 5, tableColumn: 3, tableRow: 5 },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", atomicMass: "91.224", category: "Transition metal", phase: "Solid", group: 4, period: 5, tableColumn: 4, tableRow: 5 },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", atomicMass: "92.906", category: "Transition metal", phase: "Solid", group: 5, period: 5, tableColumn: 5, tableRow: 5 },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", atomicMass: "95.95", category: "Transition metal", phase: "Solid", group: 6, period: 5, tableColumn: 6, tableRow: 5 },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", atomicMass: "(98)", category: "Transition metal", phase: "Solid", group: 7, period: 5, tableColumn: 7, tableRow: 5 },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", atomicMass: "101.07", category: "Transition metal", phase: "Solid", group: 8, period: 5, tableColumn: 8, tableRow: 5 },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", atomicMass: "102.906", category: "Transition metal", phase: "Solid", group: 9, period: 5, tableColumn: 9, tableRow: 5 },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", atomicMass: "106.42", category: "Transition metal", phase: "Solid", group: 10, period: 5, tableColumn: 10, tableRow: 5 },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", atomicMass: "107.868", category: "Transition metal", phase: "Solid", group: 11, period: 5, tableColumn: 11, tableRow: 5 },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", atomicMass: "112.414", category: "Transition metal", phase: "Solid", group: 12, period: 5, tableColumn: 12, tableRow: 5 },
  { atomicNumber: 49, symbol: "In", name: "Indium", atomicMass: "114.818", category: "Post-transition metal", phase: "Solid", group: 13, period: 5, tableColumn: 13, tableRow: 5 },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", atomicMass: "118.710", category: "Post-transition metal", phase: "Solid", group: 14, period: 5, tableColumn: 14, tableRow: 5 },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", atomicMass: "121.760", category: "Metalloid", phase: "Solid", group: 15, period: 5, tableColumn: 15, tableRow: 5 },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", atomicMass: "127.60", category: "Metalloid", phase: "Solid", group: 16, period: 5, tableColumn: 16, tableRow: 5 },
  { atomicNumber: 53, symbol: "I", name: "Iodine", atomicMass: "126.904", category: "Reactive nonmetal", phase: "Solid", group: 17, period: 5, tableColumn: 17, tableRow: 5 },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", atomicMass: "131.293", category: "Noble gas", phase: "Gas", group: 18, period: 5, tableColumn: 18, tableRow: 5 },
  { atomicNumber: 55, symbol: "Cs", name: "Caesium", atomicMass: "132.905", category: "Alkali metal", phase: "Solid", group: 1, period: 6, tableColumn: 1, tableRow: 6 },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", atomicMass: "137.327", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 6, tableColumn: 2, tableRow: 6 },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", atomicMass: "138.905", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 3, tableRow: 8 },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", atomicMass: "140.116", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 4, tableRow: 8 },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", atomicMass: "140.908", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 5, tableRow: 8 },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", atomicMass: "144.242", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 6, tableRow: 8 },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", atomicMass: "(145)", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 7, tableRow: 8 },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", atomicMass: "150.36", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 8, tableRow: 8 },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", atomicMass: "151.964", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 9, tableRow: 8 },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", atomicMass: "157.25", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 10, tableRow: 8 },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", atomicMass: "158.925", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 11, tableRow: 8 },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", atomicMass: "162.500", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 12, tableRow: 8 },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", atomicMass: "164.930", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 13, tableRow: 8 },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", atomicMass: "167.259", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 14, tableRow: 8 },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", atomicMass: "168.934", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 15, tableRow: 8 },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", atomicMass: "173.045", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 16, tableRow: 8 },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", atomicMass: "174.967", category: "Lanthanide", phase: "Solid", group: "lanthanide", period: 6, tableColumn: 17, tableRow: 8 },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", atomicMass: "178.486", category: "Transition metal", phase: "Solid", group: 4, period: 6, tableColumn: 4, tableRow: 6 },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", atomicMass: "180.948", category: "Transition metal", phase: "Solid", group: 5, period: 6, tableColumn: 5, tableRow: 6 },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", atomicMass: "183.84", category: "Transition metal", phase: "Solid", group: 6, period: 6, tableColumn: 6, tableRow: 6 },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", atomicMass: "186.207", category: "Transition metal", phase: "Solid", group: 7, period: 6, tableColumn: 7, tableRow: 6 },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", atomicMass: "190.23", category: "Transition metal", phase: "Solid", group: 8, period: 6, tableColumn: 8, tableRow: 6 },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", atomicMass: "192.217", category: "Transition metal", phase: "Solid", group: 9, period: 6, tableColumn: 9, tableRow: 6 },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", atomicMass: "195.084", category: "Transition metal", phase: "Solid", group: 10, period: 6, tableColumn: 10, tableRow: 6 },
  { atomicNumber: 79, symbol: "Au", name: "Gold", atomicMass: "196.967", category: "Transition metal", phase: "Solid", group: 11, period: 6, tableColumn: 11, tableRow: 6 },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", atomicMass: "200.592", category: "Transition metal", phase: "Liquid", group: 12, period: 6, tableColumn: 12, tableRow: 6 },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", atomicMass: "204.38", category: "Post-transition metal", phase: "Solid", group: 13, period: 6, tableColumn: 13, tableRow: 6 },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", atomicMass: "207.2", category: "Post-transition metal", phase: "Solid", group: 14, period: 6, tableColumn: 14, tableRow: 6 },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", atomicMass: "208.980", category: "Post-transition metal", phase: "Solid", group: 15, period: 6, tableColumn: 15, tableRow: 6 },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", atomicMass: "(209)", category: "Post-transition metal", phase: "Solid", group: 16, period: 6, tableColumn: 16, tableRow: 6 },
  { atomicNumber: 85, symbol: "At", name: "Astatine", atomicMass: "(210)", category: "Metalloid", phase: "Solid", group: 17, period: 6, tableColumn: 17, tableRow: 6 },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", atomicMass: "(222)", category: "Noble gas", phase: "Gas", group: 18, period: 6, tableColumn: 18, tableRow: 6 },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", atomicMass: "(223)", category: "Alkali metal", phase: "Solid", group: 1, period: 7, tableColumn: 1, tableRow: 7 },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", atomicMass: "(226)", category: "Alkaline earth metal", phase: "Solid", group: 2, period: 7, tableColumn: 2, tableRow: 7 },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", atomicMass: "(227)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 3, tableRow: 9 },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", atomicMass: "232.038", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 4, tableRow: 9 },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", atomicMass: "231.036", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 5, tableRow: 9 },
  { atomicNumber: 92, symbol: "U", name: "Uranium", atomicMass: "238.029", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 6, tableRow: 9 },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", atomicMass: "(237)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 7, tableRow: 9 },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", atomicMass: "(244)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 8, tableRow: 9 },
  { atomicNumber: 95, symbol: "Am", name: "Americium", atomicMass: "(243)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 9, tableRow: 9 },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", atomicMass: "(247)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 10, tableRow: 9 },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", atomicMass: "(247)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 11, tableRow: 9 },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", atomicMass: "(251)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 12, tableRow: 9 },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", atomicMass: "(252)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 13, tableRow: 9 },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", atomicMass: "(257)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 14, tableRow: 9 },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", atomicMass: "(258)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 15, tableRow: 9 },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", atomicMass: "(259)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 16, tableRow: 9 },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", atomicMass: "(266)", category: "Actinide", phase: "Solid", group: "actinide", period: 7, tableColumn: 17, tableRow: 9 },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: "(267)", category: "Transition metal", phase: "Solid", group: 4, period: 7, tableColumn: 4, tableRow: 7 },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", atomicMass: "(268)", category: "Transition metal", phase: "Solid", group: 5, period: 7, tableColumn: 5, tableRow: 7 },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", atomicMass: "(269)", category: "Transition metal", phase: "Solid", group: 6, period: 7, tableColumn: 6, tableRow: 7 },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", atomicMass: "(270)", category: "Transition metal", phase: "Solid", group: 7, period: 7, tableColumn: 7, tableRow: 7 },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", atomicMass: "(277)", category: "Transition metal", phase: "Solid", group: 8, period: 7, tableColumn: 8, tableRow: 7 },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", atomicMass: "(278)", category: "Unknown properties", phase: "Solid", group: 9, period: 7, tableColumn: 9, tableRow: 7 },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: "(281)", category: "Unknown properties", phase: "Solid", group: 10, period: 7, tableColumn: 10, tableRow: 7 },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", atomicMass: "(282)", category: "Unknown properties", phase: "Solid", group: 11, period: 7, tableColumn: 11, tableRow: 7 },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", atomicMass: "(285)", category: "Transition metal", phase: "Liquid", group: 12, period: 7, tableColumn: 12, tableRow: 7 },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", atomicMass: "(286)", category: "Unknown properties", phase: "Solid", group: 13, period: 7, tableColumn: 13, tableRow: 7 },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", atomicMass: "(289)", category: "Post-transition metal", phase: "Solid", group: 14, period: 7, tableColumn: 14, tableRow: 7 },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", atomicMass: "(290)", category: "Unknown properties", phase: "Solid", group: 15, period: 7, tableColumn: 15, tableRow: 7 },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", atomicMass: "(293)", category: "Unknown properties", phase: "Solid", group: 16, period: 7, tableColumn: 16, tableRow: 7 },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", atomicMass: "(294)", category: "Unknown properties", phase: "Solid", group: 17, period: 7, tableColumn: 17, tableRow: 7 },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", atomicMass: "(294)", category: "Unknown properties", phase: "Gas", group: 18, period: 7, tableColumn: 18, tableRow: 7 }
];

const LOCAL_SAND_SYMBOLS = new Set(Object.keys(ELEMENT_EVIDENCE));

const FULL_PERIODIC_TABLE = PERIODIC_TABLE_CONTEXT.map((base) => {
  const atlasItem = ELEMENT_ATLAS.find((item) => item.symbol === base.symbol);
  if (atlasItem && LOCAL_SAND_SYMBOLS.has(base.symbol)) {
    return {
      ...base,
      ...atlasItem,
      tableColumn: base.tableColumn,
      tableRow: base.tableRow,
      isLocalSand: true,
      tableLabel: atlasItem.lane === "coastal-companion" ? "Coastal companion" : "Straddie sand element"
    };
  }
  if (atlasItem && atlasItem.hasPage) {
    return {
      ...base,
      ...atlasItem,
      tableColumn: base.tableColumn,
      tableRow: base.tableRow,
      lane: "coastal-companion",
      hasPage: true,
      isLocalSand: false,
      isCompanionContext: true,
      tableLabel: "Coastal context, not a sand claim",
      localRole: atlasItem.localRole + " This tile is deliberately separated from the brighter Straddie sand elements so visitors do not read it as a direct mineral-sands occurrence claim."
    };
  }
  if (atlasItem) {
    return {
      ...base,
      ...atlasItem,
      tableColumn: base.tableColumn,
      tableRow: base.tableRow,
      lane: atlasItem.lane || "future-biology-context",
      hasPage: false,
      isLocalSand: false,
      isCompanionContext: atlasItem.lane === "coastal-companion",
      tableLabel: atlasItem.tableLabel || "Future biology context",
      localRole: "This element is included for the later biology layer, not as a Straddie mineral-sands claim."
    };
  }
  return {
    ...base,
    lane: "periodic-context",
    hasPage: false,
    isLocalSand: false,
    tableLabel: "Periodic context",
    stream: "Wider periodic table context",
    summary: base.name + " is shown so the atlas stays a complete periodic table. It is not presented here as a local Straddie sand element.",
    localRole: "Use this tile for orientation only. The local sand story is carried by the brighter highlighted elements with pages and stewardship notes.",
    stewardship: "No local project claim is made for this element on this site."
  };
});

const PROJECT_CURRENTS = [
  {
    lane: "materials",
    title: "Bladeless tide and wave reefs",
    eyebrow: "Energy + habitat",
    narrative: "Amity, Jumpinpin and the ocean side become different kinds of learning edge: stable reef-energy pilots where erosion needs help, lighter touch devices where the inlet needs freedom, and submerged wave reefs where surf, fish habitat and power can be studied together.",
    build: "The responsible first move is baseline data, co-design, ecological windows, removable prototypes and clear failure rules around whales, dugongs, turtles, mullet runs and fishers.",
    href: "briefs/sandy-sports-network.html"
  },
  {
    lane: "materials",
    title: "Civilisation of Sand fund",
    eyebrow: "Keep value local",
    narrative: "The material story changes when the goal is not bulk export. Sand, sun, waves, waste, reef modules, energy and expertise become ways to capitalise long-term local capability.",
    build: "The fundable path is energy, repair, education, circular manufacturing, blue carbon, ecological restoration and public infrastructure that earns its keep without chewing up more surface.",
    href: "build-path.html"
  },
  {
    lane: "build-path",
    title: "Sovereign wealth, not royalties",
    eyebrow: "7th generation capital",
    narrative: "The new project stack pushes away from passive royalties and toward community-held equity, patient trusts, local reinvestment and decision power that lasts beyond one construction cycle.",
    build: "A Minjerribah-style future fund should separate commercial agility, cultural authority, public benefit, legal compliance and intergenerational accumulation.",
    href: "boundaries.html"
  },
  {
    lane: "build-path",
    title: "Everything app as civic nervous system",
    eyebrow: "Daily usefulness first",
    narrative: "The EverythingAPP thread belongs under the far-out work as a practical surface: ferry timing, bookings, events, rosters, meals, aged-care support, deliveries, club notices, news and offline local coordination.",
    build: "The first useful version is a low-bandwidth PWA with tenant boundaries, local directory, transport cache, ordering/booking stubs and offline disaster mode.",
    href: "briefs/disaster-kiosks.html"
  },
  {
    lane: "build-path",
    title: "Heart-first cultural hub",
    eyebrow: "Ballow Road capability",
    narrative: "The multicultural grant roadmap turns a site into a warm civic shell: youth drop-in, sandy sports, media, maker training, Indigenous developer pathways and disaster resilience under one practical roof.",
    build: "The grounded path is buildable capital works first, with the wider ecosystem as value context rather than a claim that permissions already exist.",
    href: "briefs/multicultural-hub.html"
  },
  {
    lane: "boundaries",
    title: "Mutual risk branch",
    eyebrow: "Risk stays visible",
    narrative: "A serious civilisation stack needs risk infrastructure. The insurance branch proposal is a reminder that reefs, tunnels, health tools, volunteers, co-ops and public events all need coverage logic before scale.",
    build: "The legal/research path starts with discretionary mutuals, CLG structures, AFSL boundaries, WHS duties, reinsurance and professional governance before public promises.",
    href: "boundaries.html"
  },
  {
    lane: "boundaries",
    title: "Indigenous data and governance",
    eyebrow: "Permission before platforms",
    narrative: "The sovereign wealth and Indigenous partnership briefs put culture, consent, carried equity, veto power, community trusteeship and long-horizon governance into the centre of the project flow.",
    build: "Responsible abundance leaves room for the right people to lead, refuse, reshape or ignore the idea.",
    href: "boundaries.html"
  },
  {
    lane: "worlds",
    title: "Oceania health and AI surge",
    eyebrow: "Care before spectacle",
    narrative: "A citizen-care moonshot can start with ordinary pressure points: food waste, ageing, memory support, carer load, local kiosks, thermal wellness ideas and person-owned health records imagined as care infrastructure, not diagnosis or treatment.",
    build: "The credible path is research and policy: evidence gates, clinicians, privacy-by-design, non-medical public language, opt-in trials and care infrastructure before any intervention claim.",
    href: "briefs/loving-longevity.html"
  },
  {
    lane: "worlds",
    title: "Life game quest log",
    eyebrow: "Micro-quests",
    narrative: "The quest-log design turns civilisation work into small moves people can actually take: learn one tool, help one neighbour, test one material, restore one patch, document one failure.",
    build: "The practical gift is a playable path into the big story without demanding belief, debt or heroic self-reinvention.",
    href: "briefs/protopian-gambit.html"
  },
  {
    lane: "worlds",
    title: "Love, consent and group futures",
    eyebrow: "Adult boundary",
    narrative: "The GGM philosophy thread carries the warm, relational, spicy edge of the atlas as consent-first culture and private-world design rather than spectacle.",
    build: "Clear adult boundaries protect the public layer, where the useful themes are care, honesty, chosen family, longevity, privacy and emotional infrastructure.",
    href: "briefs/loving-longevity.html"
  }
];

const NARRATIVE_SEEDS = {
  "crystal-city": [
    "Begin on the living surface: dune, tree, water, culture, ferry, footpath and ordinary care. The underground city only earns a place in the imagination if it protects that surface rather than treating it as a lid.",
    "What if a community built a quiet resilience layer from patient prototypes first: archive rooms, food loops, water dashboards, cool shelters and learning caverns? Joyful responsible abundance starts with keeping people, stories and ecosystems well-supported through change."
  ],
  kardashev: [
    "The old Kardashev scale asks how much power a civilisation can use. This version asks a better question: how much power can be held with consent, ecological repair and emotional maturity?",
    "What if an island learned to move between comfort mode, emergency mode and moonshot mode without becoming addicted to scale? The positive action is an energy dashboard that rewards restraint, shared benefit and readiness before spectacle."
  ],
  supercomputers: [
    "The trail starts with a maze, not a chip. A visitor learns to see paths, constraints and hidden dimensions, then follows that thinking into logic gates, FPGA benches, simulation clusters and heat that can be reused instead of wasted.",
    "What if local sand became a compass for sovereign compute without pretending a backyard fab appears on command? The first abundance move is literacy: ordinary PCs, open tools, shared labs, careful process maps and a culture that knows where the hard parts really are."
  ],
  "master-plan": [
    "The underground civilisation is not a withdrawal from the world. It is a careful design test for how a community might shelter memory, food, water, energy, repair skills and governance while leaving the surface lighter, cleaner and more loved.",
    "What if the big fiction pushed practical action instead of fog: sand battery models, cross-section maps, consent gates, ecological monitoring and room-scale prototypes? The abundance here is not escape from Earth. It is more ways to protect life on it."
  ],
  "peaceful-space": [
    "The ocean-to-orbit story begins with a shed, a repair bench and a local reason to care about the sky. Space becomes weather, science, communication, navigation and shared responsibility.",
    "What if oceanic engineering skill could be redirected into peaceful space infrastructure that helps islands prepare, learn and cooperate? The next action is a maker pathway from small public prototypes to solar monitoring, resilient comms and treaty-aware space commons."
  ],
  "web3-sensorium": [
    "The Sensorium is a room where the planet can be argued with honestly. Data, models, dissent, local knowledge and wild hypotheses enter separate lanes so curiosity does not have to become confusion.",
    "What if public debate had shared simulations instead of shouting matches? Joyful responsible abundance looks like students, scientists, sceptics and builders testing assumptions together while communities keep sovereignty over their data."
  ],
  "aura-geode": [
    "Aura begins as a personal builder, then becomes a capsule, a clinical pathway and a cultural-scale question: how can technology help a person map themselves without swallowing them?",
    "What if the digital twin stayed external, severable and consent-first? Positive action means private context by default, clinical evidence where health is involved, and Live Aid 2035 scale culture only after the human boundary is clear."
  ],
  "space-weather-hub": [
    "The Sun-Earth studio turns invisible weather into something people can understand before rumour fills the gap. Solar flares, geomagnetic storms, ionospheric shifts and community concern become calm signals rather than confusion.",
    "What if the first build was a careful newsroom for the sky: open feeds, readable rules, human review and XR visuals that explain uncertainty? Abundance here is public science literacy that helps people prepare without pretending prediction is certainty."
  ],
  "auto-farm": [
    "The in-home farm starts with a kitchen-scale question: what can a household grow, measure, ferment, compost and learn as ordinary food confidence?",
    "What if microbiome care, food security and small automation became ordinary domestic literacy? Joyful responsible abundance looks like fresh food, less waste, better data, and bodies treated as ecosystems rather than machines."
  ],
  "disaster-kiosks": [
    "A disaster kiosk is humble until the day it matters. It sits where people already move, offering ferry notices, local updates, calm instructions and a public interface that still works when networks get messy.",
    "What if emergency infrastructure also made normal days kinder? The useful path is solar power, battery backup, mesh comms, trusted local content and practice runs that make confidence ordinary."
  ],
  "capsule-hotels": [
    "The capsule hotel becomes more than beds in a wall. On Straddie it can be a site-neutral civic machine: sleep, compute, training, protected access and confidence-building held in one small public-capacity engine.",
    "What if paid stays helped fund shared compute, local planning, health-surge rehearsal and disaster readiness without becoming another resort story? Joyful responsible abundance appears when visitors help leave tools behind."
  ],
  "multicultural-hub": [
    "The hub story begins with a place to gather: youth, Elders, sport, culture, media, training, meals and safe ordinary welcome.",
    "What if a community building could become a civic stage without pretending approvals already exist? Positive action means playable grant phases, feedback walls, cultural care and a clear line between concept and commitment."
  ],
  "community-coop": [
    "The co-op starts where trust is earned: patient tech help, market conversations, media support and people learning enough to participate without being captured by outsiders.",
    "What if local capability could be owned by the people building it? Joyful responsible abundance becomes training, care, repair, mentoring and ecological work that can be recognised without turning community into a spreadsheet."
  ],
  "sandy-sports-network": [
    "The sports network treats play as infrastructure. Courts, beaches, clubs, ferry links and reefs become places where health, youth work, visitors, culture and resilience can meet.",
    "What if a 2032 legacy was not one grand venue but a distributed practice field for community strength? The positive action is mapping ordinary upgrades beside bigger dreams, so fun remains useful and scale stays honest."
  ],
  "public-honour-board": [
    "The honour board asks how support can be visible without making private life public. It is a civic surface for chosen gratitude, not a surveillance wall.",
    "What if contribution became as celebrated as sporting wins? Abundance here means public-safe profiles, consent gates, broad summaries and visible trails of care that people can opt into without pressure."
  ],
  profile: [
    "A public profile is a small public entry. It says who someone is comfortable being, what they care about and what they may want to offer, without forcing the rest of their life into view.",
    "What if identity on a community platform began with boundaries instead of extraction? Positive action means plain text, chosen visibility and a format that helps people join projects without surrendering privacy."
  ],
  aura: [
    "The private Aura file is the workshop behind the public entry. It can hold style, goals, limits, memories, support needs and creative worlds where an AI helper can be useful without becoming entitled.",
    "What if personal context stayed local and deliberate? Joyful responsible abundance begins when help becomes more humane, while private health, legal, emotional and relational material stays behind stronger walls."
  ],
  dreamtime: [
    "This threshold marks the moment the atlas enters fiction while keeping cultural authority outside the fiction room. It can use symbol, time and imagination, but it cannot pretend to own stories that need custodianship.",
    "What if every speculative ritual had a return gate? Positive action means wild ideas come back through consent, evidence, engineering, ecology, law and local governance before they touch reality."
  ],
  archipelago: [
    "The archipelago turns many projects into islands that can be visited without needing to understand the whole ocean at once. Aura, resilience, music, media, P4A and Strange But True become connected but not collapsed.",
    "What if a visitor could choose their own depth: practical help, cultural story, civic simulation or moonshot research? Abundance is navigation that lets people join from where they are."
  ],
  "island-abundance": [
    "Island abundance begins with ordinary signals: events, artists, businesses, care, visitor welcome, food, transport and public art. The future becomes believable when it improves daily life first.",
    "What if every local gathering was also a tiny rehearsal for regenerative civilisation? Positive action means directories, noticeboards, maker loops and cultural invitations that make value visible without extracting the place."
  ],
  "alien-necklace": [
    "The alien necklace is a film scenario, not a belief demand. It lets comedy, beauty, truth, uncertainty and AI alignment collide in a backyard so the big questions become playable.",
    "What if audiences could test futures instead of being lectured about them? Joyful responsible abundance appears when story becomes civic rehearsal: people laugh, choose, argue, reflect and leave with one better action."
  ],
  "protopian-gambit": [
    "The music layer carries the emotional permission to try. Songs can hold hope, humour, grief, courage and love long enough for people to imagine building again.",
    "What if culture became the front edge of practical change? Positive action means every anthem, film prompt or public phrase points back to a form, map, prototype, event, repair act or bridge between people."
  ],
  "cosmic-nexus": [
    "The cosmic nexus allows high-strangeness curiosity into the room, then gives it manners. UAP, ocean mysteries and non-human intelligence scenarios become simulations, not commands to believe.",
    "What if fringe questions trained better evidence habits, calmer governance and deeper ocean care? Abundance here is curiosity that makes people more useful, not more detached from reality."
  ],
  "loving-longevity": [
    "The longevity commons begins with care for bodies, kitchens, relationships and privacy. It keeps warmth and adult possibility alive without turning health or intimacy into public performance.",
    "What if longer life meant more honesty, better food, stronger consent and more graceful forms of love? Joyful responsible abundance is desire with boundaries, health with evidence and private context held carefully."
  ]
};

const SITE_BRIEFS = [
  {
    slug: "crystal-city",
    url: "briefs/crystal-city.html",
    title: "Subterranean Crystal City",
    eyebrow: "Silica Citadel",
    material: "Quartz, ilmenite, rutile, zircon",
    source: "Subterranean_Crystal_City_Kardashev_Ground_Station.md",
    deck: "A speculative surface-and-subterranean city where Minjerribah becomes a crystal-coloured resilience lab, not a concrete expansion.",
    brief: [
      "The core idea is a respectful eco-surface above a protected subterranean life-support civilisation.",
      "The surface stays cultural, ecological and light-touch. The underground layer carries storage, food, compute, water, energy and recovery capacity.",
      "The visual language comes from island mineral sands refined into quartz glass, titanium metal, zircon ceramic and rare-earth light."
    ],
    moonshot: "A city that can preserve enough ecological, cultural and technical memory to help repair the surface after severe disruption, while still treating the surface as living Country rather than a disposable roof.",
    modules: [
      "Crystal cavern civic core with transparent governance dashboards",
      "Surface sanctuary zones for ecology, culture and low-impact learning",
      "Underground archive for seeds, genomes, languages and media",
      "XR education layer showing solar weather, geology and city systems"
    ],
    experiments: [
      "Build a browser-based cross-section simulator of surface, sand, hydrology and underground systems.",
      "Prototype a mineral palette and material board for quartz, titanium, zircon and iron oxide.",
      "Turn the idea into a tabletop civic design game before pretending it is infrastructure."
    ],
    elements: ["SiO2", "TiO2", "FeTiO3", "ZrSiO4"]
  },
  {
    slug: "kardashev",
    url: "briefs/kardashev.html",
    title: "Adaptive Kardashev Ladder",
    eyebrow: "Civilisation Dial",
    material: "Solar, sand battery, fusion, sensorium",
    source: "GenesisAI,_Sands,_and_Kardashev_Civilization.md",
    deck: "A practical-to-wild ladder for scaling energy, compute and coordination only as need, urgency and ethics justify it.",
    brief: [
      "The Kardashev scale becomes a living dashboard, not a macho scoreboard.",
      "Type I begins as local energy literacy, closed loops, durable governance and planetary sensorium thinking.",
      "Type II becomes relevant only when the community has the maturity to handle space energy without exporting the same old power games upward."
    ],
    moonshot: "A civilisation throttle that can move from village resilience to planetary coordination to orbital energy commons without losing consent, ecology or local dignity.",
    modules: [
      "Energy rhythm meter: daily abundance, emergency mode, planetary care, cosmic perspective",
      "Sand battery and thermal storage design space",
      "Federated sensorium that learns without swallowing local sovereignty",
      "Space weather hardening for community-scale infrastructure"
    ],
    experiments: [
      "Create a simple Kardashev dial UI with sliders for urgency, energy, ecological risk and social consent.",
      "Model the difference between comfort energy, resilience energy and moonshot energy.",
      "Write governance prompts that ask when not to scale."
    ],
    elements: ["SiO2", "TiO2", "REE"]
  },
  {
    slug: "supercomputers",
    url: "briefs/supercomputers.html",
    title: "Super-Computers of North Straddie",
    eyebrow: "Compute From Sand",
    material: "Silicon, titanium, zircon ceramics",
    source: "Super-Computers_of_North_Straddie.md",
    deck: "A first-principles route from mineral sand imagination to sovereign compute, edge AI, simulation tools and consciousness architecture experiments.",
    brief: [
      "Flatland, maze theory and pathfinding become the entry into chip architecture and island-scale compute.",
      "It then drills into semiconductor reality: quartz to silicon, purification, crystal growth, doping, MOSFETs, FinFETs, GAA FETs, lithography, etching, deposition and cleanroom constraints.",
      "The island version is small-batch rapid evolution: simulate first, prototype with FPGAs, learn from ASML-scale industry, and use local mineral sands where plausible without pretending a full fab appears on command."
    ],
    moonshot: "A coastal compute commons where every kiosk, capsule, auto-farm and lab becomes part of a distributed island simulator.",
    modules: [
      "Dimensional thinking and maze-solving curriculum",
      "Quartz-to-silicon material pathway",
      "FPGA and EDA rapid-prototyping bench",
      "Island compute commons for simulation, education and resilience"
    ],
    experiments: [
      "Build a local dashboard running on ordinary PCs before inventing chips.",
      "Use FPGA demos to teach logic gates, memory, timing and signal flow visually.",
      "Make a sand-to-silicon process map that clearly marks which steps are local, regional, national, global or science fiction.",
      "Build a simulation map where each kiosk, capsule or lab adds compute and heat-reuse potential to the island."
    ],
    depthTitle: "From maze to machine mind",
    depthIntro: "A small island of sand becomes a thought experiment in dimensional thinking, semiconductor discipline and sovereign compute. The invitation is to start with maps, mazes and FPGAs before dreaming about custom chips.",
    depth: [
      {
        title: "Flatland to maze theory",
        body: "The opening move is not a chip. It is a way of thinking: start with lower-dimensional worlds, then ask how agents find paths through constraints.",
        points: [
          "Flatland becomes the mental model for seeing hidden dimensions, layers and design spaces.",
          "Maze theory introduces graphs, nodes, edges, search, path cost and dead-end recovery.",
          "Dijkstra, A-star and breadth-first search become teaching tools for routing, chip layout, logistics and AI planning."
        ]
      },
      {
        title: "Sand to semiconductor",
        body: "Local silica is inspiring precisely because it is not simple. The romance only matters if the purification chain is treated honestly.",
        points: [
          "Silica sand is reduced from SiO2 into metallurgical-grade silicon, then pushed toward electronic-grade purity.",
          "Purification uses chemical vapour routes, zone refining and crystal growth through Czochralski or float-zone processes.",
          "Semiconductor-grade silicon needs extreme impurity control, so the honest build path starts with learning and prototyping before local fabrication claims."
        ]
      },
      {
        title: "Device physics stack",
        body: "Once silicon is plausible as a concept, the path moves into the device layer.",
        points: [
          "Band theory and doping explain how p-type and n-type regions let circuits control electron flow.",
          "MOSFETs are the ordinary building blocks; scaling pressure introduces leakage, short-channel effects and quantum tunnelling.",
          "FinFETs and gate-all-around FETs become reference points for why advanced chips are architectural objects, not just smaller transistors."
        ]
      },
      {
        title: "Small-batch rapid evolution",
        body: "The interesting move is not instant mass production. It is fast iteration toward useful compute.",
        points: [
          "EDA simulation comes first so designs can fail cheaply.",
          "Reusable IP cores and modular blocks let the team change one part without remaking the whole system.",
          "FPGAs become the bridge between software imagination and physical logic, before any ASIC conversation."
        ],
        note: "Local mineral sands are part of the story and material spine, not an excuse to overclaim a backyard semiconductor industry."
      }
    ],
    elements: ["SiO2", "TiO2", "ZrSiO4", "Fe"]
  },
  {
    slug: "master-plan",
    url: "briefs/master-plan.html",
    title: "Subterranean Super-Civilisation",
    eyebrow: "Respawn Layer",
    material: "Oyster-crete, subsurface tunnelling, mineral memory",
    source: "Subterranean_Super_Civilization_Master_Plan.md",
    deck: "A maximalist blueprint for a protected underground civilisation that can store, grow, compute, govern and surface again.",
    brief: [
      "The master plan treats Minjerribah as a silica stack: quartz, rutile, ilmenite, zircon and monazite become a fictional atomic inventory for a Type I prototype.",
      "Its centrepiece is the Silica Citadel: a subterranean megalopolis with wet-sand tunnelling, acoustic metamaterials, oyster-crete, sand batteries and sovereign compute.",
      "The explorer path keeps the far-out parts visible as design fiction while turning buildable pieces into material boards, simulations, consent gates and staged prototypes."
    ],
    moonshot: "A full-stack civilisation shelter imagined as an underground ecological operating system.",
    modules: [
      "Silica Citadel cross-section",
      "Wet-sand tunnelling vehicle concept",
      "Osteomorphic blocks, oyster-crete and acoustic metamaterials",
      "Braided economy layer for work, care, energy and public value"
    ],
    experiments: [
      "Separate the fiction layer, research layer and buildable prototype layer on the page.",
      "Sketch one room-scale module for food, one for compute, one for archives and one for water.",
      "Turn the mineral table into a public material board with plausible uses and explicit uncertainty.",
      "Use the atlas as a living index of what needs verification, consent and professional review."
    ],
    depthTitle: "The underground civilisation test",
    depthIntro: "This is a deliberately huge opening: geology, hydrology, mineral inventory, tunnelling fiction, living materials, energy storage and a civilisation operating system under pressure.",
    depth: [
      {
        title: "Geological premise",
        body: "Minjerribah becomes a sand-island fortress and material inventory in the imagination, not because that is proven infrastructure, but because the geology gives the story a specific place to think from.",
        points: [
          "The Pleistocene dune mass is imagined as a flexible buffer rather than brittle continental crust.",
          "The freshwater lens becomes both drinking reserve and thermal / hydraulic system.",
          "Quartz, rutile, ilmenite, zircon and monazite form the Silica Stack: glass, titanium, magnetic cores, ceramics, rare earths and long-term energy questions."
        ]
      },
      {
        title: "Extreme engineering spine",
        body: "The infrastructure layer is pure moonshot: a wet-sand tunnelling system that prints and mines as it goes.",
        points: [
          "The tunnelling vehicle concept uses slurry-shield pressure control to hold saturated sand open.",
          "In-situ laser or plasma sintering turns excavated silica into a vitreous tunnel liner.",
          "Lateral wall mining extracts mineral streams while creating habitable voids, making tunnelling part excavation and part material refinery."
        ]
      },
      {
        title: "Living material layer",
        body: "The master plan keeps returning to structures that heal, flex or resonate rather than just sit there.",
        points: [
          "Osteomorphic blocks interlock by shape and dissipate motion instead of cracking like brittle monoliths.",
          "Phononic void patterns become acoustic metamaterials for vibration control and design-fiction stealth.",
          "Oyster-crete imagines biomineral infrastructure that accretes calcium carbonate from seawater and repairs itself."
        ]
      },
      {
        title: "Energy and civilisation operating system",
        body: "The most far-out energy layer is Project Jupiter, but the transferable idea is energy sovereignty and storage discipline.",
        points: [
          "Lightning harvesting and thorium-radon ionisation belong in the speculative layer and need strong evidence gates.",
          "The sand battery is a more grounded bridge: store heat in silica mass and insulate it well.",
      "The Braided Economy and C-Hour layer ask how care, repair, ecological work and public value get recognised when wellbeing is the design target."
        ],
        note: "The moonshot keeps the story material intact while leaving the real-world boundaries visible."
      }
    ],
    elements: ["SiO2", "ZrSiO4", "FeTiO3", "REE"]
  },
  {
    slug: "peaceful-space",
    url: "briefs/peaceful-space.html",
    title: "Peaceful Space Gambit",
    eyebrow: "Ocean To Orbit",
    material: "Titanium, solar, treaty commons",
    source: "Peaceful Space Gambit Transition Framework.md",
    deck: "A transition framework that reframes advanced manufacturing capability into orbital commons, civic resilience and decentralised science.",
    brief: [
      "The framework starts locally with makerspaces, resilience and the silica stack, then scales toward orbit.",
      "It imagines AUKUS-scale technical capacity being redirected into peaceful space infrastructure, space weather monitoring and shared science.",
      "The political centre is a Purple Space Commons: treaty-aware, Indigenous-data-aware and less extractive than a space gold rush."
    ],
    moonshot: "Turn oceanic engineering capability into a peaceful space commons that watches the Sun, supports Earth and opens science participation.",
    modules: [
      "Gumpi makerspace as material transition anchor",
      "Virtual Solar Swarm for distributed science",
      "Space weather hub connected back to island resilience",
      "Treaty model inspired by Antarctic-style stewardship"
    ],
    experimentsEyebrow: "Island relevance",
    experimentsTitle: "Useful before orbit.",
    experimentsIntro: "The space layer earns its place only when it improves ordinary island capability first.",
    experiments: [
      {
        title: "Sun and signal dashboard",
        body: "Turn space weather into a small public status board for solar power, radio, navigation, school science and local operators."
      },
      {
        title: "Resilient comms drill",
        body: "Use the makerspace path to test mesh radios, power banks, kiosk updates and ferry-day coordination before any orbital hardware is discussed."
      },
      {
        title: "Commons rules first",
        body: "Draft plain rules for data, debris, launch access and Indigenous knowledge boundaries so peaceful space remains public-good infrastructure."
      }
    ],
    elements: ["TiO2", "SiO2", "REE"]
  },
  {
    slug: "web3-sensorium",
    url: "briefs/web3-sensorium.html",
    title: "Web3 Global Sensorium",
    eyebrow: "Planetary Twin",
    material: "DIDs, CRDTs, digital twin, DeSci",
    source: "Web3_Sensorium_for_Science_Debate.md",
    deck: "A decentralised Earth-and-space digital twin where known science, wild hypotheses, open debate and resilient sovereign nodes can be tested against data.",
    brief: [
      "The Global Sensorium is a persistent 1:1 Earth and local-space digital twin fed by real-time sensors, archives and simulation models.",
      "Its architecture rejects one central server in favour of sovereign nodes, P2P sync, CRDT state, decentralised identity and verifiable contribution trails.",
      "The moonshot is not just a VR globe. It is a scientific debate arena where mainstream models and fringe hypotheses can be run, compared, challenged and improved in public."
    ],
    moonshot: "A planetary nervous system where science is not trapped in journals, wild ideas are not mistaken for proof, and communities can test futures together without surrendering sovereignty.",
    modules: [
      "Sovereign node architecture with offline-first replicas",
      "Signed CRDT state for shared models and sensor readings",
      "DID / VC trust layer for people, sensors, models and reviews",
      "Fractal DeSci governance for protocols, domains and contributor guilds"
    ],
    experiments: [
      "Build a tiny browser demo that compares two models against one shared dataset.",
      "Prototype a contribution credential for data curation, peer review or model replication.",
      "Map which parts belong in Git, which in a knowledge graph, and which in an immersive twin.",
      "Create a public reality sorter for evidence, model, speculation, fiction and governance decision."
    ],
    depthTitle: "A planetary nervous system",
    depthIntro: "A serious explorer can enter here as a scientist, coder, cartographer, funder, sceptic or worldbuilder. The prize is a shared arena where models have to show their assumptions.",
    depth: [
      {
        title: "Purpose",
        body: "The Sensorium becomes a shared environment for observing Earth, space weather, climate, geology, biology and infrastructure as connected systems.",
        points: [
          "It democratises access to complex data and modelling tools instead of leaving them inside silos.",
          "It lets students, researchers, citizens and institutions explore the same world model at different depths.",
          "It explicitly includes fringe and wild ideas, but only by making their assumptions runnable, inspectable and testable."
        ]
      },
      {
        title: "Sovereignty stack",
        body: "The key technical move is offline-first decentralisation.",
        points: [
          "Each node keeps its own world-state replica and can keep working during network disruption.",
          "CRDTs let independent edits converge without a central arbiter.",
          "DIDs and verifiable credentials create provenance: who supplied a sensor feed, model, review or governance vote."
        ]
      },
      {
        title: "Digital twin build path",
        body: "The immersive world is grounded in GIS and open data rather than pure spectacle.",
        points: [
          "Digital elevation models, satellite imagery, hydrology, vegetation and infrastructure become the geospatial foundation.",
          "QGIS-style processing, open 3D formats, WebSockets, WebRTC and JSON APIs keep it interoperable.",
          "Unreal or Unity can render the world, but the important design principle is separating data, logic and visual layer."
        ]
      },
      {
        title: "Science debate engine",
        body: "The Sensorium is a way to keep high-strangeness curiosity honest.",
        points: [
          "Every hypothesis states its mechanism, assumptions, parameters and expected observations.",
          "Multiple models can be run side by side against the same input data.",
          "Community review, model versioning and provenance let debate happen around evidence instead of vibes."
        ]
      }
    ],
    elements: ["SiO2", "REE", "ZrSiO4", "Fe"]
  },
  {
    slug: "aura-geode",
    url: "briefs/aura-geode.html",
    title: "Aura Geode And Genesis Protocol",
    eyebrow: "Qualified Self",
    material: "Straddie quartz, AuraOS, clinical wrapper, digital twin",
    source: "AURA_GEODE_to_MACRO.md / Clinical_Research_Path_for_Aura_of_Dementia.md / Version7_Aura_of_Intelligence_2023_July.md",
    sourceLabel: "Thread mix: Geode capsule, memory-care research path and Version 7 builder lanes.",
    deck: "A cosmic-egg digital twin system that travels from XR Aura Builder, geopoetic capsule and AuraOS into memory-care evidence, clinical governance and Live Aid 2035 scale culture.",
    brief: [
      "Version 7 frames Aura as a meta-program for building the tool: body scan, goals, values, mind palace, data visualisations, world maps, XR scaffolding and safe plug-and-play modules.",
      "The Geode layer turns that into a capsule ecosystem: pressure-rated shell, personalised atmosphere delivery, modality stack, Bayesian session engine, 60-session Genesis Protocol and privacy-preserving Aura Twin fabric.",
      "The memory-care branch is grounded in Australian evidence pathways: DOMS-aligned assessment, BPSD support, TGA / HREC work, phased trials and NDIS / My Aged Care positioning."
    ],
    moonshot: "An external, consent-first digital twin and care companion that helps people map their own mind, health, memory, values, relationships and future without surrendering their body or their data.",
    modules: [
      "XR Aura Builder and private/public mind palace shell",
      "Aura Geode capsule with material ID and session timeline",
      "Clinical wrapper for memory care and carer support",
      "GAJRA culture layer with Live Aid 2035 and world-scale value mapping"
    ],
    experiments: [
      "Build the first Aura Builder as a local-only questionnaire and visual scaffold before any device claims.",
      "Turn the 60-session Genesis Protocol into a staged data map with clear consent checkpoints.",
      "Create a demo clinical report format that maps narrative inputs to validated domains without pretending it is approved healthcare.",
      "List Version 7 subprojects as lanes, with only Live Aid 2035 carried forward."
    ],
    depthTitle: "External twin, human sovereignty",
    depthIntro: "Aura starts as a personal builder, grows into a capsule and clinical research path, then opens into culture at world scale. The hard boundary is simple: the twin stays external, severable and consent-first.",
    depth: [
      {
        title: "Version 7 builder spine",
        body: "Version 7 is a tool-building manifesto: an interface for constructing richer Auras with LLM prompts, mixed reality, safe code and personal context.",
        points: [
          "Inputs begin with body scan, goals, values, interests, preferred emotions, colours, skills, travel, activity rhythms and conscious direction.",
          "The Mind Palace holds private objects, memories and maps, while the outer shell can expose public or social layers.",
          "The XR builder uses a 12 x 24 matrix, vector-space objects, body-relative scale, chakras, geosphere maps and explicit inside-private / outside-public boundaries."
        ]
      },
      {
        title: "Aura Geode system",
        body: "The Geode turns Aura from software into physical ritual, therapeutic environment and engineering challenge.",
        points: [
          "The capsule shell is imagined as pressure-rated geopolymer with a Straddie quartz base and a material composition ID.",
          "The personalised atmosphere delivery system keeps the main capsule air normal while delivering controlled gas mixes through a medical-grade mask.",
          "AuraOS sequences light, scent, audio, haptics, atmosphere and dialogue across programmed two-hour sessions."
        ]
      },
      {
        title: "60-session Genesis Protocol",
        body: "The Genesis Protocol gives Aura a staged user journey instead of an instant digital twin fantasy.",
        points: [
          "Sessions 1-20 map resilience and dose-response through short micro-exposures.",
          "Sessions 21-40 let the AI compose personalised chrono-therapeutic sessions from early data.",
          "Sessions 41-60 validate and refine the user's prime protocol while studying expectation, response and subjective experience."
        ]
      },
      {
        title: "Clinical memory-care pathway",
        body: "The clinical research plan is the sober bridge from poetic twin to Australian health-system evidence.",
        points: [
          "Persona mapping keeps life story and preferences, then maps them to clinical domains such as memory, function, quality of life, BPSD and carer wellbeing.",
          "The clinical wrapper augments familiar tools such as RUDAS, GPCOG, DAD, NPI, DEMQOL and carer-burden scales instead of asking clinicians to trust a black box.",
          "The regulatory pathway treats AoI as likely SaMD / clinical decision support software, requiring TGA planning, HREC approval, privacy governance and human-factors evidence."
        ],
        note: "Before trials, approvals and qualified partners exist, the public promise is care infrastructure, not treatment."
      },
      {
        title: "Version 7 subprojects",
        body: "The subprojects become lanes for the atlas rather than one overloaded promise.",
        points: [
          "Traveller hardware kits, capsule / quarantine hotels, retirement villages, NDIS and rehabilitation clinics, health retreats, family-size display centres and major nightclub systems.",
          "Aura Affinity Marketplace and Internet of Good: values clothing, Aura-related wellbeing and creative businesses, safe marketplace flows and cultural mapping.",
          "GAJRA / Aura DAO work: newsletters, outreach, grants, marketplace transactions, game assets, distributed compute and open-world AI agents.",
          "Live Aid 2035: synchronised concerts, 72 hours of art and music, and a world vote across past, present and future values."
        ]
      }
    ],
    elements: ["SiO2", "REE", "ZrSiO4", "TiO2"]
  },
  {
    slug: "space-weather-hub",
    url: "briefs/space-weather-hub.html",
    title: "Space Weather News Hub",
    eyebrow: "Sun-Earth Studio",
    material: "NOAA feeds, InfluxDB, Kafka, Unity XR",
    source: "Space_Weather_Data_IFTTT.md / Space_Weather_Hub_Pseudo_Code.md / 1-page_Earthquake_Prediction_with_the_Space_Weather_News.md / Modular_Unity_Development_&_Deployment_Plan_for___SpaceWeather_News_Hub__.md",
    sourceLabel: "Thread mix: IFTTT rules, Sun-Earth pseudo-code, earthquake research and Unity XR deployment.",
    deck: "A live XR news studio for solar wind, geomagnetic storms, ionospheric shifts, earthquakes, alerts, AI narration and public science literacy.",
    brief: [
      "Space weather becomes a working system: data feeds, IFTTT rules, timestamped storage, correlation analysis, Unity visualisation and AI narration.",
      "The earthquake material is handled as frontier forecasting research, not certainty: many signals are tracked, but precise one-hour predictions remain beyond standard practice.",
      "The build path runs from Python / InfluxDB / Kafka and WebSocket data flow into a cross-platform Unity XR experience with mobile, Quest, PC VR, WebXR and mixed-reality targets."
    ],
    moonshot: "A cheerful but disciplined Sun-Earth newsroom where a student, island resident, researcher or emergency planner can see invisible solar-terrestrial systems become visible, explorable and discussable.",
    modules: [
      "IFTTT matrix for solar, geomagnetic, seismic, volcanic, infrastructure and public-health triggers",
      "Timestamped data layer using Python, InfluxDB and event streams",
      "Unity XR newsroom with live dashboards, 3D Earth, magnetosphere, CME and aurora layers",
      "AI anchor for reviewed scripts, adaptive explanations, multilingual narration and calm alerts"
    ],
    experiments: [
      "Start with a static dashboard that ingests one NOAA space-weather feed and one earthquake feed.",
      "Add timestamp alignment and show lagged correlations without claiming causation.",
      "Prototype the IFTTT rules as visible cards before wiring any alerting workflow.",
      "Build the first Unity or WebXR scene with dummy data so the visual grammar exists before real-time complexity arrives."
    ],
    depthTitle: "The Sun-Earth newsroom",
    depthIntro: "This is one of the most buildable moonshots in the set: data streams, rule logic, backend shape, XR deployment, narration and caveats already point toward a first serious prototype.",
    depth: [
      {
        title: "Signals to ingest",
        body: "The studio watches several signal families at once so invisible solar-terrestrial systems become discussable.",
        points: [
          "Space weather: solar flares, solar wind speed and density, IMF orientation, CMEs, solar proton events and geomagnetic indices.",
          "Earth systems: seismic feeds, foreshocks, TEC, ULF electromagnetic anomalies, radon, groundwater, InSAR deformation, thermal infrared and acoustic emissions.",
          "Human systems: infrastructure sensors, public reports, education interactions and sentiment or misinformation signals during events."
        ]
      },
      {
        title: "Rule engine",
        body: "The first rule engine stays readable before it becomes clever.",
        points: [
          "IF X-class flare, THEN evaluate satellite, radio and geomagnetic impacts.",
          "IF solar wind is fast and Bz turns strongly southward, THEN raise geomagnetic storm watch.",
          "IF ULF anomalies, TEC shifts, radon spikes or deformation appear together, THEN increase research attention rather than issuing false certainty."
        ]
      },
      {
        title: "Backend architecture",
        body: "The pseudo-code points toward a practical streaming stack.",
        points: [
          "Python or Node microservices fetch external APIs and normalise the data.",
          "Kafka-style topics carry live events such as solar_wind, quakes, alerts and summaries.",
          "InfluxDB stores timestamped time-series so the system can replay events, compare lags and generate trend panels.",
          "REST and WebSocket gateways deliver live and historical slices into the XR client."
        ]
      },
      {
        title: "XR news studio",
        body: "The Unity plan turns the data stack into an experience.",
        points: [
          "Mobile VR, WebXR, AR Foundation, Quest, PC VR and Vision Pro are treated as tiers of one modular Unity project.",
          "Dashboard panels show live values; 3D Earth layers show auroras, quakes, TEC and geospatial context.",
          "Solar flares and CMEs become time-compressed 4D sequences so people can understand events that unfold over hours or days."
        ]
      },
      {
        title: "AI narration and public trust",
        body: "The AI anchor is useful only if it stays tied to data and review.",
        points: [
          "LLMs draft daily scripts from structured summaries, but human review or strict templates protect factuality.",
          "TTS, lip-sync and gestures make the anchor feel alive without pretending the AI is the authority.",
          "Age, region and language settings let the same event be explained to children, the general public, specialists or decision-makers."
        ],
        note: "Earthquake prediction stays framed as probabilistic research and preparedness, not a public promise of precise warnings."
      }
    ],
    elements: ["SiO2", "REE", "TiO2", "Fe"]
  },
  {
    slug: "auto-farm",
    url: "briefs/auto-farm.html",
    title: "In-Home Farm And Microbiome",
    eyebrow: "Programmable Biosphere",
    material: "Water, minerals, light, microbes",
    source: "in-home farm and microbiome.md",
    deck: "A decentralised room-sized biosphere network where food, microbiome data, health reflection and life-support design start at home.",
    brief: [
      "The idea has evolved from an advanced indoor farm into a programmable nutrition and life-support system.",
      "The moonshot stack includes microbial and algal bioreactors, fungal conversion, structural crops, sensor arrays and personal feedback loops.",
      "The decentralised version turns homes into diverse experiments that learn together without needing one central farm model."
    ],
    moonshot: "Energy becomes food software: electricity, water, minerals and biology flow through a personal biosphere that can adapt to the human using it.",
    modules: [
      "Room unit with plants, roots, fungi, algae and sensors",
      "Nutritional operating system for protein, fat and micronutrients",
      "Microbiome-aware health reflection layer",
      "Global learning network of home biosphere experiments"
    ],
    experiments: [
      "Design the minimum viable biosphere per person as a simple calculator.",
      "Track kWh, water, protein, calories, fats and failure modes.",
      "Frame health ideas as nutrition and research prompts until evidence and professionals are involved."
    ],
    elements: ["SiO2", "Fe", "REE"]
  },
  {
    slug: "disaster-kiosks",
    url: "briefs/disaster-kiosks.html",
    projectUrl: "https://auraofintelligence.github.io/straddie-disaster-kiosks/",
    projectLabel: "Open Disaster Kiosks site",
    repoUrl: "https://github.com/auraofintelligence/straddie-disaster-kiosks",
    title: "Straddie Disaster Kiosks",
    eyebrow: "Solar-Punk Arcade",
    material: "Solar, battery, mesh, local AI",
    source: "Straddie_Disaster_Kiosk_Pitch.pdf",
    deck: "A community kiosk network that works as a useful daily service, then shifts into offline disaster mode when the mainland tether fails.",
    brief: [
      "The kiosk concept mixes phone booth, arcade cabinet and ATM familiarity so people actually use it during ordinary days.",
      "On normal days it handles local updates, visitor guidance, mapping, transport intent and community services.",
      "In disaster mode it prioritises notices, check-ins, LoRa mesh communications and local information when internet and power are unreliable."
    ],
    moonshot: "Everyday public infrastructure that quietly trains the community for emergency coordination by being useful before anything goes wrong.",
    modules: [
      "Solar and battery-backed multi-compute cabinet",
      "Local-first CRDT sync and mesh networking",
      "Visitor intent capture for ferry and transport pressure",
      "Offline maps, notices, translation and local AI help"
    ],
    experiments: [
      "Build a wooden prototype interface before hardening the hardware.",
      "Use a public demo at a club or market to test trust and usability.",
      "Simulate ferry arrival waves and show how intent data helps dispatch."
    ],
    elements: ["SiO2", "TiO2", "Fe"]
  },
  {
    slug: "capsule-hotels",
    url: "briefs/capsule-hotels.html",
    projectUrl: "https://auraofintelligence.github.io/straddie-capsule-surge-lab/",
    projectLabel: "Open Capsule Surge Lab",
    title: "Straddie Capsule Surge Lab",
    eyebrow: "Beds To Civic Compute",
    material: "Capsules, GPUs, civic twins, health surge",
    source: "Copy of (Draft) Capsule Hotel Opportunities.pptx.pdf + Straddie Capsule Surge Lab",
    sourceLabel: "Capsule hotel deck, Straddie civic-simulation build and island compute notes.",
    deck: "An inland not-for-profit capsule stay that turns paid nights into civic simulation, health-surge readiness and local compute capacity.",
    brief: [
      "This is not a beachfront resort or a nominated address. The moonshot asks what a suitable inland space could carry before anyone fights over a block.",
      "Paid capsule stays create ordinary cashflow, but the public value comes from protected access nights, simulation rooms, training seats and idle GPU-hours.",
      "The island compute layer ties capsules to disaster kiosks, noticeboards, Virtual Minjerribah, Web3 Sensorium debate and a future NVIDIA-class supercompute rack pathway."
    ],
    moonshot: "A public-capacity hotel that can sleep people, run local AI, pressure-test health and disaster surges, and help Straddie build confidence before scale.",
    modules: [
      "Inland capsule rooms with workforce, visitor and surge modes",
      "Per-capsule GPUs for occupant tools first, then local compute",
      "Civic simulation rooms linked to kiosks, noticeboards and digital twins",
      "NFP reserve model for protected access, maintenance and future rack purchase"
    ],
    experiments: [
      "Run site-neutral metrics: nights, simulation hours, access blocks and idle GPU-hours.",
      "Prototype one public dashboard connecting capsule use, noticeboard load and disaster-kiosk readiness.",
      "Write the $3M AUD NVIDIA rack as an ambition pathway, not a current promise.",
      "Use the common room as a gentle compatibility lab for joyful responsible abundance."
    ],
    elements: ["SiO2", "TiO2", "REE", "Fe"]
  },
  {
    slug: "multicultural-hub",
    url: "briefs/multicultural-hub.html",
    projectUrl: "https://auraofintelligence.github.io/stradbroke-grants-lab/projects.html",
    projectLabel: "Open Grants Lab projects",
    repoUrl: "https://github.com/auraofintelligence/stradbroke-grants-lab",
    title: "Cultural And Sandy Sports Hub",
    eyebrow: "Heart-First Hub",
    material: "Ballow Road, youth, culture, sandy sports",
    source: "Roadmap for Multicultural Grant.docx",
    deck: "A narrative grant-world sketch for a multicultural sandy sports and cultural hub at 10-12 Ballow Road, framed as a safe harbour rather than a certainty.",
    brief: [
      "A physical community hub becomes the central game-board piece: youth drop-in, sandy sports, media, training, resilience and gathering.",
      "The physical build stays at the centre, with a support ecosystem layered around it so public value is easy to see.",
      "The tone is heart-first: a warm place for youth, Elders, multicultural locals and visitors to meet without pretending approvals or partnerships already exist."
    ],
    moonshot: "A modular cultural sports hub that can be reconfigured like a giant construction kit, turning local sand, local learning and local care into a living civic stage.",
    modules: [
      "Youth drop-in centre and sandy sports club",
      "Ready S.E.T. co-op and training pathway",
      "Hyperlocal media and Indigenous AI developer learning",
      "Disaster resilience hub connected to ferry-gateway logistics"
    ],
    experiments: [
      "Turn the grant roadmap into a playable five-phase application quest.",
      "Make a short public-facing project page that clearly says narrative concept, not approved plan.",
      "Create a feedback wall where locals can sort what feels useful, too much, missing or culturally sensitive."
    ],
    elements: ["SiO2", "TiO2", "Fe", "REE"]
  },
  {
    slug: "community-coop",
    url: "briefs/community-coop.html",
    projectUrl: "https://auraofintelligence.github.io/shared-table-initiative/sovereign-space-builder.html",
    projectLabel: "Open Shared Table builder",
    repoUrl: "https://github.com/auraofintelligence/shared-table-initiative",
    title: "Ready S.E.T. Community Co-op",
    eyebrow: "Trust To Infrastructure",
    material: "Care, training, C-Hours, local ownership",
    source: "Community Co-op Blueprint Development.docx",
    deck: "A story-world pathway from small trusted tech help into a community-owned co-operative, braided economy and local resilience engine.",
    brief: [
      "The co-op path begins with grassroots trust: practical tech help, market-stall conversations, media support and patient digital confidence.",
      "It then imagines a formal Ready S.E.T. co-operative that trains, employs and shares local capability without external capture.",
      "The braided economy and C-Hour ideas are treated as narrative mechanisms for valuing care, ecological work and civic contribution, not as launched financial products."
    ],
    moonshot: "A local capability engine where people earn trust first, then co-own the training, labour, care, media, resilience and digital-twin infrastructure of the island game world.",
    modules: [
      "Grassroots trust through Strange but True-style practical help",
      "Ready S.E.T. co-operative with one member, one vote logic",
      "C-Hour reciprocity ledger for care and ecological work",
      "Physical hubs at Amity, Dunwich and Ballow Road"
    ],
    experiments: [
      "Create a plain-language co-op explainer for non-coders and non-lawyers.",
      "Prototype a fake C-Hour ledger with sample contributions, clearly marked as game-world only.",
      "Map which roles locals could play: mentor, maker, carer, media helper, trainer, steward, sceptic."
    ],
    elements: ["SiO2", "REE", "Fe"]
  },
  {
    slug: "sandy-sports-network",
    url: "briefs/sandy-sports-network.html",
    projectUrl: "https://auraofintelligence.github.io/amity-outdoor-fitness-grant/",
    projectLabel: "Open Amity fitness site",
    repoUrl: "https://github.com/auraofintelligence/amity-outdoor-fitness-grant",
    title: "Sandy Sports Network",
    eyebrow: "2032 Game-World Legacy",
    material: "Dunwich, Amity, Point Lookout, reefs",
    source: "Sports Facility Research for Minjerribah.docx",
    deck: "A distributed sports-facility story map linking Dunwich, Amity Point and Point Lookout with sandy sports, cultural gathering and resilient infrastructure.",
    brief: [
      "Sports facilities become shared game-world nodes: not just recreation, but places for youth, culture, training, visitors and resilience.",
      "Dunwich becomes the capability and logistics hub, Point Lookout the managed performance node, and Amity the resilient coastal adaptation node.",
      "Olympic and national-scale language acts as narrative pressure, while the boundary between possibility and certainty stays visible."
    ],
    moonshot: "A Civilisation of Sand sports network where courts, clubs, reefs, kiosks and training loops become one playful public map for health, culture and resilience.",
    modules: [
      "Dunwich capability hub near ferry, health, school and cultural precincts",
      "Point Lookout elite-performance and managed tourism node",
      "Amity Point sand cricket, beach tennis and restorative aquatic sports",
      "Geopolymer reefs and coastal protection as story-world infrastructure"
    ],
    experiments: [
      "Make a clickable three-node sports map for Dunwich, Amity and Point Lookout.",
      "Separate ordinary sports upgrades from the bigger 2032 and space-age mythology.",
      "Invite local clubs to mark what feels fun, practical, respectful or ridiculous."
    ],
    elements: ["SiO2", "ZrSiO4", "TiO2", "Fe"]
  },
  {
    slug: "public-honour-board",
    url: "briefs/public-honour-board.html",
    projectUrl: "https://auraofintelligence.github.io/strange-but-true/community-ledger.html",
    projectLabel: "Open community ledger",
    repoUrl: "https://github.com/auraofintelligence/strange-but-true",
    title: "Public Honour Board",
    eyebrow: "Visible Support",
    material: "Public-safe JSON, profile.md, XRP, Solana, trust trails",
    source: "PLFC public honour board model and Strange but True community ledger",
    deck: "A public-safe display layer for community contribution trails, built around consent, broad summaries and visible local support rather than private records.",
    brief: [
      "The honour board is imagined as a wall-screen, kiosk and web display layer showing approved public support for local projects.",
      "If a supporter chooses public financial visibility, the public profile.md can sit beside public wallet transaction references from XRP, Solana or other ledgers added later.",
      "It should never publish raw private records, exact locations, contact details, private payments, emergency contacts or unapproved media.",
      "In this game-world, it becomes the ceremonial surface where people can choose to be seen helping, without forcing anyone into publicity."
    ],
    moonshot: "A civic contribution display that makes care, training, repair, support and stewardship feel as visible as sporting wins, while keeping private life private.",
    modules: [
      "Public-safe supporter cards",
      "Public profile.md and ledger references",
      "Project contribution trails",
      "Kiosk and wall-screen display mode",
      "Approval workflow before anything becomes public"
    ],
    experiments: [
      "Create a fake sample honour board using fictional supporters and clearly marked demo data.",
      "Mock a public profile.md linked to fictional XRP and Solana transaction hashes before any real ledger use.",
      "Define what must stay private before defining what can be public.",
      "Test whether locals read it as appreciation, pressure, theatre or useful accountability."
    ],
    elements: ["SiO2", "TiO2", "Fe", "REE"]
  },
  {
    slug: "profile",
    url: "briefs/profile.html",
    projectUrl: "https://auraofintelligence.github.io/sbt_profile_starter/",
    projectLabel: "Open profile builder",
    repoUrl: "https://github.com/auraofintelligence/sbt_profile_starter",
    title: "profile.md",
    eyebrow: "Public Entry",
    material: "Plain text, consent, skills, place connection",
    source: "Strange but True community ledger profile.md notes",
    deck: "A simple public profile file for people who choose to appear beside community support, skills, interests and future-building roles.",
    brief: [
      "profile.md is the public entry: who someone is comfortable being, what they care about and what they may want to offer.",
      "It can connect to a public honour board only when the person chooses that level of visibility.",
      "The useful version is deliberately plain text so locals do not need to become coders before they can describe themselves."
    ],
    moonshot: "A human-readable public identity layer where island people can carry their skills, interests, roles and future hopes between projects without surrendering privacy.",
    modules: [
      "Public name or chosen display name",
      "Place connection and local interests",
      "Skills, offers and support preferences",
      "Boundaries: what not to publish"
    ],
    experiments: [
      "Make three fictional sample profiles for a maker, a mentor and a sceptical local.",
      "Add a privacy checklist before any honour board connection.",
      "Test the profile format in a browser, text editor and future builder app."
    ],
    elements: ["SiO2", "Fe", "REE"]
  },
  {
    slug: "aura",
    url: "briefs/aura.html",
    projectUrl: "https://auraofintelligence.github.io/sbt_aura_builder/",
    projectLabel: "Open Aura builder",
    repoUrl: "https://github.com/auraofintelligence/sbt_aura_builder",
    title: "aura.md",
    eyebrow: "Private Workshop",
    material: "AI context, memory, goals, world-building",
    source: "Strange but True community ledger aura.md notes",
    deck: "A deeper private planning file for useful AI help: style, goals, devices, projects, limits, care patterns and future-world imagination.",
    brief: [
      "aura.md is the private workshop behind a public profile, not something that should be casually published.",
      "It can help AI tools understand a person more usefully: communication style, goals, support needs, current projects and creative worlds.",
      "In the moonshot layer, Aura becomes a careful bridge between self-reflection, local capability, digital companions and public-good projects."
    ],
    moonshot: "A personal context engine that lets AI support people as whole humans, while keeping consent and private boundaries stronger than the technology's appetite.",
    modules: [
      "AI communication preferences",
      "Project memory and practical goals",
      "Wellbeing, limits and support notes",
      "World-building and creative architecture"
    ],
    experiments: [
      "Write a fictional aura.md example with public and private sections clearly separated.",
      "Create a local-only Aura Builder flow before connecting anything public.",
      "Map which fields could help community work without becoming surveillance."
    ],
    elements: ["SiO2", "REE", "ZrSiO4"]
  },
  {
    slug: "dreamtime",
    url: "briefs/dreamtime.html",
    title: "Dreamtime Threshold",
    eyebrow: "Fiction Threshold",
    material: "Story, ethics, science fiction, cultural caution",
    source: "New dreamtime.md fiction and science-fiction threshold",
    deck: "A fictional threshold where the atlas crosses into mythic science fiction, while stating that real cultural stories belong to their custodians.",
    brief: [
      "This threshold uses Dreamtime as a requested fiction layer, not as cultural authority, sacred teaching or a claim about Quandamooka knowledge.",
      "Its job is to mark where Mineral Moonshots leaves civic planning and enters dream logic, speculative systems and science-fiction tests.",
      "The ethical rule is simple: real cultural stories need custodianship, invitation and care. The fiction layer can be wild, but it cannot pretend to own what it does not own."
    ],
    moonshot: "A science-fiction threshold where island geology, digital minds, ancient time, future time and civic play meet without confusing imagination for permission.",
    modules: [
      "Cultural guardrail note",
      "Fictional threshold map",
      "Science-fiction prompts",
      "Return-to-reality consent gate"
    ],
    experiments: [
      "Shape the threshold as a clear portal from narrative planning into fiction.",
      "Add a ritual of returning: every wild idea must name what would need consent or evidence.",
      "Invite readers to treat the threshold as a story room, not a source of cultural facts."
    ],
    elements: ["SiO2", "ZrSiO4", "REE", "Fe"]
  },
  {
    slug: "archipelago",
    url: "briefs/archipelago.html",
    title: "Archipelago Intelligence Ecosystem",
    eyebrow: "Map Of Maps",
    material: "Aura, P4A, resilience, media",
    source: "archipelago-intelligence-ecosystem-2026-05-03T05-40.opml",
    deck: "A navigation map connecting Aura, Minjerribah resilience, P4A, I See Infinity and Strange but True into one island-scale ecosystem.",
    brief: [
      "The OPML map is the constellation of the bigger universe: Aura of Intelligence, local resilience, Sandy Sports, P4A, I See Infinity and Strange but True.",
      "In this atlas, it becomes the bridge between practical local services and the moonshot civilisation layer.",
      "It keeps the wild ideas findable without forcing every visitor to understand the whole cosmology at once."
    ],
    moonshot: "A public map where each project becomes an island in an archipelago, with bridges for people who want to travel deeper.",
    modules: [
      "Aura Builder, Avatar Builder and Mind Palace Builder",
      "Ready S.E.T. co-op, disaster kiosks and sovereign mesh",
      "Truth Engine, braided economy and cyber-republic simulator",
      "Songs, films, hyperlocal media and practical tech support"
    ],
    experiments: [
      "Turn the OPML into an interactive constellation map.",
      "Give each island a practical path and a moonshot path.",
      "Let the first entry stay simple while the deep pages hold the wildness."
    ],
    elements: ["SiO2", "REE", "FeTiO3"]
  },
  {
    slug: "island-abundance",
    url: "briefs/island-abundance.html",
    title: "Island Abundance Matrix",
    eyebrow: "Joyful Responsible Abundance",
    material: "local businesses, events, artists, care, public art",
    source: "Stradbroke Island Research Project.pdf",
    deck: "A practical research entry into Minjerribah after sand mining: local businesses, community groups, events, artists, visitors and public conversation becoming a regenerative civic matrix.",
    brief: [
      "The research project frames North Stradbroke Island / Minjerribah as a place moving from extraction toward joyful responsible abundance.",
      "The useful public layer is not a top-down technology pitch. It is a map of businesses, events, organisations, artists and public touchpoints where conversation can start gently.",
      "The moonshot is to let AI, public art, noticeboards, grants and local media help people coordinate without flattening culture, privacy or local authority."
    ],
    moonshot: "A whole-island abundance matrix where everyday events, local businesses, artists, visitors and community organisations become the living interface for resilience, culture and regenerative opportunity.",
    modules: [
      "Business and organisation directory as relationship map",
      "Recurring events as public conversation gateways",
      "Artists, makers and cultural hubs as imagination infrastructure",
      "Visitor-facing notices that invite empathy rather than consumption"
    ],
    experiments: [
      "Turn the research directory into a public map of practical paths and moonshot paths.",
      "Use the noticeboard network image as the bridge between wall, tablet, phone, kiosk and fallback emergency modes.",
      "Label every public pathway with consent, custodianship and plain-language boundaries."
    ],
    elements: ["SiO2", "Fe", "REE", "TiO2"]
  },
  {
    slug: "alien-necklace",
    url: "briefs/alien-necklace.html",
    title: "Alien Necklace Alignment Film",
    eyebrow: "Backyard Alignment",
    material: "film, Aura, MoE, comedy, truth",
    source: "AI Alignment CYOA For Film.md / Alien Necklace Sparks Philosophical Shift (1).md",
    deck: "A plausible sci-fi film scenario where an alien necklace lands in a Gumpi backyard and turns AI alignment into comedy, aesthetics, ultimate truth and civic imagination.",
    brief: [
      "The story starts small: a meteorite, a backyard, a necklace and ordinary Australian banter instead of a distant AI lecture.",
      "The necklace works like a cosmic Mixture of Experts: it routes human humour, beauty, uncertainty and longing into different possible futures.",
      "The CYOA layer lets collaborators test choices, jokes, ethics and character arcs before pretending the story is settled."
    ],
    moonshot: "Make AI alignment emotionally legible by letting people play through truth, temptation, style, humour and love before the technology becomes a policy lecture.",
    modules: [
      "Aura Director prompt system for branching film scenes",
      "Backyard discovery and vernacular resistance",
      "Aesthetic acceptance as a different alignment route",
      "Global film festival as civic imagination engine"
    ],
    experiments: [
      "Create a playable CYOA prompt that asks the visitor what they do when the necklace wakes up.",
      "Write one scene where humour opens courage without trivialising the stakes.",
      "Label the necklace as fiction so it stays story technology, not a real claim."
    ],
    elements: ["REE", "SiO2", "ZrSiO4", "Fe"]
  },
  {
    slug: "protopian-gambit",
    url: "briefs/protopian-gambit.html",
    title: "A Protopian Gambit",
    eyebrow: "Culture As Protocol",
    material: "music, hope, films, bridges, public courage",
    source: "4th i C. infinity album A Protopian Gambit (lyrics).md",
    deck: "A music-and-story scenario where the future is not sold as utopia. It is sung as a protopian risk: act from love, build better tools, and keep moving.",
    brief: [
      "The album material gives Mineral Moonshots a cultural signal rather than another planning note.",
      "Songs can carry courage, grief, humour, bridges and public hope into places where diagrams cannot reach.",
      "The protopian frame means better is enough to begin. The moonshot does not have to pretend perfection."
    ],
    moonshot: "A public culture engine where songs, films, local events and repo tools help people feel the future before they are asked to build it.",
    modules: [
      "I See Infinity music universe as emotional first entry",
      "Film prompts that make civilisation design playable",
      "Public performances linked to noticeboards and market tables",
      "Bridge language for people who do not think in code"
    ],
    experiments: [
      "Link one song to one practical public action and one science-fiction question.",
      "Create a small listening path through moonshot themes: love, courage, borders, forms and repair.",
      "Use lyrics as invitations, not as claims that the system is already real."
    ],
    elements: ["SiO2", "REE", "Fe"]
  },
  {
    slug: "cosmic-nexus",
    url: "briefs/cosmic-nexus.html",
    title: "Cosmic Nexus And Abyss Protocol",
    eyebrow: "Wild Ideas, Data First",
    material: "UAP, underwater civilisations, diplomacy, sensorium",
    source: "Cosmic_Nexus_UAP,_AI,_AA,_R&D.md / What_if_UAP_are_Underwater_Civilizations.md / What_Would_You_Choose_2023.md",
    deck: "A responsible fringe-science entry that treats UAP, underwater civilisation and cosmic-risk material as thought experiments for data, diplomacy and resilience, not as belief demands.",
    brief: [
      "The Cosmic Nexus material mixes UAP research, ancient aeronautics, AI, spiritual science, travel, events and joyful responsible abundance.",
      "The Abyss Protocol asks a high-strangeness question: what if underwater non-human intelligence were a geopolitical variable rather than entertainment?",
      "The useful public move is to treat this as a simulation and diplomacy exercise: data first, calm interpretation, and no pretending speculation is evidence."
    ],
    moonshot: "A planetary sensorium and diplomacy simulator where wild hypotheses are allowed into the room, then held to evidence, consent, calm governance and human decency.",
    modules: [
      "Open-minded research club with clear evidence standards",
      "Hydro-acoustic and coastal sensor thought experiments",
      "Xeno-diplomacy and Love U.N. simulation layer",
      "Return-to-grounding protocol for fringe material"
    ],
    experiments: [
      "Build a reality sorter for evidence, speculation, fiction and governance simulation.",
      "Create a calm public page explaining how to explore UAP material with curiosity, evidence and no certainty theatre.",
      "Connect cosmic curiosity back to island resilience, ocean care and peaceful space commons."
    ],
    elements: ["ZrSiO4", "REE", "TiO2", "SiO2"]
  },
  {
    slug: "loving-longevity",
    url: "briefs/loving-longevity.html",
    title: "Loving Longevity Commons",
    eyebrow: "Warm Boundaries",
    material: "microbiome, HBOT, relationships, consent, privacy",
    source: "in-home farm and microbiome.md / Global_Group_Marriages___Extended.md / Grey Area Commons / Aura Health Twin",
    deck: "A public-safe entry for longevity, microbiome care and consensual adult relationship futures, with enough loving spice to feel alive and enough boundaries to stay responsible.",
    brief: [
      "The longevity material links in-home food systems, microbiome reflection, HBOT ideas and private-first health context.",
      "The relationship material asks whether internet-connected abundance needs more flexible, honest and consent-based forms of love than default scripts allow.",
      "The outward-facing layer stays warm, adult, privacy-preserving and non-medical: invitation first, pressure never."
    ],
    moonshot: "A loving abundance layer where people can explore health, intimacy, friendship, family, desire, care and long life without surrendering consent, privacy or evidence.",
    modules: [
      "Private-first health twin and microbiome reflection",
      "Home biosphere and food-security experiments",
      "Grey-area consent questions for adults",
      "Relationship futures that value honesty, care and emotional safety"
    ],
    experiments: [
      "Create public-safe cards that separate health ideas, adult relationship prompts, private notes and fiction.",
      "Frame health ideas as research prompts until evidence and qualified professionals are involved.",
      "Let the page feel warm and spicy without publishing private life or pressuring anyone into visibility."
    ],
    elements: ["SiO2", "REE", "Fe", "ZrSiO4"]
  }
];

const LOCAL_PROJECTS = [
  {
    name: "Straddie Noticeboard Network",
    repo: "auraofintelligence/straddie-noticeboard-network",
    visibility: "Public prototype",
    pageUrl: "https://auraofintelligence.github.io/straddie-noticeboard-network/",
    url: "https://github.com/auraofintelligence/straddie-noticeboard-network",
    bridge: "The wall, tablet, phone, kiosk and fallback image is one practical build surface beneath the bigger civilisation story.",
    buildStep: "Useful public information on normal days; trusted emergency coordination when the island needs it."
  },
  {
    name: "Strange But True",
    repo: "auraofintelligence/strange-but-true",
    visibility: "Public shelf",
    pageUrl: "https://auraofintelligence.github.io/strange-but-true/",
    url: "https://github.com/auraofintelligence/strange-but-true",
    bridge: "The friendly first entry for tech help, AI help, grant support, public downloads and local trust.",
    buildStep: "Grounds the far-out work in patient local help so the moonshot does not float away from people."
  },
  {
    name: "Stradbroke Grants Lab",
    repo: "auraofintelligence/stradbroke-grants-lab",
    visibility: "Public prototype",
    pageUrl: "https://auraofintelligence.github.io/stradbroke-grants-lab/",
    url: "https://github.com/auraofintelligence/stradbroke-grants-lab",
    bridge: "Turns local ideas into grant-ready structures without pretending funding or approval already exists.",
    buildStep: "Helps practical projects become evidence, budget, risk, staged delivery and public accountability."
  },
  {
    name: "Shared Table Initiative",
    repo: "auraofintelligence/shared-table-initiative",
    visibility: "Public prototype",
    pageUrl: "https://auraofintelligence.github.io/shared-table-initiative/",
    url: "https://github.com/auraofintelligence/shared-table-initiative",
    bridge: "Starts with the simple question of who is already feeding, welcoming and caring for people here.",
    buildStep: "Makes food, welcome and care visible before the system talks about abundance at larger scales."
  },
  {
    name: "Grey Area Commons",
    repo: "auraofintelligence/grey-area-commons",
    visibility: "Public adult boundary",
    pageUrl: "https://auraofintelligence.github.io/grey-area-commons/",
    url: "https://github.com/auraofintelligence/grey-area-commons",
    bridge: "Keeps the loving spice consent-first, adult-only, privacy-preserving and gentle enough for real humans.",
    buildStep: "Protects the relationship and intimacy layer with consent, privacy and adult boundaries."
  },
  {
    name: "i C. infinity Music Universe",
    repo: "auraofintelligence/i-C-infinity-music-universe",
    visibility: "Public culture",
    pageUrl: "https://auraofintelligence.github.io/i-C-infinity-music-universe/",
    url: "https://github.com/auraofintelligence/i-C-infinity-music-universe",
    bridge: "Carries the protopian mood through songs, albums, mythic language and public-facing story worlds.",
    buildStep: "Gives the civilisation work an emotional entry through music, hope, repair and future courage."
  },
  {
    name: "Agent Markdown Form Navigator",
    repo: "auraofintelligence/agent-md-form-navigator",
    visibility: "Public tool",
    pageUrl: "https://auraofintelligence.github.io/agent-md-form-navigator/",
    url: "https://github.com/auraofintelligence/agent-md-form-navigator",
    bridge: "Shows how public forms can become agent-ready markdown without burying people in technical setup.",
    buildStep: "Lets people turn plain-language input into useful AI briefs one structured page at a time."
  },
  {
    name: "Legal Memory Workbench",
    repo: "auraofintelligence/legal-memory-workbench",
    visibility: "Public workbench",
    pageUrl: "https://auraofintelligence.github.io/legal-memory-workbench/",
    url: "https://github.com/auraofintelligence/legal-memory-workbench",
    bridge: "Adds sober legal-memory boundaries to a site that otherwise wants to run toward the stars.",
    buildStep: "Keeps legal context, disclaimers and evidence discipline close to the speculative work."
  },
  {
    name: "Amity Outdoor Fitness",
    repo: "auraofintelligence/amity-outdoor-fitness-grant",
    visibility: "Public proposal",
    pageUrl: "https://auraofintelligence.github.io/amity-outdoor-fitness-grant/",
    url: "https://github.com/auraofintelligence/amity-outdoor-fitness-grant",
    bridge: "Grounds longevity and abundance in ordinary public movement, access, safety and outdoor activity.",
    buildStep: "Starts longevity in daylight: movement, safer access, bodies, ageing and community care."
  },
  {
    name: "Strange But True Field Library",
    repo: "auraofintelligence/strange-but-true-field-library",
    visibility: "Private workbench",
    url: "",
    bridge: "The deeper archive catalogue stays private while public-safe summaries can feed future moonshots.",
    buildStep: "Keeps the source archive useful without leaking private material into public layers."
  },
  {
    name: "Strange But True Travel Oracle",
    repo: "auraofintelligence/strange-but-true-travel-oracle",
    visibility: "Private workbench",
    url: "",
    bridge: "Keeps travel, hospitality, reciprocity and Shared Table logic in a private planning lane for now.",
    buildStep: "Treats travel as a care and reciprocity problem before it becomes a bigger world system."
  },
  {
    name: "Aura Health Twin",
    repo: "auraofintelligence/aura-health-twin",
    visibility: "Private-first health",
    url: "",
    bridge: "Keeps longevity, health context and personal reflection private unless the person deliberately chooses otherwise.",
    buildStep: "Keeps health and longevity context private-first while public pages stay careful and non-medical."
  }
];

const INTERACTIVE_LABS = {
  "crystal-city": {
    type: "layer-map",
    title: "Subterranean Layer Map",
    deck: "The city stays legible when the surface remains light and the deeper systems carry mineral memory, water, food, archives, compute and shelter.",
    layers: [
      {
        name: "Eco-surface",
        depth: "0 m",
        tone: "Cultural, ecological, low-impact",
        detail: "A living surface with sanctuaries, paths, teaching spaces and lightweight structures. This layer stays careful because the surface is not disposable."
      },
      {
        name: "Mineral lens",
        depth: "5-40 m",
        tone: "Quartz, ilmenite, rutile, zircon",
        detail: "A material memory band. Mineral sands become colour, story, chemistry and responsibility before extraction."
      },
      {
        name: "Water and food deck",
        depth: "40-80 m",
        tone: "Hydrology, algae, fungi, roots",
        detail: "Closed-loop food, clean water storage, fungal conversion and biosphere support. This is the boring life-support part, which makes it the important part."
      },
      {
        name: "Crystal civic core",
        depth: "80-140 m",
        tone: "Archives, governance, XR learning",
        detail: "A public memory and decision layer: language, ecology, law, media, maps and digital twins, presented as dashboards people can understand."
      },
      {
        name: "Deep resilience vault",
        depth: "140 m+",
        tone: "Cold storage, shielding, recovery",
        detail: "The long-care layer. Seeds, records, spare tools, compute images and recovery plans live here, with strong consent gates around access and use."
      }
    ]
  },
  kardashev: {
    type: "kardashev-dial",
    title: "Adaptive Kardashev Dial",
    deck: "Move the sliders and the dial finds a civilisation mode. The point is not maximum power. The point is matching power to need, consent and ecological cost."
  },
  supercomputers: {
    type: "compute-network",
    title: "Island Compute Commons",
    deck: "Estimate how a network of kiosks, capsules, labs and homes could add up. These are deliberately simple relative units, not a hardware promise.",
    labels: {
      nodes: "Compute nodes",
      accelerators: "Accelerators per node",
      utilisation: "Useful utilisation"
    }
  },
  "web3-sensorium": {
    type: "reality-stack",
    title: "Sensorium Reality Sorter",
    deck: "The Sensorium only works if every claim knows what lane it is in: data, model, speculation or governance.",
    lanes: [
      {
        name: "Observed data",
        items: ["satellite feeds", "seismic feeds", "DEM maps", "sensor calibration", "timestamped archives"]
      },
      {
        name: "Runnable model",
        items: ["assumptions", "parameters", "versioned code", "input data", "validation result"]
      },
      {
        name: "Wild idea",
        items: ["micro-nova scenario", "galactic wave", "underwater technate", "consciousness physics", "user hypothesis"]
      },
      {
        name: "Governance",
        items: ["DID identity", "verifiable credentials", "peer review", "domain DAO", "public decision trail"]
      }
    ]
  },
  "aura-geode": {
    type: "reality-stack",
    title: "Aura Subproject Lanes",
    deck: "Sort the Aura universe into builder, hardware, clinical and culture lanes. Live Aid 2035 belongs in the culture lane as the only Live Aid target carried forward.",
    lanes: [
      {
        name: "Personal builder",
        items: ["body scan", "goals", "values", "mind palace", "data visualisations", "known-world maps"]
      },
      {
        name: "Hardware habitats",
        items: ["traveller kits", "capsule hotels", "retirement villages", "NDIS clinics", "health retreats", "nightclub systems"]
      },
      {
        name: "Clinical path",
        items: ["DOMS mapping", "BPSD support", "TGA pathway", "HREC approval", "Queensland trials", "carer outcomes"]
      },
      {
        name: "Global culture",
        items: ["GAJRA", "Aura Affinity", "Internet of Good", "Live Aid 2035", "world vote", "values mapping"]
      }
    ]
  },
  "space-weather-hub": {
    type: "ifttt-matrix",
    title: "Sun-Earth IFTTT Matrix",
    deck: "Click a signal to see how live data can become careful alerts, visualisations and research prompts.",
    signals: [
      {
        name: "X-class flare",
        stream: "Solar imaging and X-ray flux",
        query: "IF a major flare is detected, THEN evaluate satellite, radio, aviation, grid and public-communication impacts.",
        outputs: ["VR alert card", "Sun flare animation", "reviewed AI news segment", "radio and satellite impact notes"]
      },
      {
        name: "Southward Bz",
        stream: "Solar wind and interplanetary magnetic field",
        query: "IF Bz turns strongly southward while solar wind speed is elevated, THEN raise geomagnetic storm probability.",
        outputs: ["magnetosphere compression visual", "Kp / Dst dashboard watch", "grid and navigation context", "plain-language calm notice"]
      },
      {
        name: "TEC and ULF shift",
        stream: "GNSS TEC maps plus electromagnetic anomaly feeds",
        query: "IF TEC disturbance and ULF anomalies overlap in a known seismic region, THEN flag the pattern for research review.",
        outputs: ["research-only risk layer", "correlation panel", "no deterministic public warning", "request for additional sensor checks"]
      },
      {
        name: "Radon spike",
        stream: "Ground radon and hydrochemical sensors",
        query: "IF local radon or groundwater chemistry changes suddenly, THEN cross-check against foreshocks, deformation and meteorology.",
        outputs: ["local sensor confidence score", "InSAR and seismic cross-check", "human review queue", "community observation request"]
      },
      {
        name: "Public concern surge",
        stream: "Reports, sentiment and education interactions",
        query: "IF public concern rises faster than the physical-risk signal, THEN add a clarifying segment before speculation fills the gap.",
        outputs: ["AI explainer draft", "editor review", "misinformation note", "age-appropriate learning path"]
      }
    ]
  },
  "master-plan": {
    type: "reality-stack",
    title: "Reality Layer Sorter",
    deck: "Separate the grounded path from the research path and the mythic science-fiction path. This is how the big idea stays usable instead of turning into fog.",
    lanes: [
      {
        name: "Build now",
        items: ["public atlas", "cross-section map", "wooden kiosk mock-up", "local archive index", "simple biosphere calculator"]
      },
      {
        name: "Research next",
        items: ["mineral material board", "sand battery model", "home biosphere data schema", "LoRa mesh pilot", "local-first sync tests"]
      },
      {
        name: "Consent first",
        items: ["Country and culture references", "data sovereignty", "public infrastructure claims", "ecological monitoring", "community governance"]
      },
      {
        name: "Design fiction",
        items: ["subsurface tunnelling vehicle", "crystal civic core", "vibration-safe halls", "recovery vault", "treaty rehearsal"]
      }
    ]
  },
  "peaceful-space": {
    type: "space-path",
    eyebrow: "Build sequence",
    title: "Ocean To Orbit Path",
    deck: "Build upward only when each Earth-side layer is already useful: repair, resilience, solar data, simulation, then commons governance.",
    steps: [
      {
        name: "Repair bench",
        detail: "Teach repair, fabrication, materials literacy and small public prototypes before any orbital language gets a budget."
      },
      {
        name: "Useful island systems",
        detail: "Connect kiosks, maps, local power, mesh comms and public information so the work helps ordinary days first."
      },
      {
        name: "Space weather hub",
        detail: "Publish readable Sun-Earth data for grids, satellites, communications, navigation and public science learning."
      },
      {
        name: "Simulate before launch",
        detail: "Model distributed satellites and sensors before physical hardware, so costs, politics and maintenance stay visible."
      },
      {
        name: "Commons rules",
        detail: "Draft treaty-aware principles for data, access, launch, debris, Indigenous knowledge boundaries and shared science."
      }
    ]
  },
  "auto-farm": {
    type: "biosphere-calculator",
    title: "Minimum Viable Biosphere Sketch",
    deck: "A rough calculator for thinking about people, energy and reactor volume. It is a design prompt, not nutrition or medical advice."
  },
  "disaster-kiosks": {
    type: "kiosk-simulator",
    title: "Kiosk Mode Simulator",
    deck: "Switch modes to see how the same public interface changes from normal service to peak ferry support to offline disaster coordination.",
    modes: [
      {
        name: "Normal Tuesday",
        status: "Grid online, internet online",
        priorities: ["local notices", "visitor directory", "event board", "AI help desk", "public maps"]
      },
      {
        name: "Ferry surge",
        status: "Transport pressure rising",
        priorities: ["destination intent", "mobility needs", "shuttle clusters", "bus queue pressure", "arrival guidance"]
      },
      {
        name: "Offline disaster",
        status: "Grid or internet degraded",
        priorities: ["check-ins", "local notices", "mesh messages", "offline maps", "battery shedding"]
      }
    ]
  },
  "capsule-hotels": {
    type: "compute-network",
    title: "Capsule Compute Cashflow Sketch",
    deck: "A tiny model for the idea that bed revenue could help fund shared GPUs, simulation access and local cloud services.",
    labels: {
      nodes: "Capsules",
      accelerators: "GPUs per capsule",
      utilisation: "Guest and civic use"
    }
  },
  "multicultural-hub": {
    type: "space-path",
    eyebrow: "Build sequence",
    title: "Grant Quest Roadmap",
    deck: "A five-step application quest for the shared game world. Each step is a narrative planning move, not evidence that funding or approvals exist.",
    steps: [
      {
        name: "Site and partners",
        detail: "Clarify the Ballow Road story, who would need to be involved, what permissions matter, and which voices must be heard before claims are made."
      },
      {
        name: "Design and costing",
        detail: "Sketch courts, drop-in spaces, media rooms, makerspace logic, accessibility, power, water and maintenance as a coherent capital works story."
      },
      {
        name: "Risk and care",
        detail: "Name cultural, ecological, youth-safety, financial, engineering and governance risks directly so the idea does not hide its hard parts."
      },
      {
        name: "Co-contribution",
        detail: "Explore cash, in-kind support, volunteer time, training pathways and staged delivery without pretending any partner has committed."
      },
      {
        name: "Submission story",
        detail: "Turn the concept into plain language: what gets built, who benefits, who governs it, and how locals can say yes, no or not yet."
      }
    ]
  },
  "community-coop": {
    type: "reality-stack",
    title: "Co-op Reality Stack",
    deck: "Sort the co-op world into practical trust, formal structure, experimental economy and deeper mythology.",
    lanes: [
      {
        name: "Trust first",
        items: ["tech help", "market stall chats", "local media support", "scam awareness", "patient digital basics"]
      },
      {
        name: "Co-op engine",
        items: ["member ownership", "training", "labour pool", "local business support", "one member one vote"]
      },
      {
        name: "Game economy",
        items: ["C-Hours", "care work", "ecological work", "local benefits", "non-speculative receipts"]
      },
      {
        name: "Deep myth",
        items: ["sovereign wealth fund", "digital twins", "fractal governance", "bio-restoration", "island-scale simulation"]
      }
    ]
  },
  "sandy-sports-network": {
    type: "archipelago-map",
    title: "Three-Node Sandy Sports Map",
    deck: "Click each node in the shared sports world. The map links ordinary sport, cultural gathering, coastal care and the 2032 imagination without treating the story as settled.",
    islands: [
      {
        name: "Dunwich / Goompi",
        practical: "Capability hub near ferry, school, health services and cultural precincts.",
        moonshot: "A safe harbour where sandy sports, youth support, media, makerspace and resilience systems share one civic stage."
      },
      {
        name: "Point Lookout / Mulumba",
        practical: "Managed performance node using existing sports and tourism pressure points more carefully.",
        moonshot: "A world-class sand sport gateway that teaches visitors how to move lightly through the island."
      },
      {
        name: "Amity / Pulu",
        practical: "Community-scale sand cricket, beach tennis, aquatic learning and club-linked activity.",
        moonshot: "A resilient coastal node where sport, erosion adaptation, reefs and sea learning become one playful edge."
      },
      {
        name: "Geopolymer reefs",
        practical: "A research prompt around coastal protection, shellfish habitat and restorative aquaculture.",
        moonshot: "Infrastructure that behaves less like a wall and more like a living game-board tile."
      },
      {
        name: "Civic reserve",
        practical: "A way to keep volunteers, coaches, apprentices and event helpers engaged after big events.",
        moonshot: "A rotating workforce game where everyone tries many roles and the island remembers what people learn."
      }
    ]
  },
  "public-honour-board": {
    type: "reality-stack",
    title: "Public-Safe Honour Stack",
    deck: "Sort the honour board into what can be shown, what must stay hidden, what needs approval, and how public profile.md plus public wallet transactions could appear after moving onto XRP, Solana or other ledgers.",
    lanes: [
      {
        name: "Can show",
        items: ["display name", "approved project", "public contribution type", "broad location", "thank-you note", "public profile.md"]
      },
      {
        name: "Public ledgers",
        items: ["XRP transaction hash", "Solana / SOL transaction hash", "wallet display name", "project support receipt", "other ledgers later"]
      },
      {
        name: "Must hide",
        items: ["contact details", "private payments", "exact GPS", "emergency contacts", "unapproved media", "private wallet notes"]
      },
      {
        name: "Needs approval",
        items: ["photos", "organisation names", "public amounts", "role claims", "cultural references"]
      },
      {
        name: "Game-world",
        items: ["fictional supporters", "demo C-Hours", "future badges", "public gratitude", "prototype ceremonies"]
      }
    ]
  },
  profile: {
    type: "reality-stack",
    title: "profile.md Visibility Sorter",
    deck: "A public profile only works if people can clearly choose what is visible, optional, private or fictional.",
    lanes: [
      {
        name: "Public",
        items: ["display name", "township connection", "skills", "project interests", "public boundaries"]
      },
      {
        name: "Optional",
        items: ["photo", "organisation", "wallet", "availability", "support offers"]
      },
      {
        name: "Private",
        items: ["home address", "phone", "health notes", "family details", "private finances"]
      },
      {
        name: "Story role",
        items: ["mentor", "maker", "guardian", "critic", "dreamer"]
      }
    ]
  },
  aura: {
    type: "archipelago-map",
    title: "Aura Context Archipelago",
    deck: "Aura is best imagined as an archipelago of private context islands, each with a practical path and a moonshot path.",
    islands: [
      {
        name: "Profile",
        practical: "Public-safe identity, skills, interests and boundaries.",
        moonshot: "A civic passport for moving between co-op, honour board and project worlds."
      },
      {
        name: "AI Style",
        practical: "How someone wants AI to explain, remind, question and assist.",
        moonshot: "A respectful digital companion that adapts without swallowing the person."
      },
      {
        name: "Mind Palace",
        practical: "Projects, notes, memories, open loops and useful context.",
        moonshot: "A self-reflective cognitive architecture that lets people map their inner world."
      },
      {
        name: "Care Layer",
        practical: "Limits, support preferences, energy patterns and safe boundaries.",
        moonshot: "Technology that helps with care before it chases performance."
      },
      {
        name: "Fiction Threshold",
        practical: "Clear separation between practical planning and story-world play.",
        moonshot: "An interface where identity, mythology and science fiction can be explored safely."
      }
    ]
  },
  dreamtime: {
    type: "space-path",
    title: "Fiction Threshold Path",
    deck: "A five-step path that lets the atlas cross into science fiction while returning to respect, consent and evidence.",
    steps: [
      {
        name: "Ordinary island",
        detail: "Begin with lived local reality: place, people, weather, ferry, care, work, ecology and ordinary common sense."
      },
      {
        name: "Symbolic layer",
        detail: "Let minerals, colours, tides, screens and stories become symbols, while naming that symbolism is not cultural authority."
      },
      {
        name: "Dream lab",
        detail: "Enter the fictional room where impossible infrastructure, digital minds and future rituals can be tested as story."
      },
      {
        name: "Science fiction",
        detail: "Push the idea until it becomes strange enough to reveal hidden assumptions about energy, AI, community and civilisation."
      },
      {
        name: "Return gate",
        detail: "Bring every idea back through consent, evidence, engineering, ecology, law and local governance before it touches reality."
      }
    ]
  },
  archipelago: {
    type: "archipelago-map",
    title: "Project Archipelago Map",
    deck: "Click an island to see the practical path and the moonshot path. This keeps the ecosystem navigable.",
    islands: [
      {
        name: "Aura",
        practical: "Builders for profiles, avatars, mind palaces and creative engines.",
        moonshot: "A living interface for digital consciousness and self-reflective cognitive architecture."
      },
      {
        name: "Minjerribah",
        practical: "Ready S.E.T., disaster kiosks, media, transport and local resilience.",
        moonshot: "An island-scale prototype for sovereign infrastructure and regenerative abundance."
      },
      {
        name: "P4A",
        practical: "Food, tolls, self-insurance, public trust trails and civic tools.",
        moonshot: "A cyber-republic simulator for joyful responsible abundance."
      },
      {
        name: "I See Infinity",
        practical: "Music, stories, films and public-facing mythic language.",
        moonshot: "A narrative engine that lets people feel the future before they can code it."
      },
      {
        name: "Strange but True",
        practical: "Tech help, AI help, scam awareness, grant writing and local support.",
        moonshot: "The friendly first entry into the whole intelligence ecosystem."
      }
    ]
  },
  "island-abundance": {
    type: "archipelago-map",
    title: "Island Abundance Paths",
    deck: "Each path asks how ordinary island life can become a practical prototype and a bigger abundance pathway.",
    islands: [
      {
        name: "Local business",
        practical: "Listings, offers, services, visitor guidance and plain-language support.",
        moonshot: "A regenerative economy where local value is visible without turning community into an extraction funnel."
      },
      {
        name: "Events",
        practical: "Markets, music, sport, workshops and public notices as regular gathering points.",
        moonshot: "Recurring events become the rhythm that trains civic imagination, resilience and shared abundance."
      },
      {
        name: "Artists",
        practical: "Public art, music, stories, making and visual culture as invitation.",
        moonshot: "Culture becomes the user interface for a future people can feel before they can describe it."
      },
      {
        name: "Care",
        practical: "Food, transport, access, safety, welcome and patient digital help.",
        moonshot: "A care economy where the boring acts of help become visible civic infrastructure."
      },
      {
        name: "Visitors",
        practical: "Kind orientation, ferry help, local etiquette, events and low-friction discovery.",
        moonshot: "Tourism becomes conscious participation instead of drive-through consumption."
      }
    ]
  },
  "alien-necklace": {
    type: "space-path",
    title: "Alignment Scene Path",
    deck: "Walk the necklace story from backyard comedy into public AI alignment without losing the human warmth.",
    steps: [
      {
        name: "Backyard",
        detail: "Begin with ordinary Gumpi life, jokes, awkwardness and a meteorite landing where no one asked for a cosmic upgrade."
      },
      {
        name: "Temptation",
        detail: "The necklace offers perfect routing, perfect intelligence and the seductive feeling of never being confused again."
      },
      {
        name: "Aesthetic yes",
        detail: "A different character meets the artifact through beauty, charm and social grace, changing the alignment route."
      },
      {
        name: "Truth gate",
        detail: "The Aura Twin asks people to name what they actually want, avoid, hide and hope for."
      },
      {
        name: "Civic festival",
        detail: "The film world opens into a public CYOA where audiences test futures instead of being lectured about them."
      }
    ]
  },
  "protopian-gambit": {
    type: "space-path",
    title: "Culture-To-Action Path",
    deck: "A five-step path from song and story into practical courage.",
    steps: [
      {
        name: "Feel it",
        detail: "Use music, humour and mythic language to let people feel hope before asking them to understand the system."
      },
      {
        name: "Name it",
        detail: "Give the future simple phrases: protopian gambit, joyful responsible abundance, love not spite, every border a bridge."
      },
      {
        name: "Share it",
        detail: "Carry the idea through performances, short films, noticeboards, downloads and ordinary conversations."
      },
      {
        name: "Build it",
        detail: "Attach each cultural signal to a small public action: form, grant, map, page, table, event or prototype."
      },
      {
        name: "Repair it",
        detail: "Let criticism improve the work. Protopian means better next, not perfect forever."
      }
    ]
  },
  "cosmic-nexus": {
    type: "reality-stack",
    title: "High-Strangeness Reality Sorter",
    deck: "Sort wild material into evidence, simulation, fiction and governance before it gets mistaken for certainty.",
    lanes: [
      {
        name: "Evidence",
        items: ["sensor logs", "witness quality", "source chain", "ocean data", "astronomy data"]
      },
      {
        name: "Simulation",
        items: ["UAP scenario", "underwater civilisation hypothesis", "contact diplomacy scenario", "risk model", "public calm drill"]
      },
      {
        name: "Fiction",
        items: ["film scene", "game quest", "alien necklace", "abyss protocol scenario", "public science festival"]
      },
      {
        name: "Governance",
        items: ["stay calm", "data first", "peaceful space", "ocean care", "consent and law"]
      }
    ]
  },
  "loving-longevity": {
    type: "reality-stack",
    title: "Warm Boundary Sorter",
    deck: "Keep longevity and loving spice alive by separating public prompts, private context, evidence and adult consent.",
    lanes: [
      {
        name: "Public-safe",
        items: ["food systems", "movement", "community care", "consent prompts", "relationship questions"]
      },
      {
        name: "Private",
        items: ["health notes", "desire", "medical records", "relationship details", "personal limits"]
      },
      {
        name: "Evidence first",
        items: ["nutrition", "microbiome", "HBOT claims", "longevity protocols", "clinical advice"]
      },
      {
        name: "Fiction room",
        items: ["abundant love futures", "long-life rituals", "consensual relationship futures", "AI companion stories", "joyful spice"]
      }
    ]
  }
};
