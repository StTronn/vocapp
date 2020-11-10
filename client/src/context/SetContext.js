import React, { useReducer, createContext } from "react";

export const Set = createContext();

const initialState = false;

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SET":
      return action.payload;
    case "UPDATE_DECK":
      const { setId, updatedDeck } = action.payload;
      return { ...state, [setId]: { ...state[setId], ...updatedDeck } };
    default:
      return true;
  }
}

export function SetProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Set.Provider value={value}>{props.children}</Set.Provider>;
}
