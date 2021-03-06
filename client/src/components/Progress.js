import React from 'react';

import styled from 'styled-components';

const Line = styled.div`
  width: ${(props) => props.width}%;
`;

/*
 * props->
 * progress (range 0 to 100)
 * done, total, context
 * showdata
 */

const Progress = ({ progress, done, total, context }) => {
  const width = progress === 0 || progress || Math.ceil((done / total) * 100);
  const mainLineClass =
    " h-3 rounded-xl  bg-green-400 " + (width === 100 ? " " : "rounded-r-none");
  const secLineClass =
    " h-3 rounded-xl  bg-green-100 " + (width === 0 ? " " : "rounded-l-none");
  return (
    <>
      <div className="flex">
        {(progress === 0 || progress) && <ShowPercentage progress={progress} />}
        {!progress && progress !== 0 && (
          <ShowStats context={context} done={done} total={total} />
        )}
      </div>
      <div className="flex">
        <Line width={width} className={mainLineClass} />
        <Line width={100 - width} className={secLineClass} />
      </div>
    </>
  );
};

const ShowPercentage = ({ progress }) => (
  <>
    <span className="text-xs font-semibold py-1">Progress</span>
    <span className="text-xs font-semibold py-1 ml-auto text-green-600">
      {progress}%
    </span>
  </>
);

const ShowStats = ({ total, done, context }) => (
  <>
    <span className="text-base text-gray-800 font-semibold py-1">
      {`${context} ${done}/${total}`}
    </span>
    <span className="text-xs font-semibold py-1 ml-auto text-green-600">
      {Math.ceil((done / total) * 100)}%
    </span>
  </>
);
export default Progress;
