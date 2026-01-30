import { Button } from '../ui/Button'
import { ScrollReveal } from '../common/ScrollReveal'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <ScrollReveal>
            <p className="hero-subtitle">Software Developer</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="hero-title">Dylan Messerly</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="hero-description">
              Building cloud-native solutions at Eupraxia Labs. Passionate about
              Kubernetes, Go, and AI-powered infrastructure automation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="hero-buttons">
              <Button
                href="/assets/Dylan_Messerly_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                View Resume
              </Button>
              <Button
                variant="secondary"
                href="/assets/Dylan_Messerly_Resume.pdf"
                download="Dylan_Messerly_Resume.pdf"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
