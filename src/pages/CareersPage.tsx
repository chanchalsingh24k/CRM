import React from "react";
import { useNavigate } from "react-router-dom";

export default function CareersPage() {
  const navigate = useNavigate();

  const jobs = [
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full Time",
      description: "Work with React, TypeScript, and modern UI frameworks to build beautiful CRM experiences.",
    },
    {
      id: "backend-developer",
      title: "Backend Developer",
      location: "Remote / India",
      type: "Full Time",
      description: "Design scalable APIs and work with Node.js, Express, and cloud platforms.",
    },
    {
      id: "customer-success-manager",
      title: "Customer Success Manager",
      location: "Remote / India",
      type: "Full Time",
      description: "Help our customers succeed and ensure they get the most out of our CRM.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Careers at CVK CRM</h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Join a passionate team building the future of customer relationships. Explore our open positions below!
        </p>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-4">{job.location}</span>
                <span>{job.type}</span>
              </div>
              <p className="mb-4 text-gray-700">{job.description}</p>
              <button
                className="bg-cvk-purple text-white px-4 py-2 rounded font-bold hover:bg-cvk-darkpurple transition-colors"
                onClick={() => navigate(`/careers/${job.id}`)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 