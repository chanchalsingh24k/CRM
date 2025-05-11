import React from 'react';

const DocumentationPage = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">CRM Documentation</h1>
    <p className="text-gray-700 mb-8 text-lg">
      Access comprehensive guides, API documentation, and best practices to help you get the most out of our CRM platform.
    </p>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Account setup and onboarding</li>
        <li>Importing your data</li>
        <li>Customizing your dashboard</li>
        <li>Integrating with email and calendar</li>
        <li>Setting up user roles and permissions</li>
      </ul>
    </div>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">API & Integrations</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>API authentication and usage</li>
        <li>Webhooks and event triggers</li>
        <li>Connecting to third-party apps</li>
        <li>Sample API requests and responses</li>
        <li>Developer best practices</li>
      </ul>
    </div>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>How-to guides and tutorials</li>
        <li>FAQs and troubleshooting</li>
        <li>Release notes and changelogs</li>
        <li>Community-contributed solutions</li>
      </ul>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Need Developer Support?</h3>
      <p className="text-gray-700 mb-4">Contact our technical support team or join our developer community for help.</p>
      <a href="mailto:devsupport@yourcrm.com" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors">Contact Dev Support</a>
    </div>
  </div>
);

export default DocumentationPage; 