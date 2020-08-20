import React, { useEffect } from "react";
var ComfyJS = require("comfy.js");

const Chat = ({
  setSelectedword,
  channel,
  setPlayable,
  playable,
  wrongLetters,
  selectedWord,
  correctLetters,
  setCorrectLetters,
  setWrongLetters,
}) => {
  // init tmi

  // connect tmi
  // eslint-disable-next-line
  useEffect(() => {
    //listen for chat message
    ComfyJS.onChat = (user, message, flags, self, extra) => {
      //process the message
      if (playable && message.length === 1) {
        const letter = message.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          }
        }
      }
    };
    return () => {};
    // eslint-disable-next-line
  }, [playable, selectedWord]);

  useEffect(() => {
    ComfyJS.onWhisper = ( user, message, flags, self, extra ) => {
      if (flags.broadcaster) {
        setCorrectLetters([]);
        setWrongLetters([]);
        setSelectedword(message.toLowerCase());
        setPlayable(true);
        console.log(playable);
        console.log(message.toLowerCase());
      }
    };

    return () => {};
    // eslint-disable-next-line
  }, [setSelectedword]);

  useEffect(() => {
    ComfyJS.Init( channel, process.env.REACT_APP_OAUTH );
    return () => {};
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default Chat;
