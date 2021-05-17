import React from 'react';
import { Cointainer, CardCointainer } from "./styles";
import Card from "../CardUi";

const demoCard = {
  front: "Abstract",
  back: "Showing Important details",
  status: "New",
};

const Section1 = () => {
  return (
    <Cointainer>
      <h1 className="font-bold"> Yes and No</h1>
      <CardCointainer>
        <Card card={demoCard} flip={false} />
        <Card card={demoCard} flip={false} />
      </CardCointainer>
      <h4> Just let us know can you recall the word and we will handle the rest</h4>
    </Cointainer>
  )
}

export default Section1;
