"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

interface LinkEntry {
  href: string;
  title: string;
  blurb: string;
  emoji: string;
}

const ALL_LINKS: LinkEntry[] = [
  { href: '/components', title: 'Live Components', blurb: '26 hand-built React components, source one click away', emoji: '🧱' },
  { href: '/interview-qa', title: 'Quick Interview Q&A', blurb: '224 short answers across JS, React, Node, DBs & Git', emoji: '⚡' },
  { href: '/system-design', title: 'System Design Notebook', blurb: '119 topics, FAANG-level, with full worked designs', emoji: '📐' },
  { href: '/coding-questions', title: 'Coding Practice', blurb: '112 problems in a VS-Code-style side editor', emoji: '⌨️' },
  { href: '/project-modules', title: 'Project Modules Explained', blurb: 'Auth, RBAC, rewards, payments — how each is built', emoji: '🧩' },
  { href: '/hr-questions', title: 'HR / Behavioural Prep', blurb: 'The non-technical round, with framed answers', emoji: '💬' },
  { href: '/roadmap', title: 'Full Stack AI Roadmap', blurb: 'MERN → Full Stack AI Engineer, phase by phase', emoji: '🚀' },
  { href: '/roadmap-mobile', title: 'React Native Roadmap', blurb: 'Your React knowledge → production mobile dev', emoji: '📱' },
];

const RelatedLinks: React.FC = () => {
  const pathname = usePathname() || '/';

  // The home page already has its own section grid.
  if (pathname === '/') return null;

  const links = ALL_LINKS.filter((l) => l.href !== pathname).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
      <div className="rounded-xl border border-[#6b5836]/12 bg-[#f0e7d6]/55 p-5 sm:p-6 dark:border-white/10 dark:bg-[#a9885d]/8">
        <p className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">You may also like</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col gap-1 rounded-lg border border-[#6b5836]/10 bg-white/40 p-3.5 transition-all hover:-translate-y-0.5 hover:border-[#a9885d]/40 hover:shadow-sm dark:border-white/8 dark:bg-white/5"
            >
              <span className="text-lg leading-none">{link.emoji}</span>
              <span className="mt-1 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                {link.title}
                <span className="text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#96703f] dark:group-hover:text-[#c9a877]">
                  →
                </span>
              </span>
              <span className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{link.blurb}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
