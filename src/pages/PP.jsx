import React from "react";

const PP = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white shadow-md mt-10 rounded-lg mb-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Privacy Policy
      </h1>

      <p className="mb-4 text-sm sm:text-base">
        Welcome to Naya_Aawa[Room Rental System]! We value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our
        website.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        We may collect the following information when you use our site:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
        <li>
          Personal identification information (Name, email address, phone
          number, address, etc.)
        </li>
        <li>Payment details and billing information</li>
        <li>Usage data such as browser type, IP address, and pages viewed</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        The information we collect may be used for:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
        <li>Providing and improving our services</li>
        <li>Processing transactions and payments</li>
        <li>Communicating with you (e.g., customer support, updates)</li>
        <li>Sending marketing and promotional materials</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        3. Data Protection
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        We implement various security measures to protect your personal
        information, including encryption, secure servers, and limited access to
        authorized personnel.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        4. Sharing Your Information
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        We do not sell, trade, or transfer your personal information to third
        parties, except for trusted partners who help operate our website and
        services, and who agree to keep your data confidential.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        5. Cookies
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        Our website uses cookies to enhance your experience, such as remembering
        your preferences and collecting analytics data. You can choose to
        disable cookies through your browser settings.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        6. Your Rights
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        You have the right to access, update, or delete your personal
        information. You may contact us at any time to request changes or
        inquire about your data.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
        7. Changes to this Policy
      </h2>
      <p className="mb-4 text-sm sm:text-base">
        We reserve the right to update this Privacy Policy. Any changes will be
        posted on this page, and you are encouraged to review it periodically.
      </p>

      <p className="mt-8 text-center text-sm sm:text-base">
        If you have any questions regarding this Privacy Policy, please contact
        us at{" "}
        <a
          href="mailto:support@roomrental.com"
          className="text-blue-500 hover:underline"
        >
          support@roomrental.com
        </a>
      </p>
    </div>
  );
};

export default PP;
