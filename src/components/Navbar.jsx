import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '../utils/constants'
import '../styles/navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')

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

  const handleScroll = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: [0, -4, 0], opacity: 1 }}
      transition={{
        y: {
          duration: 4,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        },
        opacity: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="navbar"
      aria-label="Primary navigation"
    >
      {NAV_LINKS.map((link) => {
        const id = link.href.replace('#', '')
        const isActive = activeSection === id

        return (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(event) => handleScroll(event, link.href)}
            className={`navbar-link ${isActive ? 'is-active' : ''}`}
            whileHover={{ y: -1.5 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {isActive && (
              <motion.span
                layoutId="navbar-liquid-pill"
                className="navbar-liquid-pill"
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                  mass: 0.85,
                }}
              />
            )}
            {link.label}
          </motion.a>
        )
      })}
    </motion.nav>
  )
}

export default Navbar
