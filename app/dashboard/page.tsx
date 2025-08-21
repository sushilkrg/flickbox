"use client";
import React, { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import { IVideo } from "@/models/Video";
import VideoCard from "../components/Video";

const Dashboard = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [videosCount, setVideosCount] = useState({
    total: "",
    public: "",
    private: "",
  });

  async function getVideosCount() {
    try {
      const res = await fetch("/api/videos/my-videos/count", {
        method: "GET",
      });

      const data = await res.json();
      setVideosCount(data);
    } catch (error) {
      console.log("Error in fetching video count:", error);
    }
  }

  async function getVideos() {
    try {
      const res = await fetch("/api/videos/my-videos", {
        method: "GET",
      });

      const data = await res.json();
      setVideos(data);
    } catch (error) {
      console.log("Error in fetching videos:", error);
    }
  }

  const handleVideosFilter = async (e: any) => {
    const value = e.target.value;
    if (value === "All") {
      getVideos();
    } else {
      try {
        const fetchFiltered = async () => {
          const res = await fetch(
            `/api/videos/my-videos?visibility=${value.toLowerCase()}`
          );
          const data = await res.json();
          setVideos(data);
        };
        fetchFiltered();
      } catch (error) {
        console.log("Error in fetching filtered videos:", error);
      }
    }
  };

  useEffect(() => {
    getVideosCount();
    getVideos();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl m-4">Dashboard</h1>
      <div className="flex flex-row items-center justify-around">
        <div className="flex items-center justify-center flex-col border rounded-md p-4">
          <p>{videosCount.total}</p>
          <p>Total Posts</p>
        </div>
        <div className="flex items-center justify-center flex-col border rounded-md p-4">
          <p>{videosCount.public}</p>
          <p>Public Posts</p>
        </div>
        <div className="flex items-center justify-center flex-col border rounded-md p-4">
          <p>{videosCount.private}</p>
          <p>Private Posts</p>
        </div>
      </div>
      <div className="flex justify-between px-10 my-8">
        <h2 className="text-xl m-4">My videos</h2>
        <div>
          <select
            className="border rounded px-6 py-3"
            onChange={(e) => handleVideosFilter(e)}
          >
            <option className="bg-gray-600" value="All">
              All
            </option>
            <option className="bg-gray-600" value="Public">
              Public
            </option>
            <option className="bg-gray-600" value="Private">
              Private
            </option>
          </select>
        </div>
      </div>
      {/* put videos here  */}

      {!videos || videos.length === 0 ? (
        <div className="text-center text-gray-500 py-8">No videos found.</div>
      ) : (
        <div className="container mx-auto m-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
