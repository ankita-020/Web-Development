import React from "react";

// eslint-disable-next-line react/prop-types
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold w-2/4">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="">
        <button className="bg-white font-bold text-black text-lg mr-4 p-4 px-12 rounded-lg hover:opacity-80">
          <i className="fa-solid fa-play mr-1" />
          Play
        </button>
        <button className="bg-gray-400 font-bold text-black text-lg mr-4 p-4 px-12 rounded-lg hover:opacity-80">
          <i className="fa-solid fa-circle-info mr-1"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
