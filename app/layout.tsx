import React from 'react';
import './globals.css';
import Header from './header';
import Footer from './footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-50">
          <Header />
          <main className="flex-grow max-w-5xl mx-auto w-full flex flex-col gap-12 py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;