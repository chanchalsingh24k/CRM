import { useNavigate } from "react-router-dom";

const ContactManagement = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us About<br />Your CRM Software</h1>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to show you how you can get more traffic and leads, increase your sales productivity, provide better customer service, or all of the above! Here are a few ways to reach out to our sales team.
          </p>
        </div>
        <div>
          <img
            src="https://www.helloleads.io/blog/wp-content/uploads/2022/01/crm.png"
            alt="Contact"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl border p-8 flex flex-col items-center text-center shadow-sm">
          <svg width="48" height="48" fill="none" className="mb-4" style={{ color: '#a78bfa' }} viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <h3 className="font-bold text-lg mb-2">Call us directly</h3>
          <a href="tel:08914567896" className="text-2xl font-bold mb-2 text-black hover:text-cvk-purple transition-colors duration-200" style={{ textDecoration: 'none', letterSpacing: '1px' }}>08914567896</a>
        </div>
        <div className="bg-white rounded-xl border p-8 flex flex-col items-center text-center shadow-sm">
          <svg width="48" height="48" fill="none" className="mb-4" style={{ color: '#0ea5e9' }} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-4">Chat with our sales team</h3>
          <button className="bg-orange-500 text-white px-6 py-2 rounded font-bold mt-2" onClick={() => navigate("/sales")}>Chat with Sales</button>
        </div>
        <div className="bg-white rounded-xl border p-8 flex flex-col items-center text-center shadow-sm">
          <svg width="48" height="48" fill="none" className="mb-4" style={{ color: '#22c55e' }} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-4">Get a product demo</h3>
          <button className="bg-orange-500 text-white px-6 py-2 rounded font-bold mt-2" onClick={() => navigate("/get-demo")}>Get a demo</button>
        </div>
      </div>
    </div>
  );
};

export default ContactManagement; 