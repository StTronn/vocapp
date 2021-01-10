import React, {
  useState,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Set } from "../context/SetContext";
import { createCards, Deck, statEn } from "lt-spaced-repetition-js";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Progress from "./Progress";
import DeckDropDown from "./DeckDropDown";
import Card from "./Card";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const DeckComponent = forwardRef((props, ref) => {
  const { state, dispatch } = useContext(Set);
  const location = useLocation();
  const { setId, id } = queryString.parse(location.search);
  const data = state[setId][id];
  data.cards = createCards(data.cards);
  const d = new Deck(data);
  const deckRef = useRef(d);
  let deck = deckRef.current;
  //metadata
  const review = deck.countType(statEn.REVIEW) + deck.countType(statEn.WRONG);

  let [learned, setLearned] = useState(deck.countType(statEn.MASTERED));
  let [New, setNew] = useState(deck.countType(statEn.NEW));
  const [currentCard, setCurrentCard] = useState(deck.cards[0]);

  const total = deck.cards.length;

  const updateDeck = (deck) => {
    const deckObj = JSON.parse(JSON.stringify(deck));
    dispatch({
      type: "UPDATE_DECK",
      payload: { setId: deck.setId, updatedDeck: { [deck.id]: deckObj } },
    });
  };
  useImperativeHandle(ref, () => ({
    resetDeck() {
      console.log("reset deck called");
      deck = deckRef.current;
      deck.reset();
      updateDeck(deck);
      setLearned(deck.countType(statEn.MASTERED));
      setNew(deck.countType(statEn.NEW));
    },
  }));

  const nextCard = () => {
    deck = deckRef.current;
    setLearned(deck.countType(statEn.MASTERED));
    setNew(deck.countType(statEn.NEW));
    setCurrentCard(deck.pick());
    updateDeck(deck);
  };

  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <Cointainer className="grid md:px-32 xl:px-64">
        <Card card={currentCard} nextCard={nextCard} />

        <div>
          {" "}
          <Progress done={learned} context="Learned" total={total} />
        </div>

        <div>
          <Progress done={review} context="Reviewing" total={total} />
        </div>

        <div>
          <Progress done={New} context="New" total={total} />
        </div>
      </Cointainer>
    </>
  );
});

export default DeckComponent;
