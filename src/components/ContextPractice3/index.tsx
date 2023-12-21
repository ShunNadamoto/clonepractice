import React, { useContext } from 'react';

const NameContext = React.createContext('');

function Child() {
  const name = useContext(NameContext);
  return <h1>Hello, {name}さん</h1>;
}

export default function App() {
  const name = '田中さん';
  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  );
}
