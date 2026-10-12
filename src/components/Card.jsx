import { useCallback, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import useTilt from '../hooks/useTilt';
import { cx } from '../utils/cx';

/** Glass card with scroll-reveal and pointer-tilt. */
export default function Card({ as: Tag = 'div', tilt = 7, delay = 0, className, style, children, ...rest }) {
  const [revealRef, inView] = useReveal();
  const ref = useRef(null);
  useTilt(ref, tilt);

  // one DOM node, two hooks: share it
  const setRef = useCallback(
    (node) => {
      ref.current = node;
      revealRef.current = node;
    },
    [revealRef],
  );

  return (
    <Tag
      ref={setRef}
      className={cx('card', 'reveal', inView && 'in', className)}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
