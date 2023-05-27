import React from "react";
import { Link } from "react-router-dom";

const Education = (props) => {
  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="flex flex-col">
          <label htmlFor="">Título</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Institución</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Área de estudio</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Nivel de estudio</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
          </div>
        </div>
       
        <div className="flex flex-col">
          <label htmlFor="">Estado de estudio</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Año de inicio</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Año de finalización</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
          </div>
        </div>
        <div className="flex items-center justify-start">
          <input type="checkbox" className="w-[3vh] h-[6vh] " />
          <p htmlFor="" className=" ml-[2vh]">
            Actualmente asisto
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
              Agregar educación
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

export default Education;
