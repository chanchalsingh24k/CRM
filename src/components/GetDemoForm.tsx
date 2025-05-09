import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  employees: "",
  country: "",
};

const GetDemoForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
        <p className="mb-4">Your demo request has been received.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={() => setSubmitted(false)}>Next</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Complete the form for a free demo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">First Name*</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name*</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone number*</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Company name*</label>
            <input name="company" value={form.company} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Website URL*</label>
            <input name="website" value={form.website} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Employees*</label>
          <select name="employees" value={form.employees} onChange={handleChange} required className="w-full border rounded px-3 py-2">
            <option value="">Please Select</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-1000">201-1000</option>
            <option value=">1000">1000+</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Country of Company Headquarters*</label>
          <select name="country" value={form.country} onChange={handleChange} required className="w-full border rounded px-3 py-2">
            <option value="">Please Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          We're committed to your privacy. We use the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.
        </div>
        <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
};

export default GetDemoForm; 