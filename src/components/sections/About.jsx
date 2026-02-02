import { SectionTitle } from '../ui/SectionTitle'
import { ScrollReveal } from '../common/ScrollReveal'
import { educationData } from '../../data/experienceData'

export function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>About Me</SectionTitle>
        </ScrollReveal>
        <div className="row">
          <div className="col-lg-8">
            <ScrollReveal delay={100}>
              <p className="lead">
                Welcome! I'm Dylan Messerly, a graduate of Texas State University where I earned
                a Bachelor of Science in Computer Science with a minor in Mathematics, graduating summa cum laude.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                I'm currently a Software Developer at Eupraxia Labs, where I co-architected the
                Federal Frontier Platform—a GitOps-driven Kubernetes management system designed
                for secure, multi-account AWS and hybrid cloud environments. My day-to-day work
                involves building core Go backend services that power cluster creation, mutation,
                and teardown, along with multi-repo GitLab orchestration and atomic commit workflows.
                I've implemented OIDC provider automation, IRSA role provisioning, and dynamic Helm
                values templating to streamline DevOps operations across the platform.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                One area I'm particularly excited about is the intersection of AI and infrastructure
                automation. I've built MCP servers and Python-based agents that enable AI-driven
                automation of Kubernetes operations and GitOps workflows, pushing the boundaries
                of what's possible with intelligent platform orchestration.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p>
                Prior to joining Eupraxia Labs, I completed a full stack developer apprenticeship
                at Cook Systems, where I developed dynamic web applications and RESTful APIs using
                Java, JavaScript, Angular, and Spring Boot. Working collaboratively with a team of
                developers, I honed my skills in version control, CI/CD pipelines, and building
                responsive single-page applications.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <p>
                My technical journey started with a strong foundation in C++ during university,
                where I developed a passion for problem solving that continues to drive me today.
                I've since expanded into cloud-native technologies, backend development in Go,
                and infrastructure automation—areas where I'm constantly learning and growing.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={600}>
          <h3 className="mt-5 mb-4">Education</h3>
        </ScrollReveal>
        <div className="row">
          <div className="col-lg-10">
            {educationData.map((edu, index) => (
              <ScrollReveal key={edu.id} delay={700 + index * 100}>
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title mb-1">{edu.degree}</h4>
                    {edu.minor && <p className="text-muted mb-2">{edu.minor}</p>}
                    <p className="text-accent mb-3">{edu.school}</p>
                    <ul className="mb-0">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
