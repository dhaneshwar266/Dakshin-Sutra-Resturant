import React from 'react';
import { CATEGORIES } from '../data/menu';

export default function CategoryFilter({ activeCategory, onSelectCategory, itemCounts }) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Menu categories">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max mx-auto justify-start sm:justify-center px-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = itemCounts ? itemCounts[cat.id] : null;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat.id)}
              type="button"
              className={`px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9531E] ${
                isActive
                  ? 'bg-[#12100E] text-white shadow-md border border-[#12100E]'
                  : 'bg-white text-[#1A201C]/80 border border-slate-200 hover:border-[#D9531E] hover:text-[#D9531E] hover:bg-[#FDF2EC]/50'
              }`}
            >
              <span>{cat.name}</span>
              {count !== undefined && (
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                    isActive
                      ? 'bg-[#E5A93C] text-[#12100E]'
                      : 'bg-slate-100 text-[#64748B]'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
