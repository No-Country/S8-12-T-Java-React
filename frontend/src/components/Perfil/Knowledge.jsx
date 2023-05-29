import  { useState } from "react";

const Knowledge = () => {
  const [habilidades, setHabilidades] = useState("");

  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="flex flex-col">
          <label htmlFor="">Habilidades / herramientas</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          />
        </div>

      
      </div>
    </>
  );
};

export default Knowledge;
