import React, { useState,useContext, useEffect, useLayoutEffect } from "react";
import Board from "../components/Board";
import NewBoard from "../components/modal/NewBoard";
import '../styles/latoFont.css'
import { Link } from "react-router-dom";
import { ContextToken } from "../context/Token";
import api from "../api/Post";


export default function Boards() {
  const {TOKEN,DECODE_TOKEN} = useContext(ContextToken);
  
  const [Tableros, setTableros] = useState([]);

  const GetTablero = async() =>{
    try{ 
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}/stages`, {headers:{Authorization:TOKEN}})
      setTableros(response.data)
      console.log(response.data)

      
    }catch(error){
      throw error.response.data;
    }
  } 
  
  useEffect(() => {
    GetTablero()
  }, []);
 
  return (
    <>
      <main className="bg-white text-black w-full h-full flex flex-col items-center ">
        <div className="w-[90vw] text-[1.15em] text-star text-700 font-bold flex flex-row items-center mt-[10%] mb-3">
          <img
            className="w-[10vw] drop-shadow-md mr-3 "
            src="./trello.svg"
            alt="1"
          ></img>
          <h2 className="font-['Lato','sans-serif'] font-bold">Tablero</h2>
        </div>
        <NewBoard />
        {Tableros.map((e) => (
            <Board
              key={e.id}
              title={e.stageName}
              id={e.id}
              description={e.boardDescription}
              
            />
        ))}
      </main>
    </>
  );
}
