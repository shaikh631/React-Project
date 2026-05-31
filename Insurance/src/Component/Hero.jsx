import React from 'react'

function Hero() {
  return (
    <section id="home" className="pt-20 pb-24 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Protect What Matters Most
            </h1>
            <p className="text-xl text-blue-100">
              Get comprehensive insurance coverage with affordable premiums and instant claim processing. Your peace of mind is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                Get Quote Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold">500K+</p>
                <p className="text-blue-100">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">99%</p>
                <p className="text-blue-100">Claim Approval</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-blue-100">Support</p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl h-80 flex items-center justify-center">
                <svg className="w-48 h-48 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
