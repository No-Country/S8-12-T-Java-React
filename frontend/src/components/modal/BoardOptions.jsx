import React, { useState } from "react";
import EditBoard from "./EditBoard";
import DeletedBoard from "./DeleteBoard";

const BoardOptions = (props) => {
  const [boardName, setBoardName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);

  const handleModalClose = () => {
    setBoardName("");
    props.onClose();
  };

  const handleEditClick = () => {
    setShowModal(true);
  };
  const handleDeleted = () => {
    setDeletedModal(true);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[328px] h-[323px] p-6 rounded-3xl flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4 flex justify-center">
          {props.title}
        </h2>

        <div className="flex-column">
          <button
            onClick={handleEditClick}
            className="bg-[#6D28D9] text-white w-full py-2 rounded-md"
          >
            Editar
          </button>
          <button
            onClick={handleDeleted}
            className="mt-3 w-full py-2 rounded-md text-[#6D28D9] border-[#6D28D9] border br"
          >
            Eliminar
          </button>
        </div>
      </div>

      {showModal && (
        <EditBoard
          title={props.title}
          id={props.id}
          onClose={() => handleModalClose(false)}
        />
      )}

      {deletedModal && (
        <DeletedBoard
          title={props.title}
          id={props.id}
          onClose={() => handleModalClose(false)}
        />
      )}
    </div>
  );
};

export default BoardOptions;
