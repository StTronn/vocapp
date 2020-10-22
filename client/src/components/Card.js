import React, { useState } from "react";

/*
 * props ->
 * front
 * back
 */
const Card = ({ card }) => {
  const { front, back } = card;
  const [showFront, setShowFront] = useState(true);
  return (
    <>
      <div className=" bg-white rounded   shadow">
        <div
          className="grid items-center p-4  text-sm"
          style={{ minHeight: "250px" }}
        >
          <h1 className=" justify-center text-gray-800 text-center text-4xl font-semibold">
            {showFront ? (front ? front : "-") : back ? back : "-"}
          </h1>
        </div>
        {showFront && (
          <FrontButton setShowFront={setShowFront} showFront={showFront} />
        )}

        {!showFront && (
          <BackButton setShowFront={setShowFront} showFront={showFront} />
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

const BackButton = ({ setShowFront, showFront }) => (
  <div
    onClick={() => {
      setShowFront(!showFront);
    }}
    className="grid cursor-pointer  grid-cols-2  text-white text-center h-16"
  >
    <div className="grid items-center bg-green-600 h-full rounded-l ">
      I knew this
    </div>
    <div className="grid items-center bg-blue-600 h-full rounded-r">
      I didn't knew this
    </div>
  </div>
);

export default Card;
