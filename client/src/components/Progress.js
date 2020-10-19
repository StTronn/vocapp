import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: ${(props) => props.width}%;
`;

/*
 * props->
 * progress (range 0 to 100)
 */

const Progress = ({ progress }) => {
  if (!progress) progress = 0;
  return (
    <>
      <div className="flex">
        <span className="text-xs font-semibold py-1">Progress</span>
        <span className="text-xs font-semibold py-1 ml-auto text-green-600">
          {progress}%
        </span>
      </div>
      <div className="flex">
        <Line
          width={progress}
          className=" h-2 rounded rounded-r-none bg-green-400"
        />
        <Line
          width={100 - progress}
          className=" h-2 rounded rounded-l-none bg-green-100"
        />
      </div>
    </>
  );
};

export default Progress;
