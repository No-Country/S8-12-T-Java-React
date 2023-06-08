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
    <section className="select-none m-3">
      <div
        className="bg-[#FFFFF] w-[90vw] h-[20.5vh] bg-white text-black flex flex-col items-star justify-between rounded-lg border-2 border-#D4D4D8 shadow-lg mt-1 cursor-pointer"
      >
      <div className="flex flex-row justify-between"
      >
        <h2 className="w-[90%] text-[1.5em] text-start font-['Lato','sans-serif'] font-bold mt-3 ml-3 ">
          {props.title}
        </h2>
        <button onClick={()=>{handleClick()}} className="p-[1vh] place-self-center mr-[4vw] lg:mr-[1.5vw]"><ThreePoints CN={'h-[0.7vh]'}/></button>
       </div> 
       <Link to={`/tablero/${props.id}`} className="w-full h-1/4 flex items-center justify-center bg-[#6D28D9] text-white font-['Lato','sans-serif'] font-normal rounded-b ">Ver tablero</Link>
      </div>
      {showModal && (
        <BoardOptions title={props.title} id={props.id} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default Board;
