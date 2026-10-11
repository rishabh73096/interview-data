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
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-global-search', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-global-search', onOpen);
    };
  }, []);

  // Rendered outside <header>: its backdrop-filter would trap a fixed overlay inside the header box.
  return (
    <>
      {open && <GlobalSearchModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default GlobalSearch;
