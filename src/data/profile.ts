/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import type { Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
  icon?: 'whatsapp'
  type?: 'email'
}

export const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=elsie.jane.aguilar@gmail.com'

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Elsie Aguilar',
  firstName: 'Elsie',
  handle: 'Executive Virtual Assistant',
  role: 'Email Management & Administrative Support',
  avatarSrc: '/elsie-profile.png',
  verifiedLabel: '',
  email: 'elsie.jane.aguilar@gmail.com',
  location: '',
  stats: [],
  // The intro types this line, then flies it into the Home headline.
  displayName: { line1: 'Executive Virtual Assistant for', line2: 'Email Management & Administrative Support' },
  hero: {
    body: 'I help busy professionals stay organized with efficient email management, seamless calendar coordination, and dependable administrative support—giving them more time to focus on their priorities.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Elsie Aguilar',
  },
  socials: [
    { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/elsieaguilarsmm/', iconPath: '/icons/linkedin.svg' },
    { label: 'Email Elsie', href: GMAIL_COMPOSE_URL, iconPath: '', type: 'email' },
    { label: 'Message me on WhatsApp', href: 'https://wa.me/639278982875', iconPath: '', icon: 'whatsapp' },
  ],
}
