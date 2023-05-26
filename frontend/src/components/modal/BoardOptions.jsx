import React, { useEffect, useState } from "react";
import Button from "../Button";

const BoardOptions = (props) => {
  const [boardName, setBoardName] = useState('');

 

  const handleModalClose = () => {
    setBoardName('');
    props.onClose(); 
  };


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4 flex justify-center">{props.title}</h2>
        
        <div className="flex-column">
          <button
            onClick={handleModalClose}
            className="bg-[#6D28D9] text-white w-full py-2 rounded-md"
          >
            Editar
          </button>
          <button
            onClick={handleModalClose}
            className="mt-3 w-full py-2 rounded-md text-[#6D28D9] border-[#6D28D9] border br"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardOptions;
