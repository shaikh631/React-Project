import React from 'react'

function About() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">About sensiq</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Built to translate real body data into smarter daily choices.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We combine subtle wearable sensing with modern analytics to help you understand sleep, recovery, readiness, and movement.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div className="space-y-7 rounded-[36px] bg-white p-10 shadow-xl ring-1 ring-slate-200/80">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.4em] text-slate-500">Our mission</span>
              <h3 className="text-3xl font-bold text-slate-950">Make sensing effortless and actionable.</h3>
              <p className="text-slate-600 leading-7">
                Our ring is designed to stay light, reliable, and intuitive so you can focus on your day while still gaining deep health insights.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                'Continuous HRV tracking with automatic activity recognition',
                'Sleep staging and recovery score in one clickable dashboard',
                'Long battery life and fast charging for seamless wear',
              ].map((feature) => (
                <li key={feature} className="flex gap-3 text-slate-700">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-amber-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 text-white shadow-xl">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Why it matters</p>
              <h3 className="text-3xl font-bold">Insight that fits life.</h3>
              <p className="text-slate-300 leading-7">
                By turning complex physiology into clear guidance, you can make better decisions around sleep, activity, and stress without overthinking the data.
              </p>
            </div>
            <div className="mt-8 space-y-5">
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm uppercase text-slate-500">Live readiness</p>
                <p className="mt-3 text-xl font-semibold">Low stress, strong recovery</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm uppercase text-slate-500">Sleep clarity</p>
                <p className="mt-3 text-xl font-semibold">Deep tracking without disruption</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
