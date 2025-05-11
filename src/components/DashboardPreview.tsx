import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { User, Bell, Settings, Users, Briefcase, PieChart, List, LogOut, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const chartData = [
  { name: "Jan", deals: 30 },
  { name: "Feb", deals: 45 },
  { name: "Mar", deals: 60 },
  { name: "Apr", deals: 50 },
  { name: "May", deals: 80 },
  { name: "Jun", deals: 70 },
];

const tableData = [
  { deal: "Acme Corp", contact: "Jane Doe", status: "Negotiation", value: "$12,000", close: "2024-06-30" },
  { deal: "Beta Inc", contact: "John Smith", status: "Proposal", value: "$8,500", close: "2024-07-10" },
  { deal: "Gamma LLC", contact: "Alice Lee", status: "Closed Won", value: "$15,200", close: "2024-06-15" },
  { deal: "Delta Co", contact: "Bob Brown", status: "Contacted", value: "$5,000", close: "2024-08-01" },
];

const DashboardPreview = () => {
  const navigate = useNavigate();
  return (
    <section id="demo" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beautiful interface, powerful features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how CVK CRM helps you manage contacts, track communications, and close deals faster.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cvk-purple/30 to-cvk-blue/30 blur-3xl opacity-30 rounded-3xl transform -rotate-1"></div>
          <div className="bg-white rounded-xl border shadow-xl overflow-hidden flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-48 bg-gray-50 border-r p-4 space-y-6">
              <div className="flex items-center space-x-2 mb-8">
                <PieChart className="text-cvk-purple" />
                <span className="font-bold text-lg">CVK CRM</span>
              </div>
              <nav className="flex-1 space-y-4">
                <Link to="/" className="flex items-center space-x-2 text-cvk-purple font-semibold"><List size={18}/> Dashboard</Link>
                <Link to="/contacts" className="flex items-center space-x-2 text-gray-700"><Users size={18}/> Contacts</Link>
                <Link to="/deals" className="flex items-center space-x-2 text-gray-700"><Briefcase size={18}/> Deals</Link>
                <Link to="/reports" className="flex items-center space-x-2 text-gray-700"><PieChart size={18}/> Reports</Link>
                <Link to="/settings" className="flex items-center space-x-2 text-gray-700"><Settings size={18}/> Settings</Link>
                <Link to="/payment-method" className="flex items-center space-x-2 text-gray-700"><CreditCard size={18}/> Payment Method</Link>
              </nav>
              <div
                className="flex items-center space-x-2 text-gray-400 cursor-pointer hover:text-cvk-purple"
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  navigate('/login');
                }}
              >
                <LogOut size={18}/> Logout
              </div>
            </aside>
            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6">
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="font-bold text-xl">Dashboard Overview</div>
                <div className="flex items-center space-x-4">
                  <Bell className="text-gray-400" />
                  <User className="text-cvk-purple" />
                </div>
              </div>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-cvk-purple/10 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Deals</div>
                  <div className="text-2xl font-bold text-cvk-purple mb-1">68</div>
                  <div className="text-xs text-gray-400">This month</div>
                </div>
                <div className="bg-cvk-blue/10 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Revenue</div>
                  <div className="text-2xl font-bold text-cvk-blue mb-1">$24.5k</div>
                  <div className="text-xs text-gray-400">This month</div>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
                  <div className="text-2xl font-bold text-green-500 mb-1">42%</div>
                  <div className="text-xs text-gray-400">This month</div>
                </div>
                <div className="bg-cvk-darkpurple/10 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Tasks</div>
                  <div className="text-2xl font-bold text-cvk-darkpurple mb-1">18</div>
                  <div className="text-xs text-gray-400">Open</div>
                </div>
              </div>
              {/* Chart and Progress */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-semibold text-gray-700">Deals Over Time</div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="deals" fill="#9b87f5" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="font-semibold text-gray-700 mb-4">Progress</div>
                  <svg width="120" height="120">
                    <circle cx="60" cy="60" r="50" stroke="#eee" strokeWidth="12" fill="none" />
                    <circle cx="60" cy="60" r="50" stroke="#9b87f5" strokeWidth="12" fill="none" strokeDasharray="314" strokeDashoffset="94" strokeLinecap="round" />
                  </svg>
                  <div className="text-2xl font-bold text-cvk-purple mt-4">70%</div>
                  <div className="text-xs text-gray-400">Goal Completion</div>
                </div>
              </div>
              {/* Data Table */}
              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                  <div className="font-semibold text-gray-700">Recent Deals</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Close Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {tableData.map((row, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap">{row.deal}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.contact}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.status}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.value}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.close}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* End Table */}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-cvk-purple hover:bg-cvk-darkpurple text-white"
            onClick={() => navigate("/get-demo")}
          >
            Schedule a live demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
