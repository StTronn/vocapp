import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Spinner from "react-spinkit";
import styled from "styled-components";
import { createCards, Deck, statEn } from "../leitner";
import Progress from "./Progress";
import queryString from "query-string";
import { Set } from "../context/SetContext";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
`;

// fetch decks list for current set
const decks = {
  1: {
    setId: "1",
    id: "1",
    name: "Common 1",
    learned: 20,
    New: 20,
    total: 52,
    starred: 0,
    cards: [
      {
        front: "Hello",
        back: "strict in lifestyle and nature",
      },
      {
        front: "etheral",
        back: "Delicate in touch, out of this world",
      },
    ],
  },

  2: {
    setId: "1",
    id: "2",
    name: "Common 2",
    learned: 26,
    New: 26,
    total: 52,
    starred: 0,
    cards: [
      { front: "stren", back: "strict in lifestyle and nature" },
      { front: "etheral", back: "Delicate in touch, out of this world" },
    ],
  },
};

const sets = {
  1: decks,
};

const DeckViewerWrapper = () => {
  const location = useLocation();
  const { id: setId } = queryString.parse(location.search);
  const { state, dispatch } = useContext(Set);
  useEffect(() => {
    dispatch({ type: "UPDATE_SET", payload: { [setId]: decks } });
  }, []);

  if (!state) return <Spinner name="folding-cube" color="teal" />;
  return (
    <Cointainer className="grid-cols-1 lg:grid-cols-4">
      {Object.values(state[setId]).map((e) => (
        <DeckViewer deck={e} key={e.id} />
      ))}
    </Cointainer>
  );
};

const DeckViewer = ({ deck }) => {
  const { id, setId, name } = deck;
  const cards = new Deck({ cards: createCards(deck.cards) });
  const learned = cards.countType(statEn.MASTERED);
  const New = cards.countType(statEn.NEW);
  const total = deck.cards.length;
  const history = useHistory();

  return (
    <div
      onClick={() => {
        history.push({
          pathname: `/deck`,
          search: `?setId=${setId}&id=${id}`,
          state: deck,
        });
      }}
      className="bg-white cursor-pointer rounded  p-4 shadow"
    >
      <div className="flex">
        <div className="w-2/3 text-left ">
          <h1 className="font-semibold">{name ? name : "Deck+index"}</h1>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div
        className="grid items-center py-4 text-sm"
        style={{ minHeight: "150px" }}
      >
        <div className="flex">
          <div className="w-1/2 flex-col">
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
        </div>
      </div>
      <Progress progress={Math.ceil((learned / total) * 100)} />
    </div>
  );
};

export default DeckViewerWrapper;
