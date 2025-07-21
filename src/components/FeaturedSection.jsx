// src/components/FeaturedSection.jsx
import React from "react";
import cardF1 from "../assets/cardf.png";    // first card bg
import cardF2 from "../assets/cardf2.png";   // second card bg
import cardF3 from "../assets/cardf3.png";   // third card bg

import aiIcon from "../assets/icon-ai.png";
import deployIcon from "../assets/icon-deploy.png";
import roiIcon from "../assets/icon-roi.png";

const features = [
  {
    bg: cardF1,
    icon: aiIcon,
    title: "Smart Coin Sentiment Detection",
    desc:
      "Instantly identify bullish, bearish, and neutral coins using AI-driven screening — save time and make data-backed decisions.",
  },
  {
    bg: cardF2,
    icon: deployIcon,
    title: "Deploy Your Custom Strategies",
    desc:
      "Build, test, and activate your trading strategies — automate execution and let our system handle market moves for you.",
  },
  {
    bg: cardF3,
    icon: roiIcon,
    title: "Track Profits & Strategy ROI",
    desc:
      "Get a real-time overview of your P&L, broker-wise performance, and strategy effectiveness — all in one sleek dashboard.",
  },
];

const FeaturedSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
        Everything You Need to Trade Smarter. In One Place.
      </h2>
      <p className="text-center text-gray-500 mb-12">
        From coin sentiment to strategy deployment and performance tracking —
        experience seamless crypto trading with AI-powered insights.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden h-[515px]"
            style={{
              backgroundImage: `url(${f.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-6">
              <img src={f.icon} alt="" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedSection;
