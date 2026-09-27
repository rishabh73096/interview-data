"use client";

import React, { useMemo, useState } from 'react';
import { qaCategories } from '../../data/interviewQA';
import CodeBlock from '../../components/CodeBlock';
import PageHero from '../../components/PageHero';
import CategoryNav from '../../components/CategoryNav';
import QASidebar from '../../components/QASidebar';
import { slugify, anchorFromText } from '../../lib/anchor';

const totalQuestions = qaCategories.reduce((sum, cat) => sum + cat.items.length, 0);

type LevelKey = 'top25' | 'top50' | 'top100' | 'all';

// Tiers are cumulative: Top 50 = tier 1+2, Top 100 = tier 1+2+3, All = everything.
// undefined `maxTier` means no filtering (show every question).
const LEVELS: { key: LevelKey; label: string; sub: string; maxTier?: 1 | 2 | 3 }[] = [
  { key: 'top25', label: 'Top 25', sub: 'Interview day · 30-45 min', maxTier: 1 },
  { key: 'top50', label: 'Top 50', sub: '1 day before · 60-90 min', maxTier: 2 },
  { key: 'top100', label: 'Top 100', sub: '2-3 days before · ~2 hrs', maxTier: 3 },
  { key: 'all', label: 'All Questions', sub: 'Reference library' },
];

const countForLevel = (maxTier?: 1 | 2 | 3) =>
  qaCategories.reduce(
    (sum, cat) =>
      sum +
      cat.items.filter((item) => maxTier === undefined || (item.tier !== undefined && item.tier <= maxTier))
        .length,
    0
  );

const levelCounts: Record<LevelKey, number> = LEVELS.reduce(
  (acc, lvl) => ({ ...acc, [lvl.key]: countForLevel(lvl.maxTier) }),
  {} as Record<LevelKey, number>
);

const InterviewQAPage: React.FC = () => {
  const [level, setLevel] = useState<LevelKey>('all');
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const activeLevel = LEVELS.find((l) => l.key === level) ?? LEVELS[LEVELS.length - 1];

  const byLevel = useMemo(() => {
    if (activeLevel.maxTier === undefined) return qaCategories;
    return qaCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.tier !== undefined && item.tier <= activeLevel.maxTier!
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [activeLevel]);

  const filtered = useMemo(() => {
    if (!normalizedQuery) return byLevel;
    return byLevel
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalizedQuery) ||
            item.a.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [byLevel, normalizedQuery]);

  const levelTotal = levelCounts[level];
  const totalShown = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  const navCategories = filtered.map((cat) => ({
    id: slugify(cat.title),
    title: cat.title,
    count: cat.items.length,
  }));

  return (
    <main className="mx-auto max-w-7xl md:px-0 px-4 pb-16 sm:px-6 sm:pb-24">
      <PageHero
        eyebrow="Fast Revision"
        title="Quick Interview"
        accent="Q&A"
        description={
          <>
            {totalQuestions} short, 1-2 line answers across JavaScript, React, Node, databases, system
            design and more. Pick a tier below based on how much time you have — Top 25 for right before
            the interview, All Questions when you are just learning.
          </>
        }
      >
        <div className="mt-4 flex w-full max-w-2xl flex-wrap gap-2">
          {LEVELS.map((lvl) => {
            const isActive = lvl.key === level;
            return (
              <button
                key={lvl.key}
                type="button"
                onClick={() => setLevel(lvl.key)}
                aria-pressed={isActive}
                className={`flex flex-col items-start rounded-xl border px-3.5 py-2 text-left transition-colors ${
                  isActive
                    ? 'border-[#f97316] bg-[#f97316]/12 dark:border-[#f97316]/60 dark:bg-[#f97316]/15'
                    : 'border-[#9a3412]/12 bg-[#f0e7d6]/55 hover:border-[#f97316]/50 dark:border-white/10 dark:bg-white/5'
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    isActive ? 'text-[#c2410c] dark:text-[#fb923c]' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {lvl.label}
                  <span className="ml-1.5 font-normal text-gray-400">{levelCounts[lvl.key]}</span>
                </span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">{lvl.sub}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 w-full max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question or keyword…"
            inputMode="search"
            className="w-full rounded-full border border-[#9a3412]/12 bg-[#f0e7d6]/55 px-5 py-3 text-sm shadow-sm outline-none transition-colors focus:border-[#f97316] dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
          {normalizedQuery ? (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {totalShown} of {levelTotal} questions match &ldquo;{query}&rdquo; in {activeLevel.label}
            </p>
          ) : (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Showing {levelTotal} questions — {activeLevel.label} ({activeLevel.sub})
            </p>
          )}
        </div>
      </PageHero>

      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Mobile / tablet: horizontal scrollable nav */}
        <div className="lg:hidden">
          <CategoryNav categories={navCategories} />
        </div>

        {/* Desktop: sticky left topic bar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <QASidebar categories={navCategories} />
          </div>
        </aside>

        <div className="flex flex-col gap-10 sm:gap-14">
          {filtered.map((cat) => (
          <section key={cat.title} id={slugify(cat.title)} className="scroll-mt-24">
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900 sm:mb-5 sm:text-xl dark:text-white">
              <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-[#c2410c] to-[#fb923c]" />
              {cat.title}
              <span className="text-sm font-normal text-gray-400">{cat.items.length}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cat.items.map((item, idx) => (
                <div
                  key={`${cat.title}-${idx}`}
                  id={anchorFromText(item.q)}
                  className={`scroll-mt-24 rounded-xl border border-[#9a3412]/12 bg-[#f0e7d6]/55 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 dark:border-white/10 dark:bg-[#f97316]/8 ${
                    item.code ? 'md:col-span-2' : ''
                  }`}
                >
                  <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">{item.q}</p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.a}</p>
                  {item.code && <CodeBlock code={item.code} language="jsx" className="mt-3" />}
                </div>
              ))}
            </div>
          </section>
        ))}

          {filtered.length === 0 && (
            <p className="py-12 text-center text-gray-500 dark:text-gray-400">
              No questions match your search.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default InterviewQAPage;
