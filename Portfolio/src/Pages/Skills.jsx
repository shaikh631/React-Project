import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    title: 'Front-End',
    items: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Back-End',
    items: ['Java', 'Spring Boot', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'Vite', 'Postman', 'Figma'],
  },
]

export default function Skills() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 sm:px-10 lg:px-20">
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl rounded-[40px] border border-slate-200/70 bg-white/95 p-10 shadow-xl shadow-slate-200/60 backdrop-blur-xl"
      />
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.36em] text-slate-500">Skills</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            My Technical Expertise
          </h1>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            I build modern web applications with a focus on clean architecture, performance, and user experience. Here are the technologies I use regularly to turn ideas into production-ready products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="rounded-[32px] border border-slate-200/70 bg-slate-50 p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">{skill.title}</h2>
              <ul className="space-y-3 text-slate-700">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </main>
  )
}
