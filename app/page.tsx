import React from 'react';
import Introduction from './components/Introduction';
import Video from './components/Video';
import ProjectList from './components/ProjectList';

const Page = () => {
  return (
    <>
      <Introduction />
      <Video />
      <ProjectList />
    </>
  );
};

export default Page;