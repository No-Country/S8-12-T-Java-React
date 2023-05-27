import React from "react";
import { Link } from "react-router-dom";
import Board from "../components/Board";

export default function Boards() {
  const boardTitle = "Título del tablero";
  const boardData = "4";
  const boardDescription = "El trabajo de nuestras vida";

  const boards = [
    {
      boardTitle: "Titulo 1",
      boardData: "4",
      boardDescription: "El trabajo de nuestras vidas",
    },
    {
      boardTitle: "Titulo 2",
      boardData: "4",
      boardDescription: "El trabajo de nuestras vidas",
    },
    {
      boardTitle: "Titulo 3",
      boardData: "4",
      boardDescription: "El trabajo de nuestras vidas",
    },
    {
      boardTitle: "Titulo 4",
      boardData: "4",
      boardDescription: "El trabajo de nuestras vidas",
    },
    {
      boardTitle: "Titulo 5",
      boardData: "4",
      boardDescription: "El trabajo de nuestras vidas",
    },
  ];

  return (
    <>
      <main className="bg-white text-black w-full h-full flex flex-col items-center">
        <div className="w-[90vw] text-[1.28em] text-star text-700 font-bold flex flex-row items-center mt-3 mb-3">
          <img
            className="w-[10vw] drop-shadow-md mr-3 "
            src="./trello.svg"
            alt="1"
          ></img>
          <h2>Tablero</h2>
        </div>
          <button className="w-[90vw] h-[6vh] bg-[#6D28D9] text-white font-normal">
            Nuevo tablero
          </button>       
        {boards.map((board,index)=>(

          <div className="m-5">
            <Board
            key={index}
              title={board.boardTitle}
              data={board.boardDescription}
              description={board.boardDescription}
              />
          </div>
        ))}
      </main>
    </>
  );
}
