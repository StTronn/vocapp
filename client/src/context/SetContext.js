import React, { useReducer, createContext } from "react";

export const Set = createContext();

const initialState = false;

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SET":
      return action.payload;
    default:
      return true;
  }
}

export function SetProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Set.Provider value={value}>{props.children}</Set.Provider>;
}
