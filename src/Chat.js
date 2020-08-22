import React, { useEffect } from "react";
var ComfyJS = require("comfy.js");
var randomWords = require("random-words");

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
    ComfyJS.onCommand = (user, command, message, flags, extra) => {
      if (flags.broadcaster || flags.mod || user.toLowerCase() === "drfate") {
        if (command === "start") {
          let word = randomWords();
          console.log(word);
          setCorrectLetters([]);
          setWrongLetters([]);
          setSelectedword(word);
          setPlayable(true);
          console.log(playable);
        }
      }
    };

    return () => {};
    // eslint-disable-next-line
  }, [setSelectedword]);

  useEffect(() => {
    ComfyJS.Init(channel);
    return () => {};
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default Chat;
