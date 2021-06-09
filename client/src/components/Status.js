import React from 'react';

import { statEn } from 'lt-spaced-repetition-js';

const Status = ({ type, className }) => {
  let color = getColor(type);
  return (
    <div
      className={` bg-${color}-500 text-sm md:text-lg font-bold px-8 py-2  text-white shadow-sm rounded-full justify-self-end inline-block ${className}`}
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


