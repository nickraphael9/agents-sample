import React from 'react';
import { CategoryType } from '../types';

interface CategoryNavProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
}

const CATEGORIES: CategoryType[] = [
  'US stocks',
  'World stocks',
  'Crypto',
  'Futures',
  'Bonds',
  'Forex',
  'ETFs'
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
      {CATEGORIES.map(category => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            id={`category-btn-${category.replace(/\s+/g, '-').toLowerCase()}`}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all backdrop-blur-md ${
              isActive
                ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/20 border border-white/20'
                : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
