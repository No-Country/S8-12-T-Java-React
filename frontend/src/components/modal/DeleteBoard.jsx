import React, { useContext, useState } from "react";
import ConfirmationDeleted from "./ConfirmationDeleted";
import api from '../../api/Post';
import { ContextToken } from "../../context/Token";
import { TailSpin } from "react-loader-spinner";

const DeletedBoard = (props) => {
  const {TOKEN} = useContext(ContextToken);
  const [confirmationDeleted, setConfirmationDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleModalClose = () => {
    props.onClose();
  };
  const handleConfirmationDeleted =()=>{

    const DeleteTablero = async() =>{
      try{ 
         await api.delete(`/api/v1/stages/${props.id}`, {headers:{Authorization:TOKEN}})
  
      }catch(error){
        throw error.response;
      }
    } 
    DeleteTablero();
    setIsLoading(true);
    
    setTimeout(()=>{
      setConfirmationDeleted(true);
    },2000)
  
    
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
        <h2 className="text-xl font-bold  flex justify-center">¿Eliminar</h2>
        <h2 className="text-xl font-bold mb-4 flex justify-center">
          {props.title}?
        </h2>

        <div className="flex justify-between">
          <button className="bg-[#6D28D9] text-white px-6 py-2 rounded-md" onClick={handleConfirmationDeleted}>
          {isLoading ? (
        <TailSpin type="TailSpin" color="#ffffff" height={20} width={20} />
      ) : 
        'Aceptar'
      }
          </button>
          <button
            onClick={handleModalClose}
            className="ml-2 px-6 py-2 rounded-md text-[#6D28D9] border-[#6D28D9] border br"
          >
            Cancelar
          </button>
        </div>

        {confirmationDeleted && (
        <ConfirmationDeleted title={props.title} onClose={() => handleModalClose(false)}/>
      )}
      </div>
    </div>
  );
};

export default DeletedBoard;
