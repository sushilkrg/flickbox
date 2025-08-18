"use client";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { IVideo } from "@/models/Video";
import { Video } from "@imagekit/next";

const Feed = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  async function getVideos() {
    const res = await fetch("/api/videos", {
      method: "GET",
    });

    const data = await res.json();
    setVideos(data);
    // console.log(data);

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
    <div className="container mx-auto grid grid-cols-1 m-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video, id) => (
        <div key={id} className="border border-gray-500 p-3 rounded-lg">
    
          <video
            // src={video.videoUrl}
            // src=`${video.videoUrl}?tr=w-1080,h-1920,cm-fill`
            // width="800"
            // height="1500"
            width="1080"
            height="1920"
            controls
            // autoplay
            loop
            muted
            className="max-w-full h-auto aspect-[8/12] rounded-md object-cover"
          >
            <source
              src={video.videoUrl}
              // src=`${video.videoUrl}?tr=w-1080,h-1920,cm-fill`
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <video
            src={video.videoUrl}
            controls
            width={300}
            height={300}
            preload="metadata"
          /> */}
          <h3 className="font-bold mt-2">{video.title}</h3>
          <p>{video.description}</p>
          {/* <p>{video.visibility}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Feed;
