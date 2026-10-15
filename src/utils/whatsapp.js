// WhatsApp Integration Utilities for Dakshin Sutra Cafe, Bilaspur

export const RESTAURANT_PHONE = '+91 62664 44862';
export const RESTAURANT_PHONE_TEL = 'tel:+916266444862';
export const RESTAURANT_WHATSAPP_NUMBER = '916266444862';
export const RESTAURANT_ADDRESS = 'Near Seepat Chowk, beside Laxmi Medical Hall, New Sarkanda, Sarkanda, Bilaspur, Chhattisgarh 495006';
export const GOOGLE_MAPS_SEARCH_URL = 'https://maps.app.goo.gl/8LemBHKjRE9cwZ5K9';
export const GOOGLE_MAPS_EMBED_URL = 'https://maps.google.com/maps?q=22.0973668,82.1457669&hl=en&z=16&output=embed';

/**
 * Generates official wa.me URL for ordering food
 * @param {Array} cartItems - items with name, price, quantity
 * @param {number} subtotal - total price
 * @returns {string} wa.me URL
 */
export const generateOrderWhatsAppUrl = (cartItems, subtotal) => {
  if (!cartItems || cartItems.length === 0) return '';

  const itemLines = cartItems.map((item) => {
    const lineTotal = item.price * item.quantity;
    return `${item.quantity} × ${item.name} — ₹${item.price} each (₹${lineTotal})`;
  }).join('\n');

  const message = `Hello Dakshin Sutra Cafe! I would like to place an order.\n\n${itemLines}\n\nSubtotal: ₹${subtotal}\n\nPlease confirm availability and the order.`;

  return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates official wa.me URL for table reservation request
 * @param {Object} reservationData - { name, phone, date, time, guests, specialRequests }
 * @returns {string} wa.me URL
 */
export const generateReservationWhatsAppUrl = ({ name, phone, date, time, guests, specialRequests }) => {
  let message = `Hello Dakshin Sutra Cafe! I would like to request a table reservation.\n\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone}\n` +
    `• Date: ${date}\n` +
    `• Time: ${time}\n` +
    `• Number of Guests: ${guests}\n`;

  if (specialRequests && specialRequests.trim()) {
    message += `• Special Requests: ${specialRequests.trim()}\n`;
  }

  message += `\nPlease confirm table availability. Thank you!`;

  return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * General inquiry WhatsApp URL
 */
export const generateGeneralWhatsAppUrl = () => {
  const message = 'Hello Dakshin Sutra Cafe! I have an inquiry regarding your menu and timings.';
  return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
