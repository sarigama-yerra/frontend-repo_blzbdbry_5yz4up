import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold shadow-sm">CF</div>
          <div className="leading-tight">
            <p className="font-semibold text-blue-900">Cardiff Blue Farm</p>
            <p className="text-xs text-blue-600">Fresh • Local • Sustainable</p>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-blue-900 hover:bg-blue-50">
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 10.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-blue-900/90">
          <li><button onClick={() => scrollTo('about')} className="hover:text-blue-700">About</button></li>
          <li><button onClick={() => scrollTo('products')} className="hover:text-blue-700">Products</button></li>
          <li><button onClick={() => scrollTo('contact')} className="hover:text-blue-700">Contact</button></li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white/90">
          <ul className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-blue-900">
            <li><button onClick={() => scrollTo('about')} className="block w-full text-left py-2">About</button></li>
            <li><button onClick={() => scrollTo('products')} className="block w-full text-left py-2">Products</button></li>
            <li><button onClick={() => scrollTo('contact')} className="block w-full text-left py-2">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
