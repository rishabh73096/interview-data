"use client";

import React, { useEffect, useRef, useState } from 'react';
import { roadmapChapters } from '../../data/roadmap';
import DocRenderer from '../../components/DocRenderer';
import PageHero from '../../components/PageHero';

const totalPhases = roadmapChapters.reduce((sum, ch) => sum + ch.phases.length, 0);

const SidebarLinks: React.FC<{ activeId: string; onNavigate?: () => void }> = ({ activeId, onNavigate }) => (
  <div className="flex flex-col gap-5">
    {roadmapChapters.map((chapter, chIdx) => (
      <div key={chapter.id}>
        <p className="mb-2 px-3 text-[11px] font-semibold tracking-wide text-gray-400 uppercase dark:text-gray-500">
          {String(chIdx + 1).padStart(2, '0')} · {chapter.title}
        </p>
        <div className="flex flex-col gap-0.5">
          {chapter.phases.map((phase) => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              onClick={onNavigate}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                activeId === phase.id
                  ? 'bg-orange-500/10 font-medium text-orange-700 dark:text-orange-400'
                  : 'text-gray-600 hover:bg-black/5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {phase.title}
            </a>
          ))}
        </div>
      </div>
    ))}

    <div className="mt-1 flex flex-col gap-0.5 border-t border-black/10 pt-4 dark:border-white/10">
      <a
        href="/system-design"
        onClick={onNavigate}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 text-[10px] font-bold text-white">
          S
        </span>
        System Design Notes
      </a>
      <a
        href="/interview-qa"
        onClick={onNavigate}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 text-[10px] font-bold text-white">
          Q
        </span>
        Quick Interview Q&amp;A
      </a>
    </div>
  </div>
);

const RoadmapPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(roadmapChapters[0].phases[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>('[data-phase-id]'));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-phase-id');
          if (id) setActiveId(id);
        }
      },
      { rootMargin: '-100px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach((el) => observerRef.current?.observe(el));

    const handleScroll = () => setShowGoTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
      <PageHero
        eyebrow="Career Track"
        title="Next-Level"
        accent="Roadmap"
        description={
          <>
            {totalPhases} phases to go from a MERN developer (React + Node + MongoDB) to a{' '}
            <strong>Full Stack + React Native + AI Application Engineer</strong> — the profile a
            5-6&nbsp;year senior is expected to have. Web, mobile, backend, cloud and AI in one track.
          </>
        }
      />

      {/* mobile contents toggle */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={() => setMobileNavOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg border border-orange-900/8 bg-orange-50/60 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm dark:border-orange-400/10 dark:bg-orange-500/5 dark:text-gray-200"
        >
          Phases
          <span className={`transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`}>⌄</span>
        </button>
        {mobileNavOpen && (
          <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-lg border border-orange-900/8 bg-orange-50/60 p-3 shadow-sm dark:border-orange-400/10 dark:bg-orange-500/5">
            <SidebarLinks activeId={activeId} onNavigate={() => setMobileNavOpen(false)} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <SidebarLinks activeId={activeId} />
          </div>
        </aside>

        <div className="min-w-0">
          {roadmapChapters.map((chapter, chIdx) => (
            <div key={chapter.id} className="mb-10 min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 text-sm font-bold text-white">
                  {String(chIdx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">{chapter.title}</h2>
              </div>

              <div className="flex min-w-0 flex-col gap-6">
                {chapter.phases.map((phase) => (
                  <article
                    key={phase.id}
                    id={phase.id}
                    data-phase-id={phase.id}
                    className="min-w-0 scroll-mt-24 rounded-xl border border-orange-900/8 bg-orange-50/60 p-5 shadow-sm sm:p-7 dark:border-orange-400/10 dark:bg-orange-500/5"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                        {phase.title}
                      </h3>
                      <span className="rounded-full border border-orange-500/20 bg-orange-500/8 px-3 py-0.5 text-xs font-medium text-orange-800 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300">
                        {phase.duration}
                      </span>
                    </div>
                    <DocRenderer content={phase.content} />
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`fixed right-4 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 text-white shadow-lg transition-all duration-200 sm:right-8 sm:bottom-8 ${
          showGoTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        ↑
      </button>
    </main>
  );
};

export default RoadmapPage;
