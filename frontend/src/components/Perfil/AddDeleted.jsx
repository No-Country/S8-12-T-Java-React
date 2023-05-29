/* eslint-disable react/prop-types */

const AddDeleted = (props) => {

  return (
    <>
        <div className="flex flex-row justify-between w-[90vw] mt-[2vh]">
          <div className="flex flex-row">
            <img
              className="w-[3vh] drop-shadow-xl  "
              src="../../public/plus.svg"
              alt="1"
            ></img>
            <p htmlFor="" className="ml-4">
              {props.name}
            </p>
          </div>
          <div className="flex flex-row">
            <img
              className="w-[3vh] drop-shadow-xl  "
              src="../../public/trash.svg"
              alt="1"
            ></img>
            <p>Eliminar</p>
          </div>
        </div>
   
    </>
  );
};

export default AddDeleted;
