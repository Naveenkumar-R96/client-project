import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import data from "../data/dummy_data.json";
import { useCart } from "../Context/ContextApi";

const CategoryButtons = ({ searchQuery })  => {
  const { blogRef } = useCart();
  const filteredData = data.filter((item) =>
    (item.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.description?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.category?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );


  return (
    <div className="px-4 md:px-12 py-10" ref={blogRef} id="blog">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Explore Blog Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* All Categories Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-sm text-left mx-auto">
          <div className="flex items-start">
            <div className="w-1 h-5 bg-orange-400 rounded-sm mr-3 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                All Categories
              </h3>
              <p className="text-gray-600 mb-2">
                View all blog posts across every category.
              </p>
              <Link
                to="/category/all"
                className="text-sky-500 font-medium flex items-center hover:underline text-sm"
              >
                View All <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>

        {/* Individual Category Cards */}
        {filteredData.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-sm text-left mx-auto"
          >
            <div className="flex items-start">
              <div className="w-1 h-5 bg-orange-400 rounded-sm mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {category.category}
                </h3>
                <p className="text-gray-600 mb-2">{category.description}</p>
                {category.price && (
                  <p className="text-lg font-semibold text-green-600 mb-4">
                    {category.price}
                  </p>
                )}
                <Link
                  to={`/category/${encodeURIComponent(category.category)}`}
                  className="text-sky-500 font-medium flex items-center hover:underline text-sm"
                >
                  More Details <FaArrowRight className="ml-2 text-xs" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
