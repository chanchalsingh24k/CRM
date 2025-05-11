import React from 'react';

const PrivacyPolicyPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
    <p className="text-gray-700 mb-6">
      Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our CRM platform.
    </p>
    <h2 className="text-2xl font-bold mb-2">What We Collect</h2>
    <ul className="list-disc pl-6 mb-6 text-gray-600">
      <li>Personal information (name, email, phone)</li>
      <li>Usage data and analytics</li>
      <li>Cookies and tracking technologies</li>
    </ul>
    <h2 className="text-2xl font-bold mb-2">How We Use Your Data</h2>
    <ul className="list-disc pl-6 mb-6 text-gray-600">
      <li>To provide and improve our services</li>
      <li>To communicate with you</li>
      <li>To ensure security and compliance</li>
    </ul>
    <p className="text-gray-600">
      For more details, please contact <a href="mailto:privacy@cvkcrm.com" className="text-cvk-purple underline">privacy@cvkcrm.com</a>.
    </p>
  </div>
);

export default PrivacyPolicyPage; 