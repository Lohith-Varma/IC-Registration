import './WhyAttend.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Academia Industry Connects',
    desc: 'Gain exclusive insights from keynote speakers representing top universities, tech giants, and research labs worldwide.',
    color: '#00d4ff',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Hands-on Workshops',
    desc: 'Participate in immersive, practical workshops on AI, Quantum Computing, Ethical ML, and Sustainable Tech applications.',
    color: '#a855f7',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    title: 'Research Publication',
    desc: 'All registered papers will be featured in Scopus-indexed proceedings, giving your research international visibility and reach.',
    color: '#7c3aed',
  },
]

const WhyAttend = () => {
  return (
    <section className="why-attend section" id="details">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Why Attend</div>
          <h2 className="section-title">What You'll Gain</h2>
          <p className="section-subtitle">
            NSRIT-IC 2026 delivers a unique blend of academic depth and industry-facing opportunities.
          </p>
        </div>

        <div className="why-attend__grid">
          {features.map((f, idx) => (
            <div className="why-card" key={idx} style={{ '--card-color': f.color }}>
              <div className="why-card__glow"></div>
              <div className="why-card__icon">
                {f.icon}
              </div>
              <h3 className="why-card__title">{f.title}</h3>
              <p className="why-card__desc">{f.desc}</p>
              <div className="why-card__number">0{idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAttend
