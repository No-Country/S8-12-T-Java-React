import React from "react";
import arrow from "../../assets/images/arrow.svg";

const CategoryPerfil = ({ name, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        className="relative z-10 flex items-center justify-start w-full h-10 bg-[#6D28D9] text-white font-normal rounded-md shadow-md"
        onClick={handleClick}
      >
        <span className="ml-5">{name}</span>
        <span className="flex-grow"></span>
        <img className="ml-2 mr-5 w-[3vh]" src={arrow} alt="1" />
      </button>
    </div>
  );
};

export default CategoryPerfil;
