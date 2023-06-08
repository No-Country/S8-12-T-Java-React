import React, { useContext, useEffect, useState } from 'react'
import { StagesModal } from '../components/TableroSeleccionado/StagesModal'
import {CreateStageButton} from '../components/TableroSeleccionado/CreateStageButton'
import { TailSpin } from "react-loader-spinner";
import '../styles/latoFont.css';
import { ContextToken } from "../context/Token";
import api from "../api/Post";

export default function TableroSeleccionado() {
  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);
  const [Tableros, setTableros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}/stages`, {
        headers: { Authorization: TOKEN },
      });
      console.log(response.data)
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

  return (
    <main className='h-[100vh] flex flex-row gap-x-[4vw] ml-[4vw] overflow-x-scroll'>
    {isLoading ? (
          <div className="h-[50vh] flex justify-center items-center">
          <TailSpin type="TailSpin" color="#6D28D9" height={30} width={30} />
          </div>
        ) : Tableros.length ? (
          (Tableros.map((e)=>(<StagesModal key={e.id} title={e.stageName} id={e.id} />))
          )
        ) : (<div className="h-[55vh] flex justify-center items-center">
          <h2 className="font-['Lato','sans-serif'] font-bold">No creaste ningun tablero, hazlo con el boton de arriba</h2>
            </div>
        )}
    <CreateStageButton/>
    </main>
  )
}
