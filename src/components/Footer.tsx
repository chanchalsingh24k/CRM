import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-600 mb-6">
              Modern CRM software built for customer-centric businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-cvk-purple hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03c0 .352.04.695.116 1.022C7.728 9.89 4.1 8.1 1.67 5.149a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.002 3.732a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.052-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.22 9.22 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.698z"/></svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-cvk-purple hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75 4.75 4.75 0 0 0-4.75-4.75zm6.25 1.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-cvk-purple hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-cvk-purple hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-600 hover:text-cvk-purple">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-cvk-purple">Pricing</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-cvk-purple">Security</Link></li>
              <li><Link to="/updates" className="text-gray-600 hover:text-cvk-purple">Updates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/sales" className="text-gray-600 hover:text-cvk-purple">Sales</Link></li>
              <li><Link to="/marketing" className="text-gray-600 hover:text-cvk-purple">Marketing</Link></li>
              <li><Link to="/customer-service" className="text-gray-600 hover:text-cvk-purple">Customer Service</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-cvk-purple">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-cvk-purple">Blog</Link></li>
              <li><Link to="/documentation" className="text-gray-600 hover:text-cvk-purple">Documentation</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-cvk-purple">Community</Link></li>
              <li><Link to="/help-center" className="text-gray-600 hover:text-cvk-purple">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-cvk-purple">About</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-cvk-purple">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-cvk-purple">Partners</Link></li>
              <li><Link to="/contact-us" className="text-gray-600 hover:text-cvk-purple">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 CVK CRM. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-cvk-purple">Privacy Policy</a>
            <a href="#" className="hover:text-cvk-purple">Terms of Service</a>
            <a href="#" className="hover:text-cvk-purple">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
