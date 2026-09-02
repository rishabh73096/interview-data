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
    <span className="rounded-full border border-[#9a7b53]/25 bg-[#9a7b53]/12 px-4 py-1 text-xs font-medium tracking-wide text-[#6f5230] uppercase dark:border-white/12 dark:bg-[#c9b48f]/12 dark:text-[#d8bf94]">
      {eyebrow}
    </span>
    <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
      {title}{' '}
      <span className="bg-linear-to-r from-[#93764f] via-[#a98c62] to-[#c7ad82] bg-clip-text text-transparent">
        {accent}
      </span>
    </h1>
    <p className="max-w-2xl text-sm text-gray-600 sm:text-base lg:text-lg dark:text-gray-300">{description}</p>
    {cta && (
      <a
        href={cta.href}
        className="mt-2 rounded-full bg-linear-to-r from-[#93764f] via-[#a98c62] to-[#c7ad82] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
      >
        {cta.label}
      </a>
    )}
    {children}
  </section>
);

export default PageHero;
