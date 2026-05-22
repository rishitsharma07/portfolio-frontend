import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const navStyle = {
    background: 'var(--bg-nav)',
    borderBottom: '1px solid var(--border)',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }

  const logoStyle = {
    color: 'var(--gold)',
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '2px',
  }

  const linksStyle = {
    display: 'flex',
    gap: '2rem',
  }

  const linkStyle = (path) => ({
    color: location.pathname === path ? 'var(--gold)' : 'var(--text-muted)',
    fontWeight: location.pathname === path ? '600' : '400',
    fontSize: '0.95rem',
    transition: 'color 0.2s',
  })

  return (
    <nav style={navStyle}>
      <span style={logoStyle}> </span>
      <div style={linksStyle}>
        <Link to="/" style={linkStyle('/')}>Home</Link>
        <Link to="/projects" style={linkStyle('/projects')}>Projects</Link>
        <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar