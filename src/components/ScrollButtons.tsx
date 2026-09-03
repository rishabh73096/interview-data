"use client";

import React, { useEffect, useState } from 'react';

const ScrollButtons: React.FC = () => {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const full = document.documentElement.scrollHeight;
      setCanScrollUp(y > 300);
      setCanScrollDown(full - (y + viewport) > 300);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Nothing to do on short pages.
  if (!canScrollUp && !canScrollDown) return null;

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const toBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  const btn =
    'flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-white shadow-lg ring-1 ring-black/10 transition-all duration-200 hover:scale-110 active:scale-95 sm:h-11 sm:w-11';

  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-2 sm:right-6 sm:bottom-8">
      <button
        onClick={toTop}
        aria-label="Scroll to top"
        title="Go to top"
        className={`${btn} ${canScrollUp ? 'opacity-100' : 'pointer-events-none translate-y-1 opacity-0'}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
      <button
        onClick={toBottom}
        aria-label="Scroll to bottom"
        title="Go to bottom"
        className={`${btn} ${canScrollDown ? 'opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollButtons;
