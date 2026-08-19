"use client";

import React, { useEffect } from 'react';
import CodeBlock from './CodeBlock';

interface CodeDrawerProps {
  title: string | null;
  code: string | null;
  onClose: () => void;
}

const CodeDrawer: React.FC<CodeDrawerProps> = ({ title, code, onClose }) => {
  const isOpen = Boolean(title && code);

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
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-2xl flex-col border-l border-white/10 bg-[#0a0e14] text-gray-100 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={title ? `${title} source code` : 'Source code'}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 font-mono text-xs font-bold text-white">
              {'</>'}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{title}.jsx</p>
              <p className="text-xs text-gray-400">Full component source</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white active:bg-white/20"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          {code && <CodeBlock code={code} language="jsx" />}
        </div>
      </aside>
    </>
  );
};

export default CodeDrawer;
