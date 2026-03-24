import './Submission.css'

const steps = [
  { num: '01', label: 'Download Template', desc: 'Get the official NSRIT IC 2026 paper template in DOCX format.' },
  { num: '02', label: 'Prepare Manuscript', desc: 'Format your paper following the IEEE double-column guidelines.' },
  { num: '03', label: 'Submit Online', desc: 'Upload your paper.' },
]

const Submission = () => {
  return (
    <section className="submission section" id="submission">
      <div className="submission__bg"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Paper Submission</div>
          <h2 className="section-title">Submit Your Research</h2>
          <p className="section-subtitle">
            Share your research with the global academic community. Follow our guidelines for a smooth submission process.
          </p>
        </div>

        {/* Steps */}
        <div className="submission__steps">
          {steps.map((step) => (
            <div className="submission__step" key={step.num}>
              <div className="submission__step-num">{step.num}</div>
              <div className="submission__step-body">
                <h3 className="submission__step-label">{step.label}</h3>
                <p className="submission__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main card */}
        <div className="submission__card">
          <div className="submission__card-left">
            <div className="submission__doc-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="4" width="28" height="40" rx="3"/><path d="M16 14h16M16 20h16M16 26h10"/><path d="M36 30l6 6m0 0l-6 6m6-6H28"/>
              </svg>
            </div>
            <div>
              <h3 className="submission__card-title">Paper Formatting Guidelines</h3>
              <p className="submission__card-desc">
                All papers must be formatted using the provided NSRIT template. Papers must be in English, not exceed 8 pages (including references), and follow the IEEE format.
              </p>
              <div className="submission__tags">
                <span className="submission__tag">IEEE Format</span>
                <span className="submission__tag">Max 8 Pages</span>
                <span className="submission__tag">English Only</span>
              </div>
            </div>
          </div>

          <div className="submission__actions">
            <a href="#" className="btn btn-outline submission__btn-download" onClick={(e) => e.preventDefault()}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 16s0 2 2 2h10s2 0 2-2"/><path d="M10 3v10m0 0l-3-3m3 3l3-3"/>
              </svg>
              Download Template (.docx)
            </a>
          </div>
        </div>

        {/* Register CTA */}
        <div className="submission__register">
          <div className="submission__register-content">
            <h3>Ready to Register for IC 2026?</h3>
            <p>Secure your spot at the most anticipated tech conference of 2026.</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdU1AmMhyAAZZFLbex2mYCyQ_GMEMLTv-IbObamrGXTC5alnQ/viewform?usp=dialog" className="btn btn-accent" target="_blank" rel="noreferrer">
            Register for Conference
          </a>
        </div>
      </div>
    </section>
  )
}

export default Submission
