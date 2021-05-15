import React, { useState } from "react";
import { statEn } from "lt-spaced-repetition-js";
import styled from "styled-components";
import Progress from "../../../components/Progress";
import { pickRandom } from "../../../utils";
import Card from "../../../components/Card";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const NormalDeck = ({ deckRef, updateDeck }) => {
  let deck = deckRef.current;

  //state
  const [learned, setLearned] = useState(deck.countType(statEn.MASTERED));
  const [New, setNew] = useState(deck.countType(statEn.NEW));
  const [currentCard, setCurrentCard] = useState(pickRandom(deck.cards));
  //metadata
  const total = deck.cards.length;
  const review = deck.countType(statEn.REVIEW) + deck.countType(statEn.WRONG);

  const nextCard = () => {
    deck = deckRef.current;
    setLearned(deck.countType(statEn.MASTERED));
    setNew(deck.countType(statEn.NEW));
    setCurrentCard(deck.pick());
    updateDeck(deck);
  };

  const onAnswer = (choice) => {
    currentCard.update(choice);
  };

  return (
    <>
      <Cointainer className="grid md:px-32 xl:px-64">
        <Card card={currentCard} onAnswer={onAnswer} nextCard={nextCard} />

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
};

export default NormalDeck;
