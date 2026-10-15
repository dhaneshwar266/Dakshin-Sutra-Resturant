// Currency formatting helper for Indian Rupee (₹)

export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') {
    const parsed = Number(amount);
    if (isNaN(parsed)) return '₹0';
    amount = parsed;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};
