import { CalendarIcon, UserIcon, BarChartIcon, MailIcon, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const features = [
  {
    icon: <UserIcon className="h-8 w-8 text-cvk-purple" />,
    title: "Contact Management",
    description: "Effortlessly organize and manage your contacts with our intuitive interface."
  },
  {
    icon: <MailIcon className="h-8 w-8 text-cvk-blue" />,
    title: "Email Integration",
    description: "Seamlessly integrate with your email for smarter communication tracking."
  },
  {
    icon: <CalendarIcon className="h-8 w-8 text-cvk-green" />,
    title: "Meeting Scheduler",
    description: "Schedule meetings with clients directly from their contact record."
  },
  {
    icon: <BarChartIcon className="h-8 w-8 text-cvk-darkpurple" />,
    title: "Sales Analytics",
    description: "Gain powerful insights into your sales pipeline with advanced analytics."
  }
];

const EmailIntegrationModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative glass-card">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cvk-purple text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2 text-cvk-darkpurple">Email Integration</h2>
        <p className="text-gray-600 mb-4">
          Integrate with SMTP, Gmail, SendGrid, Amazon SES and more.<br />
          <span className="text-cvk-purple font-medium">Connect your email to automate workflows and boost productivity!</span>
        </p>
        <ul className="space-y-2 mb-4">
          <li>✅ Easy setup with major providers</li>
          <li>✅ Real-time sync</li>
          <li>✅ Secure & reliable</li>
        </ul>
        <button
          className="w-full bg-gradient-to-r from-cvk-purple via-cvk-blue to-cvk-darkpurple text-white py-2 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          Start Integration
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  const navigate = useNavigate();
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage relationships</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our feature-rich platform streamlines customer management, automates routine tasks, and provides actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-3 bg-gray-50 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              {feature.title === "Meeting Scheduler" && (
                <button
                  className="bg-cvk-purple text-white px-4 py-2 rounded font-bold"
                  onClick={() => navigate("/meeting-scheduler")}
                >
                  Open Scheduler
                </button>
              )}
              {feature.title === "Sales Analytics" && (
                <button
                  className="bg-cvk-purple text-white px-4 py-2 rounded font-bold"
                  onClick={() => navigate("/sales-analytics")}
                >
                  View Analytics
                </button>
              )}
              {feature.title === "Contact Management" && (
                <button
                  className="bg-cvk-purple text-white px-4 py-2 rounded font-bold"
                  onClick={() => navigate("/contact-management")}
                >
                  Contact Us
                </button>
              )}
              {feature.title === "Email Integration" && (
                <button
                  className="bg-white border border-cvk-blue text-cvk-blue hover:bg-cvk-blue hover:text-white font-semibold shadow-sm rounded-full px-4 py-2 transition mb-2"
                  onClick={() => navigate("/email-integration")}
                >
                  See Email Integration
                </button>
              )}
            </div>
          ))}
        </div>
        <EmailIntegrationModal open={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
        
        <div className="mt-16 rounded-2xl p-1" style={{ background: "linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)", boxShadow: "0 4px 24px 0 rgba(66,133,244,0.08)" }}>
          <div className="bg-white rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#202124" }}>Built for modern teams</h3>
              <p className="text-gray-600 mb-6" style={{ fontSize: 17 }}>
                Our platform adapts to how your team works, not the other way around.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Easy to customize", color: "#4285F4" },
                  { text: "No code automation", color: "#34A853" },
                  { text: "Team collaboration", color: "#FBBC05" },
                  { text: "Robust security", color: "#EA4335" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3">
                      <CheckCircle size={22} style={{ color: item.color, background: item.color+"22", borderRadius: "50%", padding: 2 }} />
                    </span>
                    <span style={{ fontWeight: 500, color: "#444" }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 relative min-h-[400px] flex items-center justify-center">
              <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 rounded-full bg-[#a1c4fd]/30 blur-3xl flex items-center justify-center">
                <svg className="animate-pulse" width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ opacity: 0.25 }}>
                  <circle cx="40" cy="40" r="38" stroke="#4285F4" strokeWidth="4" />
                  <polygon points="34,28 58,40 34,52" fill="#4285F4" />
                </svg>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-xl" style={{ minWidth: 440, maxWidth: 700 }}>
                <div className="h-14 bg-gray-50 flex items-center px-4 border-b border-blue-50 justify-between">
                  <div className="flex space-x-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="ml-4 flex items-center text-red-500 font-semibold text-sm">
                      <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor" className="mr-1"><path d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h-.1s-4.2 0-7.2.1c-.3 0-1.1.1-1.8.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.1 6.9.1s4.2 0 7.2-.1c.3 0 1.1-.1 1.8-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.8 15.1V8.9l6.4 3.1-6.4 3.1z"/></svg>
                      Watch Demo
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">CRM Video</span>
                </div>
                <div className="p-0 flex items-center justify-center bg-white" style={{ minHeight: '340px' }}>
                  <div className="w-full max-w-2xl aspect-video rounded-b-2xl overflow-hidden shadow-lg bg-white">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/sQD7kaZ5h0s?autoplay=1&mute=1&loop=1&playlist=sQD7kaZ5h0s"
                      title="CRM Features Explainer"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{ display: 'block', background: '#fff', borderRadius: '0 0 1rem 1rem' }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
