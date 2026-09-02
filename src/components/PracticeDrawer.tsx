"use client";

import React, { useEffect } from 'react';
import CodePlayground from './CodePlayground';

export interface PracticeQuestion {
  q: string;
  code: string;
  category: string;
  n: number;
}

interface PracticeDrawerProps {
  question: PracticeQuestion | null;
  onClose: () => void;
}

const PracticeDrawer: React.FC<PracticeDrawerProps> = ({ question, onClose }) => {
  const isOpen = Boolean(question);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-3xl flex-col border-l border-white/10 bg-[#0a0e14] text-gray-100 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={question ? question.q : 'Coding problem'}
      >
        <div className="flex items-start justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] text-xs font-bold text-white">
              {question?.n}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-medium tracking-wide text-[#c9a877] uppercase">
                {question?.category}
              </p>
              <p className="text-sm leading-snug font-semibold text-white sm:text-[15px]">{question?.q}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white active:bg-white/20"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          {question && (
            <>
              <CodePlayground key={question.category + question.n} initialCode={question.code} />
              <p className="mt-3 text-xs text-gray-500">
                Try changing the input, break it, rewrite the solution your own way — then Run.
              </p>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default PracticeDrawer;
