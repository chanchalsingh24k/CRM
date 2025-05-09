import React from "react";
import { useNavigate } from "react-router-dom";

const EmailIntegration = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
        alt="Email Integration"
        className="rounded-xl shadow-lg mb-6 w-full max-w-md object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">Email Integration</h2>
      <p className="text-gray-700 text-center max-w-lg mb-6">Seamlessly connect your email with CRM to track conversations, automate follow-ups, and never miss an important message.</p>
      <button className="bg-green-600 text-white px-6 py-2 rounded" onClick={() => navigate("/mail-details")}>View Mail Integration Details</button>
    </div>
  );
};

export default EmailIntegration; 