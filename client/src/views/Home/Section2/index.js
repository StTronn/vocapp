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
      <div className="font-bold text-2xl md:text-4xl md:h-auto"> Spaced Repetition</div>
      <CardCointainer className="pointer-events-none">
        <div className=" lg:text-lg md:text-sm font-semibold">
          You learn better when the words come after some spaced time. Our
          algorithm test your long term memory and making your learning process
          easy
        </div>
        <Card card={demoCard} />
      </CardCointainer>
    </Cointainer>
  );
};

export default Section2;
