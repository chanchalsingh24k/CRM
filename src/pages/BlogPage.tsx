import React from 'react';

const BlogPage = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">CRM Insights & Blog</h1>
    <p className="text-gray-700 mb-8 text-lg">
      Explore the latest trends, tips, and success stories in CRM, sales, marketing, and customer experience. Stay ahead with expert advice and actionable insights from industry leaders.
    </p>
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">5 CRM Strategies to Boost Sales in 2024</h3>
          <p className="text-gray-600 mb-2">Discover proven tactics to increase your sales pipeline and close more deals using modern CRM tools.</p>
          <span className="text-cvk-purple text-sm font-medium">Read More</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">How to Automate Your Marketing with CRM</h3>
          <p className="text-gray-600 mb-2">Learn how marketing automation can save you time and deliver personalized experiences at scale.</p>
          <span className="text-cvk-purple text-sm font-medium">Read More</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">Customer Service Best Practices for SaaS</h3>
          <p className="text-gray-600 mb-2">Tips from top SaaS companies on delivering world-class support and building customer loyalty.</p>
          <span className="text-cvk-purple text-sm font-medium">Read More</span>
        </div>
      </div>
    </div>
    <div className="bg-cvk-purple/5 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Want more insights?</h3>
      <p className="text-gray-700 mb-4">Subscribe to our newsletter for the latest articles, tips, and CRM news.</p>
      <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cvk-purple mr-2" />
      <button className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-purple/90 transition-colors">Subscribe</button>
    </div>
  </div>
);

export default BlogPage; 