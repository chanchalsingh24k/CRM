import React from 'react';
const PricingPage = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
    <p className="text-gray-700 mb-8">
      Choose a plan that fits your business. No hidden fees. Upgrade or downgrade anytime.
    </p>
    <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="font-bold text-lg mb-2">Free</h2>
        <div className="text-2xl font-bold mb-2">$0</div>
        <ul className="text-gray-600 text-sm mb-4 space-y-1">
          <li>Basic CRM features</li>
          <li>Email support</li>
          <li>Up to 3 users</li>
        </ul>
        <button className="bg-cvk-purple text-white px-4 py-2 rounded font-bold">Get Started</button>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center border-2 border-cvk-purple">
        <h2 className="font-bold text-lg mb-2">Starter</h2>
        <div className="text-2xl font-bold mb-2">$29<span className="text-base font-normal">/mo</span></div>
        <ul className="text-gray-600 text-sm mb-4 space-y-1">
          <li>All Free features</li>
          <li>Sales automation</li>
          <li>Custom fields</li>
          <li>Up to 10 users</li>
        </ul>
        <button className="bg-cvk-purple text-white px-4 py-2 rounded font-bold">Start Trial</button>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="font-bold text-lg mb-2">Professional</h2>
        <div className="text-2xl font-bold mb-2">$79<span className="text-base font-normal">/mo</span></div>
        <ul className="text-gray-600 text-sm mb-4 space-y-1">
          <li>All Starter features</li>
          <li>Advanced analytics</li>
          <li>Email integration</li>
          <li>Unlimited users</li>
        </ul>
        <button className="bg-cvk-purple text-white px-4 py-2 rounded font-bold">Start Trial</button>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="font-bold text-lg mb-2">Enterprise</h2>
        <div className="text-2xl font-bold mb-2">Custom</div>
        <ul className="text-gray-600 text-sm mb-4 space-y-1">
          <li>All Professional features</li>
          <li>Custom integrations</li>
          <li>Dedicated support</li>
          <li>Advanced security</li>
        </ul>
        <button className="bg-cvk-purple text-white px-4 py-2 rounded font-bold">Contact Sales</button>
      </div>
    </div>
  </div>
);
export default PricingPage; 