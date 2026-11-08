import { ArrowUpRight, EnvelopeSimple, WhatsappLogo } from '@/components/slab'
import { GMAIL_COMPOSE_URL, profile } from '@/data/profile'

export default function ContactGrid() {
  const socialLinks = profile.socials.filter((social) => social.type !== 'email')

  return (
    <section className="pgrid portfolio-section contact-page" aria-labelledby="contact-title">
      <header className="pgrid__head portfolio-section__head">
        <span className="pgrid__eyebrow">CONTACT</span>
        <h1 className="pgrid__title" id="contact-title">Let’s work together.</h1>
        <p className="pgrid__lede">Have a question or need reliable administrative support? I’d love to hear from you. Reach out through any of the contact options below.</p>
      </header>

      <div className="home__glass portfolio-section__panel contact-page__panel">
        <div className="contact-page__intro">
          <p className="portfolio-kicker">ELSIE AGUILAR · EXECUTIVE VIRTUAL ASSISTANT</p>
          <h2>Email Management &amp; Administrative Support</h2>
          <p>I provide organized, dependable support to help busy professionals manage their emails, schedules, and day-to-day administrative tasks more efficiently.</p>
        </div>

        <a className="contact-page__email" href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">
          <span className="contact-page__icon"><EnvelopeSimple size={23} aria-hidden="true" /></span>
          <span><span className="contact-page__label">Email me</span><strong>{profile.email}</strong></span>
          <ArrowUpRight size={20} className="contact-page__arrow" aria-hidden="true" />
        </a>

        <div className="contact-page__socials" aria-labelledby="contact-social-title">
          <h3 id="contact-social-title">Connect with me</h3>
          <ul role="list">
            {socialLinks.map(({ label, href, iconPath, icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon === 'whatsapp' ? (
                    <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                  ) : iconPath ? (
                    <span className="contact-page__linkedin-icon" style={{ ['--linkedin-icon' as string]: `url('${iconPath}')` }} aria-hidden="true" />
                  ) : null}
                  <span>{label}</span><ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
