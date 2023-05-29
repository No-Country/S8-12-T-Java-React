import React, { useState } from "react";
import { XClose } from "../assets/icons/Icons";
import { Link } from "react-router-dom";


export const MenuLogged = ({isOpen,onClose}) => {
    const [active, setactive] = useState(1);
    
  return (
    <div style={{marginLeft: isOpen ? '0px' : '100%', transition:'margin-left 1s , background-color 3s',background:'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(5 5 5 / 63%) 100%)'}} className="fixed z-50 w-[100vw] h-[100vh] flex flex-col items-end bg-[black/25]">
      <div className=" w-[50vw] h-[100vh] bg-white">
      <div className="flex flex-col items-end h-full w-auto gap-y-[4vh] mt-[2.6vh] mr-[5.5vw]">
        <button onClick={onClose} className="h-[2.8em] w-[2.8em] flex items-center justify-center border border-neutral-900 rounded-md">
          <XClose/>
        </button>
       
        <Link to={'/'} onClick={()=>setactive(1)} className={`w-fit h-[4.5%] flex items justify-end ${active===1?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Tableros</Link>
        <Link to={'/'} onClick={()=>setactive(2)} className={`w-fit h-[4.5%] flex items justify-end ${active===2?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Empleos</Link>
        <p className={`w-fit h-[4.5%] flex items justify-end text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Biblioteca</p>
        <Link to={'/'} onClick={()=>setactive(3)} className={`w-fit h-[4.5%] flex items justify-end ${active===3?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Métricas</Link>
        <Link to={'/'} onClick={()=>setactive(4)} className={`w-fit h-[4.5%] flex items justify-end ${active===4?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Calendario</Link>
        <Link to={'/'} onClick={()=>setactive(5)} className={`w-fit h-[4.5%] flex items justify-end ${active===5?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Desconectarse</Link>
      </div>
      </div>
    </div>
  );
};
