import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TailSpin } from "react-loader-spinner";
import { ContextToken } from '../../../context/Token'
import api from "../../../api/Post";

export const CreateModal = (props) => {
  const STAGE_ID = useParams();

    const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);
    const [stageName, setStageName] = useState('');
    const [isLoading,setIsLoading]= useState(false);
    const [error, seterror] = useState(false);


    const handleInputChange = (e) => {
        setStageName(e.target.value);
      };

      const CreateTablero = async () => {
        try {
            setIsLoading(true)
            seterror(false)
           await api.post(
            `/api/v1/stages`,
            {
              userId: DECODE_TOKEN,
              stageName: stageName,
            },{ headers: { 'Authorization': TOKEN } }
          );
          props.onClose();
          window.location.reload()

        } catch (error) {
            setIsLoading(false);
            seterror(true);
        }
      };
      
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
      <button></button>
      <h2 className="text-xl font-bold mb-4 flex justify-center">
        Nueva tabla
      </h2>
      <input
        type="text"
        value={stageName}
        onChange={handleInputChange}
        className="w-full p-2 border border-[#D4D4D8] mb-4 bg-[#F8F5F2;] shadow-lg"
        placeholder="Nombre"
      />
      <div className="flex justify-between">
        <button
          className="w-5/12 h-[5vh] flex justify-center items-center rounded-md bg-[#6D28D9] text-white "
          onClick={CreateTablero}
        >
        {isLoading? <TailSpin type="TailSpin" color="#ffffff" height={20} width={20} />:'Aceptar'}
        </button>
        <button
          onClick={()=>{props.onClose()}}
          className="w-5/12 h-[5vh] ml-2 flex justify-center items-center rounded-md text-[#6D28D9] border-[#6D28D9] border"
        >
          Cancelar
        </button>
      </div>
      {error ? <p className='text-[#f02849] mt-4'>Se requiere un nombre para crear la tabla</p> : null}
    </div>
  </div>
  )
}
