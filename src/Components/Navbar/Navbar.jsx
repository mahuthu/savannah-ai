import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav_logo">Savannah AI</div>
      
      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Services</li>
        <li>Datasets</li>
        <li>Pricing</li>
        <li className="nav-contact">Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;