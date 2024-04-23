/* eslint-disable react/prop-types */
const Button = ({ children, handeler }) => {
  return (
    <button
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      onClick={handeler}
    >
      {children}
    </button>
  );
};

export default Button;
