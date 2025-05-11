import React from 'react';

const SupportPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">CRM Support & Help</h1>
    <p className="text-gray-700 mb-6 text-lg">
      Get the help you need, when you need it. Our support team is available 24/7 to assist you with onboarding, troubleshooting, and maximizing the value of your CRM investment.
    </p>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Support Options</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>24/7 live chat and email support</li>
        <li>Phone support for urgent issues</li>
        <li>Comprehensive help center and FAQs</li>
        <li>Personalized onboarding and training</li>
        <li>Community forums and peer support</li>
        <li>Dedicated account managers (Enterprise)</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">How We Help</h2>
      <p className="text-gray-600">
        - Fast response times and expert guidance.<br />
        - Step-by-step troubleshooting and solutions.<br />
        - Proactive tips to help you get the most from your CRM.<br />
        - Ongoing education and best practices.
      </p>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold mb-2">Need help right now?</h3>
      <p className="text-gray-700 mb-4">Contact our support team or browse our help center for instant answers.</p>
      <button className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors mr-2">Contact Support</button>
      <button className="border border-cvk-purple text-cvk-purple px-6 py-2 rounded font-bold hover:bg-cvk-purple/5 transition-colors">Visit Help Center</button>
    </div>
  </div>
);

export default SupportPage; 