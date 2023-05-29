import React, { useEffect, useState } from "react";

const EditBoard = (props) => {
  const [boardName2, setBoardName2] = useState('');


  const handleInputChange = (e) => {
    setBoardName2(e.target.value);
  };

 console.log(props)

  const handleModalClose = () => {
    setBoardName2('');
    props.onClose(); 
  };


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4 flex justify-center">Editar</h2>
        <h2 className="text-xl font-bold mb-4 flex justify-center">{props.title}</h2>
        <input
                type="text"
                value={boardName2}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#D4D4D8] mb-4 bg-[#F8F5F2;] shadow-lg"
                placeholder="Nombre"
              />
        <div className="flex justify-between">
                <button
                  onClick={handleModalClose}

                  className="bg-[#6D28D9] text-white px-6 py-2 rounded-md"
                >
                  Aceptar
                </button>
                <button
                  className="ml-2 px-6 py-2 rounded-md text-[#6D28D9] border-[#6D28D9] border br"
                  onClick={handleModalClose}
                >
                  Cancelar
                </button>
              </div>
              
      </div>
    </div>
  );
};

export default EditBoard;
