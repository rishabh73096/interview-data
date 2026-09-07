// Global search index — flattens every content source in the project into a
// single searchable list. Imports all data files, so this module is only ever
// pulled in lazily (by GlobalSearchModal via next/dynamic), never in the shared
// bundle.

import { slugify, anchorFromText } from './anchor';
import { componentsMeta } from '../data/componentsMeta';
import { qaCategories } from '../data/interviewQA';
import { codingQuestionCategories } from '../data/codingQuestions';
import { hrCategories } from '../data/hrQuestions';
import { systemDesignChapters } from '../data/systemDesign';
import { roadmapChapters } from '../data/roadmap';
import { mobileRoadmapChapters } from '../data/roadmapMobile';
import { projectModuleChapters } from '../data/projectModules';

export type SearchGroup =
  | 'Components'
  | 'Interview Q&A'
  | 'Coding Practice'
  | 'System Design'
  | 'HR & Behavioral'
  | 'Roadmap'
  | 'Mobile Roadmap'
  | 'Project Modules';

export interface SearchEntry {
  id: string;
  group: SearchGroup;
  title: string;
  subtitle?: string;
  snippet: string;
  href: string;
  /** lowercased haystack, precomputed once */
  haystack: string;
}

/** strip markdown so snippets read as plain text */
const plain = (value: string): string =>
  value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^[>\-*+]\s+/gm, ' ')
    .replace(/[#*_~|>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const clip = (value: string, max = 160): string =>
  value.length > max ? `${value.slice(0, max).trimEnd()}…` : value;

const make = (
  id: string,
  group: SearchGroup,
  title: string,
  subtitle: string,
  bodyForSearch: string,
  snippetSource: string,
  href: string,
): SearchEntry => ({
  id,
  group,
  title,
  subtitle,
  snippet: clip(plain(snippetSource || title)),
  href,
  haystack: `${title} ${subtitle} ${bodyForSearch}`.toLowerCase(),
});

let cache: SearchEntry[] | null = null;

export function buildSearchIndex(): SearchEntry[] {
  if (cache) return cache;
  const entries: SearchEntry[] = [];

  componentsMeta.forEach((c) => {
    entries.push(
      make(
        `component-${c.name}`,
        'Components',
        c.name,
        'Live React component',
        c.description,
        c.description,
        `/components#comp-${c.name}`,
      ),
    );
  });

  qaCategories.forEach((cat) => {
    cat.items.forEach((item, i) => {
      entries.push(
        make(
          `qa-${slugify(cat.title)}-${i}`,
          'Interview Q&A',
          item.q,
          cat.title,
          `${item.a} ${item.code ?? ''}`,
          item.a,
          `/interview-qa#${anchorFromText(item.q)}`,
        ),
      );
    });
  });

  codingQuestionCategories.forEach((cat) => {
    cat.items.forEach((item, i) => {
      entries.push(
        make(
          `coding-${slugify(cat.title)}-${i}`,
          'Coding Practice',
          item.q,
          cat.title,
          `${item.a ?? ''} ${item.code ?? ''}`,
          item.a ?? item.code ?? item.q,
          `/coding-questions#${anchorFromText(item.q)}`,
        ),
      );
    });
  });

  hrCategories.forEach((cat) => {
    cat.items.forEach((item, i) => {
      entries.push(
        make(
          `hr-${slugify(cat.title)}-${i}`,
          'HR & Behavioral',
          item.q,
          cat.title,
          item.a,
          item.a,
          `/hr-questions#${anchorFromText(item.q)}`,
        ),
      );
    });
  });

  systemDesignChapters.forEach((chapter) => {
    chapter.topics.forEach((topic) => {
      entries.push(
        make(
          `sd-${topic.id}`,
          'System Design',
          topic.title,
          chapter.title,
          plain(topic.content),
          topic.content,
          `/system-design#${topic.id}`,
        ),
      );
    });
  });

  roadmapChapters.forEach((chapter) => {
    chapter.phases.forEach((phase) => {
      entries.push(
        make(
          `roadmap-${phase.id}`,
          'Roadmap',
          phase.title,
          chapter.title,
          plain(phase.content),
          phase.content,
          `/roadmap#${phase.id}`,
        ),
      );
    });
  });

  mobileRoadmapChapters.forEach((chapter) => {
    chapter.phases.forEach((phase) => {
      entries.push(
        make(
          `mobile-${phase.id}`,
          'Mobile Roadmap',
          phase.title,
          chapter.title,
          plain(phase.content),
          phase.content,
          `/roadmap-mobile#${phase.id}`,
        ),
      );
    });
  });

  projectModuleChapters.forEach((chapter) => {
    chapter.phases.forEach((phase) => {
      entries.push(
        make(
          `module-${phase.id}`,
          'Project Modules',
          phase.title,
          chapter.title,
          plain(phase.content),
          phase.content,
          `/project-modules#${phase.id}`,
        ),
      );
    });
  });

  cache = entries;
  return entries;
}

export interface SearchResult extends SearchEntry {
  score: number;
}

export function searchIndex(rawQuery: string, limit = 40): SearchResult[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return [];
  const terms = query.split(/\s+/).filter(Boolean);
  const index = buildSearchIndex();
  const results: SearchResult[] = [];

  for (const entry of index) {
    const title = entry.title.toLowerCase();
    const subtitle = (entry.subtitle ?? '').toLowerCase();

    // every term must appear somewhere (AND search)
    if (!terms.every((t) => entry.haystack.includes(t))) continue;

    let score = 0;
    if (title.includes(query)) score += 120;
    if (title.startsWith(query)) score += 60;
    for (const term of terms) {
      if (title.includes(term)) score += 14;
      if (subtitle.includes(term)) score += 5;
    }
    // whole phrase in body
    if (entry.haystack.includes(query)) score += 8;

    results.push({ ...entry, score });
  }

  results.sort((a, b) => b.score - a.score || a.title.length - b.title.length);
  return results.slice(0, limit);
}
