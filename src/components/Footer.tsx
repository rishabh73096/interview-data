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
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-medium md:justify-start">
                <a href="/roadmap" className="rounded-md bg-white/15 px-3 py-1 transition-colors hover:bg-white/25">
                  🚀 Full Stack AI Roadmap
                </a>
                <a href="/roadmap-mobile" className="rounded-md bg-white/15 px-3 py-1 transition-colors hover:bg-white/25">
                  📱 React Native Roadmap
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 md:items-end">
              <div className="flex flex-wrap justify-center gap-2 text-xs font-medium md:justify-end">
                <span className="rounded-md bg-white/15 px-3 py-1">Next.js</span>
                <span className="rounded-md bg-white/15 px-3 py-1">TypeScript</span>
                <span className="rounded-md bg-white/15 px-3 py-1">Tailwind CSS</span>
              </div>
              <p className="text-sm opacity-95">
                Built with ❤️ by{' '}
                <a
                  href="https://rishabh-portfolio1-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 hover:opacity-100"
                >
                  Rishabh Tiwari
                </a>
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs font-medium md:justify-end opacity-90">
                <a
                  href="https://rishabh-portfolio1-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Portfolio
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/rishabh-tiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://x.com/Rishabh__73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  X (Twitter)
                </a>
                <span>•</span>
                <a
                  href="https://drive.google.com/file/d/1FAoUklRT1ESkVprO1Ux6IlQnUJnLRlyv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Resume
                </a>
              </div>
              <span className="text-xs opacity-75">
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
