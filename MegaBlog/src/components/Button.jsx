import React, { Children } from 'react'

function Button({children ,
    type ="button",
    bgcolor = "bg-blue-500",
    textcolor = 'text-white',
    padding = "px-4 py-2",
    borderradius = "rounded",
    hoverbgcolor = "hover:bg-blue-600",
    className = '',
    ...props

}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${padding} ${borderradius} ${hoverbgcolor} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button