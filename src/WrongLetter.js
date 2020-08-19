import React from "react";

function WrongLetter({ wrongLetters }) {
  return (
    <div className="wrong-letters-container">
      <div>
        <p>Wrong letters</p>
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
}

export default WrongLetter;
