/** Coloured square with a 2-letter code (used for skills and tools). */
export default function Badge({ color, children }) {
  return (
    <i className="badge" style={{ color, borderColor: color, background: `${color}22` }} aria-hidden="true">
      {children}
    </i>
  );
}
