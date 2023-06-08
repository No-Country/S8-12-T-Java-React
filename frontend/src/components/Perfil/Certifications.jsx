import { useState } from "react";

const Certifications = () => {
  const [titulo, setTitulo] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [mesInicio, setMesInicio] = useState("");
  const [mesFinalizacion, setMesFinalizacion] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");

  return (
    <>
      <div className="grid grid-cols-2 gap-y-7 gap-x-2 text-base">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Título</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={titulo}
            placeholder="No country"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Nombre de empresa emisora / institución</label>
          <input
            type="text"
            placeholder="No country"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
          />
        </div>

        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="">Mes de inicio</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={mesInicio}
            placeholder="02"
            onChange={(e) => setMesInicio(e.target.value)}
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="">Mes de finalización</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={mesFinalizacion}
            placeholder="           -"
            onChange={(e) => setMesFinalizacion(e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="">Año de inicio</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={anioInicio}
            placeholder="2023"
            onChange={(e) => setAnioInicio(e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="">Año de finalización</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={anioFinalizacion}
            placeholder="              -"
            onChange={(e) => setAnioFinalizacion(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Certifications;
