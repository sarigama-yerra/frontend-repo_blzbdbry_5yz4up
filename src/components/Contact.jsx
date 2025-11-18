import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-t from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">Get in touch</h2>
            <p className="mt-2 text-blue-800/80">Questions about produce, veg boxes or visiting the farm? Drop us a note.</p>
            <div className="mt-6 p-4 rounded-xl border border-blue-200 bg-white">
              <p className="text-blue-900 font-medium">Location</p>
              <p className="text-blue-800/80">Just outside Cardiff, Wales</p>
              <p className="text-blue-800/80">Open Saturdays 9–2</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-blue-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-900 mb-1">Name</label>
                <input required className="w-full rounded-lg border-blue-200 focus:ring-blue-600 focus:border-blue-600"/>
              </div>
              <div>
                <label className="block text-sm text-blue-900 mb-1">Email</label>
                <input required type="email" className="w-full rounded-lg border-blue-200 focus:ring-blue-600 focus:border-blue-600"/>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-blue-900 mb-1">Message</label>
              <textarea required rows="4" className="w-full rounded-lg border-blue-200 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg">Send</button>
            {status && <p className="mt-3 text-sm text-blue-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
