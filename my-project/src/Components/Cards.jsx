import React from "react";
import Faq from "./Faq.jsx"; 
import data from "../data/dummy_data"; 
import ReactCompareImage from 'react-compare-image';
const Cards = () => {
  const cards = data.flatMap(section =>
    section.items.map(item => ({
      ...item,
      category: section.category,
      description: section.description,
    }))
  );

  return (
    <div className="bg-white">
      {/* 🔵 Top Banner */}
      <div className="bg-[#f9f9fb] relative py-16 text-center">
        <div className="absolute right-[100px] top-25 w-[150px] h-[150px] bg-gray-300 opacity-10 transform rotate-45 origin-top-right overflow-hidden" />

        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-blue-400 opacity-30" />

        <h1 className="text-4xl font-bold text-gray-800 z-10 relative">
          Our Latest Insights
        </h1>
        <p className="text-sm text-gray-500 mt-2 z-10 relative font-medium">
          Explore trending topics and expert knowledge in design, dev, and more.
        </p>
      </div>

      {/* 🔵 Cards Grid Section */}
      <div className="bg-blue-200/25 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              {/* 🔺 Background triangle */}
              <div className="absolute bottom-[-60px] right-0 w-[180px] h-[180px] bg-gray-500 opacity-10 rotate-45 origin-bottom-right z-0" />

              {/* Card content */}
              <div className="bshadow px-4 py-2md:row-span-2">
                <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
                  <ReactCompareImage
                    leftImage={card.beforeImage}
                    rightImage={card.afterImage}
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
              <div className="px-4 py-2 z-10 relative">
                <h2 className="font-bold text-lg text-gray-800 mt-1">
                  {card.category}
                </h2>
                <p className={`${card.color} font-semibold text-sm`}>
                  {card.title}
                </p>
                
                {/* <div className="mt-4 group">
                  <Link
                    to={`/category/${encodeURIComponent(category.category)}`}
                    className="text-sky-500 font-medium flex items-baseline hover:underline text-sm"
                  >
                    View <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Faq/>
    </div>
  );
};

export default Cards;
