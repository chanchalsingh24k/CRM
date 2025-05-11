import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Logo from "@/components/Logo";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showDashboardOptions, setShowDashboardOptions] = useState(false);
  const [selectedRole, setSelectedRole] = useState("customer");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally handle authentication
    console.log("Form submitted with role:", selectedRole);
    
    // Navigate based on selected role
    if (selectedRole === "admin") {
      navigate("/admin");
    } else if (selectedRole === "employee") {
      navigate("/employee");
    } else {
      navigate("/user"); // customer/user
    }
  };

  return (
    <div className="min-h-screen animated-gradient flex flex-col">
      <div className="container-custom py-4">
        <div className="flex justify-between">
          <Button 
            variant="ghost" 
            className="flex items-center text-gray-600 mb-6" 
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Button>
          <Link to="/about">
            <Button 
              variant="ghost" 
              className="text-gray-600 mb-6"
            >
              About
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="glass-card p-8 border border-gray-100 shadow-2xl">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-6">
                <div className="bg-white/80 border-4 border-cvk-lightpurple shadow-2xl flex items-center justify-center w-32 h-32 transition-transform duration-300 hover:scale-105 rounded-xl">
                  <Logo className="w-24 h-24 object-contain" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Login
              </h1>
              <p className="text-gray-600 mt-2">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              
              <div className="flex justify-end">
                <Button
                  variant="link"
                  className="text-cvk-purple p-0 h-auto font-medium"
                  type="button"
                >
                  Forgot password?
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>Select role for demo</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="admin" 
                      name="role" 
                      value="admin"
                      checked={selectedRole === "admin"}
                      onChange={() => setSelectedRole("admin")}
                      className="h-5 w-5 accent-cvk-purple focus:ring-2 focus:ring-cvk-blue transition-all duration-200"
                    />
                    <Label htmlFor="admin" className="font-normal">Admin</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="employee" 
                      name="role" 
                      value="employee"
                      checked={selectedRole === "employee"}
                      onChange={() => setSelectedRole("employee")}
                      className="h-5 w-5 accent-cvk-purple focus:ring-2 focus:ring-cvk-blue transition-all duration-200"
                    />
                    <Label htmlFor="employee" className="font-normal">Employee</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="customer" 
                      name="role" 
                      value="customer"
                      checked={selectedRole === "customer"}
                      onChange={() => setSelectedRole("customer")}
                      className="h-5 w-5 accent-cvk-purple focus:ring-2 focus:ring-cvk-blue transition-all duration-200"
                    />
                    <Label htmlFor="customer" className="font-normal">Customer</Label>
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cvk-purple via-cvk-blue to-cvk-darkpurple hover:from-cvk-darkpurple hover:to-cvk-purple transition-all duration-300 shadow-lg"
              >
                Login
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="text-cvk-purple p-0 h-auto font-medium"
                  onClick={() => navigate("/try-for-free")}
                  type="button"
                >
                  Sign up
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
