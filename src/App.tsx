import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App