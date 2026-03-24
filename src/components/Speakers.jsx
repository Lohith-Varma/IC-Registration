import './Speakers.css'

const speakers = [
  {
    name: 'Speaker 1',
    // affiliation: 'MIT, USA',
    // topic: 'Quantum Computing',
    // topicTag: 'Quantum Tech',
    initials: 'S 1',
    color: '#00d4ff',
    bg: 'linear-gradient(135deg, #0d2b40 0%, #0a0620 100%)',
  },
  {
    name: 'Speaker 2',
    // affiliation: 'IIT Bombay, India',
    // topic: 'Sustainable Energy',
    // topicTag: 'Green Tech',
    initials: 'S 2',
    color: '#a855f7',
    bg: 'linear-gradient(135deg, #1a0d35 0%, #0a0620 100%)',
  },
  {
    name: 'Speaker 3',
    // affiliation: 'Google AI, USA',
    // topic: 'Ethical Machine Learning',
    // topicTag: 'AI / Ethics',
    initials: 'S 3',
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #1a1040 0%, #0a0620 100%)',
  },
  {
    name: 'Spreaker 4',
    // affiliation: 'Tsinghua University',
    // topic: 'Neural Architecture',
    // topicTag: 'Deep Learning',
    initials: 'S 4',
    color: '#06b6d4',
    bg: 'linear-gradient(135deg, #082535 0%, #0a0620 100%)',
  },
]

const Speakers = () => {
  return (
    <section className="speakers section" id="speakers">
      <div className="speakers__orb speakers__orb--1"></div>
      <div className="speakers__orb speakers__orb--2"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Keynote Speakers</div>
          <h2 className="section-title">Distinguished Speakers</h2>
          <p className="section-subtitle">
            Thought leaders and innovators from the world's top institutions and companies.
          </p>
        </div>

        <div className="speakers__grid">
          {speakers.map((sp, idx) => (
            <div className="speaker-card" key={idx} style={{ '--sp-color': sp.color }}>
              {/* Avatar */}
              <div className="speaker-card__avatar-wrap">
                <div className="speaker-card__avatar" style={{ background: sp.bg }}>
                  <span className="speaker-card__initials">{sp.initials}</span>
                  <div className="speaker-card__avatar-glow"></div>
                </div>
                <div className="speaker-card__topic-badge">{sp.topicTag}</div>
              </div>

              {/* Info */}
              <div className="speaker-card__info">
                <h3 className="speaker-card__name">{sp.name}</h3>
                <p className="speaker-card__affiliation">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 1.5L1 5l7 3.5L15 5 8 1.5z"/><path d="M1 5v5"/><path d="M5 6.5v4.5c0 1 1.343 2 3 2s3-1 3-2V6.5"/>
                  </svg>
                  {sp.affiliation}
                </p>
                <div className="speaker-card__divider"></div>
                {/* <p className="speaker-card__topic-label">Speaking on</p> */}
                <p className="speaker-card__topic">{sp.topic}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="speakers__more">
          <p>More speakers will be announced soon</p>
          <span className="speakers__more-dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Speakers
