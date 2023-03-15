import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

//Hook Store: every time the a component call to useStore function, a new state will be registered in the react hook state.
//That means with 4 products there will be 4 global states registered
//in the react hook state, one for each component that call to useStore function.
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    //when each of the 4 global states is updated, the other states will be updated too.
    //That means that the 4 components that call to useStore function will be updated.

    for (const listener of listeners) {
      console.log("dispatching...");
      listener(globalState);
    }
  };

  useEffect(() => {
    //to avoid the above problem, we only register for those component which are actually listening to the global state.
    if(shouldListen){
        listeners.push(setState);
        
        return () => {
          listeners = listeners.filter((li) => li !== setState);
        };
    }
    
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

//Init hook store
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
