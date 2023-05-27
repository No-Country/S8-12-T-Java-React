import React from 'react'
import '../styles/fontLogo.css'
import '../styles/latoFont.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-300 w-full h-[20vh] flex flex-col items-center justify-evenly'>
        <Link to={'/'}><h1 className='text-[1.5em] text-neutral-600 antialiased ml-[3vw]'>Career<span className='text-orange-600'>Watch</span></h1></Link>
        <h2 className='w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>Realizado por el equipo S8-12-Java-React</h2>
    </footer>
  )
}
