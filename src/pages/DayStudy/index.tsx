import { NextPage } from 'next';

const sum = (num1: number, num2: number) => num1 + num2;
console.log(sum(1, 4));

const person = (name: string, age: number): string => {
  return `${name}さんは${age}歳です`;
};

const numberList = [1, 2, 3];
const [num1, num2, num3] = numberList;
console.log(num1, num2, num3);

const person2 = { name: 'aaa', sex: '男' };
console.log(person2.name);

const drinks = ['オレンジジュース', '牛乳', 'コーラ'];
console.log(drinks[1][0]);

const people = [
  { name: 'aaa', age: 10, sex: '男' },
  { name: 'bbb', age: 20, sex: '女' },
];
console.log(people[0].name);
console.log(people[1].sex);

const foods_group = {
  vegetables: ['きゅうり', 'トマト', 'ジャガイモ'],
  fruits: ['みかん', 'りんご', 'ばなな'],
};
console.log(foods_group.fruits[2]);

const presons = {
  Tanaka: { age: 20, sex: '男' },
  Goto: { age: 25, sex: '女' },
};
console.log(presons.Goto.age);

const myArray = [1, 3, 5];
myArray.push(7);

const myArray2 = [1, 3, 5];
myArray2.unshift(0);
console.log(myArray2);

const myArray3 = [1, 3, 5];
myArray3.pop();
console.log(myArray3);

const myArray4 = [1, 3, 5];
myArray4.shift();
console.log(myArray4);

const myArray5 = [1, 3, 5];
myArray5.splice(2, 1);
console.log(myArray5);
const myArray6 = [1, 3, 5, 7, 9];
myArray6.splice(0, 0, 0);
console.log(myArray6);

let originArray = [1, 2, 3, 4, 5];
let newArray = originArray.slice(1, 5);
console.log(newArray);

const DayStudy: NextPage = () => {
  return <></>;
};

export default DayStudy;
