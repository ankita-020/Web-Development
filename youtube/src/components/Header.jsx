import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <button
          className="h-10 w-10 cursor-pointer"
          onClick={toggleMenuHandler}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

        <img
          alt="logo"
          className="h-10 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-[80%] border border-gray-400 p-2 rounded-l-full"
        />
        <button className="w-[10%] border border-l-0 border-gray-400 p-2 rounded-r-full bg-gray-100">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="col-span-1">
        <button className="h-10 w-10">
          <i className="fa-solid fa-user text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
