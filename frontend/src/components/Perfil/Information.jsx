import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import api from '../../api/Post'
import { ContextToken } from "../../context/Token";

const Information = () => {
  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);

  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}`, {
        headers: { Authorization: TOKEN },
      });
      const fullName = response.data.resumes[0].profile.fullName;
      const phone = response.data.resumes[0].profile.phone;
      const location = response.data.resumes[0].profile.location;
      const linkedin = response.data.resumes[0].profile.imgResume;
      const emailAccount = response.data.email
      setNombre(fullName); 
      setEmail(emailAccount)
      setTelefono(phone)
      setPais(location)
      setLinkedin(linkedin)
    } catch (error) {
      throw error.response.data;
    }
  };

  useEffect(() => {
    GetTablero();
  }, []);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleGuardar = async () => {

 
    try {
      const responseID = await api.get(`/api/v1/users/${DECODE_TOKEN}`, {
        headers: { Authorization: TOKEN },
      });
      const idResumes= responseID.data.resumes[0].id

    const response = await api.put(
      `/api/v1/profile/${idResumes}`,
      { 
        fullName: nombre,
        phone:telefono,
        location:pais,
        email:email,
        imgResume:linkedin
      },
      { headers: { Authorization: TOKEN } }
        );
      console.log("Valor guardado:", response.data);
    } catch (error) {
      console.error("Error al guardar el valor:", error);
    }
  };
  

  return (
    <div className="w-[90vw] mt-[2vh]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder={nombre} // Mostrar el valor de la variable 'nombre' en el placeholder
          />
        </div>
        <div className="flex flex-col">
          
        
        </div>
          <div>

            <div className="flex flex-col">
            <label htmlFor="">Teléfono</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={telefono}
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
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="">País</label>
          <input
            type="text"
            className="w-[90vw] h-[6vh] mb-[2vh]"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
         
        </div>
       
      </div>
      <div className="flex flex-col">
        <label htmlFor="">LinkedIn / Behance / Portfolio</label>
        <input
          type="text"
          className="w-[90vw] h-[6vh] mb-[2vh]"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </div>
      <div>
      <Button name={"Guardar"} onClick={handleGuardar} />
      </div>
    </div>
  );
};

export default Information;
