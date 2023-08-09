import React, { useContext } from 'react';

const HogeContext = React.createContext('');

function Child() {
  const name = useContext(HogeContext);
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  const name = '田中さん';
  return (
    <HogeContext.Provider value={name}>
      <Child />
    </HogeContext.Provider>
  );
}
