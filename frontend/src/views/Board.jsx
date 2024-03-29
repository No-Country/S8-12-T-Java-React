import React, { useState, useContext, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import Board from "../components/Board";
import NewBoard from "../components/modal/NewBoard";
import "../styles/latoFont.css";
import { ContextToken } from "../context/Token";
import api from "../api/Post";
import trello from "../../src/assets/images/trello.svg";

export default function Boards() {
  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);

  const [Tableros, setTableros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}/stages`, {
        headers: { Authorization: TOKEN },
      });
      console.log(response.data);
      setTableros(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      throw error.response.data;
    }
  };
  useEffect(() => {
    GetTablero();
  }, []);

  return (
    <>
      <main className="text-black w-full flex flex-col items-center mt-[10%] sm:mt-[5%] mb-3 box-border">
        <div className="text-[1.15em] text-star text-700 font-bold flex flex-row items-center">
          <img className="w-5 drop-shadow-md mr-3 " src={trello} alt="1"></img>
          <h2 className="font-bold">Tableros</h2>
        </div>
        {Tableros.length <= 0 ? <NewBoard /> : null}
        <div className="h-[70vh]">
          {isLoading ? (
            <div className="h-[50vh] flex  items-center">
              <TailSpin
                type="TailSpin"
                color="#6D28D9"
                height={30}
                width={30}
              />
            </div>
          ) : Tableros.length ? (
            <Board
              key={Tableros[0].id}
              title={Tableros[0].stageName}
              id={Tableros[0].id}
              description={Tableros[0].boardDescription}
            />
          ) : (
            <div className="h-[55vh] flex justify-center items-center">
              <h2 className="font-bold">
                No creaste ningun tablero, hazlo con el boton de arriba
              </h2>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
