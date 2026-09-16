(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const savedKey = "kf-saved";
  const getSaved = () => JSON.parse(localStorage.getItem(savedKey) || "[]");
  const setSaved = (ids) => localStorage.setItem(savedKey, JSON.stringify(ids));

  function dropList(items) {
    return items.map((c) => `<a href="shop.html?cat=${c.slug}">${c.label}</a>`).join("");
  }

  function header() {
    return `
      <header class="site-header">
        <div class="wrap header-row">
          <button class="menu-btn" data-open="nav" aria-label="Menu">☰</button>
          <a class="brand" href="index.html">
            <span class="brand-mark">
              <img src="img/logo-k.png" alt="Kakobuy Spreadsheet" />
            </span>
            <span class="brand-copy">
              <strong>kakobuy <span>spreadsheet</span></strong>
              <small>www.kakobuygoodqc.com</small>
            </span>
          </a>
          <nav class="nav">
            <a href="index.html" data-nav="home">Home</a>
            <a href="shop.html" data-nav="shop">Shop All</a>
            <div class="drop" data-nav="apparel">
              <button class="linkish" type="button" aria-haspopup="true">Apparel</button>
              <div class="drop-panel">${dropList(KF.nav.apparel)}</div>
            </div>
            <div class="drop" data-nav="lifestyle">
              <button class="linkish" type="button" aria-haspopup="true">Lifestyle</button>
              <div class="drop-panel">${dropList(KF.nav.lifestyle)}</div>
            </div>
            <a href="guides.html" data-nav="guides">Guides</a>
          </nav>
          <div class="header-tools">
            <button class="icon-btn search-btn" data-open="search" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7"/>
                <path d="M20 20l-3.5-3.5"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div class="overlay" id="overlay"></div>
      <aside class="mobile-nav" id="mobile-nav">
        <a href="index.html" data-nav="home">Home</a>
        <a href="shop.html" data-nav="shop">Shop All</a>
        ${[...KF.nav.apparel, ...KF.nav.lifestyle].map((c) => `<a href="shop.html?cat=${c.slug}">${c.label}</a>`).join("")}
        <a href="guides.html" data-nav="guides">Guides</a>
      </aside>
      <div class="search-modal" id="search-modal">
        <input class="search-input" id="global-search" placeholder="Search finds, categories, QC…" />
        <div class="search-hits" id="search-hits"></div>
      </div>
      <div class="toast" id="toast"></div>
    `;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="wrap footer-grid">
          <div>
            <strong>Kakobuy Spreadsheet</strong>
            <p class="disclaimer">Independent directory for kakobuygoodqc.com. Not affiliated with Kakobuy, Taobao, Weidian, 1688, or Tmall. We do not process orders or payments.</p>
          </div>
          <div>
            <p><a href="shop.html">Shop all</a></p>
            <p><a href="guides.html">Guides</a></p>
            <p><a href="about.html">About</a></p>
            <p><a href="privacy.html">Privacy</a></p>
            <p><a href="author.html?id=kakospreadsheet" rel="author">Editor</a></p>
            <p><a href="${KF.site.sheetUrl}" target="_blank" rel="noopener">Google Sheet</a></p>
          </div>
          <div>
            <p>Later domain: <strong>kakobuygoodqc.com</strong></p>
            <p>Updated ${KF.site.updated}</p>
          </div>
        </div>
        <div class="wrap disclaimer">Trademarks belong to their owners. Verify listings, QC, and shipping on Kakobuy before you pay.</div>
      </footer>
    `;
  }

  function stars(rating) {
    const n = Math.max(0, Math.min(5, Number(rating) || 0));
    let full = Math.floor(n + 1e-9);
    const frac = n - full;
    let half = false;
    if (frac >= 0.75 && full < 5) full += 1;
    else if (frac >= 0.25 && full < 5) half = true;
    const empty = 5 - full - (half ? 1 : 0);
    const glyphs = `${"★".repeat(full)}${half ? '<span class="star-half">★</span>' : ""}${"☆".repeat(empty)}`;
    return `<span class="stars" aria-label="${n.toFixed(1)} out of 5">${glyphs}</span>`;
  }

  function productCard(p) {
    return `
      <a class="product-card" href="item.html?id=${p.id}">
        <div class="thumb"><img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async" /></div>
        <h3>${p.title}</h3>
        ${stars(p.rating)}
        <b>${KF.money(p.price)}</b>
      </a>
    `;
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 1600);
  }

  function renderSaved() {
    const ids = getSaved();
    const count = $("#saved-count");
    if (count) count.textContent = ids.length;
    const list = $("#saved-list");
    if (!list) return;
    const items = KF.products.filter((p) => ids.includes(p.id));
    list.innerHTML = items.length
      ? items.map((p) => `<p><a href="item.html?id=${p.id}">${p.title}</a> · ${KF.money(p.price)}</p>`).join("")
      : "<p>No saved finds yet.</p>";
  }

  function closeAll() {
    $("#overlay").classList.remove("show");
    $("#mobile-nav").classList.remove("show");
    $("#search-modal").classList.remove("show");
  }

  function openPanel(name) {
    closeAll();
    $("#overlay").classList.add("show");
    if (name === "nav") $("#mobile-nav").classList.add("show");
    if (name === "search") {
      $("#search-modal").classList.add("show");
      $("#global-search").focus();
    }
  }

  function currentNav() {
    const page = document.body.dataset.page || "";
    const cat = new URLSearchParams(location.search).get("cat") || "";
    const apparel = new Set(KF.nav.apparel.map((c) => c.slug));
    const lifestyle = new Set(KF.nav.lifestyle.map((c) => c.slug));
    if (page === "home") return "home";
    if (page === "guides" || page === "guide" || page === "author") return "guides";
    if ((page === "shop" || page === "item") && apparel.has(cat)) return "apparel";
    if ((page === "shop" || page === "item") && lifestyle.has(cat)) return "lifestyle";
    if (page === "shop" || page === "item") return "shop";
    return "";
  }

  function markCurrentNav() {
    const key = currentNav();
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.classList.toggle("is-on", el.dataset.nav === key);
    });
  }

  function bindChrome() {
    document.body.insertAdjacentHTML("afterbegin", header());
    document.body.insertAdjacentHTML("beforeend", footer());
    renderSaved();
    markCurrentNav();
    document.querySelectorAll("[data-open]").forEach((btn) => {
      btn.addEventListener("click", () => openPanel(btn.dataset.open));
    });
    $("#overlay").addEventListener("click", closeAll);
    const searchInput = $("#global-search");
    const hitsBox = $("#search-hits");
    let suggestIndex = null;
    let activeHit = -1;

    function ensureIndex() {
      if (suggestIndex) return suggestIndex;
      const map = new Map();
      function add(raw) {
        const text = String(raw || "").replace(/\s+/g, " ").trim();
        if (text.length < 2 || text.length > 40) return;
        if (/^\d+$/.test(text)) return;
        const key = text.toLowerCase();
        const cur = map.get(key);
        if (cur) cur.n += 1;
        else map.set(key, { text, n: 1 });
      }
      const catLabel = {};
      [...KF.nav.apparel, ...KF.nav.lifestyle].forEach((c) => { catLabel[c.slug] = c.label; });
      KF.products.forEach((p) => {
        add(p.collection);
        const label = catLabel[p.category] || p.category;
        add(label);
        if (p.collection && label) add(`${p.collection} ${label}`);
        const words = String(p.title || "").split(/[^a-zA-Z0-9+]+/).filter((w) => w.length > 1);
        for (let i = 0; i < words.length; i++) {
          add(words[i]);
          if (words[i + 1]) add(`${words[i]} ${words[i + 1]}`);
          if (words[i + 1] && words[i + 2]) add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
        }
      });
      suggestIndex = [...map.values()];
      return suggestIndex;
    }

    function markQuery(text, q) {
      const i = text.toLowerCase().indexOf(q.toLowerCase());
      if (i < 0) return text.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
      const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
      return `${esc(text.slice(0, i))}<mark>${esc(text.slice(i, i + q.length))}</mark>${esc(text.slice(i + q.length))}`;
    }

    function suggestionsFor(q) {
      const ql = q.toLowerCase();
      if (!ql) return [];
      return ensureIndex()
        .filter((item) => item.text.toLowerCase().includes(ql))
        .map((item) => {
          const key = item.text.toLowerCase();
          return { text: item.text, n: item.n, starts: key.startsWith(ql), key };
        })
        .filter((item) => item.key !== ql)
        .sort((a, b) => {
          if (a.starts !== b.starts) return a.starts ? -1 : 1;
          if (b.n !== a.n) return b.n - a.n;
          return a.text.length - b.text.length;
        })
        .slice(0, 10);
    }

    function renderHits(q) {
      activeHit = -1;
      if (!q) {
        hitsBox.innerHTML = "";
        return;
      }
      const items = suggestionsFor(q);
      hitsBox.innerHTML = items.length
        ? items.map((item) => `
            <a class="search-suggest" href="shop.html?q=${encodeURIComponent(item.text)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
              </svg>
              <span>${markQuery(item.text, q)}</span>
            </a>
          `).join("")
        : `<p>No matches.</p>`;
    }

    function goSearch(value) {
      const q = (value != null ? value : searchInput.value).trim();
      if (!q) return;
      location.href = "shop.html?q=" + encodeURIComponent(q);
    }

    searchInput.addEventListener("input", () => {
      renderHits(searchInput.value.trim());
    });
    searchInput.addEventListener("keydown", (e) => {
      const links = [...hitsBox.querySelectorAll(".search-suggest")];
      if (e.key === "ArrowDown" && links.length) {
        e.preventDefault();
        activeHit = (activeHit + 1) % links.length;
        links.forEach((el, i) => el.classList.toggle("is-on", i === activeHit));
        return;
      }
      if (e.key === "ArrowUp" && links.length) {
        e.preventDefault();
        activeHit = (activeHit - 1 + links.length) % links.length;
        links.forEach((el, i) => el.classList.toggle("is-on", i === activeHit));
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (activeHit >= 0 && links[activeHit]) {
          location.href = links[activeHit].href;
          return;
        }
        goSearch();
      }
    });
  }

  KF.ui = { productCard, toast, bindChrome, getSaved, setSaved, renderSaved, stars };
})();
