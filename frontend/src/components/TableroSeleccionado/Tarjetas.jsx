import React from "react";
import { ThreePoints } from "../../assets/icons/Icons";
import moment from "moment";

export const Tarjetas = (props) => {
  const fecha = moment(props.date, "YYYY/MM/DD").format("DD/MM/YYYY");

  return (
    <main className="select-none my-4 relative">
      <div className="flex flex-row justify-between bg-[#FFFFF] p-2 w-full text-black bg-white flex flex-col items-star rounded-lg border-2 border-#D4D4D8 shadow-lg mt-1 cursor-pointer">
        <div className="flex flex-row justify-between">
          <h2 className="text-md sm:text-base text-start font-['Lato','sans-serif'] font-bold capitalize">
            {props.title}
          </h2>
          <button className="place-self-center justify-self-end">
            <ThreePoints
              CN={"h-[0.7vh] md:h-[0.5vh] absolute top-2.5 right-3"}
            />
          </button>
        </div>
        <h2 className=" ml-3 text-start text-xs font-['Lato','sans-serif'] font-normal capitalize">
          {props.company}
        </h2>
        <h3 className="flex flex-col text-xs items-star mt-4 ml-3 font-['Lato','sans-serif'] font-normal">
          Creado el {fecha}
        </h3>
      </div>
    </main>
  );
};
