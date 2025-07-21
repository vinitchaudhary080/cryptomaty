// pages/privacy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: April 5, 2025</p>

        {/* 1. Introduction */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to <strong>Cryptomaty</strong>, a crypto algorithmic trading
          platform and strategy marketplace. We prioritize your privacy and are
          committed to handling your data with transparency and integrity. This
          Privacy Policy outlines how we collect, use, disclose, and protect
          your information in accordance with the Digital Personal Data
          Protection Act, 2023 (DPDP Act), the Information Technology Act,
          2000, and global regulations including the GDPR (where applicable).
        </p>

        {/* 2. Information We Collect */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Personal Information:</strong> Name, email, mobile number,
            Aadhaar/PAN, address, and profile photo.
          </li>
          <li>
            <strong>Account Information:</strong> Wallet addresses, exchange
            API keys (read-only), transaction history.
          </li>
          <li>
            <strong>Usage Data:</strong> Device data, IP address, browser
            information, and platform interactions.
          </li>
          <li>
            <strong>Marketplace Activity:</strong> Strategy views, purchases,
            uploads, reviews, and ratings.
          </li>
          <li>
            <strong>Financial Data:</strong> Bank account information (for
            withdrawals), crypto transaction logs, and billing details.
          </li>
          <li>
            <strong>Cookies:</strong> Preferences, sessions, and behavior via
            cookies and local storage.
          </li>
        </ul>

        {/* 3. How We Use Your Information */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>To verify your identity procedures.</li>
          <li>To facilitate secure trades and manage your algorithmic strategies.</li>
          <li>To provide access to the strategy marketplace and manage purchases or sales.</li>
          <li>To enhance platform features and customize user experience.</li>
          <li>To comply with legal obligations and protect against fraud and abuse.</li>
          <li>To send transactional emails, updates, and platform alerts.</li>
        </ul>

        {/* 4. Data Sharing and Disclosure */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
        <p className="mb-4">
          We share your data with:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            Trusted third-party vendors (e.g., analytics, payment gateways, KYC
            providers).
          </li>
          <li>
            Regulatory bodies such as RBI, SEBI, or income tax authorities as per
            compliance norms.
          </li>
          <li>
            Exchange partners with whom you integrate (Binance, Delta Exchange,
            etc.).
          </li>
          <li>
            Marketplace buyers (limited seller data such as name and reviews, not
            financials).
          </li>
        </ul>
        <p className="mb-4 font-semibold">We never sell your personal data.</p>

        {/* 5. Strategy Ownership and Marketplace Transparency */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Strategy Ownership and Marketplace Transparency
        </h2>
        <p className="mb-4">
          Uploaded strategies remain the intellectual property of the creator.
          Cryptomaty does not claim ownership but requires limited rights to host
          and display them. Buyers may access logic summaries, performance
          backtests, and descriptions. We do not share code unless the creator
          permits.
        </p>

        {/* 6. Data Security */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
        <p className="mb-4">
          We follow industry-leading security protocols, including AES-256
          encryption, two-factor authentication (2FA), secure APIs, and periodic
          audits. However, no method is fully secure, and you agree to use the
          platform at your own risk.
        </p>

        {/* 7. Your Rights */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Access your data and account activity.</li>
          <li>Edit or update your personal information.</li>
          <li>Request data deletion (unless retention is legally required).</li>
          <li>Revoke access to third-party integrations (e.g., disconnect exchange keys).</li>
          <li>Download a copy of your data via our data export tool.</li>
        </ul>

        {/* 8. International Users */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Users</h2>
        <p className="mb-4">
          For users outside India, especially those in the EU/EEA, we process data
          in accordance with the GDPR. You have the right to lodge a complaint
          with your supervisory authority and can contact our DPO for further
          information.
        </p>

        {/* 9. Data Retention */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Data Retention</h2>
        <p className="mb-4">
          We retain user data for as long as necessary to fulfill trading, legal,
          and security purposes. Inactive accounts are purged after 24 months of
          inactivity unless regulatory retention is required.
        </p>

        {/* 10. Children's Privacy */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Children's Privacy</h2>
        <p className="mb-4">
          Our platform is not intended for users under 18. We do not knowingly
          collect data from minors. If you believe a minor has shared data,
          please contact us for immediate deletion.
        </p>

        {/* 11. Cookies and Tracking */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies to remember preferences, analyze traffic, and serve
          relevant content. You may adjust cookie settings via your browser or
          use our consent manager.
        </p>

        {/* 12. Policy Updates */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Policy Updates</h2>
        <p className="mb-4">
          We may revise this policy periodically. Changes will be reflected on
          this page with a revised date. Significant changes will be notified via
          email or pop-up.
        </p>

        {/* 13. Contact Us */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
        <p>
          For questions, concerns, or to exercise your rights, contact: <br />
          <strong>Email:</strong> support@cryptomaty.com <br />
          <strong>Data Protection Officer:</strong> support@cryptomaty.com
        </p>
      </div>
    </div>
  );
}
