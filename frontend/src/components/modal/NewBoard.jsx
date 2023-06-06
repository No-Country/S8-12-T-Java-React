import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { ContextToken } from "../../context/Token";
import api from "../../api/Post";
import axios from "axios";


const NewBoard = () => {
  

  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);

  const [showModal, setShowModal] = useState(false);
  const [boardName, setBoardName] = useState("");

  const CreateTablero = async () => {
    try {
       await api.post(
        `/api/v1/stages`,
        {
          userId: DECODE_TOKEN,
          stageName: boardName,
        },{ headers: { 'Authorization': TOKEN } }
      );
      window.location.reload()
    } catch (error) {
      throw error.response.data;
    }
  };

  const handleInputChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setBoardName("");
  };

  const handleCreateBoard = () => {
    // Aquí puedes realizar la lógica para crear un nuevo tablero con el nombre proporcionado
    console.log("Creando nuevo tablero:", boardName);
    CreateTablero();

    // Cerrar el modal y limpiar el campo de entrada
    handleModalClose();
  };

  return (
    <>
      <button onClick={handleModalOpen}>
        {" "}
        <Button name={"Nuevo tablero"} />
      </button>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
            <button></button>
            <h2 className="text-xl font-bold mb-4 flex justify-center">
              Nuevo tablero
            </h2>
            <input
              type="text"
              value={boardName}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#D4D4D8] mb-4 bg-[#F8F5F2;] shadow-lg"
              placeholder="Nombre"
            />
            <div className="flex justify-between">
              <button
                onClick={handleCreateBoard}
                className="bg-[#6D28D9] text-white px-6 py-2 rounded-md"
              >
                Aceptar
              </button>
              <button
                onClick={handleModalClose}
                className="ml-2 px-6 py-2 rounded-md text-[#6D28D9] border-[#6D28D9] border br"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewBoard;
