import { NextPage } from 'next';
import { useState } from 'react';

const WeeklyTest: NextPage = () => {
  const test = (params1: number, params2: number) => {
    return params1 + params2;
  };

  const [isDisPlayName, setIsDisplayName] = useState(false);

  const sum = (num1: number, num2: number) => num1 + num2;
  const sum2 = (num3: number, num4: number) => {
    return num3 + num4;
  };

  type Person = {
    id: string;
    name: string;
    age: number;
  };

  const [personList, setPersonList] = useState<Person[]>([
    { id: '1', name: '佐藤', age: 10 },
    { id: '2', name: '鈴木', age: 15 },
    { id: '3', name: '佐伯', age: 20 },
  ]);
  const testList = [1, 2, 3, 4, 5, 6, 7];
  const test1 = testList.filter((elem) => elem === 4);
  console.log(test1);
  const test2 = testList.every((elem) => elem === 4);
  console.log(test2);
  const test3 = testList.some((elem) => elem === 4);
  console.log(test3);
  const test4 = testList
    .filter((elem) => elem !== 4)
    .map((elem) => elem + 1)
    .join(':::');
  console.log(test4);
  console.log(testList.includes(5));

  return (
    <>
      <div>テスト練習</div>
      {personList.map((elem) => {
        <div key={elem.id}>
          <div>{elem.id}</div>
          <div>{elem.name}</div>
          <div>{elem.age}</div>
        </div>;
      })}

      <button onClick={() => setIsDisplayName(!isDisPlayName)}>ON/OFF切り替え</button>
    </>
  );
};

export default WeeklyTest;
