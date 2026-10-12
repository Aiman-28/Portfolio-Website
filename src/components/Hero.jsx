import { NAME, ROLES, RESUME_URL, PHOTO, SOCIALS } from '../data/site';
import useTyping from '../hooks/useTyping';
import Monogram from './Monogram';

const delay = (s) => ({ '--d': `${s}s` });

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section className="hero" id="home">
      <div>
        <p className="hero__hello fade-up" style={delay(0.2)}>Hello, I'm</p>
        <h1 className="fade-up" style={delay(0.35)}>
          <span className="neon">{NAME}</span>
        </h1>
        <h2 className="hero__role fade-up" style={delay(0.5)} aria-label={ROLES[0]}>
          <span aria-hidden="true">{typed}</span>
          <i className="caret" aria-hidden="true" />
        </h2>
        <p className="hero__lead fade-up" style={delay(0.65)}>
          I build responsive, user-friendly web applications with React.js and Vue.js 3, using clean and reusable
          components.
        </p>
        <div className="fade-up" style={delay(0.8)}>
          <a className="btn" href="#projects">View projects</a>
          <a className="btn btn--ghost" href={RESUME_URL} download>
            <span aria-hidden="true">⬇</span> Download CV
          </a>
          <a className="btn btn--ghost" href="#contact">Contact me</a>
        </div>
        <ul className="hero__links fade-up" style={delay(0.95)}>
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name} ↗</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__photo fade-up" style={delay(0.45)}>
        <div className="ring">
          <div>{PHOTO ? <img src={`${import.meta.env.BASE_URL}${PHOTO}`} alt={NAME} /> : <Monogram />}</div>
        </div>
      </div>
    </section>
  );
}
