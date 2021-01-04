import React, { useState } from "react";
import styled from "styled-components";
import Status from "./Status";

const Cointainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

/*
 * props ->
 * front
 * back
 */
const Card = ({ card, nextCard }) => {
  let { front, back, status } = card;
  //temp
  if (!front && card.word) front = card.word;
  if (!back && card.definition) back = card.definition;
  //end temp
  const [showFront, setShowFront] = useState(true);
  const update = (choice) => {
    card.update(choice);
    setShowFront(!showFront);
    nextCard();
  };
  return (
    <>
      <div className=" bg-white rounded   shadow">
        <Cointainer
          className="grid items-center p-4  text-sm"
          style={{ minHeight: "250px" }}
        >
          <Status type={status} />
          <h1 className=" justify-center text-gray-800 text-center text-4xl font-semibold">
            {showFront ? (front ? front : "-") : back ? back : "-"}
          </h1>
        </Cointainer>
        {showFront && (
          <FrontButton setShowFront={setShowFront} showFront={showFront} />
        )}

        {!showFront && (
          <BackButton
            update={update}
            setShowFront={setShowFront}
            showFront={showFront}
          />
        )}
      </div>
    </>
  );
};

const FrontButton = ({ showFront, setShowFront }) => (
  <div
    onClick={() => {
      setShowFront(!showFront);
    }}
    className="grid cursor-pointer rounded-b items-center w-1/1 bg-blue-400 text-white text-center h-16"
  >
    {" "}
    Flip
  </div>
);

const BackButton = ({ update, setShowFront, showFront }) => (
  <div className="grid cursor-pointer  grid-cols-2  text-white text-center h-16">
    <div
      onClick={() => {
        update(1);
      }}
      className="grid items-center bg-green-600 h-full rounded-bl "
    >
      I knew this
    </div>
    <div
      onClick={() => {
        update(0);
      }}
      className="grid items-center bg-blue-600 h-full rounded-br"
    >
      I didn't knew this
    </div>
  </div>
);

export default Card;
