import React from 'react'
import { Smile } from '../assets/icons/Icons'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <main className='w-[100vw] h-[100vh] bg-white text-center'>
    <div className='flex flex-col justify-center items-center font-["Lato","sans-serif"] gap-y-[1vh] mt-[10vh]'>
      <Smile CN={'h-[20vh]'}/>
      <div className='font-bold'>
      <p className='text-[4vh]'>404</p>
      <p>Página no encontrada</p>
      </div>
        <p className='w-10/12 md:w-1/6 font-normal'>La página que estás buscando no existe o ha ocurrido algún error. Intenta volver al inicio.</p>
        <Link to={'/'} className= "flex items-center justify-center w-[90vw] h-[5vh] md:w-[10vw] md:h-[4vh] bg-[#6D28D9] text-white font-normal rounded shadow-md focus:shadow-none hover:text-white mt-[3vh]"> Volver al inicio </Link>
      </div>
    </main>
  )
}
