import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, ArrowUp } from 'lucide-react';
import {
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_TEL,
  RESTAURANT_WHATSAPP_NUMBER,
  RESTAURANT_ADDRESS,
  GOOGLE_MAPS_SEARCH_URL,
} from '../utils/whatsapp';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1611] text-white pt-16 pb-12 border-t border-[#E5A93C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#2A1F18] flex items-center justify-center text-[#E5A93C] border border-[#E5A93C]/40 shadow-inner">
                {/* Traditional South Indian Brass Davarah Cup Icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#E5A93C" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="#E5A93C" fillOpacity="0.25" stroke="#E5A93C" />
                  <line x1="6" y1="2" x2="6" y2="5" stroke="#FFFFFF" />
                  <line x1="10" y1="1" x2="10" y2="5" stroke="#FFFFFF" />
                  <line x1="14" y1="2" x2="14" y2="5" stroke="#FFFFFF" />
                </svg>
              </div>
              <div>
                <span className="font-serif font-extrabold text-2xl tracking-tight text-white">
                  Dakshin Sutra
                </span>
                <span className="block text-[10px] tracking-widest font-bold uppercase text-[#E5A93C] -mt-1">
                  Cafe · Bilaspur
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 max-w-sm leading-relaxed">
              Authentic South Indian flavours in Sarkanda, Bilaspur. Crisp Benne dosas, pillowy thatte idlis, rich podi ghee roasts, and brass davarah filter coffee.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#E5A93C] font-bold border border-[#E5A93C]/30">
                100% Pure Veg
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#E5A93C] font-bold border border-[#E5A93C]/30">
                Dine-in & Takeaway
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#E5A93C] font-bold border border-[#E5A93C]/30">
                4.6★ (288 Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-black text-[#E5A93C] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-[#E5A93C] transition-colors py-1 inline-block">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E5A93C] transition-colors py-1 inline-block">Our Menu (37 Items)</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E5A93C] transition-colors py-1 inline-block">About Dakshin Sutra</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#E5A93C] transition-colors py-1 inline-block">Table Reservation</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E5A93C] transition-colors py-1 inline-block">Google Listing & Rating</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E5A93C] transition-colors py-1 inline-block">Visit Us & Directions</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-black text-[#E5A93C] uppercase tracking-wider">
              Cafe Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>{RESTAURANT_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a href={RESTAURANT_PHONE_TEL} className="hover:text-[#E5A93C] transition-colors font-extrabold text-sm">
                  {RESTAURANT_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a
                  href={`https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Dakshin Sutra Cafe!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A93C] transition-colors font-bold"
                >
                  WhatsApp: {RESTAURANT_PHONE}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors border border-white/15 min-h-[44px]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Maps Direction</span>
              </a>

              <a
                href={RESTAURANT_PHONE_TEL}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D9531E] hover:bg-[#C24312] text-xs font-black text-white transition-colors shadow-2xs min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {CURRENT_YEAR} Dakshin Sutra Cafe, Bilaspur. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#E5A93C] font-bold">
              South Indian Dining · Bilaspur, Chhattisgarh
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D9531E] text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
