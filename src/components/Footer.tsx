import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 sm:mt-14">
      <div className="mx-auto max-w-7xl px-4 pb-6">
        <div className="rounded-t-xl bg-linear-to-br from-[#f3ecdf] via-[#f7f1e7] to-[#efe6d6] text-gray-700 shadow-lg ring-1 ring-black/5 dark:from-[#1c1a17] dark:via-[#1a1815] dark:to-[#1c1a17] dark:text-gray-300 dark:ring-white/10">
          <div className="flex flex-col items-center justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Interview Playground</p>
              <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
                26 hand-built React components — from Counter to Kanban Board — kept as
                revision material for frontend interview prep.
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-medium md:justify-start">
                <a
                  href="/roadmap"
                  className="rounded-md bg-black/6 px-3 py-1 text-gray-700 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/15"
                >
                  🚀 Full Stack AI Roadmap
                </a>
                <a
                  href="/roadmap-mobile"
                  className="rounded-md bg-black/6 px-3 py-1 text-gray-700 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/15"
                >
                  📱 React Native Roadmap
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 md:items-end">
              <div className="flex flex-wrap justify-center gap-2 text-xs font-medium md:justify-end">
                <span className="rounded-md bg-black/6 px-3 py-1 dark:bg-white/10">Next.js</span>
                <span className="rounded-md bg-black/6 px-3 py-1 dark:bg-white/10">TypeScript</span>
                <span className="rounded-md bg-black/6 px-3 py-1 dark:bg-white/10">Tailwind CSS</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built with ❤️ by{' '}
                <a
                  href="https://rishabh-portfolio1-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#7f5f37] underline underline-offset-2 hover:text-[#96703f] dark:text-[#cdb083]"
                >
                  Rishabh Tiwari
                </a>
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-600 md:justify-end dark:text-gray-400">
                <a
                  href="https://rishabh-portfolio1-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#7f5f37] dark:hover:text-[#cdb083]"
                >
                  Portfolio
                </a>
                <span className="opacity-50">•</span>
                <a
                  href="https://www.linkedin.com/in/rishabh-tiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#7f5f37] dark:hover:text-[#cdb083]"
                >
                  LinkedIn
                </a>
                <span className="opacity-50">•</span>
                <a
                  href="https://x.com/Rishabh__73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#7f5f37] dark:hover:text-[#cdb083]"
                >
                  X (Twitter)
                </a>
                <span className="opacity-50">•</span>
                <a
                  href="https://drive.google.com/file/d/1FAoUklRT1ESkVprO1Ux6IlQnUJnLRlyv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#7f5f37] dark:hover:text-[#cdb083]"
                >
                  Resume
                </a>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                &copy; {new Date().getFullYear()} Interview Playground. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
