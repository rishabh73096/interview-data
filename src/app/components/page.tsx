import type { Metadata } from 'next';
import ComponentsClient from './ComponentsClient';

export const metadata: Metadata = {
  title: 'Components — Live React Interview Component Showcase',
  description:
    '26 hand-built React components for frontend interview practice — Accordion, Autocomplete, Kanban Board, Infinite Scroll and more, each live and with viewable source code.',
  keywords: [
    'react components',
    'react interview components',
    'frontend machine coding',
    'react hooks examples',
    'react ui components',
  ],
  openGraph: {
    title: 'Components — Live React Interview Component Showcase',
    description: '26 hand-built React components for frontend interview practice, each live and with viewable source code.',
    type: 'website',
  },
};

export default function ComponentsPage() {
  return <ComponentsClient />;
}
