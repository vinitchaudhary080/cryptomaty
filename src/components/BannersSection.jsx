// src/components/BannersSection.jsx
import React from "react";
import bannerImg from "../assets/dashboard-laptop.png"; // apni laptop screenshot image

export default function BannerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Start Trading Smarter. <br /> Grow Your Crypto Profits.
            </h2>
            <p className="text-gray-600 mb-6">
              Everything you need — from AI screeners to live broker tracking — in one powerful dashboard.
              Start your 14-day free trial and level up your trading game.
            </p>
            <a
              href="https://web.cryptomaty.com/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg inline-block text-center"
            >
              Get 14 Days Free Trial
            </a>

          </div>

          {/* Right: Laptop Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={bannerImg}
              alt="Cryptomaty Dashboard on Laptop"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
