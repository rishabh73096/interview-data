import React from 'react';
import PageHero from '../components/PageHero';

const sections: {
  href: string;
  icon: string;
  title: string;
  stat: string;
  description: string;
}[] = [
  {
    href: '/components',
    icon: '</>',
    title: 'Live Components',
    stat: '26 components',
    description:
      'Real, working React components — Accordion, Kanban Board, Infinite Scroll, Autocomplete and more. Every one is live on the page with its full source code one click away.',
  },
  {
    href: '/interview-qa',
    icon: 'Q',
    title: 'Quick Interview Q&A',
    stat: '162 questions',
    description:
      'Short, 1–2 line answers across JavaScript, React, Node, databases and system design — with runnable code examples for the ones that need them. Built for a fast pass before an interview.',
  },
  {
    href: '/system-design',
    icon: 'S',
    title: 'System Design Notebook',
    stat: '13 topics · 3 chapters',
    description:
      'Proper notebook-style notes, not one-liners — Requirements, Capacity Estimation, API & Database Design, SQL vs NoSQL, Indexing, Caching and Redis, with diagrams where they help more than words.',
  },
  {
    href: '/coding-questions',
    icon: '{}',
    title: 'Coding Practice',
    stat: '70 problems',
    description:
      'Array, string and object problems from real machine-coding rounds, each with an editable, runnable solution — tweak the input and hit Run to see the output update live.',
  },
];

const HomePage: React.FC = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <PageHero
        eyebrow="Frontend Interview Prep"
        title="Everything you need to"
        accent="prep for your next interview"
        description={
          <>
            One place instead of six open tabs: live React components to study and reuse, a fast
            revision sheet of Q&amp;A, proper system design notes, and runnable coding-round practice —
            all built from scratch, all in one hub.
          </>
        }
      />

      <section className="pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="group flex flex-col gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-7 dark:border-white/10 dark:bg-white/3"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 font-mono text-base font-bold text-white shadow-sm">
                  {section.icon}
                </span>
                <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-gray-500 dark:border-white/10 dark:text-gray-400">
                  {section.stat}
                </span>
              </div>
              <div>
                <h2 className="mb-1.5 flex items-center gap-1.5 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                  {section.title}
                  <span className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-500">
                    →
                  </span>
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{section.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
