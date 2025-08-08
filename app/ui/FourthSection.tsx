import Image from "next/image";
import React from "react";

const FourthSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        src="/girl-painting2.jpg"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        priority
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        <div className="container mx-auto flex items-center justify-center flex-col gap-5 max-w-5xl">
          <p className="text-3xl md:text-5xl font-bold text-center">
            FlickBox unites people from all walks of life to express their creativity and share real, meaningful stories.
          </p>

          <p className="border rounded-full bg-gray-800 text-white px-6 py-2 mt-2 font-semibold cursor-pointer">
            Ace your journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
