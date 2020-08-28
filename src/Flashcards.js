import React, { useState } from "react";

const Flashcards = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flip ? flashcard.answer : flashcard.question}
      </div>
      <ul className="back">
        {flashcard.answer.map((list) => {
          return <li key={flashcard.id}>{list}</li>;
        })}
      </ul>
    </div>
  );
};
export default Flashcards;
