"use client";
import React, { useState } from "react";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("public");

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form updated ");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl ml-4 mt-4 mb-12">Edit</h2>
      <div className="flex flex-col md:flex-row items-center gap-20 justify-center">
        <div>
          {/* Image */}
          <p className="h-63 w-48 border rounded-md">Image</p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Title"
              className="border border-white rounded-md py-2 px-1 w-84"
            />
          </div>
          <div className="flex flex-col">
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
          <div className="flex flex-col">
            <label htmlFor="type">Type</label>
            <select id="type" name="type" className="border border-white py-2 rounded-md px-1">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-amber-50 hover:bg-amber-100 text-gray-800 px-8 py-2 rounded-md cursor-pointer font-bold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
