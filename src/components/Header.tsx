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
    <header className="py-4 border-b sticky top-0 bg-white/60 backdrop-blur-xl shadow-lg z-50 glass-navbar">
      <div className="container-custom flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mx-auto">
          <NavLinkItem href="#features" to={undefined} label="Features" mobile={false} />
          <NavLinkItem href="#pricing" to={undefined} label="Pricing" mobile={false} />
          <NavLinkItem href={undefined} to="/demo" label="Demo" mobile={false} />
          <NavLinkItem href={undefined} to="/testimonials" label="Testimonials" mobile={false} />
          <NavLinkItem href={undefined} to="/about" label="About" mobile={false} />
        </nav>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="border-cvk-purple text-cvk-purple hover:bg-cvk-purple hover:text-white transition-colors duration-200"
            onClick={handleLoginClick}
          >
            Log in
          </Button>
          <Button 
            className="bg-gradient-to-r from-cvk-purple to-cvk-blue text-white font-bold shadow-lg px-6 py-2 rounded-xl hover:scale-105 focus:scale-105 transition-transform duration-200 glow-btn"
            onClick={handleTryForFreeClick}
          >
            Try for free
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 ml-4"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4 px-4 pb-4">
          <NavLinkItem href="#features" to={undefined} label="Features" mobile={true} />
          <NavLinkItem href="#pricing" to={undefined} label="Pricing" mobile={true} />
          <NavLinkItem href={undefined} to="/demo" label="Demo" mobile={true} />
          <NavLinkItem href={undefined} to="/testimonials" label="Testimonials" mobile={true} />
          <NavLinkItem href={undefined} to="/about" label="About" mobile={true} />
          <div className="flex flex-col space-y-2 pt-4">
            <Button 
              variant="outline" 
              className="w-full border-cvk-purple text-cvk-purple hover:bg-cvk-purple hover:text-white"
              onClick={handleLoginClick}
            >
              Log in
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-cvk-purple to-cvk-blue text-white font-bold shadow-lg px-6 py-2 rounded-xl hover:scale-105 focus:scale-105 transition-transform duration-200 glow-btn"
              onClick={handleTryForFreeClick}
            >
              Try for free
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

// NavLinkItem component for animated underline and active state
function NavLinkItem({ href, to, label, mobile }) {
  const isActive = to && window.location.pathname === to;
  const base = `relative px-2 py-1 font-medium text-gray-700 transition-colors duration-200 ${isActive ? 'text-cvk-purple underline underline-offset-8' : ''}`;
  const hover = 'hover:text-cvk-purple hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-cvk-purple after:w-0';
  if (to) {
    return <Link to={to} className={`${base} ${hover} ${mobile ? 'block' : ''}`}>{label}</Link>;
  }
  return <a href={href} className={`${base} ${hover} ${mobile ? 'block' : ''}`}>{label}</a>;
}

export default Header;
