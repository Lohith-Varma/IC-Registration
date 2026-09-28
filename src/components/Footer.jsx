import './Footer.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Important Dates', href: '#dates' },
    { label: 'Submission', href: '#submission' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/school/nsrit-autonomous/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@nsrit1593?si=DazWk8YuFVYtjOn2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:ic.nsrit@nsrit.edu.in',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/' + href)
      return
    }

    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">IC</div>
              <div>
                <span className="footer__logo-name">NSRIT</span>
                <span className="footer__logo-sub">IC 2026</span>
              </div>
            </div>
            <p className="footer__tagline">
              Exploring the Future of Innovation. Hosted by NSRIT, Visakhapatnam — a premier destination for global academic excellence.
            </p>
            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-btn"
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference Info */}
          <div className="footer__col">
            <h4 className="footer__col-title">Conference Info</h4>
            <ul className="footer__info-list">
              <li>
                <span className="footer__info-icon">📅</span>
                <div>
                  <strong>Dates</strong>
                  <p>13-14 November 2026</p>
                </div>
              </li>
              <li>
                <span className="footer__info-icon">📍</span>
                <div>
                  <strong>Venue</strong>
                  <p>NSRIT, Visakhapatnam</p>
                </div>
              </li>
              <li>
                <span className="footer__info-icon">✉️</span>
                <div>
                  <strong>Contact</strong>
                  <p>ic.nsrit@nsrit.edu.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © 2026 International Conference on Novel Strategies in Research, Innovation and Technology · All Rights Reserved · Managed by <strong>NSRIT</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
