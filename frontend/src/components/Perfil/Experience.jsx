import  { useState } from "react";


const Experience = () => {
  const [titulo, setTitulo] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [tipoIndustria, setTipoIndustria] = useState("");
  const [areaTrabajo, setAreaTrabajo] = useState("");
  const [pais, setPais] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");
  const [actualmenteTrabajo, setActualmenteTrabajo] = useState(false);

  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="flex flex-col">
          <label htmlFor="">Título</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Nombre de empresa / Negocio</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Tipo de industria</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={tipoIndustria}
            onChange={(e) => setTipoIndustria(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Área de trabajo</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={areaTrabajo}
              onChange={(e) => setAreaTrabajo(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">País</label>
            <input
              type="text"
              className="w-[22vh] h-[6vh] mb-[2vh]"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Año de inicio</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={anioInicio}
              onChange={(e) => setAnioInicio(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Año de finalización</label>
            <input
              type="text"
              className="w-[22vh] h-[6vh] mb-[2vh]"
              value={anioFinalizacion}
              onChange={(e) => setAnioFinalizacion(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-start">
          <input
            type="checkbox"
            className="w-[3vh] h-[6vh] "
            checked={actualmenteTrabajo}
            onChange={(e) => setActualmenteTrabajo(e.target.checked)}
          />
          <p htmlFor="" className=" ml-[2vh]">
            Actualmente trabajo aquí
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
