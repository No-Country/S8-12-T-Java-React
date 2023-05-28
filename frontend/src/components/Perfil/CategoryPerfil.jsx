import React from "react";

const CategoryPerfil = ({ name, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        className="relative z-10 flex items-center justify-start w-[90vw] h-[6vh] bg-[#6D28D9] text-white font-normal rounded-md shadow-md mt-[3vh]"
        onClick={handleClick}
      >
        <span className="ml-5">{name}</span>
        <span className="flex-grow"></span>
        <img
          className="ml-2 mr-5 w-[3vh]"
          src="../../public/arrow.svg"
          alt="1"
        />
      </button>
    </div>
  );
};

export default CategoryPerfil;
