import React, { useReducer, createContext } from "react";

export const Set = createContext();

const initialState = JSON.parse(localStorage.getItem("sets")) || false;

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SET": {
      localStorage.setItem("updated", false);
      localStorage.setItem("sets", JSON.stringify(action.payload));
      return action.payload;
    }

    case "UPDATE_DECK": {
      let { setId, updatedDeck } = action.payload;
      const obj = { ...state, [setId]: { ...state[setId], ...updatedDeck } };

      localStorage.setItem("sets", JSON.stringify(obj));
      localStorage.setItem("updated", true);
      return obj;
    }

    default:
      return true;
  }
}

export function SetProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Set.Provider value={value}>{props.children}</Set.Provider>;
}
