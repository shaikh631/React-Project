import React from 'react'
import { ShoppingBag, House, ChevronRight } from 'lucide-react'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed  z-30 w-full mt-2 bg-transparent backdrop-blur-md ">
      <nav className="flex w-full items-center justify-between gap-4 px-4 py-1 md:px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl  font-black tracking-tight bg-transparent text-slate-950">Portfolio</span>
            </div>
            {/* Adding color is requireed */}
              <ul className="hidden md:flex items-center px-4 py-2 rounded-2xl gap-8 text-sm font-semibold text-slate-700">
                <li className="border-r-2 px-3 ">
            <NavLink to="/">
            <button 
              type="button"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm transition hover:bg-slate-800"
              aria-label="Home"
            >
              <House className="h-5 w-5" strokeWidth={1.5} />
            </button>
            </NavLink>
            </li>
          {/* </div> */}
            <li >
              <NavLink to="/about" className="transition hover:text-slate-950">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="transition hover:text-slate-950">
              Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="transition hover:text-slate-950">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="transition hover:text-slate-950">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          {/* <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button> */}

          <Button className="inline-flex items-center gap-2 rounded-3xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
           <a
                href="/AyanResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
               Resume
                </a>
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </div>

      </nav>
    </header>
  )
}

export default Header