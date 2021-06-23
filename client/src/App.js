import React, { useRef } from "react";
import DeckDropDown from "./components/DeckDropDown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Set from "./views/Set";
import Deck from "./views/Deck";
import Home from "./views/Home";
import Login from "./views/Login";

import Nav from "./components/Nav";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Gre Vocab 500",
    tag: "Vocabulary",
    desc: "Top 500 words occuring in GRE",
    decksCount: 10,
    CardsCount: 500,
    progress: 75,
    decks: [
      {
        id: 1,
        name: "Common 1",
        Learned: 26,
        New: 26,
        total: 52,
        Starred: 0,
        cards: [
          { front: "stren", back: "strict in lifestyle and nature" },
          { front: "etheral", back: "Delicate in touch, out of this world" },
        ],
      },

      {
        id: 2,
        name: "Common 2",
        Learned: 26,
        New: 26,
        Starred: 0,
        total: 52,
        cards: [
          { front: "stren", back: "strict in lifestyle and nature" },
          { front: "etheral", back: "Delicate in touch, out of this world" },
        ],
      },
    ],
  },
];

function App() {
  const deckRef = useRef();
  return (
    <>
      <Router>
        <DeckDropDown deckRef={deckRef} />
        <Nav />
          <Switch>
            <Route path="/setviewer">
              <Set />
            </Route>
            <Route path="/set">
              <Set />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/deck">
              <Deck ref={deckRef} />
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
