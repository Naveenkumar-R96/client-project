import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#f7f9fa] text-gray-700 py-10 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3">PRODUCT</h3>
          <ul className="space-y-2">
            <li>Data Processing</li>
            <li>Compliance</li>
            <li>Integrations</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">FOR DEVELOPERS</h3>
          <ul className="space-y-2">
            <li>Docs</li>
            <li>Knowledge Base</li>
            <li>System Status</li>
            <li>Tutorials</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">FOR BRANDS</h3>
          <ul className="space-y-2">
            <li>Brands</li>
            <li>Performance Marketing</li>
            <li>Publishers</li>
            <li>Styleguide</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3">RESOURCES</h3>
          <ul className="space-y-2">
            <li>Case Studies</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Portfolio</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-3">ABOUT</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Leadership</li>
            <li>Press / News</li>
            <li>Careers / Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6 text-sm text-gray-500">
        <div className="flex gap-4 mb-4 md:mb-0">
          <span>Privacy</span>
          <span>Security</span>
        </div>
        <p>© 2020 Gra.Pro | All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-lg text-gray-600">
          <FaTwitter />
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
