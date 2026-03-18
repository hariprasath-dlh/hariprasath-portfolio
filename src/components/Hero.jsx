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
    <section id="home" className="hero relative min-h-screen overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0a0a0a_0%,#120707_52%,#140404_100%)]" />

      <div
        className="hero-image absolute right-0 top-0 -z-10 h-full w-full bg-cover bg-no-repeat bg-right-top opacity-40 md:bg-right-center md:opacity-90 lg:w-[60%]"
        style={{ backgroundImage: `url(${profileImage})` }}
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,10,0.96)_0%,rgba(10,10,10,0.82)_28%,rgba(10,10,10,0.4)_52%,rgba(10,10,10,0.08)_72%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,42,42,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,59,59,0.16),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/45" />

      <div className="mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-10 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-content flex w-full max-w-[500px] flex-col items-start gap-4 text-left"
        >
          <h1 className="tamil-quote max-w-[500px] text-left text-[clamp(28px,5vw,64px)] font-semibold leading-[1.3] text-white">
            சிந்தனை கனவாக மாறும்... <br />
            கனவு செயலாக மாறும்... <br />
            செயல் வெற்றியாக மாறும்.
          </h1>

          <div className="mt-2 space-y-2 text-left">
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative z-20 mx-auto -mb-14 -mt-24 max-w-[1400px] px-5 pb-0 sm:px-8 md:-mb-16 md:-mt-20 md:px-12 lg:-mb-20 lg:-mt-24 lg:px-20"
      >
        <div className="rounded-[2rem] bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(22,8,8,0.5)_48%,rgba(90,16,16,0.32)_100%)] px-6 py-8 shadow-lg shadow-black/30 backdrop-blur-lg sm:px-8">
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
