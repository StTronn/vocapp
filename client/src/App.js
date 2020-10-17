import React from "react";
import "./App.css";

const data = [
  {
    id: 1,
    name: "vocabGRE",
    decks: [
      {
        id: 1,
        cards: [
          { front: "stren", back: "strict in lifestyle and nature" },
          { front: "etheral", back: "Delicate in touch, out of this world" },
        ],
      },

      {
        id: 2,
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
    <div className="App">
      {data.map((item, id) => (
        <div> {item.name} </div>
      ))}
    </div>
  );
}

export default App;
