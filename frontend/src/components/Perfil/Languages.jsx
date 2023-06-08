import { useContext, useEffect, useState } from "react";
import { ContextToken } from "../../context/Token";
import api from "../../api/Post";
import Button from "../Button";

const Languages = () => {
  const { TOKEN, DECODE_TOKEN } = useContext(ContextToken);
  const GetTablero = async () => {
    try {
      const response = await api.get(`/api/v1/users/${DECODE_TOKEN}`, {
        headers: { Authorization: TOKEN },
      });
      const language = response.data.resumes[0].languages[0].language;
      const languageLevel = response.data.resumes[0].languages[0].languageLevel;

      setIdioma(language);
      setNivel(languageLevel);
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

      if (responseID.data.resumes[0].languages.length === 0) {
        // Perform POST request if languages length is 0
        const response = await api.post(
          `/api/v1/languages`,
          {
            resumeId: idResumes,
            language: idioma,
            languageLevel: nivel,
          },
          { headers: { Authorization: TOKEN } }
        );
        console.log("Valor guardado:", response.data);
      } else {
        // Perform PUT request if languages length is not 0
        const idLanguages = responseID.data.resumes[0].languages[0].id;
        const response = await api.put(
          `/api/v1/languages/${idLanguages}`,
          {
            resumeId: idResumes,
            language: idioma,
            languageLevel: nivel,
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

  const [idioma, setIdioma] = useState("");
  const [nivel, setNivel] = useState("");
  const handleNivelChange = (e) => {
    setNivel(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-y-7 gap-x-2 text-base">
        <div className="col-span-1">
          <label htmlFor="">Idioma</label>
          <input
            type="text"
            className="w-full py-2 pl-2 rounded border border-[#D4D4D8]"
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="">Nivel</label>
          <select
            className="w-full py-2.5 pl-2 rounded border border-[#D4D4D8]"
            value={nivel}
            onChange={handleNivelChange}
          >
            <option value=""></option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>
        </div>
      </div>
      <Button name={"Guardar"} onClick={handleGuardar} />
    </>
  );
};

export default Languages;
