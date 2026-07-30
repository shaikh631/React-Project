import React from 'react'

function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-4xl gap-10 rounded-[36px] bg-white p-10 shadow-xl lg:grid-cols-[0.9fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Get in touch</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Let’s build something insightful together.
          </h2>
          <p className="text-slate-600 leading-8">
            Have a product question or want to collaborate? Send a message and we’ll get back to you soon.
          </p>

          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-950">Email:</span> hello@sensiq.co
            </p>
            <p>
              <span className="font-semibold text-slate-950">Location:</span> Remote friendly
            </p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-semibold text-slate-700">
            Message
            <textarea
              rows={6}
              className="w-full rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="Tell us about your project"
            />
          </label>

          <button className="inline-flex items-center justify-center rounded-3xl bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Send message
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contact
