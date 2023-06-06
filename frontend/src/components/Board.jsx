import React, { useState } from "react";
import BoardOptions from "./modal/BoardOptions";
import '../styles/latoFont.css'
import { ThreePoints } from "../assets/icons/Icons";
import { Link } from "react-router-dom";

const Board = (props) => {

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const handleClick = () => {
    setShowModal(true); // Al hacer clic, muestra el modal estableciendo el estado a true
  };

  return (
    <Link to={`/tablero/${props.id}`} className="select-none m-3">
      <div
        className="bg-[#FFFFF] w-[90vw] h-[20.5vh] text-black flex flex-col items-star rounded-lg border-2 border-#D4D4D8 shadow-lg mt-1 cursor-pointer"
      >
      <div className="flex flex-row justify-between"
      >
        <h2 className="w-[90%] text-[1.5em] text-start font-['Lato','sans-serif'] font-bold mt-3 ml-3 ">
          {props.title}
        </h2>
        <button onClick={(e)=>{handleClick()}} className="p-[1vh] place-self-center mr-[4vw] lg:mr-[1.5vw] z-50"><ThreePoints CN={'h-[0.7vh]'}/></button>
       </div> 
      </div>
      {showModal && (
        <BoardOptions title={props.title} onClose={() => setShowModal(false)} />
      )}
    </Link>
  );
};

export default Board;
