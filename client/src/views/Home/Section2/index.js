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

const Section2 = () => {
  return (
    <Cointainer>
      <h1 className="font-bold text-4xl"> Spaced Repetition</h1>
      <CardCointainer className="pointer-events-none">
        <h5 className="text-lg font-semibold">
          You learn better when the words come after some spaced time. Our
          algorithm test your long term memory and making your learning process
          easy
        </h5>
        <Card card={demoCard} />
      </CardCointainer>
    </Cointainer>
  );
};

export default Section2;
