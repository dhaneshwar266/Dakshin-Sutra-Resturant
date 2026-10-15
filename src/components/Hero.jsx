import React from 'react';
import { Star, MessageSquare, ArrowRight, Coffee, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { RESTAURANT_WHATSAPP_NUMBER, GOOGLE_MAPS_SEARCH_URL } from '../utils/whatsapp';

export default function Hero({ onExploreMenu }) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#12100E] via-[#16120E] to-[#1C1713] text-white">
      {/* Decorative ambient glowing backdrops in warm terracotta and golden brass tones */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#D9531E]/20 via-[#E5A93C]/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Google Rating Badge */}
            <a
              href={GOOGLE_MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-lg mb-5 hover:border-[#E5A93C] hover:bg-white/15 transition-all group"
              aria-label="View 4.6 star Google reviews on Maps"
            >
              <div className="flex items-center text-[#E5A93C]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 font-black text-white">4.6</span>
              </div>
              <span className="text-white/40">·</span>
              <span className="text-white/80 group-hover:text-white">
                288 reviews on Google Maps
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
              <span className="text-xs text-[#E5A93C] font-bold hidden sm:inline">Bilaspur</span>
            </a>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Dosa. Idli. <br className="hidden sm:inline" />
              <span className="text-[#D9531E] relative">
                Filter Coffee.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E5A93C]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed mb-7 font-normal">
              Welcome to <strong className="font-bold text-[#E5A93C]">Dakshin Sutra Cafe</strong> in Sarkanda, Bilaspur. Bringing you Bengaluru-style buttery Benne dosas, pillowy thatte idlis, rich gunpowder podi roasts, and piping hot chicory filter coffee served with authentic South Indian tradition.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* Primary Action Button (Terracotta Orange) */}
              <a
                href="#menu"
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D9531E] text-white text-sm font-bold hover:bg-[#C24312] border border-[#D9531E] transition-all shadow-lg hover:shadow-orange-950 active:scale-95 group min-h-[44px]"
              >
                <span>Explore Menu (37 Items)</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Action Button */}
              <a
                href={`https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Dakshin Sutra Cafe! I would like to place an order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold hover:bg-white/20 transition-all active:scale-95 shadow-md min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-[#E5A93C]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/15 w-full max-w-lg">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-white">Pure Vegetarian</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-white">Dine-in & Takeaway</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-white">₹1–₹200 / person</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Food Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-[#1C1713] aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80"
                  alt="Crispy golden South Indian dosa served with fresh coconut chutney and spiced sambar at Dakshin Sutra Cafe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E5A93C] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>DAILY FRESH FERMENTED BATTER</span>
                  </div>
                  <p className="font-serif text-lg sm:text-xl font-bold">
                    Signature Davangere Benne Dosa & Brass Filter Kaapi
                  </p>
                </div>
              </div>

              {/* Floating Pill: Filter Coffee */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-[#1C1713]/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-[#E5A93C]/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D9531E] text-white flex items-center justify-center font-bold shadow-xs">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">Filter Kaapi</p>
                  <p className="text-[10px] text-[#E5A93C] font-semibold">₹35 · Traditional Davarah</p>
                </div>
              </div>

              {/* Floating Pill: Location */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#1C1713]/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/20 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E5A93C] text-[#12100E] flex items-center justify-center font-black">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">Sarkanda, Bilaspur</p>
                  <p className="text-[10px] text-white/70 font-semibold">Near Seepat Chowk</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
