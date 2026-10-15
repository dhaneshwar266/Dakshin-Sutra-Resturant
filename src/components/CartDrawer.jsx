import React, { useEffect, useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '../utils/currency';
import { calculateLineTotal, calculateCartSubtotal, calculateTotalItemCount } from '../utils/cart';
import { dispatchOrder } from '../services/orderService';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleClose = () => {
    setShowClearConfirm(false);
    onClose();
  };

  // Subtotal and total item count using centralized pure utilities
  const subtotal = calculateCartSubtotal(cartItems);
  const totalItemCount = calculateTotalItemCount(cartItems);

  // Close on ESC key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setShowClearConfirm(false);
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Use order service to generate order details and WhatsApp link
  const orderResult = dispatchOrder(cartItems);
  const whatsappUrl = orderResult.success ? orderResult.whatsappUrl : '#';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart Drawer">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-2xs transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D9531E] text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-lg sm:text-xl text-[#1A201C]">
                  Your Order
                </h3>
                <p className="text-[11px] text-[#64748B] font-semibold">
                  {totalItemCount} {totalItemCount === 1 ? 'dish' : 'dishes'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                showClearConfirm ? (
                  <div className="flex items-center gap-1.5 bg-[#FDF2EC] p-1 rounded-lg">
                    <button
                      type="button"
                      onClick={() => {
                        onClearCart();
                        setShowClearConfirm(false);
                      }}
                      className="text-xs text-white bg-red-600 hover:bg-red-700 px-2.5 py-1 rounded-md font-bold transition-colors"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowClearConfirm(false)}
                      className="text-xs text-[#1A201C] hover:underline px-1.5 py-1 font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowClearConfirm(true)}
                    className="text-xs text-[#D9531E] hover:text-[#C24312] hover:underline px-2 py-1 font-bold transition-colors"
                    title="Clear all items from cart"
                  >
                    Clear all
                  </button>
                )
              )}

              <button
                type="button"
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-[#FDF2EC] text-[#D9531E] flex items-center justify-center hover:bg-[#D9531E] hover:text-white transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body: Item List or Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 bg-slate-50">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#1A201C]">
                <div className="w-16 h-16 rounded-full bg-[#FDF2EC] text-[#D9531E] flex items-center justify-center mb-4 border border-[#D9531E]/20">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xl font-extrabold text-[#1A201C] mb-1.5">
                  Your cart is empty
                </h4>
                <p className="text-xs text-[#64748B] max-w-xs mb-6 leading-relaxed">
                  Explore our crispy dosas, steamed idlis, and South Indian filter coffee to add to your order.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-7 py-3 rounded-full bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] transition-all shadow-md min-h-[44px]"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const lineTotal = calculateLineTotal(item);
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-2xs flex items-center gap-3 justify-between"
                  >
                    {/* Item Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 bg-slate-100 border border-slate-200"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=200&q=80";
                      }}
                    />

                    {/* Dish Info */}
                    <div className="flex-1 min-w-0 pr-1">
                      <h4 className="font-serif font-extrabold text-sm text-[#1A201C] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#64748B]">
                        {formatCurrency(item.price)} each
                      </p>
                      <p className="font-serif font-black text-xs text-[#D9531E] mt-0.5">
                        Total: {formatCurrency(lineTotal)}
                      </p>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1 bg-[#FDF2EC] rounded-lg p-0.5 border border-[#D9531E]/20">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-md bg-white text-[#D9531E] font-bold flex items-center justify-center hover:bg-[#D9531E] hover:text-white transition-colors"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-black text-[#1A201C] px-1.5">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-md bg-white text-[#D9531E] font-bold flex items-center justify-center hover:bg-[#D9531E] hover:text-white transition-colors"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[11px] text-[#64748B] hover:text-red-600 flex items-center gap-1 p-0.5 transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer: Subtotal & WhatsApp Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white space-y-4">
              
              {/* Subtotal Calculation */}
              <div className="space-y-1.5 text-xs text-[#1A201C]">
                <div className="flex items-center justify-between text-[#64748B]">
                  <span>Total Items</span>
                  <span className="font-bold text-[#1A201C]">{totalItemCount} items</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-[#1A201C] pt-2 border-t border-slate-200">
                  <span className="font-serif text-base">Subtotal</span>
                  <span className="font-serif text-[#D9531E] text-xl font-black">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              {/* Truthful Notice on WhatsApp Ordering */}
              <div className="p-3 rounded-xl bg-[#FDF2EC] border border-[#D9531E]/20 text-[11px] text-[#1A201C]/80 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D9531E] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Clicking below prepares your order message and opens WhatsApp to chat directly with <strong>Dakshin Sutra Cafe</strong>. The cafe team will verify availability and confirm your order.
                </p>
              </div>

              {/* Primary Order on WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#D9531E] text-white font-extrabold text-sm hover:bg-[#C24312] transition-all shadow-md active:scale-98 group min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Order on WhatsApp — {formatCurrency(subtotal)}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
