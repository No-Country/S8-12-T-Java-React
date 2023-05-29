import React, { useState } from 'react'
import { HamburgHeader } from '../assets/icons/Icons'
import '../styles/fontLogo.css'
import { MenuNotLogged } from './MenuNotLogged'


export const HeaderNotLogged = () => {
  const [render, setrender] = useState(false);
  return (
    <>
    <header className='bg-neutral-50 w-full h-[10vh] flex flex-row items-center justify-between drop-shadow-lg fixed z-10'>
        <h1 className='text-[1.25em] text-neutral-600 antialiased ml-[3vw]'>Career<span className='text-orange-600'>Watch</span></h1>
        <button onClick={()=>{setrender(!render)}} className='h-[2.8em] w-[2.8em] flex items-center justify-center mr-[5.5vw] border border-neutral-900 rounded-md '><HamburgHeader/></button>
    </header>
    {render ? <MenuNotLogged /> : null}
    
    <div className="h-[10vh]"/>
    </>
  )
}
