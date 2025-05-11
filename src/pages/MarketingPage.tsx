import React from 'react';

const MarketingPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Marketing CRM Solutions</h1>
    <p className="text-gray-700 mb-6 text-lg">
      Drive growth with powerful marketing automation, campaign management, and analytics. Our CRM helps you attract, engage, and nurture leads across every channel, so you can turn prospects into loyal customers.
    </p>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Email marketing automation</li>
        <li>Multi-channel campaign management</li>
        <li>Lead segmentation and scoring</li>
        <li>Landing page and form builder</li>
        <li>Social media integration</li>
        <li>Marketing analytics and ROI tracking</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">How It Helps</h2>
      <p className="text-gray-600">
        - Automate repetitive marketing tasks and focus on strategy.<br />
        - Personalize campaigns for every segment.<br />
        - Track engagement and optimize for better results.<br />
        - Align sales and marketing for seamless handoffs.
      </p>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold mb-2">Ready to grow your audience?</h3>
      <p className="text-gray-700 mb-4">Start your free trial or schedule a demo with our marketing experts today.</p>
      <button className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors mr-2">Start Free Trial</button>
      <button className="border border-cvk-purple text-cvk-purple px-6 py-2 rounded font-bold hover:bg-cvk-purple/5 transition-colors">Schedule Demo</button>
    </div>
  </div>
);

export default MarketingPage; 