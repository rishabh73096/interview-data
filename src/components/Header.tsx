"use client";

import React, { useEffect, useState } from 'react';
import GlobalSearch from './GlobalSearch';

const navLinks = [
  { href: '/components', label: 'Components', blurb: '26 live React components' },
  { href: '/interview-qa', label: 'Q&A', blurb: 'Quick interview answers' },
  { href: '/system-design', label: 'System Design', blurb: 'Notebook with worked designs' },
  { href: '/system-design-roadmap', label: 'SD Roadmap', blurb: 'Frontend & backend by level' },
  { href: '/coding-questions', label: 'Practice', blurb: 'Coding problems with editor' },
  { href: '/hr-questions', label: 'HR Prep', blurb: 'Behavioural round answers' },
  { href: '/roadmap', label: 'Roadmap', blurb: 'MERN → Full Stack AI' },
  { href: '/roadmap-mobile', label: 'Mobile', blurb: 'React Native roadmap' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  // set after a click-close so the drawer stays shut until the pointer leaves the header
  const [dismissed, setDismissed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <>
    <header
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse' && !dismissed) setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') {
          setOpen(false);
          setDismissed(false);
        }
      }}
      className="sticky top-0 z-50 border-b border-[#9a3412]/12 bg-[#f4ecdd]/85 backdrop-blur-md dark:border-white/8 dark:bg-[#181511]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <a href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#c2410c] via-[#ea580c] to-[#fb923c] font-mono text-xs font-bold text-white shadow-sm sm:h-9 sm:w-9 sm:text-sm">
            {'</>'}
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold tracking-tight text-gray-900 sm:text-base dark:text-white">
              Interview Playground
            </p>
            <p className="hidden text-xs text-gray-500 min-[420px]:block dark:text-gray-400">
              Frontend components, practiced &amp; polished
            </p>
          </div>
        </a>

        <div className="flex-1" />

      <button
        onClick={() => window.dispatchEvent(new Event('open-global-search'))}
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

        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-black/5 sm:h-10 sm:w-10 dark:text-gray-300 dark:hover:bg-white/10"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <button
          onClick={() => {
            if (open) {
              setOpen(false);
              setDismissed(true);
            } else {
              setOpen(true);
            }
          }}
          aria-expanded={open}
          aria-haspopup="true"
          className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
            open
              ? 'border-transparent bg-linear-to-r from-[#c2410c] via-[#ea580c] to-[#fb923c] text-white shadow-sm'
              : 'border-[#9a3412]/20 text-gray-700 hover:border-[#f97316] dark:border-white/15 dark:text-gray-200'
          }`}
        >
          Explore
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Drawer: opens on hover (mouse) or tap, closes on click */}
      <div
        className={`absolute inset-x-0 top-full grid transition-all duration-200 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
            <div className="max-h-[75vh] overflow-y-auto rounded-2xl border border-[#9a3412]/15 bg-[#f4ecdd] p-4 shadow-xl sm:p-5 dark:border-white/10 dark:bg-[#181511]">
              <button
                onClick={() => {
                  setOpen(false);
                  setDismissed(true);
                  window.dispatchEvent(new Event('open-global-search'));
                }}
                className="mb-4 flex w-full items-center gap-3 rounded-xl border border-[#9a3412]/20 bg-[#f0e7d6]/70 px-4 py-3 text-left text-sm text-gray-500 transition-colors hover:border-[#f97316] dark:border-white/12 dark:bg-white/5 dark:text-gray-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="flex-1">Search everything…</span>
                <kbd className="rounded border border-black/10 px-1.5 font-sans text-[11px] dark:border-white/15">⌘K</kbd>
              </button>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      setDismissed(true);
                    }}
                    className="rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-[#f97316]/40 hover:bg-[#ea580c]/10 dark:hover:bg-white/8"
                  >
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">{l.label}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{l.blurb}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <GlobalSearch />
    </>
  );
};

export default Header;
