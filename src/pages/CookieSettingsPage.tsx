import React from 'react';

const CookieSettingsPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Cookie Settings</h1>
    <p className="text-gray-700 mb-6">
      Manage your cookie preferences for our CRM platform. We use cookies to enhance your experience, analyze usage, and provide personalized content.
    </p>
    <h2 className="text-2xl font-bold mb-2">Cookie Preferences</h2>
    <ul className="list-disc pl-6 mb-6 text-gray-600">
      <li>Essential cookies (required for site functionality)</li>
      <li>Analytics cookies (help us improve the platform)</li>
      <li>Marketing cookies (personalized offers and ads)</li>
    </ul>
    <p className="text-gray-600">
      You can update your preferences at any time. For more information, contact <a href="mailto:privacy@cvkcrm.com" className="text-cvk-purple underline">privacy@cvkcrm.com</a>.
    </p>
  </div>
);

export default CookieSettingsPage; 