"use client";

import React, { useEffect, useState } from 'react';

interface QASidebarProps {
  categories: { id: string; title: string; count: number }[];
}

const QASidebar: React.FC<QASidebarProps> = ({ categories }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (categories.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav className="flex flex-col gap-1">
      <p className="mb-2 px-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
        Topics
      </p>
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className={`flex items-center justify-between gap-2 rounded-lg border-l-2 px-3 py-2 text-sm transition-colors ${
              isActive
                ? 'border-orange-500 bg-orange-50 font-medium text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
                : 'border-transparent text-gray-600 hover:border-orange-300 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400'
            }`}
          >
            <span>{cat.title}</span>
            <span className="text-xs text-gray-400">{cat.count}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default QASidebar;
