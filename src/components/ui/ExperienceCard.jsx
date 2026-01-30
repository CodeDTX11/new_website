import { SkillBadge } from './SkillBadge'

export function ExperienceCard({ experience }) {
  const { title, company, date, description, technologies } = experience

  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-title">{title}</h3>
          <span className="experience-company">{company}</span>
        </div>
        <span className="experience-date">{date}</span>
      </div>
      <div className="experience-description">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {technologies && technologies.length > 0 && (
        <div className="d-flex flex-wrap gap-2">
          {technologies.map(tech => (
            <SkillBadge key={tech} skill={tech} />
          ))}
        </div>
      )}
    </div>
  )
}
