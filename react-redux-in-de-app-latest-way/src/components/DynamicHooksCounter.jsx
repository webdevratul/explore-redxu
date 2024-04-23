import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/dynamicCounter/Actions";

const DynamicHooksCounter = () => {
  const count = useSelector((state) => state.dyCounter.value);
  const dispatch = useDispatch();

  const incrementHandeler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
        {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={() => incrementHandeler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={() => decrementHandler(3)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default DynamicHooksCounter;
