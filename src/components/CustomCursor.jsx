/**
 * CustomCursor.jsx
 * ----------------
 * Replaces the default browser cursor with a neon dot + ring combo.
 * GSAP drives the smooth lag between dot and ring.
 * Scales on hover over interactive elements.
 */

import { useEffect, useRef } from 'react'
import { initCursorAnimation, cursorHoverEffect } from '../animations/cursorAnimation'

const CustomCursor = () => {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    initCursorAnimation('#cursor-dot', '#cursor-ring')
    cursorHoverEffect('#cursor-ring', 'a, button, [data-cursor-hover]')
  }, [])

  return (
    <>
      {/* Inner dot — moves instantly */}
      <div
        id="cursor-dot"
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#00f0ff',
          boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Outer ring — lags behind for smooth feel */}
      <div
        id="cursor-ring"
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(0, 240, 255, 0.6)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  )
}

export default CustomCursor
