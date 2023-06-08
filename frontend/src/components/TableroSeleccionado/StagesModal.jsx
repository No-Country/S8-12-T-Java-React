import React, { useContext, useEffect, useState } from "react";
import { Tarjetas } from "./Tarjetas";
import { ContextToken } from "../../context/Token";
import api from "../../api/Post";
import { StageButtonModal } from "./StageModals/StageButtonModal";
import trello from "../../assets/images/trello.svg";
import { TailSpin } from "react-loader-spinner";
import { Droppable, Draggable } from "react-beautiful-dnd";

export const StagesModal = (props) => {
  const { TOKEN } = useContext(ContextToken);
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await api.get(`/api/v1/stages/${props.id}`, {
          headers: { Authorization: TOKEN },
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setApplications(response.data.applications);
      } catch (error) {
        throw error.message;
      }
    };

    getApplications();
  }, []);

  return (
    <div className="bg-transparent text-black w-[100%] h-[100vh] flex flex-col items-center gap-y-[1.5vh]">
      <div className="w-[100%] text-[1.15em] text-star text-700 font-bold flex flex-row items-center mt-[5vh] mb-3">
        <img className="w-[15%] mr-3" src={trello} alt="1"></img>
        <h2 className="text-[80%] font-['Lato','sans-serif'] font-bold uppercase">
          {props.title}
        </h2>
      </div>

      <StageButtonModal id={props.id} />

      <Droppable droppableId={`${props.id}`}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="h-[65vh] w-full overflow-y-scroll"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {isLoading ? (
              <div className="h-[50%] flex justify-center items-center">
                {" "}
                <TailSpin
                  type="TailSpin"
                  color="#6D28D9"
                  height={35}
                  width={35}
                />
              </div>
            ) : (
              applications.map((e, index) => (
                <Draggable key={e.id} draggableId={`${e.id}`} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Tarjetas
                        id={e.id}
                        title={e.position}
                        company={e.company}
                        description={e.description}
                        date={e.applicationDate}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};
