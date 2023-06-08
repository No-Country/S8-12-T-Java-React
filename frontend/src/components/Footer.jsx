import React from "react";
import "../styles/fontLogo.css";
import "../styles/latoFont.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-300 w-full h-[10vh] flex flex-col items-center text-center justify-evenly">
      <Link to={"/"}>
        <h1 className="text-[1.5em] text-neutral-600 antialiased">
          Career<span className="text-orange-600">Watch</span>
        </h1>
      </Link>
      <div className="w-full flex justify-center gap-x-3">
        <a
          href="https://github.com/No-Country/S8-12-T-Java-React"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1em] text-center text-neutral-900 font-bold"
        >
          Equipo S8-12-Java-React
        </a>
        <a
          href="https://www.nocountry.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1em] text-center text-neutral-900 font-bold"
        >
          #No Country
        </a>
      </div>
    </footer>
  );
};
