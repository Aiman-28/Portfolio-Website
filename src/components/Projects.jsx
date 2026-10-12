import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { cx } from '../utils/cx';

const ALL = 'All';
const FRAMEWORKS = [ALL, ...new Set(PROJECTS.map((p) => p.framework))];
const count = (f) => (f === ALL ? PROJECTS.length : PROJECTS.filter((p) => p.framework === f).length);

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const visible = filter === ALL ? PROJECTS : PROJECTS.filter((p) => p.framework === filter);

  return (
    <section className="section" id="projects">
      <SectionHeading kicker="Projects">
        {PROJECTS.length} projects with <span className="neon">Vue.js 3 &amp; React.js</span>
      </SectionHeading>

      <div className="filters" role="group" aria-label="Filter projects by framework">
        {FRAMEWORKS.map((f) => (
          <button
            key={f}
            type="button"
            className={cx('chip', filter === f && 'on')}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f} <span className="chip__count">{count(f)}</span>
          </button>
        ))}
      </div>

      <div className="grid grid--projects">
        {visible.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
