import React, { useState } from "react";
import Cards from "./Cards";
import BlogItems from "./BlogItems";
import { useCart } from "../Context/ContextApi.jsx";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  const { blogRef } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Optional: setSearchQuery("") if you want to clear input after search
  };

  return (
    <div>
      <h1 className="mt-5 px-10 ml-5 md:px-10 md:text-[26px] text-2xl font-bold text-blue-300">
        Blog Section
      </h1>
      <section className="px-4 md:px-16 mt-3 md:mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[500px]">
          {/* Big card */}
          <div className="bg-white rounded-2xl shadow p-4 md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=800&q=80"
              alt="Main"
              className="rounded-xl mb-4 w-full object-cover h-40 md:h-60"
            />
            <p className="text-green-500 font-semibold text-sm mb-1">DESIGN</p>
            <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
              Your company might be in need of a social media audit. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. At, asperiores.
            </h2>
            <div className="flex justify-between text-xs md:text-sm text-gray-500">
              <p>By Rubeus Hagrid</p>
              <p>July 20, 2021</p>
            </div>
            <Link to="/category/all">
              <button className="bg-black text-white px-5 py-2 mt-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black">
                <span className="flex items-center gap-2">
                  View all
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </Link>
          </div>

          {/* Small card 1 */}
          <div className="bg-white rounded-2xl shadow p-4">
            <img
              src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=800&q=80"
              alt="Email"
              className="rounded-xl mb-4 w-full object-cover h-20 md:h-28"
            />
            <p className="text-sm md:text-md font-semibold text-gray-800">
              How can businesses utilize email marketing to nurture their leads.
            </p>
            <Link to="/category/all">
              <button className="bg-black text-white px-4 py-2 mt-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black">
                <span className="flex items-center gap-2">
                  View all
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </Link>
          </div>

          {/* Small card 2 */}
          <div className="bg-white rounded-2xl shadow p-4">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
              alt="Auto Reply"
              className="rounded-xl mb-4 w-full object-cover h-20 md:h-28"
            />
            <p className="text-sm md:text-md font-semibold text-gray-800">
              Auto-reply : How to use automated responses for your email lists.
            </p>
            <Link to="/category/all">
              <button className="bg-black text-white px-4 py-2 mt-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black">
                <span className="flex items-center gap-2">
                  View all
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Search section */}
        <div className="bg-[#eaeeed] rounded-xl p-6 md:p-8 mt-10 w-full mx-auto shadow-sm md:h-[300px] relative flex justify-center items-center mb-10">
          {/* Decorative Dots */}
          <div>
            <div className="absolute top-2 md:top-4 left-2 md:left-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full" />
            <div className="absolute top-4 md:top-8 right-2 md:right-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-400 rounded-full" />
            <div className="absolute bottom-4 md:bottom-6 left-2 md:left-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-400 rounded-full" />
            <div className="absolute bottom-6 md:bottom-10 right-2 md:right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-red-400 rounded-full" />
          </div>

          {/* Search Content */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              All blog posts
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              With over 2,400 apps available in the Slack App Directory.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
            >
              <input
                type="text"
                placeholder="Search blog"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(e);
                  }
                }}
                className="w-full md:w-96 px-4 md:px-6 py-2 md:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-4 md:px-6 py-2 md:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer"
              >
                Search Now
              </button>
            </form>
          </div>
        </div>

        <BlogItems searchQuery={searchQuery} />
      </section>
      <Cards />
    </div>
  );
};

export default BlogSection;
