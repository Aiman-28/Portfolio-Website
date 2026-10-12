import { EMAIL, LOCATION, PHONE, PHONE_HREF, SOCIALS } from '../data/site';
import useCopy from '../hooks/useCopy';
import SectionHeading from './SectionHeading';
import Card from './Card';
import Reveal from './Reveal';
import ContactForm from './ContactForm';

export default function Contact() {
  const [copy, copied] = useCopy(EMAIL);

  return (
    <section className="section" id="contact">
      <SectionHeading kicker="Contact Me">
        Let's work <span className="neon">together</span>
      </SectionHeading>

      <div className="split split--top">
        <Card tilt={5} delay={0.1}>
          <h3 className="card__heading">Get in touch</h3>
          <p>Open to junior front-end developer and internship opportunities.</p>
          <div className="info-row">
            <div className="icon-box" aria-hidden="true">✉️</div>
            <div>
              <small>Email</small>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
          <div className="info-row">
            <div className="icon-box" aria-hidden="true">📞</div>
            <div>
              <small>Phone</small>
              <a href={`tel:${PHONE_HREF}`}>{PHONE}</a>
            </div>
          </div>
          <div className="info-row info-row--last">
            <div className="icon-box pin" aria-hidden="true">📍</div>
            <div>
              <small>Location</small>
              {LOCATION}
            </div>
          </div>
        </Card>

        <Card tilt={5} delay={0.2}>
          <ContactForm />
        </Card>
      </div>

      <Reveal as="ul" delay={0.2} className="socials">
        {SOCIALS.map((s) => (
          <li key={s.name}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              <b aria-hidden="true">{s.short}</b>
              {s.name}
            </a>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
