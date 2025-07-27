import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/ContextApi";

const BlogItems = () => {
  const categories = [
    "Technology",
    "Nature",
    "Food",
    "Travel",
    "Art & Design ",
    "All Category",
  ];
  const { blogRef } = useCart();

  return (
    <div
      ref={blogRef}
      className="flex justify-center items-center py-12 px-4  scroll-mt-24"
      id="blog"
    >
      <div className="relative bg-[#f1f5f4] rounded-3xl shadow-xl w-full max-w-4xl p-6 md:p-10">
        {/* Decorative Dots */}
        <div>
          <div className="absolute top-6 left-6 w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute top-6 right-6 w-4 h-4 md:w-5 md:h-5 bg-blue-400 rounded-full animate-ping" />
          <div className="absolute bottom-6 left-6 w-4 h-4 md:w-5 md:h-5 bg-green-400 rounded-full animate-ping" />
          <div className="absolute bottom-6 right-6 w-5 h-5 md:w-6 md:h-6 bg-red-400 rounded-full animate-ping" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex justify-center flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            View Our Blogs
          </h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium text-gray-700 items-center content-center ">
            {categories.map((category) => (
              <li key={category} className="">
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  className="block px-4 py-2 rounded-xl hover:bg-black bg-white shadow hover:text-white transition duration-300"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
