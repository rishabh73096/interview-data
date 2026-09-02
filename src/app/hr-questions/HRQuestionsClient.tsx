"use client";

import React, { useMemo, useState } from 'react';
import { hrCategories } from '../../data/hrQuestions';
import PageHero from '../../components/PageHero';
import CategoryNav from '../../components/CategoryNav';

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const totalQuestions = hrCategories.reduce((sum, cat) => sum + cat.items.length, 0);

const finalTips = [
  "Don't memorize word-for-word — internalize the structure, speak naturally.",
  'Always have 1–2 concrete project examples ready — booking system, RBAC, Stripe integration, rewards engine. Numbers matter (200+ users, 100+ transactions, 40% faster load times).',
  "Salary conversation: state your number confidently (7–8 LPA), don't apologize for it.",
  'For "why leaving current company": stay positive, frame it as growth-seeking, never criticize your current employer.',
  "Research the company before every interview — 2 minutes on their product page and LinkedIn goes a long way.",
  'Practice out loud, especially the self-introduction — it sets the tone for the rest of the interview.',
];

const HRQuestionsClient: React.FC = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalizedQuery) return hrCategories;
    return hrCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalizedQuery) || item.a.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [normalizedQuery]);

  const totalShown = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20">
      <PageHero
        eyebrow="HR Round Prep"
        title="HR &"
        accent="Behavioral Questions"
        description={
          <>
            {totalQuestions} questions with full, speakable answers — self-introduction, salary
            negotiation, conflict handling, ownership stories and more. Written as talking points to
            internalize, not lines to memorize.
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
            className="w-full rounded-full border border-[#6b5836]/12 bg-[#f0e7d6]/55 px-5 py-3 text-sm shadow-sm outline-none transition-colors focus:border-[#a9885d] dark:border-white/10 dark:bg-[#a9885d]/8 dark:text-white"
          />
          {normalizedQuery && (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {totalShown} of {totalQuestions} questions match &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </PageHero>

      <CategoryNav
        categories={hrCategories.map((cat) => ({
          id: slugify(cat.title),
          title: cat.title,
          count: cat.items.length,
        }))}
      />

      <div className="flex flex-col gap-10">
        {filtered.map((cat) => {
          const isSelfIntro = cat.title === 'Self-Introduction';
          return (
            <section key={cat.title} id={slugify(cat.title)} className="scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-[#93764f] to-[#c1a67d]" />
                {cat.title}
                <span className="text-sm font-normal text-gray-400">{cat.items.length}</span>
              </h2>
              <div className={`grid grid-cols-1 gap-4 ${isSelfIntro ? '' : 'lg:grid-cols-2'}`}>
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border p-5 shadow-sm sm:p-6 ${
                      isSelfIntro
                        ? 'border-[#9a7b53]/35 bg-linear-to-br from-[#efe6d4] to-[#e7dbc3]/60 dark:border-white/12 dark:from-white/8 dark:to-white/4'
                        : 'border-[#6b5836]/12 bg-[#f0e7d6]/55 dark:border-white/10 dark:bg-[#a9885d]/8'
                    }`}
                  >
                    <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">{item.q}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">No questions match your search.</p>
        )}
      </div>

      {!normalizedQuery && (
        <section className="mt-10 rounded-xl border border-[#9a7b53]/25 bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] p-5 text-white shadow-sm sm:p-7">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">Final tips before you walk in</h2>
          <ul className="flex flex-col gap-2.5">
            {finalTips.map((tip, idx) => (
              <li key={idx} className="flex gap-2.5 text-sm leading-relaxed sm:text-base">
                <span className="mt-0.5 shrink-0 opacity-80">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default HRQuestionsClient;
