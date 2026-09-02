"use client";

import React, { useCallback, useMemo, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { autocompletion, completeFromList, snippetCompletion } from '@codemirror/autocomplete';
import { oneDark } from '@codemirror/theme-one-dark';

interface LogLine {
  level: 'log' | 'error' | 'warn' | 'info';
  text: string;
}

const stringify = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value instanceof Error) return value.message;
  if (typeof value === 'function') return value.toString();
  try {
    return JSON.stringify(value, (_k, v) => (typeof v === 'bigint' ? v.toString() : v), 2) ?? String(value);
  } catch {
    return String(value);
  }
};

/* VS Code-style hints: JS keywords, common globals + a few snippets, on top of
   CodeMirror's built-in scope/identifier completion. */
const extraCompletions = javascriptLanguage.data.of({
  autocomplete: completeFromList([
    ...['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch',
      'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'new', 'typeof', 'instanceof',
      'await', 'async', 'class', 'extends', 'super', 'this', 'null', 'undefined', 'true', 'false',
      'of', 'in', 'yield', 'delete', 'void'].map((label) => ({ label, type: 'keyword' as const })),
    ...[
      'console.log', 'console.error', 'console.warn', 'console.table',
      'Object.keys', 'Object.values', 'Object.entries', 'Object.assign', 'Object.freeze',
      'Array.isArray', 'Array.from', 'Array.of',
      'JSON.stringify', 'JSON.parse',
      'Math.max', 'Math.min', 'Math.floor', 'Math.ceil', 'Math.round', 'Math.abs', 'Math.random', 'Math.pow', 'Math.sqrt',
      'Number.isInteger', 'Number.isNaN', 'Number.parseFloat', 'Number.parseInt',
      'Promise.all', 'Promise.allSettled', 'Promise.race', 'Promise.any', 'Promise.resolve', 'Promise.reject',
      'Date.now', 'parseInt', 'parseFloat', 'isNaN', 'setTimeout', 'setInterval', 'clearTimeout',
      'structuredClone', 'queueMicrotask',
    ].map((label) => ({ label, type: 'function' as const })),
    ...['map', 'filter', 'reduce', 'forEach', 'find', 'findIndex', 'some', 'every', 'includes',
      'indexOf', 'slice', 'splice', 'push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'join',
      'concat', 'flat', 'flatMap', 'fill', 'keys', 'values', 'entries',
      'split', 'trim', 'toLowerCase', 'toUpperCase', 'replace', 'replaceAll', 'padStart', 'padEnd',
      'startsWith', 'endsWith', 'repeat', 'charAt', 'charCodeAt', 'matchAll',
      'then', 'catch', 'finally', 'has', 'get', 'set', 'add', 'delete', 'clear'].map((label) => ({
      label,
      type: 'method' as const,
    })),
    snippetCompletion('for (let ${i} = 0; ${i} < ${arr}.length; ${i}++) {\n\t${}\n}', {
      label: 'forl',
      type: 'keyword',
      detail: 'index loop',
    }),
    snippetCompletion('for (const ${item} of ${iterable}) {\n\t${}\n}', {
      label: 'forof',
      type: 'keyword',
      detail: 'for…of',
    }),
    snippetCompletion('function ${name}(${params}) {\n\t${}\n}', {
      label: 'fn',
      type: 'keyword',
      detail: 'function',
    }),
    snippetCompletion('(${params}) => {\n\t${}\n}', { label: 'afn', type: 'keyword', detail: 'arrow fn' }),
    snippetCompletion('try {\n\t${}\n} catch (err) {\n\tconsole.error(err);\n}', {
      label: 'tryc',
      type: 'keyword',
      detail: 'try/catch',
    }),
    snippetCompletion('console.log(${});', { label: 'cl', type: 'function', detail: 'console.log' }),
  ]),
});

interface CodePlaygroundProps {
  initialCode: string;
  className?: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ initialCode, className = '' }) => {
  const start = useMemo(() => initialCode.trim(), [initialCode]);
  const [code, setCode] = useState(start);
  const [output, setOutput] = useState<LogLine[] | null>(null);
  const [hasError, setHasError] = useState(false);

  const extensions = useMemo(
    () => [javascript(), extraCompletions, autocompletion({ activateOnTyping: true })],
    []
  );

  const run = useCallback(() => {
    const logs: LogLine[] = [];
    const push = (level: LogLine['level']) => (...args: unknown[]) =>
      logs.push({ level, text: args.map(stringify).join(' ') });
    const fakeConsole = { log: push('log'), info: push('info'), error: push('error'), warn: push('warn') };

    try {
      // eslint-disable-next-line no-new-func
      const runner = new Function('console', `"use strict";\n${code}`);
      const result = runner(fakeConsole);
      if (result !== undefined) logs.push({ level: 'info', text: `⟵ returned ${stringify(result)}` });
      setHasError(false);
    } catch (err) {
      logs.push({ level: 'error', text: err instanceof Error ? `${err.name}: ${err.message}` : String(err) });
      setHasError(true);
    }
    setOutput(logs);
  }, [code]);

  const reset = useCallback(() => {
    setCode(start);
    setOutput(null);
    setHasError(false);
  }, [start]);

  return (
    <div className={`overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="text-xs font-medium text-gray-400">
          JavaScript · edit &amp; run · <kbd className="rounded bg-white/10 px-1">Ctrl</kbd>+
          <kbd className="rounded bg-white/10 px-1">Space</kbd> for hints
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={reset}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Reset
          </button>
          <button
            onClick={run}
            className="rounded-md bg-linear-to-r from-[#93764f] via-[#a98c62] to-[#c7ad82] px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
          >
            ▶ Run
          </button>
        </div>
      </div>

      <CodeMirror
        value={code}
        onChange={setCode}
        theme={oneDark}
        extensions={extensions}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          foldGutter: false,
          indentOnInput: true,
        }}
        style={{ fontSize: 13, maxHeight: '55vh', overflow: 'auto' }}
      />

      {output && (
        <div className="border-t border-white/10 bg-black/40 p-3">
          <p className="mb-2 text-[11px] font-semibold tracking-wide text-gray-500 uppercase">Console</p>
          {output.length === 0 ? (
            <p className="font-mono text-xs text-gray-500 italic">No output.</p>
          ) : (
            <div className="flex flex-col gap-1">
              {output.map((line, idx) => (
                <pre
                  key={idx}
                  className={`overflow-x-auto font-mono text-xs whitespace-pre-wrap ${
                    line.level === 'error'
                      ? 'text-red-400'
                      : line.level === 'warn'
                        ? 'text-amber-400'
                        : line.level === 'info'
                          ? 'text-sky-300'
                          : 'text-emerald-300'
                  }`}
                >
                  {line.text}
                </pre>
              ))}
            </div>
          )}
          {hasError && <p className="mt-2 text-[11px] text-red-400/80">Fix the code above and hit Run again.</p>}
        </div>
      )}
    </div>
  );
};

export default CodePlayground;
