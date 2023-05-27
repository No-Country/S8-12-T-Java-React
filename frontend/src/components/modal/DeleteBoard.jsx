import React, { useEffect, useState } from "react";
import Button from "../Button";
import ConfirmationDeleted from "./ConfirmationDeleted";

const DeletedBoard = (props) => {
  const [confirmationDeleted, setConfirmationDeleted] = useState(false);
  
  const handleModalClose = () => {
    props.onClose();
  };
  const handleConfirmationDeleted =()=>{
    setConfirmationDeleted(true);
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
            Aceptar
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
