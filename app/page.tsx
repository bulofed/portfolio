import React from 'react';
import Introduction from './components/Introduction';
import Video from './components/Video';
import Project from './components/Project';

const projects = [
  {
    href: "https://github.com/bulofed/Astra",
    imgSrc: "/astra.png",
    description: "Astra is an isometrical RPG game where the goal is to beat every level and get to the end of the game. You beat the levels by killing every enemies in the level. The game is made in Python, using the PyGame FOSS library and is a school project."
  },
  {
    href: "https://github.com/bulofed/Cryptr",
    imgSrc: "/cryptr.png",
    description: "Cryptr is a web escape game with multiple levels. The goal is to escape the room by solving puzzles. The game is made with Nuxt and MongoDB."
  },
  {
    href: "",
    imgSrc: "/dungeons.png",
    description: "DungeonVR is a VR game where you have to escape a dungeon. I have worked on this project with a team of 5 people using Unreal Engine. I've made the locomotion system (snap-turn, move towards head and joystick mode) as well as the grabbing system."
  }
];

const Page = () => {
  return (
    <>
      <Introduction />
      <Video />
      {projects.map((project, index) => (
        <Project 
          key={index}
          href={project.href}
          imgSrc={project.imgSrc}
          description={project.description}
        />
      ))}
    </>
  );
};

export default Page;