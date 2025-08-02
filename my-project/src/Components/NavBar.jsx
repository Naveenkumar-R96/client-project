import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isHome = location.pathname === "/" && location.hash === "";
  const isBlog = location.pathname === "/" && location.hash === "#blog";
  const isAbout = location.pathname === "/about";
  const isPricing = location.pathname === "/pricing";
  const isContact = location.pathname === "/contact";

  const navItemClass = (isActive) =>
    `cursor-pointer ${
      isActive
        ? "text-red-500 font-semibold border-b-2 border-red-500"
        : "hover:text-black hover:border-b-2 hover:border-black"
    }`;

  const mobileItemClass = (isActive) =>
    `pl-3 cursor-pointer transition-all duration-200 border-l-4 ${
      isActive
        ? "text-red-500 border-red-500 font-semibold"
        : "hover:text-red-500 hover:border-red-500 border-transparent"
    }`;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Short.<span className="text-red-500">ExpoImages</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <Link to="/">
          <li className={navItemClass(isHome)}>Home</li>
        </Link>

        <Link to="/about">
          <li className={navItemClass(isAbout)}>About Us</li>
        </Link>

        <Link to="/pricing">
          <li className={navItemClass(isPricing)}>Pricing</li>
        </Link>

        <HashLink smooth to="/#blog">
          <li className={navItemClass(isBlog)}>Blog</li>
        </HashLink>

        <Link to="/contact">
          <li className={navItemClass(isContact)}>Contact</li>
        </Link>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          &#9776;
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-1/2 sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b-2 pb-4">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={closeMenu}
              className="text-base font-semibold text-red-500 hover:text-red-600 focus:outline-none"
            >
              &#10005;
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col space-y-6 text-gray-800 font-medium">
            <Link to="/" onClick={closeMenu}>
              <li className={mobileItemClass(isHome)}>Home</li>
            </Link>

            <Link to="/about" onClick={closeMenu}>
              <li className={mobileItemClass(isAbout)}>About Us</li>
            </Link>

            <Link to="/pricing" onClick={closeMenu}>
              <li className={mobileItemClass(isPricing)}>Pricing</li>
            </Link>

            <HashLink smooth to="/#blog" onClick={closeMenu}>
              <li className={mobileItemClass(isBlog)}>Blog</li>
            </HashLink>

            <Link to="/contact" onClick={closeMenu}>
              <li className={mobileItemClass(isContact)}>Contact</li>
            </Link>
          </ul>
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
