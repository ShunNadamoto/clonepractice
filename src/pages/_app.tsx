import '../styles/globals.css';
import { QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { queryClient } from '@/config/reactQuery';
import useUserCount from '@/hooks/useUserCount';

type UserCountContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

type GlobalContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const UserCountContext = createContext<UserCountContextType>({} as UserCountContextType);

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export default function App({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0);

  const userCountValue = useUserCount();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalContext.Provider value={{ count, setCount }}>
          <UserCountContext.Provider value={userCountValue}>
            <Component {...pageProps} />
          </UserCountContext.Provider>
        </GlobalContext.Provider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
