/* eslint-disable react/prop-types */
const TextInput = ({ title, ...attributes }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type="text"
        className="mt-1 py-3 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md"
        {...attributes}
        required
      />
    </>
  );
};

export default TextInput;
