import React from "react";
import { Link } from "react-router-dom";

const Information = (props) => {
  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col">
            <label htmlFor="">Nombre</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
            <label htmlFor="">Género</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" >
              Apellido
            </label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
            <label htmlFor="">Telefono</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">E-mail</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
        <div className="grid grid-cols-2">
        <div className="flex flex-col">

            <label htmlFor="">País</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
            <label htmlFor="">Ciudad</label>
            <input type="text" className="w-[21vh] h-[6vh] mb-[2vh]" />
          </div>
          <div className="flex flex-col">

            <label htmlFor="">Provincia</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
            <label htmlFor="">Código postal</label>
            <input type="text" className="w-[22vh] h-[6vh] mb-[2vh]" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">LinkedIn / Behance / Portfolio</label>
          <input type="text" className="w-[44.5vh] h-[6vh] mb-[2vh]" />
        </div>
      </div>
    </>
  );
};

export default Information;
