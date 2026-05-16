const MINERAL_PALETTE = [
  {
    symbol: "SiO2",
    name: "Quartz / Silica",
    colour: "Crystal white",
    role: "Glass, optics, solar panels, silicon logic, sand batteries and the visual language of the whole site."
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
    role: "A dark heavy-mineral base for titanium, iron chemistry, shielding, ballast and industrial grit."
  },
  {
    symbol: "ZrSiO4",
    name: "Zircon",
    colour: "Ice blue ceramic",
    role: "High-temperature ceramics, cutter heads, thermal barriers and precise mineral-memory aesthetics."
  },
  {
    symbol: "REE",
    name: "Monazite stream",
    colour: "Rare-earth violet",
    role: "Magnets, sensors, advanced motors and the hard ethical question of how to handle strategic materials cleanly."
  },
  {
    symbol: "Fe",
    name: "Iron",
    colour: "Oxide red",
    role: "Structural contrast, magnetic systems, grounding colour and a reminder that civilisation still needs honest metallurgy."
  }
];

const SITE_BRIEFS = [
  {
    slug: "crystal-city",
    url: "briefs/crystal-city.html",
    title: "Subterranean Crystal City",
    eyebrow: "Silica Citadel",
    material: "Quartz, ilmenite, rutile, zircon",
    source: "Subterranean_Crystal_City_Kardashev_Ground_Station.md",
    deck: "A speculative surface-and-subterranean city where Minjerribah becomes a crystal-coloured resilience lab, not a concrete conquest.",
    brief: [
      "The core idea is a respectful eco-surface above a protected subterranean life-support civilisation.",
      "The surface stays cultural, ecological and light-touch. The underground layer carries storage, food, compute, water, energy and recovery capacity.",
      "The visual language comes from island mineral sands refined into quartz glass, titanium metal, zircon ceramic and rare-earth light."
    ],
    moonshot: "A city that can preserve enough ecological, cultural and technical memory to help repair the surface after a severe shock, while still treating the surface as living Country rather than a disposable roof.",
    modules: [
      "Crystal cavern civic core with transparent governance dashboards",
      "Surface sanctuary zones for ecology, culture and low-impact learning",
      "Underground seed, genome, language and media archives",
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
      "This page treats the Kardashev scale as a dashboard, not a macho scoreboard.",
      "Type I begins as local energy literacy, closed loops, durable governance and planetary sensorium thinking.",
      "Type II becomes relevant only when the community has the maturity to handle space energy without exporting the same old power games upward."
    ],
    moonshot: "A civilisation throttle that can move from village resilience to planetary coordination to orbital energy commons without losing consent, ecology or local dignity.",
    modules: [
      "Energy urgency meter: daily abundance, emergency mode, planetary risk, cosmic risk",
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
      "The source document begins with Flatland, maze theory and pathfinding because dimensional thinking is the doorway into chip architecture.",
      "It then drills into semiconductor reality: quartz to silicon, purification, crystal growth, doping, MOSFETs, FinFETs, GAA FETs, lithography, etching, deposition and cleanroom constraints.",
      "The island version is small-batch rapid evolution: simulate first, prototype with FPGAs, learn from ASML-scale industry, and use local mineral sands where plausible without pretending a full fab appears by magic."
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
    depthIntro: "This page now follows the actual source document: from geometry and mazes, through semiconductor physics, into a practical first build path and then out toward sovereign compute fiction.",
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
        body: "The document gets technical about why local silica is inspiring but not simple.",
        points: [
          "Silica sand is reduced from SiO2 into metallurgical-grade silicon, then pushed toward electronic-grade purity.",
          "Purification uses chemical vapour routes, zone refining and crystal growth through Czochralski or float-zone processes.",
          "Semiconductor-grade silicon needs extreme impurity control, so the honest build path starts with learning and prototyping before local fabrication claims."
        ]
      },
      {
        title: "Device physics stack",
        body: "Once silicon is plausible as a concept, the source moves into the device layer.",
        points: [
          "Band theory and doping explain how p-type and n-type regions let circuits control electron flow.",
          "MOSFETs are the ordinary building blocks; scaling pressure introduces leakage, short-channel effects and quantum tunnelling.",
          "FinFETs and gate-all-around FETs become reference points for why advanced chips are architectural objects, not just smaller transistors."
        ]
      },
      {
        title: "Small-batch rapid evolution",
        body: "The source explicitly avoids mass-production fantasy. The interesting move is fast iteration toward useful compute.",
        points: [
          "EDA simulation comes first so designs can fail cheaply.",
          "Reusable IP cores and modular blocks let the team change one part without remaking the whole system.",
          "FPGAs become the bridge between software imagination and physical logic, before any ASIC conversation."
        ],
        note: "Local mineral sands are part of the mythic and material spine, not an excuse to overclaim a backyard semiconductor industry."
      }
    ],
    elements: ["SiO2", "TiO2", "ZrSiO4", "Fe"]
  },
  {
    slug: "master-plan",
    url: "briefs/master-plan.html",
    title: "Subterranean Super-Civilisation",
    eyebrow: "Respawn Layer",
    material: "Oyster-crete, sandworm, mineral memory",
    source: "Subterranean_Super_Civilization_Master_Plan.md",
    deck: "A maximalist blueprint for a protected underground civilisation that can store, grow, compute, govern and surface again.",
    brief: [
      "The master plan treats Minjerribah as a silica stack: quartz, rutile, ilmenite, zircon and monazite become a fictional atomic inventory for a Type I prototype.",
      "Its centrepiece is the Silica Citadel: a subterranean megalopolis with wet-sand tunnelling, acoustic metamaterials, oyster-crete, sand batteries and sovereign compute.",
      "The responsible public version keeps the far-out parts visible as design fiction while turning the buildable pieces into material boards, simulations, consent gates and staged prototypes."
    ],
    moonshot: "A full-stack civilisation shelter that is less bunker and more underground ecological operating system.",
    modules: [
      "Silica Citadel cross-section",
      "Wet-sand Sandworm tunnelling concept",
      "Osteomorphic blocks, oyster-crete and acoustic metamaterials",
      "Braided economy layer for work, care, energy and public value"
    ],
    experiments: [
      "Separate the fiction layer, research layer and buildable prototype layer on the page.",
      "Sketch one room-scale module for food, one for compute, one for archives and one for water.",
      "Turn the mineral table into a public material board with plausible uses and explicit uncertainty.",
      "Use the site as a living index of what needs verification, consent and professional review."
    ],
    depthIntro: "The master plan is intentionally huge. This page now preserves that scale while sorting it into readable project layers instead of flattening it into a novelty bunker blurb.",
    depth: [
      {
        title: "Geological premise",
        body: "The document frames Minjerribah as a sand-island fortress and material inventory, not because that is proven infrastructure, but because the geology gives the story a specific place to think from.",
        points: [
          "The Pleistocene dune mass is imagined as a shock-absorbing buffer rather than brittle continental crust.",
          "The freshwater lens becomes both drinking reserve and thermal / hydraulic system.",
          "Quartz, rutile, ilmenite, zircon and monazite form the Silica Stack: glass, titanium, magnetic cores, ceramics, rare earths and long-term energy questions."
        ]
      },
      {
        title: "Extreme engineering spine",
        body: "The infrastructure layer is pure moonshot: a wet-sand tunnelling system that prints and mines as it goes.",
        points: [
          "The Sandworm concept uses slurry-shield pressure control to hold saturated sand open.",
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
          "The Braided Economy and C-Hour layer ask how care, repair, ecological work and public value get recognised when survival is the design target."
        ],
        note: "This page should feel like a moonshot dossier, with the mythic material intact and the real-world boundaries still visible."
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
    deck: "A transition framework that reframes defence-industrial capability into orbital commons, civic resilience and decentralised science.",
    brief: [
      "The framework starts locally with makerspaces, resilience and the silica stack, then scales toward orbit.",
      "It imagines AUKUS-style industrial capacity being redirected into peaceful space infrastructure, space weather monitoring and shared science.",
      "The political centre is a Purple Space Commons: treaty-aware, Indigenous-data-aware and less extractive than a space gold rush."
    ],
    moonshot: "Turn oceanic security anxiety into a peaceful space commons that watches the Sun, supports Earth and opens science participation.",
    modules: [
      "Gumpi makerspace as material transition anchor",
      "Virtual Solar Swarm for distributed science",
      "Space weather hub connected back to island resilience",
      "Treaty model inspired by Antarctic-style stewardship"
    ],
    experiments: [
      "Build a visual path from Amity Point to orbit in five steps.",
      "Map which pieces are local, state, national, international and science-fiction.",
      "Create a plain-English page explaining why peaceful space infrastructure matters to an island."
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
      "The source document defines the Global Sensorium as a persistent 1:1 Earth and local-space digital twin fed by real-time sensors, archives and simulation models.",
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
    depthIntro: "The Sensorium document is the deep architecture behind many of the other moonshots: it gives the site a way to hold data, debate, simulation and sovereignty in one system.",
    depth: [
      {
        title: "Purpose",
        body: "The source frames the Sensorium as a shared environment for observing Earth, space weather, climate, geology, biology and infrastructure as connected systems.",
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
        body: "The document grounds the immersive world in GIS and open data rather than pure spectacle.",
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
    sourceLabel: "Source documents: Aura Geode macro blueprint, dementia clinical pathway and Version 7 Aura subprojects.",
    deck: "A cosmic-egg digital twin system that travels from XR Aura Builder, geopoetic capsule and AuraOS into dementia-care evidence, clinical governance and Live Aid 2035 scale culture.",
    brief: [
      "Version 7 frames Aura as a meta-program for building the tool: body scan, goals, values, mind palace, data visualisations, world maps, XR scaffolding and safe plug-and-play modules.",
      "The Geode document turns that into a capsule ecosystem: pressure-rated shell, personalised atmosphere delivery, modality stack, Bayesian session engine, 60-session Genesis Protocol and privacy-preserving Aura Twin fabric.",
      "The clinical document grounds the dementia-care branch in Australian evidence pathways: DOMS-aligned assessment, BPSD support, TGA / HREC work, phased trials and NDIS / My Aged Care positioning."
    ],
    moonshot: "An external, consent-first digital twin and care companion that helps people map their own mind, health, memory, values, relationships and future without surrendering their body or their data.",
    modules: [
      "XR Aura Builder and private/public mind palace shell",
      "Aura Geode capsule with material ID and session timeline",
      "Clinical wrapper for dementia care and carer support",
      "GAJRA culture layer with Live Aid 2035 and world-scale value mapping"
    ],
    experiments: [
      "Build the first Aura Builder as a local-only questionnaire and visual scaffold before any device claims.",
      "Turn the 60-session Genesis Protocol into a staged data map with clear consent checkpoints.",
      "Create a demo clinical report format that maps narrative inputs to validated domains without pretending it is approved healthcare.",
      "List Version 7 subprojects as lanes, with only Live Aid 2035 carried forward."
    ],
    depthIntro: "This page keeps the wildness of Aura intact while giving it a proper dossier shape: personal builder, capsule system, clinical pathway, subprojects and cultural scale.",
    depth: [
      {
        title: "Version 7 builder spine",
        body: "The early Aura document is a tool-building manifesto: build an interface that helps people construct richer Auras with LLM prompts, mixed reality, safe code and personal context.",
        points: [
          "Inputs begin with body scan, goals, values, interests, preferred emotions, colours, skills, travel, activity rhythms and conscious direction.",
          "The Mind Palace holds private objects, memories and maps, while the outer shell can expose public or social layers.",
          "The XR builder uses a 12 x 24 matrix, vector-space objects, body-relative scale, chakras, geosphere maps and explicit inside-private / outside-public boundaries."
        ]
      },
      {
        title: "Aura Geode system",
        body: "The Geode document turns Aura from software into a physical ritual and engineering brief.",
        points: [
          "The capsule shell is imagined as pressure-rated geopolymer with a Straddie quartz base and a material composition ID.",
          "The personalised atmosphere delivery system keeps the main capsule air normal while delivering controlled gas mixes through a medical-grade mask.",
          "AuraOS sequences light, scent, audio, haptics, atmosphere and dialogue across programmed two-hour sessions."
        ]
      },
      {
        title: "60-session Genesis Protocol",
        body: "The source gives Aura a staged user journey instead of an instant digital twin fantasy.",
        points: [
          "Sessions 1-20 map resilience and dose-response through short micro-exposures.",
          "Sessions 21-40 let the AI compose personalised chrono-therapeutic sessions from early data.",
          "Sessions 41-60 validate and refine the user's prime protocol while studying expectation, response and subjective experience."
        ]
      },
      {
        title: "Clinical dementia pathway",
        body: "The clinical research plan is the sober bridge from poetic twin to Australian health-system evidence.",
        points: [
          "Persona mapping keeps life story and preferences, then maps them to clinical domains such as memory, function, quality of life, BPSD and carer wellbeing.",
          "The clinical wrapper augments familiar tools such as RUDAS, GPCOG, DAD, NPI, DEMQOL and carer-burden scales instead of asking clinicians to trust a black box.",
          "The regulatory pathway treats AoI as likely SaMD / clinical decision support software, requiring TGA planning, HREC approval, privacy governance and human-factors evidence."
        ],
        note: "Public wording must stay non-medical until trials, approvals and qualified partners exist."
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
    sourceLabel: "Source documents: Space Weather IFTTT, pseudo-code, earthquake prediction brief and Unity deployment plan.",
    deck: "A live XR news studio for solar wind, geomagnetic storms, ionospheric shifts, earthquakes, alerts, AI narration and public science literacy.",
    brief: [
      "The source files turn space weather into a working system: data feeds, IFTTT rules, timestamped storage, correlation analysis, Unity visualisation and AI narration.",
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
    depthIntro: "These files contain the most implementation-ready moonshot in the set: data streams, rule logic, backend shape, XR deployment plan, narration pipeline and caveats.",
    depth: [
      {
        title: "Signals to ingest",
        body: "The IFTTT documents name the data families the studio needs to watch.",
        points: [
          "Space weather: solar flares, solar wind speed and density, IMF orientation, CMEs, solar proton events and geomagnetic indices.",
          "Earth systems: seismic feeds, foreshocks, TEC, ULF electromagnetic anomalies, radon, groundwater, InSAR deformation, thermal infrared and acoustic emissions.",
          "Human systems: infrastructure sensors, public reports, education interactions and sentiment or misinformation signals during events."
        ]
      },
      {
        title: "Rule engine",
        body: "The source material repeatedly uses IFTTT logic because the first public version needs to be readable before it becomes clever.",
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
      "Keep medical claims out of the prototype until evidence and professionals are involved."
    ],
    elements: ["SiO2", "Fe", "REE"]
  },
  {
    slug: "disaster-kiosks",
    url: "briefs/disaster-kiosks.html",
    title: "Straddie Disaster Kiosks",
    eyebrow: "Solar-Punk Arcade",
    material: "Solar, battery, mesh, local AI",
    source: "Straddie_Disaster_Kiosk_Pitch.pdf",
    deck: "A community kiosk network that works as a useful daily service, then shifts into offline disaster mode when the mainland tether fails.",
    brief: [
      "The kiosk concept mixes phone booth, arcade cabinet and ATM familiarity so people actually use it before a crisis.",
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
    title: "Capsule Hotels As Simulators",
    eyebrow: "Cashflow To Cosmos",
    material: "GPUs, modular rooms, city twins",
    source: "Copy of (Draft) Capsule Hotel Opportunities.pptx.pdf",
    deck: "A modular capsule hotel model where accommodation cashflow powers GPUs, city simulations, VR planning and off-world thinking.",
    brief: [
      "The deck links capsule hotels, graphics processors, city simulation services and off-world space development.",
      "Each capsule can become more than a bed: a compute, VR, planning and local-cloud access point.",
      "Common spaces become living simulators for maintenance, public works, events, waste, traffic and community planning."
    ],
    moonshot: "Use humble, modular accommodation to fund a network of city-simulating computers that eventually teaches communities how to build in space.",
    modules: [
      "One or two GPUs attached to each capsule",
      "VR and AR planning interfaces for guests and locals",
      "Local cloud, satellite data and digital twin services",
      "Orbital moon-ring and spin-gravity thought experiments"
    ],
    experiments: [
      "Mock up one capsule dashboard showing room comfort plus city simulator access.",
      "Model the economics: bed revenue, GPU cost, power cost and useful compute hours.",
      "Design the common room as a planning cockpit, not just a lounge."
    ],
    elements: ["SiO2", "TiO2", "REE", "Fe"]
  },
  {
    slug: "multicultural-hub",
    url: "briefs/multicultural-hub.html",
    title: "Cultural And Sandy Sports Hub",
    eyebrow: "Heart-First Hub",
    material: "Ballow Road, youth, culture, sandy sports",
    source: "Roadmap for Multicultural Grant.docx",
    deck: "A narrative grant-world sketch for a multicultural sandy sports and cultural hub at 10-12 Ballow Road, framed as a safe harbour rather than a certainty.",
    brief: [
      "The page imagines a physical community hub as the central game-board piece: youth drop-in, sandy sports, media, training, resilience and gathering.",
      "The document keeps the physical build as the grant-story core, then layers a support ecosystem around it to show public value.",
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
    title: "Ready S.E.T. Community Co-op",
    eyebrow: "Trust To Infrastructure",
    material: "Care, training, C-Hours, local ownership",
    source: "Community Co-op Blueprint Development.docx",
    deck: "A story-world pathway from small trusted tech help into a community-owned co-operative, braided economy and local resilience engine.",
    brief: [
      "The co-op page begins with grassroots trust: practical tech help, market-stall conversations, media support and patient digital confidence.",
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
    title: "Sandy Sports Network",
    eyebrow: "2032 Game-World Legacy",
    material: "Dunwich, Amity, Point Lookout, reefs",
    source: "Sports Facility Research for Minjerribah.docx",
    deck: "A distributed sports-facility story map linking Dunwich, Amity Point and Point Lookout with sandy sports, cultural gathering and resilient infrastructure.",
    brief: [
      "This page treats sports facilities as shared game-world nodes: not just recreation, but places for youth, culture, training, visitors and resilience.",
      "Dunwich becomes the capability and logistics hub, Point Lookout the managed performance node, and Amity the resilient coastal adaptation node.",
      "The page keeps the Olympic and national-scale language as narrative pressure, while clearly separating it from certainty."
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
    title: "profile.md",
    eyebrow: "Public Doorway",
    material: "Plain text, consent, skills, place connection",
    source: "Strange but True community ledger profile.md notes",
    deck: "A simple public profile file for people who choose to appear beside community support, skills, interests and future-building roles.",
    brief: [
      "profile.md is the public doorway: who someone is comfortable being, what they care about and what they may want to offer.",
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
      "Keep the profile format readable in a browser, text editor and future builder app."
    ],
    elements: ["SiO2", "Fe", "REE"]
  },
  {
    slug: "aura",
    url: "briefs/aura.html",
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
    eyebrow: "Fiction Door",
    material: "Story, ethics, science fiction, cultural caution",
    source: "New dreamtime.md fiction and science-fiction threshold",
    deck: "A fictional doorway where the site openly crosses into mythic science fiction, while stating that real cultural stories belong to their custodians.",
    brief: [
      "This page uses Dreamtime as a requested fiction threshold, not as cultural authority, sacred teaching or a claim about Quandamooka knowledge.",
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
      "Write the page as a clear portal from narrative planning into fiction.",
      "Add a ritual of returning: every wild idea must name what would need consent or evidence.",
      "Invite readers to treat the page as a story room, not a source of cultural facts."
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
      "The OPML file is the sitemap of the bigger universe: Aura of Intelligence, local resilience, Sandy Sports, P4A, I See Infinity and Strange but True.",
      "For this website, it acts as the bridge between practical local services and the moonshot civilisation layer.",
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
      "Give each island a practical door and a moonshot door.",
      "Let the main page stay simple while the deep pages hold the wildness."
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
    deck: "A practical research doorway into Minjerribah after sand mining: local businesses, community groups, events, artists, visitors and public conversation becoming a regenerative civic matrix.",
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
      "Turn the research directory into a public map of practical doors and moonshot doors.",
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
    deck: "A plausible sci-fi film doorway where an alien necklace lands in a Gumpi backyard and turns AI alignment into comedy, aesthetics, ultimate truth and civic imagination.",
    brief: [
      "The story starts small: a meteorite, a backyard, a necklace and ordinary Australian banter instead of sterile AI doom.",
      "The necklace works like a cosmic Mixture of Experts: it routes human fear, humour, beauty and longing into different possible futures.",
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
      "Write one scene where humour lowers fear without trivialising the stakes.",
      "Keep the fiction label visible so the necklace stays story technology, not a real claim."
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
    deck: "A music-and-story doorway where the future is not sold as utopia. It is sung as a protopian risk: act from love, build better tools, and keep moving.",
    brief: [
      "The album material gives Mineral Moonshots a cultural signal rather than another planning note.",
      "Songs can carry courage, grief, humour, bridges and public hope into places where diagrams cannot reach.",
      "The protopian frame means better is enough to begin. The moonshot does not have to pretend perfection."
    ],
    moonshot: "A public culture engine where songs, films, local events and repo tools help people feel the future before they are asked to build it.",
    modules: [
      "I See Infinity music universe as emotional front door",
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
    deck: "A responsible fringe-science doorway that treats UAP, underwater civilisation and cosmic-risk material as thought experiments for data, diplomacy and resilience, not as belief demands.",
    brief: [
      "The Cosmic Nexus material mixes UAP research, ancient aeronautics, AI, spiritual science, travel, events and joyful responsible abundance.",
      "The Abyss Protocol asks a high-strangeness question: what if underwater non-human intelligence were a geopolitical variable rather than entertainment?",
      "The safe public move is to treat this as a simulation and diplomacy exercise: data first, panic last, and no pretending speculation is evidence."
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
      "Create a calm public page explaining how to explore UAP material without panic or certainty theatre.",
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
    deck: "A public-safe doorway for longevity, microbiome care and consensual adult relationship futures, with enough loving spice to feel alive and enough boundaries to stay responsible.",
    brief: [
      "The longevity material links in-home food systems, microbiome reflection, HBOT ideas and private-first health context.",
      "The relationship material asks whether internet-connected abundance needs more flexible, honest and consent-based forms of love than default scripts allow.",
      "The public version must stay warm, adult, privacy-preserving and non-medical: invitation first, pressure never."
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
      "Keep medical claims out until evidence and qualified professionals are involved.",
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
    url: "https://github.com/auraofintelligence/straddie-noticeboard-network",
    bridge: "The wall, tablet, phone, kiosk and fallback image is one practical build surface beneath the bigger civilisation story.",
    buildStep: "Useful public information on normal days; trusted emergency coordination when the island needs it."
  },
  {
    name: "Strange But True",
    repo: "auraofintelligence/strange-but-true",
    visibility: "Public shelf",
    url: "https://github.com/auraofintelligence/strange-but-true",
    bridge: "The friendly front door for tech help, AI help, grant support, public downloads and local trust.",
    buildStep: "Grounds the far-out work in patient local help so the moonshot does not float away from people."
  },
  {
    name: "Stradbroke Grants Lab",
    repo: "auraofintelligence/stradbroke-grants-lab",
    visibility: "Public prototype",
    url: "https://github.com/auraofintelligence/stradbroke-grants-lab",
    bridge: "Turns local ideas into grant-ready structures without pretending funding or approval already exists.",
    buildStep: "Helps practical projects become evidence, budget, risk, staged delivery and public accountability."
  },
  {
    name: "Shared Table Initiative",
    repo: "auraofintelligence/shared-table-initiative",
    visibility: "Public prototype",
    url: "https://github.com/auraofintelligence/shared-table-initiative",
    bridge: "Starts with the simple question of who is already feeding, welcoming and caring for people here.",
    buildStep: "Makes food, welcome and care visible before the system talks about abundance at larger scales."
  },
  {
    name: "Grey Area Commons",
    repo: "auraofintelligence/grey-area-commons",
    visibility: "Public adult boundary",
    url: "https://github.com/auraofintelligence/grey-area-commons",
    bridge: "Keeps the loving spice consent-first, adult-only, privacy-preserving and gentle enough for real humans.",
    buildStep: "Protects the relationship and intimacy layer with consent, privacy and adult boundaries."
  },
  {
    name: "i C. infinity Music Universe",
    repo: "auraofintelligence/i-C-infinity-music-universe",
    visibility: "Public culture",
    url: "https://github.com/auraofintelligence/i-C-infinity-music-universe",
    bridge: "Carries the protopian mood through songs, albums, mythic language and public-facing story worlds.",
    buildStep: "Gives the civilisation work an emotional doorway through music, hope, repair and future courage."
  },
  {
    name: "Agent Markdown Form Navigator",
    repo: "auraofintelligence/agent-md-form-navigator",
    visibility: "Public tool",
    url: "https://github.com/auraofintelligence/agent-md-form-navigator",
    bridge: "Shows how public forms can become agent-ready markdown without burying people in technical setup.",
    buildStep: "Lets people turn plain-language input into useful AI briefs one structured page at a time."
  },
  {
    name: "Legal Memory Workbench",
    repo: "auraofintelligence/legal-memory-workbench",
    visibility: "Public workbench",
    url: "https://github.com/auraofintelligence/legal-memory-workbench",
    bridge: "Adds sober legal-memory boundaries to a site that otherwise wants to run toward the stars.",
    buildStep: "Keeps legal context, disclaimers and evidence discipline close to the speculative work."
  },
  {
    name: "Amity Outdoor Fitness",
    repo: "auraofintelligence/amity-outdoor-fitness-grant",
    visibility: "Public proposal",
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
    buildStep: "Keeps the source archive useful without leaking private material into the public site."
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
    deck: "Click a layer to see what lives there. This keeps the city legible: surface first, then sand, water, archives, food, compute and deep shelter.",
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
        detail: "A material memory band. The site language treats mineral sands as colour, story, chemistry and responsibility before extraction."
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
        detail: "The last-resort layer. Seeds, records, spare tools, compute images and recovery plans live here, with strong limits on who can trigger what."
      }
    ]
  },
  kardashev: {
    type: "kardashev-dial",
    title: "Adaptive Kardashev Dial",
    deck: "Move the sliders and the site recommends a civilisation mode. The point is not maximum power. The point is matching power to need, consent and ecological cost."
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
    deck: "Click a signal to see how the source documents turn live data into careful alerts, visualisations and research prompts.",
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
        query: "IF public concern rises faster than the physical-risk signal, THEN add a clarifying segment before panic fills the gap.",
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
        items: ["Static site", "cross-section map", "wooden kiosk mock-up", "local archive index", "simple biosphere calculator"]
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
        items: ["sandworm tunnelling", "crystal megacity", "acoustic levitation halls", "planetary respawn vault", "inter-dimensional diplomacy"]
      }
    ]
  },
  "peaceful-space": {
    type: "space-path",
    title: "Ocean To Orbit Path",
    deck: "A five-step path from local makerspace to space commons. It keeps the orbital dream tied back to island usefulness.",
    steps: [
      {
        name: "Shed and makerspace",
        detail: "Start with repair, fabrication, training, local materials literacy and small public prototypes."
      },
      {
        name: "Island resilience",
        detail: "Connect kiosks, maps, local power, mesh comms and disaster workflows so infrastructure earns trust on Earth."
      },
      {
        name: "Space weather hub",
        detail: "Watch the Sun because solar risk is practical for grids, satellites, communications and navigation."
      },
      {
        name: "Virtual Solar Swarm",
        detail: "Model distributed satellites and sensors before anyone pretends a physical swarm is politically or financially simple."
      },
      {
        name: "Purple Space Commons",
        detail: "Treat space as stewardship: treaty-aware, science-first, peaceful and careful about extraction."
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
        items: ["fictional supporters", "demo C-Hours", "future badges", "mythic titles", "prototype ceremonies"]
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
    deck: "Aura is best imagined as an archipelago of private context islands, each with a practical door and a moonshot door.",
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
        name: "Fiction Door",
        practical: "Clear separation between practical planning and story-world play.",
        moonshot: "An interface where identity, mythology and science fiction can be explored safely."
      }
    ]
  },
  dreamtime: {
    type: "space-path",
    title: "Fiction Threshold Path",
    deck: "A five-step path that lets the site enter science fiction while returning to respect, consent and evidence.",
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
    deck: "Click an island to see the practical door and the moonshot door. This keeps the ecosystem navigable.",
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
        moonshot: "The friendly front door into the whole intelligence ecosystem."
      }
    ]
  },
  "island-abundance": {
    type: "archipelago-map",
    title: "Island Abundance Doors",
    deck: "Click a door to see how ordinary island life can become a practical prototype and a bigger abundance window.",
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
        detail: "The Aura Twin asks people to face what they actually want, fear, hide and hope for."
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
        items: ["UAP scenario", "underwater civilisation hypothesis", "xeno-diplomacy", "risk model", "public calm drill"]
      },
      {
        name: "Fiction",
        items: ["film scene", "game quest", "alien necklace", "abyss protocol myth", "cosmic festival"]
      },
      {
        name: "Governance",
        items: ["do no panic", "data first", "peaceful space", "ocean care", "consent and law"]
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
        items: ["abundant love futures", "long-life rituals", "group relationship worlds", "AI companion stories", "joyful spice"]
      }
    ]
  }
};
