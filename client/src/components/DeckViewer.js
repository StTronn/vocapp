import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Progress from "./Progress";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
`;

// fetch decks list for current set
const decks = [
  {
    id: 1,
    name: "Common 1",
    learned: 26,
    New: 26,
    starred: 0,
    cards: [
      { front: "stren", back: "strict in lifestyle and nature" },
      { front: "etheral", back: "Delicate in touch, out of this world" },
    ],
  },

  {
    id: 2,
    name: "Common 2",
    learned: 26,
    New: 26,
    starred: 0,
    cards: [
      { front: "stren", back: "strict in lifestyle and nature" },
      { front: "etheral", back: "Delicate in touch, out of this world" },
    ],
  },
];

const DeckViewerWrapper = () => {
  return (
    <Cointainer className="grid-cols-1 lg:grid-cols-4">
      {decks.map((e) => (
        <DeckViewer deck={e} key={e.id} />
      ))}
    </Cointainer>
  );
};

const DeckViewer = ({ deck }) => {
  const { name, learned, New, starred } = deck;
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push("/card");
      }}
      className="bg-white cursor-pointer rounded  p-4 shadow"
    >
      <div className="flex">
        <div className="w-2/3 text-left ">
          <h1 className="font-semibold">{name ? name : "Deck+index"}</h1>
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
              {learned ? learned : "-"}
            </span>
            <span className="flex justify-center text-blue-600">Learned</span>
          </div>
          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-2xl font-semibold">
              {New ? New : "-"}
            </span>
            <span className="flex justify-center text-teal-600">New</span>
          </div>

          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-2xl font-semibold">
              {starred ? starred : "-"}
            </span>
            <span className="flex justify-center text-gray-500">Starred</span>
          </div>
        </div>
      </div>
      <Progress progress={50} />
    </div>
  );
};

export default DeckViewerWrapper;
