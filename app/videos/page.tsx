"use client";
import React, { useEffect, useState } from "react";
import { IVideo } from "@/models/Video";
import VideoCard from "../components/Video";
import { useRouter } from "next/navigation";

const Videos = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const router = useRouter();

  async function getVideos() {
    const res = await fetch("/api/videos/free-videos", {
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
      <div className="container mx-auto grid grid-cols-1 m-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-blue-700 pr-2 cursor-pointer text-l"
          onClick={() => router.push("/login")}
        >
          Sign in 
        </button>
         to see more videos.
      </div>
    </div>
  );
};

export default Videos;
