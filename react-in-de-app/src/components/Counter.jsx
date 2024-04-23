/* eslint-disable react/prop-types */
import Button from "./Button";
import Count from "./Count";

const Counter = ({ id, count, increment, decrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
        <Count count={count}></Count>
      </div>
      <div className="flex space-x-3">
        <Button handeler={() => increment(id)}>Increment</Button>
        <Button handeler={() => decrement(id)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
