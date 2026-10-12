const query = (q) => typeof window !== 'undefined' && window.matchMedia(q).matches;

export const prefersReducedMotion = () => query('(prefers-reduced-motion: reduce)');
export const hasHover = () => query('(hover: hover)');
