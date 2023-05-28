import React from 'react'
import Boards from './Board'
import { Footer } from '../components/Footer'
import { HeaderNotLogged } from '../components/HeaderNotLogged'
import { Route, Routes } from 'react-router-dom'


export default function Logged() {
  return (
    <>
        <HeaderNotLogged/>
        <Routes>
            <Route element={<Boards/>} path='/'/>
            <Route element={<Boards/>} path='*'/>
        </Routes>
        <Footer/>
    </>
  )
}
