import { TailSpin } from "react-loader-spinner";
import PropTypes from "prop-types";

export const ButtonLoader = ({ isLoading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="col-span-2 rounded bg-[#6D28D9] text-white h-10 shadow-md flex items-center justify-center"
      type="submit"
      value="submit"
    >
      {isLoading ? (
        <TailSpin type="TailSpin" color="#ffffff" height={20} width={20} />
      ) : (
        children
      )}
    </button>
  );
};
ButtonLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
