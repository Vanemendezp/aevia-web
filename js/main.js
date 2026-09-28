/* ==========================================================================
   AEVIA — Lógica de interacción (mockup, sin backend)
   ========================================================================== */

function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
function getParam(name) { return new URLSearchParams(window.location.search).get(name); }
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Nav (hamburger, active link) ---------- */
function initNav(pageKey) {
  const toggle = qs(".nav-toggle");
  const nav = qs(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    qsa("a", nav).forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
    }));
  }
  if (pageKey) {
    qsa(".main-nav a[data-nav]").forEach(a => {
      if (a.dataset.nav === pageKey) a.classList.add("active");
    });
  }
}

function initProductCount() {
  qsa("[data-product-count]").forEach(el => { el.textContent = PRODUCTS.length; });
}

/* ---------- Scroll reveal ---------- */
function initFadeUp() {
  const items = qsa(".fade-up");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

/* ---------- Render helpers ---------- */
function productBadge(p) {
  return p.real
    ? `<span class="product-badge real">Ficha real</span>`
    : `<span class="product-badge pending">Pendiente</span>`;
}

function renderProductCard(p) {
  return `
  <a class="product-card fade-up" href="producto.html?id=${encodeURIComponent(p.id)}">
    <div class="product-media">
      ${productBadge(p)}
      <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
    </div>
    <span class="product-brand">${escapeHtml(p.brandName)}</span>
    <h3 class="product-name">${escapeHtml(p.name)}</h3>
    <span class="product-cat">${escapeHtml(p.category)}</span>
  </a>`;
}

function renderBrandTile(b, i) {
  return `
  <a class="brand-tile" href="marca.html?slug=${encodeURIComponent(b.slug)}">
    <div class="brand-tile-img">
      <img src="${poolImg(b.pool, i + 1)}" alt="${escapeHtml(b.name)}" loading="lazy">
    </div>
    <span class="brand-tile-name">${escapeHtml(b.name)}</span>
    <span class="brand-tile-cat">${escapeHtml(b.pillar)}</span>
  </a>`;
}

function renderBrandCard(b) {
  const count = productsByBrand(b.slug).length;
  return `
  <a class="brand-card fade-up" href="marca.html?slug=${encodeURIComponent(b.slug)}">
    <div class="brand-card-media"><img src="${poolImg(b.pool, 4)}" alt="${escapeHtml(b.name)}" loading="lazy"></div>
    <div class="brand-card-body">
      <span class="eyebrow">${escapeHtml(b.pillar)}</span>
      <h3>${escapeHtml(b.name)}</h3>
      <p>${escapeHtml(b.tagline)}</p>
      <span class="count">${count} productos en catálogo</span>
    </div>
  </a>`;
}

/* ==========================================================================
   HOME
   ========================================================================== */
function initHomePage() {
  const previewIds = ["cosrx-1", "frida-kahlo-1", "hello-sunday-1", "mario-badescu-1"];
  const preview = previewIds.map(productById).filter(Boolean);
  const previewEl = qs("#catalog-preview");
  if (previewEl) previewEl.innerHTML = preview.map(renderProductCard).join("");

  const stripEl = qs("#brand-strip");
  if (stripEl) stripEl.innerHTML = BRANDS.map(renderBrandTile).join("");
}

/* ==========================================================================
   MARCAS (listado)
   ========================================================================== */
function initMarcasPage() {
  const grid = qs("#brands-grid");
  if (grid) grid.innerHTML = BRANDS.map(renderBrandCard).join("");
}

/* ==========================================================================
   MARCA (detalle)
   ========================================================================== */
function initMarcaPage() {
  const slug = getParam("slug") || BRANDS[0].slug;
  const brand = brandBySlug(slug) || BRANDS[0];
  const products = productsByBrand(brand.slug);

  document.title = `${brand.name} — AEVIA`;
  qs("#brand-hero-img").src = poolImg(brand.pool, 2);
  qs("#brand-hero-img").alt = brand.name;
  qs("#brand-pillar").textContent = brand.pillar;
  qs("#brand-name").textContent = brand.name;
  qs("#brand-tagline").textContent = brand.tagline;
  qs("#brand-description").textContent = brand.description;
  qs("#brand-count").textContent = `${products.length} productos de ${brand.name} en el catálogo`;
  qs("#breadcrumb-current").textContent = brand.name;
  qs("#brand-cta-heading").textContent = `¿Quieres sumar ${brand.name} a tu tienda?`;
  qs("#brand-cta-link").href = `contacto.html?marca=${encodeURIComponent(brand.name)}`;

  qsa(".brand-pill").forEach(el => {
    el.classList.toggle("active", el.dataset.slug === brand.slug);
    el.href = `marca.html?slug=${el.dataset.slug}`;
  });

  const grid = qs("#brand-products");
  if (grid) grid.innerHTML = products.map(renderProductCard).join("");

  initFadeUp();
}

/* ==========================================================================
   CATÁLOGO
   ========================================================================== */
function initCatalogoPage() {
  const grid = qs("#catalog-grid");
  const brandSelect = qs("#filter-brand");
  const catSelect = qs("#filter-category");
  const necesidadSelect = qs("#filter-necesidad");
  const activoSelect = qs("#filter-activo");
  const skinSelect = qs("#filter-skin");
  const search = qs("#filter-search");
  const countEl = qs("#result-count");
  const emptyEl = qs("#empty-state");

  brandSelect.innerHTML = `<option value="">Todas las marcas</option>` +
    BRANDS.map(b => `<option value="${b.slug}">${escapeHtml(b.name)}</option>`).join("");
  catSelect.innerHTML = `<option value="">Todo tipo de producto</option>` +
    CATEGORY_GROUPS.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  necesidadSelect.innerHTML = `<option value="">Toda necesidad de la piel</option>` +
    SKIN_NEEDS.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  activoSelect.innerHTML = `<option value="">Todo principio activo</option>` +
    ACTIVE_INGREDIENTS.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  skinSelect.innerHTML = `<option value="">Todo tipo de piel</option>` +
    SKIN_CONCERNS.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");

  const initialBrand = getParam("marca");
  if (initialBrand) brandSelect.value = initialBrand;
  const initialSearch = getParam("buscar");
  if (initialSearch) search.value = initialSearch;
  const initialActivo = getParam("activo");
  if (initialActivo) activoSelect.value = initialActivo;
  const initialSkin = getParam("piel");
  if (initialSkin) skinSelect.value = initialSkin;

  function applyFilters() {
    const brand = brandSelect.value;
    const cat = catSelect.value;
    const necesidad = necesidadSelect.value;
    const activo = activoSelect.value;
    const skin = skinSelect.value;
    const q = search.value.trim().toLowerCase();

    const filtered = PRODUCTS.filter(p => {
      if (brand && p.brandSlug !== brand) return false;
      if (cat && p.category !== cat) return false;
      if (necesidad && !p.necesidad.includes(necesidad)) return false;
      if (activo && !p.activos.includes(activo)) return false;
      if (skin && p.skinConcern !== skin) return false;
      if (q && !(p.name.toLowerCase().includes(q) || p.brandName.toLowerCase().includes(q))) return false;
      return true;
    });

    countEl.textContent = `Mostrando ${filtered.length} de ${PRODUCTS.length} productos`;
    grid.innerHTML = filtered.map(renderProductCard).join("");
    emptyEl.style.display = filtered.length === 0 ? "block" : "none";
    initFadeUp();
  }

  [brandSelect, catSelect, necesidadSelect, activoSelect, skinSelect].forEach(el => el.addEventListener("change", applyFilters));
  search.addEventListener("input", applyFilters);

  applyFilters();
}

/* ==========================================================================
   PRODUCTO (ficha)
   ========================================================================== */
function initProductoPage() {
  const id = getParam("id") || "cosrx-1";
  const product = productById(id) || PRODUCTS[0];
  const brand = brandBySlug(product.brandSlug);

  document.title = `${product.name} — AEVIA`;

  qs("#breadcrumb-brand").textContent = brand.name;
  qs("#breadcrumb-brand").href = `marca.html?slug=${brand.slug}`;
  qs("#breadcrumb-current").textContent = product.name;

  qs("#pd-eyebrow").textContent = `${brand.name.toUpperCase()} · ${product.category.toUpperCase()}`;
  qs("#pd-title").textContent = product.name;

  const subtitleParts = [];
  if (product.contenido) subtitleParts.push(product.contenido);
  if (product.isp) subtitleParts.push(`Resolución ISP ${product.isp}`);
  qs("#pd-subtitle").textContent = subtitleParts.length
    ? subtitleParts.join(" · ")
    : "[PENDIENTE] — ficha técnica (formato / contenido neto) a confirmar con la marca.";

  const descEl = qs("#pd-desc");
  if (product.desc) {
    descEl.textContent = product.desc;
  } else {
    descEl.innerHTML = `<span class="pending-note">Descripción pendiente — copy oficial a solicitar a ${escapeHtml(brand.name)}.</span>`;
  }

  qs("#pd-tags").innerHTML = product.activos.map(a => `<span class="pd-tag">${escapeHtml(a)}</span>`).join("");

  const pendingFlag = qs("#pd-pending-flag");
  pendingFlag.style.display = product.real ? "none" : "inline-flex";

  // gallery — el catálogo real trae 1 foto oficial por producto (Falabella);
  // se oculta la fila de miniaturas cuando no hay más de una imagen.
  const mainImg = qs("#pd-main-img");
  mainImg.src = product.gallery[0];
  mainImg.alt = product.name;
  const thumbsEl = qs("#pd-thumbs");
  if (product.gallery.length > 1) {
    thumbsEl.style.display = "";
    thumbsEl.innerHTML = product.gallery.map((src, i) => `
      <button class="pd-thumb${i === 0 ? " active" : ""}" data-src="${src}" aria-label="Ver imagen ${i + 1}">
        <img src="${src}" alt="" loading="lazy">
      </button>`).join("");
    qsa(".pd-thumb", thumbsEl).forEach(btn => {
      btn.addEventListener("click", () => {
        mainImg.src = btn.dataset.src;
        qsa(".pd-thumb", thumbsEl).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  } else {
    thumbsEl.style.display = "none";
    thumbsEl.innerHTML = "";
  }

  // tabs
  const tabDesc = qs("#tab-panel-desc");
  const tabIng = qs("#tab-panel-ingredientes");
  const tabUso = qs("#tab-panel-uso");
  tabDesc.innerHTML = product.desc
    ? escapeHtml(product.desc)
    : `<span class="pending-note">[PENDIENTE] Descripción larga — a solicitar a ${escapeHtml(brand.name)}.</span>`;
  tabIng.innerHTML = product.ing
    ? escapeHtml(product.ing)
    : `<span class="pending-note">[PENDIENTE] Listado de ingredientes / INCI — obligatorio antes de publicar en producción.</span>`;
  tabUso.innerHTML = product.uso
    ? escapeHtml(product.uso)
    : `<span class="pending-note">[PENDIENTE] Modo de uso — a solicitar a ${escapeHtml(brand.name)}.</span>`;
  qsa(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      qsa(".tab-btn").forEach(b => b.classList.remove("active"));
      qsa(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      qs(`#tab-panel-${btn.dataset.tab}`).classList.add("active");
    });
  });

  // CTA -> contacto con producto precargado
  const ctaBtn = qs("#pd-cta");
  ctaBtn.href = `contacto.html?producto=${encodeURIComponent(product.name)}&marca=${encodeURIComponent(brand.name)}`;

  // related
  const related = relatedProducts(product, 4);
  qs("#related-heading").textContent = `Más de ${brand.name}`;
  qs("#related-grid").innerHTML = related.map(renderProductCard).join("");

  initFadeUp();
}

/* ==========================================================================
   CONTACTO
   ========================================================================== */
function initContactoPage() {
  const producto = getParam("producto");
  const marca = getParam("marca");
  const bannerEl = qs("#contacto-context");
  const interestField = qs("#field-interes");
  const brandSelect = qs("#field-marca-interes");

  function preselectBrand(name) {
    if (!brandSelect || !name) return;
    const opt = Array.from(brandSelect.options).find(o => o.value === name);
    if (opt) brandSelect.value = name;
  }

  if (producto) {
    bannerEl.style.display = "block";
    bannerEl.innerHTML = `Vienes desde la ficha de <strong>${escapeHtml(producto)}</strong>${marca ? ` (${escapeHtml(marca)})` : ""}. Precargamos el producto y la marca de interés — puedes editarlos.`;
    if (interestField) interestField.value = producto;
    preselectBrand(marca);
  } else if (marca) {
    bannerEl.style.display = "block";
    bannerEl.innerHTML = `Vienes interesado en sumar <strong>${escapeHtml(marca)}</strong> a tu tienda. Precargamos la marca de interés — puedes editarla.`;
    preselectBrand(marca);
  }

  const form = qs("#quote-form");
  const successEl = qs("#form-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    qsa("[data-required]", form).forEach(field => {
      const wrap = field.closest(".field");
      const errorEl = wrap.querySelector(".field-error");
      let msg = "";
      if (!field.value.trim()) msg = "Este campo es obligatorio.";
      else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) msg = "Ingresa un email válido.";
      wrap.classList.toggle("invalid", !!msg);
      if (errorEl) errorEl.textContent = msg;
      if (msg) valid = false;
    });
    if (!valid) return;

    form.style.display = "none";
    successEl.classList.add("show");
    successEl.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
