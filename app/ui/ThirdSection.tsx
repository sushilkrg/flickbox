import Image from "next/image";
import React from "react";

const ThirdSection = () => {
  return (
    <div className="flex items-center justify-center py-32 bg-gradient-to-b from-teal-950 to-teal-900 text-white">
      <div className="container mx-auto px-12 flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-10">
        <div className="flex flex-col items-start justify-center lg:w-156">
          <h3 className="text-2xl lg:text-3xl font-semibold text-center mb-4 md:text-left">
            Our mission is to spark imagination, self-expression and
            encourage people to explore their creative potential. We strive to
            create moments that not only inspire but also bring joy. 
          </h3>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-96 w-64 object-cover rounded-md border-gray-500"
        >
          <source src="skating.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ThirdSection;
