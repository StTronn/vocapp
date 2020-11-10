import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Progress from "./Progress";

const Cointainer = styled.div`
  display: grid;
  row-gap: 80px;
  column-gap: 40px;
`;

const SetViewerWrapper = ({ sets }) => {
  return (
    <Cointainer className="grid-cols-1 mx-2 md:grid-cols-2 xl:grid-cols-3 lg:mx-16">
      {sets.map((e, i) => (
        <SetViewer key={i} set={e} />
      ))}
    </Cointainer>
  );
};

/*
 * props->
 * set {
 *  id
 *  name
 *  tag
 *  desc
 *  deckCount
 *  CardCount
 * }
 * progress (1 to 100)
 */

const SetViewer = ({ set }) => {
  const { name, tag, desc, decksCount, CardsCount, progress, id } = set;
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push(`/set?id=${id}`);
      }}
      className="bg-white cursor-pointer rounded  p-4 shadow"
    >
      <div className="flex">
        <div className="w-2/3 text-left ">
          <h1 className="font-semibold">{name}</h1>
          <span className="block text-xs uppercase text-blue-400">
            {tag ? tag : ""}
          </span>
        </div>
        <div className="w-1/3">
          <span className="float-right text-xs bg-blue-400 rounded px-2 py-1 text-white">
            . . .
          </span>
        </div>
      </div>
      <div className="py-4 text-sm " style={{ minHeight: "150px" }}>
        {desc ? desc : ""}
      </div>
      <div className="flex">
        <div className="w-1/2 flex-col">
          <span className="flex justify-center text-2xl font-semibold">
            {decksCount ? decksCount : "-"}
          </span>
          <span className="flex justify-center text-gray-500">Decks</span>
        </div>
        <div className="w-1/2 flex-col">
          <span className="flex justify-center text-2xl font-semibold">
            {CardsCount ? CardsCount : "-"}
          </span>
          <span className="flex justify-center text-gray-500">Cards</span>
        </div>
      </div>
      <Progress progress={progress} />
    </div>
  );
};

export default SetViewerWrapper;
