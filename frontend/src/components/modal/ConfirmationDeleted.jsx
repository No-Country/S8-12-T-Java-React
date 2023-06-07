import React, { useEffect, useState } from "react";
import Button from "../Button";

const ConfirmationDeleted = (props) => {
  const [boardName, setBoardName] = useState('');

 

  const handleModalClose = () => {
    setBoardName('');
    props.onClose(); 
    window.location.reload()
  };


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
        <h2 className="text-xl font-bold  flex justify-center">{props.title}</h2>
        <h2 className="text-xl font-bold mb-4 flex justify-center">ha sido eliminado.</h2>
       
        <div className="flex justify-between">
                <button
                  className="bg-[#6D28D9] text-white w-full py-2 rounded-md"
                   onClick={handleModalClose}
                >
                  Continuar
                </button>
               
              </div>
      </div>
    </div>
  );
};

export default ConfirmationDeleted;
