import React from 'react'
import './styles/App.css'
import Landing from './views/Landing'
import {Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Boards from './views/Board'
import Login from './views/Login'
import { Footer } from './components/Footer'
import Registerpage from './views/RegisterPage'

function App() {
  return (
   <> 
   <Header/>
    <Routes>
      <Route element={<Landing/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Boards/>} path='/board'/>
      <Route element={<Registerpage/>} path='/register'/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
