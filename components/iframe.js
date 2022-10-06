import React from "react";

const IFrame = () => {
  return (
    <iframe
      className="w-full h-full rounded-md"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&list=PL-2oO6dL-O-6LPO_xeoLVWAsQV0Q2kcot&loop=1"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default IFrame;
