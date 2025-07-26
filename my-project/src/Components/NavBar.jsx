import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/ContextApi.jsx";
import { useState } from "react";
const NavBar = () => {
 
  const { handleScrollToBlogs } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold">
        GRO.<span className="text-red-500">PRO</span>
      </div>

     { /* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link to={"/"}>
            <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer">Home</li>
          </Link>
          <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer">About Us</li>
          <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer">Pricing</li>
          <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer" id="1"onClick={handleScrollToBlogs}>Blog</li>
          <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer">Contact</li>
        </ul>

        <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          &#9776;
        </button>
      </div>

        {/* Auth Buttons */}

      {/* Mobile Menu=*/}
      <div
        className={`fixed top-0 left-0 w-2/3 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6  h-full justify-between">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-6 border-b-2 border-black-500 pb-4">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={closeMenu}
              className="text-base font-semibold hover:text-red-500 focus:outline-none text-red-500  "
            >
              close
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="flex flex-col space-y-6 text-gray-800 font-medium">
            <Link to="/" onClick={closeMenu}>
              <li className="hover:text-red-500 border-l-4 border-transparent hover:border-red-500 pl-3 cursor-pointer transition-all duration-200">
                Home
              </li>
            </Link>
            <li className="hover:text-red-500 border-l-4 border-transparent hover:border-red-500 pl-3 cursor-pointer transition-all duration-200">
              About Us
            </li>
            <li className="hover:text-red-500 border-l-4 border-transparent hover:border-red-500 pl-3 cursor-pointer transition-all duration-200">
              Pricing
            </li>
            <li
              onClick={() => {
                handleScrollToBlogs();
                closeMenu();
              }}
              className="hover:text-red-500 border-l-4 border-transparent hover:border-red-500 pl-3 cursor-pointer transition-all duration-200"
            >
              Blog
            </li>
            <li className="hover:text-red-500 border-l-4 border-transparent hover:border-red-500 pl-3 cursor-pointer transition-all duration-200">
              Contact
            </li>
          </ul>

          {/* Footer or social links in mobile menu (optional) */}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default NavBar;
