import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
