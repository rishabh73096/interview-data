"use client";

import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-gray-200 backdrop-blur transition-opacity hover:bg-white/20 hover:text-white sm:bg-white/5 sm:py-1 sm:text-gray-300 sm:opacity-0 sm:group-hover:opacity-100"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{ ...style, background: 'transparent' }}
            className="overflow-x-auto p-4 pr-16 text-[13px] leading-relaxed sm:pr-4"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell w-8 pr-4 text-right select-none opacity-30">{i + 1}</span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
