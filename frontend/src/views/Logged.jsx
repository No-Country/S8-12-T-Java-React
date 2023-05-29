import React from "react";
import Boards from "./Board";
import { Footer } from "../components/Footer";
import { HeaderNotLogged } from "../components/HeaderNotLogged";
import { Route, Routes } from "react-router-dom";
import Perfil from "./Perfil";

export default function Logged() {
  return (
    <>
      <HeaderNotLogged />
      <Routes>
        <Route element={<Boards />} path="/" />
        <Route element={<Boards />} path="*" />
        <Route element={<Perfil />} path="/perfil" />
      </Routes>
      <Footer />
    </>
  );
}
