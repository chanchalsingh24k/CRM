import React from 'react';

const HelpCenterPage = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Help Center</h1>
    <p className="text-gray-700 mb-8 text-lg">
      Welcome to the Help Center! Find answers to common questions, explore how-to guides, and get the support you need to make the most of our CRM platform.
    </p>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Popular Topics</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Getting started with your CRM account</li>
        <li>Importing and managing contacts</li>
        <li>Setting up email and calendar integration</li>
        <li>Customizing your sales pipeline</li>
        <li>Automating tasks and workflows</li>
        <li>Understanding analytics and reports</li>
      </ul>
    </div>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Browse our step-by-step guides and FAQs</li>
        <li>Contact support for personalized help</li>
        <li>Join a live training session or webinar</li>
        <li>Submit a feature request or feedback</li>
      </ul>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Still need help?</h3>
      <p className="text-gray-700 mb-4">Contact our support team or search our knowledge base for instant answers.</p>
      <a href="mailto:support@yourcrm.com" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors">Contact Support</a>
    </div>
  </div>
);

export default HelpCenterPage; 