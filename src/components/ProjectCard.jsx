import Card from './Card';

export default function ProjectCard({ project, index }) {
  const { title, emoji, framework, description, tags, gradient, live, source } = project;
  return (
    <Card as="article" tilt={7} delay={(index % 3) * 0.08} className="project">
      <div className="project__thumb" style={{ backgroundImage: `linear-gradient(135deg,${gradient})` }} aria-hidden="true">
        {emoji}
        <span className="project__framework">{framework}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags" aria-label="Technologies">
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="project__links">
        {live && (
          <a className="pill pill--solid" href={live} target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo (opens in a new tab)`}>
            Live demo ↗
          </a>
        )}
        {source && (
          <a className="pill" href={source} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub (opens in a new tab)`}>
            GitHub ↗
          </a>
        )}
      </div>
    </Card>
  );
}
