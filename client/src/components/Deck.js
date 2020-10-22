import React, { useState } from "react";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const Deck = () => {
  const location = useLocation();
  const deck = location.state;
  const cards = deck ? deck.cards : [];
  const [currentCard, setCurrentCard] = useState(_.sample(cards));
  if (!deck) return <div>Something went wrong</div>;
  return (
    <Cointainer className="grid md:px-32 xl:px-64">
      <Card card={currentCard} />

      <div>
        <div className="flex">
          <span className="text-base text-gray-800 font-semibold py-1">
            Mastered 20/50
          </span>
          <span className="text-xs font-semibold py-1 ml-auto text-green-600">
            75%
          </span>
        </div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-green-400" />
          <div className="w-1/4 h-2 rounded rounded-l-none bg-green-100" />
        </div>
      </div>

      <div>
        <div className="flex">
          <span className="text-base text-gray-800 font-semibold py-1">
            Reviewing 20/50
          </span>
          <span className="text-xs font-semibold py-1 ml-auto text-yellow-600">
            75%
          </span>
        </div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-yellow-400" />
          <div className="w-1/4 h-2 rounded rounded-l-none bg-yellow-100" />
        </div>
      </div>

      <div>
        <div className="flex">
          <span className="text-base text-gray-800 font-semibold py-1">
            Learning 20/50
          </span>
          <span className="text-xs font-semibold py-1 ml-auto text-red-600">
            75%
          </span>
        </div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-red-400" />
          <div className="w-1/4 h-2 rounded rounded-l-none bg-red-100" />
        </div>
      </div>
    </Cointainer>
  );
};

export default Deck;
