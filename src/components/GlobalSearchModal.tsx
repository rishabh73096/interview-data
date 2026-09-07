"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { searchIndex, type SearchGroup, type SearchResult } from '../lib/search';

interface GlobalSearchModalProps {
  onClose: () => void;
}

const GROUP_ORDER: SearchGroup[] = [
  'Components',
  'Interview Q&A',
  'Coding Practice',
  'System Design',
  'HR & Behavioral',
  'Roadmap',
  'Mobile Roadmap',
  'Project Modules',
];

const GROUP_BADGE: Record<SearchGroup, string> = {
  Components: 'C',
  'Interview Q&A': 'Q',
  'Coding Practice': '</>',
  'System Design': 'S',
  'HR & Behavioral': 'HR',
  Roadmap: 'R',
  'Mobile Roadmap': 'RN',
  'Project Modules': 'M',
};

const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchIndex(query), [query]);

  const grouped = useMemo(() => {
    const map = new Map<SearchGroup, SearchResult[]>();
    for (const r of results) {
      const list = map.get(r.group) ?? [];
      list.push(r);
      map.set(r.group, list);
    }
    // flat list follows the same visual order, so keyboard nav lines up
    const flat: SearchResult[] = [];
    const sections: { group: SearchGroup; items: SearchResult[] }[] = [];
    for (const group of GROUP_ORDER) {
      const items = map.get(group);
      if (items && items.length) {
        sections.push({ group, items });
        flat.push(...items);
      }
    }
    return { sections, flat };
  }, [results]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-result-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const go = (href: string) => {
    onClose();
    const [path, hash] = href.split('#');
    if (typeof window !== 'undefined' && path === window.location.pathname && hash) {
      window.history.replaceState(null, '', href);
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(href);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, grouped.flat.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = grouped.flat[activeIndex];
      if (target) go(target.href);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] bg-[#f4ecdd]/95 backdrop-blur-md dark:bg-[#141210]/95"
      role="dialog"
      aria-modal="true"
      aria-label="Search everything"
      onKeyDown={onKeyDown}
    >
      <div className="mx-auto flex h-full max-w-2xl flex-col px-4 pt-4 pb-6 sm:pt-12">
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#6b5836]/20 bg-[#f0e7d6]/70 px-4 py-3 shadow-sm focus-within:border-[#a9885d] dark:border-white/12 dark:bg-white/5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components, Q&A, system design, roadmap…"
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        <div ref={listRef} className="mt-4 flex-1 overflow-y-auto">
          {query.trim() === '' && (
            <p className="px-1 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
              Type to search across the whole project — 26 components, every interview Q&amp;A, coding
              patterns, system design notes, HR answers, and both roadmaps.
            </p>
          )}

          {query.trim() !== '' && grouped.flat.length === 0 && (
            <p className="px-1 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
              No matches for &ldquo;{query}&rdquo;.
            </p>
          )}

          {grouped.sections.map((section) => (
            <div key={section.group} className="mb-4">
              <p className="px-1 pb-1.5 text-[11px] font-semibold tracking-wide text-gray-400 uppercase dark:text-gray-500">
                {section.group}
                <span className="ml-1.5 font-normal text-gray-300 dark:text-gray-600">
                  {section.items.length}
                </span>
              </p>
              <div className="flex flex-col gap-1">
                {section.items.map((item) => {
                  const flatIndex = grouped.flat.indexOf(item);
                  const isActive = flatIndex === activeIndex;
                  return (
                    <button
                      key={item.id}
                      data-result-index={flatIndex}
                      onClick={() => go(item.href)}
                      onMouseMove={() => setActiveIndex(flatIndex)}
                      className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                        isActive
                          ? 'border-[#a9885d]/50 bg-[#9a7b53]/12 dark:border-white/15 dark:bg-white/8'
                          : 'border-transparent hover:bg-black/3 dark:hover:bg-white/4'
                      }`}
                    >
                      <span className="mt-0.5 flex h-6 min-w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] px-1 font-mono text-[10px] font-bold text-white">
                        {GROUP_BADGE[item.group]}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-gray-500 dark:text-gray-400">
                          {item.subtitle ? `${item.subtitle} · ` : ''}
                          {item.snippet}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 shrink-0 px-1 text-center text-[11px] text-gray-400 dark:text-gray-500">
          <kbd className="font-sans">↑</kbd> <kbd className="font-sans">↓</kbd> to navigate ·{' '}
          <kbd className="font-sans">↵</kbd> to open · <kbd className="font-sans">Esc</kbd> to close
        </p>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
