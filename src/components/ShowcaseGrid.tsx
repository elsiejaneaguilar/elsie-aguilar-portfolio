import { tools } from '@/components/ToolsMarquee'

const SKILLS = [
  { title: 'Inbox Organization & Email Triage', context: 'Organize messages by priority, identify time-sensitive requests, and keep follow-up tasks easy to track.' },
  { title: 'Professional Email Communication', context: 'Prepare clear, courteous, and concise email responses suited to common business situations.' },
  { title: 'Calendar Management', context: 'Organize appointments, track meeting details, and help keep schedules accurate and up to date.' },
  { title: 'Meeting Coordination', context: 'Support meeting scheduling, invitations, agenda preparation, and follow-up reminders.' },
  { title: 'Travel Coordination', context: 'Organize itinerary details and travel information to help keep plans clear and accessible.' },
  { title: 'Administrative Support', context: 'Organize information, coordinate appointments, and assist with lead research and customer inquiries.' },
]

function ToolGroup() {
  return (
    <section className="tools-group" aria-labelledby="tools-practiced">
      <header className="tools-group__head">
        <div><p className="portfolio-kicker">Current toolkit</p><h2 id="tools-practiced">Tools I’ve used or practiced</h2></div>
        <p>These tools support my work and practice in communication, scheduling, document organization, and task management. My experience and proficiency vary by tool.</p>
      </header>
      <ul className="tools-group__list" role="list">
        {tools.map(({ name, iconPath }) => (
          <li className="tool-card" key={name}>
            <span className="tool-card__icon"><img src={iconPath} alt="" aria-hidden="true" width={24} height={24} loading="lazy" decoding="async" /></span>
            <span className="tool-card__copy"><strong>{name}</strong><span>Used or practiced</span></span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function ShowcaseGrid() {
  return (
    <section className="pgrid portfolio-section tools-skills" aria-labelledby="showcase-title">
      <header className="pgrid__head portfolio-section__head">
        <span className="pgrid__eyebrow">TOOLS &amp; SKILLS</span>
        <h1 className="pgrid__title" id="showcase-title">The tools and skills behind reliable support.</h1>
        <p className="pgrid__lede">A practical overview of the tools I’ve used or practiced and the administrative skills I’m developing to support organized, efficient workflows.</p>
      </header>

      <div className="home__glass portfolio-section__panel tools-skills__panel">
        <div className="tools-groups">
          <ToolGroup />
        </div>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="skills-section__head">
            <div><p className="portfolio-kicker">SKILLS</p><h2 id="skills-title">Administrative skills I’m building</h2></div>
            <p>I’m strengthening these core skills through practical training and relevant hands-on experience.</p>
          </div>
          <ul className="skills-list" role="list">
            {SKILLS.map(({ title, context }, index) => (
              <li key={title}>
                <span className="skills-list__index" aria-hidden="true">0{index + 1}</span>
                <div><h3>{title}</h3><p>{context}</p></div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
