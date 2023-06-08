import React from "react";
import { Link } from "react-router-dom";
import "../styles/latoFont.css";

const Button = (props) => {
  return (
    <Link
      to={props.url}
      className="col-span-2 rounded w-full bg-[#6D28D9] text-white h-10 shadow-md flex items-center justify-center"
      onClick={props.onClick}
    >
      {props.name}
    </Link>
  );
};

export default Button;
