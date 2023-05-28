import { useState } from "react";
import Button from "../components/Button";
import CategoryPerfil from "../components/Perfil/CategoryPerfil";
import Certifications from "../components/Perfil/Certifications";
import Education from "../components/Perfil/Education";
import Experience from "../components/Perfil/Experience";
import Information from "../components/Perfil/Information";
import Knowledge from "../components/Perfil/Knowledge";
import Languages from "../components/Perfil/Languages";

export default function Perfil() {
  const [showInformation, setShowInformation] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [showLanguajes, setShowLanguajes] = useState(false);

  const handleInformation = () => {
    setShowInformation(!showInformation);
  };
  const handleEducation = () => {Experience
    setShowEducation(!showEducation);
  };
  const handleExperience = () => {
    setShowExperience(!showExperience);
  };
  const handleCertifications = () => {
    setShowCertifications(!showCertifications);
  };
  const handleKnowledge = () => {
    setShowKnowledge(!showKnowledge);
  };
  const handleLanguajes = () => {
    setShowLanguajes(!showLanguajes);
  };
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
        <CategoryPerfil
          name={"Información personal"}
          onClick={handleInformation}
        />
        {showInformation && <Information />}
        <CategoryPerfil name={"Educación"} onClick={handleEducation} />
        {showEducation && <Education />}
        <CategoryPerfil name={"Experiencia"} onClick={handleExperience} />
        {showExperience && <Experience />}
        <CategoryPerfil name={"Certificaciones"} onClick={handleCertifications} />
        {showCertifications && <Certifications />}
        <CategoryPerfil name={"Conocimientos"} onClick={handleKnowledge} />
        {showKnowledge && <Knowledge />}
        <CategoryPerfil name={"Idiomas"} onClick={handleLanguajes} />
        {showLanguajes && <Languages />}
        <CategoryPerfil name={"Contacto"} />
      </div>
      <div className="flex justify-center mt-[3vh]">
        <Button name={"Guardar"} />
      </div>
    </>
  );
}
