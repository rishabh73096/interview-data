import type { Metadata } from 'next';
import SDRoadmapClient from './SDRoadmapClient';

export const metadata: Metadata = {
  title: 'System Design Roadmap — Frontend & Backend',
  description:
    'Level-wise (basic, medium, hard) frontend and backend system design topics to prepare for Google, Microsoft, Amazon, Meta and other product-company interviews, with a progress tracker.',
  keywords: [
    'system design roadmap',
    'frontend system design',
    'backend system design',
    'system design topics for FAANG',
    'system design interview preparation',
  ],
  openGraph: {
    title: 'System Design Roadmap — Frontend & Backend',
    description: 'Basic → medium → hard system design topics, mapped to the companies that ask them.',
    type: 'website',
  },
};

export default function SDRoadmapPage() {
  return <SDRoadmapClient />;
}
