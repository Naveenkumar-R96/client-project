import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../data/dummy_data";
import { motion } from "framer-motion";

const Card = ({ title, description, category, price, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-sm text-left"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-start">
      <div className="w-1 h-5 bg-orange-400 rounded-sm mr-3 mt-1" />
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>

        <div className="flex items-end justify-between mt-4">
          <p className="text-5xl font-extrabold text-gray-700 tracking-wide italic">{price}</p>
          <Link
            to={`/category/${encodeURIComponent(category)}`}
            className="text-sky-500 font-medium flex items-center hover:underline"
          >
            More Details <FaArrowRight className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const PricingPage = () => {
  return (
    <section className="bg-[#f8fcff] flex flex-col py-10 px-4">
      {/* Section Heading */}
      <div className="bg-[#f9f9fb] relative text-center overflow-hidden mb-10">
        <h2 className="text-5xl font-extrabold text-gray-700 tracking-wide italic">
          Pricing
        </h2>
        <p className="text-sm text-gray-500 mt-3 font-semibold">
          <Link to="/" className="text-black hover:underline">Home</Link>
          <span className="mx-1">›</span>
          <span className="text-blue-500">Pricing</span>
        </p>
      </div>

      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            index={index}
            title={item.category}
            description={item.description}
            price={item.pricing}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
