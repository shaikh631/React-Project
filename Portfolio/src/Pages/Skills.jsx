import React from 'react'

const skills = [
  { name: 'Product Design', value: 92 },
  { name: 'UI / UX', value: 88 },
  { name: 'Interaction Motion', value: 80 },
  { name: 'Frontend Development', value: 86 },
]

function Skills() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Capabilities</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            The skills behind every experience.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Design systems, motion, and front-end craftsmanship combine to create modern wearable product experiences.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3 rounded-[32px] bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-slate-900">{skill.name}</p>
                <span className="text-sm font-semibold text-slate-500">{skill.value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-amber-400"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Skills
