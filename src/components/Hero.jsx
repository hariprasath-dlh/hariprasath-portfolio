import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaStackOverflow,
} from 'react-icons/fa'
import '../styles/hero.css'
import profileImg from '../assets/hariprasath.png'
import { SITE_META, SOCIAL_LINKS } from '../utils/constants'

const socialItems = [
  {
    label: 'Email',
    href: `mailto:${SITE_META.email}`,
    icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: FaInstagram,
  },
  {
    label: 'Phone',
    href: `tel:${SITE_META.phone.replace(/\s+/g, '')}`,
    icon: FaPhoneAlt,
  },
  {
    label: 'GitHub',
    href: SOCIAL_LINKS.github,
    icon: FaGithub,
  },
  {
    label: 'Stack Overflow',
    href: SOCIAL_LINKS.stackoverflow,
    icon: FaStackOverflow,
  },
]

export default function Hero() {
  return (
    <section className="hero" style={{ '--hero-image': `url(${profileImg})` }}>
      <div className="hero-content">
        <p className="tamil-quote">
          சிந்தனை கனவாக மாறும் <br />
          கனவு செயலாக மாறும் <br />
          செயல் வெற்றியாக மாறும்.
        </p>

        <p className="english-text">
          Thought becomes a dream
          <br />
          Dreams become action
          <br />
          Action becomes success.
        </p>
      </div>

      <div className="hero-identity-bar" aria-label="Profile quick links">
        <div className="identity-copy">
          <h2>{SITE_META.name}</h2>
          <p>{SITE_META.role}</p>
        </div>

        <div className="identity-socials">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="social-pill"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
