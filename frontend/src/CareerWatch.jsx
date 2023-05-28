import React from 'react'
import Logged from './views/Logged'
import NotLogged from './views/NotLogged'


export const CareerWatch = ()=> {
 const isLogged = localStorage.getItem('isLogged')
  return isLogged ? <Logged/> : <NotLogged/>
}
