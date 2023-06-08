import contactStack from "../utils/contact.json";
import userAvatar7 from "../assets/images/stack/NicolasRoberto.svg";
import userAvatar5 from "../assets/images/stack/FacundoRamirez.svg";
import userAvatar1 from "../assets/images/stack/AgustinSoleti.svg";
import userAvatar4 from "../assets/images/stack/EmilianoEscobedo.svg";
import userAvatar2 from "../assets/images/stack/BrayanRodallega.svg";
import userAvatar3 from "../assets/images/stack/DoloresAleman.svg";
import userAvatar6 from "../assets/images/stack/GerardoVargas.svg";
import userAvatar8 from "../assets/images/stack/BillyCampagnoli.svg";
export default function Contact() {
  return (
    <div className="w-full px-4 my-4 sm:my-10 sm:w-6/12 m-auto">
      <h1 className="text-center text-2xl font-bold m-4">
        Equipo S8-12-Java-React
      </h1>
      <ul className="flex flex-row flex-wrap justify-around m-auto">
        {contactStack.contactStack.map((usuario) => (
          <li
            key={usuario.id}
            className="w-40 h-[250px] mb-4 rounded-[10px] shadow-lg sm:w-48 sm:h-[298px] bg-white"
          >
            <a
              href={usuario.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 font-bold"
            >
              <img
                className="w-full rounded-t-lg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "75%",
                }}
                src={getUserAvatar(usuario.id)}
                alt={usuario.name}
              />
              <div className="w-max h-max m-auto sm:mx-4 my-2 sm:my-4">
                <p className="text-neutral-700 font-bold text-base">
                  {usuario.name}
                </p>
                <p className="font-normal text-base">{usuario.stack}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function getUserAvatar(userId) {
  switch (userId) {
    case 1:
      return userAvatar1;
    case 2:
      return userAvatar2;
    case 3:
      return userAvatar3;
    case 4:
      return userAvatar4;
    case 5:
      return userAvatar5;
    case 6:
      return userAvatar6;
    case 7:
      return userAvatar7;
    case 8:
      return userAvatar8;
    default:
      return "";
  }
}
