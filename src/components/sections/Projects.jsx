import { SectionTitle } from '../ui/SectionTitle'
import { ProjectCard } from '../ui/ProjectCard'
import { ScrollReveal } from '../common/ScrollReveal'
import { projectsData } from '../../data/projectsData'

export function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Projects</SectionTitle>
        </ScrollReveal>
        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div key={project.id} className="col-md-6">
              <ScrollReveal delay={100 * (index + 1)}>
                <ProjectCard project={project} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
