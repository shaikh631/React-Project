import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IC</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">InsureCare</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="btn-outline">Sign In</button>
          <button className="btn-primary">Get Quote</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1.5"
        >
          <span className={`w-6 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Services</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium py-2">About</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Testimonials</a>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Pricing</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Contact</a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <button className="btn-outline w-full">Sign In</button>
              <button className="btn-primary w-full">Get Quote</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header