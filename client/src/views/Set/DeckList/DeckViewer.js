import React from "react";
import { useHistory } from "react-router-dom";
import { createCards, Deck, statEn } from "lt-spaced-repetition-js";
import Progress from "../../../components/Progress";

const DeckViewer = ({ deck }) => {
  const { id, setId, name } = deck;
  //make the Deck Object
  const cards = new Deck({ cards: createCards(deck.cards) });
  //calculate metadata
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

export default DeckViewer;
