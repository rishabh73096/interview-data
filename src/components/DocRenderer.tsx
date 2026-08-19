import React from 'react';

type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'flow'; steps: string[] }
  | { type: 'diagram'; text: string }
  | { type: 'code'; text: string };

function parseBlocks(content: string): Block[] {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;
  let paragraphBuf: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuf.length) {
      blocks.push({ type: 'paragraph', text: paragraphBuf.join(' ') });
      paragraphBuf = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('```')) {
      const fenceTag = line.slice(3).trim();
      flushParagraph();
      const collected: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        collected.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      if (fenceTag === 'flow') {
        blocks.push({ type: 'flow', steps: collected.filter((l) => l.trim()) });
      } else if (fenceTag === 'diagram') {
        blocks.push({ type: 'diagram', text: collected.join('\n') });
      } else {
        blocks.push({ type: 'code', text: collected.join('\n') });
      }
      continue;
    }

    if (line.trim().startsWith('|')) {
      flushParagraph();
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const parseRow = (row: string) =>
        row
          .slice(1, row.endsWith('|') ? -1 : undefined)
          .split('|')
          .map((c) => c.trim());
      const headers = parseRow(tableLines[0]);
      const rows = tableLines
        .slice(1)
        .filter((row) => !/^\|?[\s:-]+\|[\s:|-]*$/.test(row))
        .map(parseRow);
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    if (line.startsWith('> ')) {
      flushParagraph();
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: 'quote', text: quoteLines.join(' ') });
      continue;
    }

    if (line.startsWith('## ')) {
      flushParagraph();
      blocks.push({ type: 'heading', text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: 'list', items });
      continue;
    }

    if (line.trim() === '') {
      flushParagraph();
      i++;
      continue;
    }

    paragraphBuf.push(line.trim());
    i++;
  }

  flushParagraph();
  return blocks;
}

function renderInline(text: string, key: string | number): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter((p) => p !== '');
  return (
    <React.Fragment key={key}>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={idx} className="font-semibold text-gray-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={idx}
              className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.85em] break-all text-orange-700 dark:bg-white/10 dark:text-orange-300"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </React.Fragment>
  );
}

const DiagramBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="mb-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0d1117] p-4">
    <pre className="font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre">{text}</pre>
  </div>
);

const FlowChart: React.FC<{ steps: string[] }> = ({ steps }) => (
  <div className="mb-5 flex flex-col items-center gap-0 rounded-lg border border-black/10 bg-black/[0.02] py-5 dark:border-white/10 dark:bg-white/[0.03]">
    {steps.map((step, idx) => (
      <React.Fragment key={idx}>
        <div className="rounded-lg border border-orange-500/30 bg-white px-4 py-2 text-center text-sm font-medium text-gray-800 shadow-sm dark:bg-[#111827] dark:text-gray-100">
          {renderInline(step, idx)}
        </div>
        {idx < steps.length - 1 && (
          <span className="py-1 text-base leading-none text-orange-500/70 dark:text-orange-400/70">↓</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

const DocRenderer: React.FC<{ content: string }> = ({ content }) => {
  const blocks = parseBlocks(content);

  return (
    <div className="min-w-0">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading':
            return (
              <h3
                key={idx}
                className="mt-8 mb-3 text-base font-semibold text-gray-900 first:mt-0 sm:text-lg dark:text-white"
              >
                {block.text}
              </h3>
            );
          case 'paragraph':
            return (
              <p key={idx} className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                {renderInline(block.text, idx)}
              </p>
            );
          case 'list':
            return (
              <ul key={idx} className="mb-4 ml-5 list-disc space-y-1.5 text-[15px] text-gray-700 dark:text-gray-300">
                {block.items.map((item, i2) => (
                  <li key={i2}>{renderInline(item, i2)}</li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <div
                key={idx}
                className="mb-4 rounded-r-lg border-l-4 border-orange-500 bg-orange-500/5 py-3 pr-4 pl-4 text-[15px] text-gray-700 italic dark:bg-orange-400/10 dark:text-gray-300"
              >
                {renderInline(block.text, idx)}
              </div>
            );
          case 'table':
            return (
              <div key={idx} className="mb-5 overflow-x-auto rounded-lg border border-black/10 dark:border-white/10">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead>
                    <tr className="bg-black/[0.03] dark:bg-white/5">
                      {block.headers.map((h, hIdx) => (
                        <th
                          key={hIdx}
                          className="border-b border-black/10 px-3 py-2 font-semibold text-gray-700 dark:border-white/10 dark:text-gray-200"
                        >
                          {renderInline(h, hIdx)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-black/5 last:border-0 dark:border-white/5">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3 py-2 text-gray-600 dark:text-gray-300">
                            {renderInline(cell, cIdx)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'flow':
            return <FlowChart key={idx} steps={block.steps} />;
          case 'diagram':
          case 'code':
            return <DiagramBox key={idx} text={block.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default DocRenderer;
