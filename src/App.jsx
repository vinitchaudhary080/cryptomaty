// src/App.jsx

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedSection from './components/TrustedSection'
import FeatureSection from './components/FeaturedSection'
import Feature2Section from './components/Featured2Section'
import Feature3Section from './components/Featured3Section'
import Feature4Section from './components/Featured4Section'
import StayInfoSection from './components/StayInfoSection'
import TestinomailsSection from './components/TestimonialsSection'
import Pricing from './components/PricingSection'
import FAQS from './components/FAQSection'
import Banners from './components/BannersSection'
import FooterSection from './components/FooterSection'  // sirf ek baar import

import Terms from './components/Terms'
import Privacy from './components/Privacy'
import ContactFormModal from './components/ContactFormModal'

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <ScrollToTop />

      {isFormOpen && (
        <ContactFormModal onClose={() => setIsFormOpen(false)} />
      )}

      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <Navbar onGetInTouch={() => setIsFormOpen(true)} />
              <Hero />
              <TrustedSection />
              <FeatureSection />
              <Feature2Section />
              <Feature3Section />
              <Feature4Section />
              <StayInfoSection />
              <TestinomailsSection />
              <Pricing />
              <FAQS />
              <Banners />
              <FooterSection />
            </>
          }
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms"
          element={
            <>
              <Navbar />
              <Terms />
              <FooterSection />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <Privacy />
              <FooterSection />
            </>
          }
        />
      </Routes>
    </>
  )
}
