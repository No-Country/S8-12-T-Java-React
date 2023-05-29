import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/latoFont.css";
import { LandingsCards } from "../components/LandingsCards";
import { QuoteLeft } from "../assets/icons/Icons";
import heroIMG from "../../public/heroIMG.svg";
import heroImage from "../../public/heroImage.svg";
import postulaciones from "../../public/Postulaciones.svg";
import bibliotecla from "../../public/Biblioteca.svg";
import metricas from "../../public/Metricas.svg";
import calendario from "../../public/Calendario.svg";
export default function Landing() {
  return (
    <>
      <div className="bg-neutral-100 text-black w-full flex flex-col justify-evenly items-center">
        <div className="h-[90vh] mt-[4vh] flex flex-col justify-evenly items-center">
          <img
            className="h-1/3 drop-shadow-md"
            src={heroIMG}
            alt="Persona con laptop"
          ></img>
          <h2 className='w-[90vw] text-[1.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
            Lorem ipsum dolor sit amet
            <br />
            consectetur. Lacinia imperdiet
            <br />
            consectetur nunc a tortor quam.
          </h2>
          <h3 className='w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal'>
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Cras facilisi quam.
          </h3>
          <Link to={"register"}>
            <button className='w-[90vw] h-[6vh] bg-[#6D28D9] text-white font-["Lato","sans-serif"] font-normal rounded-lg'>
              Registrarse gratis
            </button>
          </Link>
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
