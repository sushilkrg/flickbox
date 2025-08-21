"use client";
import React, { useState } from "react";

const Search = ({ setVideos }: any) => {
  const [searchValues, setSearchValues] = useState("");

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/videos?searchQuery=${searchValues.toLowerCase()}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      setVideos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchValues("");
    }
  };

  return (
    <div className="container mx-4 md:mx-auto">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Search videos here"
          value={searchValues}
          className="p-3 border bg-white text-black border-gray-300 rounded-md w-full md:w-1/2 focus:outline-none focus:border-blue-400"
          onChange={(e) => setSearchValues(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md w-full md:w-auto cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
