const deals = [
  { deal: "Acme Corp", contact: "Jane Doe", status: "Negotiation", value: "$12,000", close: "2024-06-30" },
  { deal: "Beta Inc", contact: "John Smith", status: "Proposal", value: "$8,500", close: "2024-07-10" },
  { deal: "Gamma LLC", contact: "Alice Lee", status: "Closed Won", value: "$15,200", close: "2024-06-15" },
  { deal: "Delta Co", contact: "Bob Brown", status: "Contacted", value: "$5,000", close: "2024-08-01" },
];

const Deals = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Deals</h2>
    <div className="bg-white border rounded-lg overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deal Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Close Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {deals.map((row, i) => (
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
);

export default Deals; 