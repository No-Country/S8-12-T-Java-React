import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import api from "../../api/Post";
import { ContextToken } from "../../context/Token";

const Experience = () => {
  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);
  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}`, {
        headers: { Authorization: TOKEN },
      });
      const title = response.data.resumes[0].experiences[0].title;
      const company = response.data.resumes[0].experiences[0].company;
      const dateStart = response.data.resumes[0].experiences[0].dateStart;
      const dateEnd = response.data.resumes[0].experiences[0].dateEnd;
      const areatrabajo = response.data.resumes[0].experiences[0].description;

      setTitulo(title);
      setNombreEmpresa(company);
      setAnioInicio(dateStart);
      setAnioFinalizacion(dateEnd);
      setAreaTrabajo(areatrabajo);
    } catch (error) {
      console.log("soy error");
      console.log(error);
      throw error.response.data;
    }
  };

  useEffect(() => {
    GetTablero();
  }, []);

  const handleGuardar = async () => {
    try {
      const responseID = await api.get(`/api/v1/users/${DECODE_TOKEN}`, {
        headers: { Authorization: TOKEN },
      });

      const idResumes = responseID.data.resumes[0].id;

      if (responseID.data.resumes[0].experiences.length === 0) {
        // Perform POST request if experiences length is 0
        const response = await api.post(
          `/api/v1/experiences`,
          {
            resumeId: idResumes,
            title: titulo,
            company: nombreEmpresa,
            dateStart: anioInicio,
            dateEnd: anioFinalizacion,
            description: areaTrabajo,
          },
          { headers: { Authorization: TOKEN } }
        );
        console.log("Valor guardado:", response.data);
      } else {
        // Perform PUT request if experiences length is not 0
        const idExperience = responseID.data.resumes[0].experiences[0].id;
        const response = await api.put(
          `/api/v1/experiences/${idExperience}`,
          {
            resumeId: idResumes,
            title: titulo,
            company: nombreEmpresa,
            dateStart: anioInicio,
            dateEnd: anioFinalizacion,
            description: areaTrabajo,
          },
          { headers: { Authorization: TOKEN } }
        );
        console.log("Valor guardado:", response.data);
      }
    } catch (error) {
      console.log(error);
      console.error("Error al guardar el valor:", error);
    }
  };

  const [titulo, setTitulo] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [areaTrabajo, setAreaTrabajo] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");

  return (
    <>
      <div className="grid grid-cols-2 mb-4 gap-y-7 gap-x-2 text-base">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Título</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Nombre de empresa / Negocio</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="">Área de trabajo</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={areaTrabajo}
            onChange={(e) => setAreaTrabajo(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="">Año de inicio</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={anioInicio}
            onChange={(e) => setAnioInicio(e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="">Año de finalización</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={anioFinalizacion}
            onChange={(e) => setAnioFinalizacion(e.target.value)}
          />
        </div>

        <Button onClick={handleGuardar} name={"Guardar"} />
      </div>
    </>
  );
};

export default Experience;
