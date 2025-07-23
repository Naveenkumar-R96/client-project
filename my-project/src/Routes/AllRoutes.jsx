import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home.jsx";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
