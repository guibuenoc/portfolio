import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default App