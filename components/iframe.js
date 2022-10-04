import React from "react";

const IFrame = () => {
  return (
    <iframe
      className="w-full h-full rounded-md"
      src="https://www.youtube.com/embed/videoseries?list=PLZir5V3VYzMnPhvxMs4zYwvkOZ5BPdUj1&autoplay=1&loop=1"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default IFrame;
