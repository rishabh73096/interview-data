import React from 'react';
import { projectModuleChapters } from '../../data/projectModules';
import RoadmapView from '../../components/RoadmapView';

const totalModules = projectModuleChapters.reduce((sum, ch) => sum + ch.phases.length, 0) - 1;

const ProjectModulesPage: React.FC = () => (
  <RoadmapView
    chapters={projectModuleChapters}
    eyebrow="Interview Prep · Project Deep-Dives"
    title="Project Modules"
    accent="Explained"
    navLabel="Modules"
    description={
      <>
        The {totalModules} modules that come up in every &ldquo;explain how you built X&rdquo; interview
        question — authentication, RBAC, rewards/loyalty, payments, booking, notifications, multi-tenancy
        and more. Each with the data model, the flow, the <strong>tricky parts</strong> follow-ups come
        from, and the exact questions interviewers ask.
      </>
    }
    crossLinks={[
      { href: '/system-design', label: 'System Design Notes', badge: 'S' },
      { href: '/interview-qa', label: 'Quick Interview Q&A', badge: 'Q' },
      { href: '/hr-questions', label: 'HR / Behavioural Prep', badge: 'HR' },
    ]}
  />
);

export default ProjectModulesPage;
