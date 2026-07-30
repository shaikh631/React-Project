import React from 'react'
import { motion } from 'framer-motion'
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
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl space-y-10"
      />
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="flex w-full lg:w-1/2 flex-col justify-center gap-6"
/>
  <p className="text-xs uppercase tracking-[0.36em] text-slate-500">
    FULL STACK DEVELOPER
  </p>

  <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
    Building modern web experiences with clean design.
  </h1>

  <p className="text-lg text-slate-600">
    I create responsive and interactive web applications
    using React, Java, Spring Boot and modern technologies.
  </p>

    </main>
  )
}

export default Projects
