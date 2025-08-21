"use client";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { IVideo } from "@/models/Video";
import VideoCard from "../components/Video";

const Feed = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  async function getVideos() {
    const res = await fetch("/api/videos", {
      method: "GET",
    });

    const data = await res.json();
    setVideos(data);

    if (res.ok) {
      console.log("Videos:", data);
    } else {
      alert("Error: " + data.error);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <Search setVideos={setVideos} />
      </div>
      {!videos || videos.length === 0 ? (
        <div className="text-center text-gray-500 py-8">No videos found.</div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 m-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
