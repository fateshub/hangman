import React,{useEffect} from 'react'
import {checkWin} from './checker'


const End = ({correctLetters, wrongLetters, selectedWord, setPlayable}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = false;
  
    if( selectedWord.length >0 && checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
      finalMessage = 'Chat is 5Head';
      playable = false;
      setTimeout(function(){ alert("Hello"); }, 3000);

    } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
      finalMessage = 'Chat Sucks lol';
      finalMessageRevealWord = `the word was: ${selectedWord}`;
      playable = false;
      setTimeout(function(){ alert("Hello"); }, 3000);
      document.getElementsByClassName("popup-container").style.display = "block";
    }
    else{
        playable = true;
    }
  
    useEffect(() => {
      setPlayable(playable);
    });
    
    return (
      <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
        </div>
      </div>
    )
  }
  
export default End
