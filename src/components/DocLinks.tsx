import React from 'react';
import type { DocLink } from '../data/docLinks';

const DocLinks: React.FC<{ links: DocLink[]; title?: string; className?: string }> = ({
  links,
  title = 'Docs & reading',
  className = '',
}) => {
  if (links.length === 0) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span className="text-[11px] font-semibold tracking-wide text-gray-400 uppercase dark:text-gray-500">
        {title}
      </span>
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#ea580c]/30 bg-[#ea580c]/8 px-2.5 py-0.5 text-[11px] font-medium text-[#9a3412] transition-colors hover:border-[#f97316] hover:bg-[#ea580c]/15 dark:border-white/15 dark:bg-white/5 dark:text-[#fdba74]"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
};

export default DocLinks;
