import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/Action";
import {
  decrement as dynamicD,
  increment as dynamicI,
} from "../redux/dynamicCounter/Actions";

const VariableCounter = ({ count, increment, decrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
        {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dyCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? () => dispatch(dynamicD(5))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? () => dispatch(dynamicI(5))
      : () => dispatch(decrement()),
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(VariableCounter);
export default ConnectedCounter;
