import comprobado from "../assets/images/comprobado.svg";

export default function WelcomePage() {
  return (
    <div className="p-4 my-6 h-[50vh] flex flex-col justify-around content-center">
      <img className="h-40" src={comprobado} alt="Tilde de comprobado" />
      <p className="text-lg font-bold text-center">
        ¡Bienvenido a CareerWatch!
      </p>
      <p className="px-4 text-base text-center">
        Ya puedes ingresar a tu tablero y comenzar a organizarte para encontrar
        tu trabajo ideal.
      </p>
      <button className="shadow-md rounded bg-[#6D28D9] text-white h-10 w-full">
        Ir al tablero
      </button>
    </div>
  );
}
