import { useEffect } from 'react';
import { prefersReducedMotion } from '../utils/motion';

/** 3D tilt + glow that follows the pointer. Writes CSS variables on the element. */
export default function useTilt(ref, max = 10) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const strength = prefersReducedMotion() ? 0 : max;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);
      el.style.setProperty('--rx', `${(0.5 - y) * strength}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * strength}deg`);
    };
    const onLeave = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref, max]);
}
