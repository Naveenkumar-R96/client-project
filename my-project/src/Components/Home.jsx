import React, { useState } from "react";
import { useCart } from "../Context/ContextApi.jsx";
import BlogSection from "./BlogSection.jsx";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTags } from "react-icons/fa";

const Home = () => {
  const { hi } = useCart(); // Assuming useCart is imported from ContextApi.jsx
  return (
    <div>
      <section className="bg-[#F4F6F8] mt-6 mx-4 md:mx-16 rounded-3xl py-16 px-4 md:px-10 relative h-[60vh] flex justify-center items-center">
        {/* Dots */}
        <span className="absolute top-8 left-10 w-9 h-9 bg-pink-400 rounded-full"></span>
      <span className="absolute bottom-6 left-6 w-4 h-4 bg-green-400 rounded-full"></span>
      <span className="absolute top-6 right-8 w-4 h-4 bg-blue-500 rounded-full"></span>
      <span className="absolute bottom-4 right-12 w-4 h-4 bg-yellow-400 rounded-full"></span>
      <span className="absolute top-16 right-16 w-5 h-5 bg-red-400 rounded-full"></span>
      <span className="absolute bottom-10 left-12 w-3 h-3 bg-purple-500 rounded-full"></span>


        <div className="text-center max-w-7xl  mx-auto z-10 relative">
          <p className="text-green-500 font-semibold text-sm mb-2">Our Blog</p> 
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Turning Pixels into Perfection – Your Vision, Retouched.
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            We specialize in high-quality Photoshop services that bring your images to life. Whether it's background removal, photo retouching, color correction, or creative edits — we turn your ideas into visually stunning results. From product images to portraits, we deliver precision and perfection, tailored to your brand's needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="contact">
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black flex items-center gap-2">
                <FaPhoneAlt className="text-sm" />
                Book a call
              </button>
            </Link>
            <Link to="pricing">
              <button className="border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition cursor-pointer flex items-center gap-2">
                <FaTags className="text-sm" />
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      <BlogSection />
    </div>
  );
};

export default Home;
