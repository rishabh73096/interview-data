import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;