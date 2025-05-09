
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleTryForFreeClick = () => {
    navigate('/try-for-free');
  };

  return (
    <header className="py-4 border-b sticky top-0 bg-white/90 backdrop-blur-md z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-cvk-purple transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-cvk-purple transition-colors">Pricing</a>
            <a href="#demo" className="text-gray-700 hover:text-cvk-purple transition-colors">Demo</a>
            <a href="#testimonials" className="text-gray-700 hover:text-cvk-purple transition-colors">Testimonials</a>
            <Link to="/about" className="text-gray-700 hover:text-cvk-purple transition-colors">About</Link>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="border-cvk-purple text-cvk-purple hover:bg-cvk-purple hover:text-white"
                onClick={handleLoginClick}
              >
                Log in
              </Button>
              <Button 
                className="bg-cvk-purple hover:bg-cvk-darkpurple"
                onClick={handleTryForFreeClick}
              >
                Try for free
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-cvk-purple transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-cvk-purple transition-colors">Pricing</a>
            <a href="#demo" className="text-gray-700 hover:text-cvk-purple transition-colors">Demo</a>
            <a href="#testimonials" className="text-gray-700 hover:text-cvk-purple transition-colors">Testimonials</a>
            <Link to="/about" className="text-gray-700 hover:text-cvk-purple transition-colors">About</Link>
            <div className="flex flex-col space-y-3 pt-3">
              <Button 
                variant="outline" 
                className="border-cvk-purple text-cvk-purple hover:bg-cvk-purple hover:text-white w-full"
                onClick={handleLoginClick}
              >
                Log in
              </Button>
              <Button 
                className="bg-cvk-purple hover:bg-cvk-darkpurple w-full"
                onClick={handleTryForFreeClick}
              >
                Try for free
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
