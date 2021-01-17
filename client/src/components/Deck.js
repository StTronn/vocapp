import React, {
  useState,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { Set } from "../context/SetContext";
import { Mode } from "../context/DeckModeContext";
import { createCards, Deck } from "lt-spaced-repetition-js";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import NormalDeck from "./NormalDeck";
import TestDeck from "./TestDeck";
import { MODES } from "../utils/";

const DeckComponent = forwardRef((props, ref) => {
  const modeContext = useContext(Mode);
  const { state, dispatch } = useContext(Set);
  const location = useLocation();
  const { setId, id } = queryString.parse(location.search);
  const data = state[setId][id];
  data.cards = createCards(data.cards);
  const d = new Deck(data);
  const deckRef = useRef(d);
  let deck = deckRef.current;
  //metadata
  const mode = modeContext.state;
  //use for re-rendering
  const [reset, setReset] = useState(false);

  useEffect(() => {
    deck.resetTest();
  }, [deck, mode]);

  const updateDeck = (deck) => {
    const deckObj = JSON.parse(JSON.stringify(deck));
    dispatch({
      type: "UPDATE_DECK",
      payload: { setId: deck.setId, updatedDeck: { [deck.id]: deckObj } },
    });
  };

  useImperativeHandle(ref, () => ({
    //resetDeck needs to trigger re-render to update local state
    resetDeck() {
      deck = deckRef.current;
      deck.reset();
      updateDeck(deck);
      setReset(!reset);
    },
  }));

  if (!data) return <div>Something went wrong</div>;
  if (mode === MODES.normal)
    return <NormalDeck key={reset} updateDeck={updateDeck} deckRef={deckRef} />;
  else return <TestDeck updateDeck={updateDeck} deckRef={deckRef} />;
});

export default DeckComponent;
