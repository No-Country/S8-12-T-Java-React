import React from "react";
import { Link } from "react-router-dom";
import "../styles/latoFont.css";

const Button = (props) => {
  return (
    <div className="w-auto h-auto">
      <Link
        to={props.url}
        className='w-[90vw] h-[6vh] flex items-center justify-center bg-[#6D28D9] text-white font-["Lato","sans-serif"] font-normal rounded-lg drop-shadow-md'
        onClick={props.onClick}
      >
        {props.name}
      </Link>
    </div>
  );
};

export default Button;
