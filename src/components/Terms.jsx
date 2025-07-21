// pages/terms.jsx
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: April 5, 2025</p>

        {/* 1. Introduction */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          These Terms and Conditions ("Terms") govern your access and use of
          <strong> Cryptomaty</strong>, an algorithmic crypto trading platform
          and marketplace. By using our services, you agree to these Terms. If
          you do not agree, please refrain from using our platform.
        </p>

        {/* 2. Eligibility */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
        <p className="mb-4">
          You must be at least 18 years of age and capable of entering into a
          legally binding agreement under Indian law. You may be required to
          complete KYC verification in compliance with regulatory norms.
        </p>

        {/* 3. Account Responsibilities */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Account Responsibilities
        </h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your
          account credentials and activities conducted under your account.
          Promptly notify us of any unauthorized access or use of your account.
        </p>

        {/* 4. Use of Platform and Marketplace */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Use of Platform and Marketplace
        </h2>
        <p className="mb-4">
          Our platform offers algorithmic trading tools and a marketplace for
          strategies. You acknowledge that:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>All trading involves significant financial risk.</li>
          <li>
            You are solely responsible for evaluating and using any third-party
            strategies listed.
          </li>
          <li>We do not guarantee any profits or results.</li>
        </ul>

        {/* 5. Financial Obligations */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Financial Obligations</h2>
        <p className="mb-4">
          Usage of paid features or strategy subscriptions may incur fees as
          specified on our pricing page. Users are responsible for any
          applicable taxes (including 30% income tax and 1% TDS on crypto
          profits in India).
        </p>

        {/* 6. Intellectual Property */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, logos, and proprietary algorithms are
          protected by intellectual property laws. You may not reproduce,
          distribute, or create derivative works without explicit permission.
        </p>

        {/* 7. User Conduct */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. User Conduct</h2>
        <p className="mb-4">Users must not:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Engage in illegal activities such as money laundering or fraud.</li>
          <li>Reverse-engineer or exploit platform vulnerabilities.</li>
          <li>
            Misuse the strategy marketplace or engage in manipulation or
            plagiarism.
          </li>
        </ul>

        {/* 8. Third-Party Services */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          8. Third-Party Services
        </h2>
        <p className="mb-4">
          Our platform may integrate with third-party exchanges and APIs. We
          are not responsible for the availability, accuracy, or security of
          third-party services.
        </p>

        {/* 9. Disclaimer of Warranties */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          9. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          All services are provided on an "as is" and "as available" basis. We
          disclaim all warranties, express or implied, including merchantability,
          fitness for a particular purpose, and non-infringement.
        </p>

        {/* 10. Limitation of Liability */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          10. Limitation of Liability
        </h2>
        <p className="mb-4">
          Cryptomaty shall not be liable for any direct, indirect, incidental,
          or consequential damages arising from your use of our platform,
          including loss of profits, data, or trading capital.
        </p>

        {/* 11. Indemnification */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold Cryptomaty, its officers, employees,
          and partners harmless from any claims, damages, or liabilities
          resulting from your use of our platform or violation of these Terms.
        </p>

        {/* 12. Modifications */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. Users will be
          notified via email or on-platform notices. Continued use after
          changes constitutes acceptance of updated Terms.
        </p>

        {/* 13. Termination */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your account for violations of these
          Terms, suspicious activity, or legal obligations. You may also close
          your account at any time.
        </p>

        {/* 14. Governing Law and Jurisdiction */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          14. Governing Law and Jurisdiction
        </h2>
        <p className="mb-4">
          These Terms are governed by the laws of India. Any disputes will be
          subject to the exclusive jurisdiction of the courts in Mumbai,
          Maharashtra.
        </p>

        {/* 15. Contact Us */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contact Us</h2>
        <p>
          For any queries regarding these Terms, contact us at: <br />
          <strong>Email:</strong> support@cryptomaty.com
        </p>
      </div>
    </div>
  );
}
