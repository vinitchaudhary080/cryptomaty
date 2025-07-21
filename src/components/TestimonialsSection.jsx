// src/components/TestimonialsSection.jsx
import React from "react";
import amanAvatar from "../assets/aman-mehra.jpg";
import snehaAvatar from "../assets/sneha-kulkarni.jpg";
import karanAvatar from "../assets/karan-patel.jpg";

const testimonials = [
  {
    avatar: amanAvatar,
    name: "Aman Mehra",
    role: "Full-Time Trader",
    title: "The AI screener alone is a game-changer!",
    quote:
      "I spot bullish coins early and execute trades faster. The dashboard gives me the edge I needed.",
    rating: 5.0,
  },
  {
    avatar: snehaAvatar,
    name: "Sneha Kulkarni",
    role: "Swing Trader",
    title: "Deployed my first strategy in minutes.",
    quote:
      "Strategy builder + backtest = perfect combo. No coding, no headache. Just profits.",
    rating: 5.0,
  },
  {
    avatar: karanAvatar,
    name: "Karan Patel",
    role: "Options Trader",
    title: "Now I track everything from one place.",
    quote:
      "Charts, broker P&L, strategy ROI — sab kuch ek dashboard mein! Game changer.",
    rating: 5.0,
  },
  // repeat the above three for the second row
  {
    avatar: amanAvatar,
    name: "Aman Mehra",
    role: "Full-Time Trader",
    title: "The AI screener alone is a game-changer!",
    quote:
      "I spot bullish coins early and execute trades faster. The dashboard gives me the edge I needed.",
    rating: 5.0,
  },
  {
    avatar: snehaAvatar,
    name: "Sneha Kulkarni",
    role: "Swing Trader",
    title: "Deployed my first strategy in minutes.",
    quote:
      "Strategy builder + backtest = perfect combo. No coding, no headache. Just profits.",
    rating: 5.0,
  },
  {
    avatar: karanAvatar,
    name: "Karan Patel",
    role: "Options Trader",
    title: "Now I track everything from one place.",
    quote:
      "Charts, broker P&L, strategy ROI — sab kuch ek dashboard mein! Game changer.",
    rating: 5.0,
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400 flex-none"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.14 3.49a1 1 0 00.95.69h3.678c.969 0 1.371 1.24.588 1.81l-2.976 2.164a1 1 0 00-.364 1.118l1.14 3.49c.3.921-.755 1.688-1.538 1.118L10 11.347l-2.976 2.164c-.783.57-1.838-.197-1.538-1.118l1.14-3.49a1 1 0 00-.364-1.118L3.286 8.917c-.783-.57-.38-1.81.588-1.81h3.678a1 1 0 00.95-.69l1.14-3.49z" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Trusted by 19,000+ Active Traders Worldwide
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Rated 4.7★ across top platforms. From retail investors to pro traders —
          everyone’s scaling faster with our crypto dashboard.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="ml-2 font-medium text-gray-700">
                  {t.rating.toFixed(1)}
                </span>
              </div>

              {/* Title & Quote */}
              <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-600">{t.quote}</p>

              {/* Avatar & Name */}
              <div className="flex items-center mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
