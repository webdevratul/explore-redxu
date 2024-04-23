const { configureStore } = require("@reduxjs/toolkit");

const counterReducer = require("../fetures/counter/counterSlice");
const dynamicCounterReducer = require("../fetures/dynamicCounter/dynamicCunterSlice");
const postReducer = require("../fetures/post/postSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
