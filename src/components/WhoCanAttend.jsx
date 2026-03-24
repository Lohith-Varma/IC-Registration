import './WhoCanAttend.css'

const attendees = [
  {
    icon: '🎓',
    title: 'Undergraduate & PG Students',
    desc: 'Present your research and connect with global academics shaping the future of technology.',
  },
  {
    icon: '📚',
    title: 'Academic Researchers & Faculty',
    desc: 'Publish your findings in indexed proceedings and collaborate with peers across disciplines.',
  },
  {
    icon: '💼',
    title: 'Industry Professionals',
    desc: 'Discover cutting-edge innovations, recruit top talent, and build strategic research partnerships.',
  },
]

const WhoCanAttend = () => {
  return (
    <section className="who-attend section" id="who">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Attendees</div>
          <h2 className="section-title">Who Can Attend?</h2>
          <p className="section-subtitle">
            NSRIT-IC 2026 welcomes participants from all backgrounds in academia, research, and industry.
          </p>
        </div>

        <div className="who-grid">
          {attendees.map((item, idx) => (
            <div className="who-card" key={idx}>
              <div className="who-card__check">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 10 8 14 16 6"/>
                </svg>
              </div>
              <div className="who-card__emoji">{item.icon}</div>
              <div className="who-card__body">
                <h3 className="who-card__title">{item.title}</h3>
                <p className="who-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="who-attend__cta">
          <p>Ready to be part of IC 2026?</p>
          <a href="#submission" className="btn btn-primary" onClick={(e) => {
            e.preventDefault()
            const el = document.querySelector('#submission')
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
          }}>
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhoCanAttend
