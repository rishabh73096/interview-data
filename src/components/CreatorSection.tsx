import React from 'react';

const CreatorSection: React.FC = () => {
  return (
    <section className="pb-14 sm:pb-20">
      <div className="relative overflow-hidden rounded-2xl border border-[#6b5836]/14 bg-linear-to-br from-[#9a7b53]/8 via-[#c1a67d]/6 to-transparent p-6 sm:p-10 dark:border-white/12 dark:bg-[#a9885d]/8">
        {/* Ambient background accent */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#9a7b53]/14 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#c9b48f]/14 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9a7b53]/25 bg-[#9a7b53]/14 px-3.5 py-1 text-xs font-semibold text-[#96703f] dark:text-[#cdb083]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a9885d] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a9885d]"></span>
            </span>
            Meet the Creator
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left side: Bio & Info */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                Built &amp; Maintained by{' '}
                <span className="bg-linear-to-r from-[#93764f] via-[#a98c62] to-[#c7ad82] bg-clip-text text-transparent">
                  Rishabh Tiwari
                </span>
              </h2>
              <p className="mt-2 text-sm font-medium text-[#96703f] dark:text-[#cdb083]">
                Full Stack Developer | MERN &amp; Next.js Specialist | SaaS Architect
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                Full Stack Developer at <strong>22DigitInnovations Pvt. Ltd.</strong> with a proven track record of building and deploying <strong>9 production applications</strong> serving <strong>300+ active users</strong>. Passionate about clean architecture, system design, performance optimization, and shipping production-ready web apps.
              </p>

              {/* Stat badges */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-black/5 bg-white/60 p-3 text-center shadow-xs dark:border-white/10 dark:bg-white/5">
                  <p className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">9+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Production Apps</p>
                </div>
                <div className="rounded-xl border border-black/5 bg-white/60 p-3 text-center shadow-xs dark:border-white/10 dark:bg-white/5">
                  <p className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">300+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Active Users</p>
                </div>
                <div className="rounded-xl border border-black/5 bg-white/60 p-3 text-center shadow-xs dark:border-white/10 dark:bg-white/5">
                  <p className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">8.9</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">MCA CGPA</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://rishabh-portfolio1-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#93764f] via-[#a98c62] to-[#c7ad82] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  Visit Full Portfolio
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://drive.google.com/file/d/1FAoUklRT1ESkVprO1Ux6IlQnUJnLRlyv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-xs transition-all hover:bg-white hover:text-gray-900 dark:border-white/15 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/15 dark:hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>

                <a
                  href="https://www.linkedin.com/in/rishabh-tiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 p-2.5 text-gray-700 shadow-xs transition-all hover:bg-white hover:text-blue-600 dark:border-white/15 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15 dark:hover:text-blue-400"
                  title="LinkedIn Profile"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/Rishabh__73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 p-2.5 text-gray-700 shadow-xs transition-all hover:bg-white hover:text-gray-900 dark:border-white/15 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15 dark:hover:text-white"
                  title="X (Twitter) Profile"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side: Key highlights & tech stack */}
            <div className="flex flex-col gap-3 lg:col-span-5">
              <div className="rounded-xl border border-black/5 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  Clee SaaS Platform
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Architected 3-tier system (admin dashboard, marketplace, REST API) with Redis slot locking, Stripe &amp; Postmark email infrastructure.
                </p>
              </div>

              <div className="rounded-xl border border-black/5 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  <span className="flex h-2 w-2 rounded-full bg-[#b8935f]"></span>
                  Forma Construction B2B
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Built hierarchical RBAC across 50+ projects; optimized list API response time from 2.1s → 280ms via MongoDB aggregation pipelines.
                </p>
              </div>

              {/* Skills pills */}
              <div className="rounded-xl border border-black/5 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">CORE TECH STACK</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5 text-xs font-medium">
                  {['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS', 'TypeScript', 'Stripe', 'JWT / RBAC'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#9a7b53]/25 bg-[#9a7b53]/14 px-2.5 py-1 text-[#7f5f37] dark:border-white/12 dark:bg-[#c9b48f]/12 dark:text-[#d8bf94]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
