import  { useState } from "react";


const Education = () => {
  const [titulo, setTitulo] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [areaEstudio, setAreaEstudio] = useState("");
  const [nivelEstudio, setNivelEstudio] = useState("");
  const [estadoEstudio, setEstadoEstudio] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");
  const [actualmenteAsisto, setActualmenteAsisto] = useState(false);

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
          <label htmlFor="">Institución</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={institucion}
            onChange={(e) => setInstitucion(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Área de estudio</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={areaEstudio}
              onChange={(e) => setAreaEstudio(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Nivel de estudio</label>
            <input
              type="text"
              className="w-[22vh] h-[6vh] mb-[2vh]"
              value={nivelEstudio}
              onChange={(e) => setNivelEstudio(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Estado de estudio</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={estadoEstudio}
            onChange={(e) => setEstadoEstudio(e.target.value)}
          />
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
            checked={actualmenteAsisto}
            onChange={(e) => setActualmenteAsisto(e.target.checked)}
          />
          <p htmlFor="" className=" ml-[2vh]">
            Actualmente asisto
          </p>
        </div>
        
       
      </div>
    </>
  );
};

export default Education;
