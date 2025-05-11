import React from 'react';

const PartnersPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Partner With Us</h1>
    <p className="text-gray-700 mb-6 text-lg">
      Join our global partner network and help businesses succeed with powerful CRM solutions. We offer partnership opportunities for technology providers, consultants, and resellers.
    </p>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Partnership Types</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li><b>Solution Partner:</b> Implement and customize CRM for clients</li>
        <li><b>Technology Partner:</b> Integrate your app or service with our CRM</li>
        <li><b>Referral Partner:</b> Refer clients and earn rewards</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Why Partner With Us?</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Access to partner resources and training</li>
        <li>Co-marketing and lead sharing opportunities</li>
        <li>Dedicated partner support</li>
        <li>Early access to new features</li>
      </ul>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold mb-2">Become a Partner</h3>
      <p className="text-gray-700 mb-4">Ready to grow together? Contact our partnership team to get started.</p>
      <a href="mailto:partners@yourcrm.com" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors">Contact Us</a>
    </div>
  </div>
);

export default PartnersPage; 