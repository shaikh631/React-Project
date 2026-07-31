import React from 'react'
import { motion } from 'framer-motion'

const leftSide = [
  { name: "React", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uFqxampuhZaRIXd58OtXTr7I78BPzrcce1Qk-Xcgtg&s=10" },
  { name: "JavaScript", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsqjcWrN5_YSM-C9orDK_jIfs1ehDb26RiPjRnqq_wg&s=10" },
  { name: "Tailwind", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEqwmx7IwO7PDzEBWjO5BPOS_AuYhAakwJgv805tC0g&s=10" },
  { name: "Java", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCAVX8RDMkkoKBCeQScBKw-kuyhes3OZwTJD3ElX_lA&s=10" },
  { name: "Spring Boot", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0QAIlNKFDU-SL9MQVXEbPPjToEfVqLcrxsrLoQloyA&s=10" },
  { name: "Node.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT4P4beIoYq7dEfzx7cvz42q8DpD2H6TAN3RemsiwzA&s=10" },
  { name: "Express", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNdmxIqfM1ofL1sBhlVZIRgdJ75UKxm6VtflOA2pc4g&s=10" },
  { name: "MySQL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0D9o8duRVFERm1lPqKMi1HGHX6K9x87RmDGoMyssLgw&s=10" },
  { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cxgwkzgZl9Z7OFj04lWIEZJCD3QeGH_YhdVcjcRAoA&s=10" },
  { name: "C++", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYxdvELaDmXKCB_uoCsu1v-yNWqI1vzfQsFpFeGrBQw&s=10" },
];

const rightSide = [
  { name: "Python", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F4dmI5txw2qmR_FlmspoMGO4IuZcGNRodQJ7lfn6tw&s" },
  { name: "Pandas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIrVg0SJLVTziPAAHntjJxIAunJ4EMg0rc2uHTUbVeQ&s" },
  { name: "Git", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvehoM2_iPt4qNouydKrJl-Ey3BId49MCmGSMHAwZh7w&s=10" },
  { name: "GitHub", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7gME06ln7Wb6cFIZayFk9C00QkhyjQJr1Eqqj3N5_Q&s=10" },
  { name: "LeetCode", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnwscH-PeEaWCELqBTsEYyaLCcJJqJ_c0lRkaQlgJJA&s=10" },
  { name: "NeetCode", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3im3_pfTemcT1ZKd2utsNYUTXv0CxUoe6mkPSQ-5z4Q&s=10" },
  { name: "Docker", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdRENRlRdjk3dbZI4mMSlSmaY9RdZBdCR0bUCcbsGDg&s=10" },
  { name: "Postman", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrI6xf-OFVf55qqnjWJ0rXs6nVe8UgZaq5cDjV7nv8A&s=10" },
  { name: "Vercel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PvkWkVLCqboCdtR7riwvecyZR106RHjwERureJbjPQ&s=10" },
  { name: "Render", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpvyw1hTUVazYxkdcip4QmeNqx40bUR7RiogTY8NR5g&s=10" },
];

export default function Skills() {
  return (
    <section className="relative bg-[#fafafa] py-28 overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#ececec_1px,transparent_1px),linear-gradient(90deg,#ececec_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Technologies I Work With
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-20">
          Building scalable full-stack applications using modern technologies.
        </p>

        <div className="grid grid-cols-3 items-center">

          {/* LEFT */}
          <div className="grid grid-cols-2 gap-8">

            {leftSide.map((tech) => (
              <Card key={tech.name} tech={tech} />
            ))}

          </div>

          {/* CENTER */}

          <div className="flex justify-center">

            <div className="w-36 h-36 rounded-3xl bg-white shadow-xl flex items-center justify-center border">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCY1ov4zPHna_6-PfYALnbBaG4NSrTTIuaVEA8tlGmA&s=10"
                className="w-20"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-8">

            {rightSide.map((tech) => (
              <Card key={tech.name} tech={tech} />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

function Card({ tech }) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col items-center gap-4">

      <img
        src={tech.logo}
        className="w-14 h-14 object-contain"
      />

      <span className="font-semibold">
        {tech.name}
      </span>

    </div>
  );
}
 
