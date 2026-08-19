import type { Metadata } from 'next';
import CodingQuestionsClient from './CodingQuestionsClient';

export const metadata: Metadata = {
  title: 'Coding Practice — Array, String & Object Questions',
  description:
    '70 commonly asked JavaScript coding interview questions on arrays, strings and objects — reverse an array, check anagrams, deep clone objects, flatten nested structures and more.',
  keywords: [
    'javascript coding questions',
    'array interview questions',
    'string interview questions',
    'object interview questions',
    'machine coding round',
    'javascript practice problems',
  ],
  openGraph: {
    title: 'Coding Practice — Array, String & Object Questions',
    description:
      '70 commonly asked JavaScript coding interview questions on arrays, strings and objects, for machine-coding round practice.',
    type: 'website',
  },
};

export default function CodingQuestionsPage() {
  return <CodingQuestionsClient />;
}
