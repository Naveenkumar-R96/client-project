import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home.jsx";
import CategoryPage from "../Components/CategoryPage.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import PricingPage from "../Components/PricingPage.jsx";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/pricing" element={<PricingPage/>} />

        
      </Routes>
    </div>
  );
};

export default AllRoutes;
