import { useNavigate } from "react-router-dom";
import SalesAnalytics from "./components/SalesAnalytics";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <button
        type="button"
        className="bg-cvk-purple text-white px-4 py-2 rounded font-bold mb-4"
        onClick={() => navigate("/meeting-scheduler")}
      >
        Open Scheduler
      </button>
      <form className="bg-white border rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input className="w-full border rounded px-4 py-2" type="email" placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input className="w-full border rounded px-4 py-2" type="password" placeholder="New Password" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Notifications</label>
          <select className="w-full border rounded px-4 py-2">
            <option>Email</option>
            <option>SMS</option>
            <option>Push</option>
          </select>
        </div>
        <button type="submit" className="bg-cvk-purple text-white px-6 py-2 rounded font-bold">Save Changes</button>
      </form>
      <button
        type="button"
        style={{ background: "red", color: "white", marginTop: 20 }}
        onClick={() => alert("Button works!")}
      >
        Test Button
      </button>
    </div>
  );
};

export default Settings; 