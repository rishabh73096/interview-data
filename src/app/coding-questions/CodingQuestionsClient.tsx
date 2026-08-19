"use client";

import React, { useMemo, useState } from 'react';
import { codingQuestionCategories } from '../../data/codingQuestions';
import PageHero from '../../components/PageHero';
import CategoryNav from '../../components/CategoryNav';
import NumberBadge from '../../components/NumberBadge';
import CodeRunner from '../../components/CodeRunner';

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const totalQuestions = codingQuestionCategories.reduce((sum, cat) => sum + cat.items.length, 0);
const solvedCount = codingQuestionCategories.reduce(
  (sum, cat) => sum + cat.items.filter((item) => item.code).length,
  0
);

const CodingQuestionsClient: React.FC = () => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const normalizedQuery = query.trim().toLowerCase();

  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (!normalizedQuery) return codingQuestionCategories;
    return codingQuestionCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => item.q.toLowerCase().includes(normalizedQuery)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [normalizedQuery]);

  const totalShown = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
      <PageHero
        eyebrow="Coding Practice"
        title="Array, String &"
        accent="Object Questions"
        description={
          <>
            {totalQuestions} hand-picked coding problems across arrays, strings and objects — the exact
            kind that show up in machine-coding interview rounds. {solvedCount} of {totalQuestions} have
            a runnable solution — click a question to open it, edit the code, and hit Run.
          </>
        }
      >
        <div className="mt-4 w-full max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question…"
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

      <CategoryNav
        categories={codingQuestionCategories.map((cat) => ({
          id: slugify(cat.title),
          title: cat.title,
          count: cat.items.length,
        }))}
      />

      <div className="flex flex-col gap-10">
        {filtered.map((cat) => (
          <section key={cat.title} id={slugify(cat.title)} className="scroll-mt-24">
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
              <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-orange-600 to-yellow-400" />
              {cat.title}
              <span className="text-sm font-normal text-gray-400">{cat.items.length}</span>
            </h2>

            <div className="overflow-hidden rounded-xl border border-orange-900/8 bg-orange-50/60 shadow-sm dark:border-orange-400/10 dark:bg-orange-500/5">
              {cat.items.map((item, idx) => {
                const key = `${cat.title}-${idx}`;
                const isOpen = expanded.has(key);
                return (
                  <div key={key} className="border-b border-black/5 last:border-0 dark:border-white/5">
                    <button
                      onClick={() => item.code && toggle(key)}
                      disabled={!item.code}
                      className={`flex w-full items-start gap-3 px-4 py-3.5 text-left sm:px-5 ${
                        item.code ? 'cursor-pointer hover:bg-black/2 dark:hover:bg-white/3' : 'cursor-default'
                      }`}
                    >
                      <NumberBadge n={idx + 1} size="sm" />
                      <p className="flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{item.q}</p>
                      {item.code ? (
                        <span
                          className={`shrink-0 text-xs text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        >
                          ⌄
                        </span>
                      ) : (
                        <span className="hidden shrink-0 rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-gray-500 sm:inline-block dark:bg-white/10 dark:text-gray-400">
                          Solution soon
                        </span>
                      )}
                    </button>
                    {item.code && isOpen && (
                      <div className="px-4 pb-4 sm:px-5">
                        <CodeRunner initialCode={item.code} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">No questions match your search.</p>
        )}
      </div>
    </main>
  );
};

export default CodingQuestionsClient;
