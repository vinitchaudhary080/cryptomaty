// src/components/StayInfoSection.jsx
import React from "react";
import satyBg from "../assets/Saty1.png"; // your full‐section background

export default function StayInfoSection() {
  return (
    <section className="relative py-40 bg-[#F7FCFF]">
      {/* Desktop+ background image */}
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${satyBg})` }}
      />

      {/* Content wrapper—relative so it sits above the bg image */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        {/* Left: Heading + List */}
        <div className="text-center md:text-left space-y-6 text-[#212121]">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Stay Informed. Stay Ahead. Trade Smart.
          </h2>
          <p className="text-white/90 md:text-[#212121]">
            Access real-time market updates, AI-based coin screeners, and live P&amp;L tracking from your broker — all in one simplified view.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              {/* icon */}
              <svg
                className="w-6 h-6 text-blue-500 flex-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m0 0v4m6-4v4m-6 4h6m-6 0a2 2 0 01-2-2v-2m8 4a2 2 0 002-2v-2"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-[#212121]">
                  AI-Powered Coin Screener
                </h4>
                <p className="text-sm text-[#212121] mt-1">
                  Quickly identify bullish, bearish, and neutral coins with our smart sentiment tracker — powered by AI, not guesswork.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-500 flex-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3v18h18M9 17l3-5 4 3 5-9"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-[#212121]">
                  Live Market Updates
                </h4>
                <p className="text-sm text-[#212121] mt-1">
                  Track real-time prices, trends, and momentum across your favorite coins — stay market-ready at every moment.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-500 flex-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a4 4 0 00-8 0v2M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-[#212121]">
                  Broker-Wise Strategy P&L
                </h4>
                <p className="text-sm text-[#212121] mt-1">
                  Monitor how your deployed strategies are performing directly inside your broker account — no switching tabs or tools.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right column left blank or your cards as before */}
        <div>{/* … */}</div>
      </div>
    </section>
  );
}
