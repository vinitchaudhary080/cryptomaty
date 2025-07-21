// src/components/FAQSection.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "What can I do with this dashboard?",
    answer:
      "You can analyze market trends, create and deploy strategies, run backtests, monitor live P&L, and trade smarter — all from one platform.",
  },
  {
    question: "Do I need to know coding to create strategies?",
    answer:
      "No coding required. Our visual strategy builder lets you design, test, and deploy custom strategies with just a few clicks.",
  },
  {
    question: "Can I connect my broker account?",
    answer:
      "Yes. Go to your account settings, select “Broker Connections,” and follow the prompts to link one or multiple broker accounts securely.",
  },
  {
    question: "Is backtesting available for all strategies?",
    answer:
      "Absolutely. Every prebuilt and custom strategy can be backtested against historical data to see how it would have performed.",
  },
  {
    question: "Is my data and trading information secure?",
    answer:
      "We use industry-standard encryption and secure APIs so that your personal and trading data remains private and protected.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for a free account, connect your broker, and you’re ready to explore charts, screen coins, and deploy strategies.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 email support, live chat during market hours, and a comprehensive knowledge base to help you every step of the way.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-6">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about getting started with our
            Cryptomaty dashboard.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === idx ? (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
