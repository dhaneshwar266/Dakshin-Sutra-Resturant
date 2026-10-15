// Order Management Service
// Handles client-side order validation, message formatting, and WhatsApp dispatch
// Defines boundaries for future backend order API (e.g., POS / KDS integration)

import { generateOrderWhatsAppUrl } from '../utils/whatsapp.js';
import { calculateCartSubtotal } from '../utils/cart.js';

/**
 * Creates and formats an order for WhatsApp dispatch
 * @param {Array} cartItems - items in the cart
 * @returns {Object} { success, url, error, orderSummary }
 */
export const dispatchOrder = (cartItems = []) => {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return {
      success: false,
      error: 'Cart is empty. Please add items before placing an order.',
    };
  }

  const subtotal = calculateCartSubtotal(cartItems);
  const whatsappUrl = generateOrderWhatsAppUrl(cartItems, subtotal);

  const orderSummary = {
    itemsCount: cartItems.length,
    subtotal,
    timestamp: new Date().toISOString(),
    items: cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      lineTotal: item.price * item.quantity,
    })),
  };

  return {
    success: true,
    whatsappUrl,
    orderSummary,
  };
};
