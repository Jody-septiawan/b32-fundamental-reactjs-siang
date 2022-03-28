import React from 'react';

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return 'Full-Stack';
  }

  //Create a variable here
  const companyName = 'Dumbways.Id';

  return (
    // Code Inside div
    <div>
      <p>
        Welcome To {companyName} Class {getMajor()}
      </p>
    </div>
  );
}

export default EmbedExpression;
