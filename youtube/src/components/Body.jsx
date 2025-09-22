import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  return (
    <div className="grid grid-flow-col">
      {isMenuOpen && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Body;
