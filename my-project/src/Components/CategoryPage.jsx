import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/dummy_data";
import { FaArrowCircleRight } from "react-icons/fa";
import before from "../assets/before.jpg";
import after from "../assets/after.jpg";
import ReactCompareImage from "react-compare-image";
const CategoryPage = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const steps = [
    "Import Bracketed Shots",
    "Merge to HDR",
    "Basic Adjustments",
    "White Balance Adjustment",
    "Clarity and Dehaze",
    "Graduated and Radial Filters",
    "Detail and Sharpening",
    "Noise Reduction",
    "Final Color Adjustments",
    "Vignetting and Final Touches",
  ];

  // Find the matching category
  const categoryData = data.find(
    (cat) => cat.category.toLowerCase() === decodedName.toLowerCase()
  );

  if (!categoryData) {
    return (
      <p className="p-4 text-red-500 text-center font-semibold">
        Category not found.
      </p>
    );
  }

  return (
    <div className="bg-white">
      {/* 🔵 Top Banner */}
      <div className="bg-[#f9f9fb] relative py-10 text-center overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute right-[100px] top-25 w-[150px] h-[150px] bg-gray-300 opacity-10 transform rotate-45 origin-top-right" />
        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-transparent border-t-blue-400 opacity-30" />

        {/* Optional Triangle Background */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

        <h1 className="text-5xl font-extrabold text-gray-700 tracking-wide z-10 relative italic tracking-wide">
          {categoryData.category}
        </h1>

        {/* Breadcrumb */}
        <p className="text-md text-gray-500 mt-2 z-10 relative font-bold">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-blue-500 ">{categoryData.category}</span>
        </p>
      </div>

      <section className="bg-white py-16 px-8 md:px-20 text-center max-w-[900px] mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Our{" "}
          <span className="text-gray-900">
            {categoryData.process.length}-step {categoryData.category} process
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {categoryData.process.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-lg text-gray-800"
            >
              <FaArrowCircleRight className="text-blue-500 mt-1" size={24} />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🔵 Hero Description */}
      {/* <div className="bg-blue-200/25 py-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          <span className="text-blue-600">
            Transforming real estate with {categoryData.category}:
          </span>
          <br />
          Daylight brilliance meets twilight enchantment
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          At Picondecors.com, our editors elevate your images using advanced{" "}
          {categoryData.category} techniques, seamlessly replacing daytime skies
          with captivating dusk hues. Through skilled lighting adjustments, we
          ensure a consistent and realistic appearance, setting your listing
          apart.
        </p>
      </div> */}

      {/* 🔵 Cards Grid Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="">
          {categoryData.items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 mb-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Compare Block */}
                <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
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
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        backgroundColor: "rgba(128, 128, 128, 0.7)",
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        zIndex: 9999,
                        pointerEvents: "none",
                      }}
                    >
                      Before
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        backgroundColor: "rgba(128, 128, 128, 0.7)",
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        zIndex: 9999,
                        pointerEvents: "none",
                      }}
                    >
                      After
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-left">
                  <p className="text-green-500 font-semibold text-sm">
                    {categoryData.category}
                  </p>
                  <h2 className="font-bold text-xl text-gray-800 mt-2">
                    {item.title}
                  </h2>
                  <p className="text-md text-gray-600 my-3">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-400">
                    By {item.author} on {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
