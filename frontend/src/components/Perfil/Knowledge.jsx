import React from "react";
import { Link } from "react-router-dom";

const Knowledge = (props) => {
  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="flex flex-col">
          <label htmlFor="">Habilidades / herramientas</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row">
            <img
              className="w-[3vh] drop-shadow-xl  "
              src="../../public/plus.svg"
              alt="1"
            ></img>
            <p htmlFor="" className="ml-4">
              Agregar Conocimientos
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

export default Knowledge;
