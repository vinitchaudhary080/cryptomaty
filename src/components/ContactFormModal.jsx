// src/components/ContactFormModal.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import phoneIcon from "../assets/Phone Rounded.svg";
import letterIcon from "../assets/Letter.svg";
import locationIcon from "../assets/Buildings.svg";
import bgImage from "../assets/contact-bg.png"; // your office‐interior image

emailjs.init("ytKzA4OdeQE6M0Ua2");

export default function ContactFormModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // { type, message }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!/^\d{10}$/.test(form.mobile)) {
      setStatus({ type: "error", message: "Mobile must be 10 digits." });
      return false;
    }
    if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      setStatus({ type: "error", message: "Email must end with @gmail.com." });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    const templateParams = {
      ...form,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_clv1zdq", "template_p0icebc", templateParams)
      .then(() => {
        setStatus({ type: "success", message: "Message sent! We’ll be in touch." });
        setForm({ name: "", mobile: "", email: "", message: "" });
      })
      .catch(() =>
        setStatus({
          type: "error",
          message: "Oops! Something went wrong. Please try later.",
        })
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden max-h-[90vh]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-900 z-10"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left: Background + Contact Info */}
          <div className="relative">
            <img
              src={bgImage}
              alt="Office background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,160,239,0.7)]" />

            <div className="relative h-full flex flex-col justify-between text-white p-8">
              <h2 className="text-3xl font-bold">Contact us</h2>

              <div className="bg-white bg-opacity-90 rounded-xl p-6 text-gray-800 max-w-sm">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center">
                    <img src={phoneIcon} alt="" className="w-5 h-5 mr-3" />
                    +91-9876543210
                  </li>
                  <li className="flex items-center">
                    <img src={letterIcon} alt="" className="w-5 h-5 mr-3" />
                    support@cryptomaty.com
                  </li>
                  <li className="flex items-start">
                    <img
                      src={locationIcon}
                      alt=""
                      className="w-5 h-5 mr-3 mt-1"
                    />
                    4th Floor, ENKAY TOWER, Phase V, Udyog Vihar,<br />
                    Sector 19, Gurugram, Haryana 122001
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 overflow-y-auto">
            <h3 className="text-2xl font-semibold text-[#00A0EF] mb-6">
              Send Us A Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                required
              />
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                required
                pattern="\d{10}"
                title="10 digits"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                required
                pattern="^[A-Za-z0-9._%+-]+@gmail\.com$"
                title="Must end with @gmail.com"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none h-32"
                required
              />

              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#00A0EF] hover:bg-[rgba(0,160,239,0.7)] text-white font-medium py-3 rounded-xl transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
