import React from 'react';
import { useState, useRef } from 'react';
export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    // current is THE ONLY property that all ref has, it will have access to all the properties of the element
    // in this case, the <input /> element
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
