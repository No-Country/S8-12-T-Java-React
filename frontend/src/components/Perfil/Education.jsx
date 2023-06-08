import { useContext, useEffect, useState } from "react";
import { ContextToken } from "../../context/Token";
import api from "../../api/Post";
import Button from "../Button";

const Education = () => {
  const [titulo, setTitulo] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [areaEstudio, setAreaEstudio] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");

  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);

  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}`, {
        headers: { Authorization: TOKEN },
      });
      const title = response.data.resumes[0].educations[0].title;
      const institution = response.data.resumes[0].educations[0].institution;
      const dateStart = response.data.resumes[0].educations[0].dateStart;
      const dateEnd = response.data.resumes[0].educations[0].dateEnd;
      const areaEstudio = response.data.resumes[0].educations[0].description;
      setTitulo(title);
      setInstitucion(institution);
      setAnioInicio(dateStart);
      setAnioFinalizacion(dateEnd);
      setAreaEstudio(areaEstudio);
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
      console.log(idResumes);
      if (responseID.data.resumes[0].educations.length === 0) {
        // Perform POST request if educations length is 0
        const response = await api.post(
          `/api/v1/educations/${idResumes}`,
          {
            resumeId: idResumes,
            title: titulo,
            institution: institucion,
            dateStart: anioInicio,
            dateEnd: anioFinalizacion,
            description: areaEstudio,
          },
          { headers: { Authorization: TOKEN } }
        );
        console.log("Valor guardado:", response.data);
      } else {
        const idEducations = responseID.data.resumes[0].educations[0].id;
        const idResumes = responseID.data.resumes[0].id;
        console.log(idResumes);
        const response = await api.put(
          `/api/v1/educations/${idEducations}`,
          {
            resumeId: idResumes || " ",
            title: titulo || " ",
            institution: institucion || " ",
            dateStart: anioInicio || " ",
            dateEnd: anioFinalizacion || " ",
            description: areaEstudio || " ",
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

  return (
    <div className="grid grid-cols-2 gap-y-7 gap-x-2 text-base">
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
        <label htmlFor="">Institución</label>
        <input
          type="text"
          className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
          value={institucion}
          onChange={(e) => setInstitucion(e.target.value)}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="">Área de estudio</label>
        <input
          type="text"
          className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
          value={areaEstudio}
          onChange={(e) => setAreaEstudio(e.target.value)}
        />
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="">Año de inicio</label>
        <input
          type="text"
          className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
          value={anioInicio}
          onChange={(e) => setAnioInicio(e.target.value)}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
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
  );
};

export default Education;
