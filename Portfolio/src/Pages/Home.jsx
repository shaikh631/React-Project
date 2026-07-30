import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Button from '../Component/Button'
import { motion } from "framer-motion";

function Home() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setCoords({ x: event.clientX, y: event.clientY })
  }

  return (
    <main className="min-h-screen w-full  overflow-hidden text-slate-900 ">
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen overflow-hidden bg-transparent"
      >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
        duration: 1,
        ease: "easeOut",
       }}
       >
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 py-10 lg:px-20">
          <div className="w-full lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.38em] text-slate-500">Welcome</p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
              Hi, I'm Ayan Shaikh.
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
              <p className="font-semibold uppercase tracking-[0.3em] text-slate-800">
                Full Stack Developer • AI & ML Student
              </p>
              <p>
                Building modern web experiences with clean design and scalable technology.
              </p>
              <p>
                I create responsive, high-performance applications using React, Java, Spring Boot, and modern UI design.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="inline-flex items-center gap-2 rounded-3xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Resume
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
        </motion.div>
        <div className="absolute inset-y-10 right-40 hidden h-full lg:block lg:h-full lg:w-[50%]">
          {/* <img
            src="/demo.png"
            alt="Background"
            className="h-full w-full object-cover"
          /> */}
          <motion.img
          src="/demo.png"
          alt="Hand"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
          }}
           className="h-full w-full object-cover"
        />
        </div>
                <div className="absolute w-auto right-10 bottom-6 z-20 hidden rounded-[28px] border border-white/10 p-3 shadow-2xl backdrop-blur-xl text-black sm:block">
          <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-black">
            <span>Mouse</span>
            <span className="rounded-full bg-black px-2 py-1 font-semibold text-white">coords</span>
          </div>
          <div className="mt-3 grid gap-2 text-sm font-medium text-slate-100">
            <div className="flex items-center justify-between rounded-2xl bg-black px-3 py-2">
              <span>x-axis</span>
              <span>{coords.x}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-black px-3 py-2">
              <span>y-axis</span>
              <span>{coords.y}</span>
            </div>
          </div>
        </div>
        
      </section>
    </main>
    
  )
}

export default Home
