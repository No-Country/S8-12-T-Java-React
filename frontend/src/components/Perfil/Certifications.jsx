import { useState } from "react";


const Certifications = () => {
  const [titulo, setTitulo] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [mesInicio, setMesInicio] = useState("");
  const [mesFinalizacion, setMesFinalizacion] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");
  const [enCurso, setEnCurso] = useState(false);

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
          <label htmlFor="">Nombre de empresa emisora / institución</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Mes de inicio</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={mesInicio}
              onChange={(e) => setMesInicio(e.target.value)}
            />
            <label htmlFor="">Mes de finalización</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={mesFinalizacion}
              onChange={(e) => setMesFinalizacion(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Año de inicio</label>
            <input
              type="text"
              className="w-[22vh] h-[6vh] mb-[2vh]"
              value={anioInicio}
              onChange={(e) => setAnioInicio(e.target.value)}
            />
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
            checked={enCurso}
            onChange={(e) => setEnCurso(e.target.checked)}
          />
          <p htmlFor="" className=" ml-[2vh]">
            En curso
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Certifications;
