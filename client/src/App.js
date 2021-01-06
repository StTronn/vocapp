import React from "react";
import SetViewerWrapper from "./components/SetViewer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DeckViewerWrapper from "./components/DeckViewer";
import Deck from "./components/Deck";
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
  return (
    <>
      <Nav />
      <Router>
        <div className=" mx-4  lg:mx-16">
          <Switch>
            <Route path="/setviewer">
              <SetViewerWrapper sets={data} />
            </Route>
            <Route path="/set">
              <DeckViewerWrapper />
            </Route>
            <Route exact path="/deck">
              <Deck />
            </Route>
            <Route exact path="/">
              <SetViewerWrapper sets={data} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
