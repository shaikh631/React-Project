import React from 'react'

function Logo({ width = '100px', className = '', children =   <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>MegaBlog</span> }) {
  return (
    <div style={{ width }} className={className}>
      {children}
    </div>
  )
}

export default Logo