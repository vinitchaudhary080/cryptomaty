// src/components/ContactFormModal.jsx
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import phoneIcon from '../assets/Phone Rounded.svg'
import letterIcon from '../assets/Letter.svg'
import buildingIcon from '../assets/Buildings.svg'

// initialize EmailJS with your user ID
emailjs.init('ytKzA4OdeQE6M0Ua2')

export default function ContactFormModal({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const services = [
    'Company Incorporation',
    'GST Registration Online',
    'Limited Liability Partnership',
    'Income Tax Return Filling',
    'GST Return Filling',
    'MSME Registration',
    'Trademark Registration',
    'ROC Compliances',
    'Online Trust Registration',
    'Audit & Assurance Services',
    'Accounting and Book Keeping Services',
  ]

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!/^\d{10}$/.test(form.mobile)) {
      setStatus({ type: 'error', message: 'Mobile number must be exactly 10 digits.' })
      return false
    }
    if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      setStatus({ type: 'error', message: 'Email must end with @gmail.com.' })
      return false
    }
    return true
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStatus(null)
    if (!validate()) return

    const templateParams = {
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      service: form.service,
      message: form.message,
      time: new Date().toLocaleString(),
    }

    emailjs
      .send('service_clv1zdq', 'template_p0icebc', templateParams)
      .then(() => {
        setStatus({ type: 'success', message: 'Your message has been sent! We will be in touch soon.' })
        setForm({ name: '', mobile: '', email: '', service: '', message: '' })
      })
      .catch(err => {
        console.error('EmailJS error:', err)
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' })
      })
  }

  return (
    // Make the viewport itself scrollable on small screens
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />

      {/* Modal box */}
      <div
        className="
          relative
          bg-white
          rounded-2xl
          shadow-lg
          w-full
          max-w-4xl
          mx-auto
          overflow-hidden
          max-h-[90vh]
          flex flex-col
        "
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="bg-[#FA9426] p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-6">
              We're here to offer guidance in a wide range of financial, tax, and business needs.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <img src={phoneIcon} alt="Phone" className="w-6 h-6 mr-3" />
                +91-9413730750
              </li>
              <li className="flex items-center">
                <img src={letterIcon} alt="Email" className="w-6 h-6 mr-3" />
                karsutrahq@gmail.com
              </li>
              <li className="flex items-start">
                <img src={buildingIcon} alt="Office" className="w-6 h-6 mr-3 mt-1" />
                4th Floor, ENKAY TOWER, Phase V, Udyog Vihar, Sector 19,<br />
                Gurugram, Haryana 122001
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <form className="p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  type="tel"
                  pattern="\d{10}"
                  title="Enter exactly 10 digits"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  pattern="^[A-Za-z0-9._%+-]+@gmail\.com$"
                  title="Email must end with @gmail.com"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="Enter your mail id"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:outline-none rounded-md p-2"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {/* Status message */}
              {status && (
                <p
                  className={
                    status.type === 'success'
                      ? 'text-green-600 font-medium'
                      : 'text-red-600 font-medium'
                  }
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="mt-2 bg-[#FA9426] hover:bg-[#D97E0D] text-white font-medium py-2 px-4 rounded-xl transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
