import React, { useState, useRef } from "react";
import _ from "lodash";
import { createCards, Deck, statEn } from "../leitner";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Progress from "./Progress";
import Card from "./Card";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const DeckComponent = () => {
  const location = useLocation();
  const deck = location.state;

  const d = new Deck(createCards(deck.cards));
  const cardsRef = useRef(d);
  const cards = cardsRef.current;

  const learned = cards.countType(statEn.MASTERED);
  const New = cards.countType(statEn.NEW);
  const review = cards.countType(statEn.REVIEW) + cards.countType(statEn.WRONG);
  const total = cards.cards.length;
  const [currentCard, setCurrentCard] = useState(cards.pick());

  const nextCard = () => {
    setCurrentCard(cards.pick());
  };

  console.log(cards, New);
  if (!deck) return <div>Something went wrong</div>;

  return (
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
  );
};

export default DeckComponent;
