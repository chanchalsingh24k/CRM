const MeetingScheduler = () => (
  <div className="p-8 max-w-xl">
    <h2 className="text-2xl font-bold mb-6">Meeting Scheduler</h2>
    <p>Here you can schedule meetings with clients directly from their contact record.</p>
    <form className="mt-6 space-y-4 bg-white border rounded-lg p-6">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Client Name</label>
        <input className="w-full border rounded px-4 py-2" type="text" placeholder="Client Name" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Date & Time</label>
        <input className="w-full border rounded px-4 py-2" type="datetime-local" />
      </div>
      <button type="submit" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold">Schedule Meeting</button>
    </form>
  </div>
);

export default MeetingScheduler; 