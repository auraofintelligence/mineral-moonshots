(function () {
  const isBriefPage = document.body.dataset.page;
  const prefix = location.pathname.replace(/\\/g, "/").includes("/briefs/") ? "../" : "";

  const routes = [
    { label: "Home", href: "index.html" },
    { label: "World", href: "index.html#world-rules" },
    { label: "Briefs", href: "index.html#briefs" },
    { label: "Elements", href: "index.html#elements" },
    { label: "Roadmap", href: "index.html#roadmap" },
    { label: "Labs", href: "index.html#labs" },
    { label: "Contact", href: "index.html#contact" }
  ];

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
    copy.appendChild(make("p", "", "Mineral Moonshots is an island idea atlas for curious locals exploring resilience, materials, food, compute and peaceful space futures."));
    copy.appendChild(make("p", "footer-note", "Shared game-world and narrative planning sandbox. Real-world work needs consent, engineering, ecology, law, culture and community governance."));

    const links = make("div", "footer-links");
    SITE_BRIEFS.slice(0, 4).forEach((brief) => {
      const a = make("a", "", brief.title);
      a.href = prefix + brief.url;
      links.appendChild(a);
    });
    const small = make("small", "", String(year));
    links.appendChild(small);

    mount.append(copy, links);
  }

  function renderHomeBriefs() {
    const grid = document.querySelector("[data-brief-grid]");
    if (!grid) return;
    SITE_BRIEFS.forEach((brief, index) => {
      const card = make("article", "brief-card");
      card.style.setProperty("--card-index", String(index + 1));

      const tag = make("p", "eyebrow", brief.eyebrow);
      const title = make("h3", "", brief.title);
      const deck = make("p", "", brief.deck);
      const meta = make("p", "card-meta", brief.material);
      const link = make("a", "card-link", "Open brief");
      link.href = brief.url;
      link.setAttribute("aria-label", "Open " + brief.title);

      card.append(tag, title, deck, meta, link);
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
      practical.textContent = "Practical door: " + island.practical;
      moonshot.textContent = "Moonshot door: " + island.moonshot;
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

    experiments.closest(".section").before(section);
  }

  function scrollToHashTarget() {
    if (!location.hash || location.hash.length < 2) return;
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    window.setTimeout(() => {
      target.scrollIntoView({ block: "start" });
    }, 80);
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
      hero.querySelector("[data-source]").textContent = "Source brief: " + brief.source;
    }

    const briefList = document.querySelector("[data-brief-points]");
    brief.brief.forEach((point) => {
      const li = make("li", "", point);
      briefList.appendChild(li);
    });

    document.querySelector("[data-moonshot]").textContent = brief.moonshot;

    const modules = document.querySelector("[data-modules]");
    brief.modules.forEach((module, index) => {
      const card = make("article", "module-card");
      card.appendChild(make("span", "", String(index + 1).padStart(2, "0")));
      card.appendChild(make("h3", "", module));
      modules.appendChild(card);
    });

    const experiments = document.querySelector("[data-experiments]");
    brief.experiments.forEach((experiment) => {
      experiments.appendChild(make("li", "", experiment));
    });

    const elements = document.querySelector("[data-page-elements]");
    brief.elements
      .map((symbol) => MINERAL_PALETTE.find((item) => item.symbol === symbol))
      .filter(Boolean)
      .forEach((item) => {
        const card = make("article", "element-card compact");
        card.appendChild(make("strong", "", item.symbol));
        card.appendChild(make("h3", "", item.name));
        card.appendChild(make("p", "", item.role));
        elements.appendChild(card);
      });

    const more = document.querySelector("[data-more-briefs]");
    SITE_BRIEFS.filter((item) => item.slug !== brief.slug).slice(0, 4).forEach((item) => {
      const a = make("a", "mini-link", item.title);
      a.href = prefix + item.url;
      more.appendChild(a);
    });

    renderInteractiveLab(brief);
  }

  renderHeader();
  renderFooter();
  renderHomeBriefs();
  renderElementGrid();
  renderHomeLabPreview();
  renderBriefPage();
  scrollToHashTarget();
})();
