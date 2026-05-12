import React from 'react'

function Logo({ width = '100px', className = '', children = 'Logo' }) {
  return (
    <div style={{ width }} className={className}>
      {children}
    </div>
  )
}

export default Logo