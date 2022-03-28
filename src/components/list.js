import React from 'react';

export default function List(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.year}</h4>
      <button onClick={props.onClick}>Click Me</button>
    </div>
  );
}
