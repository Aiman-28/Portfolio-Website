import { TIMELINE, CERTIFICATIONS } from '../data/experience';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading kicker="Journey">
        Experience &amp; <span className="neon">education</span>
      </SectionHeading>

      <div className="split split--timeline">
        {TIMELINE.map((col) => (
          <div key={col.title}>
            <h3 className="timeline__title">{col.title}</h3>
            <ol className="timeline">
              {col.items.map((item, i) => (
                <Reveal as="li" key={item.heading} delay={i * 0.15} className="timeline__item">
                  <small>{item.when}</small>
                  <h4>
                    {item.heading}
                    {item.place && <span className="accent"> · {item.place}</span>}
                  </h4>
                  {item.text && <p>{item.text}</p>}
                </Reveal>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <Reveal className="certs">
        <h3 className="timeline__title">🏅 Certifications</h3>
        <ul className="tags tags--lg">
          {CERTIFICATIONS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
