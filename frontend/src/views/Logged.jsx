import React from "react";
import Boards from "./Board";
import { Footer } from "../components/Footer";
import { HeaderLogged } from "../components/HeaderLogged";
import { NavLink, Route, Routes } from "react-router-dom";
import Perfil from "./Perfil";
import '../styles/menusButtons.css'
import { Arrow } from "../assets/icons/Icons";
import Error404 from "./Error404";


export default function Logged() {

  const responsize = window.innerWidth;

  function Responsive() {
    return responsize > 768 ? (
      <header className="w-[100vw] h-[8vh] gap-x-[18vw] flex items-center border-2">
        <h1 className='text-[1.25em] text-neutral-600 antialiased ml-[5vw]'>Career<span className='text-orange-600'>Watch</span></h1>
        <div className=" flex flex-row justify-center gap-x-[8vw]">
        <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "h-[35%] btnInactive" : isActive ? "h-[35%] btnActive" : "h-[35%] btnInactive"}>Empleos</NavLink>
        <NavLink to={'/curriculumn'} className={({ isActive, isPending }) => isPending ? "h-[35%] btnInactive items-center gap-x-2" : isActive ? "h-[35%] btnActive items-center gap-x-2" : "h-[35%] btnInactive items-center gap-x-2"}>Biblioteca <Arrow h={'1vh'} rotate={'0deg'}/></NavLink>
        <NavLink to={'/1'} className={({ isActive, isPending }) => isPending ? "h-[35%] btnInactive" : isActive ? "h-[35%] btnActive" : "h-[35%] btnInactive"}>Métricas</NavLink>
        <NavLink to={'/2'} className={({ isActive, isPending }) => isPending ? "h-[35%] btnInactive" : isActive ? "h-[35%] btnActive" : "h-[35%] btnInactive"}>Calendario</NavLink>
        </div>
      </header>
    ) : (
      <HeaderLogged />
    );
  }
  return (
    <>
      <Responsive />
      <Routes>
        <Route element={<Boards />} path="/" />
        <Route element={<Perfil />} path="/curriculumn"/>
        <Route element={<Error404 />} path="*" />
      </Routes>
      <Footer />
    </>
  );
}
