import React from "react";
import { Mail, Phone, Calendar, Headphones } from "lucide-react";

const ContactUsPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Left: Contact Form */}
      <form className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold mb-6">Looking for something?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name *</label>
            <input className="w-full border rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input className="w-full border rounded px-4 py-2" placeholder="+91" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input type="email" className="w-full border rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input className="w-full border rounded px-4 py-2" />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Subject *</label>
          <input className="w-full border rounded px-4 py-2" required placeholder="Use it in my company" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your company size *</label>
          <select className="w-full border rounded px-4 py-2" required>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-1000</option>
            <option>1000+</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Question *</label>
          <textarea className="w-full border rounded px-4 py-2" rows={4} required />
        </div>
        <button type="submit" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold mt-2">Send Message</button>
      </form>

      {/* Right: Direct Contacts & Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Direct Contacts</h2>
        <p className="text-gray-600 mb-4">Call or Schedule a video conference</p>
        <div className="flex items-center mb-2 text-gray-700">
          <Phone className="w-5 h-5 mr-2" /> +91 79 4050 0100
        </div>
        <div className="flex items-center mb-6 text-gray-700">
          <Mail className="w-5 h-5 mr-2" />
          <a href="https://wa.me/916357077743" className="underline text-cvk-purple" target="_blank" rel="noopener noreferrer">
            https://wa.me/916357077743
          </a>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-xl p-4 flex items-center">
            <Calendar className="w-8 h-8 text-cvk-purple mr-4" />
            <div>
              <div className="font-semibold">Meet an expert</div>
              <div className="text-gray-500 text-sm">To assess your project & get a tailored demo</div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 flex items-center">
            <Calendar className="w-8 h-8 text-cvk-purple mr-4" />
            <div>
              <div className="font-semibold">Become a partner</div>
              <div className="text-gray-500 text-sm">Appointment with a partner manager</div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 flex items-center">
            <Calendar className="w-8 h-8 text-cvk-purple mr-4" />
            <div>
              <div className="font-semibold">Request Custom Developments</div>
              <div className="text-gray-500 text-sm">Need to get in touch with developers?</div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 flex items-center">
            <Headphones className="w-8 h-8 text-cvk-purple mr-4" />
            <div>
              <div className="font-semibold">Support Requests</div>
              <div className="text-gray-500 text-sm">Need help? A question?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUsPage; 