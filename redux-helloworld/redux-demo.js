const redux = require("redux");
const thunk = require('redux-thunk');
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers/index'

const counterReducer = (
  state = { counter: 0, s1: true, s2: false },
  action
) => {
  console.log(state, action);

  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 };
  }

  return { ...state, counter: state.counter + 1 };
};

const store = redux.createStore(counterReducer, redux.applyMiddleware(thunk));

const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });

// const thunkFunction = (dispatch, getState) => {
//   console.log("wait for 2 seconds");
//   SetTimeout(() => {
//     dispatch({ type: "INCREMENT" });
//   }, 2000);
// }
// store.dispatch(thunkFunction);

store.dispatch({ type: "DECREMENT" });
