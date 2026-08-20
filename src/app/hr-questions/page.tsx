import type { Metadata } from 'next';
import HRQuestionsClient from './HRQuestionsClient';

export const metadata: Metadata = {
  title: 'HR & Behavioral Interview Questions',
  description:
    '36 HR and behavioral interview questions with full, speakable answers — self-introduction, salary negotiation, conflict handling, ownership stories, leadership and more, for full-stack developer interviews.',
  keywords: [
    'HR interview questions',
    'behavioral interview questions',
    'tell me about yourself answer',
    'salary negotiation interview',
    'full stack developer interview HR round',
  ],
  openGraph: {
    title: 'HR & Behavioral Interview Questions',
    description:
      '36 HR and behavioral interview questions with full, speakable answers for full-stack developer interviews.',
    type: 'website',
  },
};

export default function HRQuestionsPage() {
  return <HRQuestionsClient />;
}
