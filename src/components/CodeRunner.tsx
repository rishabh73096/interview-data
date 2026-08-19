"use client";

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

interface LogLine {
  level: 'log' | 'error' | 'warn';
  text: string;
}

const stringify = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value instanceof Error) return value.message;
  try {
    return JSON.stringify(value, null, 2) ?? String(value);
  } catch {
    return String(value);
  }
};

const highlight = (code: string) =>
  Prism.highlight(code, Prism.languages.javascript, 'javascript');

interface CodeRunnerProps {
  initialCode: string;
}

const CodeRunner: React.FC<CodeRunnerProps> = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode.trim());
  const [output, setOutput] = useState<LogLine[] | null>(null);
  const [hasError, setHasError] = useState(false);

  const run = () => {
    const logs: LogLine[] = [];
    const fakeConsole = {
      log: (...args: unknown[]) => logs.push({ level: 'log', text: args.map(stringify).join(' ') }),
      error: (...args: unknown[]) => logs.push({ level: 'error', text: args.map(stringify).join(' ') }),
      warn: (...args: unknown[]) => logs.push({ level: 'warn', text: args.map(stringify).join(' ') }),
    };

    try {
      const runner = new Function('console', code);
      runner(fakeConsole);
      setHasError(false);
    } catch (err) {
      logs.push({ level: 'error', text: err instanceof Error ? `${err.name}: ${err.message}` : String(err) });
      setHasError(true);
    }

    setOutput(logs);
  };

  const reset = () => {
    setCode(initialCode.trim());
    setOutput(null);
    setHasError(false);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="text-xs font-medium text-gray-400">Editable — try changing the input</span>
        <div className="flex items-center gap-2">
          <button
            onClick={reset}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Reset
          </button>
          <button
            onClick={run}
            className="rounded-md bg-linear-to-r from-orange-600 via-amber-500 to-yellow-400 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
          >
            ▶ Run
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-auto p-1">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlight}
          padding={12}
          textareaClassName="focus:outline-none"
          style={{
            fontFamily: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            fontSize: 13,
            color: '#e6edf3',
            minHeight: '100%',
          }}
        />
      </div>

      {output && (
        <div className="border-t border-white/10 bg-black/40 p-3">
          <p className="mb-2 text-[11px] font-semibold tracking-wide text-gray-500 uppercase">Output</p>
          {output.length === 0 ? (
            <p className="font-mono text-xs text-gray-500 italic">No console output.</p>
          ) : (
            <div className="flex flex-col gap-1">
              {output.map((line, idx) => (
                <pre
                  key={idx}
                  className={`overflow-x-auto font-mono text-xs whitespace-pre-wrap ${
                    line.level === 'error' ? 'text-red-400' : line.level === 'warn' ? 'text-amber-400' : 'text-emerald-300'
                  }`}
                >
                  {line.text}
                </pre>
              ))}
            </div>
          )}
          {hasError && (
            <p className="mt-2 text-[11px] text-red-400/80">
              Fix the code above and hit Run again.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeRunner;
