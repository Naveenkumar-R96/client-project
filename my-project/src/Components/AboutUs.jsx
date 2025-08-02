import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#f9f9fb] relative text-center overflow-hidden py-10 px-4">
        {/* Decorative Shapes */}
        <div className="absolute right-[100px] top-20 w-[150px] h-[150px] bg-gray-300 opacity-10 rotate-45 origin-top-right" />
        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-transparent border-t-blue-400 opacity-30" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

        <h1 className="text-5xl font-extrabold text-gray-700 tracking-wide z-10 relative italic">
          About Us
        </h1>

        {/* Breadcrumb */}
        {/* <p className="text-sm text-gray-500 mt-3 z-10 relative font-semibold">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-blue-500">About Us</span>
        </p> */}
        <p className="text-sm text-gray-500 mt-3 z-10 relative font-semibold">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-blue-500">About Us</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-10 grid grid-cols-1 mb-10 md:grid-cols-2 gap-10 px-6 md:px-16 max-w-7xl mx-auto items-center">
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About"
            className="rounded-3xl shadow-lg object-cover w-full max-h-[420px]"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500 italic mb-3">
            Who We Are
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 italic leading-snug">
            We build beautiful web experiences that make an impact.
          </h3>
          <p className="text-lg text-gray-600 font-medium mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quis neque aliquid iste et rem sint, est aspernatur numquam sunt
            doloribus officia ad dolorum cumque. Asperiores necessitatibus sunt
            tempora non neque alias, veniam, sequi atque laborum corporis et,
            accusantium vitae dolor nisi iste autem odit. Aperiam ipsam officiis
            praesentium consequuntur?
          </p>
          <Link to="/contact">
            <button className="border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition cursor-pointer flex items-center gap-2">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
