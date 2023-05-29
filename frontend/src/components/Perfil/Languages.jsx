import  { useState } from "react";

const Languages = () => {
  const [idioma, setIdioma] = useState("");
  const [nivel, setNivel] = useState("");
  const handleNivelChange = (e) => {
    setNivel(e.target.value);
  };


  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col">
            <label htmlFor="">Idioma</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={idioma}
              onChange={(e) => setIdioma(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Nivel</label>
            <select
              className="w-[22vh] h-[6vh] mb-[2vh]"
              value={nivel}
              onChange={handleNivelChange}
            >
              <option value=""></option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
