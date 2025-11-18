function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-950">Rooted in Cardiff</h2>
          <p className="mt-3 text-blue-800/80 leading-relaxed">
            We’re a small family farm just outside the city, working with the Welsh weather rather than against it. Our focus is soil health, biodiversity and good food.
          </p>
          <ul className="mt-6 space-y-3 text-blue-900">
            <li className="flex items-center gap-3">
              <span className="h-5 w-5 rounded-full bg-blue-700 inline-block" />
              Regenerative practices
            </li>
            <li className="flex items-center gap-3">
              <span className="h-5 w-5 rounded-full bg-blue-800 inline-block" />
              Local delivery in Cardiff
            </li>
            <li className="flex items-center gap-3">
              <span className="h-5 w-5 rounded-full bg-blue-900 inline-block" />
              Transparent, small-scale growing
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-xl shadow-lg ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYXJtJTIwcHJvZHVjZXxlbnwwfDB8fHwxNzYzNDkzMDE0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Farm produce"/>
          <img className="rounded-xl shadow-lg ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1595708711101-3f145af6adb8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYXJtJTIwc3RhbmR8ZW58MHwwfHx8MTc2MzQ5MzAxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Farm stand"/>
          <img className="rounded-xl shadow-lg ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1570802685082-2224bd954723?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmVzaCUyMGVnZ3N8ZW58MHwwfHx8MTc2MzQ5MzAxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Fresh eggs"/>
          <img className="rounded-xl shadow-lg ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2070&auto=format&fit=crop" alt="Fields near Cardiff"/>
        </div>
      </div>
    </section>
  )
}

export default About
