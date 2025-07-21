// src/components/PricingSection.jsx
import React, { useState } from "react";

const plans = [
  {
    name: "Basic",
    description: "Small businesses individuals starting with AI chatbots.",
    monthlyPrice: 29,
    features: [
      "Basic chatbot functionality.",
      "Integration with one platform.",
      "1,000 interactions per month.",
      "Basic analytics and reporting.",
      "Customizable chatbot.",
    ],
    isHighlighted: false,
  },
  {
    name: "Growth",
    description: "Growing businesses looking to enhance customer engagement.",
    monthlyPrice: 59,
    features: [
      "Advanced NLP for human.",
      "Integration with one platform.",
      "Up to 10,000 interactions.",
      "Customizable chatbot.",
      "Basic workflow automation.",
    ],
    isHighlighted: false,
  },
  {
    name: "Professional",
    description: "Mid-sized businesses needing tailored chatbot solutions.",
    monthlyPrice: 99,
    features: [
      "All features from the Growth Plan.",
      "Up to 50,000 interactions.",
      "Advanced workflow automation.",
      "Integration with CRMs.",
      "Multi-language support.",
    ],
    isHighlighted: true,
  },
  {
    name: "Enterprise",
    description: "Large enterprises with high traffic and complex needs.",
    monthlyPrice: 129,
    features: [
      "Unlimited interactions.",
      "Dedicated account manager.",
      "Custom feature development.",
      "Enhanced data security.",
      "Architecture handle peak traffic.",
    ],
    isHighlighted: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
        <section id="pricing" className="py-16 bg-[#F7FCFF]">
      <div className="container mx-auto px-4 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Choose a plan that suits better
          </h2>
          <p className="text-gray-600">Make your Trading better</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4">
          <span className={`text-sm font-medium ${!isYearly ? "text-black" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none ${
              isYearly ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 bg-white rounded-full transform transition-transform duration-300 ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-black" : "text-gray-500"}`}>
            Yearly
          </span>
          <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
            SAVE 20%
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const price = isYearly
              ? (plan.monthlyPrice * 12 * 0.8).toFixed(0)
              : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`rounded-xl p-6 flex flex-col justify-between border ${
                  plan.isHighlighted
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Header */}
                <div>
                  <h3 className="text-xl font-semibold">{plan.name}.</h3>
                  <p className="mt-2 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mt-6">
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="text-sm font-medium">/{isYearly ? "year" : "month"}</span>
                </div>

                {/* Button */}
                <button
                  className={`mt-6 w-full py-2 rounded-lg font-medium transition ${
                    plan.isHighlighted
                      ? "bg-black text-white hover:bg-gray-900"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Select Plan
                </button>

                {/* Features */}
                <ul
                  className={`mt-6 space-y-3 text-sm ${
                    plan.isHighlighted ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start space-x-2">
                      <svg
                        className={`w-5 h-5 flex-none ${
                          plan.isHighlighted ? "text-blue-200" : "text-green-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
