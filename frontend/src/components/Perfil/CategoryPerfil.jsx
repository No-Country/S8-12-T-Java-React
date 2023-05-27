import React from 'react'
import { Link } from 'react-router-dom'

const CategoryPerfil = (props) => {
  return (
    <div className="relative flex items-center">
    <Link>
      <button className="relative z-10 flex items-center justify-start w-[90vw] h-[6vh] bg-[#6D28D9] text-white font-normal rounded-md shadow-md mt-[3vh]">
        <span className="ml-5">{props.name}</span>
        <span className="flex-grow"></span>
        <img
          className="ml-2 mr-5 w-[3vh]"
          src="../../public/arrow.svg"
          alt="1"
        />
      </button>
    </Link>
  </div>

  
  
  )
}

export default CategoryPerfil