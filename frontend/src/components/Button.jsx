import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
          <Link to={props.url}><button className='w-[90vw] h-[6vh] bg-[#6D28D9] text-white font-normal rounded-lg drop-shadow-md
          '>{props.name}</button></Link>
    </div>
  )
}

export default Button