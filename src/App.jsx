import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ReservationForm from './components/ReservationForm';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ShoppingBag } from 'lucide-react';
import { formatCurrency } from './utils/currency';
import { calculateCartSubtotal, calculateTotalItemCount, sanitizeCartItems } from './utils/cart';
import { APP_CONFIG } from './utils/config';

export default function App() {
  // Initialize and safely sanitize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(APP_CONFIG.storageKeys.cart);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return sanitizeCartItems(parsed);
    } catch (e) {
      console.warn('Failed to parse cart from storage, resetting:', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync sanitized cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(APP_CONFIG.storageKeys.cart, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Failed to write cart to storage:', e);
    }
  }, [cartItems]);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        return prevItems.filter((i) => i.id !== itemId);
      }
      return prevItems.map((i) =>
        i.id === itemId ? { ...i, quantity: newQuantity } : i
      );
    });
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = calculateTotalItemCount(cartItems);
  const cartSubtotal = calculateCartSubtotal(cartItems);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-sans selection:bg-[#D9531E]/20 selection:text-[#D9531E]">
      
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <MenuSection
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        <AboutSection />

        <ReservationForm />

        <ReviewsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Cart Bar on Mobile Screens (when cart has items) */}
      {totalCartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 inset-x-4 z-30 md:hidden animate-bounce-subtle">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#1E1611] text-white shadow-2xl border border-[#E5A93C]/40 active:scale-98 min-h-[48px]"
            aria-label={`View your order with ${totalCartCount} items, subtotal ${formatCurrency(cartSubtotal)}`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#D9531E] flex items-center justify-center font-black text-xs text-white">
                {totalCartCount}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold leading-tight text-white">View Your Order</p>
                <p className="text-[11px] text-[#E5A93C] font-semibold">{formatCurrency(cartSubtotal)} subtotal</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#E5A93C]">
              <span>Checkout</span>
              <ShoppingBag className="w-4 h-4 text-[#E5A93C]" />
            </div>
          </button>
        </div>
      )}

    </div>
  );
}
