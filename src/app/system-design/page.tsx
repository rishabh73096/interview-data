"use client";

import React, { useEffect, useRef, useState } from 'react';
import { systemDesignChapters } from '../../data/systemDesign';
import DocRenderer from '../../components/DocRenderer';
import PageHero from '../../components/PageHero';

const totalTopics = systemDesignChapters.reduce((sum, ch) => sum + ch.topics.length, 0);

const SidebarLinks: React.FC<{ activeId: string; onNavigate?: () => void }> = ({ activeId, onNavigate }) => (
  <div className="flex flex-col gap-5">
    {systemDesignChapters.map((chapter, chIdx) => (
      <div key={chapter.id}>
        <p className="mb-2 px-3 text-[11px] font-semibold tracking-wide text-gray-400 uppercase dark:text-gray-500">
          {String(chIdx + 1).padStart(2, '0')} · {chapter.title}
        </p>
        <div className="flex flex-col gap-0.5">
          {chapter.topics.map((topic) => (
            <a
              key={topic.id}
              href={`#${topic.id}`}
              onClick={onNavigate}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                activeId === topic.id
                  ? 'bg-[#9a7b53]/14 font-medium text-[#7f5f37] dark:text-[#cdb083]'
                  : 'text-gray-600 hover:bg-black/5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {topic.title}
            </a>
          ))}
        </div>
      </div>
    ))}

    <div className="mt-1 flex flex-col gap-0.5 border-t border-black/10 pt-4 dark:border-white/10">
      <a
        href="/components"
        onClick={onNavigate}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-[10px] font-bold text-white">
          C
        </span>
        Live Components
      </a>
      <a
        href="/interview-qa"
        onClick={onNavigate}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-[10px] font-bold text-white">
          Q
        </span>
        Quick Interview Q&amp;A
      </a>
      <a
        href="/coding-questions"
        onClick={onNavigate}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-[10px] font-bold text-white">
          {'</>'}
        </span>
        Coding Practice
      </a>
    </div>
  </div>
);

const SystemDesignPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(systemDesignChapters[0].topics[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>('[data-topic-id]'));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-topic-id');
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
        eyebrow="Study Notes"
        title="System Design"
        accent="Notebook"
        description={
          <>
            {totalTopics} topics across {systemDesignChapters.length} chapters — Requirements, Capacity
            Estimation, API &amp; Database Design, SQL vs NoSQL, Indexing, Caching, Redis, Load Balancing,
            Vertical vs Horizontal Scaling, Replication, Partitioning and Sharding. Written as proper
            notebook notes, not interview one-liners.
          </>
        }
      />

      {/* mobile contents toggle */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={() => setMobileNavOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg border border-[#6b5836]/12 bg-[#f0e7d6]/55 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-[#a9885d]/8 dark:text-gray-200"
        >
          Contents
          <span className={`transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`}>⌄</span>
        </button>
        {mobileNavOpen && (
          <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-lg border border-[#6b5836]/12 bg-[#f0e7d6]/55 p-3 shadow-sm dark:border-white/10 dark:bg-[#a9885d]/8">
            <SidebarLinks activeId={activeId} onNavigate={() => setMobileNavOpen(false)} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <SidebarLinks activeId={activeId} />
          </div>
        </aside>

        <div className="min-w-0">
          {systemDesignChapters.map((chapter, chIdx) => (
            <div key={chapter.id} className="mb-10 min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-sm font-bold text-white">
                  {String(chIdx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">{chapter.title}</h2>
              </div>

              <div className="flex min-w-0 flex-col gap-6">
                {chapter.topics.map((topic) => (
                  <article
                    key={topic.id}
                    id={topic.id}
                    data-topic-id={topic.id}
                    className="min-w-0 scroll-mt-24 rounded-xl border border-[#6b5836]/12 bg-[#f0e7d6]/55 p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-[#a9885d]/8"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                      {topic.title}
                    </h3>
                    <DocRenderer content={topic.content} />
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
        className={`fixed right-4 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-white shadow-lg transition-all duration-200 sm:right-8 sm:bottom-8 ${
          showGoTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        ↑
      </button>
    </main>
  );
};

export default SystemDesignPage;
