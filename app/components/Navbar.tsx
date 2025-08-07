import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-lg sticky bg-white">
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center ">
        <div>
          <Link
            href="/"
            className="text-3xl font-bold text-teal-900 hover:text-teal-800"
          >
            FlickBox
          </Link>
        </div>
        <div>
          <Link
            href="/videos"
            className="text-2xl font-bold text-teal-900 hover:text-teal-800"
          >
            Videos
          </Link>
        </div>
        <div className="flex justify-between gap-4 md:gap-8 md:pr-8">
          <Link href="/login">
            <button className="border border-teal-950 bg-teal-900 text-white rounded-3xl px-4 py-2 font-bold cursor-pointer">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
