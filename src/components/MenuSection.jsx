import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, AlertCircle, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/menu';
import { filterMenuItems } from '../services/menuService';
import CategoryFilter from './CategoryFilter';
import MenuCard from './MenuCard';

export default function MenuSection({ cartItems = [], onAddToCart, onUpdateQuantity }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyMustTry, setOnlyMustTry] = useState(false);

  // Map of cart item quantities by item ID
  const cartQuantities = useMemo(() => {
    const map = {};
    cartItems.forEach((item) => {
      map[item.id] = item.quantity;
    });
    return map;
  }, [cartItems]);

  // Compute category counts
  const itemCounts = useMemo(() => {
    const counts = { all: MENU_ITEMS.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = MENU_ITEMS.filter((item) => item.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter items using the menu service logic
  const filteredItems = useMemo(() => {
    return filterMenuItems(MENU_ITEMS, {
      category: activeCategory,
      search: searchQuery,
      onlyMustTry,
    });
  }, [activeCategory, searchQuery, onlyMustTry]);

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setOnlyMustTry(false);
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2EC] text-[#D9531E] text-xs font-bold tracking-wider uppercase mb-3 border border-[#D9531E]/20">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Authentic South Indian Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A201C] tracking-tight mb-4">
            Explore All 37 South Indian Specialities
          </h2>
          <p className="text-sm sm:text-base text-[#1A201C]/75 leading-relaxed">
            From Bangalore-style buttery Benne dosas to cloud-soft thatte idlis, rich podi ghee roasts, and brass filter coffee. Handcrafted with traditional stone-ground recipes.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-4 mb-8">
          
          {/* Search Box & Must Try Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-3xl mx-auto w-full">
            
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dosas, idlis, rice, sweets, or filter coffee..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-slate-200 text-sm text-[#1A201C] placeholder:text-[#64748B]/70 focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/20 shadow-xs transition-all min-h-[44px]"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#1A201C] rounded-full focus:outline-none"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Must-Try Quick Toggle */}
            <button
              type="button"
              onClick={() => setOnlyMustTry(!onlyMustTry)}
              className={`shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all shadow-xs min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9531E] ${
                onlyMustTry
                  ? 'bg-[#D9531E] text-white shadow-md border border-[#D9531E]'
                  : 'bg-white text-[#1A201C] border border-slate-200 hover:border-[#D9531E]/50 hover:text-[#D9531E]'
              }`}
              aria-pressed={onlyMustTry}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Must Try Specials</span>
            </button>
          </div>

          {/* Category Tabs */}
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            itemCounts={itemCounts}
          />
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-[#64748B] mb-6 px-1">
          <span>
            Showing <strong className="text-[#1A201C] font-extrabold">{filteredItems.length}</strong> of 37 menu items
            {activeCategory !== 'all' && ` in ${CATEGORIES.find((c) => c.id === activeCategory)?.name}`}
            {onlyMustTry && ` · Must Try`}
          </span>

          {(searchQuery || activeCategory !== 'all' || onlyMustTry) && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[#D9531E] hover:underline font-bold text-xs"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Food Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                quantityInCart={cartQuantities[item.id] || 0}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-auto border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#FDF2EC] text-[#D9531E] flex items-center justify-center mx-auto mb-4 border border-[#D9531E]/20">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A201C] mb-2">
              No matching dishes found
            </h3>
            <p className="text-xs text-[#1A201C]/70 mb-5 leading-relaxed">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try another dish or reset your search.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-6 py-3 rounded-full bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] transition-colors min-h-[44px]"
            >
              Show All 37 Items
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
