import React from "react";
import { useParams } from "react-router-dom";

const jobData = {
  "frontend-developer": {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full Time",
    description: "Work with React, TypeScript, and modern UI frameworks to build beautiful CRM experiences.",
    requirements: [
      "2+ years experience with React",
      "Strong CSS/JS skills",
      "Experience with REST APIs",
      "Good communication skills"
    ]
  },
  "backend-developer": {
    title: "Backend Developer",
    location: "Remote / India",
    type: "Full Time",
    description: "Design scalable APIs and work with Node.js, Express, and cloud platforms.",
    requirements: [
      "2+ years experience with Node.js",
      "Familiarity with cloud platforms",
      "Database design experience",
      "REST API development"
    ]
  },
  "customer-success-manager": {
    title: "Customer Success Manager",
    location: "Remote / India",
    type: "Full Time",
    description: "Help our customers succeed and ensure they get the most out of our CRM.",
    requirements: [
      "Excellent communication skills",
      "Experience in customer-facing roles",
      "CRM knowledge is a plus"
    ]
  }
};

export default function JobDetailsPage() {
  const { jobId } = useParams();

  const job = jobData[jobId];

  if (!job) {
    return <div style={{ padding: 40, textAlign: "center" }}>Job not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-4">{job.location}</span>
          <span>{job.type}</span>
        </div>
        <p className="mb-6 text-gray-700">{job.description}</p>
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
        <button className="bg-cvk-purple text-white px-6 py-2 rounded font-bold hover:bg-cvk-darkpurple transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}
