import React from 'react';
import { mobileRoadmapChapters } from '../../data/roadmapMobile';
import RoadmapView from '../../components/RoadmapView';
import { mobilePhaseDocs } from '../../data/docLinks';

const phaseDocs = Object.fromEntries(
  mobileRoadmapChapters.flatMap((ch) => ch.phases.map((p) => [p.id, mobilePhaseDocs(p.id)]))
);

const totalPhases = mobileRoadmapChapters.reduce((sum, ch) => sum + ch.phases.length, 0);

const RoadmapMobilePage: React.FC = () => (
  <RoadmapView
    chapters={mobileRoadmapChapters}
    eyebrow="Career Track · Parallel"
    title="React Native"
    accent="Mobile Roadmap"
    navLabel="Stages"
    phaseDocs={phaseDocs}
    description={
      <>
        {totalPhases} stages to go from your existing React knowledge to a{' '}
        <strong>production-level React Native + TypeScript</strong> developer — fundamentals, UI, state,
        device features, production hardening, just-enough native, both app stores, and five projects of
        rising difficulty. Built to run alongside the Full Stack AI roadmap.
      </>
    }
    crossLinks={[
      { href: '/roadmap', label: 'Full Stack AI Roadmap', badge: 'AI' },
      { href: '/roadmap-ai', label: 'AI Engineering Roadmap', badge: 'AI+' },
      { href: '/system-design', label: 'System Design Notes', badge: 'S' },
      { href: '/interview-qa', label: 'Quick Interview Q&A', badge: 'Q' },
    ]}
  />
);

export default RoadmapMobilePage;
