import React from "react";
import styled from "styled-components";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
`;

const CardWrapper = () => {
  return (
    <Cointainer className="grid md:px-32 xl:px-64">
      <Card />
    </Cointainer>
  );
};

const Card = () => {
  return (
    <>
      <div className=" bg-white rounded   shadow">
        <div
          className="grid items-center p-4  text-sm"
          style={{ minHeight: "250px" }}
        >
          <h1 className=" justify-center text-center text-4xl font-semibold">
            Stern
          </h1>
        </div>
        <div className="grid items-center w-1/1 bg-blue-400 text-white text-center h-16">
          {" "}
          Flip
        </div>
      </div>
      <div>
        <div className="flex">
          <span className="text-base text-gray-800 font-semibold py-1">
            Mastered 20/50
          </span>
          <span className="text-xs font-semibold py-1 ml-auto text-blue-600">
            75%
          </span>
        </div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-blue-400" />
          <div className="w-1/4 h-2 rounded rounded-l-none bg-blue-100" />
        </div>
      </div>

      <div>
        <div className="flex">
          <span className="text-base text-gray-800 font-semibold py-1">
            Reviewing 20/50
          </span>
          <span className="text-xs font-semibold py-1 ml-auto text-yellow-600">
            75%
          </span>
        </div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-yellow-400" />
          <div className="w-1/4 h-2 rounded rounded-l-none bg-yellow-100" />
        </div>
      </div>

      <div>
        <div className="flex">
          <span className="text-base text-gray-800 font-semibold py-1">
            Learning 20/50
          </span>
          <span className="text-xs font-semibold py-1 ml-auto text-red-600">
            75%
          </span>
        </div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-red-400" />
          <div className="w-1/4 h-2 rounded rounded-l-none bg-red-100" />
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
