import axios from 'axios';
import { useState, useEffect } from 'react';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

export const useGetPersonList = () => {
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refetchPersonList, setRefetchPersonList] = useState(false);

  useEffect(() => {
    const getPersonList = async () => {
      const res = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
      setPersonList(res.data.data);
    };

    getPersonList();
  }, [refetchPersonList]);

  const refetch = () => setRefetchPersonList(!refetchPersonList);

  return { data: personList, refetch };
};
