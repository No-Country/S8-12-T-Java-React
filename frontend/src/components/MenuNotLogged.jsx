import React, { useState } from "react";
import { XClose } from "../assets/icons/Icons";
import { Link } from "react-router-dom";


export const MenuNotLogged = ({isOpen,onClose}) => {
    const [active, setactive] = useState(true);
    
  return (
    <div style={{marginLeft: isOpen ? '0px' : '100%', transition:'margin-left 1s , background-color 3s',background:'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(5 5 5 / 63%) 100%)'}} className="fixed z-50 w-[100vw] h-[100vh] flex flex-col items-end">
      <div onClick={onClose} className=" w-[50vw] h-[100vh] left-0 absolute"/>
      <div className=" w-[50vw] h-[100vh] bg-white">
      <div className="flex flex-col items-end h-full w-auto gap-y-[4vh] mt-[2.6vh] mr-[5.5vw]">
        <button onClick={onClose} className="h-[2.8em] w-[2.8em] flex items-center justify-center border border-neutral-900 rounded-md">
          <XClose/>
        </button>
        <Link to={'/login'} className="w-2/5 h-[4.5%] flex items-center justify-center bg-[#6D28D9] text-white hover:text-white rounded font-['Lato','sans-serif'] font-normal">Login</Link>
        <Link to={'/register'} className="w-2/5 h-[4.5%] flex items-center justify-center border border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] rounded font-['Lato','sans-serif'] font-normal">Registro</Link>
        <Link to={'/'} onClick={()=>setactive(true)} className={`w-2/6 h-[4.5%] flex items-center justify-center ${active?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Inicio</Link>
        <Link to={'/'} onClick={()=>setactive(false)} className={`w-2/6 h-[4.5%] flex items-center justify-center ${active?null:'border-b-2'} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Contacto</Link>
      </div>
      </div>
    </div>
  );
};
