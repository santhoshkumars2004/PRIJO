/* ============================================================
   PRIJO — Wishlist Logic (wishlist.js)
   localStorage-based wishlist with toggle/render
   ============================================================ */

const Wishlist = (() => {
  const STORAGE_KEY = 'prijo_wishlist';

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
    updateHeartIcons();
    if (typeof window.renderWishlistSidebar === 'function') window.renderWishlistSidebar();
    if (typeof window.renderWishlistPage === 'function') window.renderWishlistPage();
  }

  function toggleItem(product) {
    let items = getItems();
    const index = items.findIndex(item => item.id === product.id);
    if (index > -1) {
      items.splice(index, 1);
      showToast(`${product.name} removed from wishlist`);
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice || null,
        image: product.image,
        category: product.category || ''
      });
      showToast(`${product.name} added to wishlist`);
    }
    saveItems(items);
  }

  function removeItem(id) {
    let items = getItems();
    items = items.filter(item => item.id !== id);
    saveItems(items);
  }

  function isWishlisted(id) {
    return getItems().some(item => item.id === id);
  }

  function getCount() {
    return getItems().length;
  }

  function updateBadge() {
    const count = getCount();
    document.querySelectorAll('.wishlist-badge').forEach(badge => {
      badge.textContent = count;
      badge.classList.toggle('visible', count > 0);
    });
  }

  function updateHeartIcons() {
    document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
      const id = parseInt(btn.dataset.productId);
      if (isWishlisted(id)) {
        btn.classList.add('active');
        btn.innerHTML = '❤️';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '🤍';
      }
    });
  }

  return {
    getItems,
    toggleItem,
    removeItem,
    isWishlisted,
    getCount,
    updateBadge,
    updateHeartIcons
  };
})();
