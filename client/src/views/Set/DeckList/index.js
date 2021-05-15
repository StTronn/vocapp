import React, { useContext, useEffect } from "react";
import Spinner from "react-spinkit";
import styled from "styled-components";
import { Set } from "../../../context/SetContext";
import cards from "../../../cards.json";
import DeckViewer from "./DeckViewer"


const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
`;

const decks = {};
for (let i = 0; i < cards.length; i++) {
  decks[i] = { setId: "1", id: `${i}`, name: `Deck ${i + 1}`, cards: cards[i] };
}

// fetch decks list for current set

const DeckList = () => {
  //proto
  const setId = 1;
  const { state, dispatch } = useContext(Set);

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem("sets")) || false;
    if (!cache || Object.keys(cache[setId]).length !== cards.length)
      dispatch({ type: "UPDATE_SET", payload: { [setId]: decks } });
    else dispatch({ type: "UPDATE_SET", payload: cache });
  }, [dispatch, setId]);

  if (!state) return <Spinner name="folding-cube" color="teal" />;
  return (
    <Cointainer className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {Object.values(state[setId]).map((e) => (
        <DeckViewer deck={JSON.parse(JSON.stringify(e))} key={e.id} />
      ))}
    </Cointainer>
  );
};

export default DeckList;
