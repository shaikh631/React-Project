import React from 'react'

const projects = [
  {
    title: 'Smart Sleep Insights',
    description: 'A complete sleep dashboard that summarizes REM, deep sleep, and recovery trends.',
    tags: ['Sleep', 'Analytics', 'Design'],
  },
  {
    title: 'Daily Readiness Score',
    description: 'A one-tap readiness status that helps you know when to push and when to recover.',
    tags: ['Health', 'Machine learning', 'Product'],
  },
  {
    title: 'Wearable Ring UI',
    description: 'A sleek product experience for wrist-to-ring transitions and wearable compatibility.',
    tags: ['UI/UX', 'Product', 'Hardware'],
  },
]

function Projects() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Projects</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Product work built for clarity, comfort, and smarter sensing.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
