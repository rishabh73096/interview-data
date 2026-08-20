"use client";

import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 border-b border-orange-900/8 bg-orange-50/85 backdrop-blur-md dark:border-orange-400/10 dark:bg-[#140d08]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <a href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 font-mono text-xs font-bold text-white shadow-sm sm:h-9 sm:w-9 sm:text-sm">
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

        <nav className="hidden items-center gap-4 text-sm font-medium text-gray-600 lg:gap-6 sm:flex dark:text-gray-300">
          <a href="/components" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Components
          </a>
          <a href="/interview-qa" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Q&amp;A
          </a>
          <a href="/system-design" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            System Design
          </a>
          <a href="/coding-questions" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Practice
          </a>
          <a href="/hr-questions" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            HR Prep
          </a>
        </nav>

        <a
          href="/components"
          className="hidden shrink-0 rounded-full bg-linear-to-r from-orange-600 via-amber-500 to-yellow-400 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105 sm:inline-block"
        >
          26 Components
        </a>

        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-black/5 sm:h-10 sm:w-10 dark:text-gray-300 dark:hover:bg-white/10"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-black/5 sm:hidden dark:text-gray-300 dark:hover:bg-white/10"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all ${
                menuOpen ? 'top-1.75 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 block h-0.5 w-5 rounded-full bg-current transition-opacity ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all ${
                menuOpen ? 'top-1.75 -rotate-45' : 'top-3.5'
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        className={`grid overflow-hidden border-black/5 transition-all duration-200 sm:hidden dark:border-white/10 ${
          menuOpen ? 'grid-rows-[1fr] border-t opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-4 py-3">
            <a
              href="/components"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              Components
            </a>
            <a
              href="/interview-qa"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              Q&amp;A
            </a>
            <a
              href="/system-design"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              System Design
            </a>
            <a
              href="/coding-questions"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              Practice
            </a>
            <a
              href="/hr-questions"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              HR Prep
            </a>
            <a
              href="/components"
              onClick={() => setMenuOpen(false)}
              className="mt-1 w-fit rounded-full bg-linear-to-r from-orange-600 via-amber-500 to-yellow-400 px-3 py-1 text-xs font-semibold text-white shadow-sm"
            >
              26 Components
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
