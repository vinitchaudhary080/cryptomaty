// src/components/Hero.jsx
import React from "react";
import phoneImage from "../assets/Container.png";

const Hero = () => (
  <section id="home" className="bg-white py-24">
    <div className="container mx-auto px-4 text-center">
      {/* Heading + Subheading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Your smart{" "}
        <span className="bg-blue-400 text-white px-2 rounded-md">crypto</span>{" "}
        dashboard for faster &amp; smarter trades
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Track live charts, execute trades, and stay ahead of market moves — all
        from one powerful dashboard.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-16">
  <a
          href="https://web.cryptomaty.com/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium
                     text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center"
        >
          Get Started Free
        </a>
  <a
   href="https://www.youtube.com/@AlgoRooms"
   target="_blank"
   rel="noopener noreferrer"
   className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-medium
              text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg inline-flex items-center"
 >
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.752 11.168l-5.197-3.028A1 1 0 008 9.028v5.944a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z"
      />
    </svg>
    How it’s Works
  </a>
</div>


      {/* Phone Image */}
      <div className="mt-12">
        <img
          src={phoneImage}
          alt="Cryptomaty App Preview"
          className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-6xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
