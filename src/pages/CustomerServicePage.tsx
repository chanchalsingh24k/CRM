import React from 'react';

const CustomerServicePage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Customer Service CRM Solutions</h1>
    <p className="text-gray-700 mb-6 text-lg">
      Deliver exceptional customer experiences with a unified helpdesk, omnichannel support, and automation. Our CRM empowers your team to resolve issues faster, track every interaction, and build lasting relationships.
    </p>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Omnichannel ticketing (email, chat, phone, social)</li>
        <li>Automated case routing and escalation</li>
        <li>Knowledge base and self-service portal</li>
        <li>Customer feedback and satisfaction surveys</li>
        <li>SLAs and performance analytics</li>
        <li>Collaboration tools for support teams</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">How It Helps</h2>
      <p className="text-gray-600">
        - Resolve customer issues faster with automation and AI.<br />
        - Provide consistent support across all channels.<br />
        - Empower customers with self-service options.<br />
        - Monitor team performance and improve satisfaction.
      </p>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold mb-2">Ready to delight your customers?</h3>
      <p className="text-gray-700 mb-4">Start your free trial or schedule a demo with our service experts today.</p>
      <button className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors mr-2">Start Free Trial</button>
      <button className="border border-cvk-purple text-cvk-purple px-6 py-2 rounded font-bold hover:bg-cvk-purple/5 transition-colors">Schedule Demo</button>
    </div>
  </div>
);

export default CustomerServicePage; 