(function () {
  const isBriefPage = document.body.dataset.page;
  const pathName = location.pathname.replace(/\\/g, "/");
  const prefix = pathName.includes("/briefs/") || pathName.includes("/elements/") ? "../" : "";

  const routes = [
    { label: "Home", href: "index.html" },
    { label: "Moonshots", href: "moonshots.html" },
    { label: "Materials", href: "materials.html" },
    { label: "Elements", href: "elements.html" },
    { label: "Build Path", href: "build-path.html" },
    { label: "Worlds", href: "worlds.html" },
    { label: "Labs", href: "labs.html" },
    { label: "Boundaries", href: "boundaries.html" }
  ];

  const BRIEF_GROUPS = {
    moonshots: new Set([
      "crystal-city",
      "kardashev",
      "supercomputers",
      "aura-geode",
      "web3-sensorium",
      "space-weather-hub",
      "master-plan",
      "peaceful-space",
      "capsule-hotels",
      "alien-necklace",
      "cosmic-nexus"
    ]),
    worlds: new Set([
      "island-abundance",
      "auto-farm",
      "protopian-gambit",
      "loving-longevity",
      "dreamtime",
      "archipelago"
    ]),
    local: new Set([
      "disaster-kiosks",
      "multicultural-hub",
      "community-coop",
      "sandy-sports-network",
      "public-honour-board",
      "profile",
      "aura"
    ])
  };

  function make(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderHeader() {
    const mount = document.querySelector("[data-site-header]");
    if (!mount) return;

    const nav = make("nav", "nav");
    nav.setAttribute("aria-label", "Main navigation");

    const brand = make("a", "brand-mark");
    brand.href = prefix + "index.html";
    brand.setAttribute("aria-label", "Mineral Moonshots home");
    brand.innerHTML = "<span>Mineral</span><span>Moonshots</span>";

    const toggle = make("button", "nav-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    const links = make("div", "nav-links");
    routes.forEach((route) => {
      const a = make("a", "", route.label);
      a.href = prefix + route.href;
      links.appendChild(a);
    });

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.append(brand, toggle, links);
    mount.appendChild(nav);
  }

  function renderFooter() {
    const mount = document.querySelector("[data-site-footer]");
    if (!mount) return;
    const year = new Date().getFullYear();
    mount.innerHTML = "";

    const copy = make("div", "footer-copy");
    copy.appendChild(make("p", "", "Mineral Moonshots is a multi-page atlas of narrative seeds, build paths and plausible worlds we can begin from now."));
    copy.appendChild(make("p", "footer-note", "Local projects, public prototypes, private workbenches and speculative moonshots are kept in separate lanes. Real-world work still needs consent, engineering, ecology, law, culture and community governance."));

    const links = make("div", "footer-links");
    routes.slice(1).forEach((route) => {
      const a = make("a", "", route.label);
      a.href = prefix + route.href;
      links.appendChild(a);
    });
    const small = make("small", "", String(year));
    links.appendChild(small);

    mount.append(copy, links);
  }

  function renderHomeBriefs() {
    const grid = document.querySelector("[data-brief-grid]");
    if (!grid) return;
    const group = grid.dataset.briefGrid || "all";
    const allowed = BRIEF_GROUPS[group];
    const briefs = allowed ? SITE_BRIEFS.filter((brief) => allowed.has(brief.slug)) : SITE_BRIEFS;
    briefs.forEach((brief, index) => {
      const card = make("article", "brief-card");
      card.style.setProperty("--card-index", String(index + 1));

      const tag = make("p", "eyebrow", brief.eyebrow);
      const title = make("h3", "", brief.title);
      const deck = make("p", "", brief.deck);
      const meta = make("p", "card-meta", brief.material);
      const link = make("a", "card-link", grid.dataset.linkLabel || "Open page");
      link.href = brief.url;
      link.setAttribute("aria-label", "Open " + brief.title);

      card.append(tag, title, deck, meta, link);
      grid.appendChild(card);
    });
  }

  function renderLocalProjects() {
    const grid = document.querySelector("[data-local-projects]");
    if (!grid || typeof LOCAL_PROJECTS === "undefined") return;

    LOCAL_PROJECTS.forEach((repo) => {
      const card = make("article", "repo-card");
      const visibility = make("p", "repo-status", repo.visibility);
      const title = make("h3", "", repo.name);
      const buildStep = make("p", "", repo.buildStep);
      const bridge = make("p", "repo-bridge", repo.bridge);
      const meta = make("p", "card-meta", repo.repo);

      card.append(visibility, title, buildStep, bridge, meta);

      if (repo.url) {
        const link = make("a", "card-link", "Open repo");
        link.href = repo.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(link);
      } else {
        card.appendChild(make("span", "repo-boundary", "Private/local boundary"));
      }

      grid.appendChild(card);
    });
  }

  function renderElementGrid() {
    const grid = document.querySelector("[data-element-grid]");
    if (!grid) return;
    MINERAL_PALETTE.forEach((item) => {
      const card = make("article", "element-card");
      card.appendChild(make("strong", "", item.symbol));
      card.appendChild(make("h3", "", item.name));
      card.appendChild(make("p", "element-colour", item.colour));
      card.appendChild(make("p", "", item.role));
      grid.appendChild(card);
    });
  }

  function getElementAtlas() {
    return typeof ELEMENT_ATLAS === "undefined" ? [] : ELEMENT_ATLAS;
  }

  function getPeriodicElements() {
    return typeof FULL_PERIODIC_TABLE === "undefined" ? getElementAtlas() : FULL_PERIODIC_TABLE;
  }

  function getElementBySymbol(symbol) {
    return getElementAtlas().find((item) => item.symbol === symbol);
  }

  function getPeriodicElementBySymbol(symbol) {
    return getPeriodicElements().find((item) => item.symbol === symbol);
  }

  function elementPageHref(element) {
    if (!element || !element.hasPage || !element.slug) return "";
    return prefix + "elements/" + element.slug + ".html";
  }

  function makePropertyRows(element) {
    const rows = [
      ["Atomic number", element.atomicNumber],
      ["Atomic mass", element.atomicMass],
      ["Category", element.category],
      ["Phase", element.phase],
      ["Period", element.period],
      ["Group", element.group]
    ];
    const grid = make("dl", "property-grid");
    rows.forEach(([label, value]) => {
      const wrap = make("div", "");
      wrap.appendChild(make("dt", "", label));
      wrap.appendChild(make("dd", "", String(value)));
      grid.appendChild(wrap);
    });
    return grid;
  }

  function renderPeriodicExplorer() {
    const mounts = document.querySelectorAll("[data-periodic-table]");
    if (!mounts.length) return;
    const elements = getPeriodicElements();
    if (!elements.length) return;

    mounts.forEach((mount) => {
      mount.innerHTML = "";
      const shell = make("div", "periodic-explorer");
      const tableWrap = make("div", "periodic-table-wrap");
      const table = make("div", "periodic-table");
      const detail = make("article", "periodic-detail");
      const legend = make("div", "periodic-legend");
      [
        ["Straddie sand elements", "local"],
        ["Coastal / biology context, not sand claims", "bridge"],
        ["Periodic context only", "context"]
      ].forEach(([label, tone]) => {
        const item = make("span", "legend-chip legend-" + tone, label);
        legend.appendChild(item);
      });
      const caption = make("p", "periodic-caption", "The full periodic table is shown for orientation. Bright tiles are the local Straddie mineral-sands story or clearly marked companion context; muted tiles are not being claimed as local sand elements.");

      elements.forEach((element) => {
        const tileClasses = [
          "periodic-tile",
          "lane-" + element.lane,
          element.isLocalSand ? "is-local-sand" : "is-context-element",
          element.isCompanionContext ? "is-companion-context" : ""
        ];
        const tile = make("button", tileClasses.filter(Boolean).join(" "));
        tile.type = "button";
        tile.style.gridColumn = String(element.tableColumn);
        tile.style.gridRow = String(element.tableRow);
        tile.dataset.symbol = element.symbol;
        tile.setAttribute("aria-label", element.name + " properties, " + (element.tableLabel || "periodic context"));
        tile.appendChild(make("span", "atomic-number", String(element.atomicNumber)));
        tile.appendChild(make("strong", "", element.symbol));
        tile.appendChild(make("span", "element-name", element.name));
        tile.addEventListener("click", () => setActive(element.symbol));
        table.appendChild(tile);
      });

      function setActive(symbol) {
        const element = getPeriodicElementBySymbol(symbol) || elements[0];
        table.querySelectorAll(".periodic-tile").forEach((tile) => {
          tile.classList.toggle("is-active", tile.dataset.symbol === element.symbol);
        });
        const activeTile = table.querySelector('.periodic-tile[data-symbol="' + element.symbol + '"]');
        if (activeTile) {
          const tileLeft = activeTile.offsetLeft;
          const tileRight = tileLeft + activeTile.offsetWidth;
          const visibleLeft = tableWrap.scrollLeft;
          const visibleRight = visibleLeft + tableWrap.clientWidth;
          if (tileLeft < visibleLeft || tileRight > visibleRight) {
            tableWrap.scrollLeft = Math.max(0, tileLeft - ((tableWrap.clientWidth - activeTile.offsetWidth) / 2));
          }
        }

        detail.innerHTML = "";
        detail.appendChild(make("p", "eyebrow", element.tableLabel || element.lane.replaceAll("-", " ")));
        const heading = make("h3", "", element.name + " (" + element.symbol + ")");
        detail.appendChild(heading);
        detail.appendChild(make("p", "card-meta", element.stream));
        detail.appendChild(makePropertyRows(element));
        detail.appendChild(make("p", "", element.summary));
        detail.appendChild(make("p", "element-local-role", element.localRole));
        if (element.biologyBridge) {
          detail.appendChild(make("p", "biology-bridge", "Biology bridge: " + element.biologyBridge));
        }
        const href = elementPageHref(element);
        if (href) {
          const link = make("a", "card-link", "Open " + element.name + " page");
          link.href = href;
          detail.appendChild(link);
        }
      }

      tableWrap.append(table, legend, caption);
      shell.append(tableWrap, detail);
      mount.appendChild(shell);
      setActive(mount.dataset.defaultElement || "Si");
    });
  }

  function renderReeBreakdown() {
    const grid = document.querySelector("[data-ree-breakdown]");
    if (!grid || typeof REE_BREAKDOWN === "undefined") return;
    REE_BREAKDOWN.forEach((item, index) => {
      const card = make("article", "material-detail-card");
      card.appendChild(make("span", "", String(index + 1).padStart(2, "0")));
      card.appendChild(make("h3", "", item.title));
      card.appendChild(make("p", "card-meta", item.symbols));
      card.appendChild(make("p", "", item.story));
      grid.appendChild(card);
    });
  }

  function renderReeConstituents() {
    const grid = document.querySelector("[data-ree-constituents]");
    if (!grid || typeof REE_CONSTITUENTS === "undefined") return;
    REE_CONSTITUENTS.forEach((item) => {
      const element = getElementBySymbol(item.symbol);
      const card = make("article", "ree-ledger-card");
      card.appendChild(make("strong", "", item.symbol));
      card.appendChild(make("h3", "", item.name));
      card.appendChild(make("p", "card-meta", item.material));
      card.appendChild(make("p", "", item.opportunity));
      const href = elementPageHref(element);
      if (href) {
        const link = make("a", "card-link", "Open element");
        link.href = href;
        card.appendChild(link);
      }
      grid.appendChild(card);
    });
  }

  function renderElementAtlasCards() {
    const grid = document.querySelector("[data-element-card-grid]");
    if (!grid) return;
    getElementAtlas().filter((element) => element.hasPage).forEach((element) => {
      const tableElement = getPeriodicElementBySymbol(element.symbol) || element;
      const card = make("article", "element-atlas-card");
      card.appendChild(make("p", "eyebrow", tableElement.tableLabel || element.lane.replaceAll("-", " ")));
      card.appendChild(make("strong", "", element.symbol));
      card.appendChild(make("h3", "", element.name));
      card.appendChild(make("p", "card-meta", element.stream));
      card.appendChild(make("p", "", element.summary));
      const link = make("a", "card-link", "Open page");
      link.href = elementPageHref(element);
      card.appendChild(link);
      grid.appendChild(card);
    });
  }

  function renderProjectCurrents() {
    const grids = document.querySelectorAll("[data-project-currents]");
    if (!grids.length || typeof PROJECT_CURRENTS === "undefined") return;
    grids.forEach((grid) => {
      const lanes = new Set((grid.dataset.projectCurrents || "").split(",").map((item) => item.trim()).filter(Boolean));
      PROJECT_CURRENTS.filter((item) => lanes.has(item.lane)).forEach((item) => {
        const card = make("article", "project-current-card");
        card.appendChild(make("p", "eyebrow", item.eyebrow));
        card.appendChild(make("h3", "", item.title));
        card.appendChild(make("p", "", item.narrative));
        card.appendChild(make("p", "project-current-build", item.build));
        if (item.href) {
          const link = make("a", "card-link", "Follow thread");
          link.href = prefix + item.href;
          card.appendChild(link);
        }
        grid.appendChild(card);
      });
    });
  }

  function renderAiOpportunities() {
    const grid = document.querySelector("[data-ai-opportunities]");
    if (!grid || typeof AI_DISCOVERY_OPPORTUNITIES === "undefined") return;
    AI_DISCOVERY_OPPORTUNITIES.forEach((item) => {
      const card = make("article", "opportunity-card");
      card.appendChild(make("p", "eyebrow", "Discovery tool"));
      card.appendChild(make("h3", "", item.name));
      card.appendChild(make("p", "card-meta", item.source));
      card.appendChild(make("p", "", item.opportunity));
      card.appendChild(make("p", "project-current-build", item.build));
      if (item.href && item.href !== "materials.html") {
        const link = make("a", "card-link", "Research anchor");
        link.href = item.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(link);
      }
      grid.appendChild(card);
    });
  }

  function renderMaterialEvidence() {
    const grid = document.querySelector("[data-material-evidence]");
    if (!grid || typeof MATERIAL_EVIDENCE_LEDGER === "undefined") return;
    MATERIAL_EVIDENCE_LEDGER.forEach((item) => {
      const card = make("article", "evidence-card");
      card.appendChild(make("p", "eyebrow", item.elements));
      card.appendChild(make("h3", "", item.title));
      [
        ["Evidence", item.evidence],
        ["History", item.history],
        ["Current relevance", item.relevance],
        ["Responsible stewardship", item.stewardship]
      ].forEach(([label, body]) => {
        const block = make("div", "evidence-block");
        block.appendChild(make("strong", "", label));
        block.appendChild(make("p", "", body));
        card.appendChild(block);
      });
      if (item.href) {
        const link = make("a", "card-link", item.source || "Source");
        link.href = item.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(link);
      }
      grid.appendChild(card);
    });
  }

  function renderElementPage() {
    const symbol = document.body.dataset.elementPage;
    if (!symbol) return;
    const element = getElementBySymbol(symbol);
    if (!element) return;

    document.title = element.name + " (" + element.symbol + ") | Mineral Moonshots";
    const hero = document.querySelector("[data-element-hero]");
    if (hero) {
      hero.querySelector("[data-eyebrow]").textContent = element.lane.replaceAll("-", " ");
      hero.querySelector("[data-title]").textContent = element.name;
      hero.querySelector("[data-deck]").textContent = element.summary;
      hero.querySelector("[data-source]").textContent = element.stream;
    }

    const symbolNode = document.querySelector("[data-element-symbol]");
    if (symbolNode) symbolNode.textContent = element.symbol;

    const story = document.querySelector("[data-element-story]");
    if (story) {
      const sourcePanel = document.querySelector(".source-panel");
      if (sourcePanel) {
        const eyebrow = sourcePanel.querySelector(".eyebrow");
        const title = sourcePanel.querySelector("h2");
        if (eyebrow) eyebrow.textContent = "Evidence ledger";
        if (title) title.textContent = element.symbol;
      }
      if (element.evidence) {
        const grid = make("div", "evidence-grid compact-evidence");
        [
          ["Evidence", element.evidence.evidence],
          ["History", element.evidence.history],
          ["Current relevance", element.evidence.relevance],
          ["Responsible stewardship", element.evidence.stewardship]
        ].forEach(([label, body]) => {
          const card = make("article", "evidence-card");
          card.appendChild(make("h3", "", label));
          card.appendChild(make("p", "", body));
          grid.appendChild(card);
        });
        story.appendChild(grid);
      } else {
        story.appendChild(make("p", "", element.localRole));
      }
    }

    const properties = document.querySelector("[data-element-properties]");
    if (properties) properties.appendChild(makePropertyRows(element));

    const opportunities = document.querySelector("[data-element-opportunities]");
    if (opportunities) {
      element.opportunities.forEach((opportunity, index) => {
        const card = make("article", "experiment-card");
        card.appendChild(make("span", "", String(index + 1).padStart(2, "0")));
        card.appendChild(make("h3", "", opportunity.title));
        card.appendChild(make("p", "", opportunity.body));
        opportunities.appendChild(card);
      });
    }

    const stewardship = document.querySelector("[data-element-stewardship]");
    if (stewardship) {
      stewardship.appendChild(make("p", "", element.stewardship));
      if (element.biologyBridge) stewardship.appendChild(make("p", "biology-bridge", "Later biology link: " + element.biologyBridge));
    }

    const pager = document.querySelector("[data-element-pager]");
    if (pager) {
      const pages = getElementAtlas().filter((item) => item.hasPage);
      const index = pages.findIndex((item) => item.symbol === element.symbol);
      const previous = pages[(index - 1 + pages.length) % pages.length];
      const next = pages[(index + 1) % pages.length];
      const links = make("div", "pager-links");
      [
        ["Previous", previous],
        ["Next", next]
      ].forEach(([label, item]) => {
        const link = make("a", "pager-link");
        link.href = "../elements/" + item.slug + ".html";
        link.appendChild(make("span", "", label));
        link.appendChild(make("strong", "", item.name + " (" + item.symbol + ")"));
        link.appendChild(make("p", "", item.stream));
        links.appendChild(link);
      });
      pager.appendChild(links);
    }
  }

  function renderHomeLabPreview() {
    const grid = document.querySelector("[data-lab-preview]");
    if (!grid) return;
    SITE_BRIEFS.filter((brief) => INTERACTIVE_LABS[brief.slug]).forEach((brief) => {
      const lab = INTERACTIVE_LABS[brief.slug];
      const card = make("article", "lab-preview-card");
      card.appendChild(make("p", "eyebrow", lab.type.replaceAll("-", " ")));
      card.appendChild(make("h3", "", lab.title));
      card.appendChild(make("p", "", lab.deck));
      const link = make("a", "card-link", "Open lab");
      link.href = brief.url + "#lab";
      card.appendChild(link);
      grid.appendChild(card);
    });
  }

  function makeRange(label, min, max, value, suffix) {
    const wrap = make("label", "range-control");
    const top = make("span", "range-top");
    top.appendChild(make("strong", "", label));
    const valueNode = make("em", "", value + suffix);
    top.appendChild(valueNode);
    const input = document.createElement("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.value = String(value);
    input.dataset.suffix = suffix;
    input.addEventListener("input", () => {
      valueNode.textContent = input.value + suffix;
    });
    wrap.append(top, input);
    return { wrap, input };
  }

  function renderKardashevDial(lab, mount) {
    const grid = make("div", "dial-grid");
    const controls = make("div", "control-stack");
    const energy = makeRange("Energy demand", 0, 100, 45, "%");
    const urgency = makeRange("Urgency", 0, 100, 35, "%");
    const strain = makeRange("Ecological strain", 0, 100, 30, "%");
    const consent = makeRange("Community consent", 0, 100, 70, "%");
    controls.append(energy.wrap, urgency.wrap, strain.wrap, consent.wrap);

    const readout = make("article", "dial-readout");
    const scoreNode = make("strong", "", "0");
    const phaseNode = make("h3", "", "");
    const textNode = make("p", "", "");
    const bar = make("div", "dial-bar");
    const fill = make("span", "");
    bar.appendChild(fill);
    readout.append(scoreNode, bar, phaseNode, textNode);

    function update() {
      const rawScore = Number(energy.input.value) * 0.32 + Number(urgency.input.value) * 0.34 + Number(strain.input.value) * 0.2 + 14;
      const consentValue = Number(consent.input.value);
      const score = Math.round(consentValue < 35 ? rawScore * 0.45 : rawScore);
      let phase = "Local resilience mode";
      let text = "Optimise comfort, repair, storage, literacy and local-first infrastructure before scaling energy."
      if (consentValue < 35) {
        phase = "Consent hold";
        text = "Pause the scale-up. Build trust, explain trade-offs, and separate public good from private hype.";
      } else if (score >= 78) {
        phase = "Type II research gate";
        text = "Only explore orbital or stellar energy with treaty logic, ecological safeguards and open science governance.";
      } else if (score >= 58) {
        phase = "Emergency Type I sprint";
        text = "Prioritise hardened grids, sand batteries, food loops, mesh communications and public decision dashboards.";
      } else if (score >= 38) {
        phase = "Type I readiness";
        text = "Build planetary habits at island scale: sensorium thinking, clean materials, storage and shared compute.";
      }
      scoreNode.textContent = score + "/100";
      fill.style.width = Math.min(score, 100) + "%";
      phaseNode.textContent = phase;
      textNode.textContent = text;
    }

    [energy, urgency, strain, consent].forEach((control) => control.input.addEventListener("input", update));
    update();
    grid.append(controls, readout);
    mount.appendChild(grid);
  }

  function renderLayerMap(lab, mount) {
    const grid = make("div", "layer-lab");
    const visual = make("div", "layer-visual");
    const controls = make("div", "layer-controls");
    const detail = make("article", "layer-detail");
    const nameNode = make("h3", "", "");
    const depthNode = make("p", "card-meta", "");
    const textNode = make("p", "", "");
    detail.append(nameNode, depthNode, textNode);

    lab.layers.forEach((layer, index) => {
      const band = make("button", "layer-band", layer.name);
      band.type = "button";
      band.style.setProperty("--layer", String(index));
      visual.appendChild(band);

      const button = make("button", "layer-button", layer.name);
      button.type = "button";
      button.addEventListener("click", () => setLayer(index));
      band.addEventListener("click", () => setLayer(index));
      controls.appendChild(button);
    });

    function setLayer(index) {
      const layer = lab.layers[index];
      [...grid.querySelectorAll("button")].forEach((button) => button.classList.remove("is-active"));
      controls.children[index].classList.add("is-active");
      visual.children[index].classList.add("is-active");
      nameNode.textContent = layer.name;
      depthNode.textContent = layer.depth + " | " + layer.tone;
      textNode.textContent = layer.detail;
    }

    grid.append(visual, controls, detail);
    mount.appendChild(grid);
    setLayer(0);
  }

  function renderComputeNetwork(lab, mount) {
    const grid = make("div", "dial-grid");
    const controls = make("div", "control-stack");
    const labels = lab.labels || {};
    const nodes = makeRange(labels.nodes || "Nodes", 1, 200, 24, "");
    const accelerators = makeRange(labels.accelerators || "Accelerators", 0, 8, 2, "");
    const utilisation = makeRange(labels.utilisation || "Utilisation", 5, 100, 45, "%");
    controls.append(nodes.wrap, accelerators.wrap, utilisation.wrap);

    const readout = make("article", "metric-panel");
    const units = make("strong", "", "");
    const hours = make("p", "", "");
    const note = make("p", "", "");
    readout.append(units, hours, note);

    function update() {
      const nodeCount = Number(nodes.input.value);
      const acceleratorCount = Number(accelerators.input.value);
      const use = Number(utilisation.input.value) / 100;
      const relativeUnits = Math.round(nodeCount * (1 + acceleratorCount * 4) * use);
      const publicHours = Math.round(nodeCount * 24 * 7 * use);
      units.textContent = relativeUnits + " relative simulation units";
      hours.textContent = publicHours + " useful shared compute hours per week";
      note.textContent = relativeUnits > 350
        ? "Enough to justify governance, scheduling and heat reuse design."
        : "Still a learning cluster. Good for demos, maps, workshops and small local AI.";
    }

    [nodes, accelerators, utilisation].forEach((control) => control.input.addEventListener("input", update));
    update();
    grid.append(controls, readout);
    mount.appendChild(grid);
  }

  function renderBiosphereCalculator(lab, mount) {
    const grid = make("div", "dial-grid");
    const controls = make("div", "control-stack");
    const people = makeRange("People", 1, 12, 2, "");
    const energy = makeRange("Energy budget", 3, 80, 18, " kWh/day");
    const volume = makeRange("Bio-reactor and grow volume", 20, 600, 120, " L");
    controls.append(people.wrap, energy.wrap, volume.wrap);

    const readout = make("article", "metric-panel");
    const headline = make("strong", "", "");
    const energyPerson = make("p", "", "");
    const volumePerson = make("p", "", "");
    const warning = make("p", "", "");
    readout.append(headline, energyPerson, volumePerson, warning);

    function update() {
      const p = Number(people.input.value);
      const e = Number(energy.input.value);
      const v = Number(volume.input.value);
      const epp = e / p;
      const vpp = v / p;
      headline.textContent = epp >= 12 && vpp >= 80 ? "Research comfort zone" : "High-pressure prototype";
      energyPerson.textContent = epp.toFixed(1) + " kWh per person per day";
      volumePerson.textContent = Math.round(vpp) + " L active volume per person";
      warning.textContent = epp < 8 || vpp < 60
        ? "This would need ruthless crop choices, microbial efficiency and careful failure testing."
        : "This is where the design conversation gets interesting, especially with algae, fungi and sensors.";
    }

    [people, energy, volume].forEach((control) => control.input.addEventListener("input", update));
    update();
    grid.append(controls, readout);
    mount.appendChild(grid);
  }

  function renderKioskSimulator(lab, mount) {
    const shell = make("div", "kiosk-lab");
    const buttons = make("div", "mode-buttons");
    const screen = make("article", "kiosk-screen");
    const title = make("h3", "", "");
    const status = make("p", "card-meta", "");
    const list = make("div", "priority-grid");
    screen.append(title, status, list);

    lab.modes.forEach((mode, index) => {
      const button = make("button", "mode-button", mode.name);
      button.type = "button";
      button.addEventListener("click", () => setMode(index));
      buttons.appendChild(button);
    });

    function setMode(index) {
      const mode = lab.modes[index];
      [...buttons.children].forEach((button) => button.classList.remove("is-active"));
      buttons.children[index].classList.add("is-active");
      title.textContent = mode.name;
      status.textContent = mode.status;
      list.innerHTML = "";
      mode.priorities.forEach((priority) => list.appendChild(make("span", "", priority)));
    }

    shell.append(buttons, screen);
    mount.appendChild(shell);
    setMode(0);
  }

  function renderSpacePath(lab, mount) {
    const shell = make("div", "path-lab");
    const rail = make("div", "path-rail");
    const detail = make("article", "path-detail");
    const name = make("h3", "", "");
    const text = make("p", "", "");
    detail.append(name, text);

    lab.steps.forEach((step, index) => {
      const button = make("button", "path-step", String(index + 1));
      button.type = "button";
      button.setAttribute("aria-label", step.name);
      button.addEventListener("click", () => setStep(index));
      rail.appendChild(button);
    });

    function setStep(index) {
      const step = lab.steps[index];
      [...rail.children].forEach((button) => button.classList.remove("is-active"));
      rail.children[index].classList.add("is-active");
      name.textContent = step.name;
      text.textContent = step.detail;
    }

    shell.append(rail, detail);
    mount.appendChild(shell);
    setStep(0);
  }

  function renderRealityStack(lab, mount) {
    const grid = make("div", "reality-grid");
    lab.lanes.forEach((lane) => {
      const card = make("article", "reality-card");
      card.appendChild(make("h3", "", lane.name));
      const list = make("div", "chip-list");
      lane.items.forEach((item) => list.appendChild(make("span", "", item)));
      card.appendChild(list);
      grid.appendChild(card);
    });
    mount.appendChild(grid);
  }

  function renderArchipelagoMap(lab, mount) {
    const shell = make("div", "archipelago-lab");
    const islands = make("div", "island-buttons");
    const detail = make("article", "island-detail");
    const name = make("h3", "", "");
    const practical = make("p", "", "");
    const moonshot = make("p", "", "");
    detail.append(name, practical, moonshot);

    lab.islands.forEach((island, index) => {
      const button = make("button", "island-button", island.name);
      button.type = "button";
      button.addEventListener("click", () => setIsland(index));
      islands.appendChild(button);
    });

    function setIsland(index) {
      const island = lab.islands[index];
      [...islands.children].forEach((button) => button.classList.remove("is-active"));
      islands.children[index].classList.add("is-active");
      name.textContent = island.name;
      practical.textContent = "Grounded path: " + island.practical;
      moonshot.textContent = "Moonshot path: " + island.moonshot;
    }

    shell.append(islands, detail);
    mount.appendChild(shell);
    setIsland(0);
  }

  function renderInteractiveLab(brief) {
    const lab = INTERACTIVE_LABS[brief.slug];
    const experiments = document.querySelector("[data-experiments]");
    if (!lab || !experiments) return;

    const section = make("section", "section interactive-section");
    section.id = "lab";
    const heading = make("div", "section-heading");
    heading.appendChild(make("p", "eyebrow", "Interactive prototype"));
    heading.appendChild(make("h2", "", lab.title));
    heading.appendChild(make("p", "", lab.deck));
    const mount = make("div", "lab-shell");
    section.append(heading, mount);

    if (lab.type === "kardashev-dial") renderKardashevDial(lab, mount);
    if (lab.type === "layer-map") renderLayerMap(lab, mount);
    if (lab.type === "compute-network") renderComputeNetwork(lab, mount);
    if (lab.type === "biosphere-calculator") renderBiosphereCalculator(lab, mount);
    if (lab.type === "kiosk-simulator") renderKioskSimulator(lab, mount);
    if (lab.type === "space-path") renderSpacePath(lab, mount);
    if (lab.type === "reality-stack") renderRealityStack(lab, mount);
    if (lab.type === "archipelago-map") renderArchipelagoMap(lab, mount);
    if (lab.type === "ifttt-matrix") renderIftttMatrix(lab, mount);

    experiments.closest(".section").before(section);
  }

  function renderIftttMatrix(lab, mount) {
    const shell = make("div", "ifttt-lab");
    const buttons = make("div", "signal-buttons");
    const detail = make("article", "signal-detail");
    const name = make("h3", "", "");
    const source = make("p", "card-meta", "");
    const query = make("p", "", "");
    const list = make("ul", "signal-list");
    detail.append(name, source, query, list);

    lab.signals.forEach((signal, index) => {
      const button = make("button", "signal-button", signal.name);
      button.type = "button";
      button.addEventListener("click", () => setSignal(index));
      buttons.appendChild(button);
    });

    function setSignal(index) {
      const signal = lab.signals[index];
      [...buttons.children].forEach((button) => button.classList.remove("is-active"));
      buttons.children[index].classList.add("is-active");
      name.textContent = signal.name;
      source.textContent = signal.stream;
      query.textContent = signal.query;
      list.innerHTML = "";
      signal.outputs.forEach((output) => list.appendChild(make("li", "", output)));
    }

    shell.append(buttons, detail);
    mount.appendChild(shell);
    setSignal(0);
  }

  function renderDepthSections(brief) {
    if (!brief.depth || !brief.depth.length) return;
    const modules = document.querySelector("[data-modules]");
    if (!modules) return;

    const section = make("section", "section project-depth");
    const heading = make("div", "section-heading");
    heading.appendChild(make("p", "eyebrow", brief.depthEyebrow || "Deep thread"));
    heading.appendChild(make("h2", "", brief.depthTitle || "A world to think with"));
    heading.appendChild(make("p", "", brief.depthIntro || "For explorers with time, tools or capital, this is the deeper project thread: enough detail to imagine a first experiment, a research path or a serious moonshot team."));

    const stack = make("div", "depth-stack");
    brief.depth.forEach((item, index) => {
      const card = make("article", "depth-card");
      card.appendChild(make("span", "depth-index", String(index + 1).padStart(2, "0")));
      card.appendChild(make("h3", "", item.title));
      if (item.body) card.appendChild(make("p", "", item.body));
      if (item.points && item.points.length) {
        const list = make("ul", "depth-list");
        item.points.forEach((point) => list.appendChild(make("li", "", point)));
        card.appendChild(list);
      }
      if (item.note) card.appendChild(make("p", "depth-note", item.note));
      stack.appendChild(card);
    });

    section.append(heading, stack);
    modules.closest(".section").before(section);
  }

  function scrollToHashTarget() {
    if (!location.hash || location.hash.length < 2) return;
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    window.setTimeout(() => {
      target.scrollIntoView({ block: "start" });
    }, 80);
  }

  function getNarrativeParagraphs(brief) {
    if (typeof NARRATIVE_SEEDS !== "undefined" && NARRATIVE_SEEDS[brief.slug]) {
      return NARRATIVE_SEEDS[brief.slug];
    }
    return brief.brief || [brief.deck];
  }

  function renderBriefPager(brief) {
    const main = document.querySelector("main");
    if (!main) return;

    const currentIndex = SITE_BRIEFS.findIndex((item) => item.slug === brief.slug);
    if (currentIndex < 0) return;

    const previous = SITE_BRIEFS[(currentIndex - 1 + SITE_BRIEFS.length) % SITE_BRIEFS.length];
    const next = SITE_BRIEFS[(currentIndex + 1) % SITE_BRIEFS.length];

    const section = make("nav", "section brief-pager");
    section.setAttribute("aria-label", "Moonshot page navigation");

    const heading = make("div", "section-heading");
    heading.appendChild(make("p", "eyebrow", "Keep exploring"));
    heading.appendChild(make("h2", "", "Next thread"));

    const links = make("div", "pager-links");

    const previousLink = make("a", "pager-link previous");
    previousLink.href = prefix + previous.url;
    previousLink.setAttribute("aria-label", "Previous thread: " + previous.title);
    previousLink.appendChild(make("span", "", "Previous"));
    previousLink.appendChild(make("strong", "", previous.title));
    previousLink.appendChild(make("p", "", previous.deck));

    const nextLink = make("a", "pager-link next");
    nextLink.href = prefix + next.url;
    nextLink.setAttribute("aria-label", "Next thread: " + next.title);
    nextLink.appendChild(make("span", "", "Next"));
    nextLink.appendChild(make("strong", "", next.title));
    nextLink.appendChild(make("p", "", next.deck));

    links.append(previousLink, nextLink);
    section.append(heading, links);
    main.appendChild(section);
  }

  function renderBackToTop() {
    const button = make("button", "to-top-button", "Top");
    button.type = "button";
    button.setAttribute("aria-label", "Back to top");
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function update() {
      button.classList.toggle("is-visible", window.scrollY > 640);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    document.body.appendChild(button);
  }

  function renderBriefPage() {
    if (!isBriefPage) return;
    const brief = SITE_BRIEFS.find((item) => item.slug === isBriefPage);
    if (!brief) return;

    document.title = brief.title + " | Mineral Moonshots";
    const hero = document.querySelector("[data-page-hero]");
    if (hero) {
      hero.querySelector("[data-eyebrow]").textContent = brief.eyebrow;
      hero.querySelector("[data-title]").textContent = brief.title;
      hero.querySelector("[data-deck]").textContent = brief.deck;
      hero.querySelector("[data-source]").textContent = brief.sourceLabel || brief.material;
    }

    const briefList = document.querySelector("[data-brief-points]");
    const sourcePanel = document.querySelector(".source-panel");
    if (sourcePanel) {
      const eyebrow = sourcePanel.querySelector(".eyebrow");
      const title = sourcePanel.querySelector("h2");
      if (eyebrow) eyebrow.textContent = "Narrative seed";
      if (title) title.textContent = brief.narrativeTitle || "Where the trail begins";
    }
    const moonshotPanel = document.querySelector(".moonshot-panel");
    if (moonshotPanel) {
      const eyebrow = moonshotPanel.querySelector(".eyebrow");
      const title = moonshotPanel.querySelector("h2");
      if (eyebrow) eyebrow.textContent = "Build spark";
      if (title) title.textContent = "What wants building";
    }
    if (briefList) {
      const narrative = make("div", "narrative-copy");
      getNarrativeParagraphs(brief).forEach((paragraph) => {
        narrative.appendChild(make("p", "", paragraph));
      });
      briefList.replaceWith(narrative);
    }

    document.querySelector("[data-moonshot]").textContent = brief.moonshot;

    const modules = document.querySelector("[data-modules]");
    brief.modules.forEach((module, index) => {
      const card = make("article", "module-card");
      card.appendChild(make("span", "", String(index + 1).padStart(2, "0")));
      card.appendChild(make("h3", "", module));
      modules.appendChild(card);
    });

    const experiments = document.querySelector("[data-experiments]");
    brief.experiments.forEach((experiment, index) => {
      const card = make("article", "experiment-card");
      card.appendChild(make("span", "", String(index + 1).padStart(2, "0")));
      card.appendChild(make("p", "", experiment));
      experiments.appendChild(card);
    });

    renderDepthSections(brief);
    renderInteractiveLab(brief);
    renderBriefPager(brief);
  }

  renderHeader();
  renderFooter();
  renderHomeBriefs();
  renderLocalProjects();
  renderElementGrid();
  renderPeriodicExplorer();
  renderReeBreakdown();
  renderReeConstituents();
  renderElementAtlasCards();
  renderProjectCurrents();
  renderAiOpportunities();
  renderMaterialEvidence();
  renderHomeLabPreview();
  renderBriefPage();
  renderElementPage();
  renderBackToTop();
  scrollToHashTarget();
})();
