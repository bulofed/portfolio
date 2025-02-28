import React from 'react';

const Introduction = () => {
  return (
    <div className="space-y-6 text-lg text-zinc-50 leading-relaxed text-justify">
      <p>
        Hi there! I’m Loïc, a third-year IT student with a passion for crafting beautiful, lightning-fast digital experiences. Front-end development isn’t just my field of study—it’s my canvas. I thrive on turning ideas into visually stunning, functional realities using modern frameworks like <span className="bg-blue-400 px-4 py-1 rounded-full font-bold">React</span> and <span className="bg-orange-400 px-4 py-1 rounded-full font-bold">Svelte</span>.
      </p>
      <p>
        My journey took a thrilling turn during an internship where I built a schedule manager from scratch. It wasn’t just about writing code; it was about solving real-world problems while keeping things sleek and intuitive. That project taught me the power of clean design and efficient functionality—principles I now carry into every line of code I write.
      </p>
    </div>
  );
};

export default Introduction;