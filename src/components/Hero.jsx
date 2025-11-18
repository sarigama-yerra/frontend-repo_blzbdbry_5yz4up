function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-blue-900/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">Cardiff • Wales
            <span className="inline-block h-1 w-1 rounded-full bg-blue-400"/>
            Family Farm
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">
            Fresh from our fields to your table
          </h1>
          <p className="mt-4 text-blue-800/80 leading-relaxed">
            We grow seasonal produce with care for the land and a passion for flavour. No nonsense, just honest food raised right outside Cardiff.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition">
              Shop seasonal boxes
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-50 transition">
              Learn more
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-700/80">
            Open farm Saturdays • Click & collect in Cardiff city
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-200/60">
            <img src="https://images.unsplash.com/photo-1736066349278-897dde1f055d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWxzaCUyMGZhcm0lMjBmaWVsZHN8ZW58MHwwfHx8MTc2MzQ5MzAxNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Welsh farm fields" className="h-full w-full object-cover"/>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg ring-1 ring-blue-200 p-4">
            <p className="text-sm font-semibold text-blue-900">Grown in Cardiff</p>
            <p className="text-xs text-blue-700/80">Reducing miles, boosting flavour</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
