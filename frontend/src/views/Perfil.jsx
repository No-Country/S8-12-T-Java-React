import { useState } from "react";
import Button from "../components/Button";
import CategoryPerfil from "../components/Perfil/CategoryPerfil";
import Certifications from "../components/Perfil/Certifications";
import Education from "../components/Perfil/Education";
import Experience from "../components/Perfil/Experience";
import Information from "../components/Perfil/Information";
import Knowledge from "../components/Perfil/Knowledge";
import Languages from "../components/Perfil/Languages";
import AddDeleted from "../components/Perfil/AddDeleted";
import profilePicture from "../assets/images/Photo.svg";
export default function Perfil() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleComponentToggle = (componentName) => {
    setActiveComponent(componentName === activeComponent ? "" : componentName);
  };

  return (
    <div className="px-4 w-full">
      <div className="flex justify-center my-8">
        <img className="w-40 h-40" src={profilePicture} alt="1"></img>
      </div>
      <div className="flex flex-col w-full gap-y-7 gap-x-2">
        <CategoryPerfil
          name={"Información personal"}
          onClick={() => handleComponentToggle("information")}
        />
        {activeComponent === "information" && <Information />}
        <CategoryPerfil
          name={"Educación"}
          onClick={() => handleComponentToggle("education")}
        />
        {activeComponent === "education" && <Education />}
        {/* {activeComponent === "education" && <AddDeleted name={"Agregar educación"}  />} */}

        <CategoryPerfil
          name={"Experiencia"}
          onClick={() => handleComponentToggle("experience")}
        />
        {activeComponent === "experience" && <Experience />}
        {/* {activeComponent === "experience" && <AddDeleted name={"Agregar experiencia"} />} */}

        <CategoryPerfil
          name={"Certificaciones"}
          onClick={() => handleComponentToggle("certifications")}
        />
        {activeComponent === "certifications" && <Certifications />}
        {/* {activeComponent === "certifications" && <AddDeleted name={"Agregar certificado"} />} */}

        <CategoryPerfil
          name={"Conocimientos"}
          onClick={() => handleComponentToggle("knowledge")}
        />
        {activeComponent === "knowledge" && <Knowledge />}
        {/* {activeComponent === "knowledge" && <AddDeleted name={"Agregar conocimientos"} />} */}

        <CategoryPerfil
          name={"Idiomas"}
          onClick={() => handleComponentToggle("languages")}
        />
        {activeComponent === "languages" && <Languages />}
        {/* {activeComponent === "languages" && <AddDeleted name={"Agregar idioma"} />} */}
      </div>
      <div className="flex justify-center mt-[3vh]"></div>
    </div>
  );
}
