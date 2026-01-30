import { SectionTitle } from '../ui/SectionTitle'
import { SkillBadge } from '../ui/SkillBadge'
import { ScrollReveal } from '../common/ScrollReveal'
import { skillsData } from '../../data/skillsData'

function SkillCategory({ title, skills, baseDelay }) {
  return (
    <div className="mb-4">
      <ScrollReveal delay={baseDelay}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
      </ScrollReveal>
      <div className="d-flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <ScrollReveal key={skill} delay={baseDelay + 50 * (index + 1)}>
            <SkillBadge skill={skill} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Skills</SectionTitle>
        </ScrollReveal>
        <div className="row">
          <div className="col-lg-10">
            <SkillCategory
              title="Languages"
              skills={skillsData.languages}
              baseDelay={100}
            />
            <SkillCategory
              title="Frameworks"
              skills={skillsData.frameworks}
              baseDelay={200}
            />
            <SkillCategory
              title="Cloud & DevOps"
              skills={skillsData.cloudDevOps}
              baseDelay={300}
            />
            <SkillCategory
              title="Databases"
              skills={skillsData.databases}
              baseDelay={400}
            />
            <SkillCategory
              title="Tools & Technologies"
              skills={skillsData.tools}
              baseDelay={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
