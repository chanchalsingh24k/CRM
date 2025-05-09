import React from "react";

const MailDetails = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
    <img
      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
      alt="Mail Integration Details"
      className="rounded-xl shadow-lg mb-6 w-full max-w-md object-cover"
    />
    <h2 className="text-2xl font-bold mb-2">Mail Integration Details</h2>
    <p className="text-gray-700 text-center max-w-lg">Integrate your email provider (like Gmail or Outlook) with CRM to automatically log emails, sync contacts, and streamline your communication workflow.</p>
  </div>
);

export default MailDetails; 