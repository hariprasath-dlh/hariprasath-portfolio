/**
 * cursorAnimation.js
 * ------------------
 * GSAP helper that drives the custom neon cursor element.
 * Called inside the CustomCursor component or the useMousePosition hook.
 *
 * Usage:
 *   import { initCursorAnimation, magnetEffect } from '../animations/cursorAnimation';
 *   initCursorAnimation('#cursor-dot', '#cursor-ring');
 */

import { gsap } from 'gsap';

/**
 * Initialises smooth cursor following for the dot and ring elements.
 * @param {string} dotSel   - CSS selector for the inner dot
 * @param {string} ringSel  - CSS selector for the outer ring
 */
export const initCursorAnimation = (dotSel, ringSel) => {
  const dot  = document.querySelector(dotSel);
  const ring = document.querySelector(ringSel);
  if (!dot || !ring) return;

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    gsap.to(dot, { x: mouseX, y: mouseY, duration: 0, ease: 'none' });

    // Ring follows with slight lag
    gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.18, ease: 'power2.out' });
  });
};

/**
 * Adds a magnetic hover effect to elements matching the selector.
 * @param {string} selector - CSS selector for magnetic elements
 */
export const magnetEffect = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect   = el.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const deltaX  = (e.clientX - centerX) * 0.3;
      const deltaY  = (e.clientY - centerY) * 0.3;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });
};

/**
 * Scales the cursor ring up when hovering over interactive elements.
 * @param {string} ringSel  - CSS selector for the outer ring
 * @param {string} targets  - CSS selector for hover targets (e.g. 'a, button')
 */
export const cursorHoverEffect = (ringSel, targets = 'a, button') => {
  const ring = document.querySelector(ringSel);
  if (!ring) return;

  document.querySelectorAll(targets).forEach((el) => {
    el.addEventListener('mouseenter', () =>
      gsap.to(ring, { scale: 2.5, opacity: 0.6, duration: 0.3 })
    );
    el.addEventListener('mouseleave', () =>
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 })
    );
  });
};
