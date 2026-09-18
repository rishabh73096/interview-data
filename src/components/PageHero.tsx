import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: React.ReactNode;
  cta?: { label: string; href: string };
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, accent, description, cta, children }) => (
  <section className="flex flex-col items-center gap-3 py-7 text-center sm:gap-4 sm:py-10">
    <span className="rounded-full border border-[#ea580c]/25 bg-[#ea580c]/12 px-4 py-1 text-xs font-medium tracking-wide text-[#9a3412] uppercase dark:border-white/12 dark:bg-[#fb923c]/12 dark:text-[#fdba74]">
      {eyebrow}
    </span>
    <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
      {title}{' '}
      <span className="bg-linear-to-r from-[#c2410c] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent">
        {accent}
      </span>
    </h1>
    <p className="max-w-5xl text-sm text-gray-600 sm:text-base lg:text-lg dark:text-gray-300">{description}</p>
    {cta && (
      <a
        href={cta.href}
        className="mt-2 rounded-full bg-linear-to-r from-[#c2410c] via-[#ea580c] to-[#fb923c] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
      >
        {cta.label}
      </a>
    )}
    {children}
  </section>
);

export default PageHero;
