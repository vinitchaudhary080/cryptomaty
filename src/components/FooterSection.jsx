// src/components/FooterSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoC.png";           // Cryptomaty logo
import facebookIcon from "../assets/facebook.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import telegramIcon from "../assets/telegram.svg";

export default function FooterSection() {
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
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Telegram">
              <img src={telegramIcon} alt="Telegram" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#about" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-gray-900">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#contact" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#integrations" className="hover:text-gray-900">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 updated with React Router Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
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
            <li>
              <a href="#refund" className="hover:text-gray-900">
                Refund Policy
              </a>
            </li>
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
