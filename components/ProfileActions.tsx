import { useEffect, useState } from 'react'
import { EnvelopeSimple, WhatsappLogo } from '@/components/slab'
import { profile } from '@/data/profile'
import { getTheme, toggleTheme, type Theme } from '@/lib/theme'
import ThemeGlyph from './ThemeGlyph'

/** The profile's three contact links followed by its existing theme control. */
export default function ProfileActions({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(getTheme())
    const onTheme = (event: Event) => setTheme((event as CustomEvent<Theme>).detail)
    window.addEventListener('themechange', onTheme)
    return () => window.removeEventListener('themechange', onTheme)
  }, [])

  return (
    <div className={`profile-actions ${className}`.trim()}>
      <ul className="profile-actions__list" role="list" aria-label="Social profiles">
        {profile.socials.map(({ label, href, iconPath, icon, type }) => {
          const isEmail = type === 'email'
          const isWhatsApp = icon === 'whatsapp'
          return (
            <li key={label}>
              <a
                className="profile-actions__button"
                href={href}
                aria-label={label}
                title={isWhatsApp ? label : isEmail ? 'Email Elsie' : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEmail ? (
                  <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
                ) : isWhatsApp ? (
                  <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
                ) : (
                  <span
                    className="profile-actions__icon"
                    style={{ ['--icon-url' as string]: `url('${iconPath}')` }}
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        className="profile-actions__button profile-actions__theme"
        onClick={(event) => setTheme(toggleTheme(event.currentTarget))}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        <ThemeGlyph theme={theme} size={20} />
      </button>
    </div>
  )
}
