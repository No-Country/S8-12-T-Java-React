import comprobado from "../assets/images/comprobado.svg";

export default function WelcomePage() {
  return (
    <div className="p-4 my-6 sm:shadow-lg sm:bg-white sm:border sm:rounded-lg sm:max-h-96 sm:max-w-screen-sm h-[50vh] flex flex-col justify-around items-center content-center">
      <img className="h-40" src={comprobado} alt="Tilde de comprobado" />
      <p className="text-lg font-bold text-center">
        ¡Bienvenido a CareerWatch!
      </p>
      <p className="sm:w-9/12 px-4 text-base text-center">
        Ya puedes ingresar a tu tablero y comenzar a organizarte para encontrar
        tu trabajo ideal.
      </p>
      <button className="sm:w-3/12 shadow-md rounded bg-[#6D28D9] text-white h-10 w-full">
        Ir al tablero
      </button>
    </div>
  );
}
