import React from "react";
import Boards from "./Board";
import { Footer } from "../components/Footer";
import { HeaderLogged } from '../components/HeaderLogged'
import { Route, Routes } from "react-router-dom";
import Perfil from "./Perfil";


export default function Logged() {
  return (
    <>
        <HeaderLogged/>
        <Routes>
            <Route element={<Boards/>} path='/'/>
            <Route element={<Boards/>} path='*'/>
            <Route element={<Perfil />} path="/curriculumn" />
        </Routes>
        <Footer/>
    </>
  );
}
