import { NextPage } from 'next';

const sum = (num1: number, num2: number) => num1 + num2;
console.log(sum(1, 5));

const person = (name: string, age: number): string => {
  return `${name}さんは${age}歳です。`;
};
console.log(person('松岡', 41));

const numberList = [1, 2, 3];
const [num1, num2, num3] = numberList;
console.log(num1, num2, num3);

const person2 = { name: '宏樹', age: 41 };
console.log(person2.name);

const foods = ['カレー', 'ラーメン', 'お寿司'];
console.log(foods[0]);

const drinkGroup = {
  alcol: ['ビール', 'カクテル', '焼酎'],
  juice: ['オレンジ', 'りんご', 'ぶどう'],
};
console.log(drinkGroup.alcol[2]);

const people = [
  { name: '山田', age: 3, sex: '男' },
  { name: '鈴木', age: 5, sex: '女' },
];
console.log(people[1].name);

const persons = {
  Sasaki: { age: 25, sex: '男性' },
  Suzuki: { age: 30, sex: '女性' },
};
console.log(persons.Sasaki.sex);

const myArray = [1, 2, 3];
myArray.push(6);
console.log(myArray);

const myArray2 = [1, 2, 3];
myArray2.unshift(0);
console.log(myArray2);

const myArray3 = [1, 2, 3, 4];
myArray3.pop();
console.log(myArray3);

const myArray4 = [1, 2, 3, 4];
myArray4.shift();
console.log(myArray4);

const myArray5 = [1, 2, 3];
myArray5.splice(0, 2);
console.log(myArray5);

let originArray = [1, 3, 5, 7, 9];
let newArray = originArray.slice(0, 2);
console.log(newArray);

const javascriptTest2: NextPage = () => {
  return <></>;
};

export default javascriptTest2;
