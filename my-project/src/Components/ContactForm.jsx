import React from "react";
import { Link } from "react-router-dom";
export default function ContactForm() {
  return (
    <div>
        <div className="bg-[#f9f9fb] relative py-16 text-center ">
        <div className="absolute right-[100px] top-25 w-[150px] h-[150px] bg-gray-300 opacity-10 transform rotate-45 origin-top-right overflow-hidden" />

        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-blue-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-blue-400 opacity-30" />

        {/* Optional triangle background image or shapes */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

        <h1 className="text-4xl font-bold text-gray-800 z-10 relative">
         Contact
        </h1>
        <Link to="/">
          <p className="text-sm text-gray-500 mt-2 z-10 relative font-bold hover:text-black">
            Home <span className="mx-1">›</span>
            <span className="text-blue-500">Contact</span>
          </p>
        </Link>
      </div>
      <div className="py-12 flex items-center justify-center bg-gray-100 p-6">
        
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl p-10 relative">
        {/* Left - Form */}
        <div className="md:w-2/3 w-full pr-6">
          <h2 className="text-2xl font-bold text-sky-500 mb-8">Send Us A Message</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none "
            />
            <input
              type="text"
              placeholder="+1234567890"
              className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="border-3 border-gray-100 rounded-md px-4 py-3 w-full mt-4 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Address"
            className="border-3 border-gray-100 rounded-md px-4 py-3 w-full mt-4 focus:outline-none"
          />

          <textarea
            rows="4"
            placeholder="Message"
            className="border-3 border-gray-100 rounded-md px-4 py-3 w-full mt-4 focus:outline-none"
          ></textarea>
          <div
            className="mt-4"
          >
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black ">
              Submit Quote
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/3 w-full flex justify-center items-center mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Contact"
            className="rounded-2xl object-cover w-full max-h-[400px]"
          />
        </div>

       
       
      </div>
    </div>
    </div>
    
  );
}
