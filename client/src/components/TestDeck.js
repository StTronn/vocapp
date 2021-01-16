import React, { useState } from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { pickRandom } from "../utils";
import Card from "./Card";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const TestDeck = ({ deckRef, updateDeck }) => {
  let deck = deckRef.current;
  const total = deck.cards.length;

  //state
  const [currentCard, setCurrentCard] = useState(pickRandom(deck.cards));
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const nextCard = () => {
    deck = deckRef.current;
    setCurrentCard(deck.pickTest());
    updateDeck(deck);
  };

  const onAnswer = (choice) => {
    if (choice) setRight(right + 1);
    else setWrong(wrong + 1);
  };

  return (
    <>
      <Cointainer className="grid md:px-32 xl:px-64">
        <Card card={currentCard} onAnswer={onAnswer} nextCard={nextCard} />

        <div>
          {" "}
          <Progress done={right} context="Right" total={total} />
        </div>

        {/* <div>
          <Progress done={right + wrong} context="Progress" total={total} />
        </div>
        */}
      </Cointainer>
    </>
  );
};

export default TestDeck;
