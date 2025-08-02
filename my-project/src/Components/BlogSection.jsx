import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import Cards from "./Cards";
import BlogItems from "./BlogItems";
import { useCart } from "../Context/ContextApi.jsx";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import before from "../assets/before.jpg";
import after from "../assets/after.jpg";
import data from "../data/dummy_data.js";

const BlogSection = () => {
  const { blogRef } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const popularService = data.filter((item) =>
    (item.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.description?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.category?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="px-4 md:px-16 mt-8 md:mt-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Our Popular service
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-2"
        >
          {/* Image Compare Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-4"
          >
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
              <ReactCompareImage
                leftImage={before}
                rightImage={after}
                leftImageAlt="Before"
                rightImageAlt="After"
                aspectRatio="taller"
                handleSize={40}
                sliderLineColor="#FFFFFF"
                sliderLineWidth={4}
                handleBorderRadius={10}
                handleBorderWidth={4}
                handleBorderColor="#FFFFFF"
                handleBackgroundColor="#FFFFFF"
                handleBorderStyle="solid"
                leftImageCss={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  filter: "brightness(40%)",
                }}
                rightImageCss={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  filter: "brightness(40%)",
                }}
              />
              {/* Floating Labels */}
              <div className="absolute bottom-2 left-2 bg-gray-500/70 text-white text-sm px-3 py-1 rounded-md z-10">
                Before
              </div>
              <div className="absolute bottom-2 right-2 bg-gray-500/70 text-white text-sm px-3 py-1 rounded-md z-10">
                After
              </div>
            </div>
          </motion.div>

          {/* Description Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4"
          >
            <p className="text-3xl font-bold text-blue-500 italic mb-3">
              {popularService?.[4]?.items[0]?.title || "Our Popular One"}
            </p>

            <h2 className="text-4xl font-bold my-6 text-gray-800">
              Our{" "}
              <span className="text-gray-900">
                {`${popularService?.[4]?.process.length}-step ${popularService?.[4]?.category} process`}
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-4">
              {popularService?.[4]?.process.map((step, index) => (
                <div key={index} className="flex items-start gap-2 text-md text-gray-800">
                  <FaArrowCircleRight className="text-blue-500 mt-1" size={16} />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-lg md:text-xl mb-2 text-gray-900">
                {popularService?.[4]?.description}
              </h2>
              <div className="flex justify-between text-xs md:text-sm text-gray-500">
                <p>By Rubeus Hagrid</p>
                <p>July 20, 2021</p>
              </div>

              <Link to={`/category/${encodeURIComponent(popularService[0].category)}`} className="mt-4 inline-block">
                <button className="bg-black text-white px-5 py-2 mt-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black">
                  <span className="flex items-center gap-2">
                    View all
                    <FaArrowRight className="text-xs" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BlogItems searchQuery={searchQuery} />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Cards />
      </motion.div>
    </div>
  );
};

export default BlogSection;
