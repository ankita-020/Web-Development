import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48 h-lvh">
      <div className="border-b border-gray-500 py-3">
        <ul>
          <li className="p-2">Home</li>
          <li className="p-2">Shorts</li>
          <li className="p-2">Subscriptions</li>
        </ul>
      </div>
      <div className="border-b border-gray-500 py-3">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li className="p-2">Music</li>
          <li className="p-2">Sports</li>
          <li className="p-2">Gaming</li>
          <li className="p-2">Movie</li>
        </ul>
      </div>
      <div className="py-3">
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li className="p-2">Music</li>
          <li className="p-2">Sports</li>
          <li className="p-2">Gaming</li>
          <li className="p-2">Movie</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
