import { SectionTitle } from '../ui/SectionTitle'
import { ScrollReveal } from '../common/ScrollReveal'

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
                I'm a software developer with a passion for building scalable,
                cloud-native applications and infrastructure.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                I graduated from Texas State University and am currently working at
                Eupraxia Labs, where I develop the Federal Frontier Platform—a GitOps-based
                Kubernetes cluster management solution designed for federal agencies.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                My work focuses on building Go backend services, implementing MCP servers
                for AI-powered infrastructure automation, and working with cloud-native
                technologies like Kubernetes, Helm, and ArgoCD. I'm particularly interested
                in the intersection of AI and DevOps, exploring how intelligent automation
                can improve infrastructure management.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p>
                Prior to joining Eupraxia Labs, I completed an intensive full-stack
                development apprenticeship at Cook Systems, where I built enterprise
                applications using Java, Spring Boot, and Angular.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
