import React from "react";

const FirstSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="bg-video.mp4" type="video/mp4" />
        {/* <source src="your-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        {/* <!-- Your foreground content goes here --> */}
        <div className="container mx-auto flex items-center justify-center flex-col gap-5">
          <p className="text-4xl md:text-7xl font-bold text-center">
            Capture, Share, Inspire
          </p>
          <p className="text-2xl md:text-4xl font-bold">All in One place</p>
          <p className="border rounded-full bg-teal-800 text-white px-6 py-2 mt-2 font-semibold">
            Ace your journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
