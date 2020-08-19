import React, { useState } from "react";
import "./App.css";
import Figure from "./Figure"; // the component for the figure
import WrongLetter from "./WrongLetter"; //component that handles displaying wrong letters
import Word from "./Word"; //component that handles displaying correct letters
import Chat from "./Chat"; //component that handles getting chat messages
import End from "./End"; //component that handles getting chat messages

// geting the word from URL
let params = new URL(document.location).searchParams;
let channel = params.get("Channel");

function App() {
  const [playable, setPlayable] = useState(false); // prop to show if the game is playable or not
  const [selectedWord, setSelectedword] = useState(""); // prop that has word
  const [correctLetters, setCorrectLetters] = useState([]); // prop that has correct letters
  const [wrongLetters, setWrongLetters] = useState([]); // prop that has wrong letters
 
  return (
    <div className="App">
      <Figure wrongLetters={wrongLetters} />
      <WrongLetter wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Chat
        setSelectedword={setSelectedword}
        channel={channel}
        setPlayable={setPlayable}
        playable={playable}
        selectedWord={selectedWord}
        wrongLetters={wrongLetters}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        setWrongLetters={setWrongLetters}
      />
      <End
        setPlayable={setPlayable}
        playable={playable}
        selectedWord={selectedWord}
        wrongLetters={wrongLetters}
        correctLetters={correctLetters}
      />
    </div>
  );
}

export default App;
