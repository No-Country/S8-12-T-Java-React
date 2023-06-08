import React from 'react'
import { ThreePoints } from '../../assets/icons/Icons'
import moment from 'moment'



export const Tarjetas = (props) => {
  const fecha = moment(props.date, 'YYYY/MM/DD').format('DD/MM/YYYY');
  
  return (
    <main  className="select-none my-4">
       <div className="bg-[#FFFFF] w-full h-[12vh] text-black bg-white flex flex-col items-star rounded-lg border-2 border-#D4D4D8 shadow-lg mt-1 cursor-pointer">
         <div className="flex flex-row justify-between">
           <h2 className="w-[90%] text-[110%] text-start font-['Lato','sans-serif'] font-bold mt-3 ml-3 capitalize">
             {props.title}
           </h2>
           <button className="place-self-center justify-self-end mr-[4vw] md:mr-[5%]">
             <ThreePoints CN={"h-[0.7vh] md:h-[0.5vh]"} />
           </button>
         </div>
         <h2 className=" ml-3 text-start text-[90%] font-['Lato','sans-serif'] font-normal capitalize">
           {props.company}
         </h2>
         <h3 className="flex flex-col text-[80%] items-star mt-4 ml-3 font-['Lato','sans-serif'] font-normal">
           Creado el {fecha}
         </h3>
       </div>
     </main>
  )
}
