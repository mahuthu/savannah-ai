import { Menu, X } from "lucide-react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import afroprompts1 from "../assets/afroprompts2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

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
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={afroprompts1} alt="Logo" />
            <span className="text-xl tracking-tight text-red-200 font-bold">Savannah AI</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button onClick={() => toggleDropdown(index)} className="text-white">
                  {item.label}
                </button>
                {dropdownOpen === index && (
                  <ul className="absolute top-full left-0 z-10 bg-white shadow-lg rounded-md mt-2">
                    {item.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to={submenu.href}>
                          {submenu.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-red-700 to-red-900 py-2 px-3 rounded-md"
            >
              Contact Us
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
