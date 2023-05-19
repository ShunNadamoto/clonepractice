import axios from 'axios';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

export const DayStudy2 = () => {
  function useListQuery() {
    const [personList, setPersonList] = useState<Person[]>([]);
    const { data, isLoading, isError } = useQuery('personList', async () => {
      const { data } = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
      return data;
    });

    return {
      data,
      isLoading,
      isError,
    };
  }
};
