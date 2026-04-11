/* ============================================================
   PRIJO — Cart Logic (cart.js)
   localStorage-based cart with add/remove/update/render
   ============================================================ */

const Cart = (() => {
  const STORAGE_KEY = 'prijo_cart';

  function getItems() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateBadge();
    if (typeof window.renderCartSidebar === 'function') window.renderCartSidebar();
    if (typeof window.renderCartPage === 'function') window.renderCartPage();
  }

  function addItem(product, qty = 1, size = 'M') {
    const items = getItems();
    const existing = items.find(item => item.id === product.id && item.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice || null,
        image: product.image,
        category: product.category || '',
        size: size,
        qty: qty
      });
    }
    saveItems(items);
    showToast(`${product.name} added to cart`);
  }

  function removeItem(id, size) {
    let items = getItems();
    items = items.filter(item => !(item.id === id && item.size === size));
    saveItems(items);
  }

  function updateQuantity(id, size, newQty) {
    const items = getItems();
    const item = items.find(i => i.id === id && i.size === size);
    if (item) {
      if (newQty <= 0) {
        removeItem(id, size);
        return;
      }
      item.qty = newQty;
      saveItems(items);
    }
  }

  function getCount() {
    return getItems().reduce((sum, item) => sum + item.qty, 0);
  }

  function getSubtotal() {
    return getItems().reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  function getShipping(subtotal) {
    if (subtotal >= 999) return 0;
    return 49;
  }

  function getTotal() {
    const sub = getSubtotal();
    return sub + getShipping(sub);
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY);
    updateBadge();
    if (typeof window.renderCartSidebar === 'function') window.renderCartSidebar();
    if (typeof window.renderCartPage === 'function') window.renderCartPage();
  }

  function updateBadge() {
    const count = getCount();
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.classList.toggle('visible', count > 0);
    });
  }

  function formatPrice(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  return {
    getItems,
    addItem,
    removeItem,
    updateQuantity,
    getCount,
    getSubtotal,
    getShipping,
    getTotal,
    clear,
    updateBadge,
    formatPrice
  };
})();

/* Toast notification */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
