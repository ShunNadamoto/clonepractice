import React, { useContext } from 'react';

const FugaContext = React.createContext('');

function Child() {
  const title = useContext(FugaContext);
  return <h1>書籍1位, {title}</h1>;
}

export default function APP() {
  const title = 'TypeScript入門';
  return (
    <FugaContext.Provider value={title}>
      <Child />
    </FugaContext.Provider>
  );
}
