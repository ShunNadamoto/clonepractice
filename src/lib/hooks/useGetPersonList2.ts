import axios from 'axios';
import { useState, useEffect } from 'react';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

export const useGetPersonList2 = () => {
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refetchPersonList, setRefetchPersonList] = useState(false);
  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        console.log(response.data.data);
        setPersonList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [refetchPersonList]);

  const refetch = () => setRefetchPersonList(!refetchPersonList);

  return { personList, refetch };
};
