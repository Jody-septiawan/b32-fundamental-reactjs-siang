import React from 'react';

//Import Components
import List from './components/list';

function Props() {
  const author = {
    name: 'Dani D',
    address: 'Semarang',
  };

  const onClick = () => {
    alert('You click button');
  };

  const peoples = [
    {
      name: 'Allif',
    },
    {
      name: 'Silvy',
    },
    {
      name: 'Afif',
    },
  ];

  return (
    // Code Inside div
    <div>
      <img
        src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        alt=""
        style={{ width: '500px' }}
      />

      <List name="MBW" tax={false} year={2015} author={author} />
      <List name="Mercedes-Benz" />
      <List name="Lamborghini" onClick={onClick} />
      <List name="Ducati" people={peoples[1]} />
    </div>
  );
}

export default Props;
