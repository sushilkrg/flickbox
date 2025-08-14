import React from "react";
import Search from "../components/Search";
import FileUpload from "../components/FileUpload";

const Feed = () => {
  return (
    <div>
      <Search />
      {/* Videos  */}
      <FileUpload/>
    </div>
  );
};

export default Feed;
