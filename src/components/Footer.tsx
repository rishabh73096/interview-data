import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 sm:mt-14">
      <div className="mx-auto max-w-7xl px-4 pb-6">
        <div className="rounded-t-xl bg-linear-to-r from-orange-600 via-amber-500 to-yellow-400 text-white shadow-lg ring-1 ring-black/5">
          <div className="flex flex-col items-center justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Interview Playground</p>
              <p className="max-w-md text-sm opacity-90">
                26 hand-built React components — from Counter to Kanban Board — kept as
                revision material for frontend interview prep.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 md:items-end">
              <div className="flex flex-wrap justify-center gap-2 text-xs font-medium md:justify-end">
                <span className="rounded-md bg-white/15 px-3 py-1">Next.js</span>
                <span className="rounded-md bg-white/15 px-3 py-1">TypeScript</span>
                <span className="rounded-md bg-white/15 px-3 py-1">Tailwind CSS</span>
              </div>
              <span className="text-sm opacity-90">
                &copy; {new Date().getFullYear()} Interview Playground. Built for practice.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
