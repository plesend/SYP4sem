import React from 'react'

interface ButtonProps {
  onClick: () => void
  children: string
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="cute-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
