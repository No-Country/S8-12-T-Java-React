import { useState } from "react";

const Knowledge = () => {
  const [habilidades, setHabilidades] = useState("");

  return (
    <>
      <div className="grid grid-cols-1 gap-y-7 gap-x-2 text-base">
        <div className="col-span-2">
          <label htmlFor="">Habilidades / herramientas</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Knowledge;
