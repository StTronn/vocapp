import React, { useState } from "react";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Progress from "./Progress";
import Card from "./Card";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const Deck = () => {
  const location = useLocation();
  const deck = location.state;
  const { learned, New, total } = deck;
  const cards = deck ? deck.cards : [];
  const [currentCard, setCurrentCard] = useState(_.sample(cards));
  if (!deck) return <div>Something went wrong</div>;
  return (
    <Cointainer className="grid md:px-32 xl:px-64">
      <Card card={currentCard} />

      <div>
        {" "}
        <Progress done={learned} context="Learned" total={total} />
      </div>

      <div>
        <Progress
          done={total - learned - New}
          context="Reviewing"
          total={total}
        />
      </div>

      <div>
        <Progress done={New} context="New" total={total} />
      </div>
    </Cointainer>
  );
};

export default Deck;
