/* ============================================================
   ShopNova — Complete JavaScript
   Carousel, Cart, Dropdowns, Animations, Products
   ============================================================ */

/* ── Product Data ──────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, brand: "Samsung", name: "Galaxy S24 Ultra 5G — 12GB RAM, 256GB", category: "Electronics",
    price: 89999, original: 129999, rating: 4.7, reviews: 8432,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
    badges: ["deal"], delivery: "FREE delivery tomorrow", deal: 72, prime: true
  },
  {
    id: 2, brand: "Apple", name: "MacBook Air M3 — 8GB RAM, 256GB SSD", category: "Electronics",
    price: 114900, original: 134900, rating: 4.9, reviews: 5213,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    badges: ["hot"], delivery: "FREE delivery", deal: 45, prime: true
  },
  {
    id: 3, brand: "Nike", name: "Air Max 270 Running Shoes — Men's", category: "Fashion",
    price: 6795, original: 11995, rating: 4.5, reviews: 12098,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    badges: ["deal"], delivery: "FREE delivery", deal: 60, prime: false
  },
  {
    id: 4, brand: "Levi's", name: "501 Original Fit Jeans — Classic Blue", category: "Fashion",
    price: 2999, original: 5999, rating: 4.3, reviews: 22341,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    badges: [], delivery: "₹40 delivery fee", deal: 0, prime: false
  },
  {
    id: 5, brand: "Instant Pot", name: "Duo 7-in-1 Electric Pressure Cooker, 6Qt", category: "Home",
    price: 7499, original: 12999, rating: 4.6, reviews: 34122,
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    badges: ["deal"], delivery: "FREE delivery", deal: 42, prime: true
  },
  {
    id: 6, brand: "Sony", name: "WH-1000XM5 Wireless Noise Cancelling Headphones", category: "Electronics",
    price: 24990, original: 34990, rating: 4.8, reviews: 15678,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    badges: ["new", "prime"], delivery: "FREE Prime delivery", deal: 0, prime: true
  },
  {
    id: 7, brand: "Dyson", name: "V15 Detect Cordless Vacuum Cleaner", category: "Home",
    price: 49900, original: 65900, rating: 4.7, reviews: 7890,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    badges: ["deal"], delivery: "FREE delivery", deal: 24, prime: true
  },
  {
    id: 8, brand: "The Ordinary", name: "Hyaluronic Acid 2% + B5 — 30ml (Pack of 3)", category: "Beauty",
    price: 1299, original: 2199, rating: 4.4, reviews: 43211,
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    badges: ["hot"], delivery: "₹40 delivery fee", deal: 0, prime: false
  },
  {
    id: 9, brand: "Kindle", name: "Kindle Paperwhite (16GB) — Adjustable Warm Light", category: "Electronics",
    price: 14999, original: 18999, rating: 4.6, reviews: 9823,
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    badges: ["deal"], delivery: "FREE delivery", deal: 21, prime: true
  },
  {
    id: 10, brand: "Adidas", name: "Ultraboost 23 Running Shoes — Women's", category: "Sports",
    price: 13499, original: 19999, rating: 4.5, reviews: 6754,
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
    badges: ["new"], delivery: "FREE delivery", deal: 0, prime: false
  },
  {
    id: 11, brand: "LEGO", name: "Technic NASA Artemis Space Launch System — 3601pcs", category: "Toys",
    price: 18999, original: 24999, rating: 4.9, reviews: 2134,
    img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&q=80",
    badges: ["new", "hot"], delivery: "FREE delivery", deal: 0, prime: true
  },
  {
    id: 12, brand: "Philips", name: "AirFryer XXL Smart 7.3L — 2000W Digital", category: "Home",
    price: 11999, original: 18999, rating: 4.5, reviews: 18432,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    badges: ["deal"], delivery: "FREE delivery", deal: 37, prime: true
  }
];

/* ── Cart State ─────────────────────────────────────────────────── */
let cart = [];

/* ── Mega Menu Data ─────────────────────────────────────────────── */
const MEGA_DATA = {
  trending: {
    cols: [
      { title: "Top Picks", links: ["Today's Deals","Bestsellers","New Releases","Movers & Shakers"] },
      { title: "By Category", links: ["Electronics","Fashion","Home & Kitchen","Books"] }
    ]
  },
  electronics: {
    cols: [
      { title: "Mobiles & Tablets", links: ["Smartphones","Tablets","Smart Watches","Earbuds","Chargers & Cables"] },
      { title: "Computers", links: ["Laptops","Desktops","Monitors","Keyboards & Mice","SSDs & Storage"] }
    ]
  },
  fashion: {
    cols: [
      { title: "Men's Fashion", links: ["T-Shirts","Jeans","Formal Shirts","Ethnic Wear","Shoes"] },
      { title: "Women's Fashion", links: ["Sarees","Kurtis","Dresses","Handbags","Footwear"] }
    ]
  },
  home: {
    cols: [
      { title: "Kitchen", links: ["Cookware","Air Fryers","Blenders","Coffee Makers","Storage"] },
      { title: "Home Décor", links: ["Lighting","Bedding","Wall Art","Rugs","Clocks"] }
    ]
  },
  books: {
    cols: [
      { title: "Books", links: ["Fiction","Non-Fiction","Children's Books","Textbooks","Comics"] },
      { title: "Media", links: ["Music CDs","Vinyl Records","Movies & TV","Video Games","Software"] }
    ]
  },
  sports: {
    cols: [
      { title: "Fitness", links: ["Gym Equipment","Yoga","Cycling","Swimming","Running"] },
      { title: "Outdoor", links: ["Camping","Trekking","Cricket","Football","Badminton"] }
    ]
  },
  beauty: {
    cols: [
      { title: "Skincare", links: ["Moisturisers","Sunscreen","Serums","Face Masks","Eye Cream"] },
      { title: "Hair Care", links: ["Shampoo","Conditioner","Hair Oil","Styling","Colour"] }
    ]
  },
  grocery: {
    cols: [
      { title: "Staples", links: ["Rice & Grains","Pulses","Oils & Ghee","Flour","Sugar & Salt"] },
      { title: "Packaged", links: ["Snacks","Beverages","Breakfast","Dairy","Frozen Food"] }
    ]
  }
};

/* ══════════════════════════════════════════════════════════════════
   UTILITY FUNCTIONS
══════════════════════════════════════════════════════════════════ */
function formatPrice(n) { return "₹" + n.toLocaleString("en-IN"); }

function stars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= .5;
  let html = "";
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += '<i class="fa-regular fa-star"></i>';
  return html;
}

function showToast(msg, type = "info") {
  const c = document.getElementById("toastContainer");
  const t = document.createElement("div");
  const icon = type === "success" ? "fa-circle-check" : type === "error" ? "fa-circle-xmark" : "fa-circle-info";
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 350); }, 2800);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ══════════════════════════════════════════════════════════════════
   PRODUCT CARD RENDERER
══════════════════════════════════════════════════════════════════ */
function renderCard(p) {
  const saving = p.original - p.price;
  const savePct = Math.round((saving / p.original) * 100);

  const badgeHtml = [
    p.badges.includes("deal")  ? '<span class="badge badge-deal">Deal</span>'  : "",
    p.badges.includes("new")   ? '<span class="badge badge-new">New</span>'   : "",
    p.badges.includes("prime") ? '<span class="badge badge-prime">Prime</span>': "",
    p.badges.includes("hot")   ? '<span class="badge badge-hot">🔥 Hot</span>' : "",
  ].join("");

  const dealBarHtml = p.deal > 0 ? `
    <div class="card-deal-bar">
      <div class="deal-bar-label">${p.deal}% claimed</div>
      <div class="deal-bar-track"><div class="deal-bar-fill" style="width:${p.deal}%"></div></div>
    </div>` : "";

  const primeHtml = p.prime ? ' &nbsp;<i class="fa-solid fa-crown" style="color:#0070f3;font-size:.72rem"></i>' : "";

  return `
    <div class="product-card${p.deal > 0 ? " deal-card" : ""}" data-id="${p.id}">
      <div class="card-badges">${badgeHtml}</div>
      <button class="card-wishlist" onclick="toggleWishlist(this, ${p.id})" title="Wishlist">
        <i class="fa-${isWishlisted(p.id) ? "solid" : "regular"} fa-heart"></i>
      </button>
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}${primeHtml}</div>
        <div class="card-title">${p.name}</div>
        <div class="card-stars">
          <span class="stars">${stars(p.rating)}</span>
          <span class="star-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="card-price-row">
          <span class="price-current">${formatPrice(p.price)}</span>
          <span class="price-original">${formatPrice(p.original)}</span>
          ${savePct > 0 ? `<span class="price-save">${savePct}% off</span>` : ""}
        </div>
        ${dealBarHtml}
        <div class="card-delivery"><i class="fa-solid fa-truck-fast"></i> ${p.delivery}</div>
        <div class="card-actions">
          <button class="btn-cart" onclick="addToCart(${p.id})">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn-buy" onclick="buyNow(${p.id})">
            Buy Now
          </button>
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════════════
   POPULATE DEALS
══════════════════════════════════════════════════════════════════ */
function populateDeals() {
  const dealProducts = PRODUCTS.filter(p => p.deal > 0);
  document.getElementById("dealsGrid").innerHTML = dealProducts.map(renderCard).join("");
}

/* ══════════════════════════════════════════════════════════════════
   POPULATE FEATURED (horizontal scroll)
══════════════════════════════════════════════════════════════════ */
function populateFeatured() {
  const featured = [...PRODUCTS].sort(() => .5 - Math.random());
  document.getElementById("featuredTrack").innerHTML = featured.map(renderCard).join("");
}

/* ══════════════════════════════════════════════════════════════════
   POPULATE RECOMMENDATIONS
══════════════════════════════════════════════════════════════════ */
function populateRecommendations() {
  const recs = [...PRODUCTS].sort((a, b) => b.rating - a.rating);
  document.getElementById("recommendGrid").innerHTML = recs.map(renderCard).join("");
}

/* ══════════════════════════════════════════════════════════════════
   HORIZONTAL SCROLL (Featured)
══════════════════════════════════════════════════════════════════ */
let featOffset = 0;
const CARD_W   = 238; // card width + gap

function scrollFeatured(dir) {
  const track   = document.getElementById("featuredTrack");
  const visible = track.parentElement.clientWidth;
  const maxOff  = (track.children.length * CARD_W) - visible;
  featOffset = Math.max(0, Math.min(maxOff, featOffset + dir * CARD_W * 2));
  track.style.transform = `translateX(-${featOffset}px)`;
}

document.getElementById("featPrev").addEventListener("click", () => scrollFeatured(-1));
document.getElementById("featNext").addEventListener("click", () => scrollFeatured(1));

/* ══════════════════════════════════════════════════════════════════
   HERO CAROUSEL
══════════════════════════════════════════════════════════════════ */
let currentSlide = 0;
let carouselInterval;
let progressInterval;
let progressValue = 0;

const track    = document.getElementById("carouselTrack");
const dotsWrap = document.getElementById("carouselDots");
const progress = document.getElementById("carouselProgress");
const TOTAL    = track.children.length;
const DURATION = 5000; // ms per slide

function buildDots() {
  dotsWrap.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const d = document.createElement("button");
    d.className = "carousel-dot" + (i === 0 ? " active" : "");
    d.setAttribute("aria-label", `Slide ${i + 1}`);
    d.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(d);
  }
}

function updateDots() {
  dotsWrap.querySelectorAll(".carousel-dot").forEach((d, i) => {
    d.classList.toggle("active", i === currentSlide);
  });
}

function goTo(idx) {
  currentSlide = (idx + TOTAL) % TOTAL;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
  resetProgress();
}

function next() { goTo(currentSlide + 1); }
function prev() { goTo(currentSlide - 1); }

function resetProgress() {
  clearInterval(progressInterval);
  progressValue = 0;
  progress.style.width = "0%";
  progress.style.transition = "none";
  requestAnimationFrame(() => {
    progress.style.transition = `width ${DURATION}ms linear`;
    progress.style.width = "100%";
    progressValue = 100;
  });
}

function startAuto() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(next, DURATION);
  resetProgress();
}

document.getElementById("carouselNext").addEventListener("click", () => { next(); clearInterval(carouselInterval); startAuto(); });
document.getElementById("carouselPrev").addEventListener("click", () => { prev(); clearInterval(carouselInterval); startAuto(); });

// Pause on hover
const carouselEl = document.querySelector(".carousel-wrapper");
carouselEl.addEventListener("mouseenter", () => { clearInterval(carouselInterval); progress.style.animationPlayState = "paused"; });
carouselEl.addEventListener("mouseleave", startAuto);

// Touch/swipe support
let touchStartX = 0;
carouselEl.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
carouselEl.addEventListener("touchend", e => {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
});

buildDots();
startAuto();

/* ══════════════════════════════════════════════════════════════════
   COUNTDOWN TIMER
══════════════════════════════════════════════════════════════════ */
let hours = 4, mins = 32, secs = 0;

function tickCountdown() {
  secs--;
  if (secs < 0) { secs = 59; mins--; }
  if (mins < 0) { mins = 59; hours--; }
  if (hours < 0) { hours = 0; mins = 0; secs = 0; }

  const hEl = document.getElementById("cdHours");
  const mEl = document.getElementById("cdMins");
  const sEl = document.getElementById("cdSecs");

  const pad = n => String(n).padStart(2, "0");

  if (sEl.textContent !== pad(secs)) {
    sEl.classList.add("flip");
    sEl.textContent = pad(secs);
    sEl.addEventListener("animationend", () => sEl.classList.remove("flip"), { once: true });
  }
  if (mEl.textContent !== pad(mins)) {
    mEl.classList.add("flip");
    mEl.textContent = pad(mins);
    mEl.addEventListener("animationend", () => mEl.classList.remove("flip"), { once: true });
  }
  hEl.textContent = pad(hours);
}
setInterval(tickCountdown, 1000);

/* ══════════════════════════════════════════════════════════════════
   CART SYSTEM
══════════════════════════════════════════════════════════════════ */
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }

function addToCart(id, fromBuy = false) {
  const p = getProduct(id);
  if (!p) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  updateCartUI();
  if (!fromBuy) showToast(`<strong>${p.name.substring(0, 38)}…</strong> added to cart!`, "success");
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  renderMiniCart();
}

function buyNow(id) {
  addToCart(id, true);
  showToast("Redirecting to checkout… (demo)", "info");
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const countEls = document.querySelectorAll("#cartCount, #floatingCartCount");
  countEls.forEach(el => {
    el.textContent = total;
    el.classList.add("bump");
    setTimeout(() => el.classList.remove("bump"), 400);
  });
  renderMiniCart();
}

function renderMiniCart() {
  const container = document.getElementById("miniCartItems");
  const footer    = document.getElementById("miniCartFooter");
  const subtotal  = document.getElementById("mcSubtotal");

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fa-solid fa-cart-shopping" style="font-size:2.5rem;opacity:.2"></i>
        <p>Your cart is empty</p>
        <span>Add items to get started</span>
      </div>`;
    footer.style.display = "none";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return "";
    total += p.price * item.qty;
    return `
      <div class="mini-cart-item">
        <img src="${p.img}" alt="${p.name}" class="mc-item-img" />
        <div class="mc-item-info">
          <div class="mc-item-name">${p.name}</div>
          <div class="mc-item-price">${formatPrice(p.price)}</div>
          <div class="mc-item-qty">Qty: ${item.qty}</div>
        </div>
        <button class="mc-item-remove" onclick="removeFromCart(${p.id})" title="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>`;
  }).join("");

  subtotal.textContent = formatPrice(total);
  footer.style.display = "block";
}

/* ══════════════════════════════════════════════════════════════════
   WISHLIST
══════════════════════════════════════════════════════════════════ */
let wishlist = new Set();
function isWishlisted(id) { return wishlist.has(id); }
function toggleWishlist(btn, id) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    btn.classList.remove("active");
    showToast("Removed from wishlist");
  } else {
    wishlist.add(id);
    btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    btn.classList.add("active");
    showToast("Added to wishlist ❤️", "success");
  }
}

/* ══════════════════════════════════════════════════════════════════
   DROPDOWN MANAGEMENT
══════════════════════════════════════════════════════════════════ */
function closeAllDropdowns(except = null) {
  ["locationBtn","langBtn","accountBtn","cartBtn","allMenuBtn"].forEach(id => {
    const el = document.getElementById(id);
    if (el && id !== except) el.classList.remove("open");
  });
}

function toggleDropdown(id, e) {
  e && e.stopPropagation();
  const el = document.getElementById(id);
  if (!el) return;
  const wasOpen = el.classList.contains("open");
  closeAllDropdowns();
  if (!wasOpen) el.classList.add("open");
}

document.getElementById("locationBtn")?.addEventListener("click", e => toggleDropdown("locationBtn", e));
document.getElementById("langBtn")?.addEventListener("click",      e => toggleDropdown("langBtn", e));
document.getElementById("accountBtn")?.addEventListener("click",   e => toggleDropdown("accountBtn", e));
document.getElementById("cartBtn")?.addEventListener("click",      e => toggleDropdown("cartBtn", e));
document.getElementById("allMenuBtn")?.addEventListener("click",   e => toggleDropdown("allMenuBtn", e));

document.addEventListener("click", closeAllDropdowns);

/* ── Mega Menu categories ── */
document.querySelectorAll(".mega-cat").forEach(cat => {
  cat.addEventListener("mouseenter", () => {
    document.querySelectorAll(".mega-cat").forEach(c => c.classList.remove("active"));
    cat.classList.add("active");
    const key  = cat.dataset.cat;
    const data = MEGA_DATA[key];
    const megaContent = document.querySelector(".mega-content");
    if (!data || !megaContent) return;
    megaContent.innerHTML = data.cols.map(col => `
      <div style="margin-bottom:18px">
        <div class="mega-col-title">${col.title}</div>
        <div class="mega-links">${col.links.map(l => `<a href="#" class="mega-link">${l}</a>`).join("")}</div>
      </div>`).join("");
  });
});

/* ── Language items ── */
document.querySelectorAll(".lang-item").forEach(item => {
  item.addEventListener("click", e => {
    e.stopPropagation();
    document.querySelectorAll(".lang-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    document.querySelector(".lang-label").textContent = item.textContent.trim().substring(0, 2).toUpperCase();
    closeAllDropdowns();
  });
});

/* ── Location city ── */
function setCity(city) {
  document.querySelector(".loc-city").textContent = city;
  closeAllDropdowns();
  showToast(`Delivery location set to ${city}`, "success");
}

/* ══════════════════════════════════════════════════════════════════
   SEARCH SUGGESTIONS
══════════════════════════════════════════════════════════════════ */
const SUGGESTIONS = [
  "Samsung Galaxy", "iPhone 15 Pro", "MacBook Air M3", "Sony WH-1000XM5",
  "Nike Air Max", "Levi's Jeans", "Instant Pot", "Dyson Vacuum",
  "Kindle Paperwhite", "LEGO Technic", "Adidas Ultraboost", "Air Fryer"
];

const searchInput   = document.getElementById("searchInput");
const searchSuggest = document.getElementById("searchSuggestions");

searchInput?.addEventListener("input", function () {
  const q = this.value.trim().toLowerCase();
  if (!q) { searchSuggest.classList.remove("open"); return; }
  const matches = SUGGESTIONS.filter(s => s.toLowerCase().includes(q));
  if (!matches.length) { searchSuggest.classList.remove("open"); return; }
  searchSuggest.innerHTML = matches.map(s =>
    `<div class="suggestion-item" onclick="selectSuggestion('${s}')">
      <i class="fa-solid fa-magnifying-glass"></i> ${s}
    </div>`).join("");
  searchSuggest.classList.add("open");
});

searchInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") doSearch();
  if (e.key === "Escape") searchSuggest.classList.remove("open");
});

document.addEventListener("click", e => {
  if (!e.target.closest(".search-box")) searchSuggest.classList.remove("open");
});

function selectSuggestion(val) {
  searchInput.value = val;
  searchSuggest.classList.remove("open");
  doSearch();
}

function doSearch() {
  const q = searchInput?.value.trim();
  if (!q) { showToast("Please enter a search term", "error"); return; }
  showToast(`Searching for "${q}"…`, "info");
  searchSuggest.classList.remove("open");
}

/* ══════════════════════════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════════════════════════ */
const mobileMenu    = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const hamburger     = document.getElementById("mobileHamburger");

function openMobileMenu() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("show");
  hamburger.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("show");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}

hamburger?.addEventListener("click", e => {
  e.stopPropagation();
  mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
});
document.getElementById("mobileMenuClose")?.addEventListener("click", closeMobileMenu);
mobileOverlay?.addEventListener("click", closeMobileMenu);

/* ══════════════════════════════════════════════════════════════════
   NAVBAR SCROLL BEHAVIOUR
══════════════════════════════════════════════════════════════════ */
let lastScroll = 0;
const navbar   = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const cur = window.scrollY;
  navbar.classList.toggle("scrolled", cur > 10);
  lastScroll = cur;
});

/* ══════════════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll(".cat-card, .product-card, .stat-card");
  els.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), idx * 55);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════════════════════════
   NEWSLETTER SUBMIT
══════════════════════════════════════════════════════════════════ */
document.querySelector(".nl-btn")?.addEventListener("click", function () {
  const inp = document.querySelector(".nl-input");
  if (!inp.value.includes("@")) {
    showToast("Please enter a valid email address", "error");
    inp.style.borderColor = "#ef4444";
    setTimeout(() => inp.style.borderColor = "", 1500);
    return;
  }
  showToast("🎉 You're subscribed! Welcome to ShopNova.", "success");
  inp.value = "";
});

/* ══════════════════════════════════════════════════════════════════
   DEAL PROGRESS BARS ANIMATION
══════════════════════════════════════════════════════════════════ */
function animateDealBars() {
  const bars = document.querySelectorAll(".deal-bar-fill");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = e.target.style.width;
        e.target.style.width = "0%";
        requestAnimationFrame(() => {
          setTimeout(() => { e.target.style.width = target; }, 100);
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
}

/* ══════════════════════════════════════════════════════════════════
   FLOATING CART
══════════════════════════════════════════════════════════════════ */
document.getElementById("floatingCart")?.addEventListener("click", () => {
  toggleDropdown("cartBtn");
  scrollToSection("hero"); // scroll up to show mini cart
});

/* ══════════════════════════════════════════════════════════════════
   STAGGER ANIMATE CARDS ON LOAD
══════════════════════════════════════════════════════════════════ */
function staggerAnimate(selector, baseDelay = 60) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.animationDelay = `${i * baseDelay}ms`;
    el.style.opacity = "0";
    el.style.animation = `pageIn .5s ease ${i * baseDelay}ms both`;
  });
}

/* inject pageIn keyframe */
const styleEl = document.createElement("style");
styleEl.textContent = `@keyframes pageIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(styleEl);

/* ══════════════════════════════════════════════════════════════════
   INITIALISE
══════════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  populateDeals();
  populateFeatured();
  populateRecommendations();

  // init mega menu with trending
  document.querySelector(".mega-cat[data-cat='trending']")?.dispatchEvent(new Event("mouseenter"));

  requestAnimationFrame(() => {
    initReveal();
    animateDealBars();
    staggerAnimate(".cat-card", 70);
  });
});
