// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logoC.png";

export default function Navbar({ onGetInTouch }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // helper to scroll
  const handleScroll = (e, id) => {
    e.preventDefault();
    closeMenu();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Cryptomaty Logo" className="h-8 w-auto mr-2" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-gray-700 hover:text-gray-900"
            >
              Features
            </a>
          </li>
          {/* <li>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, "pricing")}
              className="text-gray-700 hover:text-gray-900"
            >
              Pricing
            </a>
          </li> */}
          <li>
            <button
              onClick={() => {
                closeMenu();
                onGetInTouch();
              }}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Desktop Get Started */}
        <div className="hidden md:block">
          <a
            href="https://web.cryptomaty.com/"
            className="inline-block px-5 py-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-6 py-4 space-y-4">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="block text-gray-700 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, "features")}
                className="block text-gray-700 hover:text-gray-900"
              >
                Features
              </a>
            </li>
            {/* <li>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "pricing")}
                className="block text-gray-700 hover:text-gray-900"
              >
                Pricing
              </a>
            </li> */}
            <li>
              <button
                onClick={() => {
                  closeMenu();
                  onGetInTouch();
                }}
                className="w-full text-left text-blue-500 border border-blue-500 rounded-xl px-4 py-2 hover:bg-blue-50 transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
