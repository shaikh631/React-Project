import React from 'react'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Auto Insurance',
      description: 'Comprehensive coverage for your vehicle including collision, theft, and liability protection.',
      icon: '🚗',
      features: ['Collision Coverage', 'Theft Protection', 'Roadside Assistance']
    },
    {
      id: 2,
      title: 'Home Insurance',
      description: 'Protect your home and belongings against fire, theft, and natural disasters.',
      icon: '🏠',
      features: ['Property Coverage', 'Liability Protection', 'Personal Items']
    },
    {
      id: 3,
      title: 'Health Insurance',
      description: 'Medical coverage including hospital stays, doctor visits, and prescription medications.',
      icon: '⚕️',
      features: ['Hospital Coverage', 'Doctor Visits', 'Emergency Care']
    },
    {
      id: 4,
      title: 'Life Insurance',
      description: 'Financial security for your loved ones with competitive premiums and quick claim settlement.',
      icon: '💝',
      features: ['Term Plans', 'Whole Life', 'Family Protection']
    },
    {
      id: 5,
      title: 'Travel Insurance',
      description: 'Complete travel protection covering medical emergencies, flight cancellations, and luggage loss.',
      icon: '✈️',
      features: ['Medical Coverage', 'Trip Cancellation', 'Luggage Protection']
    },
    {
      id: 6,
      title: 'Business Insurance',
      description: 'Comprehensive coverage for small businesses and enterprises with customizable plans.',
      icon: '💼',
      features: ['Liability Coverage', 'Property Protection', 'Employee Benefits']
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Insurance Products</h2>
          <p className="section-subtitle">
            Choose from a wide range of insurance products designed to meet your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-outline w-full">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
