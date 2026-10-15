// Pure utility functions for cart calculations and persistence

/**
 * Calculates line total for an item
 */
export const calculateLineTotal = (item) => {
  if (!item || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
    return 0;
  }
  return item.price * item.quantity;
};

/**
 * Calculates cart subtotal
 */
export const calculateCartSubtotal = (cartItems = []) => {
  if (!Array.isArray(cartItems)) return 0;
  return cartItems.reduce((acc, item) => acc + calculateLineTotal(item), 0);
};

/**
 * Calculates total number of items in cart
 */
export const calculateTotalItemCount = (cartItems = []) => {
  if (!Array.isArray(cartItems)) return 0;
  return cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);
};

/**
 * Validates and sanitizes cart items loaded from storage
 */
export const sanitizeCartItems = (rawItems) => {
  if (!Array.isArray(rawItems)) return [];
  return rawItems
    .filter((item) => item && typeof item.id !== 'undefined' && typeof item.name === 'string' && typeof item.price === 'number')
    .map((item) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      quantity: Math.max(1, Math.floor(Number(item.quantity) || 1)),
      category: item.category || 'dosa',
      categoryName: item.categoryName || '',
      image: item.image || '',
    }));
};
