import React from 'react'

function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  padding = 'px-4 py-2',
  borderRadius = 'rounded',
  hoverBg = 'hover:bg-blue-600',
  className = '',
  ...props
}) {
  const classes = `${padding} ${borderRadius} ${bgColor} ${textColor} ${hoverBg} ${className}`.trim();

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button