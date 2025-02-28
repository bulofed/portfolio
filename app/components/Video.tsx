import React from 'react';

const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="rounded-lg shadow-2xl border-4 border-white w-full max-w-xl mx-auto"
    >
      <source src="/your-video-file.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;