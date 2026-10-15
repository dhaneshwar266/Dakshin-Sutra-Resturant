import React from 'react';
import { Coffee, Flame, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Flame,
      title: 'Traditional Batter & Roasting',
      description: 'Slow-fermented rice and urad dal batters roasted on heavy tavas to a golden crisp with pure desi ghee and Davangere white butter.',
    },
    {
      icon: Coffee,
      title: 'Degree Filter Kaapi',
      description: 'Slow-dripped dark roast chicory coffee decoction, blended with boiling whole milk, and served frothy in traditional South Indian brassware.',
    },
    {
      icon: HeartHandshake,
      title: 'Warm Bilaspur Hospitality',
      description: '100% pure vegetarian South Indian dining in Sarkanda, Bilaspur, offering a welcoming atmosphere for morning breakfasts and evening gatherings.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#16120E] text-white relative overflow-hidden border-y border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#D9531E]/15 via-[#E5A93C]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Multi-Photo Layout */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Primary Large Image */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[16/10] bg-[#1C1713] group">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
                  alt="Authentic crisp Masala Dosa with coconut chutney and hot sambar at Dakshin Sutra Cafe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] font-black text-[#E5A93C] uppercase tracking-wider">
                    South Indian Craft
                  </span>
                  <p className="font-serif text-sm sm:text-base font-bold">
                    Signature Ghee & Benne Roasts
                  </p>
                </div>
              </div>

              {/* Secondary Image 1: Steamed Idli */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-white/20 aspect-square bg-[#1C1713] group">
                <img
                  src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=400&q=80"
                  alt="Fluffy steamed thatte idlis with gun powder podi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white">
                  Pillowy Soft Idlis
                </span>
              </div>

              {/* Secondary Image 2: Traditional Filter Coffee */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-white/20 aspect-square bg-[#1C1713] group">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
                  alt="Authentic degree filter coffee in brass davarah"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white">
                  Brass Davarah Kaapi
                </span>
              </div>

            </div>

            {/* Corner Pill: 100% Pure Vegetarian */}
            <div className="absolute -bottom-3 -right-3 bg-[#D9531E] text-white rounded-2xl p-3 shadow-2xl border border-white/20 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#E5A93C]" />
              <div>
                <p className="font-serif text-xs font-black text-white">100% Pure Veg</p>
                <p className="text-[10px] text-white/90 font-semibold">South Indian Cafe</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E5A93C] text-xs font-bold tracking-wider uppercase mb-3 border border-[#E5A93C]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>About Dakshin Sutra Cafe</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              South Indian Breakfast Culture in the Heart of Bilaspur
            </h2>

            <p className="text-base text-white/80 leading-relaxed mb-4">
              At <strong className="text-[#E5A93C] font-bold">Dakshin Sutra Cafe</strong>, our culinary passion is introducing Bilaspur, Chhattisgarh, to the authentic South Indian cafe experience. Located near Seepat Chowk in Sarkanda, we prepare comforting staples made with disciplined fermentation, natural ingredients, and time-honored recipes.
            </p>

            <p className="text-base text-white/80 leading-relaxed mb-8">
              Whether you are stopping by for a crispy Davangere-style Benne Dosa, soft plate Thatte Idli with peppery rasam, or the rich aroma of slow-drip chicory filter coffee served in brass davarah, Dakshin Sutra offers a genuine culinary destination for students, families, and breakfast lovers.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full pt-4 border-t border-white/15">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col items-start bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#D9531E]/20 text-[#D9531E] flex items-center justify-center mb-3 border border-[#D9531E]/30">
                    <h.icon className="w-5 h-5 text-[#E5A93C]" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
