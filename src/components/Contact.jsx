import './Contact.css'

const Contact = () => {
  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email Us',
      value: 'ic.nsrit@nsrit.edu.in',
      href: 'mailto:ic.nsrit@nsrit.edu.in',
      color: '#4338ca',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: 'Call Us',
      value: '+91 77299 90444',
      href: 'tel:+917729990444',
      color: '#7c3aed',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Hosted by',
      value: 'Dept. of CSE, NSRIT, Visakhapatnam',
      href: 'https://maps.google.com/?q=NSRIT+Visakhapatnam',
      color: '#0891b2',
    },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="contact__orb"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions? Our organizing committee is ready to assist you throughout your IC 2026 journey.
          </p>
        </div>

        {/* 3-card row */}
        <div className="contact__cards-row">
          {contactItems.map((item, idx) => (
            <a
              href={item.href}
              className="contact-info-card"
              key={idx}
              style={{ '--contact-color': item.color }}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
            >
              <div className="contact-info-card__icon">{item.icon}</div>
              <span className="contact-info-card__label">{item.label}</span>
              <span className="contact-info-card__value">{item.value}</span>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <div className="contact__form-wrap">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="contact-form__title">Send a Message</h3>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <label htmlFor="cf-name">Full Name</label>
                <input type="text" id="cf-name" placeholder="Your name" />
              </div>
              <div className="contact-form__group">
                <label htmlFor="cf-email">Email</label>
                <input type="email" id="cf-email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="contact-form__group">
              <label htmlFor="cf-subject">Subject</label>
              <input type="text" id="cf-subject" placeholder="Regarding IC 2026..." />
            </div>
            <div className="contact-form__group">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary contact-form__submit">
              Send Message
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10h14M9 4l6 6-6 6"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
