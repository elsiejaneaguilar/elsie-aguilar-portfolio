import { NavLink } from 'react-router-dom'
import ProfileActions from './ProfileActions'
import {
  HomeIcon,
  FolderIcon,
  StackIcon,
  WrenchIcon,
  UserIcon,
  MessageIcon,
} from './RailIcons'
import { profile } from '@/data/profile'

/**
 * The profile rail: the fixed left column of the shell. It carries identity,
 * the theme switch and the section index, and it is the site's only navigation
 * surface from 1100px up - the floating NavBar pill hides there and takes over
 * again below it.
 *
 * The links are ROUTES, not anchors. Home is a fixed non-scrolling viewport, so
 * there is nothing for a scrollspy to spy on; the panel to the right swaps
 * instead. `NavLink` owns the active state, which is why there is no
 * IntersectionObserver here.
 */
export const RAIL_LINKS = [
  { label: 'Home', to: '/', Icon: HomeIcon },
  { label: 'Practice Projects', to: '/projects', Icon: FolderIcon },
  { label: 'Services', to: '/services', Icon: StackIcon },
  { label: 'Tools & Skills', to: '/showcase', Icon: WrenchIcon },
  { label: 'About', to: '/about', Icon: UserIcon },
  { label: 'Contact', to: '/contact', Icon: MessageIcon },
] as const

export default function Rail() {
  return (
    <aside className="rail" aria-label="Profile and site navigation">
      <div className="rail__inner">
        <span className="rail__avatar">
          <img
            src={profile.avatarSrc}
            alt="Elsie Aguilar, Executive Virtual Assistant"
            width={120}
            height={120}
          />
        </span>

        <h2 className="rail__name">
          {profile.name}
        </h2>
        <p className="rail__handle">
          {profile.handle}
        </p>
        <p className="rail__specialty">{profile.role}</p>

        <ProfileActions className="rail__actions" />

        <nav className="rail__nav" aria-label="Sections">
          <ul>
            {RAIL_LINKS.map(({ label, to, Icon }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className="rail__link">
                  <Icon size={21} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="rail__copy">
          &copy; {new Date().getFullYear()}
          <br />
          {profile.name}. All rights reserved.
        </p>
      </div>
    </aside>
  )
}
