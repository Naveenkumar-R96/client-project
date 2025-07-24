import React from 'react'

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-sm">
          {/* Logo */}
          <div className="text-2xl font-bold">
            GRO.<span className="text-red-500">PRO</span>
          </div>
    
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
            <li className="hover:text-black cursor-pointer relative">
              Blog
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
            </li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
    
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-black font-medium">Login</button>
            <button className="px-4 py-1.5 border border-black rounded-full font-medium hover:bg-gray-100 transition">
              Register
            </button>
          </div>
    
          {/* Mobile Menu (Optional) */}
          <div className="md:hidden">
            {/* You can add a hamburger icon here */}
            <button className="text-2xl">&#9776;</button>
          </div>
        </nav>
      );
}

export default NavBar
