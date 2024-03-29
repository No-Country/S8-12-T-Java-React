import React from "react";
import Boards from "./Board";
import { Footer } from "../components/Footer";
import { HeaderLogged } from "../components/HeaderLogged";
import { NavLink, Route, Routes } from "react-router-dom";
import Perfil from "./Perfil";
import "../styles/menusButtons.css";
import { Arrow } from "../assets/icons/Icons";
import Error404 from "./Error404";
import WelcomePage from "./WelcomePage";
import TableroSeleccionado from "./TableroSeleccionado";
import { ContextTokenProvider } from "../context/Token";
import { Metricas } from "./metricas";

export default function Logged() {

  const responsize = window.innerWidth;

  const Disconnect = () =>{
    localStorage.removeItem('USER_TOKEN');
     window.location.replace('/')
   
  }

  function Responsive() {
    return responsize > 768 ? (
      <header className="h-[8vh] bg-white flex items-center justify-between border-b-2 select-none">
        <h1 className="text-[1.25em] text-neutral-600 antialiased ml-[8vw]">
          Career<span className="text-orange-600">Watch</span>
        </h1>
        <div className=" flex flex-row justify-center gap-x-[8vw] mr-[8vw]">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "h-[35%] btnInactive"
                : isActive
                ? "h-[35%] btnActive"
                : "h-[35%] btnInactive"
            }
          >
            Tableros
          </NavLink>
          <NavLink
            to={"/curriculumn"}
            className={({ isActive, isPending }) =>
              isPending
                ? "h-[35%] btnInactive items-center gap-x-2"
                : isActive
                ? "h-[35%] btnActive items-center gap-x-2"
                : "h-[35%] btnInactive items-center gap-x-2"
            }
          >
            Curriculumn
          </NavLink>
          <NavLink
            to={"/metricas"}
            className={({ isActive, isPending }) =>
              isPending
                ? "h-[35%] btnInactive"
                : isActive
                ? "h-[35%] btnActive"
                : "h-[35%] btnInactive"
            }
          >
            Métricas
          </NavLink>
          <NavLink onClick={()=>{Disconnect()}}
            
            className={({ isActive, isPending }) =>
              isPending
                ? "h-[35%] btnInactive"
                : isActive
                ? "h-[35%] btnInactive"
                : "h-[35%] btnInactive"
            }
          >
            Desconectar
          </NavLink>
        </div>
      </header>
    ) : (
      <HeaderLogged />
    );
  }
  return (
    <>
      <Responsive />
      <ContextTokenProvider>
        <Routes>
          <Route element={<Boards />} path="/" />
          <Route element={<TableroSeleccionado />} path="/tablero/:id" />
          <Route element={<Perfil />} path="/curriculumn" />
          <Route element={<Metricas />} path="/metricas" />
          <Route element={<Error404 />} path="*" />
          <Route element={<WelcomePage />} path="/welcome" />
        </Routes>
      </ContextTokenProvider>
      <Footer />
    </>
  );
}
