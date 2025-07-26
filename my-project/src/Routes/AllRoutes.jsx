import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home.jsx";
import CategoryPage from "../Components/CategoryPage.jsx";
import ContactForm from "../Components/ContactForm.jsx";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/contact" element={<ContactForm/>} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
