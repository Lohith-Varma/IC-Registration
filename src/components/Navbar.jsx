import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Details', href: '#details' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Committees', href: '/committees', isPage: true },
  ]

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setMenuOpen(false)
    
    if (link.isPage) {
      navigate(link.href)
      window.scrollTo(0, 0)
      return
    }

    if (location.pathname !== '/') {
      navigate('/' + link.href)
    } else {
      const target = document.querySelector(link.href)
      if (target) {
        const navHeight = 72
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  const solidNavbar = scrolled || location.pathname !== '/'

  return (
    <nav className={`navbar ${solidNavbar ? 'navbar--scrolled' : ''}`} aria-label="Primary navigation">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>
          <div className="navbar__logo-icon">
            <span>IC</span>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">NSRIT</span>
            <span className="navbar__logo-sub">IC 2026</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdU1AmMhyAAZZFLbex2mYCyQ_GMEMLTv-IbObamrGXTC5alnQ/viewform?usp=dialog"
            className="btn btn-primary navbar__cta"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.label}
          </a>
        ))}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdU1AmMhyAAZZFLbex2mYCyQ_GMEMLTv-IbObamrGXTC5alnQ/viewform?usp=dialog" className="btn btn-primary navbar__mobile-cta" target="_blank" rel="noreferrer">
          Register Now
        </a>
      </div>
    </nav>
  )
}

export default Navbar
