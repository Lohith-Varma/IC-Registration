import './Dates.css'

const dates = [
  {
    date: '1 September 2026',
    label: 'Full-Length Paper Submission',
    desc: 'Submit your completed paper for review by the technical committee.',
    icon: '📝',
    status: 'upcoming',
  },
  {
    date: '1 October 2026',
    label: 'Acceptance Notification',
    desc: 'Authors will be notified of the paper acceptance decision.',
    icon: '📄',
    status: 'upcoming',
  },
  {
    date: '10 October 2026',
    label: 'Registration Deadline',
    desc: 'Complete conference registration by this date.',
    icon: '✅',
    status: 'upcoming',
  },
  // {
  //   date: 'Sept 15',
  //   label: 'Acceptance Notified',
  //   desc: 'Authors will be notified of acceptance decisions via email.',
  //   icon: '✅',
  //   status: 'upcoming',
  // },
  // {
  //   date: '',
  //   label: 'Camera-Ready Paper Due',
  //   desc: 'Submit your final revised paper in the required format for publication.',
  //   icon: '📷',
  //   status: 'upcoming',
  // },
  {
    date: '13–14 November 2026',
    label: 'Conference Dates',
    desc: 'Join us at NSRIT, Visakhapatnam for 2 days of transformative sessions.',
    icon: '🚀',
    status: 'main',
  },
]

const Dates = () => {
  return (
    <section className="dates section" id="dates">
      <div className="dates__orb"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Key Dates</div>
          <h2 className="section-title">Important Deadlines</h2>
          <p className="section-subtitle">
            Stay on track with our conference timeline. Mark these dates on your calendar.
          </p>
        </div>

        <div className="dates__timeline">
          {dates.map((item, idx) => (
            <div
              className={`date-card date-card--${item.status}`}
              key={idx}
            >
              <div className="date-card__connector">
                <div className="date-card__dot"></div>
                {idx < dates.length - 1 && <div className="date-card__line"></div>}
              </div>
              <div className="date-card__content">
                <div className="date-card__meta">
                  <span className="date-card__emoji">{item.icon}</span>
                  <span className="date-card__date">{item.date}</span>
                </div>
                <h3 className="date-card__label">{item.label}</h3>
                <p className="date-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dates
