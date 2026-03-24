import './About.css'

const About = () => {
  const objectives = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        </svg>
      ),
      text: 'Provide a platform for researchers to share innovative ideas and groundbreaking research findings.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      text: 'Discuss the transformative impact of AI and Sustainable Tech on society and global industries.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      text: 'Facilitate meaningful networking between students, faculty, and global experts from industry.',
    },
  ]

  return (
    <section className="about section" id="about">
      <div className="about__orb about__orb--1"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About the Conference</div>
          <h2 className="section-title">Bridging Academia &amp; Industry</h2>
          <p className="section-subtitle">
            A premier global gathering for researchers, innovators, and practitioners.
          </p>
        </div>

        <div className="about__grid">
          {/* Text Side */}
          <div className="about__content">
            <div className="about__text-block">
              <p className="about__description">
                International Conference on <strong>Novel Strategies in Research, Innovation and Technology</strong> (IC-NSRIT -2026) aims to provide a global platform for researchers, academicians, industry professionals, and students to exchange knowledge on cutting-edge technologies and current industrial trends. The conference focuses on innovative, creative, and practical solutions that contribute to societal development, industrial growth, and employment generation.
              </p>
              <p className="about__description">
                To ensure multidisciplinary participation and meaningful technical discussions, the conference is structured into four thematic tracks, covering major engineering and management domains. These tracks emphasize industry relevance, applied research, sustainability, and emerging employment-oriented technologies.
              </p>
            </div>

            <h3 className="about__objectives-title">Our Objectives</h3>
            <div className="about__objectives">
              {objectives.map((obj, idx) => (
                <div className="about__objective-card" key={idx}>
                  <div className="about__objective-icon">{obj.icon}</div>
                  <p className="about__objective-text">{obj.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="about__visual">
            <div className="about__image-frame">
              <div className="about__image-inner">
                <div className="about__conf-graphic">
                  {/* Abstract conference graphic */}
                  <div className="conf-globe">
                    <div className="conf-globe__ring conf-globe__ring--1"></div>
                    <div className="conf-globe__ring conf-globe__ring--2"></div>
                    <div className="conf-globe__ring conf-globe__ring--3"></div>
                    <div className="conf-globe__center">
                      <svg viewBox="0 0 40 40" fill="none" className="conf-globe__icon">
                        <circle cx="20" cy="20" r="18" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"/>
                        <path d="M20 2C20 2 12 10 12 20s8 18 8 18" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"/>
                        <path d="M20 2C20 2 28 10 28 20s-8 18-8 18" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"/>
                        <path d="M2 20h36" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"/>
                        <path d="M3 14h34M3 26h34" stroke="rgba(0,212,255,0.3)" strokeWidth="1"/>
                        <circle cx="20" cy="20" r="4" fill="rgba(124,58,237,0.6)" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>

                  {/* Floating data nodes */}
                  <div className="data-node data-node--1">
                    <span>AI</span>
                  </div>
                  <div className="data-node data-node--2">
                    <span>ML</span>
                  </div>
                  <div className="data-node data-node--3">
                    <span>IoT</span>
                  </div>
                  <div className="data-node data-node--4">
                    <span>QC</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              {/* <div className="about__badge about__badge--1">
                <strong>40+</strong>
                <span>Nations</span>
              </div> */}
              <div className="about__badge about__badge--2">
                <strong>29-30 May 2026</strong>
                <span>Visakhapatnam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
