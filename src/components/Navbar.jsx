import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NAV_LINKS } from '../utils/constants'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'activities', 'contact']

    const updateActiveSection = () => {
      const scrollCheckpoint = window.scrollY + window.innerHeight * 0.4
      let nextActiveSection = sections[0]

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section && scrollCheckpoint >= section.offsetTop) {
          nextActiveSection = id
        }
      })

      setActiveSection(nextActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnDesktop)
    return () => window.removeEventListener('resize', closeMenuOnDesktop)
  }, [])

  const handleScroll = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6">
      <div className="mx-auto w-fit rounded-full bg-black/40 px-6 py-2 backdrop-blur-md shadow-md shadow-red-500/20">
        <motion.nav
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300 lg:hidden">
            Menu
          </span>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleScroll(event, link.href)}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300 transition-all duration-500 ease-in-out will-change-transform hover:text-red-300 ${
                    isActive ? 'text-red-200' : ''
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 -z-10 rounded-full bg-red-500/14"
                      transition={{ type: 'spring', stiffness: 240, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-red-300 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.nav>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 w-[min(92vw,24rem)] overflow-hidden rounded-3xl bg-black/80 p-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleScroll(event, link.href)}
                  className={`rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.2em] transition-all duration-500 ease-in-out ${
                    isActive ? 'bg-red-500/10 text-red-300' : 'text-zinc-300 hover:bg-red-500/8 hover:text-red-300'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
