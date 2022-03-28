import React, { useState } from 'react';

//Create Component PrivatePage
const PrivatePage = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

//Create Component GuestPage
const GuestPage = (props) => {
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={props.login}>login</button>
    </div>
  );
};

function ConditionRenderin() {
  //init State
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);

  if (isLogin == true) {
    // render PrivatePage component
  } else {
    // render GuestPage component
  }

  return (
    <div>
      {isLogin == true ? (
        <PrivatePage logout={() => setIsLogin(!isLogin)} />
      ) : (
        <GuestPage login={() => setIsLogin(!isLogin)} />
      )}
    </div>
  );
}

export default ConditionRenderin;
