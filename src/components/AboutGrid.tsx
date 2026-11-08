import { profile } from '@/data/profile'

const BACKGROUND = [
  { title: 'Appointment Scheduling', text: 'Coordinating bookings, confirming appointment details, and keeping schedules organized.' },
  { title: 'Lead Generation', text: 'Researching potential customers and supporting lead generation efforts to identify relevant prospects.' },
  { title: 'Customer Communication', text: 'Responding to customer inquiries with clear, helpful information and professional communication.' },
  { title: 'Schedule Organization', text: 'Using Notion to organize schedules, track appointment details, and keep information easy to follow.' },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid portfolio-section" aria-labelledby="about-title">
      <header className="pgrid__head portfolio-section__head">
        <span className="pgrid__eyebrow">ABOUT ME</span>
        <h1 className="pgrid__title" id="about-title">{`Hi, I’m ${profile.firstName}.`}</h1>
        <p className="pgrid__lede">My background in customer service, appointment scheduling, and lead generation has helped me develop the organizational and communication skills I’m bringing to my work as an Executive Virtual Assistant.</p>
      </header>

      <div className="home__glass portfolio-section__panel portfolio-about">
        <div className="portfolio-about__intro">
          <p className="portfolio-kicker">MY BACKGROUND</p>
          <h2>Reliable support starts with thoughtful organization.</h2>
          <p>My background includes appointment scheduling, lead generation, customer communication, and organizing schedules using Notion. These experiences have helped me develop strong organizational skills, attention to detail, and a client-focused approach to administrative support.</p>
          <p>I’m continuing to develop my Executive Virtual Assistant skills through practical training and hands-on projects in inbox organization, email management, calendar coordination, meeting support, travel planning, and administrative workflows.</p>
          <p>Through these experiences, I aim to provide dependable, well-organized support that helps clients manage their day-to-day responsibilities, stay on top of priorities, and work more efficiently.</p>
        </div>

        <ul className="portfolio-about__list" aria-label="Relevant background">
          {BACKGROUND.map((item, index) => (
            <li key={item.title}>
              <span className="portfolio-about__index" aria-hidden="true">0{index + 1}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
