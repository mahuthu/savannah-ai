import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import afroprompts1 from "../assets/afroprompts2.png";
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
    <nav className="sticky top-0 z-50 py-3 bg-black backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={afroprompts1} alt="Logo" />
            <span className="text-xl tracking-tight font-bold">
              <span className="bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
                Savannah
              </span>
              <span className="text-white"> AI</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <Link 
                  to={item.href}
                  className={`text-white hover:text-red-300 transition-colors ${
                    location.pathname === item.href ? 'text-red-300' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link 
              to="/signin" 
              className="py-2 px-3 border border-neutral-700 rounded-md text-white hover:border-red-300 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-300 py-2 px-3 rounded-md text-white hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-neutral-700/80">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <Link 
                    to={item.href}
                    className={`block text-white hover:text-red-300 transition-colors py-2 ${
                      location.pathname === item.href ? 'text-red-300' : ''
                    }`}
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              {/* Mobile Buttons */}
              <div className="space-y-2 pt-4 border-t border-neutral-700/80">
                <Link 
                  to="/signin"
                  className="block text-center py-2 px-3 border border-neutral-700 rounded-md text-white hover:border-red-300 transition-colors"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/contact"
                  className="block text-center bg-gradient-to-r from-red-500 to-orange-300 py-2 px-3 rounded-md text-white hover:opacity-90 transition-opacity"
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
