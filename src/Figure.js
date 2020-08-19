import React from "react";

const Figure = ({ wrongLetters }) => {
  return (
    <div className="game-container">
      <svg height="250" width="200" className="figure-container">
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />
        {wrongLetters.length > 2 && <circle cx="140" cy="70" r="20" />}
        {wrongLetters.length > 4 && <line x1="140" y1="90" x2="140" y2="150" />}
        {wrongLetters.length > 6 && (
          <line x1="140" y1="120" x2="120" y2="100" />
        )}
        {wrongLetters.length > 8 && (
          <line x1="140" y1="120" x2="160" y2="100" />
        )}
        {wrongLetters.length > 10 && (
          <line x1="140" y1="150" x2="120" y2="180" />
        )}
        {wrongLetters.length > 12 && (
          <line x1="140" y1="150" x2="160" y2="180" />
        )}
      </svg>
    </div>
  );
};

export default Figure;
