import React from 'react';
import GitHub from './icons/GitHub';
import PDF from './icons/PDF';

const Header = () => {
  return (
    <header className="py-4 flex justify-between items-center max-w-5xl mx-auto w-full">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">Loïc Butor</h1>
        <h2 className="text-lg text-gray-500">Portfolio</h2>
      </div>
      <div className="flex space-x-4">
        <a href="/cv_butor_loic_en.pdf" className="size-8 fill-gray-500 hover:fill-white transition duration-75" download>
          <PDF />
        </a>
        <a href="https://github.com/bulofed" className="size-8 fill-gray-500 hover:fill-white transition duration-75">
          <GitHub />
        </a>
      </div>
    </header>
  );
};

export default Header;
