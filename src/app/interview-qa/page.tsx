"use client";

import React, { useMemo, useState } from 'react';
import { qaCategories } from '../../data/interviewQA';
import CodeBlock from '../../components/CodeBlock';
import PageHero from '../../components/PageHero';
import CategoryNav from '../../components/CategoryNav';
import QASidebar from '../../components/QASidebar';

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const totalQuestions = qaCategories.reduce((sum, cat) => sum + cat.items.length, 0);

const InterviewQAPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalizedQuery) return qaCategories;
    return qaCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalizedQuery) ||
            item.a.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [normalizedQuery]);

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
            design and more — built for a fast pass before your next full-stack interview.
          </>
        }
      >
        <div className="mt-4 w-full max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question or keyword…"
            inputMode="search"
            className="w-full rounded-full border border-orange-900/8 bg-orange-50/60 px-5 py-3 text-sm shadow-sm outline-none transition-colors focus:border-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
          {normalizedQuery && (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {totalShown} of {totalQuestions} questions match &ldquo;{query}&rdquo;
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
              <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-orange-600 to-yellow-400" />
              {cat.title}
              <span className="text-sm font-normal text-gray-400">{cat.items.length}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cat.items.map((item, idx) => (
                <div
                  key={`${cat.title}-${idx}`}
                  className={`rounded-xl border border-orange-900/8 bg-orange-50/60 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 dark:border-orange-400/10 dark:bg-orange-500/5 ${
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
