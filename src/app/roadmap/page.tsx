import React from 'react';
import { roadmapChapters } from '../../data/roadmap';
import RoadmapView from '../../components/RoadmapView';

const totalPhases = roadmapChapters.reduce((sum, ch) => sum + ch.phases.length, 0);

const RoadmapPage: React.FC = () => (
  <RoadmapView
    chapters={roadmapChapters}
    eyebrow="Career Track"
    title="Full Stack AI Engineer"
    accent="Roadmap"
    navLabel="Phases"
    description={
      <>
        {totalPhases} phases to go from a MERN / Next.js developer to a{' '}
        <strong>Full Stack AI Engineer</strong> — advanced web &amp; backend, system design, LLM apps,
        production RAG, agents and MCP, with the career levels and portfolio projects to get there. Runs
        alongside the separate React Native roadmap.
      </>
    }
    crossLinks={[
      { href: '/roadmap-mobile', label: 'React Native Roadmap', badge: 'RN' },
      { href: '/system-design', label: 'System Design Notes', badge: 'S' },
      { href: '/interview-qa', label: 'Quick Interview Q&A', badge: 'Q' },
    ]}
  />
);

export default RoadmapPage;
