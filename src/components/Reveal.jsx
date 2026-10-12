import useReveal from '../hooks/useReveal';
import { cx } from '../utils/cx';

/** Fades/slides its children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className, style, children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={cx('reveal', inView && 'in', className)}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
