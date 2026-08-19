import React from 'react';

interface CategoryNavProps {
  categories: { id: string; title: string; count: number }[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => (
  <nav className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-12 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
    {categories.map((cat) => (
      <a
        key={cat.id}
        href={`#${cat.id}`}
        className="shrink-0 snap-start rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-gray-600 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-white/10 dark:text-gray-300 dark:hover:text-orange-400"
      >
        {cat.title} <span className="text-gray-400">({cat.count})</span>
      </a>
    ))}
  </nav>
);

export default CategoryNav;
