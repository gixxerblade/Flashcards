import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'
const data = require("./questions.json");
function App() {
  const [flashcards, setFlashcards] = useState(data);
  return (
    <div className="App">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
