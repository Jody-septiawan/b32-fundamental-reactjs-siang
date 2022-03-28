import React from 'react';

function Event() {
  //Create function here
  function Greeting() {
    alert('Hello everyone have a nice day');
  }

  return (
    // Code Inside div
    <div>
      <p onMouseOver={() => alert('Click paragraph element')}>
        If you press 'Click Here' then an alert will appear
      </p>
      <button onClick={() => alert('Hello full-stack bootcamp participants')}>
        Click Here
      </button>

      <p>If you press 'Greeting' then an alert will appear</p>
      <button onClick={Greeting}>Greeting</button>
    </div>
  );
}

export default Event;
