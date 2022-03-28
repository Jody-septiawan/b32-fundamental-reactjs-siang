import React from 'react';

// import component Header
import Header from './components/header';

function Component() {
  return (
    //   Code Here
    <div>
      <Header />
      <Content />
    </div>
  );
}

// Create a new component here
function Content() {
  return (
    <>
      <h1>This Is A Content</h1>
      <button>Click Me</button>
    </>
  );
}

export default Component;
