import React, { useState } from 'react';

function State() {
  //init State

  const [counter, setCounter] = useState(10);

  console.log(counter);

  //Create Function Add
  const Add = () => {
    setCounter(counter + 1);
  };

  //Create Function Less
  const Less = () => {
    setCounter(counter - 1);
  };

  return (
    // Code Inside div
    <div>
      <h2>{counter}</h2>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
