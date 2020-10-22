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
          <h1 className=" justify-center text-center text-4xl font-semibold">
            {showFront ? (front ? front : "-") : back ? back : "-"}
          </h1>
        </div>
        <div
          onClick={() => {
            setShowFront(!showFront);
          }}
          className="grid cursor-pointer items-center w-1/1 bg-blue-400 text-white text-center h-16"
        >
          {" "}
          Flip
        </div>
      </div>
    </>
  );
};

export default Card;
