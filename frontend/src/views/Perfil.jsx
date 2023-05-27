import Button from "../components/Button";
import CategoryPerfil from "../components/Perfil/CategoryPerfil";
import Information from "../components/Perfil/Information";

export default function Perfil() {
  return (
    <>
      <div className="flex justify-center">
        <img
          className="w-[25vh] drop-shadow-xl  "
          src="../../public/Photo.svg"
          alt="1"
        ></img>
      </div>
      <div className="flex flex-col items-center">
        <CategoryPerfil name={"Información personal"} />
        <Information/>
        <CategoryPerfil name={"Educación"} />
        <CategoryPerfil name={"Experiencia"} />
        <CategoryPerfil name={"Certificaciones"} />
        <CategoryPerfil name={"Conocimientos"} />
        <CategoryPerfil name={"Idiomas"} />
        <CategoryPerfil name={"Contacto"} />
      </div>
      <div className="flex justify-center mt-[3vh]">
        <Button name={"Guardar"} />
      </div>
    </>
  );
}
