import { SectionTitle } from '../ui/SectionTitle'
import { ExperienceCard } from '../ui/ExperienceCard'
import { ScrollReveal } from '../common/ScrollReveal'
import { experienceData } from '../../data/experienceData'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Experience</SectionTitle>
        </ScrollReveal>
        <div className="row">
          <div className="col-lg-10">
            {experienceData.map((experience, index) => (
              <ScrollReveal key={experience.id} delay={100 * (index + 1)}>
                <ExperienceCard experience={experience} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
