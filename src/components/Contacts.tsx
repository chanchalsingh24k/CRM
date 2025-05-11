const Contacts = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <h1 className="text-4xl font-bold mb-10 text-center">CVK office locations</h1>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-white rounded-xl shadow p-8 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">India</h2>
        <p>No. 10, 13th  B Block,<br />Bandra, Mumbai - 400051</p>
      </div>
      <div className="bg-white rounded-xl shadow p-8 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">India</h2>
        <p>12, Block A,<br />Noida,Delhi - 249873</p>
      </div>
    </div>
  </div>
);

export default Contacts; 