import Image from "next/image";
import React from "react";

const FifthSection = () => {
  return (
    <div className="flex items-center justify-center bg-teal-600 text-white py-32">
      <div className="container mx-auto w-full flex items-center justify-center flex-col">
        <h2 className="text-4xl md:text-5xl max-w-4xl font-bold text-center mb-4">
          We are commited to build a space where everyone comited to feels
          respected and secure.
        </h2>
        <p className=" text-xl md:text-2xl mt-4 px-4 max-w-3xl text-center">
          Our platform offers powerful toolsthat gives ful controls over their
          experience and visibility.
        </p>
        <p className="border rounded-full bg-gray-700 text-white px-6 py-2 mt-4 font-semibold">
          Explore more
        </p>
        <div className="flex justify-around items-center flex-col md:flex-row md:gap-10 mt-12">
          <Image
            src="/holi.jpg"
            alt="image 1"
            width={300}
            height={700}
            className="border rounded-xl"
          />
          <Image
            src="/couple.jpg"
            alt="image 1"
            width={300}
            height={700}
            className="hidden md:block border rounded-xl"
          />
          <Image
            src="/happy.jpg"
            alt="image 1"
            width={300}
            height={700}
            className="hidden md:block border rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
