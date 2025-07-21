// src/components/StayInfoSection.jsx
import React from "react";
import scribbleBg from "../assets/scribble-bg.png";          // aapki grey scribble background
import aiScreenerImg from "../assets/ai-screener.png";      // AI Screener card screenshot
import brokerCardImg from "../assets/broker-card.png";      // Broker card screenshot
import marketUpdatesImg from "../assets/market-updates.png"; // Market Updates card screenshot

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500 flex-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m0 0v4m6-4v4m-6 4h6m-6 0a2 2 0 01-2-2v-2m8 4a2 2 0 002-2v-2" />
      </svg>
    ),
    title: "AI-Powered Coin Screener",
    desc:
      "Quickly identify bullish, bearish, and neutral coins with our smart sentiment tracker — powered by AI, not guesswork.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500 flex-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 3v18h18M9 17l3-5 4 3 5-9" />
      </svg>
    ),
    title: "Live Market Updates",
    desc:
      "Track real-time prices, trends, and momentum across your favorite coins — stay market-ready at every moment.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500 flex-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M17 9V7a4 4 0 00-8 0v2M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
      </svg>
    ),
    title: "Broker-Wise Strategy P&L",
    desc:
      "Monitor how your deployed strategies are performing directly inside your broker account — no switching tabs or tools.",
  },
];

export default function StayInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        {/* Left: Heading + List */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Stay Informed. Stay Ahead. Trade Smart.
          </h2>
          <p className="text-gray-600">
            Access real-time market updates, AI-based coin screeners, and live P&amp;L tracking from your broker — all in one simplified view.
          </p>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start space-x-3">
                {f.icon}
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Overlapping Cards on Scribble BG */}
        <div className="relative flex justify-center md:justify-end">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${scribbleBg})` }}
          />
          {/* AI Screener Card */}
          <div className="relative z-20 transform rotate-2 md:-translate-x-8 md:-translate-y-8">
            <img
              src={aiScreenerImg}
              alt="AI Screener"
              className="w-72 rounded-xl shadow-xl"
            />
          </div>
          {/* Broker Card */}
          <div className="absolute z-10 bottom-12 right-8 transform rotate-[-3deg]">
            <img
              src={brokerCardImg}
              alt="Broker Performance"
              className="w-48 rounded-lg shadow-lg"
            />
          </div>
          {/* Market Updates Card */}
          <div className="absolute z-10 bottom-0 left-8 transform translate-x-4">
            <img
              src={marketUpdatesImg}
              alt="Market Updates"
              className="w-72 rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
