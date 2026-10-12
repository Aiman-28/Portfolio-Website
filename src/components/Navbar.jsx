import { useEffect, useRef, useState } from 'react';
import { FIRST_NAME, NAV_LINKS } from '../data/site';
import useScrollSpy from '../hooks/useScrollSpy';
import MobileMenu from './MobileMenu';
import { cx } from '../utils/cx';

const IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(IDS);
  const bar = useRef(null);

  // solid background + reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // mobile menu: lock page scroll + close on Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className={cx('nav', solid && 'solid')} aria-label="Main">
        <a href="#home" className="nav__logo" onClick={() => setOpen(false)}>
          {FIRST_NAME}<span className="accent">.</span>
        </a>

        <div className="nav__links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={cx(active === l.id && 'on')} aria-current={active === l.id ? 'true' : undefined}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={cx('nav__burger', open && 'x')}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
        </button>

        <span className="nav__progress" ref={bar} aria-hidden="true" />
      </nav>

      <MobileMenu open={open} active={active} onClose={() => setOpen(false)} />
    </>
  );
}
