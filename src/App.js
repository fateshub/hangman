import React ,{useState, useEffect} from 'react';
import './App.css';
import Figure from './Figure';// the component for the figure 
import WrongLetter from './WrongLetter';//component that handles displaying wrong letters
import Word from './Word'//component that handles displaying correct letters
import Chat from './Chat'//component that handles getting chat messages 
import GameEnd from './GameEnd'////component that handles game end 



// geting the word from URL
let params = (new URL(document.location)).searchParams;
let selectedWord = params.get('Word'); 
let channel = params.get('Channel'); 


function App() {
  const [playable, setPlayable] = useState(true)// prop to show if the game is playable or not 
  const [correctLetters, setCorrectLetters] = useState([])// prop that has correct letters 
  const [wrongLetters, setWrongLetters] = useState([])// prop that has wrong letters 


 

  return (
    <div className="App">
          <Figure wrongLetters={wrongLetters}/>
          <WrongLetter wrongLetters={wrongLetters}/>
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          <Chat channel = { channel }setPlayable= {setPlayable} playable ={playable} selectedWord = {selectedWord} wrongLetters={wrongLetters} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} setWrongLetters={setWrongLetters} />
          <GameEnd correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} />

    </div>
  );
}



export default App;
