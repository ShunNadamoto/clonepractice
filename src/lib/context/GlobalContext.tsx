import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
  ReactNode,
} from 'react';

type GlobalContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const useGlobalContext = () => useContext(GlobalContext);

type Props = { children: ReactNode };

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [count, setCount] = useState(100);
  const [userId, setUserId] = useState('');

  const value = {
    count,
    setCount,
    userId,
    setUserId,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
