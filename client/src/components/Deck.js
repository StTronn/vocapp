import React, { useState, useRef, useEffect } from "react";
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

  const d = new Deck({ cards: createCards(deck.cards) });
  const cardsRef = useRef(d);
  let cards = cardsRef.current;

  //metadata
  const review = cards.countType(statEn.REVIEW) + cards.countType(statEn.WRONG);
  let [learned, setLearned] = useState(cards.countType(statEn.MASTERED));
  let [New, setNew] = useState(cards.countType(statEn.NEW));
  let [total, setTotal] = useState(cards.cards.length);

  const [currentCard, setCurrentCard] = useState(cards.cards[0]);

  const nextCard = () => {
    cards = cardsRef.current;
    console.log(cards);
    setLearned(cards.countType(statEn.MASTERED));
    setNew(cards.countType(statEn.NEW));

    setCurrentCard(cards.pick());
  };

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
