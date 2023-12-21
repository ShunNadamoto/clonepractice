import type { NextPage } from 'next';
import router, { useRouter } from 'next/router';

const Practice: NextPage = () => {
  const myArray = [1, 2, 3, 4];
  myArray.push(5);
  console.log(myArray);

  const myArray2 = [1, 2, 3, 4];
  myArray2.unshift(0);
  console.log(myArray2);

  const Array1 = [1, 2, 3];
  const Array2 = [4, 5, 6];
  const comibinedArray = Array1.concat(Array2);
  console.log(comibinedArray);

  const myArray3 = [1, 2, 3];
  myArray3.pop();
  console.log(myArray3);

  const myArray4 = [1, 2, 3, 4];
  myArray4.shift();
  console.log(myArray4);

  const originArray = [1, 2, 3];
  const newArray = originArray.slice(0, 1);
  console.log(newArray);

  const myArray5 = [2, 4, 6, 8, 10];
  //   const Element1 = myArray5.splice(0, 2);
  //   console.log(Element1);
  const Element2 = myArray5.splice(2, 3);
  console.log(Element2);

  const sum = (num1: number, num2: number) => num1 + num2;
  console.log(sum(1, 3));

  const person = (name: string, age: number): string => {
    return `${name}は${age}歳です`;
  };
  console.log(person('長男', 5));

  return <></>;
};

export default Practice;
