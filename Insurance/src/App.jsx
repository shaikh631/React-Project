import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Hero from './Component/Hero'
import Services from './Component/Services'
import About from './Component/About'
import Testimonials from './Component/Testimonials'
import Pricing from './Component/Pricing'
import Contact from './Component/Contact'
import Footer from './Fotter/Footer'

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
