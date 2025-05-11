import { useNavigate } from "react-router-dom";

const EmailIntegrationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe]">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 py-16">
        {/* Left Side */}
        <div className="flex-1 max-w-xl w-full mb-12 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-2 text-gray-900">Email Integration</h1>
          <h2 className="text-3xl font-bold mb-4 text-gray-700 opacity-80">to manage client emails effortlessly</h2>
          <p className="text-lg text-gray-600 mb-8">
            Integrate with Email sender gateways like SMTP, Gmail, SendGrid, and Amazon SES to sync data with platforms and send emails quickly and efficiently, helping sales teams to stay organized and increase customer engagement.
          </p>
          <div className="flex gap-4">
            <button
              className="px-8 py-3 rounded border border-gray-800 font-semibold bg-white hover:bg-gray-100 transition"
              onClick={() => navigate("/get-demo")}
            >
              Schedule a Demo
            </button>
            <button
              className="px-8 py-3 rounded bg-black text-white font-semibold hover:bg-gray-800 transition"
              onClick={() => navigate("/try-for-free")}
            >
              Signup
            </button>
          </div>
        </div>
        {/* Right Side (Animated Image) */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://assets.crm.io/static/images/ef/email-integration.png"
            alt="Email Integration Diagram"
            className="w-[380px] h-[380px] object-contain animate-fade-up"
            style={{ animation: 'fadeUp 1.2s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </div>
      </div>
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default EmailIntegrationPage;