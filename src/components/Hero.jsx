import './Hero.css'

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      {/* Decorative orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      {/* Grid overlay */}
      <div className="hero__grid"></div>

      {/* Floating particles */}
      <div className="hero__particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }}></span>
        ))}
      </div>

      <div className="container hero__container">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          <span>Now Open for Registration</span>
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          International<br />
          <span className="hero__title-gradient">Tech Conference</span><br />
          2026
        </h1>

        <p className="hero__subtitle">
          Exploring the future of innovation at NSRIT. Connect with global experts,
          researchers, and industry pioneers shaping tomorrow.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdU1AmMhyAAZZFLbex2mYCyQ_GMEMLTv-IbObamrGXTC5alnQ/viewform?usp=dialog" className="btn btn-primary hero__btn-primary" target="_blank" rel="noreferrer">
            <span>Register Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#about" className="btn btn-outline" onClick={(e) => handleScroll(e, '#about')}>
            Learn More
          </a>
        </div>

        {/* Info Cards */}
        <div className="hero__cards">
          <div className="hero__card">
            <div className="hero__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <span className="hero__card-label">Location</span>
              <p className="hero__card-value">NSRIT, Visakhapatnam</p>
            </div>
          </div>

          <div className="hero__card-divider"></div>

          <div className="hero__card">
            <div className="hero__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <span className="hero__card-label">Date</span>
              <p className="hero__card-value">29–30 May 2026</p>
            </div>
          </div>

          <div className="hero__card-divider"></div>

          <div className="hero__card">
            <div className="hero__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div>
              <span className="hero__card-label">Attendees</span>
              <p className="hero__card-value">500+ Experts</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">40+</span>
            <span className="hero__stat-label">Countries</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">12</span>
            <span className="hero__stat-label">Keynote Speakers</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">80+</span>
            <span className="hero__stat-label">Research Papers</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">6</span>
            <span className="hero__stat-label">Workshops</span>
          </div>
        </div> */}
      </div>

      {/* Scroll indicator */}
      {/* <div className="hero__scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div> */}
    </section>
  )
}

export default Hero
