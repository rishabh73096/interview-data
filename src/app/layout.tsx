import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RelatedLinks from '../components/RelatedLinks';
import ScrollButtons from '../components/ScrollButtons';

export const metadata: Metadata = {
  title: {
    default: 'Interview Playground',
    template: '%s · Interview Playground',
  },
  description:
    'A hands-on frontend interview prep hub — 26 live React components, a quick JavaScript/React/Node Q&A revision sheet, system design notebook notes, and array/string/object coding practice questions, all in one place.',
  keywords: [
    'frontend interview preparation',
    'react interview questions',
    'javascript interview questions',
    'system design notes',
    'coding interview practice',
  ],
};

const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Header />
        {children}
        <RelatedLinks />
        <Footer />
        <ScrollButtons />
      </body>
    </html>
  );
};

export default RootLayout;