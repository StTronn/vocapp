import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Spinner from "react-spinkit";
import styled from "styled-components";
import { createCards, Deck, statEn } from "lt-spaced-repetition-js";
import Progress from "./Progress";
import queryString from "query-string";
import { Set } from "../context/SetContext";
import cardsJson from "../data.json";
import cards from "../cards.json";

const Cointainer = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
`;

const decks = {};
for (let i = 0; i < cards.length; i++) {
  decks[i] = { setId: "1", id: `${i}`, name: `Deck ${i + 1}`, cards: cards[i] };
}

// fetch decks list for current set

const DeckViewerWrapper = () => {
  //proto
  const setId = 1;
  const { state, dispatch } = useContext(Set);

  useEffect(() => {
    //fetch from server if dirty:false or empty
    //else pick up from localstoraage
    //const updated = JSON.parse(localStorage.getItem("updated")) || false;
    const cache = JSON.parse(localStorage.getItem("sets")) || false;
    if (!cache) dispatch({ type: "UPDATE_SET", payload: { [setId]: decks } });
    else dispatch({ type: "UPDATE_SET", payload: cache });
  }, [dispatch, setId]);

  if (!state) return <Spinner name="folding-cube" color="teal" />;
  return (
    <Cointainer className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {Object.values(state[setId]).map((e) => (
        <DeckViewer deck={JSON.parse(JSON.stringify(e))} key={e.id} />
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
      className="bg-white cursor-pointer rounded p-8 md:p-4  shadow"
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
          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-base  font-semibold">
              {learned ? learned : "0"}
            </span>
            <span className="flex justify-center text-sm text-blue-500">
              mastered
            </span>
          </div>

          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-base  font-semibold">
              {total - learned - New ? total - learned - New : "0"}
            </span>
            <span className="flex justify-center text-sm text-orange-500">
              learning
            </span>
          </div>

          <div className="w-1/3 flex-col">
            <span className="flex justify-center text-base font-semibold">
              {New ? New : "0"}
            </span>
            <span className="flex justify-center text-sm text-teal-500">
              new
            </span>
          </div>
        </div>
      </div>
      <Progress progress={Math.ceil((learned / total) * 100)} />
    </div>
  );
};

export default DeckViewerWrapper;
