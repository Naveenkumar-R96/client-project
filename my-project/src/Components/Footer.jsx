import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Logo, Description, Email */}
        <div>
          <div className="text-2xl sm:text-4xl py-3 font-bold">
            Short.<span className="text-red-500">ExpoImages</span>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Picon Decors is a team of passionate and skilled professionals
            specializing in real estate photo editing services. With years of
            experience, we have honed our craft to perfection, ensuring that
            every image we touch transforms into a visual masterpiece.
          </p>
          <div className="flex items-center gap-2 text-gray-700 text-md mb-6">
            <FiMail className="text-blue-400 text-xl" />
            <span>picondecors@gmail.com</span>
          </div>
        </div>

        {/* Right: Services */}
        <div className="flex flex-col items-start md:items-end">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-2 relative">
              Services
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-orange-300 rounded-full animate-pulse" />
            </h2>
            <ul className="flex items-start  flex-col py-3 gap-y-2 space-x-8 text-gray-700 font-medium">
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/about">
                <li>About Us</li>
              </Link>

              <Link to="/pricing">
                <li>Pricing</li>
              </Link>

              <HashLink smooth to="/#blog">
                <li>Blog</li>
              </HashLink>

              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Border and Footer Bar */}
      <div className="border-t mt-10 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {currentYear} Gra.Pro | All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-lg text-gray-600">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
