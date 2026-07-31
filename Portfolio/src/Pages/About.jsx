import React from "react";

function About() {
  const metrics = [
    { title: "665+", subtitle: "LeetCode Problems" },
    { title: "50+", subtitle: "Projects Built" },
    { title: "React", subtitle: "Frontend" },
    { title: "Spring Boot", subtitle: "Backend" },
  ];

  return (
    <section
      className="py-24 text-slate-900"
      style={{ backgroundColor: '#E7E6E4' }}
    >
      <div className="w-full px-4 lg:px-6">
        <div className="grid min-h-screen gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Left Card */}
          <div className="relative h-[90vh] overflow-hidden rounded-[32px] bg-[#CFCBC4]">
            <img
              src="/my.png"
              alt="Ayan Shaikh"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
            <div className="absolute left-6 top-6 rounded-full bg-[#2B2B2B]/90 px-6 py-2 text-sm font-semibold tracking-widest text-white">
              AYAN
            </div>
            <div className="absolute right-6 top-6 flex space-x-3">
              <button
                aria-label="Home"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2B2B2B]/90 text-xl font-bold text-white shadow-lg transition hover:bg-black/90"
              >
                ⌂
              </button>
              <button
                aria-label="Menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2B2B2B]/90 text-xl font-bold text-white shadow-lg transition hover:bg-black/90"
              >
                ≡
              </button>
            </div>

            <div className="absolute bottom-10 left-1/2 w-[calc(100%-3rem)] max-w-md -translate-x-1/2 rounded-3xl bg-[#F5F4F2]/20 p-8 backdrop-blur-xl">
              <div className="mb-2 inline-block rounded-full bg-[#2B2B2B] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                Available for Internship
              </div>
              <h2 className="mb-1 text-3xl font-bold text-white">
                Full Stack Java Developer
              </h2>
              <p className="mb-6 text-sm font-medium text-white/90">
                AI & ML Student • React • Spring Boot • Node.js
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["665+ LeetCode", "50+ Projects", "React", "Java" , "DSA" , "Node.js"].map((stat) => (
                  <div
                    key={stat}
                    className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm"
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex h-[90vh] flex-col justify-between rounded-[32px] bg-[#F8F7F4] p-10 lg:p-14 text-slate-900">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 p-1 shadow-lg">
                <img
                  src="/Ayan.png"
                  alt="Ayan avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                ABOUT ME
              </p>
            </div>

            <h3 className="mt-8 text-2xl font-semibold leading-snug text-slate-900">
              Passionate about building scalable web applications that combine clean design, modern technologies, and real-world problem solving.
            </h3>

            <div className="mt-8 space-y-6 text-sm text-slate-700">
              <p>
                I am Ayan Shaikh, a B.Tech AIML student and a dedicated full-stack Java developer. I specialize in crafting clean, efficient, and scalable software solutions.
              </p>
              <p>
                Experienced in React, Tailwind CSS, Java, Spring Boot, Node.js, Express, and MySQL, I enjoy bridging frontend polish with backend robustness.
              </p>
              <p>
                Currently seeking internship opportunities to apply my skills and grow as a software engineer passionate about AI, machine learning, and modern web development.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-center">
              {metrics.map(({ title, subtitle }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#D6D2CB] bg-[#EFEDE9] p-6"
                >
                  <p className="text-3xl font-bold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{subtitle}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-[#2B2B2B] p-8 text-center text-slate-100">
              <h4 className="mb-3 text-xl font-semibold">
                Let's build something amazing together.
              </h4>
              <p className="mb-6 text-sm">
                Open to internships, freelance work, and exciting full-stack development opportunities.
              </p>
              <button className="inline-block rounded-md bg-[#E7E6E4] px-6 py-3 text-sm font-semibold text-[#2B2B2B] shadow-lg transition hover:bg-[#D9D5CE]">
               <a
                href="/AyanResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
