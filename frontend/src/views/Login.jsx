import React, { useState } from "react";
import "../styles/inputLabel.css";
import "../styles/fontLogo.css";
import "../styles/latoFont.css";
import { Facebook, Google } from "../assets/icons/Icons";
import { Navigate, useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [emailResult, setEmailResult] = useState({ color: "", ErrorText: "" });
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordResult, setPasswordResult] = useState({
    color: "",
    ErrorText: "",
  });

  function FormError() {
    if (emailValue == "") {
      event.preventDefault();
      setEmailResult({
        color: "#f02849",
        ErrorText:
          "El correo que ha introducido no esta vinculado con ninguna de nuestras cuentas.",
      });
    } else if (passwordValue == "") {
      event.preventDefault();
      setPasswordResult({
        color: "#f02849",
        ErrorText: "La contraseña que has introducido es incorrecta.",
      });
    } else {
      // event.preventDefault()
      return <Navigate to={"/"} />;
    }
  }

  return (
    <>
      <div className="w-full h-full bg-white text-neutral-900">
        <div className="h-[90vh] flex flex-col justify-evenly">
          <h1 className="text-[16vw] text-center text-neutral-600 font-normal antialiased mt-[3vh]">
            Career<span className="text-orange-600">Watch</span>
          </h1>
          <form
            className="flex flex-col gap-y-[2vh]"
            onSubmit={(e) => FormError(e)}
            
          >
            <div className="flex flex-col justify-around gap-y-[1vh]">
              <div className="flex flex-col gap-y-[1vh]">
                <div className=" flex flex-row items-center justify-between self-center w-[90%]">
                  <label
                    style={{ color: emailResult.color }}
                    className="font-[Lato,sans-serif] font-normal"
                    htmlFor="user"
                  >
                    E-mail
                  </label>
                  <input
                    style={{ borderColor: emailResult.color }}
                    className={`min-w-[75%] h-[6vh] min-h-[6vh] max-h-[8vh]`}
                    type="text"
                    id="user"
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
                <p className="w-[90vw] self-center text-[#f02849]">
                  {emailResult.ErrorText}
                </p>
              </div>
              <div className="flex flex-col gap-y-[1vh]">
                <div className=" flex flex-row items-center justify-between self-center w-[90%]">
                  <label
                    style={{ color: passwordResult.color }}
                    className="font-[Lato,sans-serif] font-normal"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    style={{ borderColor: passwordResult.color }}
                    className="min-w-[75%] h-[6vh] min-h-[6vh] max-h-[8vh]"
                    type="password"
                    id="password"
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                </div>
                <p className="w-[90vw] self-center text-[#f02849]">
                  {passwordResult.ErrorText}
                </p>
              </div>
            </div>
            <Link to={'/board'}><button 
              className="w-[90vw] h-[5vh] min-h-[5vh] max-h-[6vh] self-center bg-[#6D28D9] text-white font-normal rounded"
              type="submit"
            >
              Iniciar sesión
            </button></Link>
          </form>
          <div className="w-[90vw] flex flex-row self-center justify-between">
            <div>
              <input
                className="border-gray-400 rounded-lg"
                type="checkbox"
                id="remember"
              />
              <label
                className="font-[Lato,sans-serif] font-normal"
                htmlFor="remember"
              >
                {" "}
                Recordar mi contraseña
              </label>
            </div>
            <p className="underline font-[Lato,sans-serif] font-medium">
              Olvide mi contraseña
            </p>
          </div>
          <div className="flex flex-row items-center justify-center relative">
            <hr className="w-[90%] border-gray-300" />
            <p className="w-[25%] text-center bg-white absolute">
              o inicia con
            </p>
          </div>
          <div className="flex flex-row justify-center gap-[5vw]">
            <button className="h-[5vh] w-[5vh] rounded-full flex items-center justify-center shadow-lg">
              <Google h={"h-[3.5vh]"} />
            </button>
            <button className="h-[5vh] w-[5vh] bg-[#3B5998] rounded-full flex items-center justify-center shadow-lg">
              <Facebook h={"h-[3.5vh]"} />
            </button>
          </div>
          <div className="w-[90vw] flex flex-row self-center ">
            <p className="font-[Lato,sans-serif] font-normal">
              ¿No tienes cuenta?
            </p>
            <Link to={'/register'} className="text-black ml-[3vw] underline font-[Lato,sans-serif] font-bold">Registrarse</Link>
          </div>
        </div>
      </div>
    </>
  );
}
