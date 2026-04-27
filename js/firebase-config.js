/* ============================================================
   PRIJO — Firebase Integration (firebase-config.js)
   Shared Firebase config for both Admin App and Main Website.
   Uses Firebase Compat CDN (no bundler required).
   ============================================================ */

// Firebase Config from the user's Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAUrHa_oYFnKH-kwBXO2w5kVYpEcIRWxOw",
  authDomain: "prijo-60f29.firebaseapp.com",
  projectId: "prijo-60f29",
  storageBucket: "prijo-60f29.firebasestorage.app",
  messagingSenderId: "181331902685",
  appId: "1:181331902685:web:e270698b49a346a3695b34"
};

// Initialize Firebase (guard against double-init)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firestore
const db = firebase.firestore();

// ---- Firestore Helper Functions ----

const FireDB = {
  // --- PRODUCTS ---
  async getCustomProducts() {
    try {
      const snapshot = await db.collection('products').orderBy('createdAt', 'desc').get();
      return snapshot.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
    } catch (e) {
      console.error('FireDB.getCustomProducts error:', e);
      return [];
    }
  },

  async addProduct(productData) {
    try {
      productData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      const docRef = await db.collection('products').add(productData);
      return docRef.id;
    } catch (e) {
      console.error('FireDB.addProduct error:', e);
      return null;
    }
  },

  async deleteProduct(docId) {
    try {
      await db.collection('products').doc(docId).delete();
      return true;
    } catch (e) {
      console.error('FireDB.deleteProduct error:', e);
      return false;
    }
  },

  // --- ORDERS ---
  async getAllOrders() {
    try {
      const snapshot = await db.collection('orders').orderBy('date', 'desc').get();
      return snapshot.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
    } catch (e) {
      console.error('FireDB.getAllOrders error:', e);
      return [];
    }
  },

  async addOrder(orderData) {
    try {
      const docRef = await db.collection('orders').add(orderData);
      return docRef.id;
    } catch (e) {
      console.error('FireDB.addOrder error:', e);
      return null;
    }
  },

  async updateOrderStatus(docId, newStatus) {
    try {
      await db.collection('orders').doc(docId).update({ status: newStatus });
      return true;
    } catch (e) {
      console.error('FireDB.updateOrderStatus error:', e);
      return false;
    }
  },

  // --- SUB-CATEGORIES ---
  async getSubCategories() {
    try {
      const doc = await db.collection('settings').doc('subcategories').get();
      return doc.exists ? doc.data() : {};
    } catch (e) {
      console.error('FireDB.getSubCategories error:', e);
      return {};
    }
  },

  async saveSubCategories(data) {
    try {
      await db.collection('settings').doc('subcategories').set(data);
      return true;
    } catch (e) {
      console.error('FireDB.saveSubCategories error:', e);
      return false;
    }
  }
};
