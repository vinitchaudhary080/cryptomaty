// src/components/FooterSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoC.png";           // Cryptomaty logo
import facebookIcon from "../assets/facebook.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import telegramIcon from "../assets/telegram.svg";
import youtubeIcon from "../assets/youtube.svg";

export default function FooterSection({ onGetInTouch }) {
  // Scroll helper
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Cryptomaty Logo" className="h-8 mb-4" />
          <p className="text-gray-600 mb-4">
            Your all-in-one crypto trading dashboard — build strategies, monitor
            markets, and grow your profits with AI-powered precision.
          </p>
          <p className="text-gray-600 mb-4">
            Built for traders. Trusted by thousands.
          </p>
          <div className="flex space-x-4">
            
            <a
              href="https://www.youtube.com/@AlgoRooms"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
            </a>
           
            <a
              href="https://www.instagram.com/cryptomatyofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
           
          </div>
        </div>

        {/* Company Links (scroll to sections) */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, "features")}
                className="hover:text-gray-900"
              >
                Features
              </a>
            </li>
            {/* <li>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "pricing")}
                className="hover:text-gray-900"
              >
                Pricing
              </a>
            </li> */}
          </ul>
        </div>

        {/* Resources Links (popup on Contact Us) */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <button
                onClick={onGetInTouch}
                className="hover:text-gray-900"
              >
                Contact Us
              </button>
            </li>
            <li>
              <a href="#integrations" className="hover:text-gray-900">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-900">
                Terms &amp; Conditions
              </Link>
            </li>
            {/* <li>
              <a href="#refund" className="hover:text-gray-900">
                Refund Policy
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-6">
        <p className="text-center text-sm text-gray-500">
          © 2025 Cryptomaty, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
