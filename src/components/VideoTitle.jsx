import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-1/3">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black p-3 px-12 text-xl rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-400 text-white p-3 px-8 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
