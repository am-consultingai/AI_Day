import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="https://www.amconsultingai.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/AM_Logo.png" 
            alt="AM Consulting Logo" 
            className="h-12 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>
      </div>
    </header>
  );
};
