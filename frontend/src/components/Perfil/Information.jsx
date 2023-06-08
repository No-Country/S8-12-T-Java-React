import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import api from "../../api/Post";
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
      const emailAccount = response.data.email;
      setNombre(fullName);
      setEmail(emailAccount);
      setTelefono(phone);
      setPais(location);
      setLinkedin(linkedin);
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

      const longitud = responseID.data.resumes.length;
      if (longitud != 0) {
        const idResumes = responseID.data.resumes[0].id;
        const response = await api.put(
          `/api/v1/resumes/${idResumes}`,
          {
            userId: DECODE_TOKEN,
            presentation: "Resume 1",
            resumeName: "Resume 1",
            profile: {
              fullName: nombre,
              email: email,
              phone: telefono,
              location: pais,
              imgResume: linkedin,
            },
          },
          { headers: { Authorization: TOKEN } }
        );
        console.log("Valor guardado:", response.data);
      }
      if (longitud == 0) {
        console.log("longitud 0");
        const response = await api.post(
          `/api/v1/resumes`,
          {
            userId: DECODE_TOKEN,
            presentation: "Resume 1",
            resumeName: "Resume1",
            profile: {
              fullName: nombre || "",
              email: email || "",
              phone: telefono || "",
              location: pais || "",
              imgResume: linkedin || "",
            },
          },

          { headers: { Authorization: TOKEN } }
        );
        console.log("Valor guardado:", response.data);
      }
    } catch (error) {
      console.error("Error al guardar el valor:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-y-7 gap-x-2 text-base">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder={nombre} // Mostrar el valor de la variable 'nombre' en el placeholder
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Teléfono</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={telefono}
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={email}
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">País</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </div>
        <div className="col-span-2 mb-4">
          <label htmlFor="">LinkedIn / Behance / Portfolio</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Button name={"Guardar"} onClick={handleGuardar} />
      </div>
    </div>
  );
};

export default Information;
