import { Dispatch, SetStateAction, createContext, useState } from 'react';
import ComponentA from '../ComponentA';

type UserCountContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
export const UserCountContext = createContext<UserCountContextType>({} as UserCountContextType);

const Parent = () => {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      <UserCountContext.Provider value={value}>
        <ComponentA />
      </UserCountContext.Provider>
    </div>
  );
};

export default Parent;
