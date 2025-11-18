import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-blue-100 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-800/80">© {new Date().getFullYear()} Cardiff Blue Farm. All rights reserved.</p>
          <div className="text-sm text-blue-800/80">Made with care in Wales.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
