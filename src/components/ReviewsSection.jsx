import React from 'react';
import { Star, MapPin, ExternalLink, ThumbsUp, DollarSign, Store, ShieldCheck } from 'lucide-react';
import { GOOGLE_MAPS_SEARCH_URL } from '../utils/whatsapp';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-[#16120E] text-white relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Card */}
        <div className="bg-[#1C1713] rounded-3xl p-6 sm:p-10 md:p-12 border border-white/15 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Star Rating Showcase */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/15 pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#E5A93C] text-xs font-black uppercase tracking-wider mb-3 border border-[#E5A93C]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Verified Listing</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#E5A93C] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < 4 ? 'fill-current' : 'fill-current opacity-70'}`}
                  />
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-5xl font-black text-white">4.6</span>
                <span className="text-lg text-white/60 font-bold">/ 5.0</span>
              </div>

              <p className="text-sm font-extrabold text-white mb-1">
                288 Google Reviews
              </p>

              <p className="text-xs text-white/70 max-w-xs leading-relaxed">
                Rating from the official Google Maps business profile for Dakshin Sutra Cafe, Sarkanda, Bilaspur.
              </p>

              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] transition-colors shadow-md min-h-[44px]"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Right: Verified Attributes from Google Listing */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Loved for Authentic South Indian Flavours in Bilaspur
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#D9531E]/20 text-[#D9531E] flex items-center justify-center shrink-0 shadow-2xs border border-[#D9531E]/30">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">₹1–₹200 Price Range</h4>
                    <p className="text-[11px] text-white/70 leading-snug">Affordable meals for students, professionals & families.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 shadow-2xs border border-white/15">
                    <Store className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Dine-in & Takeaway</h4>
                    <p className="text-[11px] text-white/70 leading-snug">Freshly cooked on-site or packaged for quick takeaway.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center shrink-0 shadow-2xs border border-[#E5A93C]/30">
                    <MapPin className="w-4 h-4 text-[#E5A93C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Convenient Location</h4>
                    <p className="text-[11px] text-white/70 leading-snug">Near Seepat Chowk beside Laxmi Medical Hall.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#D9531E]/20 text-[#D9531E] flex items-center justify-center shrink-0 shadow-2xs border border-[#D9531E]/30">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Authentic Flavours</h4>
                    <p className="text-[11px] text-white/70 leading-snug">Ghee dosas, thatte idlis, and brass filter coffee.</p>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-white/60 italic pt-1">
                * Rating and reviews reflect verified public data from the official Google Maps business profile.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
