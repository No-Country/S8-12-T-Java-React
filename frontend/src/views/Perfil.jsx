import Button from "../components/Button";
import CategoryPerfil from "../components/Perfil/CategoryPerfil";
import Certifications from "../components/Perfil/Certifications";
import Education from "../components/Perfil/Education";
import Experience from "../components/Perfil/Experience";
import Information from "../components/Perfil/Information";
import Knowledge from "../components/Perfil/Knowledge";
import Languages from "../components/Perfil/Languages";

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
        <Education/>
        <CategoryPerfil name={"Experiencia"} />
        <Experience/>
        <CategoryPerfil name={"Certificaciones"} />
        <Certifications/>
        <CategoryPerfil name={"Conocimientos"} />
        <Knowledge/>
        <CategoryPerfil name={"Idiomas"} />
        <Languages/>
        <CategoryPerfil name={"Contacto"} />
      </div>
      <div className="flex justify-center mt-[3vh]">
        <Button name={"Guardar"} />
      </div>
    </>
  );
}
