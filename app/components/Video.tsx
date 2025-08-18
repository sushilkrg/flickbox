import React from "react";

const VideoCard = ({ video }: any) => {
  return (
    <div className="border border-gray-500 p-3 rounded-lg">
      <video
        width="1080"
        height="1920"
        controls
        // autoplay
        loop
        muted
        className="max-w-full h-auto aspect-[8/12] rounded-md object-cover"
      >
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="font-bold mt-2">{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoCard;
