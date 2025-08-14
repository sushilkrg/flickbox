"use client";
import React, { useState } from "react";

const DetailsPage = () => {
  const data = {
    title: "Hari om",
    description: "Hari om hari om",
    type: "public",
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl ml-4 mt-4 mb-12">Details</h2>
      <div className="flex flex-col md:flex-row items-center gap-20 justify-center">
        <div>
          {/* Image */}
          <p className="h-63 w-48 border rounded-md">Image</p>
        </div>
        {/* form */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3>Title</h3>
            <p className="border border-white rounded-md py-2 px-1 w-84">
              {data.title}
            </p>
          </div>
          <div className="flex flex-col">
            <h3>Description</h3>
            <p className="border border-white py-2 rounded-md px-1">
              {data.description}
            </p>
          </div>
          <div className="flex flex-col">
            <h3>Type</h3>
            <p className="border border-white py-2 rounded-md px-1">
              {data.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
