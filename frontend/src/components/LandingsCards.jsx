import React from "react";
import "../styles/latoFont.css";

export const LandingsCards = ({ img, title }) => {
  return (
    <div className="bg-neutral-50 flex flex-col items-center justify-around w-full sm:justify-center sm:w-[191px] h-[150px] sm:h-[191px] rounded-2xl shadow-md border border-neutral-300">
      <img className="w-20 m-1" src={img} alt={title} />
      <h2 className='text-[1.1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
        {title}
      </h2>
    </div>
  );
};
