import React, { useState } from "react";
import { Plus } from "../../assets/icons/Icons";
import { CreateModal } from "./StageModals/CreateModal";

export const CreateStageButton = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  
  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className=" h-[5.5vh] bg-[#6D28D9] flex justify-center items-center fixed bottom-[5vh] right-[5vw] gap-x-[2vw] px-[2vw] rounded-md shadow-lg outline-none"
      >
        <p className="text-white">Crear tabla</p>
        <Plus color={"white"} h={"15"} />
      </button>
      {showModal && <CreateModal onClose={()=>{setShowModal(false)}}/>}
    </>
  );
};
