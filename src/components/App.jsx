import React from "react";
import Card from "./Card";
import emojipedia from "./emojipedia";

function Emoji(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Emoji)}</dl>
    </div>
  );
}

export default App;
