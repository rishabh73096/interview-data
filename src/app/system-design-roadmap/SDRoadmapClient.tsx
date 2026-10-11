"use client";

import React, { useEffect, useMemo, useState } from 'react';
import PageHero from '../../components/PageHero';
import {
  companyFocus,
  levelMeta,
  sdRoadmapTopics,
  type SDLevel,
  type SDTrack,
} from '../../data/sdRoadmap';

const STORAGE_KEY = 'sd-roadmap-done';
const levels: SDLevel[] = ['basic', 'medium', 'hard'];
const allCompanies = Array.from(new Set(sdRoadmapTopics.flatMap((t) => t.companies))).sort();

const levelStyle: Record<SDLevel, string> = {
  basic: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  medium: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  hard: 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
};

const trackLabel: Record<SDTrack, string> = { backend: 'Backend', frontend: 'Frontend', mobile: 'Mobile' };

const pill = (active: boolean) =>
  `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
    active
      ? 'border-transparent bg-linear-to-r from-[#c2410c] via-[#ea580c] to-[#fb923c] text-white shadow-sm'
      : 'border-black/10 text-gray-600 hover:border-[#f97316] hover:text-[#c2410c] dark:border-white/10 dark:text-gray-300 dark:hover:text-[#fdba74]'
  }`;

const SDRoadmapClient: React.FC = () => {
  const [track, setTrack] = useState<SDTrack>('backend');
  const [level, setLevel] = useState<SDLevel | 'all'>('all');
  const [company, setCompany] = useState('all');
  const [query, setQuery] = useState('');
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* storage unavailable — progress just won't persist */
    }
  }, []);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const trackTopics = useMemo(() => sdRoadmapTopics.filter((t) => t.track === track), [track]);
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      trackTopics.filter(
        (t) =>
          (level === 'all' || t.level === level) &&
          (company === 'all' || t.companies.includes(company)) &&
          (!q || t.title.toLowerCase().includes(q) || t.points.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
      ),
    [trackTopics, level, company, q]
  );

  const trackDone = trackTopics.filter((t) => done.includes(t.id)).length;
  const pct = Math.round((trackDone / trackTopics.length) * 100);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20">
      <PageHero
        eyebrow="Interview Roadmap"
        title="System Design"
        accent="Backend · Frontend · Mobile"
        description={
          <>
            {sdRoadmapTopics.length} topics split into basic, medium and hard — with the companies that typically
            ask them. Tick topics off as you finish; progress is saved in your browser.
          </>
        }
      >
        <div className="mt-4 flex gap-2">
          {(['backend', 'frontend', 'mobile'] as SDTrack[]).map((t) => (
            <button key={t} onClick={() => setTrack(t)} className={pill(track === t)}>
              {trackLabel[t]}
            </button>
          ))}
        </div>

        <div className="mt-3 w-full max-w-xl">
          <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>
              {trackDone} / {trackTopics.length} done
            </span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-linear-to-r from-[#c2410c] via-[#ea580c] to-[#fb923c] transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </PageHero>

      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          <button onClick={() => setLevel('all')} className={pill(level === 'all')}>
            All levels
          </button>
          {levels.map((l) => (
            <button key={l} onClick={() => setLevel(l)} className={pill(level === l)}>
              {levelMeta[l].label}
            </button>
          ))}
        </div>
        <div className="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a topic…"
            className="w-full rounded-full border border-[#9a3412]/12 bg-[#f0e7d6]/55 px-5 py-2.5 text-sm shadow-sm outline-none transition-colors focus:border-[#f97316] dark:border-white/10 dark:bg-[#f97316]/8 dark:text-white"
          />
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-label="Filter by company"
            className="rounded-full border border-[#9a3412]/12 bg-[#f0e7d6]/55 px-4 py-2.5 text-sm outline-none focus:border-[#f97316] dark:border-white/10 dark:bg-[#f97316]/8 dark:text-white"
          >
            <option value="all">All companies</option>
            {allCompanies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {levels
          .filter((l) => level === 'all' || l === level)
          .map((l) => {
            const items = visible.filter((t) => t.level === l);
            if (items.length === 0) return null;
            return (
              <section key={l}>
                <h2 className="mb-1 flex items-center gap-3 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-[#c2410c] to-[#fb923c]" />
                  {levelMeta[l].label}
                  <span className="text-sm font-normal text-gray-400">{items.length}</span>
                </h2>
                <p className="mb-4 text-xs text-gray-500 sm:text-sm dark:text-gray-400">{levelMeta[l].hint}</p>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {items.map((t) => {
                    const isDone = done.includes(t.id);
                    return (
                      <div
                        key={t.id}
                        className={`rounded-xl border border-[#9a3412]/12 bg-[#f0e7d6]/55 p-5 shadow-sm transition-opacity dark:border-white/10 dark:bg-[#f97316]/8 ${
                          isDone ? 'opacity-60' : ''
                        }`}
                      >
                        <div className="mb-2 flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => toggle(t.id)}
                            aria-label={`Mark "${t.title}" as done`}
                            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#ea580c]"
                          />
                          <div className="min-w-0 flex-1">
                            <p className={`text-sm font-semibold text-gray-900 dark:text-white ${isDone ? 'line-through' : ''}`}>
                              {t.title}
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
                              <span className={`rounded-full px-2 py-0.5 font-medium ${levelStyle[t.level]}`}>
                                {levelMeta[t.level].label}
                              </span>
                              <span className="text-gray-500 dark:text-gray-400">{t.category}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{t.points}</p>
                        {t.snippet && (
                          <details className="mt-3">
                            <summary className="cursor-pointer text-xs font-medium text-[#c2410c] dark:text-[#fdba74]">
                              Show folder structure
                            </summary>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-black/5 p-3 text-xs leading-relaxed text-gray-800 dark:bg-white/5 dark:text-gray-200">
                              {t.snippet}
                            </pre>
                          </details>
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          {t.companies.map((c) => (
                            <button
                              key={c}
                              onClick={() => setCompany(c)}
                              className="rounded-full border border-black/10 px-2 py-0.5 text-[11px] text-gray-600 transition-colors hover:border-[#f97316] hover:text-[#c2410c] dark:border-white/10 dark:text-gray-300 dark:hover:text-[#fdba74]"
                            >
                              {c}
                            </button>
                          ))}
                          {t.notebook && (
                            <a
                              href={`/system-design#${t.notebook}`}
                              className="ml-auto text-xs font-medium text-[#c2410c] hover:underline dark:text-[#fdba74]"
                            >
                              Read notes →
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

        {visible.length === 0 && (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">No topics match these filters.</p>
        )}
      </div>

      <section className="mt-12 rounded-xl border border-[#ea580c]/25 bg-linear-to-br from-[#c2410c] via-[#ea580c] to-[#fb923c] p-5 text-white shadow-sm sm:p-7">
        <h2 className="mb-1 text-lg font-semibold sm:text-xl">What each company tends to focus on</h2>
        <p className="mb-4 text-xs opacity-80">
          General patterns, not guarantees — loops vary by team, level and interviewer.
        </p>
        <ul className="flex flex-col gap-3">
          {companyFocus.map((c) => (
            <li key={c.company} className="text-sm leading-relaxed sm:text-base">
              <span className="font-semibold">{c.company}:</span> {c.focus}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default SDRoadmapClient;
