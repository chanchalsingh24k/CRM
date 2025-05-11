import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  UserCog, 
  Settings, 
  Building, 
  Home,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r shadow-sm`}>
          <div className="flex flex-col h-full">
            <div className="p-4 flex items-center justify-between border-b">
              <div className={`${!sidebarOpen && 'hidden'}`}>
                <Logo />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar} 
                className="ml-auto"
              >
                {sidebarOpen ? (
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                )}
              </Button>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <Link to="/admin">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Home className="mr-2" />
                  {sidebarOpen && <span>Dashboard</span>}
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Users className="mr-2" />
                  {sidebarOpen && <span>Users</span>}
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Building className="mr-2" />
                  {sidebarOpen && <span>Organizations</span>}
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <UserCog className="mr-2" />
                  {sidebarOpen && <span>Permissions</span>}
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Settings className="mr-2" />
                  {sidebarOpen && <span>Settings</span>}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white border-b py-4 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-cvk-darkpurple">Admin Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input className="pl-10 w-64" placeholder="Search..." />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-cvk-purple flex items-center justify-center text-white">
                    A
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          {/* Dashboard content */}
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">1,248</p>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">342</p>
                  <p className="text-sm text-green-600">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Support Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">27</p>
                  <p className="text-sm text-red-600">+3 new today</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Recent User Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>Acme Inc</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>jane.smith@example.com</TableCell>
                      <TableCell>TechCorp</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Robert Johnson</TableCell>
                      <TableCell>robert@example.com</TableCell>
                      <TableCell>CloudSoft</TableCell>
                      <TableCell>Employee</TableCell>
                      <TableCell><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Lisa Brown</TableCell>
                      <TableCell>lisa.brown@example.com</TableCell>
                      <TableCell>DataViz</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mark Wilson</TableCell>
                      <TableCell>mark@example.com</TableCell>
                      <TableCell>GlobalTech</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
