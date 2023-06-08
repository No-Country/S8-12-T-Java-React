import React, { useState } from "react";
import "../styles/inputLabel.css";
import "../styles/fontLogo.css";
import "../styles/latoFont.css";
import { Facebook, Google } from "../assets/icons/Icons";
import { Link } from "react-router-dom";
import api from "../api/Post";
import personIMG from "../assets/images/personIMG.svg";
import { TailSpin } from "react-loader-spinner";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [emailResult, setEmailResult] = useState({ color: "", ErrorText: "" });
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordResult, setPasswordResult] = useState({
    color: "",
    ErrorText: "",
  });
  const [inputError, setInputError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const Login = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/authenticate", {
        email: `${emailValue}`,
        password: `${passwordValue}`,
      });
      localStorage.setItem("USER_TOKEN", response.data.token);
      window.location.replace("/");
    } catch (error) {
      setIsLoading(false);
      setInputError(error.response.data.message[0]);
    }
  };

  function FormError() {
    if (emailValue === "" || inputError == "Error: Username not found") {
      event.preventDefault();
      setEmailResult({
        color: "#f02849",
        ErrorText: "El correo no esta registrado.",
      });
    } else {
      setEmailResult({
        color: "",
        ErrorText: "",
      });
    }
    if (passwordValue === "" || inputError === "Error: Invalid password") {
      event.preventDefault();
      setPasswordResult({
        color: "#f02849",
        ErrorText: "La contraseña es incorrecta.",
      });
    } else {
      event.preventDefault();
      Login();
    }
  }

  return (
    <>
      <div className="sm:w-full sm:h-[80vh] flex flex-col sm:justify-center sm:items-center">
        <div className="sm:bg-white mx-4 sm:m-0 sm:place-self-center flex flex-col justify-evenly h-[80vh] sm:shadow-lg sm:max-h-[637px] sm:border sm:rounded-lg sm:max-w-2xl sm:flex sm:flex-row">
          <img
            src={personIMG}
            className="hidden sm:block sm:h-full"
            alt="Persona con pc portátil"
          />
          <div className="h-full flex flex-col justify-evenly sm:px-4">
            <h1 className="text-4xl text-center text-neutral-600 font-normal antialiased">
              Career<span className="text-orange-600">Watch</span>
            </h1>

            <form
              className="grid grid-cols-1 gap-y-7  text-base sm:w-full"
              onSubmit={(e) => {
                FormError(e);
              }}
              action="/"
            >
              <div className="flex flex-col  gap-y-7">
                <div className="relative">
                  <div className="flex flex-row items-center self-center justify-between w-full gap-x-2">
                    <label
                      style={{ color: emailResult.color }}
                      className="font-normal"
                      htmlFor="user"
                    >
                      E-mail
                    </label>
                    <input
                      style={{ borderColor: emailResult.color }}
                      className="w-60 sm:w-[215px] py-2 pl-2 rounded border border-[#D4D4D8]"
                      type="text"
                      id="user"
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                  </div>
                  <span className="absolute text-xs font-bold flex top-10 -bottom-7 right-1 text-[#EF4444]">
                    {emailResult.ErrorText}
                  </span>
                </div>
                <div className="relative">
                  <div className="flex flex-row items-center self-center justify-between w-full gap-x-2">
                    <label
                      style={{ color: passwordResult.color }}
                      className="font-normal"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      style={{ borderColor: passwordResult.color }}
                      className="w-60 sm:w-[215px] py-2 pl-2 rounded border border-[#D4D4D8]"
                      type="password"
                      id="password"
                      onChange={(e) => setPasswordValue(e.target.value)}
                    />
                  </div>
                  <span className="absolute text-xs font-bold flex top-10 -bottom-7 right-1 text-[#EF4444]">
                    {passwordResult.ErrorText}
                  </span>
                </div>
              </div>
              <button
                className="w-full h-[5vh] min-h-[5vh] max-h-[6vh] self-center bg-[#6D28D9] text-white font-normal rounded"
                type="submit"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <TailSpin
                      type="TailSpin"
                      color="#FFF"
                      height={25}
                      width={25}
                    />
                  </div>
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </form>
            <div className="w-full flex flex-row self-center items-center justify-between">
              <div>
                <input
                  className="border-gray-400 rounded-lg"
                  type="checkbox"
                  id="remember"
                />
                <label htmlFor="remember">
                  <span className="ml-2 font-normal text-xs">
                    Recordar mi contraseña
                  </span>
                </label>
              </div>
              <p className="underline font-medium text-xs">
                Olvide mi contraseña
              </p>
            </div>
            <div className="flex flex-row items-center justify-center relative">
              <hr className="w-full border-gray-300" />
              <p className="text-center bg-[#F8F5F2] sm:bg-white p-2 absolute">
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
            <div className="w-full flex flex-row self-center gap-x-2">
              <p className="font-normal text-base">¿No tienes cuenta?</p>
              <Link
                to={"/register"}
                className="text-black underline font-bold text-base"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
