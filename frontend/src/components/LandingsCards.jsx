import React from "react";
import "../styles/latoFont.css";

export const LandingsCards = ({ img, title }) => {
  return (
    <div className="bg-neutral-50 flex flex-col items-center max-w-[80%] min-h-[28%] rounded-2xl shadow-md border border-neutral-300">
      <img className="max-w-[30%] p-[1vh]" src={img} alt={title} />
      <h2 className='p-[1vh] text-[1.1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>
        {title}
      </h2>
    </div>
  );
};
