import React, { useState } from "react";
import Board from "../components/Board";
import NewBoard from "../components/modal/NewBoard";
import '../styles/latoFont.css'

export default function Boards() {
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
      <main className="bg-white text-black w-full h-full flex flex-col items-center ">
        <div className="w-[90vw] text-[1.28em] text-star text-700 font-bold flex flex-row items-center mt-2 mb-3">
          <img
            className="w-[10vw] drop-shadow-md mr-3 "
            src="./trello.svg"
            alt="1"
          ></img>
          <h2 className="font-['Lato','sans-serif'] font-bold">Tablero</h2>
        </div>
        <NewBoard />
        {boards.map((board, index) => (
          <div className="m-3">
            <Board
              key={index}
              title={board.boardTitle}
              data={board.boardData}
              description={board.boardDescription}
            />
          </div>
        ))}
      </main>
    </>
  );
}
