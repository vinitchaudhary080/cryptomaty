// src/components/Featured4Section.jsx
import React from "react";
import chartsImg from "../assets/charts-dashboard.png"; // apni multi-chart dashboard image

const Featured4Section = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
      
      {/* Left: Dashboard Image */}
      <div className="flex justify-center md:justify-start">
        <img
          src={chartsImg}
          alt="Unified Trading Dashboard"
          className="w-full max-w-lg rounded-xl"
        />
      </div>

      {/* Right: Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          All Your Charts. One Unified Trading View.
        </h2>
        <p className="text-gray-600 mb-6">
          Enable trading mode to monitor multiple charts, analyze trends, and make faster decisions — all from a single, clutter-free dashboard.
        </p>
         <a
          href="https://web.cryptomaty.com/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg inline-block text-center"
        >
          Get Started Free
        </a>
      </div>

    </div>
  </section>
);

export default Featured4Section;
