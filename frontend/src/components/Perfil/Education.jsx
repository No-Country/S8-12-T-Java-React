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
      const idEducations = responseID.data.resumes[0].educations[0].id;
      const idResumes = responseID.data.resumes[0].id;
      const response = await api.put(
        `/api/v1/educations/${idEducations}`,
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
    } catch (error) {
      console.log(error);
      console.error("Error al guardar el valor:", error);
    }
  };
  return (
    <>
      <div className="w-[90vw] mt-[2vh]">
        <div className="flex flex-col">
          <label htmlFor="">Título</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Institución</label>
          <input
            type="text"
            className="w-[44.5vh] h-[6vh] mb-[2vh]"
            value={institucion}
            onChange={(e) => setInstitucion(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Área de estudio</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={areaEstudio}
              onChange={(e) => setAreaEstudio(e.target.value)}
            />
          </div>
          <div className="flex flex-col"></div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="">Año de inicio</label>
            <input
              type="text"
              className="w-[21vh] h-[6vh] mb-[2vh]"
              value={anioInicio}
              onChange={(e) => setAnioInicio(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Año de finalización</label>
            <input
              type="text"
              className="w-[22vh] h-[6vh] mb-[2vh]"
              value={anioFinalizacion}
              onChange={(e) => setAnioFinalizacion(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleGuardar} name={"Guardar"} />
      </div>
    </>
  );
};

export default Education;
