import { Link } from 'react-router-dom'
import { Stack, FolderOpen, User, Wrench, EnvelopeSimple } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'
import ProfileActions from './ProfileActions'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, role and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  responsive links to the main portfolio sections
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
        </span>
        <span className="hprofile__handle">{profile.handle}</span>
        <span className="hprofile__role">{profile.role}</span>
        <ProfileActions className="hprofile__actions" />
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  if (!profile.stats.length) return null
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Practice Projects', to: '/projects', title: 'Sample administrative exercises', desc: 'Explore sample projects demonstrating my administrative workflows and developing Executive VA skills.', Icon: FolderOpen },
  { n: '02', label: 'Services', to: '/services', title: 'Email & administrative support', desc: 'Explore support for email management, scheduling, meeting coordination, and administrative tasks.', Icon: Stack },
  { n: '03', label: 'Tools & Skills', to: '/showcase', title: 'Tools I practice with', desc: 'Discover the tools I’ve used or practiced and the skills I’m developing.', Icon: Wrench },
  { n: '04', label: 'About Elsie', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'Learn about my background, relevant experience, and approach to administrative support.', Icon: User },
  { n: '05', label: 'Contact', to: '/contact', title: 'Get in touch', desc: 'Have a question or need support? Get in touch through my contact details.', Icon: EnvelopeSimple },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

    </>
  )
}
