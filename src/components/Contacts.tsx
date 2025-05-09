const Contacts = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <h1 className="text-4xl font-bold mb-10 text-center">Vtiger office locations</h1>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-white rounded-xl shadow p-8 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">India</h2>
        <p>No. 18, 20th Main 2nd Block,<br />Rajaji Nagar, Bangalore - 560010</p>
      </div>
      <div className="bg-white rounded-xl shadow p-8 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">United States</h2>
        <p>801 Barton Springs Rd, Austin, TX 78704<br />22028 Lindy Lane, Cupertino, CA 95014</p>
      </div>
    </div>
  </div>
);

export default Contacts; 