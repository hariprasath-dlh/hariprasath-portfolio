/**
 * textReveal.js
 * -------------
 * GSAP + Framer Motion helpers for text reveal animations.
 *
 * Usage (GSAP):
 *   import { revealText, splitLetters } from '../animations/textReveal';
 *   revealText('.hero-title');
 *
 * Usage (Framer Motion variants):
 *   import { containerVariants, letterVariants } from '../animations/textReveal';
 */

import { gsap } from 'gsap';

// ── GSAP: Animate a text element word-by-word ──────────
export const revealText = (selector, delay = 0) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 60, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1,
        delay,
        ease: 'power4.out',
      }
    );
  });
};

// ── GSAP: Split text into spans for letter-by-letter animation ──
export const splitLetters = (el) => {
  if (!el) return;
  const text = el.textContent;
  el.textContent = '';
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    el.appendChild(span);
  });
  return gsap.fromTo(
    el.children,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.05, stagger: 0.03, ease: 'power2.out' }
  );
};

// ── Framer Motion: Container + letter variants ──────────
export const containerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

export const letterVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// ── Framer Motion: Paragraph word fade-in ──────────────
export const wordVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
