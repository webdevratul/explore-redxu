import { combineReducers } from "redux";
import counterReducer from "./counter/CounterReducer";
import dynamicCounterReducer from "./dynamicCounter/DynamicCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dyCounter: dynamicCounterReducer,
});

export default rootReducer;
