import { createStore, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import logger from "redux-logger";
// my created middleware
import myLogger from "./middlewares/MyLogger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;
