import React from 'react';

import Card from '../../../components/Card';
import {
  CardCointainer,
  Cointainer,
} from './styles';

const demoCard = {
  front: "Abstract",
  back: "Showing Important details",
  status: "New",
};

const Section1 = () => {
  return (
    <Cointainer>
      <div className="font-bold text-2xl md:text-4xl"> Yes and No</div>
      <CardCointainer className="pointer-events-none">
        <Card card={demoCard} fliped={true} />
        <Card card={demoCard} fliped={false} />
      </CardCointainer>
      <span className="text-base md:text-lg font-semibold">
        {" "}
        Just let us know can you recall the word and we will handle the rest
      </span>
    </Cointainer>
  )
}

export default Section1;
