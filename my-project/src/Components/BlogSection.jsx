import React, { useState } from "react";
import ReactCompareImage from 'react-compare-image';
import Cards from "./Cards";
import BlogItems from "./BlogItems";
import { useCart } from "../Context/ContextApi.jsx";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import before from '../assets/before.jpg';
import after from '../assets/after.jpg';
import { FaArrowCircleRight } from "react-icons/fa";
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
      <section className="px-4 md:px-16 mt-3 md:mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[auto] bg-white rounded-2xl shadow-lg p-2">
          {/* Big card */}
          <div className="bshadow p-4 md:row-span-2">
            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
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
                  objectFit: 'fill',
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(40%)',
                }}
                rightImageCss={{
                  objectFit: 'fill',
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(40%)',
                }}
              />

              {/* Floating Labels (always visible) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(128, 128, 128, 0.7)',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  zIndex: 99, // 👈 ensures it's on top of the slider/image layers
                  pointerEvents: 'none', // 👈 makes it non-interactive (optional)
                }}
              >
                Before
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(128, 128, 128, 0.7)',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  zIndex: 99,
                  pointerEvents: 'none',
                }}
              >
                After
              </div>
            </div>

          </div>

          {/* Small card 1 */}
          <div className="">
            <p className="text-3xl font-bold text-blue-500 italic mb-3">{popularService?.[4]?.items[0]?.title ? popularService[4].items[0].title : 'Our Popular one'}</p>

            <h2 className="text-4xl font-bold my-6 text-gray-800">Our <span className="text-gray-900">{`${popularService?.[4]?.process.length}-step ${popularService?.[4]?.category} process`}</span></h2>
             
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-4">
              {popularService?.[4]?.process.map((step, index) => (
                <div key={index} className="flex items-middle gap-2 text-md text-gray-800">
                  <FaArrowCircleRight className="text-blue-500 mt-1 " size={16} />
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
            <Link to={`/category/${encodeURIComponent(popularService[0].category)}`} className="mt-4">
              <button className="bg-black text-white px-5 py-2 mt-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black">
                <span className="flex items-center gap-2">
                  View all
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </Link>
           </div>
          </div>
        </div>

        <BlogItems searchQuery={searchQuery} />
      </section>
      <Cards />
    </div>
  );
};

export default BlogSection;
