import React from 'react'
import Boards from './Board'
import { Footer } from '../components/Footer'
import { HeaderLogged } from '../components/HeaderLogged'
import { Route, Routes } from 'react-router-dom'



export default function Logged() {
  return (
    <>
        <HeaderLogged/>
        <Routes>
            <Route element={<Boards/>} path='/'/>
            <Route element={<Boards/>} path='*'/>
        </Routes>
        <Footer/>
    </>
  )
}
