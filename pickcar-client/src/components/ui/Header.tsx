import React from 'react'

const Header = ({title, subtitle}:HeaderProps) => {
  return (
    <div className='m-5'>
      <h1 className="text-xl font-semibold font-michroma">{title}</h1>
      <p className="text-sm text-gray-500 font-michroma mt-1">{subtitle}</p>

    </div>
  )
}

export default Header
