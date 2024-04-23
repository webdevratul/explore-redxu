/* eslint-disable react/prop-types */
const TextArea = ({ title, ...attributes }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="mt-1">
        <textarea
          {...attributes}
          rows="3"
          z
          className="shadow-sm py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 bg-gray-100 rounded-md"
          required
        ></textarea>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your video
      </p>
    </>
  );
};

export default TextArea;
