import React, { useContext, useEffect, useState } from 'react'
import { Tarjetas } from './Tarjetas';
import { ContextToken } from "../../context/Token";
import api from "../../api/Post";
import { StageButtonModal } from './StageModals/StageButtonModal';
import trello from '../../assets/images/trello.svg'

export const StagesModal = (props) => {
  const {TOKEN, DECODE_TOKEN } = useContext(ContextToken);
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getApplications = async() =>{
    try{
      const response = await api.get(`/api/v1/applications/APPLY_ID`)
      setApplications( response.data )
    }catch(error){
      throw error.message
    }
  }
  useEffect(() => {
    getApplications()
  }, []);

 return (
   <div className="bg-white text-black w-[98vw] h-[100vh] flex flex-col items-center gap-y-[1.5vh]">
     <div className="w-[90vw] text-[1.15em] text-star text-700 font-bold flex flex-row items-center mt-[5vh] mb-3">
       <img className="w-[10vw] mr-3" src={trello} alt="1"></img>
       <h2 className="font-['Lato','sans-serif'] font-bold">{props.title}</h2>
     </div>
     <StageButtonModal id = {props.id}/>
     <div>
      <Tarjetas/>
     </div>
   </div>
 );
}
