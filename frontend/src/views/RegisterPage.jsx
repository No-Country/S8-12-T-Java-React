import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import personIMG from "../assets/images/personIMG.svg";
import api from "../api/Post";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitData = async (data, e) => {
    try {
      // Llamar a la API para generar el token
      const response = await api.post("/auth/register", data);
      const token = response.data.token;
      localStorage.setItem("USER_TOKEN", token);
      window.location.replace("/welcome");
      console.log("Token:", token);
    } catch (error) {
      console.error("Error al generar el token:", error);
    }
    e.target.reset();
  };

  //validación de contraseña
  const password = watch("password");

  return (
    <div className="sm:w-full sm:h-[80vh] flex flex-col sm:justify-center sm:items-center">
      <div className="mx-4 sm:m-0 sm:place-self-center flex flex-col justify-evenly h-[80vh] sm:shadow-lg sm:max-h-[637px] sm:border sm:rounded-lg sm:max-w-2xl sm:flex sm:flex-row">
        <img
          src={personIMG}
          className="hidden sm:block sm:h-full"
          alt="Persona con pc portátil"
        />
        <div className="flex flex-col justify-center sm:px-4">
          <form
            className="grid grid-cols-2 gap-y-7 gap-x-2 text-base sm:w-full"
            onSubmit={handleSubmit(submitData)}
          >
            <h4 className="col-span-2 font-bold ">Crear cuenta</h4>

            {/* Input nombre */}
            <div className="col-span-1 relative">
              <input
                className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
                {...register("firstName", {
                  required: "Nombre requerido",
                  maxLength: 20,
                })}
                placeholder="Nombre"
              ></input>
              {errors.firstName && (
                <span className="absolute text-xs font-bold flex top-10 -bottom-7 right-1 text-[#EF4444]">
                  {errors?.firstName?.message}
                </span>
              )}
            </div>

            {/* Input apellido */}
            <div className="col-span-1 relative">
              <input
                className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
                {...register("lastName", {
                  required: "Apellido requerido",
                  maxLength: 20,
                })}
                placeholder="Apellido"
              />
              {errors.lastName && (
                <span className="absolute text-xs font-bold top-10 -bottom-7 right-1 text-[#EF4444]">
                  {errors?.lastName?.message}
                </span>
              )}
            </div>

            {/* Input email */}
            <div className="grid col-span-2 relative">
              <input
                className="col-span-2 p-2 rounded border border-[#D4D4D8]"
                {...register(
                  "email",
                  { required: "E-mail requerido" },
                  { pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" }
                )}
                placeholder="E-mail"
              />
              {errors.email && (
                <span className="absolute text-xs font-bold top-10 -bottom-7 right-1 text-[#EF4444]">
                  {errors?.email?.message}
                </span>
              )}
            </div>

            {/* Input contraseña */}
            <div className="grid col-span-2 relative">
              <input
                className="col-span-2 p-2 rounded border border-[#D4D4D8]"
                name="password"
                type="password"
                {...register("password", {
                  required: "Contraseña requerida",
                  minLength: {
                    value: 8,
                    message: "Contraseña: mínimo 8 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Contraseña: máximo 20 caracteres",
                  },
                })}
                placeholder="Contraseña"
              />
              {errors.password && (
                <span className="absolute text-xs font-bold top-10 -bottom-7 right-1 text-[#EF4444]">
                  {errors?.password?.message}
                </span>
              )}
            </div>

            {/* Input confirmar contraseña */}
            <div className="grid col-span-2 relative">
              <input
                className="col-span-2 p-2 rounded border border-[#D4D4D8]"
                name="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Contraseña requerida",
                  minLength: {
                    value: 8,
                    message: "Contraseña: mínimo 8 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Contraseña: máximo 20 caracteres",
                  },
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
                placeholder="Confirmar contraseña"
              />
              {errors.confirmPassword && (
                <span className="absolute text-xs font-bold top-10 -bottom-7 right-1 text-[#EF4444]">
                  {errors?.confirmPassword?.message}
                </span>
              )}
            </div>
            <button
              className="col-span-2 rounded bg-[#6D28D9] text-white h-10 shadow-md"
              type="submit"
              value="submit"
            >
              Crear cuenta
            </button>
          </form>
          <div className="my-4">
            <p>
              ¿Ya tienes cuenta?{" "}
              <Link to={"/login"}>
                <span className="font-bold underline text-[#232323]">
                  Inicia sesión
                </span>
              </Link>
            </p>
            <p>
              Al crear la cuenta aceptas nuestros{" "}
              <Link to={""}>
                <span className="font-bold underline text-[#232323]">
                  Términos y condiciones
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
