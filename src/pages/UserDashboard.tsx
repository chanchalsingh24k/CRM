import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Home,
  Search,
  Building,
  User,
  Settings,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const UserDashboard = () => {
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
              <Link to="/user">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Home className="mr-2" />
                  {sidebarOpen && <span>Dashboard</span>}
                </Button>
              </Link>
              <Link to="/user">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Briefcase className="mr-2" />
                  {sidebarOpen && <span>Projects</span>}
                </Button>
              </Link>
              <Link to="/user">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <Building className="mr-2" />
                  {sidebarOpen && <span>Organization</span>}
                </Button>
              </Link>
              <Link to="/user">
                <Button variant="ghost" className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}>
                  <User className="mr-2" />
                  {sidebarOpen && <span>Profile</span>}
                </Button>
              </Link>
              <Link to="/user">
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
              <h1 className="text-2xl font-bold text-cvk-darkpurple">User Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input className="pl-10 w-64" placeholder="Search projects..." />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-cvk-purple flex items-center justify-center text-white">
                    U
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          {/* Dashboard content */}
          <main className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Welcome back, John!</h2>
              <div className="bg-gradient-to-r from-cvk-purple to-cvk-blue rounded-lg p-6 text-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Your Subscription</h3>
                    <p className="mb-4">You're currently on the <strong>Professional Plan</strong></p>
                    <p className="text-sm opacity-80">Next billing date: June 15, 2025</p>
                  </div>
                  <div className="flex md:justify-end items-center">
                    <Button className="bg-white text-cvk-purple hover:bg-gray-100">
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">7</p>
                  <p className="text-sm text-green-600">2 updated today</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Collaborators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-blue-600">across 3 projects</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Storage Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">42%</p>
                  <p className="text-sm text-gray-600">of 10GB limit</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center mr-3">
                          <Briefcase className="text-blue-600 h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Marketing Campaign</h3>
                          <p className="text-gray-500 text-sm">Updated 2 hours ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Open</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center mr-3">
                          <Briefcase className="text-purple-600 h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Website Redesign</h3>
                          <p className="text-gray-500 text-sm">Updated yesterday</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Open</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center mr-3">
                          <Briefcase className="text-green-600 h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Product Launch</h3>
                          <p className="text-gray-500 text-sm">Updated 3 days ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Open</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-auto py-6 flex flex-col items-center justify-center">
                      <Briefcase className="h-6 w-6 mb-2" />
                      <span>New Project</span>
                    </Button>
                    <Button className="h-auto py-6 flex flex-col items-center justify-center" variant="outline">
                      <User className="h-6 w-6 mb-2" />
                      <span>Invite User</span>
                    </Button>
                    <Button className="h-auto py-6 flex flex-col items-center justify-center" variant="outline">
                      <Building className="h-6 w-6 mb-2" />
                      <span>Org Settings</span>
                    </Button>
                    <Button className="h-auto py-6 flex flex-col items-center justify-center" variant="outline">
                      <Settings className="h-6 w-6 mb-2" />
                      <span>Preferences</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
