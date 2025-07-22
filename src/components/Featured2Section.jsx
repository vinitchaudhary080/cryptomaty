// src/components/Featured2Section.jsx
import React from "react";
import strategyImg from "../assets/strategy-templates.png"; // aapki Strategy Templates image

const Featured2Section = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Left: Strategy Templates Mockup */}
      <div className="flex justify-center md:justify-start">
        <img
          src={strategyImg}
          alt="Strategy Templates"
          className="w-full max-w-md rounded-xl "
        />
      </div>

      {/* Right: Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Use Ready-Made Strategies. Start Earning Faster.
        </h2>
        <p className="text-gray-600 mb-6">
          Explore proven trading templates crafted by expert traders. Just select, deploy, and let automation do the rest — no coding needed.
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

export default Featured2Section;
