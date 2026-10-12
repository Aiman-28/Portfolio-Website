import { HIGHLIGHTS } from '../data/about';
import { LOCATION } from '../data/site';
import Card from './Card';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="split split--center">
        <Reveal>
          <p className="kicker">About Me</p>
          <h2 className="title">
            Front-end developer who <span className="neon">ships real projects</span>
          </h2>
          <p className="prose">
            I'm a Front-End Developer from {LOCATION.split(',')[0]} with a BS in Information Technology. I build
            responsive web applications with HTML5, CSS3, JavaScript (ES6+), React.js and Vue.js 3.
          </p>
          <p className="prose">
            I enjoy building reusable UI components and clean interfaces. I'm looking for a junior front-end developer or
            internship role where I can contribute to real-world projects and keep growing.
          </p>
        </Reveal>

        <div className="stack">
          {HIGHLIGHTS.map((p, i) => (
            <Card key={p.title} delay={i * 0.12}>
              <div className="icon-box" aria-hidden="true">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
