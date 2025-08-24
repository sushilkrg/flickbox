import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <div className="h-auto md:h-screen flex items-center justify-center bg-gray-600 text-white">
      <div className="container mx-auto w-full my-16 flex items-center justify-center flex-col">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Where Moments become Movements
        </h2>
        <p className="font-medium mt-4 px-4 text-center max-w-4xl">
          Every short video you share has the potential to leave a lasting impact by conveying powerful messages in just a few seconds. It can inspire minds, connect people across cultures, and spark conversations or movements that lead to real-world change. With each clip, you're not just sharing content - you're influencing how people think, feel, and act.
        </p>
        <div className="flex justify-around items-center md:gap-10 mt-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-84 w-56 object-cover hidden md:block rounded-md border-gray-500"
          >
            <source src="travel2.mp4" type="video/mp4" />
            {/* <source src="your-video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-84 w-56 object-cover hidden md:block rounded-md border-gray-500"
          >
            <source src="fish-swimming.mp4" type="video/mp4" />
            {/* <source src="your-video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-96 w-78 md:h-84 md:w-56 object-cover rounded-md border-gray-500"
          >
            <source src="birthday.mp4" type="video/mp4" />
            {/* <source src="your-video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
