import Reveal from './Reveal';

export default function SectionHeading({ kicker, children }) {
  return (
    <Reveal>
      <p className="kicker">{kicker}</p>
      <h2 className="title">{children}</h2>
    </Reveal>
  );
}
