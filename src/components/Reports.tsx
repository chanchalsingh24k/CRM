import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const chartData = [
  { name: "Jan", deals: 30 },
  { name: "Feb", deals: 45 },
  { name: "Mar", deals: 60 },
  { name: "Apr", deals: 50 },
  { name: "May", deals: 80 },
  { name: "Jun", deals: 70 },
];

const Reports = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Reports</h2>
    <div className="bg-white border rounded-lg p-6 mb-8">
      <div className="font-semibold text-gray-700 mb-4">Deals Over Time</div>
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-cvk-purple/10 rounded-lg p-4">
        <div className="text-xs text-gray-500 mb-1">Total Deals</div>
        <div className="text-2xl font-bold text-cvk-purple mb-1">68</div>
      </div>
      <div className="bg-cvk-blue/10 rounded-lg p-4">
        <div className="text-xs text-gray-500 mb-1">Revenue</div>
        <div className="text-2xl font-bold text-cvk-blue mb-1">$24.5k</div>
      </div>
      <div className="bg-green-100 rounded-lg p-4">
        <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
        <div className="text-2xl font-bold text-green-500 mb-1">42%</div>
      </div>
    </div>
  </div>
);

export default Reports; 