import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/dummy_data.json";

const CategoryPage = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  // Find the matching category
  const categoryData =
    decodedName === "all"
      ? {
          category: "All Categories",
          items: data.flatMap((cat) => cat.items || []),
        }
      : data.find(
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
      <div className="bg-[#f9f9fb] relative py-16 text-center overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute right-[100px] top-25 w-[150px] h-[150px] bg-gray-300 opacity-10 transform rotate-45 origin-top-right" />
        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-transparent border-t-blue-400 opacity-30" />

        {/* Optional Triangle Background */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

        <h1 className="text-5xl font-bold text-gray-500 tracking-wide z-10 relative ">
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

      {/* 🔵 Hero Description */}
      <div className="bg-blue-200/25 py-16 text-center px-4">
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
      </div>

      {/* 🔵 Cards Grid Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              {/* Background triangle */}
              <div className="absolute bottom-[-60px] right-0 w-[180px] h-[180px] bg-gray-500 opacity-10 rotate-45 origin-bottom-right z-0" />

              {/* Card content */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover z-10 relative"
              />
              <div className="p-4 z-10 relative">
                <p className="text-green-500 font-semibold text-sm">
                  {categoryData.category}
                </p>
                <h2 className="font-bold text-lg text-gray-800 mt-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 my-2">{item.description}</p>
                <p className="text-xs text-gray-400 mb-2">
                  By {item.author} on {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
