import { EnvelopeSimple, ChatCircleText, CalendarBlank, UsersThree, AirplaneTilt, ClipboardText } from '@/components/slab'
import type { Icon } from '@/components/slab'

type Service = { title: string; description: string; examples: string[]; Icon: Icon }

const SERVICES: Service[] = [
  {
    title: 'Inbox Organization & Email Triage',
    description: 'Keep inboxes organized, identify priority messages, and make important follow-ups easier to manage.',
    examples: ['Sort emails into relevant categories.', 'Identify time-sensitive messages for review.', 'Keep pending replies and follow-ups visible.'],
    Icon: EnvelopeSimple,
  },
  {
    title: 'Professional Email Communication',
    description: 'Draft clear, professional emails that reflect the purpose, context, and appropriate tone of each message.',
    examples: ['Draft responses to routine inquiries.', 'Review grammar, clarity, and formatting.', 'Prepare follow-up and confirmation emails.'],
    Icon: ChatCircleText,
  },
  {
    title: 'Calendar Management',
    description: 'Keep schedules organized with accurate event details, timely reminders, and clearly tracked changes.',
    examples: ['Add and update calendar events.', 'Review meeting details and time zones.', 'Track reminders and preparation deadlines.'],
    Icon: CalendarBlank,
  },
  {
    title: 'Meeting Coordination',
    description: 'Help meetings run smoothly by coordinating schedules, preparing invitations, and communicating essential details.',
    examples: ['Coordinate suitable meeting times.', 'Send invitations and confirmations.', 'Organize agendas and share meeting information.'],
    Icon: UsersThree,
  },
  {
    title: 'Travel Coordination',
    description: 'Keep travel details organized in a clear itinerary, making essential arrangements and trip information easy to reference.',
    examples: ['Organize booking and transportation details.', 'Compile itinerary information.', 'Track travel reminders and related documents.'],
    Icon: AirplaneTilt,
  },
]

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid portfolio-section" aria-labelledby="services-title">
      <header className="pgrid__head portfolio-section__head">
        <span className="pgrid__eyebrow">SERVICES</span>
        <h1 className="pgrid__title" id="services-title">Organized support for your day-to-day priorities.</h1>
        <p className="pgrid__lede">Reliable administrative assistance to help keep emails organized, schedules coordinated, meetings prepared, and essential tasks on track.</p>
      </header>

      <div className="home__glass portfolio-section__panel portfolio-services">
        <ul className="portfolio-services__grid" role="list">
          {SERVICES.map(({ title, description, examples, Icon }, index) => (
            <li className="portfolio-service" key={title}>
              <div className="portfolio-service__top">
                <span className="portfolio-service__icon"><Icon size={23} weight="regular" aria-hidden="true" /></span>
                <span className="portfolio-service__index" aria-hidden="true">0{index + 1}</span>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="portfolio-service__examples" aria-label={`${title} examples`}>
                {examples.map((example) => <li key={example}><ClipboardText size={16} aria-hidden="true" />{example}</li>)}
              </ul>
            </li>
          ))}
        </ul>
        <p className="portfolio-services__note">Additional support can include document organization, task tracking, and routine follow-ups, tailored to your priorities and workflow.</p>
      </div>
    </section>
  )
}
