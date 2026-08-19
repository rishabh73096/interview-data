import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-sky-600 via-cyan-500 to-emerald-400 font-mono text-sm font-bold text-white shadow-sm">
            {'</>'}
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              Interview Playground
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Frontend components, practiced &amp; polished
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex dark:text-gray-300">
          <a href="/#components" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Components
          </a>
          <a href="/interview-qa" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Q&amp;A
          </a>
        </nav>

        <span className="rounded-full bg-linear-to-r from-sky-600 via-cyan-500 to-emerald-400 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          26 Components
        </span>
      </div>
    </header>
  );
};

export default Header;
