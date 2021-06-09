import React from 'react';

import LearnImg from './images/learn.png';
import TestImg from './images/test.png';
import {
  Cointainer,
  ModeGrid,
} from './styles';

const Section3 = () => {
  return (
    <Cointainer>
      <div className="font-bold text-2xl md:text-4xl">Different Modes</div>
      <ModeGrid className="grid mt-20">
        <span className="" style={{ width: "fit-content" }}>
          <Status text="Learn" color="rgba(16, 185, 129, 1)" />
          <div>
            <h5 className="text-lg font-semibold py-4 text-center">
              When starting out use the following mode to test and Identify your
              weak spot
            </h5>
          </div>
          <div>
            <img src={TestImg} alt="test mode" width="482px" height="416px" />
          </div>
        </span>
        <span className="">
          <Status text="Test" color="var(--blueDark)" />
          <h5 className="md:text-sm lg:text-lg font-semibold py-4 text-center">
            When starting out use the following mode to test and Identify your
            weak spot
          </h5>
          <img src={LearnImg} alt="test mode" width="482px" height="416px" />
        </span>
      </ModeGrid>
      <div></div>
    </Cointainer>
  );
};

const Status = ({ text, color }) => {
  return (
    <div
      style={{ background: color }}
      className={` text-sm md:text-lg font-bold px-8 py-2 text-white shadow-sm rounded-full justify-self-end inline-block`}
    >
      {text}
    </div>
  );
};

export default Section3;
