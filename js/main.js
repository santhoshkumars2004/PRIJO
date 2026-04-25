/* ============================================================
   PRIJO — Core JavaScript (main.js)
   Navigation, overlays, sidebars, product data, page init
   ============================================================ */

/* ---------- PRODUCT DATA ---------- */
const products = [
  { id: 1, name: "TOKYO OVERSIZED TEE", price: 899, originalPrice: 1499, category: "mens", badge: "SALE",
    image: "assets/images/product_tshirt_black.png", hoverImage: "assets/images/product_tshirt_black.png",
    description: "Premium cotton oversized tee with dropped shoulders and a relaxed fit. Perfect for layering or wearing solo.",
    sizes: ["XS","S","M","L","XL","XXL"], colors: ["#1a1a1a","#C9A96E","#4a4a4a"], rating: 4.3, reviews: 156 },
  { id: 2, name: "KYOTO LINEN PANTS", price: 1199, originalPrice: null, category: "mens", badge: "NEW",
    image: "assets/images/product_cargo_olive.png", hoverImage: "assets/images/product_jogger_black.png",
    description: "Breathable linen-blend pants with a tapered fit and elastic waistband. Ideal for warm weather styling.",
    sizes: ["S","M","L","XL","XXL"], colors: ["#5c6b4f","#1a1a1a","#d4c5a9"], rating: 4.5, reviews: 89 },
  { id: 3, name: "SEOUL CROP TEE", price: 799, originalPrice: 1199, category: "womens", badge: "SALE",
    image: "assets/images/product_tshirt_beige.png", hoverImage: "assets/images/product_tshirt_black.png",
    description: "Cropped boxy tee crafted from organic cotton. Features a raw-edge hem and subtle logo embroidery.",
    sizes: ["XS","S","M","L","XL"], colors: ["#d4c5a9","#1a1a1a","#ffffff"], rating: 4.1, reviews: 203 },
  { id: 4, name: "MINIMAL BLAZER", price: 2499, originalPrice: null, category: "womens", badge: null,
    image: "assets/images/product_jacket_beige.png", hoverImage: "assets/images/product_hoodie_charcoal.png",
    description: "Structured yet relaxed blazer in a neutral tone. Crafted from lightweight wool blend for year-round wear.",
    sizes: ["XS","S","M","L","XL"], colors: ["#d4c5a9","#1a1a1a"], rating: 4.7, reviews: 64 },
  { id: 5, name: "DRAPE COORD SET", price: 1899, originalPrice: 2799, category: "womens", badge: "SALE",
    image: "assets/images/product_hoodie_olive.png", hoverImage: "assets/images/product_hoodie_charcoal.png",
    description: "Flowing two-piece coord set with wide-leg pants and matching top. Made from premium viscose fabric.",
    sizes: ["XS","S","M","L","XL"], colors: ["#5c6b4f","#1a1a1a","#d4c5a9"], rating: 4.4, reviews: 128 },
  { id: 6, name: "STREET CARGO PANTS", price: 1499, originalPrice: null, category: "mens", badge: "NEW",
    image: "assets/images/product_jogger_black.png", hoverImage: "assets/images/product_cargo_olive.png",
    description: "Multi-pocket cargo pants with adjustable ankle toggles. Heavy-duty cotton twill construction.",
    sizes: ["S","M","L","XL","XXL"], colors: ["#1a1a1a","#5c6b4f","#4a4a4a"], rating: 4.6, reviews: 97 },
  { id: 7, name: "NUDE KNITWEAR", price: 999, originalPrice: 1599, category: "womens", badge: "SALE",
    image: "assets/images/product_hoodie_charcoal.png", hoverImage: "assets/images/product_hoodie_olive.png",
    description: "Soft knitted sweater in a warm nude tone. Features ribbed cuffs and a slightly oversized silhouette.",
    sizes: ["XS","S","M","L","XL"], colors: ["#c4a882","#1a1a1a","#666"], rating: 4.2, reviews: 178 },
  { id: 8, name: "BOXY COTTON SHIRT", price: 1099, originalPrice: null, category: "mens", badge: "NEW",
    image: "assets/images/product_tshirt_beige.png", hoverImage: "assets/images/product_tshirt_black.png",
    description: "Relaxed-fit button-down shirt in washed cotton. Features a camp collar and chest pocket detail.",
    sizes: ["S","M","L","XL","XXL"], colors: ["#d4c5a9","#ffffff","#1a1a1a"], rating: 4.0, reviews: 112 },
  { id: 9, name: "OVERSIZED HOODIE", price: 1599, originalPrice: 2199, category: "oversized", badge: "SALE",
    image: "assets/images/product_hoodie_charcoal.png", hoverImage: "assets/images/product_hoodie_olive.png",
    description: "Ultra-cozy hoodie with a kangaroo pocket and drawstring hood. Heavyweight 400 GSM French terry.",
    sizes: ["S","M","L","XL","XXL"], colors: ["#4a4a4a","#5c6b4f","#1a1a1a"], rating: 4.8, reviews: 234 },
  { id: 10, name: "STRUCTURED JACKET", price: 2999, originalPrice: null, category: "new", badge: "NEW",
    image: "assets/images/product_jacket_beige.png", hoverImage: "assets/images/product_hoodie_charcoal.png",
    description: "Utility-inspired jacket with multiple pockets and brass hardware. Water-resistant outer shell.",
    sizes: ["S","M","L","XL"], colors: ["#d4c5a9","#1a1a1a"], rating: 4.5, reviews: 45 },
  { id: 11, name: "WIDE LEG JOGGER", price: 1299, originalPrice: null, category: "oversized", badge: null,
    image: "assets/images/product_jogger_black.png", hoverImage: "assets/images/product_cargo_olive.png",
    description: "Wide-leg jogger in premium loopback cotton. Relaxed through the thigh with an elastic waist.",
    sizes: ["S","M","L","XL","XXL"], colors: ["#1a1a1a","#4a4a4a"], rating: 4.3, reviews: 88 },
  { id: 12, name: "GRAPHIC PRINT TEE", price: 999, originalPrice: 1399, category: "new", badge: "SALE",
    image: "assets/images/product_tshirt_black.png", hoverImage: "assets/images/product_tshirt_beige.png",
    description: "Statement graphic tee featuring exclusive PRIJO artwork. 100% ringspun combed cotton.",
    sizes: ["XS","S","M","L","XL","XXL"], colors: ["#1a1a1a","#ffffff"], rating: 4.1, reviews: 167 },
  { id: 13, name: "ESSENTIAL TANK TOP", price: 699, originalPrice: null, category: "womens", badge: null,
    image: "assets/images/product_tshirt_beige.png", hoverImage: "assets/images/product_tshirt_black.png",
    description: "Minimalist tank top in a scooped-neck design. Perfect base layer in silky smooth pima cotton.",
    sizes: ["XS","S","M","L","XL"], colors: ["#d4c5a9","#1a1a1a","#ffffff"], rating: 4.0, reviews: 92 },
  { id: 14, name: "VINTAGE WASH DENIM", price: 1999, originalPrice: null, category: "mens", badge: "NEW",
    image: "assets/images/product_cargo_olive.png", hoverImage: "assets/images/product_jogger_black.png",
    description: "Selvedge denim with a vintage wash treatment. Slim-straight fit with authentic fading.",
    sizes: ["28","30","32","34","36"], colors: ["#5c6b4f","#1a1a1a"], rating: 4.6, reviews: 73 },
  { id: 15, name: "PUFFER VEST", price: 1799, originalPrice: 2499, category: "oversized", badge: "SALE",
    image: "assets/images/product_hoodie_olive.png", hoverImage: "assets/images/product_jacket_beige.png",
    description: "Quilted puffer vest with recycled down fill. Stand collar and zip pockets for essentials.",
    sizes: ["S","M","L","XL"], colors: ["#5c6b4f","#1a1a1a","#d4c5a9"], rating: 4.4, reviews: 56 },
  { id: 16, name: "RELAXED FIT SHORTS", price: 899, originalPrice: null, category: "new", badge: "NEW",
    image: "assets/images/product_tshirt_black.png", hoverImage: "assets/images/product_tshirt_beige.png",
    description: "Comfortable above-the-knee shorts in brushed cotton. Side seam pockets and drawstring waist.",
    sizes: ["S","M","L","XL","XXL"], colors: ["#1a1a1a","#d4c5a9","#5c6b4f"], rating: 4.2, reviews: 134 },
];

/* ---------- HELPER: Get product by ID ---------- */
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

/* ---------- HELPER: Generate Order ID ---------- */
function generateOrderId() {
  return 'PRIJO-' + Math.floor(100000 + Math.random() * 900000);
}

/* ---------- HELPER: Format price ---------- */
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

/* ---------- HELPER: Get URL parameter ---------- */
function getUrlParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

/* ============================================================
   DOM READY — INITIALIZE EVERYTHING
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectCommonElements();
  initNav();
  initSearch();
  initCartSidebar();
  initWishlistSidebar();
  Cart.updateBadge();
  Wishlist.updateBadge();

  // Page loader
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 600);
  }
});

/* ============================================================
   COMMON NAV + FOOTER INJECTION
   ============================================================ */
function injectCommonElements() {
  // Elements are in HTML already — just verify
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const nav = document.getElementById('main-nav');
  const announcementBar = document.getElementById('announcement-bar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  let lastScrollY = 0;

  if (!nav) return;

  // Scroll behavior: sticky nav, hide announcement bar
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide announcement bar on scroll down
    if (scrollY > 120) {
      nav.classList.add('hide-ticker');
      if (announcementBar) announcementBar.style.transform = 'translateY(-100%)';
    } else {
      nav.classList.remove('hide-ticker');
      if (announcementBar) announcementBar.style.transform = 'translateY(0)';
    }

    lastScrollY = scrollY;
  }, { passive: true });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when a link is clicked
    mobileOverlay.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SEARCH OVERLAY
   ============================================================ */
function initSearch() {
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchOpen = document.getElementById('search-icon');
  const searchClose = document.getElementById('search-close');

  if (!searchOverlay || !searchOpen) return;

  searchOpen.addEventListener('click', () => openSearchOverlay());

  if (searchClose) {
    searchClose.addEventListener('click', () => closeSearchOverlay());
  }

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearchOverlay();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('open')) {
      closeSearchOverlay();
    }
  });
}

function openSearchOverlay() {
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => { if (input) input.focus(); }, 300);
  }
}

function closeSearchOverlay() {
  const overlay = document.getElementById('search-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   CART SIDEBAR
   ============================================================ */
function initCartSidebar() {
  const cartIcon = document.getElementById('cart-icon');
  const cartClose = document.getElementById('cart-close');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (cartIcon) {
    cartIcon.addEventListener('click', () => openCartSidebar());
  }

  if (cartClose) {
    cartClose.addEventListener('click', () => closeCartSidebar());
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeCartSidebar();
      closeWishlistSidebar();
    });
  }

  window.renderCartSidebar = renderCartSidebar;
  renderCartSidebar();
}

function openCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartSidebar();
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartSidebar() {
  const body = document.getElementById('cart-sidebar-body');
  const footer = document.getElementById('cart-sidebar-footer');
  const headerTitle = document.querySelector('#cart-sidebar .sidebar-header h3');
  if (!body) return;

  const items = Cart.getItems();
  const count = Cart.getCount();

  if (headerTitle) {
    headerTitle.textContent = `YOUR CART (${count})`;
  }

  if (items.length === 0) {
    body.innerHTML = `
      <div class="sidebar-empty">
        <div class="empty-icon">🛍️</div>
        <p>Your cart is empty</p>
        <a href="shop.html" class="btn-primary" style="padding:12px 28px; font-size:11px;">SHOP NOW</a>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  body.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-qty">
          <button onclick="Cart.updateQuantity(${item.id}, '${item.size}', ${item.qty - 1})">−</button>
          <span>${item.qty}</span>
          <button onclick="Cart.updateQuantity(${item.id}, '${item.size}', ${item.qty + 1})">+</button>
        </div>
        <button class="cart-item-remove" onclick="Cart.removeItem(${item.id}, '${item.size}')">Remove</button>
      </div>
      <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('');

  // Update footer
  if (footer) {
    const subtotal = Cart.getSubtotal();
    const shipping = Cart.getShipping(subtotal);
    footer.innerHTML = `
      <div class="cart-subtotal">
        <span class="label">Subtotal</span>
        <span class="value">${formatPrice(subtotal)}</span>
      </div>
      <div class="cart-shipping-note">${shipping === 0 ? '🎉 You qualify for free shipping!' : `Shipping: ${formatPrice(shipping)} (Free above ₹999)`}</div>
      <a href="checkout.html" class="btn-primary">PROCEED TO CHECKOUT</a>
      <a href="cart.html" class="btn-ghost">VIEW FULL CART</a>
    `;
  }
}

/* ============================================================
   WISHLIST SIDEBAR
   ============================================================ */
function initWishlistSidebar() {
  const wishlistIcon = document.getElementById('wishlist-icon');
  const wishlistClose = document.getElementById('wishlist-close');

  if (wishlistIcon) {
    wishlistIcon.addEventListener('click', () => openWishlistSidebar());
  }

  if (wishlistClose) {
    wishlistClose.addEventListener('click', () => closeWishlistSidebar());
  }

  window.renderWishlistSidebar = renderWishlistSidebar;
  renderWishlistSidebar();
}

function openWishlistSidebar() {
  closeCartSidebar();
  const sidebar = document.getElementById('wishlist-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderWishlistSidebar();
}

function closeWishlistSidebar() {
  const sidebar = document.getElementById('wishlist-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function renderWishlistSidebar() {
  const body = document.getElementById('wishlist-sidebar-body');
  const headerTitle = document.querySelector('#wishlist-sidebar .sidebar-header h3');
  if (!body) return;

  const items = Wishlist.getItems();

  if (headerTitle) {
    headerTitle.textContent = `YOUR WISHLIST (${items.length})`;
  }

  if (items.length === 0) {
    body.innerHTML = `
      <div class="sidebar-empty">
        <div class="empty-icon">🤍</div>
        <p>No saved items yet</p>
        <a href="shop.html" class="btn-primary" style="padding:12px 28px; font-size:11px;">BROWSE PRODUCTS</a>
      </div>`;
    return;
  }

  body.innerHTML = items.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}" class="wishlist-item-img" loading="lazy">
      <div class="wishlist-item-details">
        <div class="wishlist-item-name">${item.name}</div>
        <div class="wishlist-item-price">${formatPrice(item.price)}</div>
        <div class="wishlist-item-actions">
          <button class="wishlist-add-cart" onclick="Cart.addItem({id:${item.id},name:'${item.name.replace(/'/g, "\\'")}',price:${item.price},image:'${item.image}',category:'${item.category}'}); closeWishlistSidebar(); openCartSidebar();">ADD TO CART</button>
          <button class="wishlist-remove" onclick="Wishlist.toggleItem({id:${item.id},name:'${item.name.replace(/'/g, "\\'")}',price:${item.price},image:'${item.image}'})">REMOVE</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   PRODUCT CARD RENDERING HELPER
   ============================================================ */
function createProductCardHTML(product) {
  const isWishlisted = Wishlist.isWishlisted(product.id);
  const badgeHTML = product.badge
    ? `<span class="product-badge ${product.badge === 'SALE' ? 'sale' : ''}">${product.badge}</span>`
    : '';

  return `
    <div class="product-card" data-category="${product.category}" data-price="${product.price}" data-id="${product.id}">
      <div class="product-image-wrapper">
        ${badgeHTML}
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}"
          onclick="event.stopPropagation(); Wishlist.toggleItem({id:${product.id},name:'${product.name.replace(/'/g, "\\'")}',price:${product.price},originalPrice:${product.originalPrice},image:'${product.image}',category:'${product.category}'})">
          ${isWishlisted ? '❤️' : '🤍'}
        </button>
        <a href="product.html?id=${product.id}">
          <img class="primary-img" src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        <div class="product-add-to-cart-overlay">
          <button onclick="event.stopPropagation(); Cart.addItem({id:${product.id},name:'${product.name.replace(/'/g, "\\'")}',price:${product.price},originalPrice:${product.originalPrice},image:'${product.image}',category:'${product.category}'})">ADD TO CART</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></p>
        <div class="product-price">
          <span class="current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `
            <span class="original">${formatPrice(product.originalPrice)}</span>
            <span class="discount-pct">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   SHOP PAGE FUNCTIONS
   ============================================================ */
function initShopPage() {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;

  // Check URL params for initial filter
  const catParam = getUrlParam('cat');
  let filteredProducts = [...products];

  if (catParam) {
    filteredProducts = products.filter(p => p.category === catParam);
    // Set active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === catParam);
    });
  }

  renderShopProducts(filteredProducts);

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.category;
      const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
      renderShopProducts(filtered);
    });
  });

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
      let filtered = activeCategory === 'all' ? [...products] : products.filter(p => p.category === activeCategory);

      switch (sortSelect.value) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => b.id - a.id);
          break;
        case 'popular':
          filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
          break;
      }

      renderShopProducts(filtered);
    });
  }
}

function renderShopProducts(productList) {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;

  if (productList.length === 0) {
    grid.innerHTML = '<div class="shop-empty">No products found in this category.</div>';
    return;
  }

  grid.innerHTML = productList.map(p => createProductCardHTML(p)).join('');
  Wishlist.updateHeartIcons();

  // Re-trigger GSAP animations
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(grid.querySelectorAll('.product-card'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
    );
  }
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
function initProductPage() {
  const productId = getUrlParam('id');
  if (!productId) { window.location.href = 'shop.html'; return; }

  const product = getProductById(productId);
  if (!product) { window.location.href = 'shop.html'; return; }

  // Set page title
  document.title = `${product.name} — PRIJO`;

  // Fill in product details
  const el = (id) => document.getElementById(id);

  // Breadcrumb
  const breadcrumb = el('product-breadcrumb');
  if (breadcrumb) breadcrumb.innerHTML = `<a href="index.html">Home</a><span class="separator">›</span><a href="shop.html">Shop</a><span class="separator">›</span>${product.name}`;

  // Main image
  const mainImg = el('gallery-main-img');
  if (mainImg) mainImg.src = product.image;

  // Thumbnails
  const thumbs = el('gallery-thumbs');
  if (thumbs) {
    const images = [product.image];
    thumbs.innerHTML = images.map((img, i) => `
      <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="document.getElementById('gallery-main-img').src='${img}'; document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
        <img src="${img}" alt="Thumbnail ${i + 1}" loading="lazy">
      </div>
    `).join('');
  }

  // Details
  if (el('product-detail-name')) el('product-detail-name').textContent = product.name;
  if (el('product-detail-category')) el('product-detail-category').textContent = product.category.toUpperCase();

  // Rating
  const stars = el('product-stars');
  if (stars) {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    stars.innerHTML = '★'.repeat(fullStars) + (halfStar ? '★' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
  }
  if (el('product-rating-text')) el('product-rating-text').textContent = `${product.rating} | ${product.reviews} reviews`;

  // Price
  const priceWrap = el('product-price-wrap');
  if (priceWrap) {
    let html = `<span class="current-price">${formatPrice(product.price)}</span>`;
    if (product.originalPrice) {
      const pct = Math.round((1 - product.price / product.originalPrice) * 100);
      html += `<span class="original-price">${formatPrice(product.originalPrice)}</span>`;
      html += `<span class="discount-pct">${pct}% OFF</span>`;
    }
    priceWrap.innerHTML = html;
  }

  // Description
  if (el('product-detail-desc')) el('product-detail-desc').textContent = product.description;

  // Sizes
  const sizeContainer = el('size-options');
  if (sizeContainer && product.sizes) {
    sizeContainer.innerHTML = product.sizes.map((s, i) =>
      `<button class="size-btn ${i === 2 ? 'active' : ''}" onclick="document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); window._selectedSize='${s}';">${s}</button>`
    ).join('');
    window._selectedSize = product.sizes[2] || product.sizes[0];
  }

  // Colors
  const colorContainer = el('color-options');
  if (colorContainer && product.colors) {
    colorContainer.innerHTML = product.colors.map((c, i) =>
      `<div class="color-swatch ${i === 0 ? 'active' : ''}" style="background:${c}" onclick="document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active');"></div>`
    ).join('');
  }

  // Quantity
  window._productQty = 1;
  const qtyValue = el('qty-value');
  if (qtyValue) qtyValue.textContent = '1';

  const qtyMinus = el('qty-minus');
  const qtyPlus = el('qty-plus');
  if (qtyMinus) qtyMinus.addEventListener('click', () => {
    if (window._productQty > 1) {
      window._productQty--;
      qtyValue.textContent = window._productQty;
    }
  });
  if (qtyPlus) qtyPlus.addEventListener('click', () => {
    window._productQty++;
    qtyValue.textContent = window._productQty;
  });

  // Add to cart button
  const addBtn = el('add-to-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      Cart.addItem(product, window._productQty, window._selectedSize);
      openCartSidebar();
    });
  }

  // Wishlist button
  const wishBtn = el('wishlist-btn');
  if (wishBtn) {
    const updateWishBtn = () => {
      const wishlisted = Wishlist.isWishlisted(product.id);
      wishBtn.innerHTML = wishlisted ? '❤️' : '🤍';
      wishBtn.classList.toggle('active', wishlisted);
    };
    updateWishBtn();
    wishBtn.addEventListener('click', () => {
      Wishlist.toggleItem(product);
      updateWishBtn();
    });
  }

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(ai => ai.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Related products
  const related = el('related-products-grid');
  if (related) {
    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
    related.innerHTML = relatedProducts.map(p => createProductCardHTML(p)).join('');
    Wishlist.updateHeartIcons();
  }
}

/* ============================================================
   CART PAGE
   ============================================================ */
function initCartPage() {
  window.renderCartPage = renderCartPage;
  renderCartPage();
}

function renderCartPage() {
  const container = document.getElementById('cart-page-container');
  if (!container) return;

  const items = Cart.getItems();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-page">
        <div class="empty-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="shop.html" class="btn-primary">START SHOPPING</a>
      </div>
    `;
    return;
  }

  const subtotal = Cart.getSubtotal();
  const shipping = Cart.getShipping(subtotal);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  container.innerHTML = `
    <div class="cart-items-section">
      <h1 class="cart-page-title">Shopping Cart</h1>
      <div class="cart-table-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>
      ${items.map(item => `
        <div class="cart-page-item">
          <div class="cart-page-item-info">
            <img src="${item.image}" alt="${item.name}" class="cart-page-item-img" loading="lazy">
            <div>
              <div class="cart-page-item-name">${item.name}</div>
              <div class="cart-page-item-meta">Size: ${item.size}</div>
            </div>
          </div>
          <div>${formatPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button onclick="Cart.updateQuantity(${item.id}, '${item.size}', ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="Cart.updateQuantity(${item.id}, '${item.size}', ${item.qty + 1})">+</button>
          </div>
          <div style="font-weight:600">${formatPrice(item.price * item.qty)}</div>
          <button class="cart-page-item-remove" onclick="Cart.removeItem(${item.id}, '${item.size}')">✕</button>
        </div>
      `).join('')}
    </div>
    <div class="order-summary">
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
      <div class="summary-row"><span>Taxes (5%)</span><span>${formatPrice(tax)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
      <form class="coupon-form" onsubmit="event.preventDefault(); showToast('Coupon applied!');">
        <input type="text" placeholder="Discount code" aria-label="Coupon code">
        <button type="submit">APPLY</button>
      </form>
      <a href="checkout.html" class="btn-primary">PROCEED TO CHECKOUT</a>
    </div>
  `;
}

/* ============================================================
   CHECKOUT PAGE
   ============================================================ */
function initCheckoutPage() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Render order summary
  renderCheckoutSummary();

  // Delivery options
  document.querySelectorAll('.delivery-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input[type="radio"]').checked = true;
      renderCheckoutSummary();
    });
  });

  // Payment methods
  document.querySelectorAll('.payment-method-header').forEach(header => {
    header.addEventListener('click', () => {
      const method = header.parentElement;
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
      method.classList.add('selected');
      method.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Card number formatting
  const cardInput = document.getElementById('card-number');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      val = val.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = val.substring(0, 19);
    });
  }

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateCheckoutForm()) {
      // Save order details to sessionStorage
      const orderData = {
        orderId: generateOrderId(),
        name: document.getElementById('checkout-name')?.value || '',
        email: document.getElementById('checkout-email')?.value || '',
        items: Cart.getItems(),
        total: Cart.getTotal(),
        address: document.getElementById('checkout-address1')?.value || '',
        city: document.getElementById('checkout-city')?.value || '',
        state: document.getElementById('checkout-state')?.value || '',
        pincode: document.getElementById('checkout-pincode')?.value || ''
      };
      
      // Save globally for Admin and Tracking
      const allOrders = JSON.parse(localStorage.getItem('prijo_all_orders')) || [];
      // Add current date and default 'Processing' status
      orderData.date = new Date().toISOString();
      orderData.status = 'Processing';
      orderData.paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'Online';
      allOrders.push(orderData);
      localStorage.setItem('prijo_all_orders', JSON.stringify(allOrders));

      sessionStorage.setItem('prijo_last_order', JSON.stringify(orderData));
      Cart.clear();
      window.location.href = 'payment.html';
    }
  });
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-summary-items');
  if (!container) return;

  const items = Cart.getItems();
  const subtotal = Cart.getSubtotal();
  const selectedDelivery = document.querySelector('.delivery-option.selected');
  let shippingCost = 0;
  if (selectedDelivery) {
    const val = selectedDelivery.dataset.cost;
    shippingCost = val === 'free' ? (subtotal >= 999 ? 0 : 49) : parseInt(val) || 0;
  }
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shippingCost + tax;

  container.innerHTML = `
    ${items.map(item => `
      <div class="cart-item" style="padding:12px 0;">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" style="width:50px;height:65px;" loading="lazy">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Size: ${item.size} × ${item.qty}</div>
        </div>
        <div class="cart-item-price" style="font-size:13px;">${formatPrice(item.price * item.qty)}</div>
      </div>
    `).join('')}
    <div class="summary-row" style="margin-top:16px;"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}</span></div>
    <div class="summary-row"><span>Taxes (5%)</span><span>${formatPrice(tax)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
  `;
}

function validateCheckoutForm() {
  let valid = true;
  const fields = [
    { id: 'checkout-name', validator: v => v.trim().length >= 2 },
    { id: 'checkout-email', validator: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'checkout-phone', validator: v => /^\d{10}$/.test(v.replace(/\D/g, '')) },
    { id: 'checkout-address1', validator: v => v.trim().length >= 5 },
    { id: 'checkout-city', validator: v => v.trim().length >= 2 },
    { id: 'checkout-state', validator: v => v.trim().length >= 2 },
    { id: 'checkout-pincode', validator: v => /^\d{6}$/.test(v) }
  ];

  fields.forEach(({ id, validator }) => {
    const el = document.getElementById(id);
    if (!el) return;
    const group = el.closest('.form-group');
    if (!validator(el.value)) {
      el.classList.add('error');
      if (group) group.classList.add('has-error');
      valid = false;
    } else {
      el.classList.remove('error');
      if (group) group.classList.remove('has-error');
    }
  });

  if (!valid) showToast('Please fill in all required fields correctly');
  return valid;
}

/* ============================================================
   PAYMENT SUCCESS PAGE
   ============================================================ */
function initPaymentPage() {
  const orderData = JSON.parse(sessionStorage.getItem('prijo_last_order') || '{}');

  const el = (id) => document.getElementById(id);

  if (el('order-id')) el('order-id').textContent = orderData.orderId || generateOrderId();
  if (el('order-name')) el('order-name').textContent = orderData.name || 'Customer';
  if (el('order-address-summary')) {
    el('order-address-summary').textContent = [orderData.address, orderData.city, orderData.state, orderData.pincode].filter(Boolean).join(', ') || 'Address on file';
  }
  
  if (el('track-order-btn') && orderData.orderId) {
    el('track-order-btn').href = `track.html?id=${orderData.orderId}`;
  }

  // Confetti
  createConfetti();

  // Toast
  setTimeout(() => showToast('📧 Confirmation sent to your email!'), 2000);
}

function createConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  const colors = ['#C9A96E', '#B5522A', '#27ae60', '#3498db', '#e74c3c', '#f39c12', '#9b59b6'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 8 + 4}px;
      height: ${Math.random() * 8 + 4}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      --duration: ${Math.random() * 2 + 2}s;
      --delay: ${Math.random() * 1.5}s;
    `;
    container.appendChild(confetti);
  }

  setTimeout(() => container.remove(), 5000);
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  // Check if already subscribed
  if (localStorage.getItem('prijo_subscribed')) {
    const btn = form.querySelector('button');
    if (btn) { btn.textContent = '✓ SUBSCRIBED'; btn.classList.add('subscribed'); }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showToast('Please enter a valid email address');
      return;
    }
    const btn = form.querySelector('button');
    if (btn) {
      btn.textContent = '✓ THANK YOU!';
      btn.classList.add('subscribed');
      localStorage.setItem('prijo_subscribed', 'true');
      showToast('Welcome to the PRIJO family! 🎉');
    }
  });
}

/* ============================================================
   CONTACT PAGE
   ============================================================ */
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // FAQ accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(ai => ai.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you! We\'ll get back to you within 24 hours.');
    form.reset();
  });
}

/* ============================================================
   WISHLIST PAGE
   ============================================================ */
function initWishlistPage() {
  window.renderWishlistPage = renderWishlistPage;
  renderWishlistPage();
}

function renderWishlistPage() {
  const grid = document.getElementById('wishlist-page-grid');
  if (!grid) return;

  const items = Wishlist.getItems();

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="cart-empty-page" style="grid-column:1/-1">
        <div class="empty-icon">🤍</div>
        <h2>Your Wishlist is Empty</h2>
        <p>Save items you love to come back to later.</p>
        <a href="shop.html" class="btn-primary">BROWSE PRODUCTS</a>
      </div>
    `;
    return;
  }

  // Build product cards from wishlist items
  grid.innerHTML = items.map(item => {
    const fullProduct = getProductById(item.id);
    if (fullProduct) {
      return createProductCardHTML(fullProduct);
    }
    return '';
  }).join('');

  Wishlist.updateHeartIcons();
}

/* ============================================================
   UPI DEEPLINK PAYMENT
   ============================================================ */
function startUPIPayment(app) {
  if (Cart.getItems().length === 0) {
    showToast('Your cart is empty');
    return;
  }
  if (!validateCheckoutForm()) return;

  const subtotal = Cart.getSubtotal();
  const selectedDelivery = document.querySelector('.delivery-option.selected');
  let shippingCost = 0;
  if (selectedDelivery) {
    const val = selectedDelivery.dataset.cost;
    shippingCost = val === 'free' ? (subtotal >= 999 ? 0 : 49) : parseInt(val) || 0;
  }
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shippingCost + tax;

  const basePhone = '6383480254';
  const name = 'Johnson Elumalai';
  const amount = total.toFixed(2);
  const note = 'PRIJO Order';
  
  // Specific App Intents
  let url = `upi://pay?pa=${basePhone}@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  
  if (app === 'phonepe') {
    url = `phonepe://pay?pa=${basePhone}@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  } else if (app === 'paytm') {
    url = `paytmmp://pay?pa=${basePhone}@paytm&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  }

  // Attempt to open the UPI app
  window.location.href = url;
  
  // Show processing UI
  const processBox = document.getElementById('upi-processing-box');
  if(processBox) {
    processBox.style.display = 'block';
  }

  // Automatic Verification Simulation
  // We simulate verification by waiting for the user to return to the browser
  let paymentVerified = false;

  const completePayment = () => {
    if (paymentVerified) return;
    paymentVerified = true;
    showToast('Payment verified successfully!');
    setTimeout(() => {
      document.getElementById('checkout-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 1000);
  };

  // Listener for mobile users returning from UPI app
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && processBox.style.display === 'block') {
      completePayment();
    }
  });

  // Fallback for desktop users (if deep link fails or they scan via QR manually)
  setTimeout(() => {
    if (processBox.style.display === 'block') {
      completePayment();
    }
  }, 10000);
}

/* ============================================================
   HOMEPAGE-SPECIFIC INIT
   ============================================================ */
function initHomepage() {
  // Render trending products
  const productsGrid = document.getElementById('trending-products-grid');
  if (productsGrid) {
    const trendingProducts = products.slice(0, 8);
    productsGrid.innerHTML = trendingProducts.map(p => createProductCardHTML(p)).join('');
    Wishlist.updateHeartIcons();
  }

  initNewsletter();
}
