import Image from "next/image";
import React from "react";

const FourthSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* <div className="absolute inset-0 -z-20"> */}
      <Image
        src="/girl-painting2.jpg"
        // alt="bg-image"
        // fill
        // className="object-cover"

        alt="Background"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        priority
      />
      {/* </div> */}
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" /> */}

      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        {/* <!-- Your foreground content goes here --> */}
        <div className="container mx-auto flex items-center justify-center flex-col gap-5">
          <p className="text-3xl md:text-5xl font-bold text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur corrupti non et. Hic vero sit mollitia voluptate dolor
            id explicabo!
          </p>

          <p className="border rounded-full bg-gray-800 text-white px-6 py-2 mt-2 font-semibold">
            Ace your journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
