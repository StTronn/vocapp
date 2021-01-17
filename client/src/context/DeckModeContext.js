import React, { useReducer, createContext } from "react";
import { MODES } from "../utils/";

export const Mode = createContext();

const intialState = MODES.normal;

function reducer(state, { type, payload }) {
  switch (type) {
    case "CHANGE_MODE":
      return payload;
    default:
      return state;
  }
}

export function ModeProvider(props) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const value = { state, dispatch };
  return <Mode.Provider value={value}>{props.children}</Mode.Provider>;
}
