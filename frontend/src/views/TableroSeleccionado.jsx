import React, { useContext, useEffect, useState } from 'react'
import { StagesModal } from '../components/TableroSeleccionado/StagesModal'
import {CreateStageButton} from '../components/TableroSeleccionado/CreateStageButton'
import { TailSpin } from "react-loader-spinner";
import '../styles/latoFont.css';
import { ContextToken } from "../context/Token";
import api from "../api/Post";
import {DragDropContext} from 'react-beautiful-dnd'


export default function TableroSeleccionado() {
  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);
  const [Tableros, setTableros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}/stages`, {
        headers: { Authorization: TOKEN },
      });
      setTableros(response.data);
      setTimeout(()=>{
        setIsLoading(false)
    },1000)
    } catch (error) {
      throw error.response.data;
    }
  };
  useEffect(() => {
    GetTablero();
  }, []);


  const GuardadoDeDrop = (e) =>{
    const aplication = e.draggableId;
    const toStage = e.destination.droppableId;

    const setApplicationState = async() =>{
      
      try{
        const response = await api.put(`/api/v1/applications/${aplication}/toStage/${toStage}`,{},{headers:{Authorization:TOKEN}})
        window.location.reload()
      }catch(error){
        throw error.message
      }
    }
    setApplicationState()
    
  }
  
  return (
    
    <main className='h-[100vh] w-[90vw] flex flex-row gap-x-[4vw] ml-[4vw] overflow-x-scroll'>
    <DragDropContext onDragEnd={(e)=>{GuardadoDeDrop(e);}}>
    {isLoading ? (
          <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <TailSpin type="TailSpin" color="#6D28D9" height={80} width={80} />
          </div>
        ) : Tableros.length ? (
          (Tableros.map((e)=>(<StagesModal key={e.id} title={e.stageName} id={e.id} />))
          )
        ) : (<div className="h-[55vh] flex justify-center items-center">
          <h2 className="font-['Lato','sans-serif'] font-bold">No creaste ningun tablero, hazlo con el boton de arriba</h2>
            </div>
        )}
      </DragDropContext>  
    <CreateStageButton/>
    </main>
    
  )
}
