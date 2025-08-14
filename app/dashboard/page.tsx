import React from "react";
import VideoComponent from "../components/Video";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl m-4">Dashboard</h1>
      <div className="flex flex-row items-center justify-around">
        <div className="flex items-center justify-center flex-col border rounded-md p-4">
          <p>20</p>
          <p>Total Posts</p>
        </div>
        <div className="flex items-center justify-center flex-col border rounded-md p-4">
          <p>10</p>
          <p>Public Posts</p>
        </div>
        <div className="flex items-center justify-center flex-col border rounded-md p-4">
          <p>10</p >
          <p>Private Posts</p>
        </div>
      </div>
      <h2 className="text-xl m-4">My videos</h2>
      {/* put videos here  */}
    </div>
  );
};

export default Dashboard;