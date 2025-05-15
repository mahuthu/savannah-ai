import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import afroprompts1 from "../assets/logo1.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="fixed top-0 z-50 py-3 w-full bg-white backdrop-blur-sm shadow-sm">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={afroprompts1} alt="Logo" />
            <span className="text-xl tracking-tight font-bold">
            
              <span className="text-xl font-bold bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text">
                Savannah AI
              </span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link 
                  to={item.href}
                  className={`text-[#1E4EEB] hover:text-[#1EACEB] transition-colors ${
                    location.pathname === item.href ? 'text-[#1EACEB]' : ''
                  }`}
                >
                  {item.label}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          
          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <Link 
              to="/login" 
              className="py-2 px-4 border border-[#e5e7eb] rounded-md text-[#1E4EEB] hover:border-[#1E4EEB]/20 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] py-2 px-4 rounded-md text-white hover:opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-[#1E4EEB]">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <Link 
                    to={item.href}
                    className={`block text-[#1E4EEB] hover:text-[#1EACEB] transition-colors py-2 ${
                      location.pathname === item.href ? 'text-[#1EACEB]' : ''
                    }`}
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              {/* Mobile Buttons */}
              <div className="space-y-3 pt-4 border-t border-[#e5e7eb]">
                <Link 
                  to="/signin"
                  className="block text-center py-2 px-3 border border-[#e5e7eb] rounded-md text-[#1E4EEB] hover:border-[#1E4EEB]/20 transition-colors"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/contact"
                  className="block text-center bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] py-2 px-3 rounded-md text-white hover:opacity-90 transition-opacity"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
