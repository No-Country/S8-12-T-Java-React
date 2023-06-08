import React, { useContext, useState } from 'react'
import { ContextToken } from "../../../context/Token";
import { TailSpin } from "react-loader-spinner";
import api from "../../../api/Post";

export const StageCreateModal = (props) => {

    const {TOKEN, DECODE_TOKEN } = useContext(ContextToken);
    const [boardName, setBoardName] = useState({position:"",description:"",applicationDate:"hoy",company:""});
    const [showModal, setShowModal] = useState(false);
    const [isLoading,setIsLoading]= useState(false);
    const [error, setError] = useState(false);

    const postApplications = async() =>{

        setIsLoading(true)
        try{
          const response = await api.post(`/api/v1/applications`,{userId:DECODE_TOKEN,stageId:props.id,position:boardName.position,company:boardName.company,description:boardName.description,applicationDate:boardName.applicationDate},{headers:{Authorization:TOKEN}})
          console.log(response.data)
          handleModalClose()
        }catch(error){
            setIsLoading(false)
            setError(true)
        }
      }

      const handleModalClose = () => {
        props.onClose()
        setShowModal(false);
        setBoardName({position:"",description:"",applicationDate:"",company:""});
      };

      
      const handleInputChange = (event) => {
        const {name, value } = event.target;
        setBoardName((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

  return (
    <>
    {setShowModal && (<div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div className="bg-white w-[328px] h-[415px] p-6 rounded-3xl font-['Lato','sans-serif']  flex flex-col justify-center">
      
      <h2 className="text-xl font-bold mb-4 flex justify-center">
        Nuevo postulacion
      </h2>
      <label className="font-normal" htmlFor='company'>Empresa</label>
      <input
        type="text"
        name='company'
        value={boardName.company}
        onChange={handleInputChange}
        className="w-full p-2 border border-[#D4D4D8] mb-4 bg-[#F8F5F2;] shadow-lg"
        placeholder="IBM"
      />
      <label className="font-normal" htmlFor='position'>Puesto</label>
      <input
        type="text"
        name='position'
        value={boardName.position}
        onChange={handleInputChange}
        className="w-full p-2 border border-[#D4D4D8] mb-4 bg-[#F8F5F2;] shadow-lg"
        placeholder="Desarrollador web"
      />
      <label className="font-normal" htmlFor='description'>Descripcion</label>
      <input
        type="text"
        name='description'
        value={boardName.description}
        onChange={handleInputChange}
        className="w-full p-2 border border-[#D4D4D8] mb-4 bg-[#F8F5F2;] shadow-lg"
      />
      {error && <p className='text-[#f02849] mb-3'>Porfavor, llena todos los campos.</p>}
      <div className="flex justify-between">
        <button
          onClick={postApplications}
          className="bg-[#6D28D9] text-white px-6 py-2 rounded-md"
        >
         {isLoading ? <TailSpin type="TailSpin" color="#ffffff" height={20} width={20} />:'Aceptar'}
        </button>
        <button
          onClick={handleModalClose}
          className="ml-2 px-6 py-2 rounded-md text-[#6D28D9] border-[#6D28D9] border br"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>) }
</>
  )
}
