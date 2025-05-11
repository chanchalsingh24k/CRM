import React from 'react';
const FeaturesPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6">All-in-one CRM Features</h1>
    <p className="text-gray-700 mb-6">
      Our CRM platform offers everything you need to manage customer relationships, automate workflows, and grow your business.
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-600">
      <li><b>Contact Management:</b> Organize and track every customer interaction in one place.</li>
      <li><b>Email Integration:</b> Connect your inbox and track conversations automatically.</li>
      <li><b>Sales Automation:</b> Automate repetitive tasks and focus on closing deals.</li>
      <li><b>Analytics & Reporting:</b> Get real-time insights into your pipeline and team performance.</li>
      <li><b>Custom Workflows:</b> Tailor the CRM to fit your unique business processes.</li>
    </ul>
  </div>
);
export default FeaturesPage; 