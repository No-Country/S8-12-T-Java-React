import React, { useEffect, useState } from "react";
import { XClose } from "../assets/icons/Icons";
import { Link } from "react-router-dom";
import { Arrow } from "../assets/icons/Icons";
import '../styles/menusButtons.css'

export const MenuLogged = ({isOpen,onClose}) => {
    const [active, setactive] = useState(1);
    const [biblio, setbiblio] = useState(0);
    
    useEffect(() => {
      setbiblio(0)
    }, [active]);

    const Biblioteca = () =>{
      return(
        <div className="flex flex-col items-end gap-y-[4vh]">
           <Link to={'/'} onClick={()=>setbiblio(1)} className={`w-fit h-[4.469vh] flex items justify-end ${biblio===1?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Notas</Link>
           <Link to={'/curriculumn'} onClick={()=>setbiblio(2)} className={`w-fit h-[4.469vh] flex items justify-end ${biblio===2?'border-b-2':null} border-[#6D28D9] text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Currículumn</Link>
        </div>
      )
    }
    const Disconnect = () =>{
      setactive(6)
      localStorage.removeItem('USER_TOKEN');
      window.location.replace('/')
      onClose()
    

    }
    
  return (
    <div style={{marginLeft: isOpen ? '0px' : '100%', transition:'margin-left 1s , background-color 3s',background:'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(5 5 5 / 63%) 100%)'}} className="fixed z-50 w-[100vw] h-[100vh] flex flex-col items-end select-none">
      <div onClick={onClose} className=" w-[50vw] h-[100vh] left-0 absolute"/>
      <div className=" w-[50vw] h-[100vh] bg-white ">
      <div className="flex flex-col items-end h-full w-auto gap-y-[4vh] mt-[2.6vh] mr-[5.5vw]">
        <button onClick={onClose} className="h-[2.8em] w-[2.8em] flex items-center justify-center border border-neutral-900 rounded-md">
          <XClose/>
        </button>
        <Link to={'/'} onClick={()=>setactive(1)} className={`btnInactive ${active===1?'btnActive':null} font-['Lato','sans-serif'] font-normal`}>Tableros</Link>
        <Link to={'/'} onClick={()=>setactive(2)} className={`btnInactive ${active===2?'btnActive':null} font-['Lato','sans-serif'] font-normal`}>Empleos</Link>
        <p onClick={()=>setactive(3)} className={`w-fit h-[4.5%] gap-x-[2vw] flex items-center justify-end text-[#6D28D9] hover:text-[#6D28D9] font-['Lato','sans-serif'] font-normal`}>Biblioteca{active===3 ? <Arrow h={'1vh'} rotate={'180deg'}/>:<Arrow h={'1vh'} rotate={'0deg'}/>}</p>
        {active===3?<Biblioteca/>:null}
        <Link to={'/'} onClick={()=>setactive(4)} className={`btnInactive ${active===4?'btnActive':null} font-['Lato','sans-serif'] font-normal`}>Métricas</Link>
        <Link to={'/'} onClick={()=>setactive(5)} className={`btnInactive ${active===5?'btnActive':null} font-['Lato','sans-serif'] font-normal`}>Calendario</Link>
        <Link to={'/'} onClick={()=>Disconnect()} className={`btnInactive ${active===6?'btnActive':null} font-['Lato','sans-serif'] font-normal`}>Desconectarse</Link>
      </div>
      </div>
    </div>
  );
};
