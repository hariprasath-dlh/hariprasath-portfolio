import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaStackOverflow,
} from 'react-icons/fa'
import profileImage from '../assets/hariprasath.png'
import { SITE_META, SOCIAL_LINKS } from '../utils/constants'

const tamilQuote = [
  'சிந்தனை கனவாக மாறும்...',
  'கனவு செயலாக மாறும்...',
  'செயலே வெற்றியாக மாறும்.',
]

const englishQuote = [
  'Thought becomes a dream.',
  'Dreams become action.',
  'Action becomes success.',
]

const Hero = () => {
  const socialItems = [
    { label: 'GitHub', href: SOCIAL_LINKS.github, icon: FaGithub },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: FaLinkedin },
    { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: FaInstagram },
    { label: 'StackOverflow', href: SOCIAL_LINKS.stackoverflow, icon: FaStackOverflow },
    { label: 'Email', href: `mailto:${SITE_META.email}`, icon: FaEnvelope },
    { label: 'Phone', href: `tel:${SITE_META.phone.replace(/\s+/g, '')}`, icon: FaPhoneAlt },
  ]

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background gradient base */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0a0a0a_0%,#120707_52%,#140404_100%)]" />

      {/* Image layer with overflow-hidden wrapper */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={profileImage}
          alt="Hariprasath"
          className="h-full w-full object-cover object-[center_top]"
        />
        {/* Left-to-right dark gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.82) 28%, rgba(10,10,10,0.38) 52%, rgba(10,10,10,0.05) 72%)',
          }}
        />
        {/* Dark overlay for mobile readability (Step 8) */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/10" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
        {/* Navbar-area gradient overlay for smooth merge */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/18 to-transparent opacity-35" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/18 to-transparent opacity-35" />
      </div>

      {/* Red radial accents */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,42,42,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,59,59,0.16),transparent_30%)]" />

      {/* Main content — responsive height + padding */}
      <div className="mx-auto flex h-[90vh] max-w-[1440px] items-center px-4 pb-10 sm:h-screen sm:px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-[500px] flex-col gap-4"
        >
          {/* Tamil quote — responsive text (Step 6) */}
          <div className="space-y-2">
            {tamilQuote.map((line) => (
              <p
                key={line}
                className="tamil-quote text-2xl font-semibold leading-relaxed text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {line}
              </p>
            ))}
          </div>

          {/* English quote — responsive text (Step 6) */}
          <div className="mt-2 space-y-2">
            {englishQuote.map((line) => (
              <p
                key={line}
                className="text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg"
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Name card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative z-20 mx-auto -mt-16 max-w-[1400px] px-4 pb-0 sm:px-8 md:px-16 lg:px-20"
      >
        <div className="rounded-[2rem] bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(22,8,8,0.5)_48%,rgba(90,16,16,0.32)_100%)] px-6 py-8 shadow-lg shadow-black/30 backdrop-blur-lg sm:px-8" style={{ border: 'none' }}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-2xl font-semibold tracking-[0.12em] text-zinc-50 sm:text-3xl lg:text-4xl">
                {SITE_META.name}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-red-200/75 sm:text-sm">
                {SITE_META.role}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-500/25 bg-red-500/6 text-red-100/85 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/45 hover:bg-red-500/12 hover:text-red-200 hover:shadow-[0_0_30px_rgba(255,50,50,0.22)] sm:h-12 sm:w-12"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
