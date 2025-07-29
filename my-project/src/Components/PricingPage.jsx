import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ title, description, category, price }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-sm text-left">
    <div className="flex items-start">
      {/* Orange left accent bar */}
      <div className="w-1 h-5 bg-orange-400 rounded-sm mr-3 mt-1" />
      <div>
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-2">{description}</p>

        {/* Price */}
        <p className="text-lg font-semibold text-green-600 mb-4">{price}</p>

        {/* Link to dynamic category */}
        <Link
          to={`/category/${encodeURIComponent(category)}`}
          className="text-sky-500 font-medium flex items-center hover:underline"
        >
          More Details <FaArrowRight className="ml-2 text-xs" />
        </Link>
      </div>
    </div>
  </div>
);

const PricingPage = () => {
  const features = [
    {
      title: "HDR",
      description: "Enhancing visual dynamics through HDR.",
      category: "Technology",
      price: "$29",
    },
    {
      title: "Day to Dusk",
      description: "Daylight fades, dusk enchants, transforms.",
      category: "Nature",
      price: "$39",
    },
    {
      title: "Virtual Twilight",
      description: "Transforms day into captivating twilight.",
      category: "Food",
      price: "$25",
    },
    {
      title: "Blue Hour",
      description: "Capture vibrant twilight hues after sunset.",
      category: "Travel",
      price: "$35",
    },
    {
      title: "Artistic Edits",
      description: "Creative transformations and retouching.",
      category: "Art & Design",
      price: "$45",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8fcff] flex flex-col py-10 px-4">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Pricing Details
      </h2>

      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
