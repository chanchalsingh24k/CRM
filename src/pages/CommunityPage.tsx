import React from 'react';

const CommunityPage = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Community & User Forum</h1>
    <p className="text-gray-700 mb-8 text-lg">
      Connect, share, and grow with other CRM users. Our community is a place to ask questions, share best practices, and learn from peers and experts.
    </p>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">What You’ll Find</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Discussion forums for sales, marketing, and support topics</li>
        <li>Product tips, tricks, and how-tos</li>
        <li>Feature requests and feedback</li>
        <li>Customer success stories</li>
        <li>Events, webinars, and meetups</li>
      </ul>
    </div>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Ask questions and get answers from the community</li>
        <li>Share your own CRM tips and workflows</li>
        <li>Connect with other users in your industry</li>
        <li>Participate in community events and challenges</li>
      </ul>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Join the Conversation</h3>
      <p className="text-gray-700 mb-4">Sign up for our community forum and start connecting today!</p>
      <a href="mailto:community@yourcrm.com" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors">Join Community</a>
    </div>
  </div>
);

export default CommunityPage;
