/**
 * useMousePosition.js
 * -------------------
 * Tracks the mouse position in real-time.
 * Returns { x, y } coordinates (relative to viewport by default,
 * or to a given ref element when `targetRef` is provided).
 *
 * Usage:
 *   import useMousePosition from '../hooks/useMousePosition';
 *   const { x, y } = useMousePosition();
 */

import { useState, useEffect, useCallback } from 'react';

const useMousePosition = (targetRef = null) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (targetRef && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    } else {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  }, [targetRef]);

  useEffect(() => {
    const target = targetRef ? targetRef.current : window;
    if (!target) return;

    target.addEventListener('mousemove', handleMouseMove);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, targetRef]);

  return position;
};

export default useMousePosition;
