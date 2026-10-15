import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X, MessageSquare } from 'lucide-react';
import { RESTAURANT_PHONE, RESTAURANT_PHONE_TEL, RESTAURANT_WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reserve', href: '#reservation' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12100E]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2.5 sm:py-3'
          : 'bg-[#12100E]/85 backdrop-blur-sm border-b border-white/5 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Dakshin Sutra Cafe Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#D9531E] flex items-center justify-center text-white shadow-md border border-[#E5A93C]/40 group-hover:scale-105 transition-transform duration-300">
              {/* Traditional South Indian Brass Davarah Cup Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="white" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="#E5A93C" fillOpacity="0.4" stroke="white" />
                <line x1="6" y1="2" x2="6" y2="5" stroke="#FFFFFF" />
                <line x1="10" y1="1" x2="10" y2="5" stroke="#FFFFFF" />
                <line x1="14" y1="2" x2="14" y2="5" stroke="#FFFFFF" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#E5A93C] transition-colors leading-tight">
                Dakshin Sutra
              </span>
              <span className="text-[10px] tracking-widest font-bold uppercase text-[#E5A93C] flex items-center gap-1.5">
                <span>Cafe</span>
                <span className="w-1 h-1 rounded-full bg-[#D9531E]" />
                <span>Bilaspur</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white/80 hover:text-[#E5A93C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5A93C] hover:after:w-full after:transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp Order CTA */}
            <a
              href={`https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Dakshin Sutra Cafe! I would like to place an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] border border-[#D9531E] transition-all shadow-md hover:shadow-lg active:scale-95 min-h-[44px]"
              aria-label="Order on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Quick Call Button */}
            <a
              href={RESTAURANT_PHONE_TEL}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-[#D9531E] border border-white/15 transition-colors shadow-2xs"
              title={`Call ${RESTAURANT_PHONE}`}
              aria-label={`Call ${RESTAURANT_PHONE}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#E5A93C] text-[#12100E] text-xs sm:text-sm font-extrabold hover:bg-[#D29528] transition-all shadow-md active:scale-95 min-h-[44px]"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#12100E]" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[22px] h-5 px-1.5 text-xs font-black bg-[#12100E] text-white rounded-full shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E5A93C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 top-[60px] bg-black/70 backdrop-blur-2xs z-30"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className="fixed inset-x-0 top-[60px] bg-[#16120E] border-b border-white/15 shadow-2xl px-5 py-6 z-40 transition-all duration-300 max-h-[85vh] overflow-y-auto text-white"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10 hover:text-[#E5A93C] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#E5A93C] text-xs font-black">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/15 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Dakshin Sutra Cafe! I would like to place an order.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#D9531E] text-white text-sm font-bold hover:bg-[#C24312] transition-colors shadow-sm min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Order on WhatsApp</span>
                </a>

                <a
                  href={RESTAURANT_PHONE_TEL}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-white/10 text-white text-sm font-bold hover:bg-white/20 border border-white/20 transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[#E5A93C]" />
                  <span>Call {RESTAURANT_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
