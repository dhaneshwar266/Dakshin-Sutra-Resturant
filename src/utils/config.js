// Central configuration for Dakshin Sutra Cafe application
// Supports future backend API configuration via Vite environment variables

export const APP_CONFIG = {
  restaurant: {
    name: 'Dakshin Sutra Cafe',
    tagline: 'Dosa · Idli · Filter Coffee',
    cuisine: 'South Indian',
    address: 'Near Seepat Chowk, beside Laxmi Medical Hall, New Sarkanda, Sarkanda, Bilaspur, Chhattisgarh 495006',
    phone: '+91 62664 44862',
    phoneTel: 'tel:+916266444862',
    whatsappNumber: '916266444862',
    mapsUrl: 'https://maps.app.goo.gl/8LemBHKjRE9cwZ5K9',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=22.0973668,82.1457669&hl=en&z=16&output=embed',
    googleRating: {
      rating: 4.6,
      maxRating: 5.0,
      reviewCount: 288,
      source: 'Google Maps Business Listing',
    },
    timingsNotice: 'Listing indicates closing at ~10:00 PM. Daily hours may vary; visitors are advised to call or message to verify.',
    priceRange: '₹1–₹200 per person',
    services: ['Dine-in', 'Takeaway', 'WhatsApp Orders'],
  },
  // Future backend API endpoints
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
    timeoutMs: Number(import.meta.env.VITE_API_TIMEOUT_MS) || 10000,
  },
  storageKeys: {
    cart: 'dakshin_sutra_cart_v2',
  },
};
