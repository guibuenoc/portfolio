import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'

function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  )
}

export default App