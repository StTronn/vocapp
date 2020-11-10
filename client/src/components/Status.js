import React, { useState } from "react";
import { statEn } from "../leitner";

const Status = ({ type }) => {
  let color = getColor(type);
  return (
    <div
      className={` bg-${color}-500 text-lg font-bold p-6 py-2 text-white shadow-sm rounded justify-self-end inline-block`}
    >
      {" "}
      {type}
    </div>
  );
};

const getColor = (type) => {
  switch (type) {
    case statEn.NEW:
      return "blue";
    case statEn.WRONG:
      return "red";
    case statEn.REVIEW:
      return "orange";
    case statEn.MASTERED:
      return "green";
    default:
      return "green";
  }
};

export default Status;
