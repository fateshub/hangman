import React,{ useEffect} from 'react'
const tmi = require('tmi.js');


 
        

 const Chat = ({channel , playable ,wrongLetters, selectedWord, correctLetters, setCorrectLetters, setWrongLetters }) => {
    // init tmi 
    const client = new tmi.Client({
        connection: {
            secure: true,
            reconnect: true
        },
        channels: [ channel ]
    });
    // connect tmi 
    client.connect();

    useEffect(() => {
        //listen for chat message
    client.on('message', (channel, tags, message, self) => {
//process the message
        if(playable && message.length === 1){
            const letter = message.toLowerCase();
            if ( selectedWord.includes(letter) ) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } 
            } else {
              if ( !wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } 
            }
        }

        
      return () => {
          console.log("Clean up")
      }}
       );
    },[]);
    return (
        <>
            
        </>
    )
}

export default Chat
