import { createContext, useState, useContext, Children, SetStateAction, Dispatch } from 'react';

type UserCountContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
const countContext = createContext<UserCountContextType>({} as UserCountContextType);
