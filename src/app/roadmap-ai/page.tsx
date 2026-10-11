import React from 'react';
import type { Metadata } from 'next';
import { aiRoadmapChapters } from '../../data/roadmapAI';
import RoadmapView from '../../components/RoadmapView';
import { aiPhaseDocs } from '../../data/docLinks';

export const metadata: Metadata = {
  title: 'AI Engineering Roadmap',
  description:
    'A step-by-step AI engineering roadmap: MacBook setup, Python, ML basics, LLM apps, RAG, agents and MCP, evals, fine-tuning, serving and production AI system design — with projects and a 16-week plan.',
  keywords: ['AI engineer roadmap', 'LLM roadmap', 'RAG tutorial roadmap', 'AI agents roadmap', 'AI system design'],
};

const phaseDocs = Object.fromEntries(
  aiRoadmapChapters.flatMap((ch) => ch.phases.map((p) => [p.id, aiPhaseDocs(p.id)]))
);

const totalPhases = aiRoadmapChapters.reduce((sum, ch) => sum + ch.phases.length, 0);

const RoadmapAIPage: React.FC = () => (
  <RoadmapView
    chapters={aiRoadmapChapters}
    eyebrow="Career Track · AI"
    title="AI Engineering"
    accent="Roadmap"
    navLabel="Stages"
    phaseDocs={phaseDocs}
    description={
      <>
        {totalPhases} phases from <strong>zero setup to production AI engineer</strong> — Python, just-enough ML,
        LLM apps, RAG, agents and MCP, evals, safety, fine-tuning, serving, AI system design, five projects and a
        16-week plan. Each phase has what to learn, a production checklist, interview questions and common mistakes.
      </>
    }
    crossLinks={[
      { href: '/system-design-roadmap', label: 'System Design Roadmap (AI tab)', badge: 'SD' },
      { href: '/roadmap', label: 'Full Stack AI Roadmap', badge: 'FS' },
      { href: '/roadmap-mobile', label: 'React Native Roadmap', badge: 'RN' },
    ]}
  />
);

export default RoadmapAIPage;
