// src/components/Featured3Section.jsx
import React from "react";
import backtestImg from "../assets/backtest.png"; // aapki backtest screenshot

const Featured3Section = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      
      {/* Left: Text & Checklist */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Backtest Your Strategies Before You Risk Real Money
        </h2>
        <p className="text-gray-600 mb-6">
          Analyze how your strategy would have performed in the past.  
          Get clarity on drawdowns, profits, and potential — powered by real market data.
        </p>
        <ul className="space-y-4 mb-8">
          {[
            "Run historical simulations in seconds",
            "Optimize your entries & exits with data",
            "Minimize risk with drawdown visibility",
          ].map((text, i) => (
            <li key={i} className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-500 flex-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg">
          Get Started Free
        </button>
      </div>

      {/* Right: Backtest Screenshot */}
      <div className="flex justify-center md:justify-end">
        <img
          src={backtestImg}
          alt="Backtest Interface"
          className="w-full max-w-md rounded-xl "
        />
      </div>
      
    </div>
  </section>
);

export default Featured3Section;
