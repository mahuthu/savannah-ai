import "./Navbar.css"
const Navbar = () => {
  return (
    <div className = "nav">
        <div className = "nav_logo">Savannah AI</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Services</li>
            <li>Tools</li>
            <li>Team</li>
            <li className="nav-contact">Contacts</li>

        </ul>
    </div>
  )
}

export default Navbar