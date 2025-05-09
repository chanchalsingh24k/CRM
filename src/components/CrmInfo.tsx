import React from "react";
import { useNavigate } from "react-router-dom";

const CrmInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
        alt="CRM Dashboard"
        className="rounded-xl shadow-lg mb-6 w-full max-w-md object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">CRM at a Glance</h2>
      <p className="text-gray-700 text-center max-w-lg mb-6">A CRM (Customer Relationship Management) system helps you manage contacts, sales, productivity, and more—all in one place.</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={() => navigate("/email-integration")}>Email Integration</button>
    </div>
  );
};

export default CrmInfo; 