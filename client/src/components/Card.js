import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import Status from './Status';

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

  50% {opacity:0.0;}
  to{
  opacity:1.0;
  }
`;

const InnerCointainer = styled.div`
  animation: ${hide} 0.32s ease-in-out;
`;

const Perspective = styled.div`
  justify-self: center;
  perspective: 3900px;
`;

// const Cointainer = styled.div`
//   animation: ${rotate} 0.32s ease-in-out;
//   transform-style: preserve-3d;
// `;

const Cointainer = styled.div`
  animation: ${rotate} 0.32s ease-in-out;
  transform-style: preserve-3d;
  background: #a8dadc;
  /* HUD shadow */
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15), 0px 5px 17px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  width: 520px;
  height: 370px;
  cursor: pointer;
  display:grid;
  @media (max-width: 1200px){
    width: 328px;
    height: 300px;
    max-height:fit-content;
  }
`;

const Display = styled.div`
  grid-template-rows: auto 1fr;
  height: 100%;
`;

/*
 * props ->
 * front
 * back
 */
const Card = ({ card, nextCard, onAnswer,fliped=true }) => {
  let { front, back, status } = card;
  //temp
  if (!front && card.word) front = card.word;
  if (!back && card.definition) back = card.definition;
  //end temp
  const [showFront, setShowFront] = useState(fliped);
  const update = (choice) => {
    onAnswer(choice);
    setShowFront(!showFront);
    nextCard();
  };
  return (
    <Perspective>
      <Cointainer onClick={() => setShowFront(!showFront)} key={showFront} className="bg-white rounded shadow">
        <InnerCointainer>
          <Display
            className="grid items-center p-4 text-sm"
            style={{ minHeight: "250px" }}
          >
            {showFront && (
              <>
                <Status type={status} />
                <h1 className="text-xl md:text-2xl text-gray-800 text-center  font-semibold">
                  {showFront ? (front ? front : "-") : back ? back : "-"}
                </h1>
              </>
            )}
            {!showFront && (
              <>
                <div className="grid">

                  <Status type={status} />
                  <div className="justify-self-center w-auto justify-center text-gray-800 text-center text-lg md:text-xl font-semibold">
                    {front}
                    <p className="pt-2 font-medium justify-center text-gray-700 text-center text-lg md:text-xl ">
                      {back}
                    </p>
                  </div>
                </div>
              </>
            )}
            {!showFront && (
              <BackButton
                update={update}
                setShowFront={setShowFront}
                showFront={showFront}
              />
            )}
          </Display>
        </InnerCointainer>
      </Cointainer>
    </Perspective>
  );
};

const FrontCointainer = styled.div`
  animation: ${rotate} 0.4s linear;
`;

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
  <div className="grid cursor-pointer self-end md:mx-8  grid-cols-2  text-white text-center h-12">
    <div
      onClick={() => {
        update(1);
      }}
      className="grid items-center justify-self-center justify-items-center items-center bg-green-600 h-full rounded-full w-12 "
    >
      <CheckSvg />
    </div>
    <div
      onClick={() => {
        update(0);
      }}
      className="grid items-center justify-self-center justify-items-center bg-red-600 h-full rounded-full w-12"
    >
      <WrongSvg/>
    </div>
  </div>
);

const CheckSvg = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="20 6 9 17 4 12"></polyline></svg>
)

const WrongSvg = ()=>(
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)
export default Card;
