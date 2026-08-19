"use client";

import React, { useMemo, useState } from 'react';
import { qaCategories } from '../../data/interviewQA';

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

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <section className="flex flex-col items-center gap-4 py-16 text-center">
        <span className="rounded-full border border-black/10 bg-black/3 px-4 py-1 text-xs font-medium tracking-wide text-gray-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
          Fast Revision
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Quick Interview{' '}
          <span className="bg-linear-to-r from-sky-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent">
            Q&amp;A
          </span>
        </h1>
        <p className="max-w-2xl text-base text-gray-600 sm:text-lg dark:text-gray-300">
          {totalQuestions} short, 1-2 line answers across JavaScript, React, Node,
          databases, system design and more — built for a fast pass before your next
          full-stack interview.
        </p>

        <div className="mt-4 w-full max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question or keyword…"
            className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm shadow-sm outline-none transition-colors focus:border-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
          {normalizedQuery && (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {totalShown} of {totalQuestions} questions match &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      <nav className="flex flex-wrap justify-center gap-2 pb-12">
        {qaCategories.map((cat) => (
          <a
            key={cat.title}
            href={`#${slugify(cat.title)}`}
            className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:text-gray-300 dark:hover:text-sky-400"
          >
            {cat.title} <span className="text-gray-400">({cat.items.length})</span>
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-14">
        {filtered.map((cat) => (
          <section key={cat.title} id={slugify(cat.title)} className="scroll-mt-24">
            <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
              <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-sky-600 to-emerald-400" />
              {cat.title}
              <span className="text-sm font-normal text-gray-400">{cat.items.length}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cat.items.map((item, idx) => (
                <div
                  key={`${cat.title}-${idx}`}
                  className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-white/3"
                >
                  <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">{item.q}</p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.a}</p>
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
    </main>
  );
};

export default InterviewQAPage;
