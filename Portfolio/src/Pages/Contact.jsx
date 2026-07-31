import React from 'react'

function Contact() {
  return (
    <main className="min-h-screen px-4 py-12 lg:px-8" style={{ backgroundColor: '#E7E6E4' }}>
      <section className="mx-auto grid max-w-7xl gap-6 rounded-[36px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.36em] text-slate-500">CONTACT</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Let's Create Something Amazing Together.
          </h2>
          <p className="text-slate-700 leading-7 max-w-lg">
            I am Ayan Shaikh, a Full Stack Java Developer open for internships, freelance work, and collaborations. Feel free to reach out!
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="text-sm text-slate-600">as9251145@gmail.com</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <p className="text-sm font-semibold text-slate-900">Location</p>
              <p className="text-sm text-slate-600">Mumbai, India</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <p className="text-sm font-semibold text-slate-900">Availability</p>
              <p className="text-sm text-slate-600">Open to Opportunities</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <p className="text-sm font-semibold text-slate-900">Response Time</p>
              <p className="text-sm text-slate-600">Within 24 Hours</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 max-w-md">
            <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-gray-100">
             <a
                href="https://github.com/shaikh631"
                target="_blank"
                rel="noopener noreferrer"
                >
              GitHub
                </a>
            </button>
            <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-gray-100">
              <a href='https://leetcode.com/u/ayan_9819/' target='_blank' rel="noopener noreferrer">
              LeetCode
              </a>
            </button>
            <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-gray-100">
               <a href='https://www.linkedin.com/in/ayan-shaikh-60b271219/' target='_blank' rel="noopener noreferrer">
              Linkedin
              </a>
            </button>
          </div>
        </div>

        <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:p-10">
          <form className="space-y-6">
            <label className="block text-sm font-semibold text-slate-700">
              Subject
              <input
                type="text"
                className="mt-1 w-full rounded-2xl border border-[#D8D4CD] bg-[#F8F7F4] px-4 py-3 focus:border-black focus:ring-0"
                placeholder="Subject"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                className="mt-1 w-full rounded-2xl border border-[#D8D4CD] bg-[#F8F7F4] px-4 py-3 focus:border-black focus:ring-0"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                className="mt-1 w-full rounded-2xl border border-[#D8D4CD] bg-[#F8F7F4] px-4 py-3 focus:border-black focus:ring-0"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Message
              <textarea
                rows={6}
                className="mt-1 w-full rounded-2xl border border-[#D8D4CD] bg-[#F8F7F4] px-4 py-3 focus:border-black focus:ring-0"
                placeholder="Tell us about your project"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#2B2B2B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1F1F1F]"
            >
              Send Message
            </button>
            <p className="mt-2 text-center text-xs text-gray-500">
              I usually reply within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
