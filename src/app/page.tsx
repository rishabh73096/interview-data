import React from 'react';
import PageHero from '../components/PageHero';
import CreatorSection from '../components/CreatorSection';

const sections: {
  href: string;
  title: string;
  stat: string;
  count: number;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    href: '/components',
    title: 'Live Components',
    stat: '26 components',
    count: 26,
    description:
      'Real, working React components — Accordion, Kanban Board, Infinite Scroll, Autocomplete and more. Every one is live on the page with its full source code one click away.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </svg>
    ),
  },
  {
    href: '/interview-qa',
    title: 'Quick Interview Q&A',
    stat: '224 questions',
    count: 224,
    description:
      'Short, 1–2 line answers across JavaScript, React, Node, databases, system design, Git, TypeScript and more — with runnable code examples for the ones that need them. Built for a fast pass before an interview.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="12" y2="13" />
      </svg>
    ),
  },
  {
    href: '/system-design',
    title: 'System Design Notebook',
    stat: '13 topics · 3 chapters',
    count: 13,
    description:
      'Proper notebook-style notes, not one-liners — Requirements, Capacity Estimation, API & Database Design, SQL vs NoSQL, Indexing, Caching and Redis, with diagrams where they help more than words.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    href: '/coding-questions',
    title: 'Coding Practice',
    stat: '70 problems',
    count: 70,
    description:
      'Array, string and object problems from real machine-coding rounds, each with an editable, runnable solution — tweak the input and hit Run to see the output update live.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    href: '/roadmap',
    title: 'Full Stack + AI Roadmap',
    stat: '19 phases',
    count: 19,
    description:
      'A phase-by-phase career track from MERN developer to Full Stack + React Native + AI Application Engineer — web, mobile, backend, cloud, LLMs, RAG and agents, with the projects to build at each stage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
];

const statTiles = [
  { label: 'Live components', value: '26' },
  { label: 'Q&A questions', value: '224' },
  { label: 'Coding problems', value: '70' },
  { label: 'Roadmap phases', value: '19' },
];

const steps = [
  {
    n: '01',
    title: 'Study',
    description: 'Read the System Design notebook and skim the live Components to see the patterns in action.',
  },
  {
    n: '02',
    title: 'Revise',
    description: 'Drill the Quick Q&A sheet for a fast pass on JavaScript, React, Node and database concepts.',
  },
  {
    n: '03',
    title: 'Practice',
    description: 'Solve the Coding Practice problems in the live editor — edit, run, and see the output instantly.',
  },
  {
    n: '04',
    title: 'Level up',
    description: 'Follow the Full Stack + AI Roadmap to plan what to learn next — mobile, cloud, LLMs, RAG and agents.',
  },
];

const maxCount = Math.max(...sections.map((s) => s.count));

const HomePage: React.FC = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <PageHero
        eyebrow="Full Stack Developer · Interview Prep"
        title="Everything a full stack developer needs to"
        accent="prep for the next interview"
        description={
          <>
            One place instead of six open tabs: live React components to study and reuse, a fast
            revision sheet of 224+ Q&amp;A across JavaScript, React, Node, databases, system design and
            Git, proper system design notes, runnable coding-round practice, and a full stack + AI
            career roadmap — all built from scratch, all in one hub.
          </>
        }
      />

      {/* stat tiles */}
      <section className="pb-10 sm:pb-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {statTiles.map((tile) => (
            <div
              key={tile.label}
              className="rounded-xl border border-orange-900/8 bg-orange-50/60 px-4 py-4 text-center dark:border-orange-400/10 dark:bg-orange-500/5"
            >
              <p className="bg-linear-to-br from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {tile.value}
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm dark:text-gray-400">{tile.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* what's inside — bar chart */}
      <section className="pb-10 sm:pb-14">
        <div className="rounded-xl border border-orange-900/8 bg-orange-50/60 p-5 sm:p-7 dark:border-orange-400/10 dark:bg-orange-500/5">
          <h2 className="mb-5 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
            What&apos;s inside, by the numbers
          </h2>
          <div className="flex flex-col gap-4">
            {sections.map((section) => {
              const widthPct = Math.max((section.count / maxCount) * 100, 4);
              return (
                <div key={section.href} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-200">{section.title}</span>
                    <span className="font-semibold text-gray-900 tabular-nums dark:text-white">{section.count}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-orange-500/10 dark:bg-orange-400/10">
                    <div
                      className="h-3 rounded-full bg-linear-to-r from-orange-600 to-amber-500"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* section cards */}
      <section className="pb-10 sm:pb-14">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="group flex flex-col gap-4 rounded-xl border border-orange-900/8 bg-orange-50/60 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-7 dark:border-orange-400/10 dark:bg-orange-500/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 text-white shadow-sm">
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

      {/* how to use this hub */}
      <section className="pb-14 sm:pb-20">
        <h2 className="mb-1.5 text-center text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
          How to use this hub
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-sm text-gray-600 sm:text-base dark:text-gray-300">
          Four steps, one order that actually works — from revision to your next skill.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.n} className="relative flex flex-col items-center gap-3 px-4 text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 text-sm font-bold text-white shadow-sm">
                {step.n}
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.description}</p>
              {idx < steps.length - 1 && (
                <span className="hidden text-2xl leading-none text-orange-400/60 md:absolute md:top-4 md:-right-2 md:block dark:text-orange-500/40">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Creator Info & Portfolio section */}
      <CreatorSection />
    </main>
  );
};

export default HomePage;
