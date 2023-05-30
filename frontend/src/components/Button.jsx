import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div className='w-auto h-auto'>
          <Link to={props.url} className='w-[90vw] h-[6vh] flex items-center justify-center bg-[#6D28D9] text-white font-normal rounded-lg drop-shadow-md
          '>{props.name}</Link>
    </div>
  )
}

export default Button