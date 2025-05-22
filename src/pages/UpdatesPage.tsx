import React from 'react';

const UpdatesPage = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Product Updates & Release Notes</h1>
    <p className="text-gray-700 mb-8 text-lg">
      Stay up to date with the latest features, improvements, and announcements for our CRM platform. We're always working to make your experience better!
    </p>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">March 2025: Enhanced Email Integration</h3>
          <p className="text-gray-600">Now connect Gmail and Outlook with one click, track email opens, and automate follow-ups directly from your CRM.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">February 2025: New Analytics Dashboard</h3>
          <p className="text-gray-600">Get deeper insights with customizable dashboards, advanced filters, and exportable reports.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">January 2025: Security Upgrades</h3>
          <p className="text-gray-600">Two-factor authentication, improved audit logs, and GDPR compliance tools are now available for all users.</p>
        </div>
      </div>
    </div>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">How to Get Updates</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Subscribe to our newsletter for release notes</li>
        <li>Check this page regularly for new features</li>
        <li>Follow us on social media for announcements</li>
      </ul>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Want updates in your inbox?</h3>
      <p className="text-gray-700 mb-4">Subscribe to our newsletter for the latest product news and tips.</p>
      <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cvk-purple mr-2" />
      <button className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors">Subscribe</button>
    </div>
  </div>
);

export default UpdatesPage; 