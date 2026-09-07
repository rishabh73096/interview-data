"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { codingQuestionCategories } from '../../data/codingQuestions';
import PageHero from '../../components/PageHero';
import CategoryNav from '../../components/CategoryNav';
import NumberBadge from '../../components/NumberBadge';
import PracticeDrawer, { PracticeQuestion } from '../../components/PracticeDrawer';
import { slugify, anchorFromText } from '../../lib/anchor';

const totalQuestions = codingQuestionCategories.reduce((sum, cat) => sum + cat.items.length, 0);
const solvedCount = codingQuestionCategories.reduce(
  (sum, cat) => sum + cat.items.filter((item) => item.code).length,
  0
);

const CodingQuestionsClient: React.FC = () => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<PracticeQuestion | null>(null);
  const normalizedQuery = query.trim().toLowerCase();

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

  // Arriving from global search (/coding-questions#q-...) — open that problem.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!hash) return;
    for (const cat of codingQuestionCategories) {
      const idx = cat.items.findIndex((item) => anchorFromText(item.q) === hash);
      if (idx !== -1) {
        const item = cat.items[idx];
        if (item.code) {
          setActive({ q: item.q, code: item.code, category: cat.title, n: idx + 1 });
        }
        document.getElementById(hash)?.scrollIntoView({ block: 'center' });
        break;
      }
    }
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
      <PageHero
        eyebrow="Coding Practice"
        title="Machine-Coding &"
        accent="JS Utility Problems"
        description={
          <>
            {totalQuestions} hand-picked problems — arrays, strings, objects, and the practical
            JavaScript utilities a full-stack developer with 3&ndash;4 years&apos; experience is expected to
            write on the spot. {solvedCount} have a runnable solution — click a question to open it in a
            side editor with autocomplete, edit the code, and hit Run.
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
            className="w-full rounded-full border border-[#6b5836]/12 bg-[#f0e7d6]/55 px-5 py-3 text-sm shadow-sm outline-none transition-colors focus:border-[#a9885d] dark:border-white/10 dark:bg-white/5 dark:text-white"
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
              <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-[#93764f] to-[#c1a67d]" />
              {cat.title}
              <span className="text-sm font-normal text-gray-400">{cat.items.length}</span>
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#6b5836]/12 bg-[#f0e7d6]/55 shadow-sm dark:border-white/10 dark:bg-[#a9885d]/8">
              {cat.items.map((item, idx) => {
                const key = `${cat.title}-${idx}`;
                return (
                  <button
                    key={key}
                    id={anchorFromText(item.q)}
                    onClick={() =>
                      item.code &&
                      setActive({ q: item.q, code: item.code, category: cat.title, n: idx + 1 })
                    }
                    disabled={!item.code}
                    className={`group flex w-full scroll-mt-24 items-center gap-3 border-b border-black/5 px-4 py-3.5 text-left last:border-0 sm:px-5 dark:border-white/5 ${
                      item.code ? 'cursor-pointer hover:bg-black/2 dark:hover:bg-white/3' : 'cursor-default'
                    }`}
                  >
                    <NumberBadge n={idx + 1} size="sm" />
                    <p className="flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{item.q}</p>
                    {item.code ? (
                      <span className="shrink-0 text-xs font-medium text-gray-400 transition-colors group-hover:text-[#96703f] dark:group-hover:text-[#c9a877]">
                        Open&nbsp;→
                      </span>
                    ) : (
                      <span className="hidden shrink-0 rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-gray-500 sm:inline-block dark:bg-white/10 dark:text-gray-400">
                        Solution soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">No questions match your search.</p>
        )}
      </div>

      <PracticeDrawer question={active} onClose={() => setActive(null)} />
    </main>
  );
};

export default CodingQuestionsClient;
