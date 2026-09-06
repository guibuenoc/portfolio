import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'

function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  )
}

export default App