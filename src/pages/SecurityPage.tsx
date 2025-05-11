import React from 'react';
const SecurityPage = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6">Security & Compliance</h1>
    <p className="text-gray-700 mb-6">
      Your data security is our top priority. Our CRM is built with enterprise-grade security and compliance standards.
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-600">
      <li><b>Data Encryption:</b> All customer data is encrypted at rest and in transit using industry-standard protocols.</li>
      <li><b>Role-based Access:</b> Control who can view, edit, or delete data with advanced user permissions.</li>
      <li><b>Compliance:</b> GDPR, SOC2, and CCPA compliant to meet global privacy standards.</li>
      <li><b>Audit Logs:</b> Track every change and access event for full transparency.</li>
      <li><b>Single Sign-On (SSO):</b> Integrate with your identity provider for secure authentication.</li>
    </ul>
  </div>
);
export default SecurityPage; 