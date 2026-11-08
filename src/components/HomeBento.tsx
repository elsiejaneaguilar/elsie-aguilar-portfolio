import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, Stack, User, Wrench, EnvelopeSimple } from '@/components/slab'

const LINKS = [
  { to: '/projects', title: 'Practice Projects', desc: 'Explore sample projects demonstrating my administrative workflows and developing Executive VA skills.', Icon: FolderOpen },
  { to: '/services', title: 'Services', desc: 'Explore support for email management, scheduling, meeting coordination, and administrative tasks.', Icon: Stack },
  { to: '/showcase', title: 'Tools & Skills', desc: 'Discover the tools I’ve used or practiced and the skills I’m developing.', Icon: Wrench },
  { to: '/about', title: 'About Elsie', desc: 'Learn about my background, relevant experience, and approach to administrative support.', Icon: User },
  { to: '/contact', title: 'Contact', desc: 'Have a question or need support? Get in touch through my contact details.', Icon: EnvelopeSimple },
] as const

/** Home navigation cards contain only verified portfolio content. */
export default function HomeBento() {
  return (
    <nav className="bento portfolio-bento" aria-label="Explore the portfolio">
      {LINKS.map(({ to, title, desc, Icon }) => (
        <Link key={to} to={to} className="bento__card portfolio-bento__card">
          <header className="bento__head">
            <span className="bento__label">
              <span className="bento__icon"><Icon size={20} weight="regular" aria-hidden="true" /></span>
              <h3 className="bento__title">{title}</h3>
            </span>
            <p className="bento__desc">{desc}</p>
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
          </header>
        </Link>
      ))}
    </nav>
  )
}
