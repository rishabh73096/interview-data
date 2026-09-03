"use client";

import React, { useEffect, useRef, useState } from 'react';
import DocRenderer from './DocRenderer';
import PageHero from './PageHero';

export interface RoadmapPhase {
  id: string;
  title: string;
  duration: string;
  content: string;
}

export interface RoadmapChapter {
  id: string;
  title: string;
  phases: RoadmapPhase[];
}

export interface RoadmapCrossLink {
  href: string;
  label: string;
  badge: string;
}

interface RoadmapViewProps {
  chapters: RoadmapChapter[];
  eyebrow: string;
  title: string;
  accent: string;
  description: React.ReactNode;
  crossLinks: RoadmapCrossLink[];
  navLabel?: string;
}

const RoadmapView: React.FC<RoadmapViewProps> = ({
  chapters,
  eyebrow,
  title,
  accent,
  description,
  crossLinks,
  navLabel = 'Phases',
}) => {
  const [activeId, setActiveId] = useState<string>(chapters[0].phases[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const SidebarLinks: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => (
    <div className="flex flex-col gap-5">
      {chapters.map((chapter, chIdx) => (
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
                    ? 'bg-[#9a7b53]/14 font-medium text-[#7f5f37] dark:text-[#cdb083]'
                    : 'text-gray-600 hover:bg-black/5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white'
                }`}
              >
                {phase.title}
              </a>
            ))}
          </div>
        </div>
      ))}

      {crossLinks.length > 0 && (
        <div className="mt-1 flex flex-col gap-0.5 border-t border-black/10 pt-4 dark:border-white/10">
          {crossLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-[10px] font-bold text-white">
                {link.badge}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
      <PageHero eyebrow={eyebrow} title={title} accent={accent} description={description} />

      {/* mobile contents toggle */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={() => setMobileNavOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg border border-[#6b5836]/12 bg-[#f0e7d6]/55 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-[#a9885d]/8 dark:text-gray-200"
        >
          {navLabel}
          <span className={`transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`}>⌄</span>
        </button>
        {mobileNavOpen && (
          <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-lg border border-[#6b5836]/12 bg-[#f0e7d6]/55 p-3 shadow-sm dark:border-white/10 dark:bg-[#a9885d]/8">
            <SidebarLinks onNavigate={() => setMobileNavOpen(false)} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <SidebarLinks />
          </div>
        </aside>

        <div className="min-w-0">
          {chapters.map((chapter, chIdx) => (
            <div key={chapter.id} className="mb-10 min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-sm font-bold text-white">
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
                    className="min-w-0 scroll-mt-24 rounded-xl border border-[#6b5836]/12 bg-[#f0e7d6]/55 p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-[#a9885d]/8"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                        {phase.title}
                      </h3>
                      <span className="rounded-full border border-[#9a7b53]/25 bg-[#9a7b53]/12 px-3 py-0.5 text-xs font-medium text-[#6f5230] dark:border-white/12 dark:bg-[#c9b48f]/12 dark:text-[#d8bf94]">
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
    </main>
  );
};

export default RoadmapView;
