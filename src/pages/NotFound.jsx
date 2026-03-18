/**
 * NotFound.jsx
 * ------------
 * 404 page with a neon glitch-style heading and a back-home link.
 */

import { motion } from 'framer-motion'
import { Link }   from 'react-router-dom'

const NotFound = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <motion.h1
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{
          fontSize: 'clamp(5rem, 20vw, 12rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #00f0ff, #b400ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          textShadow: '0 0 60px rgba(0,240,255,0.2)',
        }}
      >
        404
      </motion.h1>

      <p style={{ color: '#555', fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2rem' }}>
        Oops — this page doesn't exist.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/"
          style={{
            padding: '0.8rem 2rem',
            borderRadius: 8,
            background: 'linear-gradient(135deg, #00f0ff, #b400ff)',
            color: '#0a0a0f',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  )
}

export default NotFound
