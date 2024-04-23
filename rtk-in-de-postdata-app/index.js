const store = require("./app/store");
const { counterActions } = require("./fetures/counter/counterSlice");
const {
  dynamicCounterAction,
} = require("./fetures/dynamicCounter/dynamicCunterSlice");
const { fetchPosts } = require("./fetures/post/postSlice");

// subscribe to state changes
store.subscribe(() => {
  // this work will do redux logger
  // console.log(store.getState());
});

// dispatch actions for counter
/* store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement()); */

// dispatch actios for dynamicCounter
/* store.dispatch(dynamicCounterAction.dIncrement(5));
store.dispatch(dynamicCounterAction.dDecrement(5)); */

// dispatch actions for for post
/* store.dispatch(fetchPosts()); */
