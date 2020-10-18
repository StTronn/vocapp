import React from "react";
import styled from "styled-components";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
`;

const SetViewerWrapper = () => {
  return (
    <Cointainer className="grid-cols-1 lg:grid-cols-4">
      <SetViewer />
      <SetViewer />
      <SetViewer />
      <SetViewer />
      <SetViewer />
      <SetViewer />
    </Cointainer>
  );
};

const SetViewer = () => {
  return (
    <div className="bg-white rounded  p-4 shadow">
      <div className="flex">
        <div className="w-2/3 text-left ">
          <h1 className="font-semibold">Gre Vocab 500</h1>
          <span className="block text-xs uppercase text-blue-400">
            Vocabulary
          </span>
        </div>
        <div className="w-1/3">
          <span className="float-right text-xs bg-blue-400 rounded px-2 py-1 text-white">
            Add
          </span>
        </div>
      </div>
      <div className="py-4 text-sm" style={{ minHeight: "150px" }}>
        Top 500 words occuring in GRE.
      </div>
      <div className="flex">
        <div className="w-1/2 flex-col">
          <span className="flex justify-center text-2xl font-semibold">10</span>
          <span className="flex justify-center text-gray-500">Decks</span>
        </div>
        <div className="w-1/2 flex-col">
          <span className="flex justify-center text-2xl font-semibold">
            500
          </span>
          <span className="flex justify-center text-gray-500">Cards</span>
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

export default SetViewerWrapper;
