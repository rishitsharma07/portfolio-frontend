import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const getLinkClass = (path) => {
    return `nav-link ${location.pathname === path ? 'active' : ''}`
  }

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="nav-logo text-gradient">RS</Link>
        <div className="nav-links">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar