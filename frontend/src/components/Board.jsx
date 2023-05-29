import React from "react";

const Board = (props) => {
  console.log(props)
  return (
    <main className="bg-[#D9D9D9] w-[90vw] h-[17.5vh] text-black flex flex-col items-star">
      <h2 className="w-[90vw] text-[1.28em] text-start text-700 font-bold m-3">
        {props.title}
      </h2>
      <h2 className=" ml-3 text-start text-400">{props.description}</h2>
      <h3 className="flex flex-col items-star mt-2 ml-3">
        Creado hace {props.data} días
      </h3>
    </main>
  );
};

export default Board;
