import React from 'react';

const TermsOfServicePage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
    <p className="text-gray-700 mb-6">
      Please read these terms carefully before using our CRM platform. By accessing or using our services, you agree to be bound by these terms.
    </p>
    <h2 className="text-2xl font-bold mb-2">User Responsibilities</h2>
    <ul className="list-disc pl-6 mb-6 text-gray-600">
      <li>Provide accurate information</li>
      <li>Use the platform in compliance with laws</li>
      <li>Respect intellectual property rights</li>
    </ul>
    <h2 className="text-2xl font-bold mb-2">Limitations</h2>
    <ul className="list-disc pl-6 mb-6 text-gray-600">
      <li>We are not liable for indirect damages</li>
      <li>Service may be updated or discontinued at any time</li>
    </ul>
    <p className="text-gray-600">
      For questions, contact <a href="mailto:support@cvkcrm.com" className="text-cvk-purple underline">support@cvkcrm.com</a>.
    </p>
  </div>
);

export default TermsOfServicePage; 