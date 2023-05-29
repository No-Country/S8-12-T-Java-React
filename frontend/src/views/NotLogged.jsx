import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Landing from './Landing'
import { HeaderNotLogged } from '../components/HeaderNotLogged'
import { Footer } from '../components/Footer'
import RegisterPage from './RegisterPage'


export default function NotLogged() {
  return (
    <>
    <HeaderNotLogged/>
    <Routes>
      <Route element={<Landing/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<RegisterPage/>} path='/register'/>
    </Routes>
    <Footer/>
    </>
  )
}
