import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Status from "../../components/Status";

/*
 * props ->
 * front
 * back
 */
const Card = ({ card, handleAnswer, flip }) => {
  let { front, back, status } = card;
  //temp
  if (!front && card.word) front = card.word;
  if (!back && card.definition) back = card.definition;
  //end temp

  const [showFront, setShowFront] = useState(true);

  const update = (choice) => {
    if (handleAnswer)
      handleAnswer(choice);
    setShowFront(!showFront)
  };

  return (
    <Perspective>
      <Cointainer key={showFront}>
        <InnerCointainer>
          <Display
            onClick={() => {flip && showFront && setShowFront(!showFront) }}
            className="p-4 text-sm"
          >
            {showFront && (
              <div  >
                <StatusWrapper>
                  <Status type={status} />
                </StatusWrapper>
                <h1 className="justify-center text-center pt-4 text-gray-800 font-bold text-h4">
                  {showFront ? (front ? front : "-") : back ? back : "-"}
                </h1>
              </div>
            )}
            {!showFront && (
              <>
                <div className="grid">
                  <Status type={status} />
                  <div className="justify-self-center w-auto justify-center text-gray-800 text-center text-2xl md:text-4xl font-semibold">
                    {front}
                  </div>
                </div>
                <p className=" justify-center text-gray-800 text-center text-xl ">
                  {back}
                </p>
              </>
            )}
          </Display>
          {/* {showFront && (
            <FrontButton setShowFront={setShowFront} showFront={showFront} />
          )} */}

          {!showFront && (
            <BackButton
              update={update}
              setShowFront={setShowFront}
              showFront={showFront}
            />
          )}
        </InnerCointainer>
      </Cointainer>
    </Perspective>
  );
};

const FrontButton = ({ showFront, setShowFront }) => (
  <div
    onClick={() => {
      setShowFront(!showFront);
    }}
    className="grid cursor-pointer rounded-b items-center w-1/1 bg-blue-400 text-white text-center h-16"
  >
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

const rotate = keyframes`
  from {
    transform: rotateX(180deg);
  }


  to {

    transform: rotateX(0deg);
  }
`;

const hide = keyframes`
  from {
  opacity:0.0;
  }
  50%{opacity:0.0;}
  to{
  opacity:1.0;
  }
`;

const InnerCointainer = styled.div`
  animation: ${hide} 0.32s ease-in-out;
  width:100%;
  height:100%;
`;

const Perspective = styled.div`
  perspective: 3900px;
`;

const Cointainer = styled.div`
  animation: ${rotate} 0.32s ease-in-out;
  transform-style: preserve-3d;
  background: #a8dadc;
  /* HUD shadow */

  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15), 0px 5px 17px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  width: 400px;
  height: 300px;
`;

const Display = styled.div`
  position:relative;
  cursor: pointer;
  width:100%;
  height:100%;
`;

const FrontCointainer = styled.div`
  animation: ${rotate} 0.4s linear;
`;

const StatusWrapper = styled.div`
  position:absolute;
  bottom:10px;
  right: 10px;
`

Card.defualtProps = {
  card: {},
  handleAnswer: () => { },
  flip: true,

}
export default Card;
