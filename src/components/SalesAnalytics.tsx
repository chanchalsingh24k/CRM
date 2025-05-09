import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const chartData = [
  { name: "Jan", sales: 12000 },
  { name: "Feb", sales: 18500 },
  { name: "Mar", sales: 15000 },
  { name: "Apr", sales: 21000 },
  { name: "May", sales: 17000 },
  { name: "Jun", sales: 23000 },
];

const SalesAnalytics = () => (
  <div className="p-8 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">Sales Analytics</h2>
    <div className="bg-white border rounded-lg p-6 mb-8">
      <div className="font-semibold text-gray-700 mb-4">Sales Over Time</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#9b87f5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-cvk-purple/10 rounded-lg p-4">
        <div className="text-xs text-gray-500 mb-1">Total Sales</div>
        <div className="text-2xl font-bold text-cvk-purple mb-1">₹1,06,500</div>
      </div>
      <div className="bg-cvk-blue/10 rounded-lg p-4">
        <div className="text-xs text-gray-500 mb-1">Best Month</div>
        <div className="text-2xl font-bold text-cvk-blue mb-1">June</div>
      </div>
      <div className="bg-green-100 rounded-lg p-4">
        <div className="text-xs text-gray-500 mb-1">Avg. Monthly Sales</div>
        <div className="text-2xl font-bold text-green-500 mb-1">₹17,750</div>
      </div>
    </div>
  </div>
);

export default SalesAnalytics; 