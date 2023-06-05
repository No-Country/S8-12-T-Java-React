import React from 'react'
import { Postulados } from '../components/TableroSeleccionado/Postulados'
import { Ofertas } from '../components/TableroSeleccionado/Ofertas'
import { Deseados } from '../components/TableroSeleccionado/Deseados'
import {Entrevista} from '../components/TableroSeleccionado/Entrevista'
import {EntrevistaTecnica} from '../components/TableroSeleccionado/EntrevistaTecnica'
import { Rechazados } from '../components/TableroSeleccionado/Rechazados'
import '../styles/latoFont.css'


export default function TableroSeleccionado() {
  return (
    <main className='h-[100vh] flex flex-row gap-x-[4vw] ml-[4vw] overflow-x-scroll'>
    <Deseados/>
    <Postulados/>
    <Entrevista/>
    <EntrevistaTecnica/>
    <Ofertas/>
    <Rechazados/>
        
    </main>
  )
}
