// src/components/TrustedSection.jsx
import React from "react";
import innovioLogo from "../assets/innovio.png";
import zenzapLogo from "../assets/zenzap.png";
import sparkleLogo from "../assets/sparkle.png";
import lumLabsLogo from "../assets/lum-labs.png";
import pulseLogo from "../assets/pulse.png";
import craftgramLogo from "../assets/craftgram.png";

const TrustedSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto text-center px-4">
      <p className="text-sm text-gray-500 mb-6">
        Trusted by 10,000+ founders &amp; business owners
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <img
          src={innovioLogo}
          alt="Innovio"
          className="h-8 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={zenzapLogo}
          alt="ZenZap"
          className="h-8 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={sparkleLogo}
          alt="Sparkle"
          className="h-8 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={lumLabsLogo}
          alt="Lum Labs"
          className="h-8 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={pulseLogo}
          alt="Pulse"
          className="h-8 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={craftgramLogo}
          alt="Craftgram"
          className="h-8 grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  </section>
);

export default TrustedSection;
