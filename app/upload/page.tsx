"use client";
import React, { useEffect, useState } from "react";
import FileUpload from "../components/FileUpload";

const UplaodPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [videoUrl, setVideoUrl] = useState("");

  const handleUploadSuccess = async (uploadResponse: any) => {
    const { url } = uploadResponse;
    setVideoUrl(url);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        visibility,
        videoUrl,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Video saved successfully!");
      console.log("Saved video:", data.video);
    } else {
      alert("Error: " + data.error);
    }

    console.log("video uploaded");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl ml-4 mt-4 mb-12">Upload New Video</h2>
      <form
        onSubmit={handleUpload}
        className="flex flex-col gap-4 px-4 items-center"
      >
        <div className="flex flex-col w-full md:w-2xl">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className="border border-white rounded-md py-2 px-1"
          />
        </div>
        <div className="flex flex-col w-full md:w-2xl">
          <label htmlFor="desc">Description</label>
          <textarea
            rows={3}
            id="desc"
            name="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
            className="border border-white py-2 rounded-md px-1"
          />
        </div>
        <div className="flex flex-col w-full md:w-2xl">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            defaultValue={visibility}
            className="border border-white py-2 rounded-md px-1 "
            onChange={(e) => setVisibility(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        {videoUrl && (
          <div>
            <h2>Preview</h2>
            <video src={videoUrl} controls width="400" />
          </div>
        )}
        <button
          type="submit"
          className="bg-amber-50 hover:bg-amber-100 text-gray-800 px-8 py-2 rounded-md cursor-pointer font-bold w-full md:w-48"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UplaodPage;
