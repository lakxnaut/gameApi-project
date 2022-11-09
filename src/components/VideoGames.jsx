import React from "react";
import AllGames from "./AllGames/AllGames";
import SideBar from "./Sidebar/SideBar";

const VideoGames = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <SideBar />
      <AllGames />
    </div>
  );
};

export default VideoGames;
