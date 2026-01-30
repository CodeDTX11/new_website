import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/common/Navbar'
import { Footer } from './components/common/Footer'
import { SectionDivider } from './components/common/SectionDivider'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionDivider variant="to-alt" />
        <About />
        <SectionDivider variant="to-primary" />
        <Experience />
        <SectionDivider variant="to-alt" />
        <Projects />
        <SectionDivider variant="to-primary" />
        <Skills />
        <SectionDivider variant="to-alt" />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
