import { NAV_LINKS } from '../data/site';
import { cx } from '../utils/cx';

export default function MobileMenu({ open, active, onClose }) {
  return (
    <div id="mobile-menu" className={cx('mobile-menu', open && 'open')} aria-hidden={!open}>
      {NAV_LINKS.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          tabIndex={open ? 0 : -1}
          className={cx(active === l.id && 'on')}
          onClick={onClose}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
