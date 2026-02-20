"use client";

import React from "react";

import H1 from "../../components/shared/H1";
import P from "../../components/shared/P";

export default function Page() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 max-w-3xl mx-auto text-gray-800">
        <H1>Privacy Policy</H1>

        <P>
          At <strong>SilverSpoon</strong>, we respect your privacy and are
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, and safeguard your
          data when you use our website and services.
        </P>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-6">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you interact with our website
          or services. We may also collect non-personal information like browser
          type, IP address, and usage patterns.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-6">The information we collect is used to:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Provide and improve our services</li>
          <li>Process transactions securely</li>
          <li>Send important updates and promotional offers</li>
          <li>Respond to customer support requests</li>
          <li>Ensure website functionality and security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
        <p className="mb-6">
          Our website uses cookies to enhance your browsing experience. Cookies
          help us understand user preferences and improve website performance.
          You can choose to disable cookies in your browser settings, but some
          features may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Third-Party Services
        </h2>
        <p className="mb-6">
          We may use third-party services (such as payment gateways and
          analytics providers) that collect and process your data under their
          own privacy policies. We recommend reviewing their policies for more
          details.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p className="mb-6">
          We take appropriate security measures to protect your personal
          information against unauthorized access, alteration, or disclosure.
          However, please note that no method of transmission over the internet
          is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p className="mb-6">
          You have the right to access, update, or delete your personal
          information. To exercise these rights, please contact us using the
          details below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Updates to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
        </p>
        <p className="font-semibold">
          SilverSpoon Support
          <br />
          Email: support@silverspoon.com
          <br />
          Phone: +91-XXXXXXXXXX
        </p>
      </section>
    </main>
  );
}
