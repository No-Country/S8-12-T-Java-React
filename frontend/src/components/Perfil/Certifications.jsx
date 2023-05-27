import React from "react";
import { Link } from "react-router-dom";

const Certifications = (props) => {
  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="flex flex-col">
          <label htmlFor="">Título</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Nombre de empresa emisora / institución</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        
        <div className="grid grid-cols-2">
        <div className="flex flex-col">

            <label htmlFor="">Mes de inicio</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
            <label htmlFor="">Mes de finalizacion</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
          </div>
          <div className="flex flex-col">

            <label htmlFor="">Año de inicio</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
            <label htmlFor="">Año de finalizacion</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
          </div>
        </div>
        <div className="flex items-center justify-start">
          <input type="checkbox" className="w-[3vh] h-[6vh] " />
          <p htmlFor="" className=" ml-[2vh]">
          En curso
          </p>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row">
            <img
              className="w-[3vh] drop-shadow-xl  "
              src="../../public/plus.svg"
              alt="1"
            ></img>
            <p htmlFor="" className="ml-4">
              Agregar certificaión
            </p>
          </div>
          <div className="flex flex-row">
            <img
              className="w-[3vh] drop-shadow-xl  "
              src="../../public/trash.svg"
              alt="1"
            ></img>
            <p>Eliminar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
