import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/latoFont.css";
import { LandingsCards } from "../components/LandingsCards";
import { QuoteLeft } from "../assets/icons/Icons";
import heroIMG from "../assets/images/heroIMG.svg";
import heroImage from "../assets/images/heroImage.svg";
import postulaciones from "../assets/images/Postulaciones.svg";
import bibliotecla from "../assets/images/Biblioteca.svg";
import metricas from "../assets/images/Metricas.svg";
import calendario from "../assets/images/Calendario.svg";
export default function Landing() {
  return (
    <>
      <div className="bg-neutral-100 text-black w-full flex flex-col justify-evenly items-center px-4 sm:px-10">
        <div className="h-[90vh] w-full flex flex-col justify-evenly items-center sm:flex-row-reverse">
          <div className="h-3/6 sm:h-3/4 sm:w-6/12">
            <img
              className="h-full drop-shadow-md mx-auto"
              src={heroIMG}
              alt="Persona con laptop"
            ></img>
          </div>
          <div className="w-11/12 flex flex-col justify-evenly sm:content-start sm:w-6/12 sm:mx-auto">
            <h2 className='my-2 w-full text-[1.25em] sm:text-[2.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold sm:text-left'>
              Controla tu camino hacia el éxito en un solo lugar.
            </h2>
            <h3 className='my-2 w-full text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal sm:text-left'>
              Organiza, destaca y progresa con nuestra completa solución.
            </h3>
            <Link to={"register"}>
              <button className='my-2 w-full h-10 bg-[#6D28D9] text-white font-["Lato","sans-serif"] font-normal rounded-lg shadow-lg sm:w-72'>
                Registrarse gratis
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[80vh] flex flex-col justify-evenly items-center sm:flex-row sm:justify-center">
          <div className="sm:w-1/4 sm:mx-8">
            <h2 className='w-full  text-[1.5em] sm:text-[1.75em] text-center sm:text-left text-neutral-900 font-["Lato","sans-serif"] font-bold py-2'>
              La clave del éxito profesional: Gestiona tu futuro con facilidad.
            </h2>

            <h3 className='w-full py-2 text-[0.95em] sm:text-lg text-center sm:text-left text-neutral-900 font-["Lato","sans-serif"] font-normal'>
              {`"Desbloquea el potencial de tu carrera y alcanza nuevas alturas con
            nuestra herramienta revolucionaria de gestión profesional. Organiza
            tus postulaciones, destaca tus logros, y mantén el control de tu
            futuro con facilidad. ¡No esperes más para alcanzar el éxito que
            mereces! Actúa ahora y lleva tu carrera al siguiente nivel."`}
            </h3>
          </div>

          <img
            className="w-full drop-shadow-md sm:w-1/4 sm:mx-8"
            src={heroImage}
            alt="Personas subiendo escalera"
          ></img>
        </div>

        <div className="flex flex-col items-center gap-y-[3vh]">
          <h2 className='w-full  text-[1.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
            ¿Qué Ofrecemos?
          </h2>
          <LandingsCards img={postulaciones} title={"Postulaciones"} />
          <LandingsCards img={bibliotecla} title={"Biblioteca"} />
          <LandingsCards img={metricas} title={"Métricas"} />
          <LandingsCards img={calendario} title={"Calendario"} />
        </div>
        <div className="h-[75vw] flex flex-col justify-between my-[9vh]">
          <h2 className='w-[90vw] text-[1.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
            Testimonios
          </h2>
          <QuoteLeft />
          <h2 className='max-w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
            Lorem ipsum dolor sit amet consectetur. Nunc nascetur facilisis
            vulputate diam enim leo. Egestas morbi libero pharetra massa
            dignissim est quisque porttitor consectetur. Id egestas volutpat
            vivamus varius ultrices viverra laoreet lorem. Id sed quam mauris
            et.
          </h2>
          <h3 className='w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal'>
            - Lorem Ipsum
          </h3>
        </div>
      </div>
    </>
  );
}
