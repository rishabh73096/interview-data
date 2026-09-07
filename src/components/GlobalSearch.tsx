"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// The modal (and the whole search index it pulls in) is only loaded on first open.
const GlobalSearchModal = dynamic(() => import('./GlobalSearchModal'), { ssr: false });

const GlobalSearch: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search everything"
        title="Search (⌘K)"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-black/5 sm:h-10 sm:w-10 dark:text-gray-300 dark:hover:bg-white/10"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {open && <GlobalSearchModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default GlobalSearch;
