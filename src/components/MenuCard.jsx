import React, { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

export default function MenuCard({ item, quantityInCart = 0, onAddToCart, onUpdateQuantity }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Reliable category-based South Indian food photography fallbacks
  const getFallbackImage = (cat) => {
    switch (cat) {
      case 'dosa':
        return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80';
      case 'idly':
        return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80';
      case 'rice':
      case 'bhath':
        return 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80';
      case 'beverages':
        return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80';
      default:
        return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#D9531E]/40 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Media & Badges */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          {/* Skeleton loading preview */}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" />
          )}

          <img
            src={imgError ? getFallbackImage(item.category) : item.image}
            alt={`${item.name} - South Indian vegetarian dish at Dakshin Sutra Cafe`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgError(true);
              setImgLoaded(true);
            }}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Pure Veg Indicator (Indian FSSAI Standard) */}
          <div
            className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs p-1 rounded-md shadow-xs flex items-center justify-center border border-slate-200"
            title="100% Pure Vegetarian"
            aria-label="Pure Vegetarian"
          >
            <div className="w-3.5 h-3.5 border-2 border-emerald-700 flex items-center justify-center p-[1px]">
              <div className="w-2 h-2 rounded-full bg-emerald-700" />
            </div>
          </div>

          {/* Must Try Special Badge */}
          {item.isMustTry && (
            <div className="absolute top-2.5 right-2.5 bg-gradient-to-r from-[#D9531E] to-[#C24312] text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-white/20">
              <Sparkles className="w-3 h-3 text-[#E5A93C] fill-current" />
              <span>Must Try</span>
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute bottom-2.5 left-2.5 bg-[#1E1611]/85 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[#E5A93C]/30">
            {item.categoryName}
          </div>
        </div>

        {/* Dish Details */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif font-extrabold text-base sm:text-lg text-[#1A201C] group-hover:text-[#D9531E] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="font-serif font-black text-base sm:text-lg text-[#D9531E] shrink-0 tracking-tight">
              {formatCurrency(item.price)}
            </span>
          </div>

          <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <div className="border-t border-slate-100 pt-3">
          {quantityInCart > 0 ? (
            /* Quantity Stepper when item is in cart */
            <div className="flex items-center justify-between w-full bg-[#FDF2EC] rounded-xl p-1 border border-[#D9531E]/30 shadow-2xs">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, quantityInCart - 1)}
                className="w-9 h-9 rounded-lg bg-white text-[#D9531E] font-black flex items-center justify-center hover:bg-[#D9531E] hover:text-white transition-colors shadow-2xs active:scale-95 min-w-[36px]"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <Minus className="w-4 h-4" />
              </button>
              
              <span className="font-black text-xs sm:text-sm text-[#1A201C] px-2">
                {quantityInCart} in cart
              </span>

              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, quantityInCart + 1)}
                className="w-9 h-9 rounded-lg bg-[#D9531E] text-white font-black flex items-center justify-center hover:bg-[#C24312] transition-colors shadow-2xs active:scale-95 min-w-[36px]"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Add to Cart Button */
            <button
              type="button"
              onClick={() => onAddToCart(item)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FDF2EC] hover:bg-[#D9531E] text-[#D9531E] hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 border border-[#D9531E]/20 hover:border-[#D9531E] shadow-2xs active:scale-98 min-h-[44px]"
              aria-label={`Add ${item.name} to cart for ${formatCurrency(item.price)}`}
            >
              <Plus className="w-4 h-4 text-[#D9531E] group-hover:text-white transition-colors" />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>

    </article>
  );
}
