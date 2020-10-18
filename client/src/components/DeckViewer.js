import React from "react";
import styled from "styled-components";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
`;

const DeckViewerWrapper = () => {
  return (
    <Cointainer className="grid-cols-1 lg:grid-cols-4">
      <DeckViewer />
      <DeckViewer />
      <DeckViewer />
      <DeckViewer />
      <DeckViewer />
    </Cointainer>
  );
};

const DeckViewer = () => {
  return (
    <div className="bg-white rounded  p-4 shadow">
      <div className="flex">
        <div className="w-2/3 text-left ">
          <h1 className="font-semibold">Deck 1</h1>
        </div>
        <div className="w-1/3"></div>
      </div>
      <div
        className="grid items-center py-4 text-sm"
        style={{ minHeight: "150px" }}
      >
        <div className="flex">
          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-2xl  font-semibold">
              26
            </span>
            <span className="flex justify-center text-blue-600">Learned</span>
          </div>
          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-2xl font-semibold">
              24
            </span>
            <span className="flex justify-center text-teal-600">New</span>
          </div>

          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-2xl font-semibold">
              0
            </span>
            <span className="flex justify-center text-gray-500">Stared</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="text-xs font-semibold py-1">Progress</span>
        <span className="text-xs font-semibold py-1 ml-auto text-blue-600">
          75%
        </span>
      </div>
      <div className="flex">
        <div className="w-3/4 h-2 rounded rounded-r-none bg-blue-400" />
        <div className="w-1/4 h-2 rounded rounded-l-none bg-blue-100" />
      </div>
    </div>
  );
};

export default DeckViewerWrapper;
