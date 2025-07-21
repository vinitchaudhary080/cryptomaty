// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logoC.png"; // Apna Cryptomaty logo yahan daalo

const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Cryptomaty Logo" className="h-8 w-auto mr-2" />
        {/* <span className="text-xl font-bold">Cryptomaty</span> */}
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#home" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="text-gray-700 hover:text-gray-900">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Get Started Button */}
      <div className="hidden md:block">
        <a
          href="#get-started"
          className="inline-block px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Menu Toggle (optional) */}
      <div className="md:hidden">
        <button aria-label="Open menu">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
