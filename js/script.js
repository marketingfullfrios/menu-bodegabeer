// ============================================================
// 📦 DATOS DEL MENÚ
// ============================================================
const menuData = {
  cervezas: {
    categories: [
      {
        name: "PERSONAL",
        items: [
          { name: "COSTEÑITA", price: "$ 3.000" },
          { name: "AGUILA LIGHT", price: "$ 3.500" },
          { name: "AGUILA ORIGINAL", price: "$ 3.500" },
          { name: "POKER", price: "$ 3.500" },
          { name: "CERVEZA MICHELOB", price: "$ 5.000" },
          { name: "CORONITA", price: "$ 5.000" },
          { name: "CORONA", price: "$ 8.000" },
          { name: "STELLA ARTOIS", price: "$ 8.000" }
        ]
      },
      {
        name: "269CC",
        items: [
          { name: "POKER", price: "$ 4.000" },
          { name: "AGUILA LIGHT", price: "$ 4.000" },
          { name: "BUDWEISER", price: "$ 4.000" },
          { name: "AGUILA ORIGINAL", price: "$ 4.000" },
          { name: "REDS", price: "$ 5.000" },
          { name: "ROSE LATA", price: "$ 5.000" },
          { name: "REDS ROSADO", price: "$ 5.000" },
          { name: "CORONITA", price: "$ 5.000" }
        ]
      },
      {
        name: "330CC",
        items: [
          { name: "ANDINA DORADA", price: "$ 4.000" },
          { name: "ANDINA LIGHT", price: "$ 4.000" },
          { name: "COSTEÑA BACANA", price: "$ 5.000" },
          { name: "POKER", price: "$ 5.000" },
          { name: "AGUILA ORIGINAL", price: "$ 5.000" },
          { name: "AGUILA LIGHT", price: "$ 5.000" },
          { name: "HEINEKEN LATA 310 CC", price: "$ 5.000" },
          { name: "CLUB COLOMBIA DORADA LATA", price: "$ 6.000" },
          { name: "CLUB COLOMBIA NEGRA LATA", price: "$ 6.000" },
          { name: "CLUB COLOMBIA ROJA LATA", price: "$ 6.000" },
          { name: "CLUB COLOMBIA TRIGO LATA", price: "$ 6.000" }
        ]
      },
      {
        name: "750 CC",
        items: [
          { name: "COSTEÑA", price: "$ 5.000" },
          { name: "ANDINA DORADA", price: "$ 5.000" },
          { name: "AGUILA LIGHT", price: "$ 7.000" },
          { name: "AGUILA ORIGINAL", price: "$ 7.000" },
          { name: "POKER", price: "$ 7.000" }
        ]
      },
      {
        name: "LITRO",
        items: [
          { name: "AGUILA LIGHT", price: "$ 8.000" },
          { name: "AGUILA ORIGINAL", price: "$ 8.000" },
          { name: "POKER", price: "$ 8.000" },
          { name: "CLUB COLOMBIA DORADA", price: "$ 10.000" }
        ]
      }
    ]
  },
  cubetazos: {
    categories: [
      {
        name: "CUBETAZOS 269 X 6 UNID",
        items: [
          { name: "POKER LATA 269 cc", price: "$ 20.000" },
          { name: "AGUILA LIGHT LATA 269 cc", price: "$ 20.000" },
          { name: "AGUILA ORIGINAL", price: "$ 20.000" },
          { name: "BUDWEISER LATA 269 CC", price: "$ 20.000" },
          { name: "CORONITA LATA", price: "$ 25.000" },
          { name: "CORONITA BOTELLA", price: "$ 25.000" }
        ]
      },
      {
        name: "CUBETAZOS 330 X 6 UNID",
        items: [
          { name: "ANDINA DORADA 310 CC", price: "$ 20.000" },
          { name: "ANDINA LIGHT 310 CC", price: "$ 20.000" },
          { name: "AGUILA LIGHT C", price: "$ 30.000" },
          { name: "COSTEÑA BACANA", price: "$ 30.000" },
          { name: "POKER", price: "$ 30.000" },
          { name: "AGUILA ORIGINAL", price: "$ 30.000" }
        ]
      }
    ]
  },
  combosTragos: {
    categories: [
      {
        name: "AGUARDIENTE AMARILLO MANZANARES",
        image: "src/imagenes/AGUARDIENTE AMARILLO DE MANZANARES.svg",
        acompanantes: "Combo con electrolit/hielo servicio limon y mango",
        items: [
          { name: "1000 ML VIDRIO", price: "$ 110.000" },
          { name: "350 ML", price: "$ 60.000" },
          { name: "750 ML", price: "$ 80.000" }
        ]
      },
      {
        name: "AGUARDIENTE ANTIOQUEÑO REAL S/A",
        image: "src/imagenes/AGUARDIENTE ANTIOQUEÑO REAL.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "750 ML", price: "$ 110.000" }
        ]
      },
      {
        name: "AGUARDIENTE ANTIOQUEÑO SIN AZUCAR",
        image: "src/imagenes/AGUARDIENTE ANTIOQUEÑO SIN AZUCAR.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "1000 ML", price: "$ 110.000" },
          { name: "375 ML", price: "$ 60.000" },
          { name: "750 ML", price: "$ 80.000" },
          { name: "1050 ML", price: "$ 110.000" }
        ]
      },
      {
        name: "AGUARDIENTE ANTIOQUEÑO TAPA ROJA",
        image: "src/imagenes/AGUARDIENTE ANTIOQUEÑO TAPA ROJA.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "1000 ML", price: "$ 110.000" },
          { name: "375 ML", price: "$ 60.000" },
          { name: "750 ML", price: "$ 80.000" }
        ]
      },
      {
        name: "AGUARDIENTE ANTIOQUEÑO TAPA VERDE",
        image: "src/imagenes/AGUARDIENTE ANTIOQUEÑO TAPA VERDE.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "1000 ML", price: "$ 110.000" },
          { name: "375 ML", price: "$ 60.000" },
          { name: "750 ML", price: "$ 75.000" }
        ]
      },
      {
        name: "AGUARDIENTE CRISTAL XS",
        image: "src/imagenes/AGUARDIENTE CRISTAL XS.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "750 ML", price: "$ 50.000" },
          { name: "GARRAFA", price: "$ 90.000" }
        ]
      },
      {
        name: "RON MEDELLIN",
        image: "src/imagenes/RON MEDELLIN 3 años.svg",
        acompanantes: "Combo con cocacola/hielo servicio limon y mango",
        items: [
          { name: "3 AÑOS 375 ML", price: "$ 50.000" },
          { name: "3 AÑOS 750 ML", price: "$ 70.000" },
          { name: "TRADICIONAL 375 ML (DORADO)", price: "$ 50.000" },
          { name: "TRADICIONAL 750 ML (DORADO)", price: "$ 65.000" }
        ]
      },
      {
        name: "RON CALDAS TRADICIONAL",
        image: "src/imagenes/RON CALDAS TRADICIONAL.svg",
        acompanantes: "Combo con cocacola/hielo servicio limon y mango",
        items: [
          { name: "375 ML", price: "$ 60.000" },
          { name: "750 ML", price: "$ 90.000" },
          { name: "GARRAFA 1750 ML", price: "$ 180.000" }
        ]
      },
      {
        name: "WHISKY BUCHANAN'S",
        image: "src/imagenes/WHISKY BUCHANAN'S DELUXE 12 A 750 ML.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "BUCHANAN'S DELUXE 12 A 750 ML", price: "$ 210.000" }
        ]
      },
      {
        name: "WHISKY GRAND OLD PARR",
        image: "src/imagenes/WHISKY WHISKY GRAND 12 AÑOS OLD PARR 750 ML.svg",
        acompanantes: "Combo con Soda/hielo servicio limon y mango",
        items: [
          { name: "WHISKY GRAND 12 AÑOS OLD PARR 750 ML", price: "$ 190.000" }
        ]
      }
    ]
  },
  cocteles: {
    categories: [
      {
        name: "COCTELES PREPARADOS",
        items: [
          { name: "L I K E ICE COOLER", price: "$ 7.000" },
          { name: "SMIRNOFF ICE BOTELLA", price: "$ 12.000" },
          { name: "FOUR LOKO", price: "$ 19.000" },
          { name: "BRETAÑA SABORES COCTEL", price: "$ 8.000" },
          { name: "JP CHANET LATA", price: "$ 12.000" },
          { name: "LOS CUATES", price: "$ 7.000" }
        ]
      }
    ]
  },
  bebidasEspeciales: {
    categories: [
      {
        name: "BEBIDAS ESPECIALES",
        items: [
          { name: "SHOT TEQUILA SILVER", price: "$ 12.000" },
          { name: "SODA FRUTOS AMARILLOS", price: "$ 12.000" },
          { name: "SODA FRUTOS ROJOS", price: "$ 12.000" },
          { name: "COCTEL CUBA LIBRE", price: "$ 16.000" },
          { name: "MOJITO FRESA", price: "$ 17.000" },
          { name: "MARGARITA CORONA", price: "$ 17.000" },
          { name: "CORONA SUNRISE", price: "$ 15.000" },
          { name: "MARGARITA", price: "$ 14.000" },
          { name: "EL INTENSO", price: "$ 15.000" }
        ]
      }
    ]
  },
  bebidasSinAlcohol: {
    categories: [
      {
        name: "BEBIDAS SIN ALCOHOL",
        items: [
          { name: "SODA BRETAÑA", price: "$ 4.000" },
          { name: "AGUA 300 ML", price: "$ 1.200" },
          { name: "AGUA PET 600 ML", price: "$ 2.500" },
          { name: "AGUA PET LITRO", price: "$ 3.000" },
          { name: "COCACOLA PET 400 ML", price: "$ 4.000" },
          { name: "HIT PET 500 ML", price: "$ 4.000" },
          { name: "PONY MALTA LATA", price: "$ 3.500" },
          { name: "COLA & POLA LATA 330 CC", price: "$ 3.500" },
          { name: "GATORADE", price: "$ 5.000" },
          { name: "ELECTROLIT", price: "$ 10.000" }
        ]
      }
    ]
  },
  energizantes: {
    categories: [
      {
        name: "ENERGIZANTES",
        image: "src/imagenes/BEBIDA ENERGIZANTE RED BULL.svg",
        items: [
          { name: "SPEED MAX LATA 310", price: "$ 3.500" },
          { name: "VIVE 100", price: "$ 3.500" },
          { name: "RED BULL LATA", price: "$ 9.000" },
          { name: "AMPER LATA 473ML", price: "$ 4.000" },
          { name: "SPARTAN XTREME 269 ML", price: "$ 3.000" }
        ]
      }
    ]
  },
  adicionales: {
    categories: [
      {
        name: "SERVICIOS",
        items: [
          { name: "CHINGON", price: "$ 8.000" },
          { name: "SERVICIO DE LIMON", price: "$ 2.500" },
          { name: "SERVICIO DE MANGO", price: "$ 4.000" },
          { name: "VASO MICHELADO SENCILLO", price: "$ 3.000" },
          { name: "VASO MICHELADO CON MANGO", price: "$ 6.000" },
          { name: "SERVICIO SALCHICHON CON LIMON", price: "$ 8.000" }
        ]
      }
    ]
  }
};

// ============================================================
// ⚙️ CONFIGURACIÓN
// ============================================================
const CONFIG = {
  whatsappNumber: "573000000000",
  storeName: "Bodega Beer"
};

// ============================================================
// 🛒 CARRITO
// ============================================================
const cart = new Map();

function getItemKey(name, category) {
  return `${name}|||${category}`;
}

// ============================================================
// 📤 FUNCIONES DEL CARRITO
// ============================================================

function wa(msg) {
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
}

function sendOrderToWhatsApp() {
  if (!cart.size) {
    alert("⚠️ No hay productos en el pedido.");
    return;
  }
  let msg = `🍻 Hola! Quiero pedir en ${CONFIG.storeName}:\n\n`;
  let total = 0;
  cart.forEach((v, k) => {
    const num = parseInt((v.price || "$ 0").replace(/[^0-9]/g, "")) || 0;
    total += num * v.qty;
    msg += `• ${v.displayName} (x${v.qty}) - ${v.price}\n`;
  });
  msg += `\n💰 Total estimado: $ ${total.toLocaleString()}\n\n📍 Por favor confirma disponibilidad.`;
  wa(msg);
}

function badge() {
  const n = Array.from(cart.values()).reduce((s, i) => s + i.qty, 0);
  const dot = document.getElementById("fabDot");
  if (dot) {
    dot.textContent = n;
    dot.classList.toggle("show", n > 0);
  }
}

function refresh(name, category) {
  const key = getItemKey(name, category);
  const qtyData = cart.get(key);
  const qty = qtyData ? qtyData.qty : 0;
  
  document.querySelectorAll(`.row[data-name="${name}"][data-category="${category}"]`).forEach((row) => {
    const ops = row.querySelector(".ops");
    if (!ops) return;
    ops.innerHTML = "";
    if (qty > 0) {
      const d = document.createElement("div");
      d.className = "qty";
      d.innerHTML = `<button data-act="-" data-name="${name}" data-category="${category}">−</button><span class="qty-num">${qty}</span><button data-act="+" data-name="${name}" data-category="${category}">+</button>`;
      ops.appendChild(d);
    } else {
      const hint = document.createElement("button");
      hint.className = "add-btn";
      hint.textContent = "+";
      hint.setAttribute("data-name", name);
      hint.setAttribute("data-category", category);
      ops.appendChild(hint);
    }
  });
}

// ============================================================
// 🟣 MODAL
// ============================================================

function openModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  renderModal();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderModal() {
  const container = document.getElementById('modalContent');

  if (!cart.size) {
    container.innerHTML = `
      <div class="modal-empty">
        <div class="icon">🛒</div>
        <p style="font-size:16px;font-weight:500;">Tu pedido está vacío</p>
        <p style="font-size:13px;color:var(--muted);margin-top:6px;">Agrega productos desde el menú</p>
      </div>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary btn-full" onclick="closeModal()">Seguir pidiendo</button>
      </div>
    `;
    return;
  }

  let html = '<ul class="modal-items">';
  let total = 0;

  cart.forEach((v, key) => {
    const num = parseInt((v.price || "$ 0").replace(/[^0-9]/g, "")) || 0;
    const subtotal = num * v.qty;
    total += subtotal;
    const encodedKey = encodeURIComponent(key);
    html += `
      <li class="modal-item">
        <div class="modal-item-info">
          <span class="modal-item-name">${v.displayName}</span>
          <span class="modal-item-detail">${v.qty} x ${v.price}</span>
        </div>
        <span class="modal-item-price">$ ${subtotal.toLocaleString()}</span>
        <div class="modal-qty-group">
          <button class="modal-qty-btn" onclick="modalQtyChange('${encodedKey}', -1)">−</button>
          <span class="modal-qty-num">${v.qty}</span>
          <button class="modal-qty-btn" onclick="modalQtyChange('${encodedKey}', 1)">+</button>
        </div>
        <button class="modal-item-remove" onclick="modalRemoveItem('${encodedKey}')" title="Eliminar producto">✕</button>
      </li>
    `;
  });

  html += '</ul>';

  html += `
    <div class="modal-total">
      <span class="modal-total-label">Total estimado</span>
      <span class="modal-total-amount">$ ${total.toLocaleString()}</span>
    </div>
    <div class="modal-actions">
      <button class="modal-btn modal-btn-danger" onclick="clearCart()">🗑️ Vaciar pedido</button>
      <button class="modal-btn modal-btn-secondary" onclick="closeModal()">Seguir pidiendo</button>
      <button class="modal-btn modal-btn-primary btn-full" onclick="confirmOrder()">✅ Confirmar pedido</button>
    </div>
  `;

  container.innerHTML = html;
}

function modalQtyChange(encodedKey, delta) {
  const key = decodeURIComponent(encodedKey);
  const cur = cart.get(key);
  if (!cur) return;

  let q = cur.qty + delta;
  if (q <= 0) {
    cart.delete(key);
    refresh(cur.name, cur.category);
    badge();
    renderModal();
    return;
  }

  cart.set(key, { ...cur, qty: q });
  refresh(cur.name, cur.category);
  badge();
  renderModal();
}

function modalRemoveItem(encodedKey) {
  const key = decodeURIComponent(encodedKey);
  const cur = cart.get(key);
  if (!cur) return;
  
  cart.delete(key);
  refresh(cur.name, cur.category);
  badge();
  renderModal();
}

function clearCart() {
  if (cart.size === 0) return;
  if (!confirm('¿Estás seguro de que quieres vaciar todo el pedido?')) return;

  const keys = Array.from(cart.keys());
  keys.forEach(key => {
    const cur = cart.get(key);
    cart.delete(key);
    refresh(cur.name, cur.category);
  });
  badge();
  renderModal();
}

function confirmOrder() {
  if (!cart.size) {
    alert('⚠️ No hay productos en el pedido.');
    return;
  }
  closeModal();
  sendOrderToWhatsApp();
}

// ============================================================
// 🏗️ FUNCIÓN PARA RENDERIZAR SECCIONES
// ============================================================

function renderItems(gridId, categories, sectionName, isCombo = false) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.position = "relative";

    // Badge "COMBO" si es combo
    if (isCombo) {
      const badge = document.createElement("div");
      badge.className = "combo-badge";
      badge.textContent = "🎯 COMBO";
      card.appendChild(badge);
    }

    // Imagen si existe
    if (cat.image) {
      const img = document.createElement("img");
      img.src = cat.image;
      img.alt = cat.name;
      img.className = "combo-image";
      img.loading = "lazy";
      card.appendChild(img);
    }

    // Cabecera
    const head = document.createElement("div");
    head.className = "card-head";
    head.textContent = cat.name;
    card.appendChild(head);

    // Acompañante
    if (isCombo && cat.acompanantes) {
      const accomp = document.createElement("div");
      accomp.className = "acompanante";
      accomp.textContent = `📌 ${cat.acompanantes}`;
      card.appendChild(accomp);
    }

    // Body
    const body = document.createElement("div");
    body.className = "card-body";

    cat.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "row";
      row.setAttribute("data-name", item.name);
      row.setAttribute("data-category", cat.name);

      const nm = document.createElement("div");
      nm.className = "name";
      nm.textContent = item.name;
      nm.title = item.name;

      const pr = document.createElement("div");
      pr.className = "price";
      pr.textContent = item.price;

      const ops = document.createElement("div");
      ops.className = "ops";

      const addBtn = document.createElement("button");
      addBtn.className = "add-btn";
      addBtn.textContent = "+";
      addBtn.setAttribute("data-name", item.name);
      addBtn.setAttribute("data-category", cat.name);
      ops.appendChild(addBtn);

      row.append(nm, pr, ops);
      body.appendChild(row);
    });

    card.appendChild(body);
    grid.appendChild(card);
  });
}

// ============================================================
// 🏗️ CONSTRUIR TODAS LAS SECCIONES
// ============================================================

function buildMenu() {
  renderItems('cervezasGrid', menuData.cervezas.categories, 'cervezas');
  renderItems('cubetazosGrid', menuData.cubetazos.categories, 'cubetazos');
  renderItems('combosTragosGrid', menuData.combosTragos.categories, 'combosTragos', true);
  renderItems('coctelesGrid', menuData.cocteles.categories, 'cocteles');
  renderItems('bebidasEspecialesGrid', menuData.bebidasEspeciales.categories, 'bebidasEspeciales');
  renderItems('bebidasSinAlcoholGrid', menuData.bebidasSinAlcohol.categories, 'bebidasSinAlcohol');
  renderItems('energizantesGrid', menuData.energizantes.categories, 'energizantes');
  renderItems('adicionalesGrid', menuData.adicionales.categories, 'adicionales');
}

// ============================================================
// 🔍 BUSCADOR
// ============================================================

function normalizeText(text) {
  return text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.trim();
  const normalizedQuery = normalizeText(query);

  if (!query) {
    resetSearch();
    return;
  }

  document.querySelectorAll('.section-title').forEach(title => title.style.display = 'none');

  let found = false;
  const allRows = document.querySelectorAll('.row');

  allRows.forEach(row => {
    const name = row.querySelector('.name')?.textContent || '';
    const price = row.querySelector('.price')?.textContent || '';
    const card = row.closest('.card');
    const cardHead = card?.querySelector('.card-head')?.textContent || '';
    const acompanante = card?.querySelector('.acompanante')?.textContent || '';

    const searchableText = normalizeText(name + ' ' + price + ' ' + cardHead + ' ' + acompanante);
    const match = searchableText.includes(normalizedQuery);

    row.style.display = match ? '' : 'none';
    if (match) found = true;

    if (card) {
      const visibleRows = card.querySelectorAll('.row[style*="display: none"]');
      const totalRows = card.querySelectorAll('.row');
      const hasVisible = visibleRows.length < totalRows.length;
      card.style.display = hasVisible ? '' : 'none';

      const accomp = card.querySelector('.acompanante');
      if (accomp) {
        accomp.style.display = hasVisible ? '' : 'none';
      }
    }
  });

  document.querySelectorAll('[class*="grid-"]').forEach(grid => {
    const hasVisibleCards = grid.querySelectorAll('.card[style*="display: none"]').length < grid.querySelectorAll('.card').length;
    grid.style.display = hasVisibleCards ? '' : 'none';
  });

  const existingNoResults = document.querySelector('.no-results');
  if (!found && !existingNoResults) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.innerHTML = `
      <div class="icon">🔍</div>
      <p style="font-size:18px;font-weight:600;">No encontramos resultados</p>
      <p style="color:var(--muted);margin-top:6px;">Intenta con otra palabra</p>
    `;
    document.getElementById('mainContent').appendChild(msg);
  } else if (found && existingNoResults) {
    existingNoResults.remove();
  }
}

function resetSearch() {
  document.querySelectorAll('.section-title').forEach(title => title.style.display = '');
  document.querySelectorAll('.row').forEach(row => row.style.display = '');
  document.querySelectorAll('.card').forEach(card => card.style.display = '');
  document.querySelectorAll('.acompanante').forEach(el => el.style.display = '');
  document.querySelectorAll('[class*="grid-"]').forEach(grid => grid.style.display = '');
  document.querySelectorAll('.no-results').forEach(el => el.remove());
}

// ============================================================
// 📌 NAVEGACIÓN
// ============================================================

function setupNavigation() {
  const links = document.querySelectorAll('.nav-link, .nav-link-mobile');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      document.getElementById('hamburgerBtn').classList.remove('active');
      document.getElementById('navMobile').classList.remove('open');

      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      const target = this.getAttribute('data-target');
      const section = document.getElementById(target);

      if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const navHeight = document.querySelector('.nav-sticky').offsetHeight;
        const offset = headerHeight + navHeight + 10;

        const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ============================================================
// 🍔 MENÚ HAMBURGUESA
// ============================================================

document.getElementById('hamburgerBtn').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navMobile').classList.toggle('open');
});

document.addEventListener('click', function(e) {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMobile = document.getElementById('navMobile');
  if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
    hamburger.classList.remove('active');
    navMobile.classList.remove('open');
  }
});

// ============================================================
// 🖱️ EVENTOS
// ============================================================

document.getElementById('brandLogo').addEventListener('click', function() {
  document.getElementById('searchInput').value = '';
  resetSearch();

  const keys = Array.from(cart.keys());
  keys.forEach(key => {
    const cur = cart.get(key);
    cart.delete(key);
    refresh(cur.name, cur.category);
  });
  badge();

  if (document.getElementById('modalOverlay').classList.contains('active')) {
    closeModal();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-target') === 'cervezas');
  });

  document.getElementById('hamburgerBtn').classList.remove('active');
  document.getElementById('navMobile').classList.remove('open');
});

document.getElementById("fabCart").addEventListener("click", function(e) {
  e.stopPropagation();
  if (cart.size === 0) {
    alert("⚠️ Agrega productos al pedido primero.");
    return;
  }
  openModal();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

document.getElementById("fabWa").addEventListener("click", function(e) {
  e.preventDefault();
  wa(`Hola! Quiero más información sobre el menú de ${CONFIG.storeName}.`);
});

document.getElementById("searchBtn").addEventListener("click", searchProducts);
document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") searchProducts();
});

document.getElementById("searchInput").addEventListener("input", function(e) {
  if (this.value === '') {
    resetSearch();
  }
});

document.addEventListener("click", function(e) {
  const btn = e.target.closest(".ops button");
  if (!btn) return;

  const name = btn.getAttribute("data-name");
  const category = btn.getAttribute("data-category");
  if (!name || !category) return;

  const act = btn.getAttribute("data-act");

  const allSections = [
    ...menuData.cervezas.categories,
    ...menuData.cubetazos.categories,
    ...menuData.combosTragos.categories,
    ...menuData.cocteles.categories,
    ...menuData.bebidasEspeciales.categories,
    ...menuData.bebidasSinAlcohol.categories,
    ...menuData.energizantes.categories,
    ...menuData.adicionales.categories
  ];

  let item = null;
  let foundCategory = '';
  
  for (const cat of allSections) {
    if (cat.name === category) {
      const found = cat.items.find(i => i.name === name);
      if (found) {
        item = found;
        foundCategory = cat.name;
        break;
      }
    }
  }

  if (!item) return;

  const key = getItemKey(name, foundCategory);
  const cur = cart.get(key);
  let q = cur ? cur.qty : 0;

  if (act === "+") {
    q += 1;
  } else if (act === "-") {
    q -= 1;
    if (q <= 0) {
      cart.delete(key);
      refresh(name, foundCategory);
      badge();
      return;
    }
  } else {
    q = 1;
  }

  cart.set(key, { 
    name: name, 
    category: foundCategory, 
    displayName: name,
    price: item.price, 
    qty: q 
  });
  refresh(name, foundCategory);
  badge();
});

window.addEventListener("scroll", function() {
  const sections = ['cervezas', 'cubetazos', 'combos-tragos', 'cocteles', 'bebidas-especiales', 'bebidas-sin-alcohol', 'energizantes', 'adicionales'];
  const headerHeight = document.querySelector('.header').offsetHeight;
  const navHeight = document.querySelector('.nav-sticky').offsetHeight;
  const offset = headerHeight + navHeight + 20;

  let current = '';
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset) {
        current = id;
      }
    }
  });

  document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-target') === current);
  });
});

// ============================================================
// 🖼️ LOGOS
// ============================================================

function setLogo(where, url) {
  const el = document.getElementById(where);
  if (!el) return;
  const ph = el.querySelector(".ph");
  if (ph) ph.style.display = "none";
  if (!url) return;
  let img = el.querySelector("img");
  if (!img) { img = document.createElement("img"); el.appendChild(img); }
  img.src = url;
  img.alt = "Logo Bodega Beer";
}

// ============================================================
// 🚀 INICIALIZACIÓN
// ============================================================

(function init() {
  buildMenu();

  const qs = new URLSearchParams(window.location.search);
  setLogo("headerLogo", decodeURIComponent(qs.get("logo") || ""));
  setLogo("footerLogo", decodeURIComponent(qs.get("footerlogo") || ""));

  setupNavigation();

  window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (header) {
      if (window.scrollY > 10) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
  });

  console.log("✅ Menú Bodega Beer cargado correctamente!");
})();