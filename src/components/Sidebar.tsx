import { NavLink } from "react-router-dom";
import { PieChart, Users, Briefcase, BarChart, Settings } from "lucide-react";

const Sidebar = () => (
  <aside className="h-full bg-white rounded-xl shadow p-6 w-64 flex flex-col">
    <div className="flex items-center mb-10">
      <PieChart className="text-cvk-purple mr-2" />
      <span className="font-bold text-xl">CVK CRM</span>
    </div>
    <nav className="flex flex-col gap-6">
      <NavLink to="/user" className={({isActive}) => isActive ? 'text-cvk-purple font-semibold flex items-center' : 'text-gray-700 flex items-center'}>
        <span className="mr-2"><BarChart /></span> Dashboard
      </NavLink>
      <NavLink to="/contacts" className={({isActive}) => isActive ? 'text-cvk-purple font-semibold flex items-center' : 'text-gray-700 flex items-center'}>
        <span className="mr-2"><Users /></span> Contacts
      </NavLink>
      <NavLink to="/deals" className={({isActive}) => isActive ? 'text-cvk-purple font-semibold flex items-center' : 'text-gray-700 flex items-center'}>
        <span className="mr-2"><Briefcase /></span> Deals
      </NavLink>
      <NavLink to="/reports" className={({isActive}) => isActive ? 'text-cvk-purple font-semibold flex items-center' : 'text-gray-700 flex items-center'}>
        <span className="mr-2"><BarChart /></span> Reports
      </NavLink>
      <NavLink to="/settings" className={({isActive}) => isActive ? 'text-cvk-purple font-semibold flex items-center' : 'text-gray-700 flex items-center'}>
        <span className="mr-2"><Settings /></span> Settings
      </NavLink>
    </nav>
  </aside>
);

export default Sidebar; 