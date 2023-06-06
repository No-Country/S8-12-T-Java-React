import  { useState } from "react";
import Button from "../Button";

const Information = () => {

  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleGeneroChange = (e) => {
    setGenero(e.target.value);
  };



  return (
    <div className="w-[90vw] mt-[2vh]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            className="w-[21vh] h-[6vh] mb-[2vh]"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
         
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            className="w-[22vh] h-[6vh] mb-[2vh]"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        
        </div>
          <div>

            <div className="flex flex-col">
            <label htmlFor="">Teléfono</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={email}
            onChange={(e) => setTelefono(e.target.value)}
            />
            </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          className="w-[44.5vh] h-[6vh] mb-[2vh]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="">País</label>
          <input
            type="text"
            className="w-[21vh] h-[6vh] mb-[2vh]"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
          <label htmlFor="">Ciudad</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Provincia</label>
          <input
            type="text"
            className="w-[22vh] h-[6vh] mb-[2vh]"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          />
        
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">LinkedIn / Behance / Portfolio</label>
        <input
          type="text"
          className="w-[44.5vh] h-[6vh] mb-[2vh]"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </div>
      <div>
      <Button name={"Guardar"} />
      </div>
    </div>
  );
};

export default Information;
