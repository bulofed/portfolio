import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Loïc Butor. All rights reserved.</p>
      <p className='flex gap-2 justify-center'>
        <a href="https://github.com/bulofed" className="hover:underline">
          GitHub
        </a> | 
        <a href="/cv_butor_loic_en.pdf" className="hover:underline" download>
          Download CV
        </a>
      </p>
    </footer>
  );
};

export default Footer;