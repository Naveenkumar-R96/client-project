import React from "react";
import { useCart } from "../Context/ContextApi.jsx";
import BlogSection from "./BlogSection.jsx";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const { hi } = useCart();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <section className="bg-[#F4F6F8] mt-6 mx-4 md:mx-16 rounded-3xl py-13 px-4 md:px-10 relative h-[60vh] flex justify-center items-center overflow-hidden">
        {/* Colored Dots */}
        <span className="absolute top-8 left-10 w-9 h-9 bg-pink-400 rounded-full"></span>
        <span className="absolute bottom-6 left-6 w-4 h-4 bg-green-400 rounded-full"></span>
        <span className="absolute top-6 right-8 w-4 h-4 bg-blue-500 rounded-full"></span>
        <span className="absolute bottom-4 right-12 w-4 h-4 bg-yellow-400 rounded-full"></span>
        <span className="absolute top-16 right-16 w-5 h-5 bg-red-400 rounded-full"></span>
        <span className="absolute bottom-10 left-12 w-3 h-3 bg-purple-500 rounded-full"></span>

        <div className="text-center max-w-7xl mx-auto z-10 relative">
          <motion.p
            variants={childVariants}
            className="text-sm text-blue-500 mt-3 z-10 relative font-semibold mb-2"
          >
            Behind the Edit
          </motion.p>

          <motion.h1
            variants={childVariants}
            className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Retouching Reality: Turning Listings into Luxury
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-gray-600 text-base md:text-lg mb-8"
          >
            Our Photoshop wizards turn average shots into breathtaking
            showcases. Every corner, every shadow, every color — perfected to
            drive attention and action.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="flex justify-center gap-4"
          >
            <Link to="contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-black text-white px-5 py-3 rounded-full font-medium transition hover:bg-white hover:text-black hover:border hover:border-black flex items-center justify-center gap-2 text-sm">
                <FaPhoneAlt />
                Book a call
              </button>
            </Link>

            <Link to="pricing" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-black text-black px-5 py-3 rounded-full font-medium hover:bg-black hover:text-white transition flex items-center justify-center gap-2 text-sm">
                <FaTags />
                View Pricing
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <BlogSection />
    </motion.div>
  );
};

export default Home;
