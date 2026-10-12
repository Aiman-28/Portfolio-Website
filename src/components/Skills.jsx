import { SKILL_GROUPS } from '../data/skills';
import SectionHeading from './SectionHeading';
import Card from './Card';
import Badge from './Badge';
import { cx } from '../utils/cx';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading kicker="Skills & Tools">
        What I <span className="neon">work with</span>
      </SectionHeading>

      <div className="grid grid--2">
        {SKILL_GROUPS.map((group, i) => (
          <Card key={group.title} tilt={4} delay={(i % 2) * 0.12}>
            <h3 className="card__heading">{group.title}</h3>
            <ul className="tools">
              {group.items.map((t) => (
                <li className={cx('tool', !t.short && 'tool--text')} key={t.name}>
                  {t.short && <Badge color={t.color}>{t.short}</Badge>}
                  {t.name}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
