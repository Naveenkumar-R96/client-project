import React from "react";
import Cards from "./Cards";
import BlogItems from "./BlogItems";
import { useCart } from "../Context/ContextApi.jsx"; // Assuming useCart is imported from ContextApi.jsx
const BlogSection = () => {
  const { blogRef } = useCart(); // Assuming useCart is imported from ContextApi.jsx
  return (
    <div>
      <section className="px-4 md:px-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[500px]">
          {/* Big card */}
          <div className="bg-white rounded-2xl shadow p-4 md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=800&q=80"
              alt="Main"
              className="rounded-xl mb-4 w-full object-cover h-60"
            />
            <p className="text-green-500 font-semibold text-sm mb-1">DESIGN</p>
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Your company might be in need of a social media audit.
            </h2>
            <div className="flex justify-between text-sm text-gray-500">
              <p>By Rubeus Hagrid</p>
              <p>July 20, 2021</p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="bg-white rounded-2xl shadow p-4 w[100px]">
            <img
              src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=800&q=80"
              alt="Email"
              className="rounded-xl mb-4 w-full object-cover h-28"
            />
            <p className="text-md font-semibold text-gray-800">
              How can businesses utilize email marketing to nurture their leads.
            </p>
          </div>

          {/* Small card 2 */}
          <div className="bg-white rounded-2xl shadow p-4">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
              alt="Auto Reply"
              className="rounded-xl mb-4 w-full object-cover h-28"
            />
            <p className="text-md font-semibold text-gray-800">
              Auto-reply : How to use automated responses for your email lists.
            </p>
          </div>
        </div>

        {/* ---------------- */}

        <div className="bg-[#eaeeed] rounded-xl p-8 mt-10 max-w-6xl mx-auto shadow-sm md:h-[300px] relative flex justify-center items-center mb-10">
          {/* Decorative dots */}
          <div className="">
            {/* Yellow dot - top left */}
            <div className="absolute top-4 left-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 md:top-20 md:left-40 bg-yellow-400 rounded-full" />

            {/* Blue dot - top right */}
            <div className="absolute top-8 right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-blue-400 rounded-full" />

            {/* Green dot - bottom left */}
            <div className="absolute bottom-6 left-6 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 rounded-full" />

            {/* Red dot - bottom right */}
            <div className="absolute bottom-10 right-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-red-400 rounded-full" />
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">All blog posts</h1>
            <p className="text-gray-600">
              With over 2,400 apps available in the Slack App Directory.
            </p>

            {/* Search input section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
              <input
                type="text"
                placeholder="Search blog"
                className="w-full md:w-96 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                Search Now
              </button>
            </div>
          </div>
        </div>


        <BlogItems href="#1" />
        <Cards/>
      </section>
    </div>
  );
};

export default BlogSection;
