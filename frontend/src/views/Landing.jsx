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
        <div className="h-[75vh] flex flex-col justify-between items-center my-[9vh]">
          <h2 className='w-[90vw] text-[1.15em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
            Lorem ipsum dolor sit amet
            <br />
            consectetur. Lacinia imperdiet
            <br />
            consectetur nunc a tortor quam.
          </h2>
          <h3 className='w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal'>
            Lorem ipsum dolor sit amet consectetur. Amet scelerisque sapien dui
            lorem. Eget cursus eget velit vestibulum eu. Interdum condimentum.
          </h3>
          <img
            className="h-1/3 drop-shadow-md"
            src={heroImage}
            alt="Personas subiendo escalera"
          ></img>
          <h2 className='w-[90vw] text-[1.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
            ¿Qué Ofrecemos?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-y-[3vh]">
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
