function Features() {
  const features = [
    {
      title: 'Seasonal Veg Boxes',
      desc: 'Weekly selections picked at peak freshness from our fields.',
      icon: (
        <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a7 7 0 0 0-7 7v2H4a2 2 0 0 0-2 2v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a2 2 0 0 0-2-2h-1V9a7 7 0 0 0-7-7Zm-5 9V9a5 5 0 0 1 10 0v2H7Z"/>
        </svg>
      )
    },
    {
      title: 'Pasture-Raised Eggs',
      desc: 'Hens free to roam, producing rich yolks and real flavour.',
      icon: (
        <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C8 3 4 9 4 13a8 8 0 0 0 16 0c0-4-4-10-8-10Zm0 16a6 6 0 0 1-6-6c0-2.8 3.7-8 6-8s6 5.2 6 8a6 6 0 0 1-6 6Z"/>
        </svg>
      )
    },
    {
      title: 'No-spray Salad Greens',
      desc: 'Crisp leaves grown without harsh chemicals or shortcuts.',
      icon: (
        <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-blue-950">What we grow</h2>
        <p className="mt-2 text-blue-800/80">Simple, seasonal and grown with care near Cardiff.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-blue-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center ring-1 ring-blue-200">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-blue-900">{f.title}</h3>
              <p className="mt-1 text-sm text-blue-800/80">{f.desc}</p>
              <div className="mt-4 text-sm text-blue-700/80 opacity-0 group-hover:opacity-100 transition">Available at the Saturday farm gate.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
